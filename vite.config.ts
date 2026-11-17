import { readFile } from "node:fs/promises"
import { fileURLToPath, URL } from "node:url"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig, minify, transformWithOxc, type Plugin } from "vite"

const page = (p: string) => fileURLToPath(new URL(p, import.meta.url))

/**
 * Cloudflare Web Analytics (çerezsiz ziyaretçi istatistiği).
 * Cloudflare → Analytics & Logs → Web Analytics → kheshig.studio → JS snippet içindeki
 * "token" değerini buraya yaz. Boşken siteye hiçbir kod eklenmez. Token gizli değildir.
 */
const CF_ANALYTICS_TOKEN = ""

function analytics(): Plugin {
  return {
    name: "kheshig:analytics",
    apply: "build",
    transformIndexHtml() {
      if (!CF_ANALYTICS_TOKEN) return []
      return [
        {
          tag: "script",
          attrs: {
            defer: true,
            src: "https://static.cloudflareinsights.com/beacon.min.js",
            "data-cf-beacon": JSON.stringify({ token: CF_ANALYTICS_TOKEN }),
          },
          injectTo: "body",
        },
      ]
    },
  }
}

/**
 * src/tools/tweet-sil.ts → küçültülmüş tek parça JS.
 * Sayfa bunu `import { code } from "virtual:tweet-sil"` ile alır ve
 * bookmarklet + konsol kodu olarak gösterir. Araç x.com içinde
 * çalıştığı için import içeremez; tek dosya olarak kalmalı.
 */
function tweetSilTool(): Plugin {
  const id = "virtual:tweet-sil"
  const resolved = "\0" + id
  const src = page("./src/tools/tweet-sil.ts")
  return {
    name: "kheshig:tweet-sil",
    resolveId(i) {
      if (i === id) return resolved
    },
    async load(i) {
      if (i !== resolved) return
      this.addWatchFile(src)
      const ts = await readFile(src, "utf8")
      const js = await transformWithOxc(ts, "tweet-sil.ts", { lang: "ts" })
      const min = await minify("tweet-sil.js", `(()=>{${js.code}})();`, { compress: true, mangle: true })
      if (min.errors?.length) this.error(String(min.errors[0]?.message ?? min.errors[0]))
      return `export const code = ${JSON.stringify(min.code.trim())}`
    },
  }
}

// Çok sayfalı site: her sayfa kendi klasöründe gerçek bir index.html.
// GitHub Pages /hakkimda/ adresini hakkimda/index.html olarak sunar.
// Yeni sayfa eklerken buraya da bir satır ekle.
export default defineConfig({
  plugins: [react(), tailwindcss(), tweetSilTool(), analytics()],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    rolldownOptions: {
      input: {
        home: page("./index.html"),
        urunler: page("./urunler/index.html"),
        ucretsiz: page("./ucretsiz/index.html"),
        oyunlar: page("./oyunlar/index.html"),
        hakkimda: page("./hakkimda/index.html"),
        iletisim: page("./iletisim/index.html"),
        tweetsil: page("./tweet-sil/index.html"),
        // İngilizce site: aynı bileşenler, <html lang="en">
        en_home: page("./en/index.html"),
        en_products: page("./en/products/index.html"),
        en_free: page("./en/free/index.html"),
        en_games: page("./en/games/index.html"),
        en_about: page("./en/about/index.html"),
        en_contact: page("./en/contact/index.html"),
        notfound: page("./404.html"),
      },
    },
  },
})
