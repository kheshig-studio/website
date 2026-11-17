import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Container, PageHeader } from "@/site/ui"
import { ProductCard } from "@/site/cards"
import { FREE, LINKS } from "@/site/data"
import { t } from "@/site/i18n"

function Free() {
  return (
    <Layout>
      <PageHeader
        label={t("Ücretsiz programlar", "Free tools")}
        title={t("İndir, kullan, kodunu incele.", "Download it, use it, read the code.")}
        intro={t(
          "Açık kaynak araçlarım. Hesap yok, reklam yok, gizli ücret yok. İşinize yaradıysa GitHub'da yıldız bırakmanız yeter.",
          "My open-source tools. No account, no ads, no hidden fees. If one helps you, a star on GitHub is all I ask.",
        )}
      />
      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 md:grid-cols-2">
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

mount(<Free />)
