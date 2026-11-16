/* ─────────────────────────────────────────────────────────────
   Tweet Sil — x.com sekmesinin içinde çalışan silme aracı.

   Bu dosya derleme sırasında tek bir IIFE'ye çevrilir ve
   /tweet-sil/ sayfasında bookmarklet + konsol kodu olarak sunulur.
   Hiçbir yere veri göndermez: istekler yalnızca x.com'a, kullanıcının
   kendi açık oturumuyla gider. Arşiv dosyası tarayıcıda okunur.

   X'in web sitesinin kendi kullandığı GraphQL istekleri kullanılır.
   X bunları değiştirirse (queryId) aşağıdaki sabitler güncellenmeli.
   ───────────────────────────────────────────────────────────── */

const API = {
  deleteTweet: "/i/api/graphql/VaenaVgh5q5ih7kvyVjgtg/DeleteTweet",
  unfavorite: "/i/api/graphql/ZYKSe-w7KEslx3JhSIk5LA/UnfavoriteTweet",
  // x.com'un web istemcisine gömülü, herkese açık bearer.
  bearer:
    "Bearer AAAAAAAAAAAAAAAAAAAAANRILgAAAAAAnNwIzUejRCOuH5E6I8xnZz4puTs%3D1Zv7ttfk8LF81IUq16cHjhLTvJu4FA33AGWWjCpTnA",
}

const PANEL_ID = "kheshig-tweet-sil"
const STORE_PREFIX = "kheshig-tweet-sil:v1:"

type Kind = "tweet" | "retweet" | "like"
type Job = { id: string; kind: Kind }

const SPEEDS = {
  yavas: { label: "Yavaş (en güvenli)", ms: 1500 },
  normal: { label: "Normal", ms: 600 },
  hizli: { label: "Hızlı (kilit riski artar)", ms: 150 },
} as const
type Speed = keyof typeof SPEEDS

/* ── yardımcılar ─────────────────────────────────────────── */

const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms))

function cookie(name: string): string | null {
  const m = `; ${document.cookie}`.match(new RegExp(`;\\s*${name}=([^;]+)`))
  return m ? decodeURIComponent(m[1]) : null
}

function transactionId(): string {
  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  return Array.from(crypto.getRandomValues(new Uint8Array(94)), (b) => chars[b % 62]).join("")
}

function fmtNum(n: number) {
  return n.toLocaleString("tr-TR")
}

function fmtDuration(sec: number) {
  if (!isFinite(sec) || sec < 0) return "—"
  const h = Math.floor(sec / 3600)
  const m = Math.floor((sec % 3600) / 60)
  const s = Math.floor(sec % 60)
  if (h > 0) return `${h} sa ${m} dk`
  if (m > 0) return `${m} dk ${s} sn`
  return `${s} sn`
}

type Style = Partial<Record<string, string>>
function el<K extends keyof HTMLElementTagNameMap>(
  tag: K,
  style: Style = {},
  text?: string,
): HTMLElementTagNameMap[K] {
  const e = document.createElement(tag)
  Object.assign(e.style, style)
  if (text !== undefined) e.textContent = text
  return e
}

/* ── arşiv okuma ─────────────────────────────────────────── */

type Parsed = { tweets: string[]; retweets: string[]; likes: string[]; headersOnly: boolean }

/** `window.YTD.tweets.part0 = [...]` biçimindeki arşiv dosyasını çözer. */
function parseArchiveFile(name: string, text: string, into: Parsed) {
  const cut = text.indexOf("=")
  if (cut < 0) throw new Error(`${name}: X arşiv dosyasına benzemiyor.`)
  const head = text.slice(0, cut)
  const rows: unknown = JSON.parse(text.slice(cut + 1).trim().replace(/;\s*$/, ""))
  if (!Array.isArray(rows)) throw new Error(`${name}: beklenmeyen içerik.`)

  if (head.includes(".like.")) {
    for (const r of rows) {
      const id = r?.like?.tweetId
      if (id) into.likes.push(String(id))
    }
  } else if (head.includes(".tweet_headers.")) {
    into.headersOnly = true
    for (const r of rows) {
      const id = r?.tweet?.tweet_id
      if (id) into.tweets.push(String(id))
    }
  } else if (head.includes(".tweets.") || head.includes(".tweet.")) {
    for (const r of rows) {
      const t = r?.tweet
      const id = t?.id_str ?? t?.id
      if (!id) continue
      const text = String(t?.full_text ?? t?.text ?? "")
      ;(text.startsWith("RT @") ? into.retweets : into.tweets).push(String(id))
    }
  } else {
    throw new Error(
      `${name}: bu dosya desteklenmiyor. tweets.js, tweet-headers.js veya like.js seçin.`,
    )
  }
}

