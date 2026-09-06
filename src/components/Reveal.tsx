import { useEffect, useRef, type ReactNode } from "react"

/* Content is visible by default; JS hides it and then reveals it on
   scroll. Done this way round the page still reads correctly if the
   script never runs, and nothing is ever parked invisible. */
export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode
  delay?: number
  className?: string
}) {
  const ref = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    el.style.opacity = "0"
    el.style.transform = "translateY(16px) scale(0.985)"
    el.style.transition =
      "opacity 420ms cubic-bezier(0.16,1,0.3,1), transform 420ms cubic-bezier(0.16,1,0.3,1)"
    el.style.transitionDelay = `${delay}ms`
    el.style.willChange = "opacity, transform"

    const show = () => {
      el.style.opacity = "1"
      el.style.transform = "none"
      window.setTimeout(() => {
        el.style.willChange = "auto"
      }, 500 + delay)
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          /* Reveal when it comes into view — but ALSO when it is
             already above the fold. Without the second case anything
             the reader jumps past (deep link, fast scroll, anchor)
             stays invisible forever. */
          const scrolledPast = e.boundingClientRect.top < 0
          if (!e.isIntersecting && !scrolledPast) continue
          show()
          io.unobserve(el)
        }
      },
      { threshold: 0.15, rootMargin: "0px 0px -8% 0px" },
    )
    io.observe(el)

    /* Safety net: if the observer never reports — hidden pane,
       background tab, power saving, an embedded view — the copy must
       still appear. A marketing page that stays blank because an
       observer went quiet is worse than no animation at all. */
    const failsafe = window.setTimeout(show, 1600 + delay)

    return () => {
      io.disconnect()
      window.clearTimeout(failsafe)
    }
  }, [delay])

  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  )
}

export default Reveal
