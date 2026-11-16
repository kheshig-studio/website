import type { ReactNode } from "react"

export function cx(...parts: Array<string | false | null | undefined>) {
  return parts.filter(Boolean).join(" ")
}

export function Container({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <div className={cx("mx-auto w-full max-w-6xl px-4 sm:px-8", className)}>
      {children}
    </div>
  )
}

export function Label({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      className={cx(
        "font-mono text-[11px] font-medium uppercase tracking-[0.18em]",
        className,
      )}
    >
      {children}
    </span>
  )
}

type ButtonProps = {
  href: string
  children: ReactNode
  variant?: "solid" | "ghost" | "light"
  external?: boolean
  className?: string
}

export function Button({
  href,
  children,
  variant = "solid",
  external,
  className,
}: ButtonProps) {
  const styles = {
    solid:
      "bg-ink text-paper hover:bg-brand",
    ghost:
      "border border-ink/25 text-ink hover:border-ink hover:bg-ink hover:text-paper",
    light:
      "bg-paper text-ink hover:bg-white",
  }[variant]
  return (
    <a
      href={href}
      {...(external ? { target: "_blank", rel: "noreferrer noopener" } : {})}
      className={cx(
        "inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-[15px] font-medium transition-colors duration-200",
        styles,
        className,
      )}
    >
      {children}
    </a>
  )
}

/** Her alt sayfanın başlığı. */
export function PageHeader({
  label,
  title,
  intro,
}: {
  label: string
  title: ReactNode
  intro?: ReactNode
}) {
  return (
    <header className="border-b border-line">
      <Container className="pb-14 pt-16 sm:pb-20 sm:pt-24">
        <Label className="text-brand">{label}</Label>
        <h1 className="mt-5 max-w-4xl text-[2.6rem] font-bold leading-[1.02] tracking-[-0.03em] sm:text-7xl">
          {title}
        </h1>
        {intro && (
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-ink-soft">
            {intro}
          </p>
        )}
      </Container>
    </header>
  )
}

export function Arrow({ className }: { className?: string }) {
  return (
    <svg
      aria-hidden
      viewBox="0 0 16 16"
      className={cx("size-4 shrink-0", className)}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
    >
      <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}
