import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Button, Container, Label } from "@/site/ui"
import { FREE, GAMES, LINKS, PAID, PROOF } from "@/site/data"

const SERVICES = [
  {
    n: "01",
    title: "Otomasyon & botlar",
    text: "Elle yapılan tekrar eden işi koda devredin: veri kazıma, fiyat ve stok takibi, Telegram botları, Excel otomasyonu.",
  },
  {
    n: "02",
    title: "Masaüstü araçlar",
    text: "Tek .exe dosyası olarak teslim — müşterinizin bilgisayarına Python ya da kurulum gerekmez. Lisans sistemi dahil.",
  },
  {
    n: "03",
    title: "Web siteleri",
    text: "Kurumsal site, açılış sayfası, ürün vitrini. Hızlı, mobil uyumlu, kendi alan adınızda yayında.",
  },
]

const STEPS = [
  ["Anlatın", "Ne lazım, ne kadar sürede — birkaç cümle yeter."],
  ["Net teklif", "Yapılabilir mi, süre ve fiyat. Belirsiz söz yok."],
  ["Teslim", "Çalışan iş ve kullanım notu. Sonrasında da ulaşabilirsiniz."],
]

function Shelf() {
  const rows = [
    ...PAID.map((p) => ({ name: p.name, kind: p.kind, right: p.price ?? "—", href: `/urunler/#${p.slug}` })),
    ...FREE.map((p) => ({ name: p.name, kind: p.kind, right: "Ücretsiz", href: `/ucretsiz/#${p.slug}` })),
    ...GAMES.map((g) => ({ name: g.name, kind: "Oyun", right: g.status === "Yapım aşamasında" ? "Yakında" : "Oyna", href: `/oyunlar/#${g.slug}` })),
  ]
  return (
    <div className="rounded-2xl border border-line bg-card p-2 shadow-[0_30px_60px_-40px_rgba(22,21,15,0.45)]">
      <div className="flex items-center justify-between px-4 pb-3 pt-3">
        <Label className="text-ink-soft">Rafta ne var</Label>
        <Label className="text-ink-soft">{rows.length} iş</Label>
      </div>
      <ul>
        {rows.map((r) => (
          <li key={r.name}>
            <a
              href={r.href}
              className="group flex min-h-14 items-center gap-4 rounded-xl px-4 transition-colors hover:bg-paper"
            >
              <span className="hidden w-20 shrink-0 font-mono text-[11px] uppercase tracking-[0.14em] text-ink-soft sm:block">
                {r.kind}
              </span>
              <span className="min-w-0 flex-1 font-display text-lg font-semibold tracking-[-0.01em]">
                {r.name}
              </span>
              <span className="font-mono text-[13px] text-ink-soft group-hover:text-ink">
                {r.right}
              </span>
              <Arrow className="text-ink-soft transition-transform group-hover:translate-x-0.5 group-hover:text-ink" />
            </a>
          </li>
        ))}
      </ul>
    </div>
  )
}

