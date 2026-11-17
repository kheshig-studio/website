/* Kırık Köprüler — Nüfus Defteri · arayüz */
(function () {
  "use strict"
  const KK = window.KK
  const $ = (id) => document.getElementById(id)
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c])

  let p = null
  let bekleyenSecim = null
  let tutanakVeri = null

  /* ── başlat ─────────────────────────────────────────────── */
  function dog() {
    const r = KK.dogum()
    p = r.p
    bekleyenSecim = null
    if (acikPanel) panelKapat()
    $("giris").classList.add("hidden")
    $("son").classList.add("hidden")
    $("oyun").classList.remove("hidden")
    $("log").innerHTML = ""
    $("birth").innerHTML = `<p class="eyebrow">Doğum kaydı · Çöküş'ten sonra ${p.yil}. yıl</p>${esc(r.satirlar[0])}`
    kimlik()
    dock()
    window.scrollTo(0, 0)
    const b = $("dock").querySelector(".btn")
    if (b) b.focus({ preventScroll: true })
  }

  /* ── kimlik kartı ───────────────────────────────────────── */
  function bar(ad, deger, ters) {
    const v = Math.round(deger)
    const dusuk = ters ? v > 40 : v < 30
    return `<div class="stat"><div class="stat-k"><span>${ad}</span><b>${v}</b></div><div class="bar${dusuk ? " low" : ""}"><i style="width:${v}%"></i></div></div>`
  }

  function kimlik() {
    const Y = KK.YERLER[p.yer]
    const ad = p.numara ? `${esc(p.numara)}<small>eski adı ${esc(p.ad)}</small>` : esc(p.ad)
    $("idAd").innerHTML = ad
    $("idYas").textContent = `${p.yas} yaş · ÇS ${p.yil}`
    const meslek = p.meslek ? KK.MESLEK[p.meslek].ad : p.yas < 14 ? "çocuk" : "işsiz"
    const yerAd = p.yer === "gocmen" ? "Göçmen damları" : Y.ad
    const bas = KK.basamakAd(p)
    $("idAlt").textContent = `${yerAd} · ${bas}${p.kanat ? " · " + p.kanat : ""} · ${meslek}`
    let h = bar("Sağlık", p.saglik) + bar("Ciğer", p.ciger) + bar("Umut", p.umut)
    h += p.yosun > 0 ? bar("Yosun", p.yosun, true) : `<div class="stat"><div class="stat-k"><span>Okur yazar</span><b>${p.okur ? "evet" : "hayır"}</b></div></div>`
    $("stats").innerHTML = h
    const dr = KK.durum(p)
    $("durum").innerHTML = dr.map((x) => `<span class="etiket${/Zindan/.test(x) ? " zindan" : ""}">${esc(x)}</span>`).join("")
    $("money").innerHTML = `<span>Koloni Lirası <b>${p.lira}</b></span><span>Nizam fişi <b>${p.fis}</b></span><span>Sicil <b>${KK.sicilAd(p.sicil)}</b></span>`
  }

  /* ── defter ─────────────────────────────────────────────── */
  function yilEkle(satirlar, yas, yil) {
    const li = document.createElement("li")
    li.className = "year"
    li.dataset.yas = yas
    li.innerHTML =
      `<div class="year-h"><b>${yas}</b>yaş<br>ÇS ${yil}</div><div>` +
      satirlar.map((s) => `<p class="${s.tur ? "t-" + s.tur : ""}">${esc(s.metin)}</p>`).join("") +
      `</div>`
    $("log").appendChild(li)
    return li
  }

  function satirEkleSon(metin, tur) {
    let son = $("log").lastElementChild
    if (!son || +son.dataset.yas !== p.yas) son = yilEkle([], p.yas, p.yil)
    const d = son.querySelector("div:last-child")
    const pEl = document.createElement("p")
    pEl.className = tur ? "t-" + tur : ""
    pEl.textContent = metin
    d.appendChild(pEl)
  }

  function asagiKaydir() {
    const son = $("log").lastElementChild
    if (!son) return
    const dockH = document.querySelector(".dock").offsetHeight
    $("log").style.paddingBottom = dockH + 24 + "px"
    const r = son.getBoundingClientRect()
    const hedef = window.scrollY + r.bottom - (window.innerHeight - dockH) + 12
    if (hedef > window.scrollY) window.scrollTo({ top: hedef, behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" })
  }

  /* ── ilerleme ───────────────────────────────────────────── */
  function birYil() {
    if (!p || p.olu || bekleyenSecim) return { dur: true }
    const r = KK.yil(p)
    yilEkle(r.satirlar, p.yas, p.yil)
    if (r.secim) bekleyenSecim = r.secim
    const donum = r.satirlar.some((s) => s.tur === "donum")
    return { dur: r.olu || !!r.secim || donum, olu: r.olu }
  }

  function ilerle(n) {
    for (let i = 0; i < n; i++) {
      const s = birYil()
      if (s.dur) break
    }
    kimlik()
    dock()
    asagiKaydir()
  }

  function sec(i) {
    if (!bekleyenSecim) return
    const r = KK.secimYap(p, bekleyenSecim.id, i)
    bekleyenSecim = null
    satirEkleSon(r.metin, r.tur === "kotu" ? "kotu" : "secim")
    kimlik()
    dock()
    asagiKaydir()
  }

  function dock() {
    const d = $("dock")
    if (p.olu) {
      d.innerHTML = `<button class="btn" type="button" id="tutBtn" disabled>Tutanağı gör</button>`
      const tb = $("tutBtn")
      tb.onclick = son
      // hızlı tıklayan oyuncu ölüm satırını okumadan geçmesin
      setTimeout(() => { tb.disabled = false; tb.focus({ preventScroll: true }) }, 700)
      return
    }
    if (bekleyenSecim) {
      const s = bekleyenSecim
      d.innerHTML =
        `<div class="choice" role="group" aria-labelledby="secMetin" tabindex="-1"><p class="eyebrow">Karar · ${p.yas} yaş</p><p id="secMetin">${esc(s.metin)}</p><div class="opts">` +
        s.secenekler.map((o, i) => `<button class="opt" type="button" data-i="${i}"><span class="k">${i + 1}</span>${esc(o)}</button>`).join("") +
        `</div></div>`
      d.querySelectorAll(".opt").forEach((b) => (b.onclick = () => sec(+b.dataset.i)))
      // odak seçeneğe değil karta gider: boşluk tuşuyla yıl atlayan oyuncu kazara seçim yapmasın
      d.querySelector(".choice").focus({ preventScroll: true })
      return
    }
    d.innerHTML =
      `<div class="dock-col"><div class="tabs">` +
      `<button class="tab" type="button" data-panel="aile">Aile</button>` +
      `<button class="tab" type="button" data-panel="is">İş</button>` +
      `<button class="tab" type="button" data-panel="etk">Etkinlik</button>` +
      `<button class="tab" type="button" data-panel="pazar">Pazar</button>` +
      `</div><div class="row"><button class="btn" type="button" id="yilBtn">Bir yıl yaşa</button><button class="btn ghost" type="button" id="besBtn" title="Bir karar ya da dönüm noktası gelirse durur">5 yıl</button></div></div>`
    d.querySelectorAll("[data-panel]").forEach((b) => (b.onclick = () => panelAc(b.dataset.panel)))
    $("yilBtn").onclick = () => ilerle(1)
    $("besBtn").onclick = () => ilerle(5)
  }

  /* ── paneller: Aile · İş · Etkinlik ─────────────────────── */
  let acikPanel = null

  function panelAc(tur) {
    if (!p || p.olu || bekleyenSecim) return
    acikPanel = tur
    $("sheetSonuc").textContent = ""
    $("sheetSonuc").className = "sheet-sonuc"
    $("sheet").classList.remove("hidden")
    document.body.classList.add("kilit")
    panelCiz()
    $("sheetKapat").focus({ preventScroll: true })
  }

  function panelKapat() {
    if (!acikPanel) return
    const tur = acikPanel
    acikPanel = null
    $("sheet").classList.add("hidden")
    document.body.classList.remove("kilit")
    const b = $("dock").querySelector(`[data-panel="${tur}"]`)
    if (b) b.focus({ preventScroll: true })
    asagiKaydir()
  }

  function sonuc(r) {
    const el = $("sheetSonuc")
    el.textContent = r.metin
    el.className = "sheet-sonuc" + (r.tur ? " t-" + r.tur : "")
    if (r.tur !== "sessiz") satirEkleSon(r.metin, r.tur === "kotu" ? "kotu" : r.tur === "iyi" ? "iyi" : r.tur === "donum" ? "donum" : "secim")
    kimlik()
    panelCiz()
  }

  function panelCiz() {
    const ic = $("sheetIcerik")
    if (acikPanel === "aile") {
      $("sheetBaslik").textContent = "Aile"
      const l = KK.aileListe(p)
      ic.innerHTML = l.length
        ? l.map((k) => {
            const ust = `<div class="kisi-ust"><div><span class="rol">${esc(k.rolAd)}</span> <b>${esc(k.ad)}</b>${k.numara ? ` <span class="num">${esc(k.numara)}</span>` : ""}</div><span class="kisi-yas">${k.yas} yaş</span></div>`
            if (!k.sag) {
              return `<div class="kisi olu">${ust}<div class="kisi-alt">ÇS ${k.olumYil}'de ${esc(k.olumNeden || "")} öldü.</div></div>`
            }
            const uygun = k.eylemler.filter((e) => e.uygun)
            const not = !uygun.length && k.eylemler.length ? `<div class="kisi-not">${esc(k.eylemler[0].sebep)}</div>` : ""
            return (
              `<div class="kisi">${ust}<div class="kisi-alt">${esc(k.meslek)}${k.evli ? " · evli" : ""}</div>` +
              `<div class="yakin"><span>Yakınlık</span><div class="bar${k.yakinlik < 30 ? " low" : ""}"><i style="width:${k.yakinlik}%"></i></div><b>${k.yakinlik}</b></div>` +
              (uygun.length ? `<div class="eylem">${uygun.map((e) => `<button type="button" class="chip" data-k="${k.id}" data-e="${e.id}">${esc(e.ad)}</button>`).join("")}</div>` : "") +
              not +
              `</div>`
            )
          }).join("")
        : `<p class="bos">Kimsen yok.</p>`
      ic.querySelectorAll(".chip").forEach((b) => (b.onclick = () => sonuc(KK.aileEylem(p, +b.dataset.k, b.dataset.e))))
    } else if (acikPanel === "is") {
      $("sheetBaslik").textContent = "İş"
      const d = KK.isler(p)
      const acik = d.liste.filter((x) => x.uygun)
      const kapali = d.liste.filter((x) => !x.uygun)
      let h = `<div class="is-simdi"><div><span class="rol">Şu anki işin</span> <b>${esc(d.mevcut)}</b></div>${d.istifaEdilebilir ? `<button type="button" class="chip" id="istifaBtn">İstifa et</button>` : ""}</div>`
      if (d.kilit) h += `<p class="kisi-not">${esc(d.kilit)}</p>`
      else h += `<p class="kisi-not">Bu yıl ${d.basvuruKaldi} başvuru hakkın kaldı. Kabul edilmek şansa bağlı.</p>`
      if (!d.kilit && acik.length) {
        h += acik.map((x) => `<div class="satir-is"><div><b>${esc(x.ad)}</b><small>${esc(x.gelir)} · kabul şansı %${x.kabul}</small></div><button type="button" class="chip" data-is="${x.id}"${d.basvuruKaldi ? "" : " disabled"}>Başvur</button></div>`).join("")
      }
      if (kapali.length) h += `<details class="kapali"><summary>Kapalı kapılar (${kapali.length})</summary>${kapali.map((x) => `<div class="satir-is kapali-is"><div><b>${esc(x.ad)}</b><small>${esc(x.sebep || d.kilit || "")}</small></div></div>`).join("")}</details>`
      ic.innerHTML = h
      ic.querySelectorAll("[data-is]").forEach((b) => (b.onclick = () => sonuc(KK.basvur(p, b.dataset.is))))
      const ib = $("istifaBtn")
      if (ib) ib.onclick = () => sonuc(KK.istifa(p))
    } else if (acikPanel === "pazar") {
      $("sheetBaslik").textContent = "Pazar"
      const l = KK.pazar(p)
      const acik = l.filter((x) => x.uygun)
      const kapali = l.filter((x) => !x.uygun)
      let h = `<p class="kisi-not">Cebinde <b>${p.lira}</b> Koloni Lirası var.${p.filtre ? ` Yedek filtren: ${p.filtre}.` : ""}${p.bayrak.oda ? " Kirada oturuyorsun (yılda 12 lira)." : ""}</p>`
      h += acik.length ? acik.map((x) => `<div class="satir-is"><div><b>${esc(x.ad)}</b><small>${x.fiyat} lira · ${esc(x.bilgi)}</small></div><button type="button" class="chip" data-al="${x.id}">Al</button></div>`).join("") : `<p class="bos">Bu yıl alabileceğin bir şey yok.</p>`
      if (kapali.length) h += `<details class="kapali"><summary>Şimdilik olmaz (${kapali.length})</summary>${kapali.map((x) => `<div class="satir-is kapali-is"><div><b>${esc(x.ad)}</b><small>${x.fiyat} lira · ${esc(x.sebep)}</small></div></div>`).join("")}</details>`
      ic.innerHTML = h
      ic.querySelectorAll("[data-al]").forEach((b) => (b.onclick = () => sonuc(KK.satinAl(p, b.dataset.al))))
    } else if (acikPanel === "etk") {
      $("sheetBaslik").textContent = "Etkinlik"
      const l = KK.etkinlikler(p)
      const acik = l.filter((e) => e.uygun)
      const kapali = l.filter((e) => !e.uygun)
      let h = `<p class="kisi-not">Her etkinliği yılda bir kez yapabilirsin.</p>`
      h += acik.length ? acik.map((e) => `<div class="satir-is"><div><b>${esc(e.ad)}</b><small>${esc(e.bilgi)}</small></div><button type="button" class="chip" data-etk="${e.id}">Yap</button></div>`).join("") : `<p class="bos">Bu yıl yapabileceğin bir şey kalmadı.</p>`
      if (kapali.length) h += `<details class="kapali"><summary>Şimdilik olmaz (${kapali.length})</summary>${kapali.map((e) => `<div class="satir-is kapali-is"><div><b>${esc(e.ad)}</b><small>${esc(e.sebep)}</small></div></div>`).join("")}</details>`
      ic.innerHTML = h
      ic.querySelectorAll("[data-etk]").forEach((b) => (b.onclick = () => sonuc(KK.etkinlik(p, b.dataset.etk))))
    }
  }

  /* ── tutanak ────────────────────────────────────────────── */
  function son() {
    const t = KK.tutanak(p)
    tutanakVeri = t
    $("oyun").classList.add("hidden")
    const el = $("son")
    el.classList.remove("hidden")
    const satir = (k, v, cls) => `<dt>${k}</dt><dd${cls ? ` class="${cls}"` : ""}>${esc(v)}</dd>`
    const hayat = t.hayat.length ? `<h3>Hayatından</h3><ul>${t.hayat.map((h) => `<li>${esc(h)}</li>`).join("")}</ul>` : ""
    const baslik = t.kalan
      ? `<div class="doc-h"><div>B-Sektörü İntizam Heyeti</div><h2>Nüfus tutanağı</h2><div>No. —</div></div>`
      : `<div class="doc-h"><div>B-Sektörü İntizam Heyeti</div><h2>Nüfus tutanağı</h2><div>No. ${esc(t.no)}</div></div>`
    const alanlar =
      `<dl>` +
      satir(t.eskiAd ? "Numarası" : "Adı", t.ad, "big") +
      (t.eskiAd ? satir("Eski adı", t.eskiAd) : "") +
      satir("Cinsiyeti", t.cins) +
      satir("Doğumu", t.dogum) +
      satir("Basamağı", t.basamak) +
      satir("İnancı", t.inanc) +
      satir("Huyu", t.huy) +
      satir("Öğrenimi", t.okur) +
      satir("Mesleği", t.meslek) +
      satir("Medeni hâli", t.medeni) +
      satir("Kardeşleri", t.kardes) +
      satir("Çocukları", t.cocuk) +
      satir("Ölümü", t.olum) +
      satir("Nedeni", t.neden + ". " + t.nedenMetin) +
      satir("Mezarı", t.mezar) +
      satir("Sicili", t.sicil) +
      satir("Hastalıkları", t.hastalik) +
      satir("Zindan", t.zindan) +
      satir("Terekesi", `${t.lira} Koloni Lirası, ${t.fis} Nizam fişi`) +
      `</dl>`
    const muhur = t.kalan
      ? `<div class="void">KAYIT YOK</div>`
      : `<div class="stamp" aria-hidden="true"><div>İntizam<b>Heyeti</b>B Sektörü<br>· mühür ·</div></div>`
    const not = t.not ? `<h3>Heyet'in notu</h3><p class="note">${esc(t.not)}</p>` : ""
    const kalanNot = t.kalan ? `<p class="kalan-note">Yukarıdakiler için hiç var olmadın. Aşağıda yaşlılar adını ezberledi: <b>${esc(t.ad)}</b>. Lağımda ad unutulmaz.</p>` : ""
    el.innerHTML =
      `<p class="eyebrow">Hayat sona erdi</p>` +
      `<article class="doc${t.kalan ? " kayityok" : ""}">${baslik}${muhur}${alanlar}${not}${hayat}</article>` +
      kalanNot +
      `<div class="compare" id="kiyas"><span class="t-sessiz">Senin doğduğun yerde doğan 1200 hayat hesaplanıyor…</span></div>` +
      `<div class="end-actions"><button class="btn" type="button" id="yeniBtn">Yeniden doğ</button><button class="btn ghost" type="button" id="kopyaBtn">Tutanağı kopyala</button></div>` +
      `<div class="toast" id="toast" role="status"></div>` +
      `<p class="foot">Kırık Köprüler bir evren: aynı dünyada geçen farklı oyunlar. Bir <a href="/">Kheshig Studio</a> oyunu · <a href="/oyunlar/">Diğer oyunlar</a></p>`
    $("yeniBtn").onclick = dog
    $("kopyaBtn").onclick = kopyala
    window.scrollTo(0, 0)
    $("yeniBtn").focus({ preventScroll: true })
    setTimeout(() => {
      const k = KK.kiyas(p)
      tutanakVeri.kiyas = k
      const yerAd = k.yerAd.charAt(0).toLocaleUpperCase("tr") + k.yerAd.slice(1)
      const ek = ekAyir(k.yuzdeKisa)
      const ayrilma = ek + "nd" + (/[ıu]/.test(ek) ? "a" : "e") + "n"
      $("kiyas").innerHTML = `<b>Yaşıtlarının %${k.yuzdeKisa}'${ayrilma} uzun yaşadın.</b>${esc(yerAd)} doğan her 100 kişiden ${k.yuzdeKisa}'${ek} senden önce öldü. Orada ortalama ömür ${k.ortalama} yıl ve her 100 bebekten ${k.bebek}'${ekAyir(k.bebek)} beş yaşını göremiyor. Sen ${p.yas} yıl yaşadın.`
    }, 60)
  }

  // Sayıdan sonra 3. tekil iyelik eki: 37'si, 40'ı, 100'ü — okunuştaki son kelimeye göre
  function ekAyir(n) {
    if (n === 0) return "ı"
    if (n % 100 === 0) return "ü"
    const birler = ["", "i", "si", "ü", "ü", "i", "sı", "si", "i", "u"]
    const onlar = ["", "u", "si", "u", "ı", "si", "ı", "i", "i", "ı"]
    return n % 10 ? birler[n % 10] : onlar[Math.floor(n / 10) % 10]
  }

  function metinTutanak() {
    const t = tutanakVeri
    const k = t.kiyas
    const L = []
    L.push("KIRIK KÖPRÜLER · NÜFUS TUTANAĞI" + (t.kalan ? " · KAYIT YOK" : " · No. " + t.no))
    L.push((t.eskiAd ? t.ad + " (eski adı " + t.eskiAd + ")" : t.ad) + " · " + t.cins)
    L.push("Doğumu: " + t.dogum)
    L.push("Basamağı: " + t.basamak)
    L.push("Mesleği: " + t.meslek)
    L.push("Ölümü: " + t.olum + " · " + t.neden)
    L.push("Mezarı: " + t.mezar)
    if (t.hayat.length) L.push("— " + t.hayat.join("\n— "))
    if (k) L.push(`Doğduğum yerde doğan her 100 kişiden ${k.yuzdeKisa}'${ekAyir(k.yuzdeKisa)} benden önce öldü.`)
    L.push(location.origin + location.pathname)
    return L.join("\n")
  }

  function kopyala() {
    const metin = metinTutanak()
    const tamam = () => ($("toast").textContent = "Tutanak panoya kopyalandı.")
    if (navigator.clipboard && window.isSecureContext) {
      navigator.clipboard.writeText(metin).then(tamam, () => elleKopyala(metin, tamam))
    } else elleKopyala(metin, tamam)
  }
  function elleKopyala(metin, tamam) {
    const ta = document.createElement("textarea")
    ta.value = metin
    ta.setAttribute("readonly", "")
    ta.style.position = "fixed"
    ta.style.opacity = "0"
    document.body.appendChild(ta)
    ta.select()
    try { document.execCommand("copy"); tamam() } catch (e) { $("toast").textContent = "Kopyalanamadı." }
    ta.remove()
  }

  /* ── klavye ─────────────────────────────────────────────── */
  document.addEventListener("keydown", (e) => {
    if (!p || $("oyun").classList.contains("hidden")) return
    if (acikPanel) {
      if (e.key === "Escape") { e.preventDefault(); panelKapat() }
      return
    }
    if (e.target && e.target.tagName === "BUTTON" && (e.key === "Enter" || e.key === " ")) return
    if (bekleyenSecim && /^[1-9]$/.test(e.key)) {
      const i = +e.key - 1
      if (i < bekleyenSecim.secenekler.length) { e.preventDefault(); sec(i) }
    } else if (!bekleyenSecim && !p.olu && (e.key === " " || e.key === "Enter")) {
      e.preventDefault(); ilerle(1)
    }
  })

  $("dogBtn").onclick = dog
  $("sheetKapat").onclick = panelKapat
  $("sheetArka").onclick = panelKapat
})()
