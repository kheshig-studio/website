import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Button, Container, Label, PageHeader } from "@/site/ui"
import { EMAIL, JOB_MAIL, LINKS, PROOF } from "@/site/data"

const CHECKLIST = [
  "Ne yapılmasını istiyorsunuz? (örnek: \"her sabah şu siteden fiyatları Excel'e çeksin\")",
  "Elinizde örnek veri, site linki ya da ekran görüntüsü varsa",
  "Ne zamana lazım?",
  "Kabaca bir bütçeniz varsa",
]

function Contact() {
  return (
    <Layout cta={false}>
      <PageHeader
        label="İletişim"
        title="Bir işiniz mi var? Anlatın, çözelim."
        intro="İhtiyacınızı birkaç cümleyle yazın. Yapılabilir mi, ne kadar sürer, ne kadar tutar — net cevap veririm."
      />
      <Container className="grid gap-5 py-16 sm:py-20 lg:grid-cols-[1.3fr_1fr]">
        <section className="flex flex-col rounded-2xl bg-ink p-7 text-paper sm:p-10">
          <Label className="text-night-soft">E-posta</Label>
          <a
            href={`mailto:${EMAIL}`}
            className="mt-5 font-display text-[clamp(1.05rem,4.6vw,1.5rem)] font-bold tracking-[-0.02em] underline decoration-night-line underline-offset-[6px] [overflow-wrap:anywhere] hover:decoration-paper xl:text-3xl"
          >
            {EMAIL}
          </a>
          <p className="mt-6 max-w-md leading-relaxed text-night-soft">
            Butona basınca e-postanız hazır bir şablonla açılır; sadece
            boşlukları doldurmanız yeter.
          </p>
          <div className="mt-auto pt-10">
            <Button href={JOB_MAIL} variant="light">
              Şablonla e-posta yaz <Arrow />
            </Button>
          </div>
        </section>

        <div className="flex flex-col gap-5">
          <section className="rounded-2xl border border-line bg-card p-7 sm:p-9">
            <Label className="text-ink-soft">Mesajınızda olursa iyi olur</Label>
            <ul className="mt-6 flex flex-col gap-3.5">
              {CHECKLIST.map((c) => (
                <li key={c} className="flex gap-3 leading-snug">
                  <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand" />
                  {c}
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-2xl border border-line bg-card p-7 sm:p-9">
            <Label className="text-ink-soft">Platform güvencesiyle</Label>
            <p className="mt-4 leading-relaxed text-ink-soft">
              Ödemenin platformda güvende kalmasını isterseniz buralardan da
              çalışabiliriz.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <a
                href={LINKS.bionluk}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink px-5 text-[15px] font-medium transition-colors hover:bg-ink hover:text-paper"
              >
                Bionluk · ★ {PROOF.bionlukRating} <Arrow />
              </a>
              <a
                href={LINKS.r10}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-line px-5 text-[15px] font-medium transition-colors hover:border-ink"
              >
                R10 <Arrow />
              </a>
            </div>
          </section>
        </div>
      </Container>
    </Layout>
  )
}

mount(<Contact />)
