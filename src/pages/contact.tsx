import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { ContactForm } from "@/site/ContactForm"
import { Arrow, Container, Label, PageHeader } from "@/site/ui"
import { EMAIL, LINKS, PROOF } from "@/site/data"
import { t } from "@/site/i18n"

const CHECKLIST = t(
  [
    "Ne yapılmasını istiyorsunuz? (örnek: \"her sabah şu siteden fiyatları Excel'e çeksin\")",
    "Elinizde örnek veri, site linki ya da ekran görüntüsü varsa",
    "Ne zamana lazım?",
    "Kabaca bir bütçeniz varsa",
  ],
  [
    "What should it do? (e.g. \"pull prices from this site into Excel every morning\")",
    "Sample data, a link or a screenshot if you have one",
    "When do you need it?",
    "A rough budget, if you have one",
  ],
)

function Contact() {
  return (
    <Layout cta={false}>
      <PageHeader
        label={t("İletişim", "Contact")}
        title={t("Bir işiniz mi var? Anlatın, çözelim.", "Got a project? Tell me, let's solve it.")}
        intro={t(
          "İhtiyacınızı birkaç cümleyle yazın. Yapılabilir mi, ne kadar sürer, ne kadar tutar — net cevap veririm.",
          "Describe what you need in a few sentences. Can it be done, how long, how much — you'll get a straight answer.",
        )}
      />
      <Container className="grid grid-cols-[minmax(0,1fr)] gap-5 py-16 sm:py-20 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)]">
        <section className="relative rounded-2xl bg-ink p-6 text-paper sm:p-10">
          <ContactForm />
        </section>

        <div className="flex flex-col gap-5">
          <section className="rounded-2xl border border-line bg-card p-7 sm:p-9">
            <Label className="text-ink-soft">{t("Mesajınızda olursa iyi olur", "Helpful to include")}</Label>
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
            <Label className="text-ink-soft">{t("Doğrudan e-posta", "Email directly")}</Label>
            <a
              href={`mailto:${EMAIL}`}
              className="mt-4 block font-display text-lg font-bold tracking-[-0.01em] underline decoration-line underline-offset-4 [overflow-wrap:anywhere] hover:decoration-ink"
            >
              {EMAIL}
            </a>
          </section>

          <section className="rounded-2xl border border-line bg-card p-7 sm:p-9">
            <Label className="text-ink-soft">{t("Platform güvencesiyle", "Through a platform")}</Label>
            <p className="mt-4 leading-relaxed text-ink-soft">
              {t(
                "Ödemenin platformda güvende kalmasını isterseniz buralardan da çalışabiliriz.",
                "If you'd rather keep payment protected by a marketplace, we can work through one of these.",
              )}
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
