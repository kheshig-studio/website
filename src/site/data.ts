/* ─────────────────────────────────────────────────────────────
   Sitenin tüm içeriği burada. Yeni ürün / oyun eklemek için
   yalnızca bu dosyayı düzenle — sayfalar kendiliğinden güncellenir.
   Kural: uydurma fiyat ve şişirilmiş sayı yazılmaz.
   ───────────────────────────────────────────────────────────── */

export const EMAIL = "muhammetdiktepeee@gmail.com"

export const LINKS = {
  bionluk: "https://bionluk.com/kheshig",
  r10: "https://www.r10.net/profil/225601-kheshigstudio.html",
  github: "https://github.com/kheshig-studio",
  linkedin: "https://www.linkedin.com/in/muhammetdiktepe",
}

/* Platformdaki gerçek sayılar (11/10/2026). Elle güncellenir. */
export const PROOF = {
  bionlukOrders: 18,
  bionlukRating: "5.0",
}

export function mailto(subject: string, lines: string[]) {
  return (
    "mailto:" +
    EMAIL +
    "?subject=" +
    encodeURIComponent("Kheshig Studio — " + subject) +
    "&body=" +
    encodeURIComponent(lines.join("\n"))
  )
}

export const JOB_MAIL = mailto("iş talebi", [
  "Merhaba,",
  "",
  "İhtiyacım şu:",
  "",
  "Bütçe / süre beklentim:",
  "",
])

/* ── Ürünler ─────────────────────────────────────────────── */

export type Product = {
  slug: string
  name: string
  kind: string
  /** Tek satırlık kısa tanım (kartın üstünde). */
  tagline: string
  /** Ürün sayfasındaki açıklama. */
  description: string
  features: string[]
  /** Yalnızca gerçekten bilinen fiyat. Boşsa "Fiyat için yazın". */
  price?: string
  /** Dış bağlantı (GitHub, mağaza). Boşsa ürüne özel mail açılır. */
  href?: string
  cta?: string
  license?: string
}

export const PAID: Product[] = [
  {
    slug: "firma-listesi",
    name: "Firma Listesi",
    kind: "Veri",
    tagline: "Sektör ve şehir seçin, telefonlu firma listesi Excel'de gelsin.",
    description:
      "81 il, 207 sektör. Google Haritalar'dan firma adı, telefon, adres ve web sitesi durumu tek bir Excel dosyasında. Web sitesi olmayan firmalar ayrıca süzülür — web tasarım satanlar için hazır müşteri listesi.",
    features: [
      "İlçe ilçe tarama: tek aramaya göre ~3 kat fazla kayıt",
      "Ad + adrese göre tekrarlar temizlenmiş",
      "20 satırlık örnek ücretsiz",
    ],
    price: "750 ₺'den",
    cta: "Örnek iste",
  },
  {
    slug: "feedalert",
    name: "FeedAlert",
    kind: "Masaüstü",
    tagline: "Takip ettiğiniz sitelerde yeni bir şey çıkınca haber verir.",
    description:
      "Sitenin ana sayfa linkini verin; RSS akışını kendisi bulur, doğrular ve yalnızca gerçekten yeni olan içerikleri bildirir. Yarıda kesilen kayıt geçmişi bozmaz, yeniden başlatınca kaldığı yerden devam eder.",
    features: [
      "Akış adresi aramanıza gerek yok",
      "Tek .exe — kurulum yok, Python yok",
      "Türkçe / İngilizce arayüz",
    ],
    price: "400 ₺",
  },
  {
    slug: "sinyal",
    name: "Sinyal",
    kind: "Uygulama",
    tagline: "Haberleri tarar, sizin üslubunuzla tweet ve yanıt yazar.",
    description:
      "Sekiz haber akışını aynı anda tarar, gündemi çıkarır ve sizin yazım tarzınızla tweet ve yanıt taslakları üretir. Kendi Anthropic API anahtarınızla çalışır; veriniz sizde kalır.",
    features: [
      "Sizin üslubunuzu örnek metinlerden öğrenir",
      "Serbest metin değil, doğrulanmış çıktı",
      "Kendi API anahtarınız — aylık abonelik yok",
    ],
    price: "1.500 ₺",
  },
]

