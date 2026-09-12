import Reveal from "@/components/Reveal"
import WorkProof from "@/components/WorkProof"
import ProductVisual from "@/components/ProductVisual"
import GameMoment from "@/components/GameMoment"
import { buttonVariants } from "@/components/ui/button"

const EMAIL = "muhammetdiktepeee@gmail.com"
const MAIL_BODY = [
  "Merhaba,",
  "",
  "İhtiyacım şu:",
  "",
  "Bütçe / süre beklentim:",
  "",
].join(String.fromCharCode(10))
const MAILTO =
  "mailto:" +
  EMAIL +
  "?subject=" +
  encodeURIComponent("Kheshig Studio — iş talebi") +
  "&body=" +
  encodeURIComponent(MAIL_BODY)

function Eyebrow({ children }: { children: React.ReactNode }) {
  return (
    <span className="font-mono text-xs uppercase tracking-[0.34em] text-crimson-lit">
      {children}
    </span>
  )
}

type Product = {
  name: string
  what: string
  kind: string
  status: "Satışta" | "Ücretsiz"
  /* Yalnizca gercekten bilinen fiyat yazilir; bos birakilan urun
     "fiyat icin yazin" der. Uydurma fiyat konmaz. */
  price?: string
  href?: string
}

/* Her urun kendi konusuyla mail acar — gelen kutusunda hangi urun
   icin yazildigi belli olur. */
function productMail(name: string) {
  const body = [
    "Merhaba,",
    "",
    name + " ile ilgileniyorum.",
    "",
    "Sorum / ihtiyacım:",
    "",
  ].join(String.fromCharCode(10))
  return (
    "mailto:" +
    EMAIL +
    "?subject=" +
    encodeURIComponent("Kheshig Studio — " + name) +
    "&body=" +
    encodeURIComponent(body)
  )
}

const PRODUCTS: Product[] = [
  { name: "MapsLead", what: "Google Haritalar'dan işletme adı, telefon, adres ve web sitesi durumunu Excel'e döker.", kind: "Masaüstü", status: "Satışta", price: "750 ₺" },
  { name: "FeedAlert", what: "Ana sayfa linkinden akışı kendi bulur, yalnızca yeni içeriği haber verir.", kind: "Masaüstü", status: "Satışta", price: "400 ₺" },
  { name: "Sinyal", what: "Haber akışlarını tarar, sizin üslubunuzla tweet ve yanıt üretir. Kendi API anahtarınızla çalışır.", kind: "Uygulama", status: "Satışta", price: "1.500 ₺" },
  { name: "VideoHunter", what: "Bağlantıdan video indirir. Kurulumsuz, tek dosya.", kind: "Masaüstü", status: "Ücretsiz", href: "https://github.com/kheshig-studio/videohunter" },
  { name: "SheetFlow", what: "Farklı yazılmış başlıkları eşleştirir, Türkçe kodlamayı kendi çözer.", kind: "Açık kaynak", status: "Ücretsiz", href: "https://github.com/kheshig-studio/sheetflow" },
]

