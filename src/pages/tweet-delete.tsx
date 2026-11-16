import { useEffect, useRef, useState, type ReactNode } from "react"
import { code } from "virtual:tweet-sil"
import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Container, Label, PageHeader, cx } from "@/site/ui"
import { LINKS } from "@/site/data"

const ARCHIVE_URL = "https://x.com/settings/download_your_data"
const SOURCE_URL = `${LINKS.github}/website/blob/main/src/tools/tweet-sil.ts`

const FACTS = [
  {
    title: "Verin sende kalır",
    text: "Arşiv dosyası tarayıcında okunur, hiçbir yere yüklenmez. Silme istekleri doğrudan x.com'a, kendi oturumunla gider.",
  },
  {
    title: "Eskiler dahil, hepsi",
    text: "Profil sayfası son ~3.200 tweeti gösterir. Araç arşivdeki her tweeti tek tek siler; 25 bin, 50 bin fark etmez.",
  },
  {
    title: "Kaldığı yerden devam",
    text: "Durdurursan ya da sekmeyi kapatırsan ilerleme kaybolmaz. Dosyaları yeniden seçince silinenleri atlar.",
  },
]

const NOTES: Array<[string, ReactNode]> = [
  ["Geri alınamaz.", "Silinen tweet, retweet ve beğeniler geri gelmez. Saklamak istediklerin varsa önce arşivi bir kenara kaydet."],
  [
    "Arşiv bir anlık görüntüdür.",
    "Arşivi istedikten sonra attığın tweetler dosyada yoktur. Onlar için yeni bir arşiv iste ya da elle sil.",
  ],
  [
    "Süre.",
    "X belirli aralıklarla istek sınırı koyar; araç sınıra takılınca kendisi bekler ve devam eder. 25 bin tweet için birkaç saat ile bir gün arası düşün.",
  ],
  [
    "Hesap kilidi riski.",
    "Bu araç X'in resmî API'sini değil, web sitesinin kendi kullandığı istekleri kullanır. X çok hızlı işlemi otomasyon sayıp hesabı geçici kilitleyebilir. Kilit gelirse x.com'da açıp \"Yavaş\" hızla devam et.",
  ],
  [
    "Sekmeyi önde tut.",
    "Tarayıcılar arka plandaki sekmeleri yavaşlatır. En iyisi x.com'u ayrı bir pencerede açık bırakmak.",
  ],
  [
    "X değişirse.",
    <>
      X iç isteklerini zaman zaman değiştirir; araç bir gün çalışmazsa{" "}
      <a className="underline underline-offset-4 hover:text-brand" href="/iletisim/">
        bana yaz
      </a>
      , güncellerim.
    </>,
  ],
]

function Step({ n, title, children }: { n: number; title: string; children: ReactNode }) {
  return (
    <li className="grid gap-4 border-t border-line py-10 sm:grid-cols-[5rem_1fr] sm:gap-8">
      <span aria-hidden className="font-display text-5xl font-bold leading-none tracking-[-0.04em] text-brand">
        {String(n).padStart(2, "0")}
      </span>
      <div>
        <h3 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{title}</h3>
        <div className="mt-3 max-w-2xl space-y-4 text-[17px] leading-relaxed text-ink-soft">{children}</div>
      </div>
    </li>
  )
}