/* ── kalıcı ilerleme (x.com'un localStorage'ında) ───────── */

function storeKey() {
  // twid çerezi: "u=1234567" — hesap başına ayrı ilerleme.
  const twid = cookie("twid") ?? "anon"
  return STORE_PREFIX + twid.replace(/^u=/, "")
}

function loadDone(): Set<string> {
  try {
    const raw = localStorage.getItem(storeKey())
    return new Set(raw ? (JSON.parse(raw) as string[]) : [])
  } catch {
    return new Set()
  }
}

function saveDone(done: Set<string>) {
  try {
    localStorage.setItem(storeKey(), JSON.stringify([...done]))
  } catch {
    /* depolama dolu ya da kapalı: ilerleme yalnızca bu oturumda kalır */
  }
}

/* ── X isteği ────────────────────────────────────────────── */

type Result =
  | { ok: true; waitAfter?: number } // waitAfter: kota bitti, sonraki istekten önce bekle (sn)
  | { ok: false; retryAfter: number } // rate limit: saniye
  | { ok: false; fatal: string }
  | { ok: false; failed: string }

async function send(job: Job): Promise<Result> {
  const url = job.kind === "like" ? API.unfavorite : API.deleteTweet
  const queryId = url.split("/")[4]
  const variables = job.kind === "like" ? { tweet_id: job.id } : { tweet_id: job.id, dark_request: false }

  let res: Response
  try {
    res = await fetch(url, {
      method: "POST",
      credentials: "include",
      signal: AbortSignal.timeout(15000),
      headers: {
        authorization: API.bearer,
        "content-type": "application/json",
        "x-client-transaction-id": transactionId(),
        "x-csrf-token": cookie("ct0") ?? "",
        "x-twitter-active-user": "yes",
        "x-twitter-auth-type": "OAuth2Session",
      },
      body: JSON.stringify({ variables, queryId }),
    })
  } catch {
    return { ok: false, failed: "bağlantı hatası / zaman aşımı" }
  }

  const reset = Number(res.headers.get("x-rate-limit-reset"))
  const waitForReset = () => Math.max(30, Math.ceil(reset - Date.now() / 1000) + 2)

  if (res.status === 429 || res.status === 420) {
    return { ok: false, retryAfter: reset ? waitForReset() : 300 }
  }
  if (res.status === 401) return { ok: false, fatal: "Oturum geçersiz. x.com'a yeniden giriş yapıp tekrar deneyin." }
  if (res.status === 403) return { ok: false, failed: "403 — X isteği reddetti" }
  if (!res.ok) return { ok: false, failed: `HTTP ${res.status}` }

  let body: { errors?: Array<{ code?: number; message?: string }> } = {}
  try {
    body = await res.json()
  } catch {
    /* boş gövde: başarılı say */
  }
  const err = body.errors?.[0]
  if (err) {
    const msg = String(err.message ?? "")
    // 144: tweet yok (zaten silinmiş). Beğenide "not found" benzeri durumlar.
    if (err.code === 144 || /not found|No status found|does not exist/i.test(msg)) {
      return { ok: true }
    }
    if (err.code === 88) return { ok: false, retryAfter: reset ? waitForReset() : 300 }
    if (err.code === 326 || /locked|suspended/i.test(msg)) {
      return { ok: false, fatal: `X hesabı geçici olarak kilitledi: ${msg}. x.com'da kilidi açıp daha yavaş hızla devam edin.` }
    }
    return { ok: false, failed: msg || `hata kodu ${err.code}` }
  }

  const remaining = res.headers.get("x-rate-limit-remaining")
  if (remaining !== null && Number(remaining) < 1 && reset) {
    return { ok: true, waitAfter: waitForReset() }
  }
  return { ok: true }
}

/* ── panel ───────────────────────────────────────────────── */

const C = {
  paper: "#f3f0e8",
  card: "#fbfaf6",
  ink: "#16150f",
  soft: "#4a463d",
  line: "#d9d4c7",
  brand: "#8a0f0b",
}

function button(text: string, primary = false) {
  const b = el("button", {
    font: "500 14px/1 system-ui, sans-serif",
    padding: "11px 16px",
    borderRadius: "999px",
    border: primary ? "none" : `1px solid ${C.ink}40`,
    background: primary ? C.ink : "transparent",
    color: primary ? C.paper : C.ink,
    cursor: "pointer",
  }, text)
  b.type = "button"
  return b
}

