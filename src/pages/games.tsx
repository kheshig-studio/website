import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Container, PageHeader } from "@/site/ui"
import { GameCard } from "@/site/cards"
import { GAMES } from "@/site/data"

function Games() {
  return (
    <Layout>
      <PageHeader
        label="Oyunlar"
        title="Yan proje değil, bitmiş iş."
        intro="Yayındaki oyunlarım ve yolda olanlar. Tarayıcı sürümü hazır olan oyunlar doğrudan bu sayfadan, indirmeden oynanır."
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
