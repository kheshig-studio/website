import { StrictMode, type ReactNode } from "react"
import { createRoot } from "react-dom/client"
import "../index.css"

export function mount(node: ReactNode) {
  createRoot(document.getElementById("root")!).render(<StrictMode>{node}</StrictMode>)
  scrollToHash()
}

/* Sayfa React ile sonradan çizildiği için tarayıcı açılışta #çapa'ya inemez
   (o an element yok). Çizimden sonra biz kaydırırız: /urunler/#ucretsiz gibi. */
function scrollToHash() {
  const id = decodeURIComponent(window.location.hash.slice(1))
  if (!id) return
  let tries = 0
  const go = () => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ block: "start", behavior: "instant" as ScrollBehavior })
    else if (++tries < 20) requestAnimationFrame(go)
  }
  requestAnimationFrame(go)
}