export const FREE: Product[] = [
  {
    slug: "tweet-sil",
    name: "Tweet Sil",
    kind: "Tarayıcı aracı",
    tagline: "Tüm tweetlerinizi, retweet ve beğenilerinizi ücretsiz silin.",
    description:
      "X arşivinizdeki her tweeti tek tek, kendi tarayıcınızda siler — profilde görünmeyen eski tweetler dahil. Kurulum yok, hesap yok; verileriniz hiçbir sunucuya gitmez.",
    features: [
      "Binlerce tweet: arşivdeki hepsi",
      "Durdur / kaldığı yerden devam et",
      "İstek sınırına takılınca kendisi bekler",
    ],
    href: "/tweet-sil/",
    cta: "Aracı aç",
  },
  {
    slug: "videohunter",
    name: "VideoHunter",
    kind: "Masaüstü",
    tagline: "Bağlantıyı yapıştırın, videoyu indirin.",
    description:
      "yt-dlp tabanlı, sade arayüzlü video indirici. Kurulum gerektirmeyen tek dosya; birden fazla videoyu sıraya alıp kalite seçerek indirir.",
    features: ["Tek dosya, kurulumsuz", "İndirme kuyruğu ve kalite seçimi", "Açık kaynak"],
    href: "https://github.com/kheshig-studio/videohunter",
    cta: "GitHub'dan indir",
    license: "MIT",
  },
  {
    slug: "sheetflow",
    name: "SheetFlow",
    kind: "Açık kaynak",
    tagline: "Onlarca Excel/CSV dosyasını tek tabloda birleştirir.",
    description:
      "Farklı yazılmış sütun başlıklarını eşleştirir (\"Ad Soyad\" ile \"isim\" aynı sütuna düşer), Türkçe CSV tuhaflıklarını — noktalı virgül ayırıcı, cp1254 kodlama — kendisi çözer.",
    features: [
      "Başlık eşleştirme",
      "Türkçe karakter sorunu yok",
      "Açık kaynak",
    ],
    href: "https://github.com/kheshig-studio/sheetflow",
    cta: "GitHub'dan indir",
    license: "MIT",
  },
]

export function productHref(p: Product) {
  return (
    p.href ??
    mailto(p.name, [
      "Merhaba,",
      "",
      p.name + " ile ilgileniyorum.",
      "",
      "Sorum / ihtiyacım:",
      "",
    ])
  )
}

/* ── Oyunlar ─────────────────────────────────────────────────
   Tarayıcıda oynanan bir oyun eklemek için:
   1. Oyunun klasörünü public/oyunlar/<slug>/ içine kopyala
      (içinde index.html olmalı).
   2. Aşağıya bir kayıt ekle ve play: "/oyunlar/<slug>/" yaz.
   ───────────────────────────────────────────────────────────── */

export type Game = {
  slug: string
  name: string
  platform: string
  status: "Oynanabilir" | "Play'de yayında" | "Yapım aşamasında"
  description: string
  image?: { src: string; alt: string; width: number; height: number }
  /** Sitede tarayıcıdan oynanacaksa yol: "/oyunlar/<slug>/" */
  play?: string
  /** Mağaza bağlantısı (Google Play vb.) */
  store?: { label: string; href: string }
}

export const GAMES: Game[] = [
  {
    slug: "block-merge",
    name: "Block Merge",
    platform: "Android",
    status: "Play'de yayında",
    description:
      "Dört yönden gelen blokları ortada birleştirin; üç aynı renk patlar, hızlı patlatınca kombo büyür. Üçüncü komboda roket, bomba, joker ya da ağır çekim açılır. Yanında elde tasarlanmış 60 bölümlük bulmaca modu ve renk körü modu var. Reklam yok, uygulama içi satın alma yok.",
    image: {
      src: "/blockgame.webp",
      alt: "Block Merge oyun ekranı: yeşil zeminde renkli bloklar birleşiyor, üstte COMBO x3 yazıyor.",
      width: 620,
      height: 852,
    },
    store: {
      label: "Google Play'de aç",
      href: "https://play.google.com/store/apps/details?id=app.netlify.wonderful_nougat_7740ff.twa",
    },
  },
  {
    slug: "kirik-kopruler",
    name: "Kırık Köprüler",
    platform: "Tarayıcı",
    status: "Yapım aşamasında",
    description:
      "Kalıcı ölümlü, metin tabanlı bir kıyamet sonrası rol yapma oyunu. Zar, savaş, ticaret, fraksiyonlar ve keşif sisiyle açılan bir harita. Ölünce eşyaların gider, öğrendiklerin kalır. Tarayıcı sürümü yapılıyor — hazır olunca burada oynanabilecek.",
  },
]
