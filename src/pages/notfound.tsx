import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Button, Container, Label } from "@/site/ui"

function NotFound() {
  return (
    <Layout cta={false}>
      <Container className="flex min-h-[60svh] flex-col items-start justify-center py-24">
        <Label className="text-brand">404</Label>
        <h1 className="mt-5 text-5xl font-bold tracking-[-0.03em] sm:text-7xl">
          Bu sayfa yok.
        </h1>
        <p className="mt-5 max-w-md text-lg text-ink-soft">
          Bağlantı eskimiş ya da yanlış yazılmış olabilir.
        </p>
        <div className="mt-8">
          <Button href="/">
            Ana sayfaya dön <Arrow />
          </Button>
        </div>
      </Container>
    </Layout>
  )
}

mount(<NotFound />)
