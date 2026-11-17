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
  /** Shopier ürün linki. Doluysa "Satın al" doğrudan ödemeye gider;
      ödeme sonrası key otomatik üretilip müşteriye maillenir. */
  buy?: string
  /** Uygulamanın gerçek ekran görüntüsü (public/gorseller/). */
  image?: { src: string; alt: string; width: number; height: number }
  cta?: string
  license?: string
  /** İngilizce site (/en/) için metinler. Boş bırakılan alan Türkçesiyle gösterilir. */
  en?: EnText<Product, "name" | "kind" | "tagline" | "description" | "features" | "price" | "cta"> & { imageAlt?: string }
}

type EnText<T, K extends keyof T> = Partial<Pick<T, K>>

/** Ürünün o anki dildeki hâli. */
export function localProduct(p: Product, en: boolean): Product {
  if (!en || !p.en) return p
  const { imageAlt, ...rest } = p.en
  return { ...p, ...rest, image: p.image && imageAlt ? { ...p.image, alt: imageAlt } : p.image }
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
    en: {
      name: "Business Leads",
      kind: "Data",
      tagline: "Pick a sector and a city; get a business list with phone numbers in Excel.",
      description:
        "81 Turkish provinces, 207 sectors. Business name, phone, address and website status from Google Maps in one Excel file. Businesses without a website are filtered out separately — a ready lead list for web designers selling in Turkey.",
      features: [
        "District-by-district scan: ~3× more records than a single search",
        "Duplicates removed by name + address",
        "Free 20-row sample",
      ],
      price: "from ₺750",
      cta: "Ask for a sample",
    },
  },
  {
    slug: "feedalert",
    name: "FeedAlert",
    kind: "Masaüstü",
    tagline: "YouTube kanalları ve sitelerde yeni içerik çıkınca Telegram'dan haber verir.",
    description:
      "Kanal ya da site linkini yapıştırın; RSS akışını kendisi bulur, doğrular ve yalnızca gerçekten yeni olan içerikleri Telegram'a gönderir. YouTube için API anahtarı ya da kota yok. Bot yeniden başlasa da takip listesi kaybolmaz.",
    features: [
      "YouTube, blog ve haber siteleri — akış adresi aramanıza gerek yok",
      "Spam yok: yalnızca takibe aldıktan sonraki içerikler",
      "Tek .exe, masaüstü paneli, Türkçe / İngilizce",
    ],
    price: "400 ₺",
    buy: "https://www.shopier.com/kheshigstudioo/53039636",
    image: {
      src: "/gorseller/feedalert.webp",
      alt: "FeedAlert kontrol paneli: üç adımlı kurulum rehberi, bot token alanı, kontrol aralığı ve Botu Başlat butonu.",
      width: 900,
      height: 640,
    },
    en: {
      kind: "Desktop",
      tagline: "Get a Telegram message when a YouTube channel or website posts something new.",
      description:
        "Paste a channel or site link; it finds the RSS feed itself, validates it and sends only genuinely new posts to Telegram. No YouTube API key, no quota. The watch list survives restarts.",
      features: [
        "YouTube, blogs and news sites — no need to hunt for feed URLs",
        "No spam: only posts published after you start tracking",
        "Single .exe, desktop panel, English / Turkish",
      ],
      price: "₺400",
      imageAlt: "FeedAlert control panel: three-step setup guide, bot token field, check interval and Start Bot button.",
    },
  },
  {
    slug: "tytakip",
    name: "TyTakipBot",
    kind: "Telegram botu",
    tagline: "Trendyol'da fiyat ve satıcı değişince Telegram'dan haber verir.",
    description:
      "Trendyol linkini gönderin; ürün adı, güncel fiyat ve buybox satıcısı saniyeler içinde gelir. Takibe aldığınız ürünlerde fiyat düşünce, artınca ya da buybox el değiştirince bildirim alırsınız — rakip takibi için ideal.",
    features: [
      "Fiyat düşüş / artış ve buybox değişim bildirimi",
      "Masaüstü kontrol paneli, Türkçe / İngilizce",
      "Tek .exe — kurulum yok, Python yok",
    ],
    price: "500 ₺",
    buy: "https://www.shopier.com/kheshigstudioo/53039578",
    image: {
      src: "/gorseller/tytakip.webp",
      alt: "TyTakipBot kontrol paneli: Kurulum, Takip ve Kayıtlar sekmeleri, bot token alanı ve Botu Başlat butonu.",
      width: 900,
      height: 640,
    },
    en: {
      kind: "Telegram bot",
      tagline: "Get a Telegram alert when a Trendyol price or seller changes.",
      description:
        "Send a Trendyol link; the product name, current price and buybox seller arrive in seconds. Track products and get notified when the price drops, rises or the buybox changes hands — built for sellers watching competitors on Trendyol.",
      features: [
        "Price drop / rise and buybox change alerts",
        "Desktop control panel, English / Turkish",
        "Single .exe — no install, no Python",
      ],
      price: "₺500",
      imageAlt: "TyTakipBot control panel: Setup, Tracking and Logs tabs, bot token field and Start Bot button.",
    },
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
    en: {
      kind: "App",
      tagline: "Reads the news and drafts tweets and replies in your own voice.",
      description:
        "Scans eight news feeds at once, picks out what's trending and drafts tweets and replies in your writing style. Runs on your own Anthropic API key; your data stays with you.",
      features: [
        "Learns your voice from sample posts",
        "Validated structured output, not free text",
        "Your own API key — no monthly subscription",
      ],
      price: "₺1,500",
    },
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
    en: {
      name: "Tweet Sil (Tweet Delete)",
      kind: "Browser tool",
      tagline: "Delete all your tweets, retweets and likes — free.",
      description:
        "Deletes every tweet in your X archive one by one, right in your own browser — including old tweets that no longer show on your profile. No install, no account; your data never touches a server. The tool's interface is in Turkish.",
      features: [
        "Thousands of tweets: everything in the archive",
        "Pause and resume where it left off",
        "Waits on its own when it hits the rate limit",
      ],
      cta: "Open the tool (Turkish)",
    },
  },
  {
    slug: "videohunter",
    name: "VideoHunter",
    kind: "Masaüstü",
    tagline: "Bağlantıyı yapıştırın, videoyu indirin.",
    description:
      "yt-dlp tabanlı video indirici. Tek bir videoyu MP4 ya da MP3 olarak indirir; toplu modda bir anahtar kelime, profil linki ya da hashtag verip en çok izlenenleri topluca çeker. Kurulum gerektirmeyen tek dosya.",
    features: ["Tekli indirme: MP4 / MP3", "Toplu: kelime, profil ya da hashtag", "Tek dosya, kurulumsuz, açık kaynak"],
    image: {
      src: "/gorseller/videohunter.webp",
      alt: "VideoHunter arayüzü: Toplu Viral Avcısı ve Tekli İndirici sekmeleri, hedef kelime alanı ve indirme butonu.",
      width: 780,
      height: 300,
    },
    href: "https://github.com/kheshig-studio/videohunter",
    cta: "GitHub'dan indir",
    license: "MIT",
    en: {
      kind: "Desktop",
      tagline: "Paste a link, download the video.",
      description:
        "A video downloader built on yt-dlp. Grabs a single video as MP4 or MP3; in bulk mode, give it a keyword, profile link or hashtag and it pulls the most-watched videos in one go. A single file, nothing to install.",
      features: ["Single download: MP4 / MP3", "Bulk: keyword, profile or hashtag", "Single file, no install, open source"],
      cta: "Download on GitHub",
      imageAlt: "VideoHunter interface: Bulk Viral Hunter and Single Downloader tabs, target keyword field and download button.",
    },
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
    image: {
      src: "/gorseller/sheetflow.webp",
      alt: "SheetFlow arayüzü: kaynak dosyalar, işlemler ve çıktı adımları; klasör seç, dosyaları tara ve çalıştır butonları.",
      width: 780,
      height: 500,
    },
    href: "https://github.com/kheshig-studio/sheetflow",
    cta: "GitHub'dan indir",
    license: "MIT",
    en: {
      kind: "Open source",
      tagline: "Merges dozens of Excel/CSV files into one table.",
      description:
        "Matches columns that are named differently (\"Full Name\" and \"name\" land in the same column) and handles messy CSV quirks — semicolon delimiters, legacy encodings like cp1254 — on its own.",
      features: ["Header matching", "No broken characters", "Open source"],
      cta: "Download on GitHub",
      imageAlt: "SheetFlow interface: source files, operations and output steps with folder select, scan files and run buttons.",
    },
  },
]

