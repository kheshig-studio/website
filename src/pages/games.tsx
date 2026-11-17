import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Container, PageHeader } from "@/site/ui"
import { GameCard } from "@/site/cards"
import { GAMES } from "@/site/data"
import { t } from "@/site/i18n"

function Games() {
  return (
    <Layout>
      <PageHeader
        label={t("Oyunlar", "Games")}
        title={t("Yan proje değil, bitmiş iş.", "Not side projects — finished work.")}
        intro={t(
          "Yayındaki oyunlarım ve yolda olanlar. Tarayıcı sürümü hazır olan oyunlar doğrudan bu sayfadan, indirmeden oynanır.",
          "My released games and what's in the works. Games with a browser version play right from this page, nothing to download.",
        )}
      />
      <Container className="flex flex-col gap-5 py-16 sm:py-20">
        {GAMES.map((g) => (
          <GameCard key={g.slug} g={g} />
        ))}
      </Container>
    </Layout>
  )
}

mount(<Games />)
