import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Container } from "@/site/ui"
import { href, t } from "@/site/i18n"

/* Ücretsiz programlar artık Ürünler sayfasının bir bölümü.
   Eski /ucretsiz/ (ve /en/free/) linkleri kırılmasın diye buraya gelen
   ziyaretçi oraya yönlendirilir; #videohunter gibi bir ürün çapası varsa korunur. */
const target = href("products", window.location.hash.slice(1) || "ucretsiz")
window.location.replace(target)

function Moved() {
  return (
    <Layout cta={false}>
      <Container className="flex min-h-[50svh] flex-col items-start justify-center py-24">
        <p className="text-lg text-ink-soft">{t("Ücretsiz programlar Ürünler sayfasına taşındı.", "Free tools have moved to the Products page.")}</p>
        <a href={target} className="mt-4 inline-flex items-center gap-2 text-lg font-medium underline underline-offset-4">
          {t("Oraya git", "Go there")} <Arrow />
        </a>
      </Container>
    </Layout>
  )
}

mount(<Moved />)
