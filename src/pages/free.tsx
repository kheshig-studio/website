import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Container, PageHeader } from "@/site/ui"
import { ProductCard } from "@/site/cards"
import { FREE, LINKS } from "@/site/data"

function Free() {
  return (
    <Layout>
      <PageHeader
        label="Ücretsiz programlar"
        title="İndir, kullan, kodunu incele."
        intro="Açık kaynak araçlarım. Hesap yok, reklam yok, gizli ücret yok. İşinize yaradıysa GitHub'da yıldız bırakmanız yeter."
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
            Tüm depolar GitHub'da <Arrow />
          </a>
        </p>
      </Container>
    </Layout>
  )
}

mount(<Free />)