function Home() {
  return (
    <Layout>
      {/* ── hero ─────────────────────────────── */}
      <section className="border-b border-line">
        <Container className="grid grid-cols-[minmax(0,1fr)] gap-14 pb-20 pt-14 sm:pt-20 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1fr)] lg:items-center lg:gap-16 lg:pb-28">
          <div>
            <Label className="text-brand">Freelance yazılımcı · Karabük, uzaktan</Label>
            <h1 className="mt-6 text-[2.9rem] font-bold leading-[0.98] tracking-[-0.035em] sm:text-7xl lg:text-[5.4rem]">
              Saatler süren işi dakikaya indiren yazılımlar.
            </h1>
            <p className="mt-7 max-w-xl text-lg leading-relaxed text-ink-soft sm:text-xl">
              Botlar, veri kazıma, masaüstü araçlar ve web siteleri yazıyorum.
              Demo değil, her gün kendi kullandığım ve sattığım ürünler.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Button href="/iletisim/">
                Projeni anlat <Arrow />
              </Button>
              <Button href="/urunler/" variant="ghost">
                Ürünlere bak
              </Button>
            </div>
            <a
              href={LINKS.bionluk}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-10 inline-flex flex-wrap items-center gap-x-3 gap-y-1 text-[15px] text-ink-soft hover:text-ink"
            >
              <span className="font-semibold text-ink">★ {PROOF.bionlukRating}</span>
              <span>Bionluk'ta {PROOF.bionlukOrders} tamamlanan sipariş</span>
              <span className="underline underline-offset-4">Yorumları gör</span>
            </a>
          </div>
          <Shelf />
        </Container>
      </section>

      {/* ── hizmetler ────────────────────────── */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <Label className="text-brand">Ne yapıyorum</Label>
              <h2 className="mt-5 max-w-2xl text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
                Üç iş, tek masa.
              </h2>
            </div>
            <a href="/hakkimda/" className="inline-flex items-center gap-2 text-[15px] font-medium underline-offset-4 hover:underline">
              Ben kimim? <Arrow />
            </a>
          </div>
          <div className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-line bg-line md:grid-cols-3">
            {SERVICES.map((s) => (
              <div key={s.n} className="flex flex-col bg-card p-7 sm:p-9">
                <span className="font-mono text-sm text-brand">{s.n}</span>
                <h3 className="mt-10 text-2xl font-bold tracking-[-0.02em]">{s.title}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{s.text}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── üç kapı ──────────────────────────── */}
      <section className="border-b border-line">
        <Container className="py-20 sm:py-28">
          <Label className="text-brand">Keşfet</Label>
          <h2 className="mt-5 max-w-3xl text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            Satılık araçlar, ücretsiz programlar, oyunlar.
          </h2>
          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {[
              { href: "/urunler/", label: "Satılık", title: "Programlar", text: `${PAID.length} hazır araç. Tek seferlik ödeme, kendi bilgisayarınızda çalışır.`, dark: true },
              { href: "/ucretsiz/", label: "Ücretsiz", title: "Açık kaynak", text: "İndirin, kullanın, kodunu inceleyin. Hesap yok, reklam yok." },
              { href: "/oyunlar/", label: "Oyunlar", title: "Oyna", text: "Play'de yayında olanlar ve tarayıcıdan hemen oynananlar." },
            ].map((d) => (
              <a
                key={d.href}
                href={d.href}
                className={
                  "group flex min-h-72 flex-col rounded-2xl border p-7 transition-colors sm:p-9 " +
                  (d.dark
                    ? "border-ink bg-ink text-paper hover:bg-brand hover:border-brand"
                    : "border-line bg-card hover:border-ink")
                }
              >
                <Label className={d.dark ? "text-night-soft" : "text-ink-soft"}>{d.label}</Label>
                <h3 className="mt-auto text-4xl font-bold tracking-[-0.03em]">{d.title}</h3>
                <p className={"mt-3 leading-relaxed " + (d.dark ? "text-night-soft group-hover:text-paper/80" : "text-ink-soft")}>
                  {d.text}
                </p>
                <span className="mt-6 inline-flex items-center gap-2 text-[15px] font-medium">
                  Git <Arrow className="transition-transform group-hover:translate-x-1" />
                </span>
              </a>
            ))}
          </div>
        </Container>
      </section>

      {/* ── süreç ────────────────────────────── */}
      <section>
        <Container className="py-20 sm:py-28">
          <Label className="text-brand">Nasıl çalışıyoruz</Label>
          <ol className="mt-10 grid gap-10 md:grid-cols-3 md:gap-8">
            {STEPS.map(([t, d], i) => (
              <li key={t} className="border-t-2 border-ink pt-6">
                <span className="font-mono text-sm text-ink-soft">Adım {i + 1}</span>
                <h3 className="mt-3 text-3xl font-bold tracking-[-0.02em]">{t}</h3>
                <p className="mt-3 leading-relaxed text-ink-soft">{d}</p>
              </li>
            ))}
          </ol>
        </Container>
      </section>
    </Layout>
  )
}

mount(<Home />)
