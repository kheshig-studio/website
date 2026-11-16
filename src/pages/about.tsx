import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Container, Label, PageHeader } from "@/site/ui"
import { LINKS, PROOF } from "@/site/data"

const FACTS = [
  ["Konum", "Karabük, Türkiye · uzaktan (GMT+3)"],
  ["Eğitim", "Karabük Üniversitesi, Yapay Zeka Operatörlüğü (2027)"],
  ["Diller", "Türkçe (ana dil) · İngilizce (profesyonel)"],
  ["Bionluk", `★ ${PROOF.bionlukRating} · ${PROOF.bionlukOrders} tamamlanan sipariş`],
]

const PRINCIPLES = [
  {
    title: "Ölçmeden söz vermem.",
    text: "Bir veri kaynağından kaç kayıt çıkacağını önce kendim deneyip ölçerim, sonra rakam veririm. Google Haritalar tek aramada ~120 sonuçta durur; ilçe ilçe tarayınca 3 kattan fazlası çıkar — bunu ölçerek buldum.",
  },
  {
    title: "Demo değil, ürün.",
    text: "Sattığım araçların lisans sistemi, hata yönetimi ve kullanım kılavuzu var. Tek .exe olarak teslim edilir; karşı tarafta hiçbir kurulum gerekmez.",
  },
  {
    title: "Yazdığımı ben de çalıştırırım.",
    text: "Botlarımı günlerce gözetimsiz çalıştırıyorum; neyin bozulduğunu — sürücü uyumsuzluğu, ölü alan adı, yarım kalan kayıt — deneyerek biliyorum ve baştan önlüyorum.",
  },
]

const STACK = [
  ["Diller", "Python, TypeScript / JavaScript, Kotlin, SQL"],
  ["Veri kazıma", "Selenium, undetected-chromedriver, requests, BeautifulSoup, yt-dlp"],
  ["Backend & veri", "FastAPI, Supabase / PostgreSQL, pandas, openpyxl"],
  ["Yapay zeka", "Anthropic Claude API (üretimde), Claude Code"],
  ["Diğer", "PyInstaller, tkinter, Jetpack Compose, React, Vite, Tailwind, GitHub Actions, Telegram Bot API"],
]

function About() {
  return (
    <Layout>
      <PageHeader
        label="Hakkımda"
        title={
          <>
            Merhaba, ben Muhammet.
          </>
        }
        intro="Kheshig Studio adıyla çalışan freelance bir yazılımcıyım. Veri kazıma botları, otomasyon hatları, masaüstü araçlar ve web siteleri yazıyor; bir kısmını ürün olarak satıyorum. Boş zamanımda oyun yapıyorum."
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
            ].map(([label, href]) => (
              <a
                key={label}
                href={href}
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
            <Label className="text-brand">Nasıl çalışırım</Label>
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
            <Label className="text-brand">Kullandığım teknolojiler</Label>
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
              alt="Kheshig logosu: koyu kırmızı, dönen bir göz amblemi ve altında KHESHIG yazısı."
              width={1200}
              height={926}
              loading="lazy"
              className="h-auto w-full max-w-72"
            />
            <div>
              <Label className="text-brand">Neden "Kheshig"?</Label>
              <h2 className="mt-4 text-2xl font-bold tracking-[-0.02em] sm:text-3xl">
                Gözcü, muhafız.
              </h2>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                Keşig, Moğol İmparatorluğu'nda hükümdarın çadırını gece gündüz
                bekleyen muhafız birliğiydi — nöbetteyken gözünü ayırmayan
                gözcüler. Logodaki göz oradan geliyor.
              </p>
              <p className="mt-4 text-lg leading-relaxed text-ink-soft">
                Yazdığım araçlar da aynı işi yapıyor: siz uyurken siteleri,
                fiyatları ve akışları izliyor, bir şey değişince haber veriyor.
                Bana emanet ettiğiniz işi de aynı dikkatle beklerim.
              </p>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  )
}

mount(<About />)