/** Sürüklenip yer imleri çubuğuna bırakılan buton. */
function Bookmarklet() {
  const ref = useRef<HTMLAnchorElement>(null)
  const [hint, setHint] = useState(false)

  useEffect(() => {
    // React 19 `javascript:` linklerini engeller; href'i doğrudan DOM'a yazıyoruz.
    ref.current?.setAttribute("href", "javascript:" + encodeURIComponent(code))
  }, [])

  return (
    <div className="flex flex-col items-start gap-3">
      <a
        ref={ref}
        draggable
        onClick={(e) => {
          e.preventDefault()
          setHint(true)
        }}
        className="inline-flex min-h-12 cursor-grab select-none items-center gap-2.5 rounded-full bg-ink px-6 text-[15px] font-medium text-paper shadow-[0_10px_24px_-12px_rgba(22,21,15,0.6)] transition-colors hover:bg-brand active:cursor-grabbing"
      >
        <svg aria-hidden viewBox="0 0 16 16" className="size-4" fill="none" stroke="currentColor" strokeWidth="1.6">
          <path d="M4 2.5h8v11l-4-3-4 3z" strokeLinejoin="round" />
        </svg>
        Tweet Sil
      </a>
      <p className={cx("text-[15px]", hint ? "font-medium text-brand" : "text-ink-soft")} role={hint ? "status" : undefined}>
        {hint
          ? "Buraya tıklama — butonu tutup yer imleri çubuğuna sürükle, sonra x.com'dayken oradan tıkla."
          : "Butonu fareyle tutup tarayıcının yer imleri çubuğuna bırak. Çubuk görünmüyorsa: Ctrl+Shift+B (Mac: ⌘+Shift+B)."}
      </p>
    </div>
  )
}

function ConsoleCode() {
  const [copied, setCopied] = useState(false)
  return (
    <details className="group rounded-2xl border border-line bg-card">
      <summary className="flex min-h-14 cursor-pointer list-none items-center justify-between gap-4 px-6 text-[15px] font-medium">
        Yer imi çalışmazsa: konsol yöntemi
        <span aria-hidden className="text-xl text-ink-soft transition-transform group-open:rotate-45">+</span>
      </summary>
      <div className="space-y-4 border-t border-line px-6 py-6 text-[15px] leading-relaxed text-ink-soft">
        <ol className="list-decimal space-y-1.5 pl-5">
          <li>x.com'u aç ve giriş yaptığından emin ol.</li>
          <li>
            <kbd className="rounded border border-line bg-paper px-1.5 font-mono text-[13px]">F12</kbd> ile geliştirici
            araçlarını aç, <strong className="text-ink">Console</strong> sekmesine geç.
          </li>
          <li>
            Aşağıdaki kodu kopyalayıp yapıştır, Enter'a bas. Chrome yapıştırmaya izin vermezse önce{" "}
            <code className="font-mono text-[13px] text-ink">allow pasting</code> yazıp Enter'a bas.
          </li>
        </ol>
        <p>
          Genel kural: konsola, kaynağını bilmediğin kodu asla yapıştırma. Bu kodun okunabilir hali{" "}
          <a className="underline underline-offset-4 hover:text-brand" href={SOURCE_URL} target="_blank" rel="noreferrer noopener">
            GitHub'da
          </a>
          .
        </p>
        <div className="relative">
          <textarea
            readOnly
            value={code}
            aria-label="Konsol kodu"
            onFocus={(e) => e.currentTarget.select()}
            className="h-36 w-full resize-none rounded-xl border border-line bg-paper p-4 font-mono text-[12px] leading-relaxed text-ink"
          />
          <button
            type="button"
            onClick={async () => {
              try {
                await navigator.clipboard.writeText(code)
                setCopied(true)
                setTimeout(() => setCopied(false), 2000)
              } catch {
                /* pano izni yoksa kullanıcı metni elle seçer */
              }
            }}
            className="absolute right-3 top-3 inline-flex min-h-9 items-center rounded-full bg-ink px-4 text-[13px] font-medium text-paper transition-colors hover:bg-brand"
          >
            {copied ? "Kopyalandı" : "Kopyala"}
          </button>
        </div>
      </div>
    </details>
  )
}

