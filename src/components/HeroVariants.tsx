import type { ReactNode } from "react"
import { Button } from "@/components/ui/button"
import type { BlackHoleProps } from "@/components/BlackHole"

/* shared copy so the variants are compared on composition, not wording */
const EYEBROW = "Yazılım · Otomasyon · Web"
const SUB =
  "Veri kazıyan botlar, kendi kendine çalışan sistemler ve kurumsal web siteleri."

function Eyebrow({ className = "" }: { className?: string }) {
  return (
    <span
      className={
        "font-mono text-[11px] uppercase tracking-[0.38em] text-turquoise " +
        className
      }
    >
      {EYEBROW}
    </span>
  )
}

function Ctas({ align = "center" }: { align?: "center" | "start" }) {
  return (
    <div
      className={
        "flex flex-wrap gap-3 " +
        (align === "start" ? "justify-start" : "justify-center")
      }
    >
      <Button size="lg" className="font-medium">
        İş konuşalım
      </Button>
      <Button
        size="lg"
        variant="outline"
        className="border-white/15 bg-white/5 font-medium backdrop-blur-sm hover:bg-white/10"
      >
        Ürünler
      </Button>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────
   A — UFUK : hole sinks below the fold, type breathes above it
   ──────────────────────────────────────────────────────────── */
function Ufuk() {
  return (
    <>
      {/* horizon floor lines */}
      <div
        aria-hidden
        className="pointer-events-none fixed inset-x-0 bottom-0 z-[1] h-1/2 [mask-image:linear-gradient(to_top,black,transparent)]"
        style={{
          backgroundImage:
            "repeating-linear-gradient(to top, rgba(47,227,198,0.20) 0 1px, transparent 1px 56px)",
        }}
      />
      <div className="relative z-10 mx-auto flex min-h-svh max-w-3xl flex-col items-center justify-start gap-7 px-6 pt-[18vh] text-center">
        <Eyebrow />
        <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          KHESHIG
          <span className="mt-1 block text-turquoise">STUDIO</span>
        </h1>
        <p className="max-w-lg text-balance text-sm text-muted-foreground sm:text-base">
          {SUB}
        </p>
        <Ctas />
      </div>
    </>
  )
}

/* ────────────────────────────────────────────────────────────
   B — TUTULMA : type lives inside the event horizon, ring haloes it
   ──────────────────────────────────────────────────────────── */
function Tutulma() {
  return (
    <div className="relative z-10 flex min-h-svh items-center justify-center px-6">
      <div className="flex max-w-md flex-col items-center gap-6 text-center">
        <Eyebrow className="text-[10px] tracking-[0.42em]" />
        <h1 className="font-display text-3xl leading-[1.08] tracking-tight sm:text-[2.9rem]">
          KHESHIG
          <span className="mt-1 block text-turquoise">STUDIO</span>
        </h1>
        <p className="max-w-xs text-balance text-xs leading-relaxed text-white/55 sm:text-sm">
          Yazılım, otomasyon ve web — tek stüdyo.
        </p>
        <Button size="lg" className="mt-1 font-medium">
          İş konuşalım
        </Button>
      </div>
    </div>
  )
}

/* ────────────────────────────────────────────────────────────
   C — YÖRÜNGE : asymmetric split, hole orbits off the right edge
   ──────────────────────────────────────────────────────────── */
function Yorunge() {
  return (
    <div className="relative z-10 mx-auto grid min-h-svh max-w-6xl grid-cols-1 items-center gap-10 px-6 md:grid-cols-2">
      <div className="flex flex-col items-start gap-7 text-left">
        <Eyebrow />
        <h1 className="font-display text-4xl leading-[1.05] tracking-tight sm:text-6xl">
          KHESHIG
          <span className="mt-1 block text-turquoise">STUDIO</span>
        </h1>
        <p className="max-w-sm text-sm text-muted-foreground sm:text-base">
          {SUB}
        </p>
        <Ctas align="start" />
      </div>
      <div aria-hidden className="hidden md:block" />
    </div>
  )
}

/* ────────────────────────────────────────────────────────────
   D — DERİN ALAN : distant hole, dot grid, type on frosted glass
   ──────────────────────────────────────────────────────────── */
function DerinAlan() {
  return (
    <>
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-[1] opacity-[0.35] [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_75%)]"
        style={{
          backgroundImage:
            "radial-gradient(rgba(255,255,255,0.16) 1px, transparent 1px)",
          backgroundSize: "26px 26px",
        }}
      />
      <div className="relative z-10 flex min-h-svh items-center justify-center px-6">
        <div className="w-full max-w-xl rounded-2xl border border-white/10 bg-white/[0.035] px-8 py-12 text-center shadow-[0_8px_60px_-20px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:px-12">
          <div className="flex flex-col items-center gap-7">
            <Eyebrow />
            <h1 className="font-display text-3xl leading-[1.06] tracking-tight sm:text-5xl">
              KHESHIG
              <span className="mt-1 block text-turquoise">STUDIO</span>
            </h1>
            <p className="max-w-md text-balance text-sm text-muted-foreground sm:text-base">
              {SUB}
            </p>
            <Ctas />
          </div>
        </div>
      </div>
    </>
  )
}

/* ────────────────────────────────────────────────────────────
   TEST — bare, centred view for judging the shader itself
   ──────────────────────────────────────────────────────────── */
function SadeceKaradelik() {
  return (
    <div className="relative z-10 flex min-h-svh items-end justify-center px-6 pb-40">
      <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-white/35">
        Shader testi — kadraj yok, sadece karadelik
      </p>
    </div>
  )
}

export type Variant = {
  id: string
  name: string
  note: string
  bh: BlackHoleProps
  Content: () => ReactNode
}

export const VARIANTS: Variant[] = [
  {
    id: "ufuk",
    name: "Ufuk",
    note: "Karadelik alt kenardan doğuyor, yazı üstte temiz alanda",
    bh: { center: [0, -0.5], scale: 0.9, disk: 1.15, tilt: 0.2, speed: 1 },
    Content: Ufuk,
  },
  {
    id: "tutulma",
    name: "Tutulma",
    note: "Yazı olay ufkunun İÇİNDE, foton halkası çerçeveliyor",
    bh: { center: [0, 0], scale: 0.6, disk: 0.75, tilt: 0.13, speed: 0.8 },
    Content: Tutulma,
  },
  {
    id: "yorunge",
    name: "Yörünge",
    note: "Asimetrik: yazı solda, karadelik sağ kenardan taşıyor",
    bh: { center: [0.66, -0.04], scale: 1.1, disk: 1.15, tilt: 0.3, speed: 1 },
    Content: Yorunge,
  },
  {
    id: "derin",
    name: "Derin Alan",
    note: "Uzak karadelik + nokta ızgara, yazı buzlu cam panelde",
    bh: { center: [0.52, 0.36], scale: 2.7, disk: 0.95, tilt: 0.32, speed: 1.2 },
    Content: DerinAlan,
  },
  {
    id: "test",
    name: "Karadelik",
    note: "Shader testi: ortalanmış, geniş açı — merceklenmeyi görmek için",
    bh: { center: [0, 0], scale: 1.25, disk: 1.3, tilt: 0.22, speed: 1 },
    Content: SadeceKaradelik,
  },
]
