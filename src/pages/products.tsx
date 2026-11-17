import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Container, PageHeader } from "@/site/ui"
import { ProductCard } from "@/site/cards"
import { PAID } from "@/site/data"
import { href, t } from "@/site/i18n"

const hasCheckout = PAID.some((p) => p.buy)

function Products() {
  return (
    <Layout>
      <PageHeader
        label={t("Satılık programlar", "Products")}
        title={t("Vaat değil, çalışan araçlar.", "Not promises — working tools.")}
        intro={
          t(
            "Her birini önce kendim kullandım. Masaüstü araçlar tek dosya olarak gelir — Python, kütüphane ya da kurulum gerekmez. ",
            "I used every one of these myself first. Desktop tools come as a single file — no Python, no libraries, no installer. ",
          ) +
          (hasCheckout
            ? t(
                "Satın al'a basınca Shopier'in güvenli ödeme sayfası açılır; ödeme biter bitmez lisans anahtarınız ve indirme bağlantısı e-postanıza gelir.",
                "Buy opens a secure checkout; as soon as payment goes through, your license key and download link arrive by email. Prices are in Turkish lira (₺).",
              )
            : t(
                "Satın almak ya da soru sormak için butona basın, e-postanız hazır açılır.",
                "To buy or ask a question, press the button and a pre-filled email opens. Prices are in Turkish lira (₺).",
              ))
        }
      />

      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2">
          {PAID.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>

        <aside className="mt-5 flex flex-col justify-between gap-6 rounded-2xl border border-dashed border-ink/30 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.02em]">{t("Aradığınız burada yok mu?", "Don't see what you need?")}</h2>
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
    </Layout>
  )
}

mount(<Products />)
