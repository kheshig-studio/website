import { useEffect, useRef } from "react"

/* ─────────────────────────────────────────────────────────────
   The backdrop is the real logo mark — the file itself, not a
   redrawing of it. It drifts and breathes very slowly and shifts
   framing as the page scrolls; nothing else.
   ───────────────────────────────────────────────────────────── */

export type MarkBackdropProps = {
  /** [x, y] as a fraction of the half-viewport */
  center?: [number, number]
  scale?: number
  /** drift speed multiplier */
  speed?: number
  /** overall presence, 0-1 */
  intensity?: number
  live?: { current: Partial<MarkBackdropProps> | null }
  className?: string
}

export function MarkBackdrop({
  center = [0, 0],
  scale = 1,
  speed = 1,
  intensity = 1,
  live,
  className,
}: MarkBackdropProps) {
  const wrapRef = useRef<HTMLDivElement | null>(null)
  const imgRef = useRef<HTMLImageElement | null>(null)
  const glowRef = useRef<HTMLDivElement | null>(null)

  const cfg = useRef({ center, scale, speed, intensity })
  cfg.current = { center, scale, speed, intensity }
  const liveRef = useRef(live)
  liveRef.current = live

  useEffect(() => {
    const img = imgRef.current
    const glow = glowRef.current
    if (!img || !glow) return

    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    let raf = 0
    let running = true
    const start = performance.now()

    const frame = (now: number) => {
      if (!running) return
      const c = cfg.current
      const l = liveRef.current?.current
      const ce = l?.center ?? c.center
      const sc = l?.scale ?? c.scale
      const sp = l?.speed ?? c.speed
      const it = l?.intensity ?? c.intensity

      const t = ((now - start) / 1000) * sp

      /* slow, non-repeating drift — three primes so it never loops
         back onto itself in a way the eye can latch onto */
      const driftX = Math.sin(t * 0.037) * 1.6 + Math.sin(t * 0.011) * 0.9
      const driftY = Math.cos(t * 0.029) * 1.2 + Math.cos(t * 0.017) * 0.7
      const rot = Math.sin(t * 0.021) * 2.6
      const breathe = 1 + Math.sin(t * 0.026) * 0.018

      const vw = window.innerWidth
      const vh = window.innerHeight
      /* on a phone the mark sits directly behind the copy, so it has
         to step back further than it does on a wide screen */
      const narrow = vw < 768 ? 0.5 : 1
      const x = (ce[0] * vw) / 2 + driftX
      const y = (ce[1] * vh) / 2 + driftY

      img.style.transform =
        `translate(-50%, -50%) translate3d(${x}px, ${-y}px, 0)` +
        ` rotate(${rot}deg) scale(${sc * breathe})`
      img.style.opacity = String(0.30 * it * narrow)

      glow.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${-y}px, 0) scale(${sc})`
      glow.style.opacity = String(0.55 * it * narrow)

      raf = requestAnimationFrame(frame)
    }

    if (reduced) {
      /* one composed, static frame */
      const c = cfg.current
      const l = liveRef.current?.current
      const ce = l?.center ?? c.center
      const sc = l?.scale ?? c.scale
      const x = (ce[0] * window.innerWidth) / 2
      const y = (ce[1] * window.innerHeight) / 2
      img.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${-y}px, 0) scale(${sc})`
      img.style.opacity = String(0.30 * (l?.intensity ?? c.intensity))
      glow.style.transform = `translate(-50%, -50%) translate3d(${x}px, ${-y}px, 0) scale(${sc})`
      glow.style.opacity = String(0.5 * (l?.intensity ?? c.intensity))
    } else {
      raf = requestAnimationFrame(frame)
    }

    const onVis = () => {
      if (reduced) return
      if (document.hidden) {
        running = false
        cancelAnimationFrame(raf)
      } else if (!running) {
        running = true
        raf = requestAnimationFrame(frame)
      }
    }
    document.addEventListener("visibilitychange", onVis)

    return () => {
      running = false
      cancelAnimationFrame(raf)
      document.removeEventListener("visibilitychange", onVis)
    }
  }, [])

  return (
    <div ref={wrapRef} aria-hidden className={className}>
      {/* forge glow behind the mark */}
      <div
        ref={glowRef}
        className="absolute left-1/2 top-1/2 h-[70vh] w-[70vh] rounded-full blur-[110px]"
        style={{
          background:
            "radial-gradient(circle, rgba(137,0,0,0.55) 0%, rgba(137,0,0,0.18) 45%, transparent 70%)",
        }}
      />
      <img
        ref={imgRef}
        src="/mark.png"
        alt=""
        draggable={false}
        className="absolute left-1/2 top-1/2 h-auto w-[62vh] max-w-none select-none"
      />
    </div>
  )
}

export default MarkBackdrop
