import { useEffect, useRef, useState } from "react"

/* ─────────────────────────────────────────────────────────────
   The hero visual is the work, not an ornament: MapsLead's real
   output format filling in row by row.

   The column set is the genuine one the tool produces. The rows are
   stand-ins — real scraped businesses are not published here, both
   because their contact details are not ours to post and because the
   output is the product.
   ───────────────────────────────────────────────────────────── */

type Row = {
  ad: string
  tel: string
  kategori: string
  puan: string
  site: "Yok" | "Facebook" | "Instagram"
}

const ROWS: Row[] = [
  { ad: "Anadolu Lokantası", tel: "0505 ••• 61 78", kategori: "Restoran", puan: "4.9", site: "Yok" },
  { ad: "Şahin Pide Salonu", tel: "0551 ••• 78 00", kategori: "Pideci", puan: "4.7", site: "Instagram" },
  { ad: "Derya Restaurant", tel: "0370 ••• 55 54", kategori: "Restoran", puan: "4.1", site: "Yok" },
  { ad: "Bereket Kebap", tel: "0532 ••• 12 40", kategori: "Kebapçı", puan: "4.5", site: "Facebook" },
  { ad: "Kardeşler Ocakbaşı", tel: "0538 ••• 09 17", kategori: "Ocakbaşı", puan: "4.3", site: "Yok" },
  { ad: "Safran Ev Yemekleri", tel: "0546 ••• 44 62", kategori: "Ev yemekleri", puan: "4.8", site: "Yok" },
  { ad: "Çınaraltı Kahvaltı", tel: "0505 ••• 90 31", kategori: "Kahvaltı", puan: "4.6", site: "Instagram" },
  { ad: "Demir Balık Evi", tel: "0533 ••• 27 08", kategori: "Balıkçı", puan: "4.4", site: "Yok" },
]

const STEP_MS = 620

export function WorkProof({ className }: { className?: string }) {
  const [n, setN] = useState(0)
  const timer = useRef<number | undefined>(undefined)

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(ROWS.length)
      return
    }
    const tick = () => {
      setN((v) => (v >= ROWS.length ? 0 : v + 1))
      timer.current = window.setTimeout(tick, STEP_MS)
    }
    timer.current = window.setTimeout(tick, 400)
    return () => window.clearTimeout(timer.current)
  }, [])

  const done = n >= ROWS.length

  return (
    <div
      className={
        "overflow-hidden rounded-sm border border-white/12 bg-[#0C0C0F]/85 backdrop-blur-md " +
        "shadow-[0_20px_70px_-30px_rgba(0,0,0,0.95)] " +
        (className ?? "")
      }
    >
      {/* status bar */}
      <div className="flex items-center gap-2.5 border-b border-white/10 px-4 py-2.5">
        <span
          className={
            "size-1.5 shrink-0 rounded-full " +
            (done ? "bg-crimson-lit" : "bg-crimson-lit animate-pulse")
          }
        />
        <span className="font-mono text-[11px] uppercase tracking-[0.14em] text-muted-foreground">
          MapsLead
        </span>
        <span className="truncate font-mono text-[11px] text-white/45">
          {done ? "tamamlandı" : "google haritalar · karabük / lokanta"}
        </span>
        <span className="ml-auto font-mono text-[11px] tabular-nums text-crimson-lit">
          {n} kayıt
        </span>
      </div>

      {/* table */}
      <div className="overflow-x-auto">
        <table className="w-full min-w-[420px] border-collapse text-left">
          <thead>
            <tr className="border-b border-white/10">
              {["İşletme Adı", "Telefon", "Kategori", "Puan", "Web"].map((h) => (
                <th
                  key={h}
                  scope="col"
                  className="whitespace-nowrap px-3 py-2 font-mono text-[10px] font-medium uppercase tracking-[0.12em] text-white/40"
                >
                  {h}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {ROWS.map((r, i) => {
              const shown = i < n
              return (
                <tr
                  key={r.ad}
                  className="border-b border-white/[0.06] transition-opacity duration-300"
                  style={{ opacity: shown ? 1 : 0 }}
                  aria-hidden={!shown}
                >
                  <td className="whitespace-nowrap px-3 py-[7px] text-[13px] text-foreground">
                    {r.ad}
                  </td>
                  <td className="whitespace-nowrap px-3 py-[7px] font-mono text-[12px] tabular-nums text-muted-foreground">
                    {r.tel}
                  </td>
                  <td className="whitespace-nowrap px-3 py-[7px] text-[12px] text-muted-foreground">
                    {r.kategori}
                  </td>
                  <td className="whitespace-nowrap px-3 py-[7px] font-mono text-[12px] tabular-nums text-muted-foreground">
                    {r.puan}
                  </td>
                  <td className="whitespace-nowrap px-3 py-[7px]">
                    <span
                      className={
                        "font-mono text-[11px] " +
                        (r.site === "Yok" ? "text-crimson-lit" : "text-white/45")
                      }
                    >
                      {r.site}
                    </span>
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>

      <p className="border-t border-white/10 px-4 py-2 font-mono text-[10px] text-white/35">
        Örnek çıktı — gerçek koşuda işletme adı, telefon, e-posta, adres, kategori ve puan gelir.
      </p>
    </div>
  )
}

export default WorkProof