function checkbox(label: string) {
  const wrap = el("label", { display: "flex", gap: "8px", alignItems: "center", cursor: "pointer", margin: "6px 0" })
  const input = el("input")
  input.type = "checkbox"
  input.style.accentColor = C.brand
  const span = el("span", {}, label)
  wrap.append(input, span)
  return { wrap, input, span }
}

function main() {
  const host = location.hostname.replace(/^www\./, "")
  if (host !== "x.com" && host !== "twitter.com") {
    if (confirm("Tweet Sil yalnızca x.com üzerinde çalışır. x.com'u açayım mı?\n\nAçıldıktan sonra butona tekrar tıklayın.")) {
      location.href = "https://x.com/home"
    }
    return
  }
  if (document.getElementById(PANEL_ID)) {
    document.getElementById(PANEL_ID)!.scrollIntoView()
    return
  }
  if (!cookie("ct0")) {
    alert("x.com'da oturum açık görünmüyor. Önce giriş yapın, sonra butona tekrar tıklayın.")
    return
  }

  /* durum */
  const parsed: Parsed = { tweets: [], retweets: [], likes: [], headersOnly: false }
  const done = loadDone()
  let running = false
  let stopRequested = false
  let failed: Job[] = []

  /* iskelet */
  const panel = el("div", {
    position: "fixed",
    top: "16px",
    right: "16px",
    zIndex: "2147483647",
    width: "min(380px, calc(100vw - 32px))",
    maxHeight: "calc(100vh - 32px)",
    overflowY: "auto",
    background: C.paper,
    color: C.ink,
    border: `1px solid ${C.line}`,
    borderRadius: "16px",
    boxShadow: "0 20px 50px rgba(0,0,0,.25)",
    font: "14px/1.5 system-ui, -apple-system, Segoe UI, sans-serif",
    padding: "18px",
    boxSizing: "border-box",
  })
  panel.id = PANEL_ID

  const top = el("div", { display: "flex", justifyContent: "space-between", alignItems: "center", gap: "8px" })
  const title = el("div", { font: "700 18px/1.2 system-ui, sans-serif", letterSpacing: "-0.01em" }, "Tweet Sil")
  const tag = el("span", { font: "500 10px/1 ui-monospace, monospace", letterSpacing: ".15em", textTransform: "uppercase", color: C.brand, marginLeft: "8px" }, "kheshig.studio")
  tag.lang = "en" // x.com tr dilindeyken büyük harf "KHESHİG" olmasın
  title.append(tag)
  const close = el("button", { border: "none", background: "transparent", fontSize: "22px", lineHeight: "1", cursor: "pointer", color: C.soft, padding: "4px 8px" }, "×")
  close.type = "button"
  close.setAttribute("aria-label", "Kapat")
  top.append(title, close)

  const step = (n: string, t: string) =>
    el("div", { font: "600 11px/1 ui-monospace, monospace", letterSpacing: ".12em", textTransform: "uppercase", color: C.soft, margin: "18px 0 8px" }, `${n} · ${t}`)

  /* 1 · dosya */
  const fileInput = el("input")
  fileInput.type = "file"
  fileInput.multiple = true
  fileInput.accept = ".js"
  fileInput.style.display = "none"
  const pick = button("Arşiv dosyalarını seç")
  pick.style.width = "100%"
  const fileHint = el("div", { color: C.soft, fontSize: "12.5px", marginTop: "8px" },
    "Arşiv zip'ini açın, data klasöründen tweets.js (varsa tweets-part1.js, part2…) ve isterseniz like.js dosyasını birlikte seçin.")
  const summary = el("div", { marginTop: "10px", padding: "10px 12px", background: C.card, border: `1px solid ${C.line}`, borderRadius: "10px", display: "none", whiteSpace: "pre-line" })

  /* 2 · seçenekler */
  const optTweets = checkbox("Tweetler ve yanıtlar")
  const optRetweets = checkbox("Retweetler")
  const optLikes = checkbox("Beğeniler (beğeniyi geri al)")
  optTweets.input.checked = true
  optRetweets.input.checked = true

  const speedSel = el("select", { width: "100%", padding: "8px", borderRadius: "8px", border: `1px solid ${C.line}`, background: C.card, color: C.ink, marginTop: "8px", font: "inherit" })
  for (const [k, v] of Object.entries(SPEEDS)) {
    const o = el("option", {}, v.label)
    o.value = k
    speedSel.append(o)
  }
  speedSel.value = "normal"

  const consent = checkbox("Silinen tweetlerin geri getirilemeyeceğini anlıyorum.")
  consent.wrap.style.marginTop = "12px"
  consent.span.style.fontWeight = "600"

  /* 3 · çalıştır */
  const start = button("Silmeyi başlat", true)
  start.style.width = "100%"
  start.disabled = true
  start.style.opacity = ".4"
  const stop = button("Durdur")
  stop.style.width = "100%"
  stop.style.display = "none"
  const retry = button("Başarısız olanları tekrar dene")
  retry.style.width = "100%"
  retry.style.display = "none"
  retry.style.marginTop = "8px"

  const bar = el("progress", { width: "100%", height: "10px", marginTop: "14px", accentColor: C.brand, display: "none" })
  const status = el("div", { marginTop: "8px", fontVariantNumeric: "tabular-nums", whiteSpace: "pre-line" })
  const warn = el("div", { color: C.soft, fontSize: "12.5px", marginTop: "12px" },
    "Bu sekmeyi açık ve önde tutun — arka plana alınan sekmeleri tarayıcı yavaşlatır. Kapatırsanız sorun değil: dosyaları yeniden seçtiğinizde kaldığı yerden devam eder.")

  panel.append(
    top,
    step("1", "Arşiv"), pick, fileInput, fileHint, summary,
    step("2", "Ne silinsin?"), optTweets.wrap, optRetweets.wrap, optLikes.wrap, speedSel, consent.wrap,
    step("3", "Başlat"), start, stop, retry, bar, status, warn,
  )
  document.body.append(panel)

  /* mantık */
  function queue(): Job[] {
    const jobs: Job[] = []
    const add = (ids: string[], kind: Kind) => {
      for (const id of ids) if (!done.has(`${kind}:${id}`)) jobs.push({ id, kind })
    }
    if (optTweets.input.checked) add(parsed.tweets, "tweet")
    if (optRetweets.input.checked) add(parsed.retweets, "retweet")
    if (optLikes.input.checked) add(parsed.likes, "like")
    return jobs
  }

  function refresh() {
    const total = parsed.tweets.length + parsed.retweets.length + parsed.likes.length
    if (total > 0) {
      summary.style.display = "block"
      const prev = done.size
      summary.textContent =
        (parsed.headersOnly
          ? `${fmtNum(parsed.tweets.length)} tweet (retweetler dahil)\n`
          : `${fmtNum(parsed.tweets.length)} tweet / yanıt\n${fmtNum(parsed.retweets.length)} retweet\n`) +
        `${fmtNum(parsed.likes.length)} beğeni` +
        (prev > 0 ? `\n\nDaha önce işlenmiş: ${fmtNum(prev)} (atlanacak)` : "")
      optRetweets.wrap.style.display = parsed.headersOnly ? "none" : "flex"
    }
    const n = queue().length
    const ready = !running && n > 0 && consent.input.checked
    start.disabled = !ready
    start.style.opacity = ready ? "1" : ".4"
    start.textContent = n > 0 ? `${fmtNum(n)} öğeyi silmeye başla` : "Silmeyi başlat"
  }

  pick.onclick = () => fileInput.click()
  fileInput.onchange = async () => {
    const files = Array.from(fileInput.files ?? [])
    if (!files.length) return
    parsed.tweets = []
    parsed.retweets = []
    parsed.likes = []
    parsed.headersOnly = false
    const errors: string[] = []
    pick.textContent = "Okunuyor…"
    for (const f of files) {
      try {
        parseArchiveFile(f.name, await f.text(), parsed)
      } catch (e) {
        errors.push(e instanceof Error ? e.message : String(e))
      }
    }
    // aynı ID birden fazla dosyada olabilir (tweets.js + tweet-headers.js)
    const tweetSet = new Set(parsed.tweets)
    parsed.tweets = [...tweetSet]
    parsed.retweets = [...new Set(parsed.retweets)].filter((id) => !tweetSet.has(id))
    parsed.likes = [...new Set(parsed.likes)]
    pick.textContent = `${files.length} dosya seçildi — değiştir`
    status.textContent = errors.join("\n")
    status.style.color = errors.length ? C.brand : C.ink
    refresh()
  }
  for (const c of [optTweets, optRetweets, optLikes, consent]) c.input.onchange = refresh

  async function run(jobs: Job[]) {
    running = true
    stopRequested = false
    failed = []
    const total = jobs.length
    let processed = 0
    let ok = 0
    const startedAt = Date.now()
    let consecutive403 = 0

    start.style.display = "none"
    retry.style.display = "none"
    stop.style.display = "block"
    bar.style.display = "block"
    bar.max = total
    bar.value = 0
    status.style.color = C.ink
    for (const c of [optTweets, optRetweets, optLikes]) c.input.disabled = true
    pick.disabled = true
    window.addEventListener("beforeunload", guard)

    const show = (extra = "") => {
      const elapsed = (Date.now() - startedAt) / 1000
      const rate = processed / Math.max(elapsed, 1)
      const left = (total - processed) / Math.max(rate, 0.01)
      bar.value = processed
      status.textContent =
        `${fmtNum(ok)} silindi · ${fmtNum(failed.length)} başarısız · ${fmtNum(total - processed)} kaldı\n` +
        `Tahmini kalan süre: ${processed > 5 ? fmtDuration(left) : "hesaplanıyor…"}` +
        (extra ? `\n${extra}` : "")
    }

    const wait = async (sec: number, why: string) => {
      for (let s = sec; s > 0 && !stopRequested; s--) {
        show(`${why} — ${fmtDuration(s)} bekleniyor…`)
        await sleep(1000)
      }
    }

    const delay = SPEEDS[speedSel.value as Speed].ms
    let sinceSave = 0
    let fatal = ""

    for (let i = 0; i < jobs.length && !stopRequested; i++) {
      const job = jobs[i]
      let attempts = 0
      for (;;) {
        const r = await send(job)
        if (r.ok) {
          done.add(`${job.kind}:${job.id}`)
          ok++
          consecutive403 = 0
          if (r.waitAfter) await wait(r.waitAfter, "X istek sınırı doldu")
          break
        }
        if ("retryAfter" in r) {
          await wait(r.retryAfter, "X istek sınırı doldu")
          if (stopRequested) break
          continue
        }
        if ("fatal" in r) {
          fatal = r.fatal
          break
        }
        // failed
        if (r.failed.startsWith("403")) consecutive403++
        if (consecutive403 >= 5) {
          fatal = "X arka arkaya 5 isteği reddetti (403). Sayfayı yenileyip daha yavaş hızla tekrar deneyin."
          break
        }
        if (++attempts < 3 && /bağlantı/.test(r.failed)) {
          await wait(15, "Bağlantı sorunu")
          continue
        }
        failed.push(job)
        break
      }
      if (fatal) break
      processed++
      if (++sinceSave >= 25) {
        saveDone(done)
        sinceSave = 0
      }
      show()
      if (!stopRequested) await sleep(delay + Math.random() * delay * 0.5)
    }

    saveDone(done)
    running = false
    window.removeEventListener("beforeunload", guard)
    stop.style.display = "none"
    start.style.display = "block"
    for (const c of [optTweets, optRetweets, optLikes]) c.input.disabled = false
    pick.disabled = false
    retry.style.display = failed.length ? "block" : "none"
    retry.textContent = `Başarısız olanları tekrar dene (${fmtNum(failed.length)})`

    if (fatal) {
      show(fatal)
      status.style.color = C.brand
    } else if (stopRequested) {
      show("Durduruldu. Kaldığı yerden devam etmek için tekrar başlatın.")
    } else {
      show(failed.length ? "Bitti. Başarısız olanları tekrar deneyebilirsiniz." : "Bitti! Profil sayfasını yenileyip kontrol edin.")
    }
    refresh()
  }

  function guard(e: BeforeUnloadEvent) {
    e.preventDefault()
  }

  start.onclick = () => {
    const jobs = queue()
    if (!jobs.length) return
    if (!confirm(`${fmtNum(jobs.length)} öğe kalıcı olarak silinecek. Devam edilsin mi?`)) return
    void run(jobs)
  }
  stop.onclick = () => {
    stopRequested = true
    stop.textContent = "Durduruluyor…"
    setTimeout(() => (stop.textContent = "Durdur"), 1500)
  }
  retry.onclick = () => {
    const jobs = failed
    if (jobs.length) void run(jobs)
  }
  close.onclick = () => {
    if (running && !confirm("Silme devam ediyor. Durdurup kapatılsın mı?")) return
    stopRequested = true
    saveDone(done)
    window.removeEventListener("beforeunload", guard)
    panel.remove()
  }

  refresh()
}

main()