export function ScrollStage() {
  return (
    <>
      {/* ambient ground — colour, not imagery */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0"
        style={{
          background:
            "radial-gradient(120% 80% at 78% 18%, rgba(137,0,0,0.20) 0%, rgba(137,0,0,0.06) 38%, transparent 68%)",
        }}
      />

      <main className="relative z-10">
        {/* ── 1 · hero ───────────────────────────────────── */}
        <section className="mx-auto grid min-h-svh max-w-6xl grid-cols-1 items-center gap-12 px-6 py-24 md:grid-cols-[1fr_1.05fr] md:px-10">
          <div className="flex flex-col items-start gap-7">
            <Eyebrow>Yazılım · Otomasyon · Web</Eyebrow>
            <h1 className="font-display text-4xl font-bold uppercase leading-[1.02] tracking-tight sm:text-6xl">
              Kheshig
              <span className="mt-1 block text-crimson-lit">Studio</span>
            </h1>
            <p className="max-w-md text-base text-muted-foreground">
              Elle saatler süren işi dakikaya indiren yazılımlar yazıyorum —
              veri kazıma, takip botları, masaüstü araçlar. Ve onları taşıyan
              kurumsal web siteleri.
            </p>
            <div className="flex flex-wrap gap-3">
              <a href={MAILTO} className={buttonVariants({ size: "lg" })}>
                İş konuşalım
              </a>
              <a
                href="#urunler"
                className={
                  buttonVariants({ size: "lg", variant: "outline" }) +
                  " border-white/20 bg-white/5 backdrop-blur-sm hover:bg-white/10"
                }
              >
                Ürünler
              </a>
            </div>
          </div>

          {/* the proof, not an ornament */}
          <WorkProof />
        </section>

        {/* ── 2 · ne yaparız ─────────────────────────────── */}
        <section className="mx-auto flex min-h-svh max-w-4xl flex-col items-center justify-center gap-10 px-6 py-24 text-center">
          <Reveal className="flex flex-col items-center gap-5">
            <Eyebrow>Ne Yaparız</Eyebrow>
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.08] tracking-tight sm:text-5xl">
              İki disiplin,
              <span className="block text-crimson-lit">tek masa</span>
            </h2>
          </Reveal>
          <div className="grid w-full gap-4 sm:grid-cols-2">
            {[
              [
                "Yazılım & Otomasyon",
                "Veri kazıma, botlar, masaüstü araçlar, API ve Excel otomasyonu.",
              ],
              [
                "Web Tasarım & Geliştirme",
                "Kurumsal site, açılış sayfası, hızlı ve mobil uyumlu yapı.",
              ],
            ].map(([t, d], i) => (
              <Reveal key={t} delay={i * 90}>
                <div className="h-full rounded-sm border border-white/10 bg-white/[0.03] p-6 text-left backdrop-blur-sm transition-colors duration-200 hover:border-crimson-lit/50">
                  <h3 className="font-display text-base font-semibold uppercase tracking-wide">
                    {t}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">{d}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── 3 · ürünler ────────────────────────────────── */}
        <section
          id="urunler"
          className="mx-auto flex min-h-svh max-w-5xl scroll-mt-8 flex-col items-center justify-center gap-10 px-6 py-24"
        >
          <Reveal className="flex flex-col items-center gap-5 text-center">
            <Eyebrow>Ürünler</Eyebrow>
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.08] tracking-tight sm:text-5xl">
              Vaat değil,
              <span className="block text-crimson-lit">çalışan araçlar</span>
            </h2>
          </Reveal>

          <div className="grid w-full gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {PRODUCTS.map((p, i) => (
              <Reveal key={p.name} delay={i * 70}>
                <article className="group flex h-full flex-col gap-3 rounded-sm border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors duration-200 hover:border-crimson-lit/50">
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      {p.kind}
                    </span>
                    <span
                      className={
                        "rounded-xs px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.12em] " +
                        (p.status === "Ücretsiz"
                          ? "bg-crimson/25 text-crimson-lit"
                          : "bg-white/10 text-foreground")
                      }
                    >
                      {p.status}
                    </span>
                  </div>
                  <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                    {p.name}
                  </h3>
                  <ProductVisual name={p.name} />
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {p.what}
                  </p>
                  <span
                    aria-hidden
                    className="mt-auto h-px w-10 bg-crimson transition-all duration-300 group-hover:w-full"
                  />
                  <div className="flex min-h-11 items-center justify-between gap-3">
                    <span className="font-mono text-[13px] text-muted-foreground">
                      {p.price ?? (p.status === "Ücretsiz" ? "Ücretsiz" : "Fiyat için yazın")}
                    </span>
                    <a
                      href={p.href ?? productMail(p.name)}
                      {...(p.href
                        ? { target: "_blank", rel: "noreferrer noopener" }
                        : {})}
                      className="-mr-1 rounded-xs px-1 py-2 font-mono text-xs uppercase tracking-[0.12em] text-crimson-lit underline-offset-4 hover:underline"
                    >
                      {p.status === "Ücretsiz" ? "İndir →" : "Satın al →"}
                      <span className="sr-only"> — {p.name}</span>
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </section>

        {/* ── 4 · oyunlar ────────────────────────────────── */}
        <section
          id="oyunlar"
          className="mx-auto flex min-h-svh max-w-5xl scroll-mt-8 flex-col items-center justify-center gap-10 px-6 py-24"
        >
          <Reveal className="flex flex-col items-center gap-5 text-center">
            <Eyebrow>Oyunlar</Eyebrow>
            <h2 className="font-display text-3xl font-bold uppercase leading-[1.08] tracking-tight sm:text-5xl">
              Yan proje değil,
              <span className="block text-crimson-lit">bitmiş iş</span>
            </h2>
          </Reveal>

          <div className="grid w-full gap-4 md:grid-cols-2">
            <Reveal>
              <article className="group flex h-full flex-col gap-3 rounded-sm border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors duration-200 hover:border-crimson-lit/50">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Android
                  </span>
                  <span className="rounded-xs bg-crimson/25 px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-crimson-lit">
                    Play'de yayında
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                  Block Merge
                </h3>
                <img
                  src="/blockgame.webp"
                  width={620}
                  height={852}
                  loading="lazy"
                  alt="Block Merge — retro el konsolu çerçevesinde, yeşil ekranda renkli blokların birleştiği bir oyun anı; üstte COMBO x3 yazıyor."
                  className="mx-auto h-auto max-h-[22rem] w-auto rounded-xs border border-white/10 object-contain"
                />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Dört yönden gelen blokları ortada birleştirirsiniz; üç aynı
                  renk patlar, hızlı patlatınca kombo büyür. Üçüncü komboda bir
                  güç açılır: roket, bomba, joker ya da ağır çekim. Yanında
                  süresiz bulmaca modu — elde yapılmış 60 bölüm. Renk körü modu
                  her rengi kendi simgesiyle ayırıyor. Reklam yok, uygulama içi
                  satın alma yok, hesap yok.
                </p>
                <span
                  aria-hidden
                  className="mt-auto h-px w-10 bg-crimson transition-all duration-300 group-hover:w-full"
                />
                <div className="flex min-h-11 items-center justify-between gap-3">
                  <span className="font-mono text-[13px] text-muted-foreground">
                    Ücretsiz
                  </span>
                  <a
                    href="https://play.google.com/store/apps/details?id=app.netlify.wonderful_nougat_7740ff.twa"
                    target="_blank"
                    rel="noreferrer noopener"
                    className="-mr-1 rounded-xs px-1 py-2 font-mono text-xs uppercase tracking-[0.12em] text-crimson-lit underline-offset-4 hover:underline"
                  >
                    Play'de aç →<span className="sr-only"> — Block Merge</span>
                  </a>
                </div>
              </article>
            </Reveal>

            <Reveal delay={90}>
              <article className="group flex h-full flex-col gap-3 rounded-sm border border-white/10 bg-white/[0.03] p-5 backdrop-blur-sm transition-colors duration-200 hover:border-crimson-lit/50">
                <div className="flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                    Android · Masaüstü
                  </span>
                  <span className="rounded-xs bg-crimson/25 px-2 py-0.5 font-mono text-[11px] uppercase tracking-[0.12em] text-crimson-lit">
                    Geliştiriliyor
                  </span>
                </div>
                <h3 className="font-display text-lg font-bold uppercase tracking-wide">
                  Kırık Köprüler
                </h3>
                <GameMoment />
                <p className="text-sm leading-relaxed text-muted-foreground">
                  Kalıcı ölümlü, metin tabanlı bir kıyamet sonrası rol yapma
                  oyunu. Zar, savaş, ticaret, fraksiyonlar ve keşif sisiyle
                  açılan bir harita. Ölünce eşyaların gider, öğrendiklerin
                  kalır — ve bir sonraki hayat onları bilerek başlar.
                </p>
                <span
                  aria-hidden
                  className="mt-auto h-px w-10 bg-crimson transition-all duration-300 group-hover:w-full"
                />
              </article>
            </Reveal>
          </div>
        </section>

        {/* ── 5 · iletişim ───────────────────────────────── */}
        <section className="flex min-h-svh items-center justify-center px-6 py-24">
          <Reveal>
            <div className="w-full max-w-xl rounded-sm border border-white/10 bg-white/[0.04] px-8 py-12 text-center shadow-[0_8px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:px-12">
              <div className="flex flex-col items-center gap-7">
                <Eyebrow>İletişim</Eyebrow>
                <h2 className="font-display text-2xl font-bold uppercase leading-[1.1] tracking-tight sm:text-4xl">
                  Bir işiniz mi var?
                  <span className="block text-crimson-lit">Anlatın, çözelim.</span>
                </h2>
                <p className="max-w-md text-balance text-base text-muted-foreground">
                  İhtiyacınızı birkaç cümleyle yazın; yapılabilir mi, ne kadar
                  sürer, ne kadar tutar — net cevap veririm.
                </p>
                <a href={MAILTO} className={buttonVariants({ size: "lg" })}>
                  E-posta gönder
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="font-mono text-sm text-crimson-lit underline-offset-4 hover:underline"
                >
                  {EMAIL}
                </a>
              </div>
            </div>
          </Reveal>
        </section>
      </main>
    </>
  )
}

export default ScrollStage
