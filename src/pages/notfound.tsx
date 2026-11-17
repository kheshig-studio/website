import { mount } from "@/site/mount"
import { Layout } from "@/site/Layout"
import { Arrow, Button, Container, Label } from "@/site/ui"
import { href, t } from "@/site/i18n"

/* Tek 404 sayfası iki dile hizmet eder: 404.html, adres /en/ ile başlıyorsa
   <html lang> değerini sayfa yüklenmeden "en" yapar. */
function NotFound() {
  return (
    <Layout cta={false}>
      <Container className="flex min-h-[60svh] flex-col items-start justify-center py-24">
        <Label className="text-brand">404</Label>
        <h1 className="mt-5 text-5xl font-bold tracking-[-0.03em] sm:text-7xl">{t("Bu sayfa yok.", "This page doesn't exist.")}</h1>
        <p className="mt-5 max-w-md text-lg text-ink-soft">
          {t("Bağlantı eskimiş ya da yanlış yazılmış olabilir.", "The link may be outdated or mistyped.")}
        </p>
        <div className="mt-8">
          <Button href={href("home")}>
            {t("Ana sayfaya dön", "Back to home")} <Arrow />
          </Button>
        </div>
      </Container>
    </Layout>
  )
}

mount(<NotFound />)
