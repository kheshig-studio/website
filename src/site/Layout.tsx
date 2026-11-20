import { useState, type ReactNode } from "react"
import { Arrow, Button, Container, Label, cx } from "./ui"
import { EMAIL, LINKS, PROOF } from "./data"
import { href, isEn, otherLangPath, t } from "./i18n"

const NAV = [
  { href: href("products"), label: t("Ürünler", "Products") },
  { href: href("games"), label: t("Oyunlar", "Games") },
  { href: href("about"), label: t("Hakkımda", "About") },
]

const CONTACT = { href: href("contact"), label: t("İş teklifi", "Hire me") }

function isActive(path: string) {
  if (typeof window === "undefined") return false
  return window.location.pathname.startsWith(path)
}

function Logo() {
  return (
    <a href={href("home")} className="flex items-center gap-2.5" aria-label={t("Kheshig Studio — ana sayfa", "Kheshig Studio — home")}>
      <img src="/mark.png" alt="" width={40} height={30} className="h-[30px] w-auto" />
      <span className="font-display text-[19px] font-bold tracking-[-0.02em]">
        Kheshig<span className="font-medium text-ink-soft"> Studio</span>
      </span>
    </a>
  )
}

/** TR / EN — bu sayfanın öbür dildeki karşılığına gider. */
function LangSwitch({ className }: { className?: string }) {
  return (
    <a
      href={otherLangPath()}
      hrefLang={isEn ? "tr" : "en"}
      lang={isEn ? "tr" : "en"}
      aria-label={isEn ? "Türkçe sürüm" : "English version"}
      className={cx(
        "inline-flex min-h-9 items-center gap-1 rounded-full px-3 font-mono text-xs font-medium tracking-[0.12em] text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink",
        className,
      )}
    >
      <span className={cx(!isEn && "text-ink")}>TR</span>
      <span aria-hidden className="text-line">/</span>
      <span className={cx(isEn && "text-ink")}>EN</span>
    </a>
  )
}

/* ── Gece modu ─────────────────────────────────────────────
   Seçim <html data-theme> olarak yazılır ve tarayıcıda hatırlanır.
   Sayfa yüklenmeden önce okuyan küçük betik vite.config.ts'te (themeBoot). */
type Theme = "light" | "dark"

function currentTheme(): Theme {
  if (typeof document === "undefined") return "light"
  const set = document.documentElement.dataset.theme
  if (set === "light" || set === "dark") return set
  return window.matchMedia?.("(prefers-color-scheme: dark)").matches ? "dark" : "light"
}

function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(currentTheme)
  const next: Theme = theme === "dark" ? "light" : "dark"
  const label =
    next === "dark" ? t("Gece moduna geç", "Switch to dark mode") : t("Gündüz moduna geç", "Switch to light mode")
  return (
    <button
      type="button"
      onClick={() => {
        document.documentElement.dataset.theme = next
        try {
          localStorage.setItem("theme", next)
        } catch {
          /* gizli sekme vb. — seçim bu sayfada yine geçerli */
        }
        setTheme(next)
      }}
      aria-label={label}
      title={label}
      className="inline-flex size-9 items-center justify-center rounded-full text-ink-soft transition-colors hover:bg-paper-deep hover:text-ink"
    >
      <svg viewBox="0 0 24 24" className="size-[18px]" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
        {theme === "dark" ? (
          // güneş: gündüz moduna geç
          <>
            <circle cx="12" cy="12" r="4" />
            <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" strokeLinecap="round" />
          </>
        ) : (
          // ay: gece moduna geç
          <path d="M20 14.5A8 8 0 0 1 9.5 4a8 8 0 1 0 10.5 10.5Z" strokeLinejoin="round" />
        )}
      </svg>
    </button>
  )
}

