import { useEffect, useRef, useState } from "react"

/* ─────────────────────────────────────────────────────────────
   Kırık Köprüler'in ekran görüntüsü yok — metin oyununda görsel
   zaten metnin kendisi. Bu kart oyunun gerçek bir anını canlandırıyor:
   olay metni oyunun içeriğinden, stat adları ve zorluk sayıları
   (Orta 13, Zor 16) motorun gerçek değerleri.
   ───────────────────────────────────────────────────────────── */

type Choice = { label: string; stat?: string; dc?: number }

const CHOICES: Choice[] = [
  { label: "Adları not al", stat: "Teknik", dc: 13 },
  { label: "Direği söküp geç", stat: "Beden", dc: 16 },
  { label: "Geç git" },
]

const ROLL = { die: 14, mod: 3, dc: 13 }

export function GameMoment() {
  const [step, setStep] = useState(0)
  const ref = useRef<HTMLDivElement | null>(null)

  /* Kart görünür olunca bir kez oynar; görünmezse de son karede durur. */
  useEffect(() => {
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (reduce) {
      setStep(4)
      return
    }
    let t: number[] = []
    const run = () => {
      t = [700, 1300, 1900, 2700].map((ms, i) =>
        window.setTimeout(() => setStep(i + 1), ms),
      )
    }
    const el = ref.current
    if (!el) return
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting && e.boundingClientRect.top > 0) continue
          run()
          io.disconnect()
        }
      },
      { threshold: 0.3 },
    )
    io.observe(el)
    const failsafe = window.setTimeout(run, 1500)
    return () => {
      io.disconnect()
      window.clearTimeout(failsafe)
      t.forEach(window.clearTimeout)
    }
  }, [])

  return (
    <div
      ref={ref}
      className="overflow-hidden rounded-xs border border-white/10 bg-black/45"
    >
      {/* durum çubuğu */}
      <div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
        <span className="size-1 shrink-0 rounded-full bg-crimson-lit" />
        <span className="truncate font-mono text-[10px] uppercase tracking-[0.14em] text-white/45">
          Gün 12 · Ölü Anten
        </span>
        <span className="ml-auto shrink-0 font-mono text-[10px] tabular-nums text-white/45">
          Bünye <span className="text-crimson-lit">4</span>
        </span>
      </div>

      <div className="flex flex-col gap-3 px-3 py-3">
        {/* olay metni */}
        <p className="text-[13px] leading-relaxed text-foreground/90">
          Direğe kazınmış isimler. Altında{" "}
          <span className="font-mono text-crimson-lit">ARINDI</span>.
          Sayıyorsun — kırk yedi.
        </p>

        {/* seçenekler */}
        <div className="flex flex-col gap-1">
          {CHOICES.map((c, i) => {
            const shown = step > i
            const picked = step >= 4 && i === 0
            return (
              <div
                key={c.label}
                className={
                  "flex items-baseline gap-2 rounded-xs px-1.5 py-1 transition-all duration-300 " +
                  (picked ? "bg-crimson/20" : "")
                }
                style={{ opacity: shown ? 1 : 0 }}
                aria-hidden={!shown}
              >
                <span
                  className={
                    "font-mono text-[11px] " +
                    (picked ? "text-crimson-lit" : "text-white/30")
                  }
                >
                  ›
                </span>
                <span
                  className={
                    "flex-1 truncate text-[12px] " +
                    (picked ? "text-foreground" : "text-muted-foreground")
                  }
                >
                  {c.label}
                </span>
                {c.stat && (
                  <span className="shrink-0 font-mono text-[10px] tabular-nums text-white/35">
                    {c.stat} · {c.dc}
                  </span>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* zar sonucu */}
      <div
        className="border-t border-white/10 px-3 py-2 transition-opacity duration-500"
        style={{ opacity: step >= 4 ? 1 : 0.25 }}
      >
        <span className="font-mono text-[10px] tabular-nums text-white/40">
          zar {ROLL.die} + teknik {ROLL.mod} = {ROLL.die + ROLL.mod}
        </span>
        <span className="ml-2 font-mono text-[10px] uppercase tracking-[0.12em] text-crimson-lit">
          {step >= 4 ? "geçti" : ""}
        </span>
      </div>
    </div>
  )
}

export default GameMoment
