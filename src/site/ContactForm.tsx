import { useRef, useState, type FormEvent } from "react"
import { Arrow, Label, cx } from "./ui"
import { EMAIL, JOB_MAIL } from "./data"
import { isEn, t } from "./i18n"

/* Mesaj lisans sunucusuna (api.kheshig.studio) gider, oradan e-postama düşer.
   Yerelde test için: VITE_API_BASE=http://localhost:8787 npm run build */
const API = (import.meta.env.VITE_API_BASE as string | undefined) ?? "https://api.kheshig.studio"

const TOPICS = t(
  ["Özel yazılım / bot", "Web sitesi", "Hazır ürün", "Diğer"],
  ["Custom software / bot", "Website", "Ready-made product", "Other"],
)

/** Sunucu Türkçe mesaj döner; İngilizce sitede hata koduna göre çevir. */
const EN_ERRORS: Record<string, string> = {
  bad_email: "Please enter a valid email address — that's where I'll reply.",
  short: "Your message needs to be a little longer.",
  too_many: "Too many messages sent. Please email me directly.",
  bad_origin: "This request was blocked.",
}

type State = { kind: "idle" } | { kind: "sending" } | { kind: "sent" } | { kind: "error"; message: string }

const field =
  "w-full rounded-xl border border-line bg-paper px-4 text-[16px] text-ink placeholder:text-ink-soft/60 transition-colors focus:border-ink focus:outline-none"

export function ContactForm() {
  const [state, setState] = useState<State>({ kind: "idle" })
  const openedAt = useRef(Date.now())

  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const form = e.currentTarget
    const data = new FormData(form)
    data.set("t", String(openedAt.current))
    setState({ kind: "sending" })
    try {
      const res = await fetch(API + "/v1/contact", { method: "POST", body: data })
      const json = (await res.json().catch(() => ({}))) as { message?: string; error?: string }
      if (!res.ok) {
        throw new Error((isEn ? EN_ERRORS[json.error ?? ""] : json.message) || t("Gönderilemedi.", "Couldn't send."))
      }
      form.reset()
      setState({ kind: "sent" })
    } catch (err) {
      setState({
        kind: "error",
        message:
          err instanceof Error && err.message !== "Failed to fetch"
            ? err.message
            : t("Bağlantı kurulamadı.", "Couldn't connect."),
      })
    }
  }

  if (state.kind === "sent") {
    return (
      <div role="status" className="flex flex-col items-start gap-4 py-6">
        <Label className="text-night-soft">{t("Gönderildi", "Sent")}</Label>
        <p className="font-display text-3xl font-bold tracking-[-0.02em]">{t("Mesajın elime ulaştı.", "Got your message.")}</p>
        <p className="max-w-md leading-relaxed text-night-soft">
          {t("Yazdığın e-posta adresine döneceğim. Acil bir şeyse doğrudan ", "I'll reply to the email you gave. If it's urgent, you can also write to ")}
          <a href={`mailto:${EMAIL}`} className="text-paper underline underline-offset-4">
            {EMAIL}
          </a>
          {t(" adresine de yazabilirsin.", " directly.")}
        </p>
        <button
          type="button"
          onClick={() => {
            openedAt.current = Date.now()
            setState({ kind: "idle" })
          }}
          className="mt-2 text-[15px] text-night-soft underline underline-offset-4 hover:text-paper"
        >
          {t("Yeni mesaj yaz", "Write another message")}
        </button>
      </div>
    )
  }

  const sending = state.kind === "sending"
  return (
    <form onSubmit={submit} className="flex flex-col gap-5" noValidate={false}>
      {/* Bot tuzağı — gerçek kullanıcı görmez */}
      <div aria-hidden className="absolute -left-[9999px] h-0 w-0 overflow-hidden">
        <label>
          {t("Web siteniz", "Your website")}
          <input type="text" name="website" tabIndex={-1} autoComplete="off" />
        </label>
      </div>

      <div className="grid gap-5 sm:grid-cols-2">
        <label className="flex flex-col gap-2">
          <Label className="text-night-soft">{t("Adın", "Your name")}</Label>
          <input name="name" type="text" autoComplete="name" maxLength={100} className={cx(field, "min-h-12")} />
        </label>
        <label className="flex flex-col gap-2">
          <Label className="text-night-soft">{t("E-posta *", "Email *")}</Label>
          <input name="email" type="email" required autoComplete="email" maxLength={200} className={cx(field, "min-h-12")} />
        </label>
      </div>

      <fieldset className="flex flex-col gap-2">
        <legend className="mb-2">
          <Label className="text-night-soft">{t("Konu", "Topic")}</Label>
        </legend>
        <div className="flex flex-wrap gap-2">
          {TOPICS.map((topic, i) => (
            <label key={topic} className="cursor-pointer">
              <input type="radio" name="topic" value={topic} defaultChecked={i === 0} className="peer sr-only" />
              <span className="inline-flex min-h-10 items-center rounded-full border border-night-line px-4 text-[15px] text-night-soft transition-colors peer-checked:border-paper peer-checked:bg-paper peer-checked:text-ink peer-focus-visible:outline peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-paper hover:text-paper">
                {topic}
              </span>
            </label>
          ))}
        </div>
      </fieldset>

      <label className="flex flex-col gap-2">
        <Label className="text-night-soft">{t("Ne lazım? *", "What do you need? *")}</Label>
        <textarea
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={6}
          placeholder={t(
            "Örn. her sabah şu siteden fiyatları çekip Excel'e yazan bir bot. Ne zamana lazım, kabaca bütçe…",
            "E.g. a bot that pulls prices from a site into Excel every morning. When you need it, rough budget…",
          )}
          className={cx(field, "resize-y py-3 leading-relaxed")}
        />
      </label>

      {state.kind === "error" && (
        <p role="alert" className="rounded-xl border border-[#e2a19c]/40 bg-[#8a0f0b]/25 px-4 py-3 text-[15px] text-paper">
          {state.message} {t("İstersen ", "You can also ")}
          <a href={JOB_MAIL} className="underline underline-offset-4">
            {t("e-postayla yaz", "send an email")}
          </a>
          .
        </p>
      )}

      <div className="flex flex-wrap items-center gap-4 pt-1">
        <button
          type="submit"
          disabled={sending}
          className="inline-flex min-h-12 items-center gap-2 rounded-full bg-paper px-6 text-[15px] font-medium text-ink transition-colors hover:bg-white disabled:opacity-60"
        >
          {sending ? t("Gönderiliyor…", "Sending…") : t("Mesajı gönder", "Send message")} {!sending && <Arrow />}
        </button>
        <span className="text-sm text-night-soft">{t("E-postan yalnızca sana dönmek için kullanılır.", "Your email is only used to reply to you.")}</span>
      </div>
    </form>
  )
}
