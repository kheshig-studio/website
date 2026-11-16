# kheshig.studio

Kheshig Studio'nun sitesi. Vite + React + Tailwind, çok sayfalı.
`main` dalına push edilince GitHub Actions siteyi derleyip GitHub Pages'e yayınlar.

## Çalıştırma

```bash
npm install
npm run dev      # geliştirme: http://localhost:5173
npm run build    # dist/ klasörüne derler
npm run preview  # derlenmiş siteyi önizler
```

## Sayfalar

| Adres        | HTML dosyası          | Bileşen                  |
|--------------|-----------------------|--------------------------|
| `/`          | `index.html`          | `src/pages/home.tsx`     |
| `/urunler/`  | `urunler/index.html`  | `src/pages/products.tsx` |
| `/ucretsiz/` | `ucretsiz/index.html` | `src/pages/free.tsx`     |
| `/oyunlar/`  | `oyunlar/index.html`  | `src/pages/games.tsx`    |
| `/hakkimda/` | `hakkimda/index.html` | `src/pages/about.tsx`    |
| `/iletisim/` | `iletisim/index.html` | `src/pages/contact.tsx`  |
| (yok)        | `404.html`            | `src/pages/notfound.tsx` |

Yeni sayfa için: klasör + `index.html` aç, `src/pages/` altına bileşen yaz,
`vite.config.ts` içindeki `input` listesine ekle, `src/site/Layout.tsx` içindeki `NAV`'a link koy.

## İçerik güncelleme

Ürünler, oyunlar, linkler ve Bionluk sayıları **tek dosyada**: `src/site/data.ts`.

- **Yeni ürün:** `PAID` (satılık) ya da `FREE` (ücretsiz) listesine bir kayıt ekle.
- **Tarayıcıda oynanan oyun:** oyunun klasörünü (içinde `index.html` olan) `public/oyunlar/<slug>/`
  altına kopyala, `GAMES` listesine kayıt ekle ve `play: "/oyunlar/<slug>/"` yaz.
  Kart otomatik olarak "Tarayıcıda oyna" butonu gösterir.
