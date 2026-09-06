/* A compact, characteristic slice of each tool's real output — enough
   to show what the thing actually produces without a screenshot. */

type Line = { text: string; hot?: boolean; dim?: boolean }

const VISUALS: Record<string, { head: string; meta: string; lines: Line[] }> = {
  MapsLead: {
    head: "Karabük / lokanta",
    meta: "36 kayıt",
    lines: [
      { text: "Anadolu Lokantası   0505 ••• 61 78" },
      { text: "web sitesi: yok", hot: true },
      { text: "Şahin Pide Salonu   0551 ••• 78 00" },
      { text: "web sitesi: Instagram", dim: true },
    ],
  },
  FeedAlert: {
    head: "izlenen kaynak · 6",
    meta: "bugün 4",
    lines: [
      { text: "▸ yeni video yayınlandı", hot: true },
      { text: "  teknoloji kanalı · 2 dk önce", dim: true },
      { text: "▸ yeni yazı bulundu", hot: true },
      { text: "  sektör blogu · 18 dk önce", dim: true },
    ],
  },
  Sinyal: {
    head: "8 kaynak tarandı",
    meta: "41 başlık",
    lines: [
      { text: "tekilleştirildi → 23 özgün" },
      { text: "üslup örneği: 40 paylaşım", dim: true },
      { text: "3 taslak hazır", hot: true },
      { text: "görsel eşleştirildi · lisanslı", dim: true },
    ],
  },
  VideoHunter: {
    head: "indirme kuyruğu",
    meta: "2 / 3",
    lines: [
      { text: "1080p · MP4        %100", hot: true },
      { text: "720p  · MP4        %100", hot: true },
      { text: "1080p · MP4         %64", dim: true },
      { text: "ses + görüntü birleştirildi", dim: true },
    ],
  },
  SheetFlow: {
    head: "3 dosya → 1 tablo",
    meta: "MIT",
    lines: [
      { text: "Ad Soyad · AD SOYAD · ad  soyad", dim: true },
      { text: "→ başlıklar eşleşti", hot: true },
      { text: "cp1254 + noktalı virgül", dim: true },
      { text: "→ kodlama düzeldi", hot: true },
    ],
  },
}

export function ProductVisual({ name }: { name: string }) {
  const v = VISUALS[name]
  if (!v) return null
  return (
    <div className="overflow-hidden rounded-xs border border-white/10 bg-black/40">
      <div className="flex items-center gap-2 border-b border-white/10 px-2.5 py-1.5">
        <span className="size-1 shrink-0 rounded-full bg-crimson-lit" />
        <span className="truncate font-mono text-[10px] uppercase tracking-[0.12em] text-white/40">
          {v.head}
        </span>
        <span className="ml-auto font-mono text-[10px] tabular-nums text-crimson-lit">
          {v.meta}
        </span>
      </div>
      <div className="flex flex-col gap-0.5 px-2.5 py-2">
        {v.lines.map((l, i) => (
          <span
            key={i}
            className={
              "truncate font-mono text-[10.5px] leading-[1.5] " +
              (l.hot
                ? "text-crimson-lit"
                : l.dim
                  ? "text-white/35"
                  : "text-white/70")
            }
          >
            {l.text}
          </span>
        ))}
      </div>
    </div>
  )
}

export default ProductVisual