function Header() {
  const [open, setOpen] = useState(false)
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-md">
      <Container className="flex h-16 items-center justify-between gap-6">
        <Logo />

        <nav aria-label={t("Ana menü", "Main menu")} className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              aria-current={isActive(n.href) ? "page" : undefined}
              className={cx(
                "rounded-full px-4 py-2 text-[15px] transition-colors",
                isActive(n.href) ? "bg-ink text-paper" : "text-ink-soft hover:bg-paper-deep hover:text-ink",
              )}
            >
              {n.label}
            </a>
          ))}
          <LangSwitch className="ml-1" />
          <ThemeToggle />
          <a
            href={CONTACT.href}
            className="ml-2 inline-flex items-center gap-1.5 rounded-full border border-ink px-4 py-2 text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            {CONTACT.label} <Arrow />
          </a>
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <LangSwitch />
          <ThemeToggle />
          <button
            type="button"
            className="-mr-2 inline-flex size-11 items-center justify-center rounded-full"
            aria-expanded={open}
            aria-controls="mobil-menu"
            aria-label={open ? t("Menüyü kapat", "Close menu") : t("Menüyü aç", "Open menu")}
            onClick={() => setOpen((v) => !v)}
          >
            <svg viewBox="0 0 24 24" className="size-6" fill="none" stroke="currentColor" strokeWidth="1.8" aria-hidden>
              {open ? <path d="M6 6l12 12M18 6L6 18" strokeLinecap="round" /> : <path d="M4 8h16M4 16h16" strokeLinecap="round" />}
            </svg>
          </button>
        </div>
      </Container>

      {open && (
        <nav id="mobil-menu" aria-label={t("Mobil menü", "Mobile menu")} className="border-t border-line md:hidden">
          <Container className="flex flex-col py-3">
            {[...NAV, CONTACT].map((n) => (
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
    <section className="bg-night text-on-night">
      <Container className="grid gap-10 py-20 sm:py-28 md:grid-cols-[1.4fr_1fr] md:items-end">
        <div>
          <Label className="text-night-soft">{t("Bir işin mi var?", "Got a project?")}</Label>
          <h2 className="mt-5 text-4xl font-bold leading-[1.02] tracking-[-0.03em] sm:text-6xl">
            {t("Birkaç cümleyle anlat,", "Tell me in a few lines,")}
            <br />
            {t("net cevap vereyim.", "get a straight answer.")}
          </h2>
          <p className="mt-6 max-w-lg text-lg leading-relaxed text-night-soft">
            {t(
              "Yapılabilir mi, ne kadar sürer, ne tutar — ilk mesajda açıkça söylerim. Bot, veri, masaüstü araç ya da web sitesi.",
              "Can it be done, how long, how much — I'll tell you plainly in my first reply. Bots, data, desktop tools or websites.",
            )}
          </p>
        </div>
        <div className="flex flex-col items-start gap-4 md:items-end">
          <Button href={href("contact")} variant="light">
            {t("Mesaj gönder", "Send a message")} <Arrow />
          </Button>
          <a
            href={LINKS.bionluk}
            target="_blank"
            rel="noreferrer noopener"
            className="text-[15px] text-night-soft underline decoration-night-line underline-offset-4 transition-colors hover:text-on-night"
          >
            {t(
              `ya da Bionluk güvencesiyle çalış · ★ ${PROOF.bionlukRating} (${PROOF.bionlukOrders} sipariş)`,
              `★ ${PROOF.bionlukRating} on Bionluk · ${PROOF.bionlukOrders} completed orders`,
            )}
          </a>
        </div>
      </Container>
    </section>
  )
}

function Footer() {
  const col = "flex flex-col gap-2.5 text-[15px]"
  const link = "text-night-soft transition-colors hover:text-on-night"
  return (
    <footer className="border-t border-night-line bg-night text-on-night">
      <Container className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
        <div className="flex flex-col gap-3">
          <span className="font-display text-xl font-bold">Kheshig Studio</span>
          <p className="max-w-xs text-[15px] leading-relaxed text-night-soft">
            {t(
              "Yazılım, otomasyon ve web. Karabük'ten, uzaktan çalışıyorum.",
              "Software, automation and web. Working remotely from Karabük, Türkiye.",
            )}
          </p>
        </div>
        <div className={col}>
          <Label className="mb-1 text-night-soft">Site</Label>
          <a className={link} href={href("products")}>{t("Satılık programlar", "Products")}</a>
          <a className={link} href={href("products", "ucretsiz")}>{t("Ücretsiz programlar", "Free tools")}</a>
          <a className={link} href={href("games")}>{t("Oyunlar", "Games")}</a>
          <a className={link} href={href("about")}>{t("Hakkımda", "About")}</a>
        </div>
        <div className={col}>
          <Label className="mb-1 text-night-soft">{t("Profiller", "Profiles")}</Label>
          <a className={link} href={LINKS.bionluk} target="_blank" rel="noreferrer noopener">Bionluk</a>
          <a className={link} href={LINKS.r10} target="_blank" rel="noreferrer noopener">R10</a>
          <a className={link} href={LINKS.github} target="_blank" rel="noreferrer noopener">GitHub</a>
          <a className={link} href={LINKS.linkedin} target="_blank" rel="noreferrer noopener">LinkedIn</a>
        </div>
        <div className={col}>
          <Label className="mb-1 text-night-soft">{t("İletişim", "Contact")}</Label>
          <a className={cx(link, "break-all")} href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <a className={link} href={href("contact")}>{t("İş teklifi gönder", "Send a project brief")}</a>
        </div>
      </Container>
      <Container className="flex flex-wrap justify-between gap-3 border-t border-night-line py-6 font-mono text-xs text-night-soft">
        <span>© {new Date().getFullYear()} Kheshig Studio</span>
        <span>kheshig.studio</span>
      </Container>
    </footer>
  )
}

export function Layout({ children, cta = true }: { children: ReactNode; cta?: boolean }) {
  return (
    <>
      <a
        href="#icerik"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-full focus:bg-ink focus:px-4 focus:py-2 focus:text-paper"
      >
        {t("İçeriğe geç", "Skip to content")}
      </a>
      <Header />
      <main id="icerik">{children}</main>
      {cta && <CtaBand />}
      <Footer />
    </>
  )
}
