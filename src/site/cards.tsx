import { Arrow, Label, cx } from "./ui"
import { productHref, type Game, type Product } from "./data"

export function ProductCard({ p, free }: { p: Product; free?: boolean }) {
  const external = Boolean(p.href)
  return (
    <article
      id={p.slug}
      className="group flex scroll-mt-24 flex-col rounded-2xl border border-line bg-card p-6 transition-shadow duration-300 hover:shadow-[0_18px_40px_-24px_rgba(22,21,15,0.35)] sm:p-8"
    >
      <div className="flex items-center justify-between gap-3">
        <Label className="text-ink-soft">{p.kind}</Label>
        {p.license && (
          <Label className="rounded-full border border-line px-2.5 py-1 text-ink-soft">
            {p.license}
          </Label>
        )}
      </div>
      <h3 className="mt-6 text-3xl font-bold tracking-[-0.02em]">{p.name}</h3>
      <p className="mt-2 text-lg font-medium leading-snug">{p.tagline}</p>
      <p className="mt-4 leading-relaxed text-ink-soft">{p.description}</p>
      <ul className="mt-6 flex flex-col gap-2 border-t border-line pt-5">
        {p.features.map((f) => (
          <li key={f} className="flex gap-3 text-[15px] leading-snug">
            <span aria-hidden className="mt-[7px] size-1.5 shrink-0 rounded-full bg-brand" />
            {f}
          </li>
        ))}
      </ul>
      <div className="mt-auto flex flex-wrap items-center justify-between gap-4 pt-8">
        <span className="font-display text-2xl font-bold tracking-[-0.02em]">
          {free ? "Ücretsiz" : (p.price ?? "Fiyat için yazın")}
        </span>
        <a
          href={productHref(p)}
          {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
          className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-[15px] font-medium text-paper transition-colors hover:bg-brand"
        >
          {p.cta ?? "Satın al"} <Arrow />
          <span className="sr-only"> — {p.name}</span>
        </a>
      </div>
    </article>
  )
}

const STATUS_STYLE: Record<Game["status"], string> = {
  Oynanabilir: "bg-ink text-paper",
  "Play'de yayında": "border border-ink/30 text-ink",
  "Yapım aşamasında": "border border-dashed border-ink/40 text-ink-soft",
}

export function GameCard({ g }: { g: Game }) {
  return (
    <article
      id={g.slug}
      className="grid scroll-mt-24 overflow-hidden rounded-2xl border border-line bg-card md:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)]"
    >
      <div className="relative flex min-h-64 items-center justify-center bg-paper-deep p-8">
        {g.image ? (
          <img
            src={g.image.src}
            alt={g.image.alt}
            width={g.image.width}
            height={g.image.height}
            loading="lazy"
            className="h-auto max-h-80 w-auto rounded-lg shadow-[0_20px_40px_-20px_rgba(22,21,15,0.5)]"
          />
        ) : (
          <div aria-hidden className="flex flex-col items-center gap-3 text-center">
            <span className="font-display text-6xl font-bold tracking-[-0.04em] text-ink/15">
              {g.name}
            </span>
            <Label className="text-ink-soft">Yakında</Label>
          </div>
        )}
      </div>
      <div className="flex flex-col p-6 sm:p-10">
        <div className="flex flex-wrap items-center gap-3">
          <Label className="text-ink-soft">{g.platform}</Label>
          <Label className={cx("rounded-full px-2.5 py-1", STATUS_STYLE[g.status])}>
            {g.status}
          </Label>
        </div>
        <h3 className="mt-5 text-3xl font-bold tracking-[-0.02em] sm:text-4xl">{g.name}</h3>
        <p className="mt-4 leading-relaxed text-ink-soft">{g.description}</p>
        {(g.play || g.store) && (
          <div className="mt-auto flex flex-wrap gap-3 pt-8">
            {g.play && (
              <a
                href={g.play}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-ink px-5 text-[15px] font-medium text-paper transition-colors hover:bg-brand"
              >
                Tarayıcıda oyna <Arrow />
              </a>
            )}
            {g.store && (
              <a
                href={g.store.href}
                target="_blank"
                rel="noreferrer noopener"
                className="inline-flex min-h-11 items-center gap-2 rounded-full border border-ink/25 px-5 text-[15px] font-medium transition-colors hover:border-ink hover:bg-ink hover:text-paper"
              >
                {g.store.label} <Arrow />
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  )
}
