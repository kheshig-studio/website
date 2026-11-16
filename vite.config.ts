import { fileURLToPath, URL } from "node:url"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"
import { defineConfig } from "vite"

const page = (p: string) => fileURLToPath(new URL(p, import.meta.url))

// Çok sayfalı site: her sayfa kendi klasöründe gerçek bir index.html.
// GitHub Pages /hakkimda/ adresini hakkimda/index.html olarak sunar.
// Yeni sayfa eklerken buraya da bir satır ekle.
export default defineConfig({
  plugins: [react(), tailwindcss()],
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
        notfound: page("./404.html"),
      },
    },
  },
})
