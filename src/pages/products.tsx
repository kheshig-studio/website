import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Container, Label } from "@/site/ui"
import { ProductCard } from "@/site/cards"
import { JOB_MAIL, PAID } from "@/site/data"

function Products() {
  return (
    <Layout>
      <header className="border-b border-line">
        <Container className="pb-14 pt-16 sm:pb-20 sm:pt-24">
          <Label className="text-brand">Satılık programlar</Label>
          <h1 className="mt-5 max-w-4xl text-[2.6rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-7xl">
            Vaat değil, çalışan araçlar.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            Her birini önce kendim kullandım. Masaüstü araçlar tek dosya olarak
            gelir — Python, kütüphane ya da kurulum gerekmez. Satın almak ya da
            soru sormak için butona basın, e-postanız hazır açılır.
          </p>
        </Container>
      </header>

      <Container className="py-16 sm:py-20">
        <div className="grid gap-5 lg:grid-cols-3">
          {PAID.map((p) => (
            <ProductCard key={p.slug} p={p} />
          ))}
        </div>

        <aside className="mt-5 flex flex-col justify-between gap-6 rounded-2xl border border-dashed border-ink/30 p-7 sm:flex-row sm:items-center sm:p-9">
          <div>
            <h2 className="text-2xl font-bold tracking-[-0.02em]">Aradığınız burada yok mu?</h2>
            <p className="mt-2 max-w-xl leading-relaxed text-ink-soft">
              Size özel bir bot ya da araç yazabilirim. Ne yapması gerektiğini anlatın.
            </p>
          </div>
          <a
            href={JOB_MAIL}
            className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-ink px-5 text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper"
          >
            Özel yazılım iste <Arrow />
          </a>
        </aside>
      </Container>
    </Layout>
  )
}

mount(<Products />)
