import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Container, Label, PageHeader } from "@/site/ui"
import { ProductCard } from "@/site/cards"
import { FREE, LINKS, PAID } from "@/site/data"
import { href, t } from "@/site/i18n"

const hasCheckout = PAID.some((p) => p.buy)

/** Bölüm başlığı: sticky menünün altında kalmasın diye scroll-mt. */
function SectionHead({ id, label, title, intro }: { id: string; label: string; title: string; intro: string }) {
  return (
    <div id={id} className="scroll-mt-24">
      <Label className="text-brand">{label}</Label>
      <h2 className="mt-4 text-3xl font-bold tracking-[-0.03em] sm:text-5xl">{title}</h2>
      <p className="mt-4 max-w-2xl text-lg leading-relaxed text-ink-soft">{intro}</p>
    </div>
  )
}

function Products() {
  return (
    <Layout>
      <PageHeader
        label={t("Ürünler", "Products")}
        title={t("Vaat değil, çalışan araçlar.", "Not promises — working tools.")}
        intro={t(
          "Her birini önce kendim kullandım. Masaüstü araçlar tek dosya olarak gelir — Python, kütüphane ya da kurulum gerekmez.",
          "I used every one of these myself first. Desktop tools come as a single file — no Python, no libraries, no installer.",
        )}
      />

      {/* bölümlere atla */}
      <Container className="flex flex-wrap gap-2 pt-8">
        {[
          ["satilik", t(`Satılık · ${PAID.length}`, `For sale · ${PAID.length}`)],
          ["ucretsiz", t(`Ücretsiz · ${FREE.length}`, `Free · ${FREE.length}`)],
        ].map(([id, text]) => (
          <a
            key={id}
            href={`#${id}`}
            className="inline-flex min-h-10 items-center rounded-full border border-line bg-card px-4 text-[15px] font-medium transition-colors hover:border-ink"
          >
            {text}
          </a>
        ))}
      </Container>

      {/* ── satılık ─────────────────────────── */}
      <Container className="pb-8 pt-12 sm:pt-16">
        <SectionHead
          id="satilik"
          label={t("Satılık", "For sale")}
          title={t("Hazır araçlar", "Ready-made tools")}
          intro={
            hasCheckout
              ? t(
                  "Satın al'a basınca Shopier'in güvenli ödeme sayfası açılır; ödeme biter bitmez lisans anahtarınız ve indirme bağlantısı e-postanıza gelir.",
                  "Buy opens a secure checkout; as soon as payment goes through, your license key and download link arrive by email. Prices are in Turkish lira (₺).",
                )
              : t(
                  "Satın almak ya da soru sormak için butona basın, e-postanız hazır açılır.",
                  "To buy or ask a question, press the button and a pre-filled email opens. Prices are in Turkish lira (₺).",
                )
          }
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {PAID.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>

        <aside className="mt-5 flex flex-col justify-between gap-6 rounded-2xl border border-dashed border-ink/30 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h3 className="text-2xl font-bold tracking-[-0.02em]">{t("Aradığınız burada yok mu?", "Don't see what you need?")}</h3>
            <p className="mt-2 max-w-xl leading-relaxed text-ink-soft">
              {t(
                "Size özel bir bot ya da araç yazabilirim. Ne yapması gerektiğini anlatın.",
                "I can build a custom bot or tool for you. Tell me what it should do.",
              )}
            </p>
          </div>
          <a
            href={href("contact")}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-ink px-5 text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            {t("Özel yazılım iste", "Request custom software")} <Arrow />
          </a>
        </aside>
      </Container>

      {/* ── ücretsiz ────────────────────────── */}
      <Container className="border-t border-line pb-16 pt-14 sm:pb-20 sm:pt-20">
        <SectionHead
          id="ucretsiz"
          label={t("Ücretsiz", "Free")}
          title={t("İndir, kullan, kodunu incele.", "Download it, use it, read the code.")}
          intro={t(
            "Hesap yok, reklam yok, gizli ücret yok. İşinize yaradıysa GitHub'da yıldız bırakmanız yeter.",
            "No account, no ads, no hidden fees. If one helps you, a star on GitHub is all I ask.",
          )}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {FREE.map((p) => (
            <ProductCard key={p.slug} p={p} free />
          ))}
        </div>
        <p className="mt-10 text-center">
          <a
            href={LINKS.github}
            target="_blank"
            rel="noreferrer noopener"
            className="inline-flex items-center gap-2 text-[15px] font-medium underline-offset-4 hover:underline"
          >
            {t("Tüm depolar GitHub'da", "All repositories on GitHub")} <Arrow />
          </a>
        </p>
      </Container>
    </Layout>
  )
}

mount(<Products />)
