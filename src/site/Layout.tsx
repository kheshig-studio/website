import { useState, type ReactNode } from "react"
import { Arrow, Button, Container, Label, cx } from "./ui"
import { EMAIL, JOB_MAIL, LINKS, PROOF } from "./data"

const NAV = [
  { href: "/urunler/", label: "Ürünler" },
  { href: "/ucretsiz/", label: "Ücretsiz" },
  { href: "/oyunlar/", label: "Oyunlar" },
  { href: "/hakkimda/", label: "Hakkımda" },
]

function isActive(href: string) {
  if (typeof window === "undefined") return false
  return window.location.pathname.startsWith(href)
}

function Logo() {
  return (
    <a href="/" className="flex items-center gap-2.5" aria-label="Kheshig Studio — ana sayfa">
      <img src="/mark.png" alt="" width={34} height={30} className="h-[30px] w-auto" />
      <span className="font-display text-[19px] font-bold tracking-[-0.02em]">
        Kheshig<span className="font-medium text-ink-soft"> Studio</span>
      </span>
    </a>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label="Ana menü" className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={cx(
                "rounded-full px-4 py-2 text-[15px] transition-colors",
                isActive(n.href)
                  ? "bg-ink text-paper"
                  : "text-ink-soft hover:bg-paper-deep hover:text-ink",
              )}
            >
              {n.label}
            </a>
          ))}
          <a
            href="/iletisim/"
            className="ml-3 inline-flex items-center gap-1.5 rounded-full border border-ink px-4 py-2 text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            İş teklifi <Arrow />
          </a>
        </nav>

        <button
          type="button"
          className="-mr-2 inline-flex size-11 items-center justify-center rounded-full md:hidden"
          aria-expanded={open}
          aria-controls="mobil-menu"
          aria-label={open ? "Menüyü kapat" : "Menüyü aç"}
          onClick={() => setOpen((v) => !v)}
        >
          <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" />
            ) : (
              <path d="M4 8h16M4 16h16" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </Container>

      {open && (
        <nav id="mobil-menu" aria-label="Mobil menü" className="border-t border-line md:hidden">
          <Container className="flex flex-col py-3">
            {[...NAV, { href: "/iletisim/", label: "İş teklifi" }].map((n) => (
              <a
                key={n.href}
                href={n.href}
                aria-current={isActive(n.href) ? "page" : undefined}
                className={cx(
                  "flex min-h-12 items-center justify-between border-b border-line/70 font-display text-2xl font-semibold last:border-0",
                  isActive(n.href) ? "text-brand" : "text-ink",
                )}
              >
                {n.label} <Arrow className="size-5" />
              </a>
            ))}
          </Container>
        </nav>
      )}
    </header>
  )
}

/** Her sayfanın sonunda: ziyaretçiyi işe yönlendiren koyu bant. */
export function CtaBand() {
  return (
    <section className="bg-night text-paper">
      <Container className="grid gap-10 py-20 sm:py-28 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <Label className="text-night-soft">Bir işin mi var?</Label>
          <h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            Birkaç cümleyle anlat,
            <br />
            net cevap vereyim.
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-night-soft">
            Yapılabilir mi, ne kadar sürer, ne tutar — ilk mesajda açıkça
            söylerim. Bot, veri, masaüstü araç ya da web sitesi.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <Button href={JOB_MAIL} variant="light">
            E-posta gönder <Arrow />
          </Button>
          <a
            href={LINKS.bionluk}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[15px] text-night-soft underline decoration-night-line underline-offset-4 transition-colors hover:text-paper"
          >
            ya da Bionluk güvencesiyle çalış · ★ {PROOF.bionlukRating} ({PROOF.bionlukOrders} sipariş)
          </a>
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  const col = "flex flex-col gap-2.5 text-[15px]"
  const link = "text-night-soft transition-colors hover:text-paper"
  return (
    <footer className="border-t border-night-line bg-night text-paper">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="font-display text-xl font-bold">Kheshig Studio</span>
          <p className="max-w-xs text-[15px] leading-relaxed text-night-soft">
            Yazılım, otomasyon ve web. Karabük'ten, uzaktan çalışıyorum.
          </p>
        </div>
        <div className={col}>
          <Label className="mb-1 text-night-soft">Site</Label>
          <a className={link} href="/urunler/">Satılık programlar</a>
          <a className={link} href="/ucretsiz/">Ücretsiz programlar</a>
          <a className={link} href="/oyunlar/">Oyunlar</a>
          <a className={link} href="/hakkimda/">Hakkımda</a>
        </div>
        <div className={col}>
          <Label className="mb-1 text-night-soft">Profiller</Label>
          <a className={link} href={LINKS.bionluk} target="_blank" rel="noreferrer noopener">Bionluk</a>
          <a className={link} href={LINKS.r10} target="_blank" rel="noreferrer noopener">R10</a>
          <a className={link} href={LINKS.github} target="_blank" rel="noreferrer noopener">GitHub</a>
          <a className={link} href={LINKS.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
        </div>
        <div className={col}>
          <Label className="mb-1 text-night-soft">İletişim</Label>
          <a className={cx(link, "break-all")} href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className={link} href="/iletisim/">İş teklifi gönder</a>
        </div>
      </Container>
      <Container className="flex flex-wrap justify-between gap-3 border-t border-night-line py-6 font-mono text-xs text-night-soft">
        <span>© {new Date().getFullYear()} Kheshig Studio</span>
        <span>kheshig.studio</span>
      </Container>
    </footer>
  )
}

export function Layout({
  children,
  cta = true,
}: {
  children: ReactNode
  cta?: boolean
}) {
  return (
    <>
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        İçeriğe geç
      </a>
      <Header />
      <main id="icerik">{children}</main>
      {cta && <CtaBand />}
      <Footer />
    </>
  )
}