export function productHref(p: Product, en = false) {
  return (
    p.buy ??
    p.href ??
    (en
      ? mailto(p.name, ["Hi,", "", "I'm interested in " + p.name + ".", "", "My question / what I need:", ""])
      : mailto(p.name, ["Merhaba,", "", p.name + " ile ilgileniyorum.", "", "Sorum / ihtiyacım:", ""]))
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
  /** İngilizce site için. */
  en?: { name?: string; platform?: string; description?: string; storeLabel?: string; imageAlt?: string; note?: string }
}

export const GAME_STATUS_EN: Record<Game["status"], string> = {
  Oynanabilir: "Playable",
  "Play'de yayında": "On Google Play",
  "Yapım aşamasında": "In development",
}

export function localGame(g: Game, en: boolean): Game {
  if (!en || !g.en) return g
  return {
    ...g,
    name: g.en.name ?? g.name,
    platform: g.en.platform ?? g.platform,
    description: (g.en.description ?? g.description) + (g.en.note ? " " + g.en.note : ""),
    store: g.store && { ...g.store, label: g.en.storeLabel ?? g.store.label },
    image: g.image && g.en.imageAlt ? { ...g.image, alt: g.en.imageAlt } : g.image,
  }
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
    en: {
      description:
        "Blocks slide in from four directions and merge in the middle; three of a color pop, and quick pops grow your combo. The third combo unlocks a power-up: rocket, bomb, joker or slow-motion. There's also a puzzle mode with 60 hand-made levels and a color-blind mode. No ads, no in-app purchases.",
      storeLabel: "Open on Google Play",
      imageAlt: "Block Merge gameplay: colorful blocks merging on a green field, with COMBO x3 at the top.",
    },
  },
  {
    slug: "kirik-kopruler",
    name: "Kırık Köprüler: Nüfus Defteri",
    platform: "Tarayıcı",
    status: "Oynanabilir",
    description:
      "Kırık Köprüler evreninde bir hayat simülasyonu. Çöküş'ten 120 yıl sonra, Boğaz'da rastgele bir hayata doğuyorsun: büyük ihtimalle Alt Şehir'in sisinde, nadiren Hisar'da, bazen de lağımda. Yıl yıl yaşıyor; okula gidip gitmeyeceğini, hangi işe gireceğini, ailenle ne kadar ilgileneceğini sen seçiyorsun. Öldüğünde İntizam Heyeti hayatını mühürlü bir tutanağa geçiriyor. Bir hayat birkaç dakika sürüyor.",
    play: "/oyunlar/kirik-kopruler/",
    en: {
      name: "Broken Bridges: The Census Ledger",
      platform: "Browser",
      description:
        "A life simulator set in the Kırık Köprüler (Broken Bridges) universe. 120 years after the Collapse, you're born into a random life on the Bosphorus: most likely in the fog of the Lower City, rarely in the Citadel, sometimes in the sewers. You live year by year, choosing whether to go to school, which work to take and how much to care for your family. When you die, the Order Council seals your life into an official record. A life takes a few minutes.",
      note: "The game is currently in Turkish only.",
    },
  },
  {
    slug: "nobetci",
    name: "Nöbetçi",
    platform: "Tarayıcı",
    status: "Oynanabilir",
    description:
      "Seni izleyen ve öğrenen bir rakibe karşı hızlı, 1v1 bir nişancı. Kâğıt ve mürekkepten arenalarda koşuyor, kayıp zıplayarak hız biriktiriyor, duvarlarda koşuyor ve atılıyorsun. Elinde tam otomatik bir tüfek ve bir pompalı var. Nöbetçi hangi koridordan geldiğini, çatışmada hangi yöne kaçtığını, hangi silahı ne zaman çektiğini not ediyor ve her raunt sana göre biraz daha iyi hazırlanıyor. Ne öğrendiğini raunt aralarında söylüyor; defterini tarayıcında saklıyor. İki harita ve üç zorluk seviyesi var. 5 raundu ilk alan kazanır. Klavye ve fare gerekir. Erken prototip.",
    play: "/oyunlar/nobetci/",
    en: {
      name: "Nöbetçi (Sentinel)",
      platform: "Browser",
      description:
        "A fast 1v1 shooter against an opponent that watches and learns you. You sprint, slide-hop to build speed, wall-run and dash through arenas of paper and ink, with a full-auto rifle and a shotgun. The Sentinel notes which lane you take, which way you dodge, which weapon you pull and when, and it prepares a little better for you every round. Between rounds it tells you what it learned, and it keeps its notebook in your browser. Two maps, three difficulty levels. First to 5 rounds wins. Needs a keyboard and mouse. Early prototype.",
    },
  },
]
