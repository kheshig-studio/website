import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Container, Label, PageHeader } from "@/site/ui"
import { LINKS, PROOF } from "@/site/data"
import { t } from "@/site/i18n"

const FACTS = [
  [t("Konum", "Location"), t("Karabük, Türkiye · uzaktan (GMT+3)", "Karabük, Türkiye · remote (GMT+3)")],
  [
    t("Eğitim", "Education"),
    t("Karabük Üniversitesi, Yapay Zeka Operatörlüğü (2027)", "Karabük University, Artificial Intelligence Operator programme (2027)"),
  ],
  [t("Diller", "Languages"), t("Türkçe (ana dil) · İngilizce (profesyonel)", "Turkish (native) · English (professional working)")],
  [
    "Bionluk",
    t(
      `★ ${PROOF.bionlukRating} · ${PROOF.bionlukOrders} tamamlanan sipariş`,
      `★ ${PROOF.bionlukRating} · ${PROOF.bionlukOrders} completed orders`,
    ),
  ],
]

const PRINCIPLES = [
  {
    title: t("Ölçmeden söz vermem.", "I measure before I promise."),
    text: t(
      "Bir veri kaynağından kaç kayıt çıkacağını önce kendim deneyip ölçerim, sonra rakam veririm. Google Haritalar tek aramada ~120 sonuçta durur; ilçe ilçe tarayınca 3 kattan fazlası çıkar — bunu ölçerek buldum.",
      "I test how many records a data source actually yields before quoting a number. Google Maps stops at ~120 results per search; scanning district by district returns more than 3× that — I found out by measuring.",
    ),
  },
  {
    title: t("Demo değil, ürün.", "Products, not demos."),
    text: t(
      "Sattığım araçların lisans sistemi, hata yönetimi ve kullanım kılavuzu var. Tek .exe olarak teslim edilir; karşı tarafta hiçbir kurulum gerekmez.",
      "The tools I sell have licensing, error handling and a user guide. They ship as a single .exe; nothing to install on the other end.",
    ),
  },
  {
    title: t("Yazdığımı ben de çalıştırırım.", "I run what I build."),
    text: t(
      "Botlarımı günlerce gözetimsiz çalıştırıyorum; neyin bozulduğunu — sürücü uyumsuzluğu, ölü alan adı, yarım kalan kayıt — deneyerek biliyorum ve baştan önlüyorum.",
      "My bots run unattended for days, so I know first-hand what breaks — driver version drift, dead domains, half-written records — and design against it from the start.",
    ),
  },
]

const STACK = [
  [t("Diller", "Languages"), "Python, TypeScript / JavaScript, Kotlin, SQL"],
  [t("Veri kazıma", "Scraping"), "Selenium, undetected-chromedriver, requests, BeautifulSoup, yt-dlp"],
  [t("Backend & veri", "Backend & data"), "FastAPI, Supabase / PostgreSQL, Cloudflare Workers, pandas, openpyxl"],
  [t("Yapay zeka", "AI"), t("Anthropic Claude API (üretimde), Claude Code", "Anthropic Claude API (in production), Claude Code")],
  [t("Diğer", "Other"), "PyInstaller, tkinter, Jetpack Compose, React, Vite, Tailwind, GitHub Actions, Telegram Bot API"],
]

