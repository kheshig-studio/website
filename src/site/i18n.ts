/* İki dilli site. Dil, sayfanın <html lang="…"> etiketinden okunur:
   /en/… altındaki HTML dosyaları lang="en", diğerleri lang="tr".
   Bileşenler metni t("Türkçe", "English") ile seçer. */

export type Lang = "tr" | "en"

export const LANG: Lang =
  typeof document !== "undefined" && document.documentElement.lang === "en" ? "en" : "tr"
export const isEn = LANG === "en"

export function t<T>(tr: T, en: T): T {
  return isEn ? en : tr
}

/** Sayfa → [Türkçe adres, İngilizce adres] */
export const ROUTES = {
  home: ["/", "/en/"],
  products: ["/urunler/", "/en/products/"],
  free: ["/ucretsiz/", "/en/free/"],
  games: ["/oyunlar/", "/en/games/"],
  about: ["/hakkimda/", "/en/about/"],
  contact: ["/iletisim/", "/en/contact/"],
} as const

export type Route = keyof typeof ROUTES

export function href(r: Route, hash = "") {
  return ROUTES[r][isEn ? 1 : 0] + (hash ? "#" + hash : "")
}

/** Dil değiştirici için: bu sayfanın öbür dildeki adresi. */
export function otherLangPath(): string {
  if (typeof window === "undefined") return isEn ? "/" : "/en/"
  const here = window.location.pathname
  for (const [tr, en] of Object.values(ROUTES)) {
    if (here === tr || here === en) return isEn ? tr : en
  }
  return isEn ? "/" : "/en/"
}