function TweetDelete() {
  return (
    <Layout>
      <PageHeader
        label="Ücretsiz araç · Tweet Sil"
        title="Tüm tweetlerini sil. Ücretsiz."
        intro="Paralı silme servislerinin yaptığını kendi tarayıcında yap: X arşivindeki her tweeti, retweeti ve istersen beğeniyi tek tek kaldırır. Kurulum yok, kayıt yok, ödeme yok."
      />

      <Container className="py-14 sm:py-16">
        <ul className="grid gap-5 md:grid-cols-3">
          {FACTS.map((f) => (
            <li key={f.title} className="rounded-2xl border border-line bg-card p-6">
              <h2 className="text-xl font-bold tracking-[-0.02em]">{f.title}</h2>
              <p className="mt-2 text-[15px] leading-relaxed text-ink-soft">{f.text}</p>
            </li>
          ))}
        </ul>
      </Container>

      <Container className="pb-8">
        <Label className="text-brand">Nasıl kullanılır</Label>
        <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em] sm:text-5xl">Dört adım.</h2>
        <p className="mt-3 text-[15px] text-ink-soft">Bilgisayarda Chrome, Edge, Firefox ya da Safari gerekir; telefondan çalışmaz.</p>
        <ol className="mt-8">
          <Step n={1} title="X arşivini iste">
            <p>
              X'te <strong className="text-ink">Ayarlar → Hesabın → Verilerinin arşivini indir</strong> yolunu izle ya da{" "}
              <a className="font-medium text-ink underline underline-offset-4 hover:text-brand" href={ARCHIVE_URL} target="_blank" rel="noreferrer noopener">
                doğrudan bu sayfayı aç
              </a>
              . Şifreni doğrulayıp arşivi iste.
            </p>
            <p>Hazırlanması genelde 24 saat, bazen birkaç gün sürer. Hazır olunca X bildirim ve e-posta gönderir.</p>
          </Step>
          <Step n={2} title="Zip'i aç">
            <p>
              İndirdiğin zip'i bir klasöre çıkar. İçindeki <code className="font-mono text-[15px] text-ink">data</code> klasöründe şu
              dosyalar lazım:
            </p>
            <ul className="space-y-1.5">
              <li>
                <code className="font-mono text-[15px] text-ink">tweets.js</code> — çok tweet atanlarda ayrıca{" "}
                <code className="font-mono text-[15px] text-ink">tweets-part1.js</code>,{" "}
                <code className="font-mono text-[15px] text-ink">tweets-part2.js</code>… (hepsini seçeceksin)
              </li>
              <li>
                <code className="font-mono text-[15px] text-ink">like.js</code> — yalnızca beğenileri de kaldırmak istersen
              </li>
            </ul>
          </Step>
          <Step n={3} title="Butonu yer imlerine sürükle">
            <Bookmarklet />
          </Step>
          <Step n={4} title="x.com'da butona tıkla">
            <p>
              x.com'u aç, giriş yap ve yer imlerindeki <strong className="text-ink">Tweet Sil</strong>'e tıkla. Sağ üstte bir panel
              açılır: dosyaları seç, neyin silineceğini işaretle, başlat.
            </p>
            <p>Panel ilerlemeyi ve kalan süreyi gösterir. İstediğin an durdurabilirsin.</p>
          </Step>
        </ol>
        <div className="mt-2">
          <ConsoleCode />
        </div>
      </Container>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
          <div>
            <Label className="text-brand">Başlamadan önce</Label>
            <h2 className="mt-4 text-4xl font-bold tracking-[-0.03em]">Bilmen gerekenler.</h2>
            <p className="mt-4 text-[15px] leading-relaxed text-ink-soft">
              Kodun tamamı açık:{" "}
              <a className="inline-flex items-center gap-1.5 font-medium text-ink underline underline-offset-4 hover:text-brand" href={SOURCE_URL} target="_blank" rel="noreferrer noopener">
                tweet-sil.ts <Arrow />
              </a>
            </p>
          </div>
          <dl className="flex flex-col">
            {NOTES.map(([k, v]) => (
              <div key={k} className="border-t border-line py-5 first:border-t-0 first:pt-0">
                <dt className="text-lg font-bold tracking-[-0.01em]">{k}</dt>
                <dd className="mt-1.5 text-[15px] leading-relaxed text-ink-soft">{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </Layout>
  )
}

mount(<TweetDelete />)