function About() {
  return (
    <Layout>
      <PageHeader
        label={t("Hakkımda", "About")}
        title={t("Merhaba, ben Muhammet.", "Hi, I'm Muhammet.")}
        intro={t(
          "Kheshig Studio adıyla çalışan freelance bir yazılımcıyım. Veri kazıma botları, otomasyon hatları, masaüstü araçlar ve web siteleri yazıyor; bir kısmını ürün olarak satıyorum. Boş zamanımda oyun yapıyorum.",
          "I'm a freelance developer working as Kheshig Studio. I build scrapers, automation pipelines, desktop tools and websites — and sell some of them as products. In my spare time I make games.",
        )}
      />

      <Container className="grid gap-14 py-16 sm:py-20 lg:grid-cols-[1fr_1.6fr] lg:gap-20">
        <aside className="lg:sticky lg:top-24 lg:self-start">
          <dl className="flex flex-col rounded-2xl border border-line bg-card">
            {FACTS.map(([k, v]) => (
              <div key={k} className="border-b border-line px-6 py-5 last:border-0">
                <dt>
                  <Label className="text-ink-soft">{k}</Label>
                </dt>
                <dd className="mt-1.5 text-[15px] font-medium leading-snug">{v}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-4 flex flex-wrap gap-2">
            {[
              ["Bionluk", LINKS.bionluk],
              ["GitHub", LINKS.github],
              ["LinkedIn", LINKS.linkedin],
              ["R10", LINKS.r10],
            ].map(([label, url]) => (
              <a
                key={label}
                href={url}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-10 items-center gap-1.5 rounded-full border border-line bg-card px-4 text-sm font-medium transition-colors hover:border-ink"
              >
                {label} <Arrow className="size-3.5" />
              </a>
            ))}
          </div>
        </aside>

        <div className="flex flex-col gap-16">
          <section>
            <Label className="text-brand">{t("Nasıl çalışırım", "How I work")}</Label>
            <div className="mt-8 flex flex-col gap-10">
              {PRINCIPLES.map((p, i) => (
                <div key={p.title} className="grid gap-3 sm:grid-cols-[3rem_1fr]">
                  <span className="font-mono text-sm text-ink-soft">0{i + 1}</span>
                  <div>
                    <h2 className="text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{p.title}</h2>
                    <p className="mt-3 max-w-2xl text-lg leading-relaxed text-ink-soft">{p.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section>
            <Label className="text-brand">{t("Kullandığım teknolojiler", "Tech I use")}</Label>
            <dl className="mt-8 border-t border-line">
              {STACK.map(([k, v]) => (
                <div key={k} className="grid gap-1 border-b border-line py-5 sm:grid-cols-[11rem_1fr] sm:gap-6">
                  <dt className="font-display text-lg font-semibold">{k}</dt>
                  <dd className="leading-relaxed text-ink-soft">{v}</dd>
                </div>
              ))}
            </dl>
          </section>

          <section className="grid gap-8 rounded-2xl border border-line bg-card p-7 sm:p-10 xl:grid-cols-[minmax(0,1fr)_minmax(0,1.6fr)] xl:items-center">
            <img
              src="/logo.png"
              alt={t(
                "Kheshig logosu: koyu kırmızı, dönen bir göz amblemi ve altında KHESHIG yazısı.",
                "Kheshig logo: a dark red spinning eye emblem above the word KHESHIG.",
              )}
              width={1200}
              height={926}
              loading="lazy"
              className="h-auto w-full max-w-72"
            />
            <div>
              <Label className="text-brand">
                {t("Neden ", "Why ")}"<span lang="en">Kheshig</span>"?
              </Label>
              <h2 className="mt-4 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">{t("Gözcü, muhafız.", "Watcher, guardian.")}</h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                {t(
                  "Keşig, Moğol İmparatorluğu'nda hükümdarın çadırını gece gündüz bekleyen muhafız birliğiydi — nöbetteyken gözünü ayırmayan gözcüler. Logodaki göz oradan geliyor.",
                  "The Kheshig was the Mongol Empire's imperial guard, watching over the ruler's tent day and night — sentries who never took their eyes off their post. The eye in the logo comes from there.",
                )}
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                {t(
                  "Yazdığım araçlar da aynı işi yapıyor: siz uyurken siteleri, fiyatları ve akışları izliyor, bir şey değişince haber veriyor. Bana emanet ettiğiniz işi de aynı dikkatle beklerim.",
                  "My tools do the same job: they watch sites, prices and feeds while you sleep and tell you when something changes. I guard the work you trust me with just as closely.",
                )}
              </p>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  )
}

mount(<About />)
