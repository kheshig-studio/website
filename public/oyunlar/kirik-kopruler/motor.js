/* Kırık Köprüler — Nüfus Defteri · oyun motoru
   DOM'a dokunmaz. Tarayıcıda window.KK, Node'da globalThis.KK olur.
   Bütün dünya bilgisi dunya-kitabi.md'deki "Kesin" maddelerden gelir. */
(function () {
  "use strict"

  /* ── yardımcılar ─────────────────────────────────────────── */
  const R = Math.random
  const rnd = (a, b) => a + Math.floor(R() * (b - a + 1))
  const sec = (arr) => arr[Math.floor(R() * arr.length)]
  const sans = (p) => R() < p
  const kel = (v, a, b) => Math.max(a, Math.min(b, v))
  const pad = (n) => String(n).padStart(2, "0")
  function agirlikli(liste) {
    // liste: [[deger, agirlik], ...]
    let top = 0
    for (const [, w] of liste) top += Math.max(0, w)
    let r = R() * top
    for (const [v, w] of liste) {
      r -= Math.max(0, w)
      if (r <= 0) return v
    }
    return liste[liste.length - 1][0]
  }

  /* ── dünya tabloları ─────────────────────────────────────── */
  const YERLER = {
    hisar: { ad: "Hisar", uzun: "Hisar'da", sira: 0, olum: 0.4, ciger: 0.3 },
    A: { ad: "A Sektörü", uzun: "Alt Şehir'in A Sektörü'nde", sira: 1, olum: 0.69, ciger: 1.0 },
    B: { ad: "B Sektörü", uzun: "Alt Şehir'in B Sektörü'nde", sira: 2, olum: 0.75, ciger: 1.5 },
    C: { ad: "C Sektörü", uzun: "Alt Şehir'in C Sektörü'nde", sira: 3, olum: 0.82, ciger: 2.0 },
    D: { ad: "D Sektörü", uzun: "Alt Şehir'in D Sektörü'nde, Boğaz'ın en aşağısında", sira: 4, olum: 0.91, ciger: 2.5 },
    koy: { ad: "Kıyı köyü", uzun: "Marmara kıyısında, Nizam'a balık ve tahıl veren bir köyde", sira: 3, olum: 0.79, ciger: 0.7 },
    gocmen: { ad: "Göçmen", uzun: "D Sektörü'nün göçmen damlarında", sira: 4, olum: 1.0, ciger: 2.5 },
    kalan: { ad: "Lağım", uzun: "Alt Şehir'in lağımlarında, Kalanlar'ın arasında", sira: 5, olum: 0.96, ciger: 0 },
  }
  const DOGUM_YERI = [
    ["hisar", 3], ["A", 10], ["B", 22], ["C", 25], ["D", 28], ["koy", 9], ["gocmen", 2], ["kalan", 1],
  ]
  const BASAMAK_AD = {
    1: "Hisarlı soylu",
    2: "Memur ve subay",
    3: "Nefer ve polis",
    4: "Alt Şehir halkı",
    5: "Kayıtsız",
    0: "Sınıf dışı",
  }
  const BASAMAK_TABLO = {
    hisar: [[1, 35], [2, 65]],
    A: [[2, 14], [3, 24], [4, 52], [5, 10]],
    B: [[2, 5], [3, 20], [4, 55], [5, 20]],
    C: [[2, 3], [3, 15], [4, 57], [5, 25]],
    D: [[3, 10], [4, 50], [5, 40]],
    koy: [[4, 85], [5, 15]],
    gocmen: [[4, 20], [5, 80]],
  }
  const KOKEN = {
    beylik: { ad: "Anadolu beylikleri", inanc: "Tengrici", yol: "Anadolu'dan, beyliklerin arasından" },
    kuzey: { ad: "kuzeydeki krallık", inanc: "Hristiyan", yol: "kuzeydeki krallığın fakir dağlarından" },
    trakya: { ad: "Trakya'daki ticaret devleti", inanc: "inançsız", yol: "Trakya'nın tüccar şehirlerinden" },
    ege: { ad: "Ege'deki koloni devleti", inanc: "inançsız", yol: "Ege'nin koloni limanlarından" },
  }

  const ADLAR = {
    yerli: {
      e: ["Ahmet", "Mehmet", "Ali", "Hasan", "Hüseyin", "Mustafa", "Osman", "İbrahim", "Yusuf", "Murat", "Kadir", "Cemal", "Rıza", "Halil", "İsmail", "Selim", "Tahsin", "Kâzım", "Veli", "Recep", "Nuri", "Sabri", "Bekir", "Kemal", "Orhan", "Ferit", "Yakup", "Davut", "Şükrü", "Sedat", "Ramazan", "Erol", "Necmi", "Haydar"],
      k: ["Ayşe", "Fatma", "Emine", "Hatice", "Zeynep", "Meryem", "Havva", "Zehra", "Hacer", "Şerife", "Saliha", "Nermin", "Sevim", "Gülizar", "Naciye", "Dürdane", "Hamide", "Melek", "Nazlı", "Feride", "Leman", "Sultan", "Asiye", "Hayriye", "Seher", "Cemile", "Nuran", "Kader", "Gülsüm", "Fadime"],
    },
    beylik: {
      e: ["Alpay", "Tolga", "Kutlu", "Arslan", "Tarkan", "Oğuz", "Temür", "Kaya", "Tuğrul", "Atilla", "Bilgehan", "Orhun"],
      k: ["Börte", "Tomris", "Ulduz", "Altun", "Gökçe", "Aybike", "Tansu", "Bengü", "Ayaz", "Almıla", "Kutluay"],
    },
    kuzey: {
      e: ["Marko", "Stefan", "Lazar", "Petar", "Vuk", "Bogdan", "Matej", "Dragan", "Mirko", "Pavle"],
      k: ["Yelena", "Milica", "Vesna", "Ana", "Marya", "Dragana", "Katarina", "Mila", "Danica"],
    },
    trakya: {
      e: ["Marin", "Lorenzo", "Piero", "Alvise", "Nicolo", "Zuan", "Benedeto", "Tomà"],
      k: ["Chiara", "Lucia", "Bianca", "Isabeta", "Marieta", "Orsola", "Franceschina"],
    },
    ege: {
      e: ["Atis", "Ardis", "Kadis", "Tylon", "Manes", "Sadyat", "Myrsil"],
      k: ["Omfale", "Tudo", "Ariya", "Sardi", "Nanna", "Kaya", "Artimu"],
    },
    // Kalanlar eski dünyadan kalma adlarını taşır (dünya kitabı, kesin)
    kalan: {
      e: ["Burak", "Emre", "Kaan", "Mert", "Arda", "Can", "Doruk", "Berk", "Onur", "Kerem", "Barış", "Umut"],
      k: ["Selin", "Ece", "Defne", "Nehir", "Ilgaz", "Duru", "Buse", "Damla", "Irmak", "Ezgi", "Pelin", "Deniz"],
      soy: ["Kaya", "Yıldız", "Demir", "Aydın", "Çelik", "Şahin", "Öztürk", "Arslan", "Koç", "Kurt", "Polat", "Erdem", "Aksoy", "Yalçın", "Güneş", "Tunç"],
    },
  }

  // meslekler: fis/lira yıllık, kaza ve şiddet yıllık ölüm riski, ciger yıllık yıpranma
  const MESLEK = {
    hamal: { ad: "liman hamalı", fis: 70, lira: 2, kaza: 0.012, ciger: 1, kayitli: true },
    tersane: { ad: "tersane işçisi", fis: 90, lira: 2, kaza: 0.01, ciger: 1.5, kayitli: true },
    kaynakci: { ad: "kaynakçı", fis: 100, lira: 3, kaza: 0.008, ciger: 2.2, kayitli: true },
    fabrika: { ad: "fabrika işçisi", fis: 80, lira: 1, kaza: 0.007, ciger: 2.2, kayitli: true },
    seyyar: { ad: "seyyar satıcı", fis: 0, lira: 9, kaza: 0.001, ciger: 1 },
    meyhaneci: { ad: "lağım birası satan meyhaneci", fis: 0, lira: 16, siddet: 0.005, ciger: 0.8 },
    eskici: { ad: "eskici ve terzi", fis: 0, lira: 11, ciger: 0.5 },
    tamirci: { ad: "tamirci ve lehimci", fis: 0, lira: 13, kaza: 0.003, ciger: 1.4 },
    balikci: { ad: "balıkçı", fis: 0, lira: 8, kaza: 0.009, ciger: 1 },
    hurdaci: { ad: "harabe hurdacısı", fis: 0, lira: 4, kaza: 0.007, ciger: 1.6, rad: 0.002 },
    kanal: { ad: "kanal temizlikçisi", fis: 55, lira: 0, kaza: 0.005, ciger: 2, rad: 0.004, kayitli: true },
    ciftci: { ad: "tarla işçisi", fis: 35, lira: 3, kaza: 0.003, ciger: 0.3 },
    dilenci: { ad: "dilenci", fis: 0, lira: 1, ciger: 1.2 },
    hizmetci: { ad: "Hisar'da hizmetçi", fis: 45, lira: 6, ciger: 0.4, kayitli: true },
    polis: { ad: "polis", fis: 160, lira: 4, siddet: 0.006, ciger: 1, kayitli: true },
    memur: { ad: "İntizam Heyeti'nin evrak dairesinde memur", fis: 220, lira: 12, ciger: 0.4, kayitli: true },
    subay: { ad: "Nizam subayı", fis: 320, lira: 30, ciger: 0.4, kayitli: true },
    soylu: { ad: "Hisarlı bir ailenin mirasçısı", fis: 0, lira: 140, ciger: 0.2 },
    kacakci: { ad: "kaçakçı", fis: 0, lira: 34, siddet: 0.018, kaza: 0.006, ciger: 1 },
    yosuncu: { ad: "Yosun satıcısı", fis: 0, lira: 28, siddet: 0.02, ciger: 1 },
    nefer: { ad: "nefer", fis: 130, lira: 0, siddet: 0.01, ciger: 1.2, kayitli: true },
    cavus: { ad: "çavuş", fis: 190, lira: 3, siddet: 0.007, ciger: 1.2, kayitli: true },
    konsey: { ad: "Konsey üyesi", fis: 400, lira: 40, ciger: 0.4, kayitli: true },
    intizamci: { ad: "intizamcı (İntizam Heyeti'nin serbest görevlisi)", fis: 110, lira: 0, siddet: 0.014, ciger: 1.5, kayitli: true },
    toplayici: { ad: "Yosun toplayıcısı", fis: 0, lira: 5, kaza: 0.004, ciger: 0 },
    yok: { ad: "işsiz", fis: 0, lira: 0, ciger: 0 },
  }

  function meslekSec(p) {
    const y = p.yer
    if (y === "kalan") return "toplayici"
    if (y === "hisar") return p.basamak === 1 ? "soylu" : agirlikli([["memur", 55], ["subay", 45]])
    if (y === "koy") return agirlikli([["balikci", 50], ["ciftci", 40], ["seyyar", 6], ["dilenci", 4]])
    if (p.basamak === 2) return agirlikli([["memur", 80], ["tamirci", 20]])
    if (p.basamak === 3 && p.okur && sans(0.5)) return "polis"
    if (p.basamak === 5)
      return agirlikli([["hurdaci", 30], ["dilenci", 15], ["seyyar", 18], ["hamal", 22], ["kanal", 15]])
    const liste = [
      ["hamal", 16], ["tersane", 14], ["kaynakci", 8], ["fabrika", 18], ["seyyar", 9],
      ["meyhaneci", 3], ["eskici", 5], ["tamirci", 6], ["balikci", 9], ["kanal", 6], ["hurdaci", 6],
    ]
    if (p.okur) liste.push(["polis", 5])
    return agirlikli(liste)
  }

  const FABRIKA_URUN = ["mermi", "gaz maskesi filtresi", "tuğla", "ilaç"]

  /* ── temel ölüm eğrisi ─────────────────────────────────────
     Yıllık ölüm olasılığı; yerin çarpanı ve kişinin durumu bunu büyütür.
     Hedef (dünya kitabı): Alt Şehir'de ortalama ~45, Hisar'da ~65,
     bebek ölümü yüksek, beşini geçen 50'leri görebilir. */
  const RISK = 0.45 // meslek ve yaşam tarzı risklerinin genel çarpanı
  function temelOlum(yas) {
    if (yas === 0) return 0.1
    if (yas < 5) return 0.016
    if (yas < 15) return 0.003
    if (yas < 30) return 0.004
    if (yas < 45) return 0.006
    if (yas < 60) return 0.006 * Math.pow(1.1, yas - 44)
    return Math.min(0.75, 0.026 * Math.pow(1.1, yas - 59))
  }

  /* ── kişi ────────────────────────────────────────────────── */
  function adSec(havuz, cins) {
    return sec(ADLAR[havuz][cins])
  }
  function kisiAd(p) {
    if (p.numara) return p.numara
    return p.ad
  }
  function tamAd(p) {
    if (p.numara) return p.numara + " (eski adı " + p.ad + ")"
    return p.ad
  }

  function dogum(yerZorla) {
    const yer = yerZorla || agirlikli(DOGUM_YERI)
    const cins = sans(0.5) ? "e" : "k"
    const yil = rnd(70, 104) // Çöküş'ten sonraki yıl
    let koken = null
    let havuz = "yerli"
    if (yer === "gocmen") {
      koken = sec(Object.keys(KOKEN))
      havuz = koken
    }
    if (yer === "kalan") havuz = "kalan"
    const p = {
      yer,
      dogumYeri: yer,
      koken,
      havuz,
      cins,
      ad: adSec(havuz, cins) + (yer === "kalan" ? " " + sec(ADLAR.kalan.soy) : ""),
      dogumYili: yil,
      yil,
      yas: 0,
      basamak: yer === "kalan" ? 0 : agirlikli(BASAMAK_TABLO[yer]),
      kanat: null,
      inanc: null,
      saglik: rnd(55, 85),
      ciger: 100,
      umut: rnd(40, 70),
      lira: 0,
      fis: 0,
      yosun: 0,
      sicil: 0,
      okur: false,
      meslek: null,
      urun: null,
      numara: null,
      oluNumara: false,
      anne: null,
      baba: null,
      kardesler: [],
      evli: false,
      es: null,
      okulda: false,
      bekleyenOzel: null, // "__okul" | "__is"
      buYil: { etk: {}, basvuru: 0 },
      sonId: 0,
      cocuklar: [],
      borc: false,
      bayrak: {},
      hast: {},
      hapis: 0,
      hapisToplam: 0,
      esya: {},
      cete: null,
      ceteRutbe: 0,
      cemaat: 0,
      nufuz: 0,
      yolculuk: null,
      olaylar: {}, // olay id -> kaç kez
      sonOlay: {}, // olay id -> son görüldüğü yaş
      sonrakiSecim: rnd(6, 9),
      onemli: [], // tutanak için
      olu: false,
      olumNedeni: null,
      olumMetni: null,
      mezar: null,
      gecmisYil: [],
    }
    p.anne = kisiYap(p, "anne", "k", rnd(16, 34))
    p.baba = kisiYap(p, "baba", "e", Math.max(p.anne.yas + rnd(-2, 10), 17))
    p.anne.meslek = akrabaMeslek(p, p.anne)
    p.baba.meslek = akrabaMeslek(p, p.baba)
    p.anne.yakinlik = rnd(55, 85)
    p.baba.yakinlik = rnd(40, 80)
    if (yer === "kalan") p.saglik = rnd(50, 75)
    p.huy = sec(Object.keys(HUYLAR))
    if (p.huy === "nese") p.umut += 10
    if (p.huy === "ofkeli") p.umut -= 5
    if (yer === "hisar") p.kanat = sans(0.5) ? "Kılıçlar" : "Mühürler"
    if (koken) p.inanc = KOKEN[koken].inanc
    else if (yer === "kalan") p.inanc = "Ana'ya bağlı"
    else p.inanc = agirlikli([["Tengrici", 35], ["Hristiyan", 25], ["inançsız", 40]])
    p.aileInanc = p.inanc
    if (yer === "hisar") p.nufuz = p.basamak === 1 ? 35 : 20

    p.borc = p.basamak === 5 && sans(0.4)
    // kardeşler: büyükler şimdiden var, küçükler ileride doğar (yaşı eksi)
    const nK = yer === "hisar" ? rnd(0, 2) : yer === "kalan" ? rnd(0, 3) : rnd(1, 6)
    for (let i = 0; i < nK; i++) {
      const buyuk = sans(0.6) && p.anne.yas >= 18
      const yas = buyuk ? rnd(1, Math.min(14, p.anne.yas - 16)) : -rnd(1, 9)
      const k = kisiYap(p, "kardes", sans(0.5) ? "e" : "k", yas)
      k.yakinlik = rnd(45, 75)
      if (yas >= 14) k.meslek = akrabaMeslek(p, k)
      p.kardesler.push(k)
    }
    p.kardesler.sort((a, b) => b.yas - a.yas)

    const satirlar = []
    satirlar.push(dogumMetni(p))
    if (yer === "kalan") p.onemli.push("Lağımda, Kalanlar'ın arasında doğdu. Adını korudu.")
    return { p, satirlar }
  }

  const HUYLAR = {
    merakli: { ad: "meraklı", metin: "Daha yürümeden her şeyi ağzına götüren, her kapının ardına bakan bir çocuktun." },
    sessiz: { ad: "sessiz", metin: "Çok az ağlardın. Annen, bu çocuk bir şey bekliyor gibi bakıyor derdi." },
    inatci: { ad: "inatçı", metin: "İstediğin bir şeyi alana kadar susmazdın. Ailen bu inadın sana bir gün lazım olacağını söylerdi." },
    nese: { ad: "neşeli", metin: "Evin en gürültülü kahkahası seninkiydi." },
    ofkeli: { ad: "öfkeli", metin: "Daha beşikteyken yumruklarını sıkardın. Komşular, bu çocuk kavgacı olacak derdi." },
  }

  function anneBabaMeslek(k) {
    if (!k.meslek || k.meslek === "yok") return "işsiz"
    if (k.meslek === "soylu") return null
    return MESLEK[k.meslek].ad
  }

  function dogumMetni(p) {
    const Y = YERLER[p.yer]
    const cocuk = p.cins === "e" ? "oğlan" : "kız"
    const acilis = sec([
      `${p.ad} adında bir ${cocuk} olarak dünyaya geldin.`,
      `Bir ${cocuk} doğdu ve adını ${p.ad} koydular. O ${cocuk} sendin.`,
      `Adın ${p.ad}. Bir ${cocuk} olarak doğdun.`,
    ])
    const c = []
    c.push(acilis)
    if (p.yer === "kalan") {
      c.push(`${buyukHarf(Y.uzun)} doğdun. Yukarıdakiler size "Yeşil" der, siz kendinize Kalanlar dersiniz. Eski dünyadan kalma adını kimse senden alamayacak.`)
    } else if (p.yer === "hisar") {
      c.push(`${buyukHarf(Y.uzun)}, ${p.basamak === 1 ? `${p.kanat} kanadından soylu bir ailenin` : "bir memur ailesinin"} evinde doğdun. Evinizde elektrik hiç kesilmez. Aşağıda, sisin altında Alt Şehir'in ışıkları yanar.`)
    } else if (p.yer === "gocmen") {
      const K = KOKEN[p.koken]
      c.push(`Ailen ${K.yol} geldi. Geçiş kapısında haftalarca bekletildiler ve sonunda ${Y.uzun} bir köşeye sığındılar. Sen orada doğdun. Nizam'ın kayıtlarında adın yok.`)
    } else if (p.yer === "koy") {
      c.push(`${buyukHarf(Y.uzun)} doğdun. Rüzgâr Boğaz'dan değil denizden eser; hava şehirdekinden temizdir.`)
    } else {
      const ev = p.basamak === 5 ? "duvarları naylonla kapatılmış bir damda" : p.basamak <= 3 ? "üç odalı bir evde" : "üç kuşağın birlikte yaşadığı tek odalı bir evde"
      c.push(`${buyukHarf(Y.uzun)}, ${ev} doğdun.`)
    }
    // doğum anı
    const anlar = ["Seni mahallenin yaşlı ebesi doğurttu.", "Doğduğun hafta sis bir gün bile kalkmadı."]
    if (p.yer !== "kalan" && p.yer !== "hisar") anlar.push("Doğduğun gece asit yağmuru yağıyordu; ebe pencereleri bezle tıkadı.", "Annen seni revirin koridorunda, bir sedyenin üstünde doğurdu.", "Doğduğun gün mahallede baskın vardı. İlk sesin kırılan kapıların gürültüsüne karıştı.", "Doğduğun kış mahallede salgın vardı. Annen seni kimseye göstermedi.")
    if (p.yer === "koy") anlar.push("Doğduğun sabah babanın teknesi bereketli döndü; köyde bunu uğur saydılar.")
    if (p.yer === "hisar") anlar.push("Doğumunu Hisar'ın en iyi hekimi yaptırdı.", "Doğumunun şerefine ailen bir ziyafet verdi.")
    if (p.yer === "kalan") anlar.push("Doğduğun gün yosun yatakları ilk kez çiçek açtı; yaşlılar bunu iyiye yordu.")
    c.push(sec(anlar))
    if (p.saglik < 62) c.push("Ebe seni kucağına alınca \"Cılız,\" dedi. \"Kışı çıkarırsa yaşar.\"")
    else if (p.saglik > 78) c.push("İri, gürbüz bir bebektin.")
    c.push(HUYLAR[p.huy].metin)
    // anne baba
    const am = anneBabaMeslek(p.anne)
    const bm = anneBabaMeslek(p.baba)
    if (am && bm && p.yer !== "kalan") c.push(`Annen ${p.anne.ad} ${am}, baban ${p.baba.ad} ${bm}.`)
    else c.push(`Annenin adı ${p.anne.ad}, babanınki ${p.baba.ad}.`)
    if (p.borc) c.push("Ailenin Nizam'a borcu var ve her yıl biraz daha büyüyor.")
    if (p.inanc === "Tengrici") c.push("Evde sabahları Gök Tengri'ye dua edilir.")
    else if (p.inanc === "Hristiyan") c.push("Evin duvarında küçük, tahta bir haç asılı.")
    const buyukler = p.kardesler.filter((k) => k.yas >= 0)
    if (buyukler.length === 1) c.push(`Senden büyük bir kardeşin var: ${buyukler[0].ad}.`)
    else if (buyukler.length > 1) c.push(`Senden büyük ${buyukler.length} kardeşin var: ${buyukler.map((k) => k.ad).join(", ")}.`)
    else c.push("Ailenin ilk çocuğusun.")
    return c.join(" ")
  }

  /* ── yaşlanma ve geçim ───────────────────────────────────── */
  // Geçim fişle hesaplanır (erzak Nizam fişiyle alınır); fiş yetmezse lira bozulur.
  // Pazarda 1 Koloni Lirası, erzakta 10 fişin işini görür.
  function yillikGecim(p, satir) {
    const M = MESLEK[p.meslek || "yok"]
    if (p.meslek) {
      p.fis += M.fis
      p.lira += M.lira
    }
    // eş de çalışır
    if (p.evli && p.es && p.es.sag && p.yas >= 16 && p.yer !== "hisar") {
      p.fis += p.yer === "kalan" ? 0 : 35
      p.lira += p.yer === "kalan" ? 3 : 3
    }
    if (p.yas < 14) {
      if (p.bayrak.sokak && p.yas >= 8) p.lira += 2
      // çocuğun karnını aile doyurur; yoksul ailede doymaz
      if (p.basamak >= 5 && sans(0.3)) p.saglik -= rnd(2, 6)
      return
    }
    if (p.bayrak.oda) {
      if (p.lira >= 12) p.lira -= 12
      else {
        p.bayrak.oda = false
        p.umut -= 4
        satir("Kiranı ödeyemedin ve odandan çıkarıldın.", "kotu")
      }
    }
    const kisi = 1 + (p.evli && p.es && p.es.sag ? 1 : 0) + p.cocuklar.filter((c) => c.sag && c.yas < 14 && !c.nefer).length * 0.5
    const birim = p.yer === "hisar" ? 150 : p.yer === "kalan" ? 20 : 55
    let gerek = birim * kisi
    const fisle = Math.min(p.fis, gerek)
    p.fis -= fisle
    gerek -= fisle
    if (gerek > 0) {
      const lira = Math.ceil(gerek / 10)
      if (p.lira >= lira) p.lira -= lira
      else {
        const eksik = (lira - p.lira) / Math.max(1, Math.ceil(birim * kisi / 10))
        p.lira = 0
        p.saglik -= Math.round((3 + eksik * 7) * (p.bayrak.palto ? 0.6 : 1) * (p.komurYil >= p.yil ? 0.7 : 1))
        p.umut -= 3
        if (eksik > 0.3 && sans(0.6)) satir(sec(["Kış boyunca ekmek yetmedi.", "Paranın bittiği aylarda aç yattın.", "Fişlerin bitti, liran hiç olmadı. Çoğu gece aç yattın."]), "kotu")
      }
    }
  }

  function yaslan(p) {
    const Y = YERLER[p.yer]
    const M = MESLEK[p.meslek || "yok"]
    // ciğer: yerin pusu + meslek
    if (p.yer !== "kalan") {
      p.ciger -= (Y.ciger * 0.3 + (p.yas >= 14 ? (M.ciger || 0) * 0.28 : 0)) * (0.7 + R() * 0.6) * (p.bayrak.oda ? 0.7 : 1)
    }
    // sağlık doğal seyri
    if (p.yas < 35) p.saglik += rnd(0, 4)
    else p.saglik -= Math.max(0, p.yas - 38) * 0.07
    if (p.yosun > 0) {
      p.saglik -= p.yosun / 25
      p.umut += 1
    }
    p.saglik = kel(p.saglik, 1, 100)
    p.ciger = kel(p.ciger, 1, 100)
    p.umut = kel(p.umut, 0, 100)
    p.yosun = kel(p.yosun, 0, 100)
  }

  function olumOlasiligi(p, yasBas) {
    let q = temelOlum(yasBas) * YERLER[p.yer].olum
    if (p.saglik < 25) q *= 2.2
    else if (p.saglik < 45) q *= 1.4
    else if (p.saglik > 80) q *= 0.8
    if (p.yas >= 25) q *= 1 + (100 - p.ciger) / 160
    q *= 1 + p.yosun / 70
    const M = MESLEK[p.meslek || "yok"]
    if (p.yas >= 14) q += ((M.kaza || 0) * (p.bayrak.bot ? 0.8 : 1) + (M.siddet || 0) + (M.rad || 0)) * RISK
    if (p.hast.sari) q *= 1.12
    if (p.hast.pas) q += 0.03
    if (p.hast.lagim) q += 0.025
    if (p.hapis > 0) q *= 1.6
    if (p.bayrak.cark) q += 0.006 * RISK
    if (p.cete && p.cete !== "cark") q += 0.007 * RISK * (1 + (p.ceteRutbe || 0) * 0.3)
    if (p.bayrak.kacakci && p.meslek !== "kacakci") q += 0.006 * RISK
    return Math.min(0.95, q)
  }

  function olumNedeni(p) {
    const M = MESLEK[p.meslek || "yok"]
    const y = p.yas
    if (y < 5) {
      return agirlikli([["salgin", 60], ["aclik", p.basamak >= 4 || p.yer === "kalan" ? 30 : 5], ["ciger", 10]])
    }
    const n = [
      ["ciger", p.yer === "kalan" ? 2 : 22 * (1 + (100 - p.ciger) / 40)],
      ["salgin", 18],
      ["kaza", 8 + (M.kaza || 0) * 1800],
      ["siddet", 5 + (M.siddet || 0) * 1500 + (p.bayrak.cark || p.cete ? 15 : 0) + (p.bayrak.kacakci ? 10 : 0) + (p.numara ? 12 : 0)],
      ["yosun", p.yosun * 0.9],
      ["aclik", (p.basamak >= 5 || p.lira + p.fis / 40 < 3 ? 10 : 2) * (p.bayrak.palto ? 0.5 : 1)],
      ["radyasyon", (p.bayrak.lagim ? 10 : 0) + (M.rad || 0) * 2000 + (p.yer === "kalan" ? 18 : 0)],
    ]
    if (p.hast.pas) n.push(["pas", 30])
    if (p.hast.lagim) n.push(["lagimates", 30])
    if (p.hast.sari) n[0][1] *= 1.6
    if (p.hapis > 0) n.push(["zindan", 25])
    if (p.bayrak.bicak) n[3][1] *= 0.8
    if (y >= 55) n.push(["yaslilik", (y - 50) * 3])
    if (p.yer === "hisar") {
      n[0][1] *= 0.3
      n.push(["yaslilik", 20])
    }
    return agirlikli(n)
  }

  // Her ölüm metni iki biçimde: defter için "sen", tutanak için "o"
  const OLUM_METNI = {
    salgin: (p) =>
      p.yas < 5
        ? sec([["Ateşin üç gün düşmedi. Dördüncü sabah uyanmadın.", "Ateşi üç gün düşmedi; dördüncü sabah uyanmadı."], ["Mahalleyi dolaşan salgın seni de aldı.", "Mahalleyi dolaşan salgında öldü."], ["Kışın başlayan öksürük ciğerine indi.", "Kışın başlayan öksürük ciğerine indi."]])
        : sec([["Mahalleye salgın geldi. Revirde sana yer yoktu.", "Salgında öldü; revirde ona yer bulunamadı."], ["Ateşli bir hastalık on gün sürdü. On birinci gün gelmedi.", "On gün süren ateşli bir hastalıktan öldü."], ["Kanlı ishal salgını. İlaç vardı ama karaborsadaydı ve paran yetmedi.", "Kanlı ishal salgınında öldü; ilaca parası yetmedi."]]),
    aclik: () => sec([["Kış uzun sürdü, ekmek yetmedi.", "Uzun bir kışta açlıktan öldü."], ["Açlık ve soğuk. Sabah seni kapının önünde buldular.", "Açlık ve soğuktan öldü; sabah kapının önünde bulundu."], ["Erzak kartın geçersiz sayıldı. O kışı çıkaramadın.", "Erzak kartı geçersiz sayıldıktan sonraki kış öldü."]]),
    ciger: (p) =>
      p.yer === "hisar"
        ? ["Ciğerlerin yıllar içinde yoruldu ve bir gece durdu.", "Yıllar içinde yorulan ciğerleri bir gece durdu."]
        : sec([["Asit pusu yıllarca ciğerini yedi. Son kışında nefes alamadın.", "Asit pusu yıllarca ciğerini yedi; son kışında nefes alamadı."], ["Öksürük önce sabahları geldi, sonra hiç gitmedi.", "Yıllarca süren öksürüğü sonunda onu aldı."], ["Ciğerin dayanmadı. Alt Şehir'de en çok insan bundan ölür.", "Ciğer hastalığından öldü. Alt Şehir'de en sık görülen ölüm."]]),
    kaza: (p) => {
      const m = p.meslek
      if (m === "hamal" || m === "tersane") return sec([["İskelede bir halat koptu ve yük üstüne düştü.", "İskelede kopan bir halatın düşürdüğü yükün altında kaldı."], ["Tersanede üstüne bir sac levha düştü.", "Tersanede üstüne düşen bir sac levhanın altında kaldı."]])
      if (m === "kaynakci" || m === "fabrika") return sec([["Fabrikada bir kazan patladı.", "Fabrikada patlayan bir kazanda öldü."], ["Makineye kolunu kaptırdın; kanı durduramadılar.", "Makineye kolunu kaptırdı; kanı durdurulamadı."]])
      if (m === "balikci") return ["Teknen Boğaz'ın zehirli suyunda alabora oldu.", "Teknesi Boğaz'da alabora oldu ve boğuldu."]
      if (m === "hurdaci") return ["Harabede üstüne bir duvar çöktü.", "Harabede üstüne çöken bir duvarın altında kaldı."]
      if (p.yer === "kalan") return sec([["Eski bir tünelin tavanı üstüne çöktü.", "Çöken bir tünelin altında kaldı."], ["Taşkın günü kanalın akıntısına kapıldın.", "Taşkın günü kanalın akıntısına kapılıp boğuldu."]])
      return sec([["Çürümüş bir merdiven ayağının altından çöktü.", "Çürümüş bir merdivenden düşerek öldü."], ["Asit yağmurunda kayıp düştün ve başını taşa çarptın.", "Asit yağmurunda kayıp düştü, başını taşa çarptı."]])
    },
    siddet: (p) => {
      if (p.numara) return sec([["Bir baskında kapının arkasında pompalı bir tüfek bekliyordu.", "Bir baskında, kapının arkasındaki pompalı tüfekle vuruldu."], ["Merdivendeki tele biri bastı ve bina üstünüze çöktü.", "Bir baskında merdivendeki bomba patladı; bina üstlerine çöktü."], ["Devriyedeyken bir çatıdan ateş açtılar.", "Devriye sırasında bir çatıdan açılan ateşle vuruldu."]])
      if (p.cete && p.cete !== "cark") return [`${CETE[p.cete].ad} ile rakipleri arasındaki bir çatışmada vuruldun.`, `${CETE[p.cete].ad} çetesinin bir çatışmasında vuruldu.`]
      if (p.bayrak.cark) return ["Çark'ın bir hesaplaşmasında bıçaklandın.", "Çark tarikatının bir hesaplaşmasında bıçaklandı."]
      if (p.bayrak.kacakci || p.meslek === "kacakci" || p.meslek === "yosuncu") return sec([["Gece Boğaz'a bir kaçak tekneyle açıldın. Sabah cesedin kıyıya vurdu.", "Gece bir kaçak teknede öldürüldü; cesedi sabah kıyıya vurdu."], ["Başka bir ağın adamları seni bir ara sokakta bekliyordu.", "Rakip bir kaçakçı ağının adamları onu bir ara sokakta öldürdü."]])
      if (p.yer === "kalan") return ["Nizam'ın lağıma yaptığı bir baskında vuruldun.", "Nizam'ın lağıma yaptığı bir baskında vuruldu."]
      return sec([["Bir barda kavga çıktı ve biri bıçak çekti.", "Bir bar kavgasında bıçaklandı."], ["Mahalleye baskın yapıldığında yanlış kapının önündeydin.", "Mahalleye yapılan bir baskında vuruldu."], ["Bir ara sokakta, birkaç lira için öldürüldün.", "Bir ara sokakta, birkaç lira için öldürüldü."]])
    },
    yosun: () => sec([["Kesik Yosun. Uyudun ve bir daha uyanmadın.", "Kesik Yosun'dan öldü; uyudu ve uyanmadı."], ["Yosun önce unutturdu, sonra uyuttu. En sonunda nefes almayı da unutturdu.", "Yıllarca kullandığı Yosun'dan öldü."], ["Sokakta zehirli bir parti dolaşıyordu; senin payına da düştü.", "Sokakta dolaşan zehirli bir Yosun partisinden öldü."]]),
    radyasyon: (p) => (p.yer === "kalan" ? ["Lağımın derinindeki ışık sonunda seni de aldı.", "Lağımın derinlerindeki radyasyondan öldü."] : sec([["Lağımda filtren bitti. Yukarı çıktın ama ciğerlerin aşağıda kaldı.", "Lağımda filtresi bitti; radyasyon ciğerlerini yaktı."], ["Lağımdan getirdiğin hastalık seni yavaş yavaş tüketti.", "Lağımdan kaptığı radyasyon hastalığından öldü."]])),
    yaslilik: (p) => sec([["Yaşlılıktan, uykunda öldün.", "Yaşlılıktan, uykusunda öldü."], [`Bir sabah kalkmadın. ${p.yas} yaşındaydın; Alt Şehir için uzun bir ömür.`, `Bir sabah kalkmadı. ${p.yas} yaşındaydı.`], ["Akşam yemeğinden sonra gözlerini kapattın ve açmadın.", "Akşam yemeğinden sonra uykusunda öldü."]]),
  }
  OLUM_METNI.pas = () => sec([["Pas humması üç hafta sürdü. Ateşin bir türlü düşmedi.", "Pas hummasından öldü; ateşi üç hafta düşmedi."], ["Elindeki küçük yara bütün kana yayıldı.", "Paslı bir demirin açtığı yaradan bulaşan hummadan öldü."]])
  OLUM_METNI.lagimates = () => sec([["Lağım ateşi seni bırakmadı.", "Lağım ateşinden öldü."], ["Lağım ateşinin onuncu gününde gözlerini kapattın.", "Lağım ateşinin onuncu gününde öldü."]])
  OLUM_METNI.zindan = () => sec([["Zindanın nemli hücresinde, bir kış gecesi öldün.", "Zindanda, bir kış gecesi hücresinde öldü."], ["Zindanda yayılan salgın seni de aldı.", "Zindanda yayılan bir salgında öldü."]])
  const OLUM_AD = {
    salgin: "Salgın / ateşli hastalık",
    aclik: "Açlık ve soğuk",
    ciger: "Ciğer hastalığı (asit pusu)",
    kaza: "İş kazası",
    siddet: "Şiddet / ateşli silah",
    yosun: "Yosun",
    radyasyon: "Radyasyon",
    yaslilik: "Yaşlılık",
    pas: "Pas humması",
    lagimates: "Lağım ateşi",
    zindan: "Zindanda öldü",
  }

  /* ── olaylar ───────────────────────────────────────────────
     Her olay: id, yas [min,max], w (ağırlık ya da fonksiyon), kosul, tek (bir kez), f(p) -> metin ya da [metin, tur] */
  const altSehir = (p) => ["A", "B", "C", "D", "gocmen"].includes(p.yer)
  const sefil = (p) => ["C", "D", "gocmen"].includes(p.yer)

  const OLAYLAR = [
    // bebeklik
    { id: "ilksoz", yas: [1, 2], w: 4, tek: true, f: (p) => sec([`İlk sözcüğün "ekmek" oldu.`, `İlk sözcüğün annenin adıydı: ${p.anne.ad}.`, "İlk sözcüğün \"hayır\" oldu. Ailen buna çok güldü.", p.kardesler.some((k) => k.yas >= 0 && k.sag) ? `İlk söylediğin ad ${p.kardesler.find((k) => k.yas >= 0 && k.sag).ad} oldu.` : "İlk sözcüğün \"su\" oldu."]) },
    { id: "atesgece", yas: [0, 5], w: 3, tek: true, kosul: (p) => p.anne.sag, f: (p) => { p.saglik -= 3; p.anne.yakinlik = kel(p.anne.yakinlik + 6, 0, 100); return `Bir gece ateşin çıktı. Annen ${p.anne.ad} sabaha kadar başında bekledi.` } },
    { id: "pazarsirt", yas: [1, 5], w: 3, tek: true, kosul: (p) => altSehir(p) || p.yer === "koy", f: () => "Annenin sırtında pazara gittin. Koloni Lirası'nın şıngırtısını ilk kez orada duydun." },
    { id: "babaomuz", yas: [2, 6], w: 3, tek: true, kosul: (p) => p.baba.sag && (altSehir(p) || p.yer === "koy"), f: (p) => { p.baba.yakinlik = kel(p.baba.yakinlik + 5, 0, 100); p.umut += 2; return `Baban ${p.baba.ad} seni omzuna alıp iskeleye götürdü. Boğaz'ı ilk kez o gün gördün.` } },
    { id: "eskibot", yas: [3, 8], w: 3, tek: true, kosul: (p) => p.basamak >= 4 && p.kardesler.some((k) => k.yas > p.yas && k.sag), f: (p) => `${p.kardesler.find((k) => k.yas > p.yas && k.sag).ad} için alınmış eski botları sen giydin. İki numara büyüktüler.` },
    { id: "kopek", yas: [3, 9], w: 2, tek: true, kosul: (p) => p.yer !== "hisar" && p.yer !== "kalan", f: (p) => { p.saglik -= 5; return ["Sokakta bir köpek bacağını ısırdı. Yara aylarca kapanmadı.", "kotu"] } },
    { id: "mazgaltas", yas: [4, 9], w: 2, tek: true, kosul: altSehir, f: () => "Mahallenin çocuklarıyla mazgallara taş attınız. Bir gün aşağıdan biri taşı geri fırlattı ve hepiniz kaçtınız." },
    { id: "naylon", yas: [0, 8], w: 2, tek: true, kosul: (p) => p.basamak >= 4 && altSehir(p), f: () => "Bir kış odanın camı kırıldı. Yerine naylon gerdiniz ve bütün kış rüzgârı dinlediniz." },
    { id: "seker", yas: [3, 8], w: 2, tek: true, kosul: altSehir, f: (p) => (p.anne.sag ? "Bir nefer sana yarım bir şeker uzattı. Annen elinden alıp yere attı." : "Bir nefer sana yarım bir şeker uzattı. Aldın ve hemen yedin.") },
    { id: "yengec", yas: [3, 9], w: 3, tek: true, kosul: (p) => p.yer === "koy", f: () => "Kıyıda yengeç topladın. Annen hepsini denize geri döktü; Boğaz'a yakın sulardan bir şey yenmez." },
    { id: "dedetekne", yas: [4, 9], w: 3, tek: true, kosul: (p) => p.yer === "koy", f: (p) => { p.umut += 3; return "Dedenin teknesiyle ilk kez açık denize çıktın. Sahil gözden kaybolunca hiç korkmadın." } },
    { id: "hisarkitap", yas: [4, 9], w: 3, tek: true, kosul: (p) => p.yer === "hisar", f: () => "Doğum gününde sana yeni kâğıda basılmış bir kitap verdiler. Alt Şehir'de böyle bir kitap gören çocuk yoktur." },
    { id: "bahcivan", yas: [4, 9], w: 3, tek: true, kosul: (p) => p.yer === "hisar", f: () => "Bahçede, Alt Şehir'den gelen bahçıvanın çocuğuyla oynadın. Ertesi hafta bahçıvan gelmedi; çocuğu da bir daha görmedin." },
    { id: "tercuman", yas: [5, 10], w: 4, tek: true, kosul: (p) => p.yer === "gocmen", f: () => "Ailen evde hâlâ kendi dilini konuşuyor. Pazarda onlara tercümanlık eden sendin." },
    { id: "saklan", yas: [2, 8], w: 3, tek: true, kosul: (p) => p.yer === "gocmen", f: () => ["Kapıya kayıt soran memurlar geldi. Annen seni yatağın altına sakladı ve nefes alma dedi.", "kotu"] },
    { id: "dedeanlat", yas: [4, 9], w: 2, tek: true, kosul: (p) => p.yer !== "kalan", f: () => "Komşunun dedesi Uzun Karanlık'tan önceki dünyayı anlattı. Kendisi de büyükbabasından dinlemiş." },
    { id: "ilkkis", yas: [0, 2], w: 3, tek: true, kosul: (p) => p.yer !== "hisar", f: (p) => { p.saglik -= 5; return "İlk kışını öksürerek geçirdin." } },
    { id: "salginatlat", yas: [1, 4], w: 2, tek: true, f: (p) => { p.saglik -= 8; return ["Mahalleyi bir salgın dolaştı. Sen atlattın; komşunun çocuğu atlatamadı.", "kotu"] } },
    { id: "corba", yas: [0, 6], w: 3, kosul: (p) => altSehir(p) && p.basamak >= 4, tek: true, f: (p) => { p.saglik += 4; p.bayrak.yardimbilir = true; return "Annen seni bir yardımlaşma evinin çorbasıyla büyüttü." } },
    { id: "hisardadi", yas: [0, 5], w: 5, kosul: (p) => p.yer === "hisar", tek: true, f: () => "Sana bir dadı baktı; Alt Şehir'den yukarı çıkmış bir kadın. Adını hiç sormadın." },
    { id: "lagimbebek", yas: [0, 5], w: 6, kosul: (p) => p.yer === "kalan", f: () => sec(["Annen seni ışıksız tünellerde, yosun yataklarının arasında büyüttü.", "İlk sözcüğün eski dünyadan kalma bir addı.", "Yukarıdan bir mazgal sesi geldiğinde susmayı öğrendin."]) },
    // çocukluk
    { id: "kutu", yas: [5, 11], w: 4, kosul: altSehir, f: () => sec(["Günlerin sokakta teneke kutu tekmeleyerek geçti. Seni biraz da sokak büyüttü.", "Avluda kadınlar leğen başında bağıra bağıra konuşurken sen aralarında koşturdun.", "Hangi aralıktan kaçılacağını, hangi köşede durulmayacağını öğrendin."]) },
    { id: "atresmi", yas: [6, 12], w: 3, kosul: (p) => p.okur, tek: true, f: (p) => { p.umut += 4; return "Eski bir ders kitabında at resmi gördün. Böyle bir hayvan artık hiçbir yerde yok." } },
    { id: "numarabak", yas: [5, 11], w: 3, kosul: (p) => !p.numara && p.yer !== "kalan", tek: true, f: () => "Yanından geçen bir neferin yakasındaki numaraya uzun uzun baktın. Yakasında adı yazmıyordu." },
    { id: "asitcocuk", yas: [4, 13], w: 3, kosul: (p) => p.yer !== "hisar" && p.yer !== "kalan", f: (p) => { p.saglik -= 4; p.ciger -= 3; return ["Asit yağmuruna yakalandın. Kolundaki yanık iz bıraktı.", "kotu"] } },
    { id: "kalancocuk", yas: [6, 13], w: 6, kosul: (p) => p.yer === "kalan", f: () => sec(["Yosun yataklarını sulamayı öğrendin.", "Yaşlılar sana Ana'nın hikâyesini anlattı. Onu kendi gözüyle gören kimse yokmuş.", "Bir mazgaldan yukarıyı izledin: maskesiz yüzler, asit pusu, numaralar."]) },
    { id: "koycocuk", yas: [5, 13], w: 5, kosul: (p) => p.yer === "koy", f: () => sec(["Babanın ağlarını onardın.", "Nizam'ın tahıl memurları geldi, ambarın yarısını götürdü.", "Marmara'da fırtına çıktı; üç tekne geri dönmedi."]) },
    { id: "hisarcocuk", yas: [6, 13], w: 5, kosul: (p) => p.yer === "hisar", f: (p) => sec([`Hisar okulunda Yüksek Konsey'in ve ${p.kanat || "Kılıçlar"} kanadının tarihini ezberledin.`, "Pencerenden Boğaz'dan geçip vergi ödeyen gemileri saydın.", "Bir ziyafette Konsey Reisi'nin elini öptün."]) },
    // gençlik ve yetişkinlik — Alt Şehir
    { id: "maasgunu", yas: [16, 70], w: 3, kosul: (p) => MESLEK[p.meslek || "yok"].kayitli && p.yer !== "hisar", f: (p) => sec(["Maaş günü bir deste Nizam fişi aldın. Pazarda kimse fiş istemedi.", "Fişin değeri yine düştü. Bir ekmek dün 30 fişti, bugün 45.", "Maaş fişlerini yastığının altında sakladın."]) },
    { id: "baskin", yas: [10, 80], w: 2, kosul: sefil, f: (p) => { p.umut -= 4; if (sans(0.15)) { p.saglik -= 15; return ["Nizam mahalleye baskın yaptı. Bir dipçik darbesi kaburganı kırdı.", "kotu"] } return "Gece mahalleye baskın yapıldı. Kapılar kırıldı, birkaç kişi götürüldü." } },
    { id: "kaza", yas: [14, 65], w: (p) => (MESLEK[p.meslek || "yok"].kaza || 0) * 250, kosul: (p) => p.meslek, f: (p) => { p.saglik -= rnd(10, 22); let m = isKazasi(p); if (!p.hast.pas && sans(0.2)) { p.hast.pas = true; m += " Yara iltihaplandı: pas humması." } return [m, "kotu"] } },
    { id: "pus", yas: [3, 90], w: 2, kosul: (p) => p.yer !== "kalan" && p.yer !== "hisar", f: (p) => { p.ciger -= 4; return "Asit pusu aylarca dağılmadı. Herkes öksürdü." } },
    { id: "yildiz", yas: [8, 90], w: 1, ara: 10, kosul: (p) => p.yer !== "kalan", f: (p) => { p.umut += 8; return ["Bir gece gökyüzü açıldı ve aylardır ilk kez yıldızları gördün. Soluk ve azdılar, ama oradaydılar.", "iyi"] } },
    { id: "kesikyosun", yas: [12, 90], w: 1.2, ara: 6, kosul: altSehir, f: () => "Mahallede kesik Yosun satıldı. Üç kişi uyudu ve bir daha uyanmadı." },
    { id: "carkbar", yas: [14, 70], w: 1.5, kosul: (p) => altSehir(p) && !p.bayrak.cark, f: () => "Çark'ın dazlakları barda bir üniformalıyı dövüp kapıdan attı. Kimse kımıldamadı." },
    { id: "lonca", yas: [16, 65], w: (p) => (["hamal", "tersane", "kaynakci"].includes(p.meslek) ? 3 : 0), f: (p) => { if (p.bayrak.lonca) { p.fis += 40; return "İskele loncası Nizam'la pazarlık etti; ücretler biraz arttı." } return "Lonca bu ay sana iş vermedi. Günlerce iskelede boş bekledin." } },
    { id: "gemi", yas: [10, 90], w: 1.5, ara: 3, kosul: (p) => p.yer !== "kalan", f: () => sec(["Kuzeyden bir kervan geçiş kapısında haftalarca bekletildi; vergi pazarlığı uzadı.", "Ege'den bir gemi geldi. Pazarda Koloni Lirası bollaştı.", "İskelede Trakya mühürlü sandıklar indirildi. Ne olduklarını kimse sormadı.", "Yan odaya Anadolu'dan bir göçmen aile taşındı; her sabah Gök Tengri'ye dua ediyorlar."]) },
    { id: "liradeger", yas: [16, 90], w: 1.2, kosul: (p) => p.lira > 20, f: (p) => { const k = Math.round(p.lira * 0.15); p.lira -= k; return "Koloni Lirası Ege'de değer kaybetti. Biriktirdiğinin bir kısmı eridi." } },
    { id: "yardimevi", yas: [10, 90], w: 1, kosul: (p) => altSehir(p) && p.saglik < 45, f: (p) => { p.saglik += 10; p.umut += 3; return ["Hastalandığında bir yardımlaşma evi sana baktı. Kimse ne inandığını sormadı.", "iyi"] } },
    { id: "revir", yas: [5, 90], w: 1, kosul: (p) => p.saglik < 40 && p.lira >= 15, f: (p) => { p.lira -= 15; p.saglik += 18; return ["Revirde bir hemşire yaralarını sardı. Antibiyotik için 15 lira ödedin.", "iyi"] } },
    { id: "yosunderin", yas: [14, 90], w: (p) => (p.yosun > 20 ? 4 : 0), f: (p) => { p.yosun += 8; p.lira -= Math.min(p.lira, 5); return "Yosun olmadan uyuyamıyorsun artık." } },
    { id: "yosunbirak", yas: [14, 90], w: (p) => (p.yosun > 20 && p.umut > 50 ? 2 : 0), f: (p) => { p.yosun -= 25; p.saglik -= 5; return ["Bir kış boyunca titreyerek Yosun'u bıraktın.", "iyi"] } },
    { id: "dovme", yas: [16, 60], w: 2, kosul: (p) => p.bayrak.cark, f: () => sec(["Kafana yeni bir çark dövmesi yapıldı.", "Çark'ın barında makinelerin duasını ezberledin.", "Tarikatın büyükleri sana eski dünyadan kalma bir motoru öptürdü."]) },
    { id: "kacakgece", yas: [16, 70], w: 2, kosul: (p) => p.bayrak.kacakci, f: (p) => { p.lira += rnd(8, 25); if (sans(0.15)) { p.sicil++; if (sans(0.5)) return ["Bir gece tekne yakalandı." + hapseAt(p, rnd(1, 3), "kaçakçılıktan"), "kotu"]; return ["Bir gece tekne yakalandı. Sen kaçtın; adın bir tutanağa geçti.", "kotu"] } return "Gece Boğaz'dan bir yük geçirdin. Kimse görmedi." } },
    // nefer
    { id: "talim", yas: [12, 16], w: 6, kosul: (p) => p.numara, f: () => sec(["Barakada zil her sabah beşte çaldı.", "Lehimli bir Kalaşnikof kırmasını gözün kapalı söküp takmayı öğrendin.", "Taburdaki en büyük çocuk sana bir bağcık verdi."]) },
    { id: "neferbaskin", yas: [16, 50], w: 4, kosul: (p) => p.numara && ["nefer", "cavus"].includes(p.meslek), f: (p) => { if (sans(0.2)) { p.saglik -= rnd(10, 25); return ["Bir depo baskınında merdiven boşluğunda saçma yedin. Zırhın dayandı, kaburgaların dayanmadı.", "kotu"] } return sec(["Taburla bir depo baskınına gittin.", "Bir insan kaçakçısının peşinde çatıları taradınız.", "Kontrol noktasında nöbet tuttun. Geçen herkesin üstü arandı; askerlerinki hariç."]) } },
    { id: "numaradevir", yas: [16, 55], w: 2, kosul: (p) => p.numara && ["nefer", "cavus"].includes(p.meslek), f: (p) => { p.umut -= 6; return ["Yanındaki nefer vuruldu. Bir hafta sonra numarasını yakasında başka bir çocuk taşıyordu. Boşta numara bırakmıyorlar.", "kotu"] } },
    { id: "istihkak", yas: [12, 30], w: 1.5, kosul: (p) => p.numara && p.anne.sag && p.anne.yakinlik > 30, tek: true, f: () => "Seni verdikleri için annene istihkak kartı verildi. Bir kez bile ziyarete gelmedi; belki gelemedi." },
    { id: "evhatira", yas: [20, 60], w: 1.2, kosul: (p) => p.numara, tek: true, f: () => "Revirde yatarken eve gitmek istedin. Hangi eve olduğunu hatırlayamadın." },
    // Hisar
    { id: "hisargenc", yas: [14, 80], w: 4, kosul: (p) => p.yer === "hisar", f: (p) => sec([`${p.kanat === "Kılıçlar" ? "Mühürler" : "Kılıçlar"} kanadından biri ziyafette ailene hakaret etti. Kimse unutmadı.`, "Yüksek Konsey bir tutanağı mühürledi; Alt Şehir'de bir sokak karantinaya alındı.", "Alt Şehir'e hiç inmedin. Buna hiç gerek olmadı.", "Bir subay ailesiyle bir tüccar ailesi evlendi; düğün üç gün sürdü.", "Pencerenden Alt Şehir'in ışıklarının yanışını izledin."]) },
    // köy
    { id: "koygenc", yas: [14, 80], w: 4, kosul: (p) => p.yer === "koy", f: (p) => { if (sans(0.25)) { p.fis = Math.max(0, p.fis - 30); return "Nizam'ın memurları tahıl payını yine artırdı." } return sec(["İyi bir balık yılı.", "Kıyıya şehirden kaçan biri vurdu; kimse ona bir şey sormadı.", "Marmara'da bir Nizam gemisi kıyıyı taradı."]) } },
    // Kalanlar
    { id: "kalangenc", yas: [14, 80], w: 5, kosul: (p) => p.yer === "kalan", f: (p) => { if (sans(0.2)) { p.saglik -= 8; return ["Yukarıdan maskeli adamlar indi. Silahları vardı; iki kişiyi götürdüler.", "kotu"] } return sec(["Yosun yataklarından iyi bir hasat.", "Ana'nın sesini duyduğunu söyleyen biri geldi. İnanan da oldu, gülen de.", "Bir kaçakçı mazgal ağzında Yosun'u lirayla takas etti.", "Bir Kalan öldü; adı yaşlılara ezberletildi. Burada ad unutulmaz."]) } },
    // aile
    { id: "torun", yas: [45, 90], w: 1.5, ara: 8, kosul: (p) => p.cocuklar.some((c) => c.sag && c.yas >= 20), f: (p) => { p.umut += 5; return ["Torununa Uzun Karanlık'tan önceki dünyayı anlattın; senin de hiç görmediğin bir dünyayı.", "iyi"] } },
    { id: "yasli", yas: [50, 99], w: 2, f: () => sec(["Dizlerin artık merdiveni sevmiyor.", "Mahallenin en yaşlılarından birisin artık.", "Sabahların öksürükle, akşamların sessizlikle geçiyor."]) },
  ]

  function isKazasi(p) {
    const m = p.meslek
    const t = {
      hamal: ["İskelede bir sandık kaydı; omzun bir daha eskisi gibi olmadı.", "Halat koptu, yük ayağının üstüne indi."],
      tersane: ["Tersanede bir zincir koptu, bacağın ezildi.", "İskeleden düşen bir sac levha sırtını yardı."],
      kaynakci: ["Kaynak alevi maskenin altından yüzünü yaktı.", "Gözüne bir kıvılcım kaçtı; o göz artık bulanık görüyor."],
      fabrika: ["Makineye bir parmağını kaptırdın.", "Kazan patladı; kolunun yarısı yandı."],
      balikci: ["Fırtınada tekne devrildi; zehirli suyu yuttun.", "Ağ eline dolandı, iki parmağın kırıldı."],
      hurdaci: ["Harabede bir döşeme çöktü; bacağın kırıldı.", "Paslı bir demir elini kesti ve yara mikrop kaptı."],
      kanal: ["Kanalda kayıp düştün; çamurlu su ciğerine kaçtı.", "Bir kanal kapağı elinin üstüne kapandı."],
      tamirci: ["Lehim ocağı devrildi; elin yandı."],
      kacakci: ["Gece teknesinde bir halat bileğini kesti."],
      toplayici: ["Yosun yatağının kenarındaki taş kaydı; bileğin kırıldı.", "Tünelde bir boru patladı, sıcak su bacağını haşladı."],
      kervanci: ["Bir yük arabası devrildi ve ayağını ezdi.", "Kervanın yükü kaydı; omzun çıktı."],
      coban: ["Sürüyü toplarken bir uçurumdan kaydın.", "Bir koç seni boynuzladı; kaburgan çatladı."],
      trakyaisci: ["Rıhtımda bir vinç halatı koptu; yük yanına düştü.", "Depoda bir raf devrildi ve kolunu ezdi."],
      gemici: ["Fırtınada bir halat elini yaktı.", "Direkten düştün; bacağın kırıldı."],
      irgat: ["Orak elini kesti.", "Donmuş tarlada düştün ve bileğin kırıldı."],
      dalgic: ["Batık bir evin kapısı arkandan kapandı; nefesin zor yetti.", "Paslı bir demir bacağını yardı."],
      dovuscu: ["Bir dövüşte gözünün üstü yarıldı ve iyi kapanmadı.", "Rakibin dizini kırdı."],
      hanhamal: ["Hanın merdiveninde bir sandık elinden kaydı; ayağın ezildi."],
    }[m] || ["Bir iş kazasında parmağını kaybettin.", "Çürümüş bir merdiven ayağının altında çöktü."]
    return sec(t)
  }

  const DOLGU = {
    bebek: ["Bir yıl daha büyüdün.", "Annenin kucağında bir yıl daha geçti.", "Evin içinde durmadan bir şeylerin peşinden koştun."],
    cocuk: ["Sıradan bir yıl geçti.", "Sokakta, kardeşlerinle ve kuru ekmekle geçen bir yıl.", "Bir kış daha geldi ve geçti."],
    genc: ["Bir yıl daha geçti.", "Günlerin işle uyku arasında geçti.", "Pek bir şey olmadı. Alt Şehir'de bu iyi bir şey sayılır."],
    yasli: ["Sessiz bir yıl geçti.", "Günler birbirine benzedi.", "Bir yıl daha geride kaldı."],
  }

  function olaySec(p) {
    const uygun = []
    for (const o of OLAYLAR) {
      if (p.yas < o.yas[0] || p.yas > o.yas[1]) continue
      if (o.tek && p.olaylar[o.id]) continue
      if (yurtDisi(p) && !(o.id.startsWith("bolge_") || HER_YERDE.includes(o.id))) continue
      if (o.kosul && !o.kosul(p)) continue
      const son = p.sonOlay[o.id]
      if (son !== undefined && p.yas - son < (o.ara || 4)) continue
      const kez = p.olaylar[o.id] || 0
      const w = (typeof o.w === "function" ? o.w(p) : o.w) / (1 + kez * 0.6)
      if (w > 0) uygun.push([o, w])
    }
    if (!uygun.length) return null
    return agirlikli(uygun)
  }

  /* ── seçimler (3-5 yılda bir) ─────────────────────────────── */
  const SECIMLER = [
    {
      id: "kacakci", yas: [17, 45], kosul: (p) => p.yer !== "hisar" && p.yer !== "kalan" && !p.bayrak.kacakci,
      metin: "Gece iskelede bir adam yanına yaklaştı. Kaçakçılardan biriydi: \"Bu gece Boğaz'dan yük geçireceğiz ve bir kişi eksiğiz. Koloni Lirası'yla öderiz.\"",
      secenek: [
        ["Kabul et", (p) => { p.bayrak.kacakci = true; p.lira += 30; if (sans(0.3)) { p.meslek = "kacakci"; p.onemli.push("Kaçakçı ağlarına katıldı."); return "Bir gece derken iki gece oldu, sonra daha fazlası. Artık sen de bir kaçakçısın." } p.onemli.push("Kaçakçılara bir gece el verdi."); return "Yük karşıya geçti. Cebinde ilk kez gerçek Koloni Lirası vardı." }],
        ["Reddet", (p) => { p.umut -= 2; return "Adam omuz silkip karanlıkta kayboldu." }],
      ],
    },
    {
      id: "cark", yas: [16, 35], kosul: (p) => ["B", "C", "D", "gocmen"].includes(p.yer) && !p.bayrak.cark && !p.cete && !p.numara,
      metin: "Çark'ın dazlakları seni barlarına çağırdı. Kazınmış kafalarında harfler, çarklar ve tekrar eden bir şekil vardı. \"Düzen kutsaldır, makine kutsaldır,\" dediler. \"Bizden olursan mahallede kimse sana dokunamaz.\"",
      secenek: [
        ["Katıl", (p) => { ceteKatil(p, "cark"); p.umut += 6; p.lira += 6; return "Kafanı kazıdılar ve ilk çark dövmesini tam tepene yaptılar." }],
        ["Reddet", (p) => { if (sans(0.4)) { p.saglik -= 12; return ["Bir gece seni sokakta sıkıştırıp reddetmenin bedelini ödettiler.", "kotu"] } return "Bir daha çağırmadılar." }],
      ],
    },
    {
      id: "yosun", yas: [16, 55], kosul: (p) => p.yosun === 0 && p.yer !== "kalan" && !p.olaylar["sec_yosun"],
      metin: "Kötü geçen bir yılın sonunda biri avucuna yeşil, kurutulmuş bir şey bıraktı: Yosun. \"Unutturur, uyutur,\" dedi. \"İlki benden.\"",
      secenek: [
        ["Dene", (p) => { p.yosun = 25; p.umut += 10; p.onemli.push("Yosun'la tanıştı."); return "Uyudun. Sefaletin çok uzakta kaldığı derin bir uykuydu." }],
        ["Geri ver", (p) => { p.umut -= 2; return "Avucunu kapattın, sonra açıp yere döktün." }],
      ],
    },
    {
      id: "karaborsa", yas: [16, 80], kosul: (p) => p.fis >= 400 && p.yer !== "hisar",
      metin: (p) => `Yastığının altında ${p.fis} Nizam fişi birikti ama pazarda kimse fiş istemiyor. Bir karaborsacı fişlerini liraya çevirmeyi teklif ediyor. Kur çok kötü, üstelik Heyet bu işi hoş karşılamıyor.`,
      secenek: [
        ["Liraya çevir", (p) => { const l = Math.round(p.fis / 55); p.lira += l; p.fis = 0; if (sans(0.15)) { p.sicil++; return [`${l} lira aldın. Bir hafta sonra adın bir tutanağa geçti.`, "kotu"] } return `Karşılığında ${l} Koloni Lirası aldın. Fişlerin yarısı gitti ama elindeki artık gerçek para.` }],
        ["Fiş kalsın", () => "Fişleri sakladın. Değerleri her ay biraz daha düşecek."],
      ],
    },
    {
      id: "ifade", yas: [18, 75], kosul: (p) => p.yer !== "kalan",
      metin: "Sokağında bir cinayet işlendi. İntizam Heyeti'nden bir memur kapına geldi: \"Bir Yeşil'in kaçtığını gördün, değil mi? Tutanağa öyle yazalım.\" Oysa sen hiçbir Yeşil görmedin.",
      secenek: [
        ["Heyet'in istediğini söyle", (p) => { p.lira += 10; p.umut -= 8; p.onemli.push("Bir tutanağa Heyet'in istediği ifadeyi verdi."); return "İfadeni imzaladın ve Heyet memnun kaldı. Bir hafta sonra lağıma baskın yapıldı, Yosun da pahalandı." }],
        ["Gördüğünü söyle", (p) => { p.sicil++; p.umut += 4; p.onemli.push("Bir tutanakta Heyet'e karşı gerçeği söyledi."); return "Memur söylediklerini yazmadı. Ama adını bir kenara not etti." }],
        ["Hiçbir şey görmedim", () => "Kapıyı kapattın. Tutanak sen olmadan da mühürlendi."],
      ],
    },
    {
      id: "lagim", yas: [16, 45], kosul: (p) => altSehir(p) && !p.numara,
      metin: "Bir kaçakçı lağıma inecek birini arıyor: \"Maskeni takıp ineceksin, Kalanlar'dan paketi alıp çıkacaksın. Filtre benden, 40 lira da senin.\" Lağımdaki radyasyon hâlâ öldürücü.",
      secenek: [
        ["İn", (p) => { p.bayrak.lagim = true; if (sans(filtreRiski(p))) { p.saglik -= 25; p.lira += 40; p.onemli.push("Lağıma indi; filtresi yolda bitti."); return ["Filtren yarı yolda bitti. Yukarı çıkmayı başardın ama ciğerlerin hasar gördü.", "kotu"] } p.lira += 40; p.onemli.push("Gaz maskesiyle lağıma inip Kalanlar'la alışveriş yaptı."); return "Aşağıda konuşan, adı olan insanlar gördün. Yukarıda bunu anlatsan kimse inanmaz." + yesilBulas(p) }],
        ["İnme", () => "Mazgal kapağına bir süre baktın, sonra yürüyüp gittin."],
      ],
    },
    {
      id: "yardim", yas: [14, 80], kosul: (p) => altSehir(p) && !p.bayrak.yardim,
      metin: "Mahalledeki yardımlaşma evi yetimlere çorba dağıtacak birini arıyor. Karşılığında para yok, üstelik Nizam bu evlere şüpheyle bakıyor.",
      secenek: [
        ["Git", (p) => { p.bayrak.yardim = true; p.umut += 10; if (sans(0.2)) p.sicil++; p.onemli.push("Bir yardımlaşma evinde çorba dağıttı."); if (!p.okur && sans(0.4)) { p.okur = true; p.onemli.push("Okumayı yardımlaşma evinde öğrendi."); return "Çorba dağıttın. Akşamları biri sana eski bir ders kitabından okumayı öğretti." } return "Artık akşamların çorba kazanının başında geçiyor. Yetimlerin hepsinin adını ezberledin." }],
        ["Vaktim yok", () => "Vaktin yoktu. Zaten kimsenin vakti yoktu."],
      ],
    },
    {
      id: "lonca", yas: [14, 35], kosul: (p) => ["hamal", "tersane", "kaynakci"].includes(p.meslek) && !p.bayrak.lonca,
      metin: "İskele loncası aidat istiyor. Aidatı ödeyen iş bulur, ödemeyen bekler. Lonca yarı sendika, yarı mafya gibi çalışıyor.",
      secenek: [
        ["Katıl, aidatı öde", (p) => { p.bayrak.lonca = true; p.fis = Math.max(0, p.fis - 60); return "Loncanın defterine adın yazıldı. Artık sabahları ilk sen çağrılıyorsun." }],
        ["Katılma", (p) => { p.fis = Math.max(0, p.fis - 40); return "Bir hafta boyunca sana iş çıkmadı, sonra bir hafta daha." }],
      ],
    },
    {
      id: "hizmet", yas: [15, 30], kosul: (p) => altSehir(p) && p.basamak >= 4 && !p.numara && p.meslek !== "hizmetci",
      metin: "Hisar'da bir aile hizmetçi arıyor. Yukarıda hava temiz, ekmek bol. Ama ailenin yanına ayda bir inebilirsin, belki o kadar bile değil.",
      secenek: [
        ["Yukarı çık", (p) => { p.meslek = "hizmetci"; p.yerEski = p.yer; p.yer = "A"; p.umut -= 4; p.onemli.push("Hisar'a hizmetçi olarak çıktı."); return "Hisar'daki eve arka merdivenden girdin. Ön kapıdan girmene hiç izin verilmedi." }],
        ["Kal", (p) => { p.umut += 2; return "Ailenin yanında kaldın. Tek odada üç kuşak yaşamaya devam ettiniz." }],
      ],
    },
    {
      id: "polis", yas: [17, 26], kosul: (p) => altSehir(p) && p.okur && !p.numara && !["polis", "memur"].includes(p.meslek) && p.sicil === 0,
      metin: "Sektör karakolu okuma yazma bilen, sicili temiz gençleri polis olarak alıyor. Siyah bir üniforma, fişle ödenen bir maaş ve mahallenin sana artık başka gözle bakması demek bu.",
      secenek: [
        ["Başvur", (p) => { p.meslek = "polis"; p.basamak = Math.min(p.basamak, 3); p.onemli.push("Siyah üniformayı giydi; polis oldu."); return "Karakolun eksi ikinci katında artık bir masan var. Tepende floresanlar vızıldıyor." }],
        ["Başvurma", () => "Başvurmadın. Mahallede herkes sana eskisi gibi bakmaya devam etti."],
      ],
    },
    {
      id: "cocukver", yas: [28, 60], kosul: (p) => p.cocuklar.some((c) => c.sag && c.yas >= 12 && c.yas <= 13 && !c.nefer) && p.lira + p.fis / 40 < 8,
      metin: (p) => { const c = p.cocuklar.find((c) => c.sag && c.yas >= 12 && c.yas <= 13 && !c.nefer); return `Borçlar boğazına kadar çıktı. Nizam'ın memuru kapıda: ${c.ad} on iki yaşına girdi. "Onu bize verirsen erzak kartın olur," diyor. "Bir daha aç kalmazsın."` },
      secenek: [
        ["Ver", (p) => { const c = p.cocuklar.find((c) => c.sag && c.yas >= 12 && c.yas <= 13 && !c.nefer); c.nefer = numaraUret(p.yer); p.fis += 300; p.umut -= 15; p.onemli.push(`Bir çocuğunu Nizam'a verdi: ${c.ad} artık ${c.nefer}.`); return [`${c.ad} gitti. Bir ay sonra yakasında ${c.nefer} yazan bir çocuk gördün. O muydu, emin olamadın.`, "kotu"] }],
        ["Verme", (p) => { p.saglik -= 8; p.umut += 3; return "Kapıyı kapattın. O kış herkes biraz daha az yedi." }],
      ],
    },
    {
      id: "goc", yas: [16, 35], kosul: (p) => p.yer === "koy" && !p.olaylar["sec_goc"],
      metin: "Köyde iş kalmadı, Nizam'ın aldığı pay da her yıl artıyor. Herkes Alt Şehir'i konuşuyor: tersane, fabrika, iskele. Havası kötü ama orada para var.",
      secenek: [
        ["Şehre in", (p) => { p.yer = sec(["C", "D"]); p.meslek = sec(["hamal", "tersane", "fabrika"]); p.onemli.push(`Köyden ${YERLER[p.yer].ad}'ne göçtü.`); return `${YERLER[p.yer].uzun} bir oda buldun. İlk sabah öksürerek uyandın.` }],
        ["Köyde kal", () => "Ağları onarmaya devam ettin."],
      ],
    },
    // nefer seçimleri
    {
      id: "kapi", yas: [16, 45], kosul: (p) => p.numara && p.meslek === "nefer",
      metin: "Yeni komutan seni öne çağırdı: \"Kapıyı ilk sen kıracaksın.\" Merdivende ışıkta neredeyse görünmeyen bir misina teli olup olmadığını bilmiyorsun.",
      secenek: [
        ["Kapıyı kır", (p) => { if (sans(0.25)) { p.saglik -= 30; p.onemli.push("Bir baskında kapıyı ilk o kırdı ve saçma yedi."); return ["Kapının arkasında pompalı bir tüfek bekliyordu. Zırhın seni ancak kurtardı.", "kotu"] } p.umut += 3; return "Oda boştu. Perdeler uçuşuyordu." }],
        ["Teli ara, yavaş git", (p) => { p.sicil++; return "Teli buldun ve kimse ölmedi. Ama komutan yavaşlığını tutanağa geçirdi." }],
      ],
    },
    {
      id: "arama", yas: [18, 50], kosul: (p) => p.numara && ["nefer", "cavus"].includes(p.meslek) && !p.bayrak.arama,
      metin: "Kontrol noktasında çavuş sana bir kâğıt uzatıyor: \"Arama yok\" imzası. \"Bizim devriye her gece aranmadan geçer, sen de payını alırsın.\" Askerlerin üstü aranmadığı için Yosun yukarıya bu yoldan çıkıyor.",
      secenek: [
        ["Payını al", (p) => { p.bayrak.arama = true; p.lira += 40; p.onemli.push("Kontrol noktasında \"arama yok\" düzeninden pay aldı."); return "Artık her ay cebine lira giriyor. Ne taşıdığınızı hiç sormuyorsun." }],
        ["İmzalama", (p) => { p.bayrak.arama = true; p.sicil++; p.umut += 3; return "Çavuş kâğıdı katladı. Ertesi hafta nöbet yerin değişti." }],
      ],
    },
    // Hisar seçimleri
    {
      id: "hisartutanak", yas: [20, 70], kosul: (p) => p.yer === "hisar",
      metin: "Önüne Alt Şehir'den bir tutanak geldi: bir sokak karantinaya alınacak, enkazın altındakiler çıkarılmayacak, yerlerine boş mezar taşı dikilecek. \"Daha ucuza gelir ve tutanakta aynı şey yazar.\"",
      secenek: [
        ["Mühürle", (p) => { p.lira += 30; p.onemli.push("Bir karantina tutanağını mühürledi."); return "Mührü bastın ve akşam yemeğine yetiştin." }],
        ["Enkazın kaldırılmasını iste", (p) => { p.sicil++; p.umut += 6; p.onemli.push("Bir karantina tutanağına itiraz etti."); return "Talebin Yüksek Konsey'de okunmadan rafa kaldırıldı. Kanadın seni bir süre ziyafetlere çağırmadı." }],
      ],
    },
    {
      id: "hisarevlilik", yas: [18, 30], kosul: (p) => p.yer === "hisar" && !p.evli,
      metin: (p) => `Ailen seni ${p.kanat === "Kılıçlar" ? "Mühürler" : "Kılıçlar"} kanadından biriyle evlendirmek istiyor. İki kanadı yakınlaştıracak bir evlilik.`,
      secenek: [
        ["Kabul et", (p) => { evlen(p); p.lira += 80; p.onemli.push(`Kanatlar arası bir evlilik yaptı: ${p.es.ad}.`); return `${p.es.ad} ile evlendin. Düğün üç gün sürdü.` }],
        ["Reddet", (p) => { p.umut += 4; p.lira -= Math.min(p.lira, 40); return "Ailen bir yıl seninle konuşmadı." }],
      ],
    },
    // Kalan seçimleri
    {
      id: "yukari", yas: [16, 55], kosul: (p) => p.yer === "kalan",
      metin: "Yaşlılar seni seçti: Yosun'u mazgal ağzına götürüp yukarıdakilerle takas edeceksin. Kalanlar için Yosun sadece para; yukarıyla alışveriş etmenin tek yolu.",
      secenek: [
        ["Git", (p) => { p.lira += 15; p.bayrak.yukari = true; if (sans(0.2)) { p.saglik -= 15; return ["Mazgal ağzında bir nefer seni gördü ve \"Yeşil!\" diye bağırdı. Kurşun omzunu sıyırdı.", "kotu"] } p.onemli.push("Yosun'u yukarıya taşıyan Kalanlar'dan biri oldu."); return "Yukarıdaki adam maskesinin arkasından sana baktı, parayı uzattı ve sana dokunmamaya özen gösterdi." }],
        ["Başkası gitsin", () => "Aşağıda, yosun yataklarının başında kaldın."],
      ],
    },
    {
      id: "maskeli", yas: [16, 70], kosul: (p) => p.yer === "kalan",
      metin: "Tünellerde yukarıdan inmiş yaralı bir adam buldun. Maskesinin filtresi bitmek üzere. Kalanlar'a göre yukarıdan inen herkes düşmandır.",
      secenek: [
        ["Çıkışa götür", (p) => { p.umut += 8; p.onemli.push("Lağımda yaralı bir adamı çıkışa götürdü."); return "Onu mazgala kadar götürdün. Adını sordu, sen de söyledin. Yukarıdan biri ilk kez adını öğrendi." }],
        ["Bırak", (p) => { p.umut -= 4; return "Arkanı dönüp gittin. Maskesinden gelen hırıltı uzun süre kulağından gitmedi." }],
      ],
    },
    {
      id: "ana", yas: [30, 80], kosul: (p) => p.yer === "kalan" && !p.bayrak.ana,
      metin: "Derinlerden bir haber geldi: Ana seni görmek istiyormuş. Onu şimdiye kadar gören olmadı. Aşağı indikçe tünellerdeki ışık artıyor.",
      secenek: [
        ["Derine in", (p) => { p.bayrak.ana = true; p.saglik -= 12; p.umut += 15; p.onemli.push("Ana'nın çağrısına uyup lağımın derinine indi."); return "Ne gördüğünü kimseye anlatmadın. Döndüğünde saçların ağarmıştı." }],
        ["Gitme", (p) => { p.bayrak.ana = true; return "Çağrı bir daha gelmedi." }],
      ],
    },
  ]

  function secimSec(p) {
    const uygun = SECIMLER.filter(
      (s) => p.yas >= s.yas[0] && p.yas <= s.yas[1] && !p.olaylar["sec_" + s.id] && (yurtDisi(p) ? s.bolge === p.yer : !s.bolge) && (!s.kosul || s.kosul(p))
    )
    if (!uygun.length) return null
    return sec(uygun)
  }

  function secimiGoster(p, s) {
    return {
      id: s.id,
      metin: typeof s.metin === "function" ? s.metin(p) : s.metin,
      secenekler: s.secenek.map((o) => o[0]),
    }
  }

  function secimYap(p, id, i) {
    if (id === "__okul" || id === "__is") return ozelSecimYap(p, id, i)
    const s = SECIMLER.find((x) => x.id === id) || ZINDAN_SECIM.find((x) => x.id === id)
    p.olaylar["sec_" + id] = (p.olaylar["sec_" + id] || 0) + 1
    const r = s.secenek[i][1](p)
    const [metin, tur] = Array.isArray(r) ? r : [r, "secim"]
    p.lira = Math.max(0, Math.round(p.lira))
    p.fis = Math.max(0, Math.round(p.fis))
    kelle(p)
    return { metin: "» " + s.secenek[i][0] + ". " + metin, tur }
  }

  /* ── aile ────────────────────────────────────────────────── */
  function evlen(p) {
    p.evli = true
    const ec = p.cins === "e" ? "k" : "e"
    p.es = kisiYap(p, "es", ec, Math.max(16, p.yas + rnd(-4, 5)))
    p.es.yakinlik = rnd(60, 90)
    p.es.inanc = p.yer === "kalan" ? "Ana'ya bağlı" : sans(0.7) ? p.inanc : sec(["Tengrici", "Hristiyan", "inançsız"])
    if (p.es.yas >= 14) p.es.meslek = akrabaMeslek(p, p.es)
  }

  function numaraUret(yer) {
    const harf = yer === "hisar" || yer === "koy" ? sec(["A", "B", "C", "D"]) : ["A", "B", "C", "D"].includes(yer) ? (sans(0.7) ? yer : sec(["A", "B", "C", "D"])) : sec(["C", "D"])
    return harf + "-" + pad(rnd(1, 40)) + pad(rnd(1, 62))
  }

  function aile(p, satir) {
    const carpan = YERLER[p.yer].olum
    // anne baba
    for (const e of [p.anne, p.baba]) {
      if (!e.sag) continue
      e.yas++
      if (sans(temelOlum(e.yas) * YERLER[p.dogumYeri].olum * 1.1)) {
        akrabaOldu(p, e, satir)
        if (p.yas < 12 && !p.anne.sag && !p.baba.sag) {
          p.yetim = true
          p.onemli.push(`${p.yas} yaşında yetim kaldı.`)
        }
      }
    }
    // kardeşler kendi hayatlarını yaşar
    for (const k of p.kardesler) {
      if (!k.sag) continue
      k.yas++
      if (k.yas === 0) {
        if (!p.anne.sag || p.anne.yas > 46) {
          k.sag = false
          k.dogmadi = true
          continue
        }
        satir(`Bir kardeşin doğdu: ${k.ad}.`, "iyi")
        continue
      }
      if (k.yas < 0) continue
      if (sans(temelOlum(k.yas - 1) * carpan * (k.numara ? 1.3 : 1))) {
        akrabaOldu(p, k, satir)
        continue
      }
      if (k.yas === 12 && !k.numara && (p.yetim || p.borc) && sans(0.5) && p.yer !== "hisar" && p.yer !== "kalan") {
        k.numara = numaraUret(p.yer)
        k.meslek = "nefer"
        satir(`${akrabaAd(p, k)} ${k.ad} on iki yaşında Nizam'a alındı. Artık yakasında ${k.numara} yazıyor.`, "kotu")
      }
      if (k.yas === 14 && !k.meslek) k.meslek = akrabaMeslek(p, k)
      if (!k.evli && k.yas >= 16 && k.yas <= 32 && sans(0.12)) {
        k.evli = true
        if (k.yakinlik >= 40) satir(`${akrabaAd(p, k)} ${k.ad} evlendi.`)
      }
    }
    // evlilik (oyuncu "Eş ara" ile de arayabilir)
    if (!p.evli && p.yas >= 16 && p.yas <= 34 && (p.yer !== "hisar" || p.yas >= 24)) {
      if (sans(p.yas <= 20 ? 0.12 : 0.07)) {
        evlen(p)
        satir(`${p.es.ad} ile evlendin.${p.yer === "kalan" ? "" : p.numara ? " Barakada, şahitsiz bir nikâhla." : " Tek odaya bir kişi daha sığdırdınız."}`, "iyi")
        p.onemli.push(`${p.yas} yaşında ${p.es.ad} ile evlendi.`)
      }
    }
    // eş
    if (p.es && p.es.sag) {
      p.es.yas++
      if (p.es.yas > 20 && sans(temelOlum(p.es.yas) * carpan)) akrabaOldu(p, p.es, satir)
    }
    // çocuklar
    if (p.evli && p.es && p.es.sag && p.yas >= 17 && p.yas <= (p.cins === "k" ? 42 : 50)) {
      if (sans(p.yer === "hisar" ? 0.08 : 0.16)) cocukDogdu(p, satir)
    }
    for (const c of p.cocuklar) {
      if (!c.sag) continue
      c.yas++
      if (sans(temelOlum(c.yas - 1) * carpan * (c.nefer ? 1.4 : 1))) {
        akrabaOldu(p, c, satir)
        continue
      }
      if (c.yas === 14 && !c.meslek && !c.nefer) c.meslek = akrabaMeslek(p, c)
      if (!c.evli && c.yas >= 16 && c.yas <= 32 && sans(0.12)) {
        c.evli = true
        satir(`${akrabaAd(p, c)} ${c.ad} evlendi.`, "iyi")
      }
    }
    // yakınlık zamanla azalır; küçük çocuk anne babasından uzaklaşmaz
    for (const k of aileTum(p)) {
      if (!k.sag || k.yas < 0) continue
      // aynı çatı altında yaşayanlar uzaklaşmaz
      if ((k.rol === "anne" || k.rol === "baba") && p.yas < 16) continue
      if (k.rol === "kardes" && p.yas < 16 && k.yas < 18) continue
      if (k.rol === "cocuk" && k.yas < 16) continue
      if (k.rol === "es" && sans(0.5)) continue
      k.yakinlik = kel(k.yakinlik - rnd(0, 2), 0, 100)
    }
  }

  function cocukDogdu(p, satir) {
    const c = kisiYap(p, "cocuk", sans(0.5) ? "e" : "k", 0)
    c.yakinlik = rnd(70, 95)
    c.dogum = p.yil
    p.cocuklar.push(c)
    p.umut += 6
    satir(`Bir çocuğun oldu: ${c.ad}.`, "iyi")
    return c
  }

  // akraba öldü: satır, umut, miras
  function akrabaOldu(p, k, satir) {
    k.sag = false
    k.olumYas = k.yas
    k.olumYil = p.yil
    const yakin = k.yakinlik / 100
    const num = k.nefer || k.numara
    const kim = num ? `${k.ad} (${num})` : k.ad
    let neden
    if (k.rol === "anne" || k.rol === "baba") neden = k.yas >= 60 ? sec(["yaşlılıktan", "ciğerinden", "bir kış gecesi"]) : sec(["bir salgında", "ciğerinden", "bir iş kazasında"])
    else if (k.yas < 5) neden = sec(["ateşten", "bir kış sabahı", "salgında"])
    else if (num) neden = "bir baskında"
    else if (k.yas < 14) neden = sec(["bir salgında", "ateşten", "bir kazada"])
    else neden = sec(["bir salgında", "bir kazada", "ciğerinden", "bir kavgada"])
    k.olumNeden = neden
    satir(`${akrabaAd(p, k)} ${kim} ${neden} öldü. ${k.yas} yaşındaydı.`, "kotu")
    p.umut -= Math.round(4 + yakin * (k.rol === "es" || k.rol === "cocuk" ? 18 : 10))
    if (k.rol === "es") p.onemli.push(`Eşi ${k.ad} öldü.`)
    if (k.rol === "cocuk" && k.yas >= 5) p.onemli.push(`Çocuğu ${k.ad} ${k.yas} yaşında öldü.`)
    if (k.rol === "kardes" && k.yas >= 5 && k.yakinlik >= 60) p.onemli.push(`Çok sevdiği kardeşi ${k.ad} ${k.yas} yaşında öldü.`)
    // miras: anne baba ölünce
    if ((k.rol === "anne" || k.rol === "baba") && p.yas >= 14) {
      const taban = p.yer === "hisar" ? (p.basamak === 1 ? 400 : 120) : p.basamak <= 3 ? 25 : p.basamak === 4 ? 10 : 2
      const pay = Math.round((taban * (0.5 + yakin)) / (1 + p.kardesler.filter((x) => x.sag && x.yas >= 0).length))
      if (pay >= 2) {
        p.lira += pay
        satir(`Mirastan payına ${pay} Koloni Lirası düştü.`)
      }
    }
  }

  function kelle(p) {
    p.saglik = kel(p.saglik, 1, 100)
    p.ciger = kel(p.ciger, 1, 100)
    p.umut = kel(p.umut, 0, 100)
    p.yosun = kel(p.yosun, 0, 100)
  }

  /* ── dönüm noktaları ─────────────────────────────────────── */
  function donum(p, satir) {
    const altsehirli = ["A", "B", "C", "D", "gocmen"].includes(p.yer)
    // okul 6-11
    if (p.yas === 7 && p.yer !== "kalan") {
      // okulun yürüme mesafesinde olup olmadığı yere bağlı; varsa gidip gitmemek senin kararın
      const ihtimal = { hisar: 1, A: 0.9, B: 0.75, C: 0.65, D: 0.45, koy: 0.5, gocmen: 0.35 }[p.yer]
      if (p.yer === "hisar") {
        p.okulda = true
        satir("Hisar okuluna başladın. Kitaplar yeni değildi ama tamdı.", "iyi")
      } else if (sans(ihtimal)) p.bekleyenOzel = "__okul"
      else satir(sec(["Mahallede okul yoktu; sokak vardı.", "En yakın okul üç sektör ötedeydi. Kimse seni oraya götürmedi."]))
    }
    if (p.okulda && p.yas === 9 && !p.okur) {
      p.okur = true
      satir("Okumayı söktün. Eski ders kitabındaki harfler artık sana bir şey anlatıyor.", "iyi")
    }
    if (p.okulda && p.yas === 16 && p.bayrak.ileriOkul) {
      p.okulda = false
      p.bayrak.ileriOkulBitti = true
      satir("Okulu bitirdin. Alt Şehir'de okulu bitiren çok az kişi var; artık memurluğun kapısı sana açık.", "donum")
      p.onemli.push("16 yaşında okulu bitirdi.")
      if (!p.meslek) p.bekleyenOzel = "__is"
    }
    // 12 yaş: Nizam yetimi ya da borçlu ailenin çocuğunu alır
    if (p.yas === 12 && (altsehirli || p.yer === "koy")) {
      let alinir = false
      if (p.yetim) alinir = sans(0.85)
      else if (p.borc) alinir = sans(0.6)
      else if (p.basamak >= 5) alinir = sans(0.08)
      if (alinir) {
        p.numara = numaraUret(p.yer)
        p.oluNumara = sans(0.2)
        p.meslek = "nefer"
        p.basamak = 3
        const neden = p.yetim ? "Yetim kalmıştın." : "Ailen borcunu ödeyemedi."
        satir(`${neden} Nizam seni on iki yaşında aldı. Adını geride bıraktın; artık yakanda ${p.numara} yazıyor.${p.oluNumara ? " Bu numara daha önce ölmüş bir başkasına aitti." : ""}`, "donum")
        p.onemli.push(`12 yaşında Nizam'a alındı; ${p.ad} adını bırakıp ${p.numara} oldu.${p.oluNumara ? " Numara daha önce ölü bir neferindi." : ""}`)
      }
    }
    // 14: iş
    if (p.yas === 14 && p.okulda && !p.bayrak.ileriOkul) p.okulda = false
    if (p.yas === 14 && !p.meslek && p.yer !== "kalan" && !(p.yer === "hisar" && p.basamak === 1)) {
      p.bekleyenOzel = "__is"
    } else if (p.yas === 14 && !p.meslek) {
      p.meslek = meslekSec(p)
      if (p.meslek === "fabrika") p.urun = sec(FABRIKA_URUN)
      const M = MESLEK[p.meslek]
      let s
      if (p.meslek === "soylu") s = `Ailen seni işlerine ortak etti. Artık ${p.kanat} kanadının mirasçılarından birisin.`
      else if (p.meslek === "subay" || p.meslek === "memur") s = `Hisar'da ${M.ad} olman için yetiştirilmeye başladın.`
      else if (p.meslek === "toplayici") s = "Yosun yataklarında çalışmaya başladın."
      else if (p.meslek === "fabrika") s = `Çalışmaya başladın: ${p.urun} üreten bir fabrikada ${M.ad}.`
      else if (p.meslek === "dilenci") s = "İş bulamadın. Pazarın köşesinde avuç açmaya başladın."
      else s = `Çalışmaya başladın: ${M.ad}.`
      satir(s, "donum")
      p.onemli.push(`${p.yas} yaşında ${M.ad} oldu.`)
    }
    // nefer kariyeri
    if (p.numara && p.meslek === "nefer" && p.yas >= 30 && sans(0.07)) {
      p.meslek = "cavus"
      satir("Çavuş oldun. Yakandaki numara aynı kaldı, apoletlerin yenilendi.", "donum")
      p.onemli.push(`${p.yas} yaşında çavuş oldu.`)
    }
    if (p.numara && p.meslek === "cavus" && p.yas >= 42 && sans(0.025)) {
      p.meslek = "konsey"
      p.basamak = 2
      satir("Konsey'e çağrıldın. Basamak basamak yükselen tribünlerde artık senin de bir yerin var. Bir daha Alt Şehir'in çamuruna basmayacaksın.", "donum")
      p.onemli.push(`${p.yas} yaşında Konsey'e girdi.`)
    }
    if (p.numara && ["nefer", "cavus"].includes(p.meslek) && p.yas >= 22 && p.sicil >= 1 && sans(0.02) && !p.bayrak.intizam) {
      p.bayrak.intizam = true
      p.meslek = "intizamci"
      satir("Konsey'den mühürlü bir kâğıt: \"Bundan böyle İntizam Heyeti adına serbest görevlisin. Taburun yok, amirin yok, kışlan yok.\" Bu bir terfi değildi.", "donum")
      p.onemli.push(`${p.yas} yaşında intizamcı yapıldı: taburu, amiri, kışlası olmayan bir serbest görevli.`)
    }
    // yaşlı nefer: kontrol noktasına
    if (p.numara && p.meslek === "nefer" && p.yas === 46) {
      satir("Taburdan alınıp bir kontrol noktasının nöbet kulübesine verildin.", "donum")
    }
    // meslek değişimi: yaşlanınca ağır işten çık
    if (p.yas === 55 && ["hamal", "tersane", "kaynakci", "kanal"].includes(p.meslek)) {
      p.meslek = sec(["seyyar", "eskici", "yok"])
      satir(p.meslek === "yok" ? "Bedenin artık ağır işi kaldırmıyor. Geçimini çocukların sağlıyor." : `Ağır işi bıraktın ve ${MESLEK[p.meslek].ad} olarak çalışmaya başladın.`)
    }
  }

  /* ── bir yıl ─────────────────────────────────────────────── */
  function yil(p) {
    if (p.olu) return { satirlar: [], secim: null, olu: true }
    const yasBas = p.yas
    p.yas++
    p.yil++
    p.buYil = { etk: {}, basvuru: 0 }
    if (p.hapis > 0) return zindanYili(p, yasBas)
    const satirlar = []
    const satir = (metin, tur) => satirlar.push({ metin, tur: tur || "" })

    yaslan(p)
    hastalikYil(p, satir)
    donum(p, satir)
    aile(p, satir)
    yillikGecim(p, satir)
    yakalanmaKontrol(p, satir)
    yatirimKontrol(p, satir)
    tefeciKontrol(p, satir)
    if (p.harac && !p.cete && !yurtDisi(p)) p.lira = Math.max(0, p.lira - 8)
    if (p.yer === "hisar" && p.nufuz > 25) p.nufuz -= 1
    if (p.bayrak.dukkan && !yurtDisi(p)) { p.lira += 35; if (sans(0.15)) satir("Köprü pazarındaki dükkânın iyi bir yıl geçirdi.", "iyi") }
    if (p.yolculuk && p.yolculuk.sozlesme === p.yil) satir("Trakya'daki sözleşmen bitti. Artık istersen Boğaz'a dönebilirsin.", "donum")

    // olaylar: 1, bazen 2
    const n = sans(0.3) ? 2 : 1
    for (let i = 0; i < n; i++) {
      const o = olaySec(p)
      if (!o) break
      p.olaylar[o.id] = (p.olaylar[o.id] || 0) + 1
      p.sonOlay[o.id] = p.yas
      const r = o.f(p)
      const [metin, tur] = Array.isArray(r) ? r : [r, ""]
      satir(metin, tur)
    }
    if (!satirlar.length) {
      const grup = p.yas < 5 ? "bebek" : p.yas < 14 ? "cocuk" : p.yas < 55 ? "genc" : "yasli"
      satir(sec(DOLGU[grup]), "sessiz")
    }
    p.lira = Math.max(0, Math.round(p.lira))
    p.fis = Math.max(0, Math.round(p.fis))
    kelle(p)

    // ölüm
    if (sans(olumOlasiligi(p, yasBas))) {
      oldur(p)
      satir(p.olumMetni, "olum")
      return { satirlar, secim: null, olu: true }
    }

    // seçim: okul ve iş kararları önce gelir
    let secim = null
    if (p.bekleyenOzel) {
      secim = ozelSecim(p, p.bekleyenOzel)
      p.bekleyenOzel = null
      if (secim) return { satirlar, secim, olu: false }
    }
    if (p.yas >= p.sonrakiSecim) {
      const s = secimSec(p)
      if (s) {
        secim = secimiGoster(p, s)
        p.sonrakiSecim = p.yas + rnd(3, 5)
      } else p.sonrakiSecim = p.yas + 1
    }
    return { satirlar, secim, olu: false }
  }

  function oldur(p) {
    p.olu = true
    p.olumNedeni = olumNedeni(p)
    const [olumSen, olumO] = OLUM_METNI[p.olumNedeni](p)
    p.olumMetni = olumSen
    p.olumMetniO = olumO
    // mezar
    if (yurtDisi(p)) p.mezar = { anadolu: "Bozkırda, üstüne taş yığılmış bir mezarda.", trakya: "Trakya'da, yabancılara ayrılmış bir mezarlıkta.", ege: "Ege'de, denize bakan bir liman mezarlığında.", kuzey: "Kuzeyin donmuş toprağında, köy kilisesinin arkasında." }[p.yer]
    else if (p.yer === "kalan") p.mezar = "Kayıt yok. Adı Kalanlar'ın yaşlılarına ezberletildi."
    else if (p.numara && p.olumNedeni === "siddet" && ["nefer", "cavus"].includes(p.meslek)) p.mezar = sans(0.7) ? "Yamaçtaki yeni sırada, numaralı bir taş. Altı boş." : "Numaralı bir taş. Altında beden var."
    else if (p.yer === "hisar") p.mezar = "Hisar'da, ailesinin kabrinde."
    else if (p.basamak >= 5 || p.yer === "gocmen") p.mezar = "Kayıtsızların toplu mezarı. Taş yok."
    else if (p.numara) p.mezar = "Yamaçta, Boğaz'a bakan numaralı bir taş."
    else if (p.yer === "koy") p.mezar = "Köyün mezarlığında, denize bakan bir taş."
    else p.mezar = sec(["Yamaçtaki mezarlıkta, adı kazınmış bir taş. Manzarası Boğaz.", "Mahallenin mezarlığında, tahta bir işaret."])
  }

  /* ── tutanak ve kıyas ────────────────────────────────────── */
  function basamakAd(p) {
    if (p.basamak === 0) return "Sınıf dışı"
    if (p.basamak === 4 && p.yer === "koy") return "Köy halkı"
    return BASAMAK_AD[p.basamak]
  }

  function sicilAd(s) {
    return s === 0 ? "Temiz" : s === 1 ? "Lekeli" : s <= 3 ? "Kirli" : "Kara"
  }

  function heyetNotu(p) {
    if (p.yer === "kalan") return ""
    if (yurtDisi(p)) return "Şahıs Boğaz dışında ölmüştür. Ölümü bir yolcunun getirdiği haberle kayda geçmiştir."
    if (p.numara && ["nefer", "cavus"].includes(p.meslek)) return `Numara ${p.numara} boşta bırakılmamıştır; yeniden dağıtılmak üzere ikmal listesine işlenmiştir. İntizam meselesi.`
    if (p.meslek === "konsey") return "Konsey'deki koltuğu boşalmıştır. Halef Reis tarafından belirlenecektir."
    if (p.meslek === "intizamci") return "Serbest görevlinin dosyaları karakolun eksi ikisindeki masada kapatılmıştır. Masa boştur."
    if ((p.sucSay || 0) >= 6) return "Şahsın adı çok sayıda suç dosyasında geçmektedir. Dosyalar ölümüyle kapatılmıştır."
    if (p.sicil >= 4) return "Sicili kara olan şahsın ölümü İntizam Heyeti'nce memnuniyetle kayda geçmiştir."
    if (p.sicil >= 1) return "Şahsın sicilindeki kayıtlar kapatılmıştır. Başka işlem gerekmez."
    if (p.yer === "hisar") return "Kanadının talebi üzerine taziye defteri açılmıştır."
    if (p.basamak >= 5 || p.yer === "gocmen") return "Kayıtsız şahıs. Ölümü yalnızca bu tutanakta geçmektedir."
    return "Kayda geçmiştir. Başka işlem gerekmez."
  }

  function tutanak(p) {
    const yasayanCocuk = p.cocuklar.filter((c) => c.sag).length
    const M = MESLEK[p.meslek || "yok"]
    const yerAd = p.dogumYeri === "gocmen" ? `Göçmen (${KOKEN[p.koken].ad}), D Sektörü` : YERLER[p.dogumYeri].ad
    return {
      no: `${rnd(1, 9)}${rnd(100, 999)}/${p.yil}`,
      kalan: p.yer === "kalan",
      ad: p.numara ? p.numara : p.ad,
      eskiAd: p.numara ? p.ad : null,
      cins: p.cins === "e" ? "Erkek" : "Kadın",
      dogum: `Çöküş'ten sonra ${p.dogumYili}. yıl · ${yerAd}`,
      basamak: p.basamak === 0 ? "Sınıf dışı (Kalan)" : `${p.basamak} · ${basamakAd(p)}${p.kanat ? " · " + p.kanat : ""}`,
      inanc: p.inanc,
      okur: p.okur ? "Okur yazar" : "Okuma yazma bilmez",
      meslek: p.yas < 14 ? "Yok (çocuk)" : M.ad.charAt(0).toUpperCase() + M.ad.slice(1),
      medeni: p.evli ? (p.es.sag ? `Evli · ${p.es.ad}` : `Dul · ${p.es.ad}`) : "Bekâr",
      kardes: kardesOzet(p),
      hastalik: Object.keys(p.hast).length ? Object.keys(p.hast).map((k) => HASTALIK_AD[k]).join(", ") : "Kayıtlı hastalığı yok",
      zindan: p.hapisToplam ? `${p.hapisToplam} yıl` : "Hiç girmedi",
      suclar: p.sucSay ? `${p.sucSay} kez suça karıştı` : "Bilinen bir suçu yok",
      cete: p.cete ? `${CETE[p.cete].ad} (${RUTBE[p.ceteRutbe]})` : "Yok",
      esyalar: envanter(p).map((x) => (x.adet > 1 ? `${x.ad} (${x.adet})` : x.ad)).join(", ") || "Yok",
      cocuk: p.cocuklar.length ? `${p.cocuklar.length} (${yasayanCocuk} hayatta)` : "Yok",
      olum: `Çöküş'ten sonra ${p.yil}. yıl · ${p.yas} yaşında`,
      neden: OLUM_AD[p.olumNedeni],
      nedenMetin: p.olumMetniO,
      huy: HUYLAR[p.huy].ad,
      mezar: p.mezar,
      sicil: sicilAd(p.sicil),
      lira: p.lira,
      fis: p.fis,
      not: heyetNotu(p),
      hayat: p.onemli.slice(-8),
      umut: p.umut,
    }
  }

  // Aynı yerde doğan 1200 kişiyi aynı motorla (seçimleri rastgele) yaşat; oyuncuyu kıyasla
  function kiyas(p) {
    const yer = p.dogumYeri
    const N = 1200
    const yaslar = []
    for (let i = 0; i < N; i++) {
      const k = dogum(yer).p
      let g = 0
      while (!k.olu && g++ < 130) {
        const r = yil(k)
        if (r.secim) secimYap(k, r.secim.id, Math.floor(R() * r.secim.secenekler.length))
      }
      yaslar.push(k.yas)
    }
    const kisa = yaslar.filter((y) => y < p.yas).length
    const ort = yaslar.reduce((a, b) => a + b, 0) / N
    const besAlti = yaslar.filter((y) => y < 5).length
    return {
      yuzdeKisa: Math.round((kisa / N) * 100),
      ortalama: Math.round(ort),
      bebek: Math.round((besAlti / N) * 100),
      yerAd: yer === "gocmen" ? "göçmen damlarında" : yer === "kalan" ? "lağımda" : yer === "koy" ? "kıyı köylerinde" : yer === "hisar" ? "Hisar'da" : `${YERLER[yer].ad}'nde`,
    }
  }

  /* ── kişiler: aile ekranı ────────────────────────────────── */
  function soyAd(p) {
    return p.yer === "kalan" || p.dogumYeri === "kalan" ? p.ad.split(" ")[1] || sec(ADLAR.kalan.soy) : ""
  }
  function kisiYap(p, rol, cins, yas) {
    const kalan = p.dogumYeri === "kalan"
    // aynı ailede iki kişi aynı adı taşımasın
    const kullanilan = new Set([p.ad.split(" ")[0], ...[p.anne, p.baba, p.es, ...p.kardesler, ...p.cocuklar].filter(Boolean).map((k) => k.ad.split(" ")[0])])
    let ad = adSec(p.havuz, cins)
    for (let i = 0; i < 12 && kullanilan.has(ad); i++) ad = adSec(p.havuz, cins)
    if (kalan) ad += " " + (rol === "es" ? sec(ADLAR.kalan.soy) : soyAd(p))
    return { id: ++p.sonId, rol, cins, ad, yas, sag: true, yakinlik: 50, meslek: null, numara: null, nefer: null, evli: false, etkYil: null }
  }

  function akrabaMeslek(p, k) {
    if (p.yer === "hisar") return p.basamak === 1 ? "soylu" : agirlikli([["memur", 55], ["subay", 45]])
    const sahte = { yer: p.yer, basamak: p.basamak, okur: sans(p.yer === "kalan" ? 0 : 0.4) }
    return meslekSec(sahte)
  }

  function akrabaAd(p, k) {
    if (k.rol === "anne") return "Annen"
    if (k.rol === "baba") return "Baban"
    if (k.rol === "es") return k.sag ? "Eşin" : "Rahmetli eşin"
    if (k.rol === "eskies") return "Rahmetli eşin"
    if (k.rol === "cocuk") return k.cins === "e" ? "Oğlun" : "Kızın"
    if (k.yas === p.yas) return "İkiz kardeşin"
    if (k.yas > p.yas) return k.cins === "e" ? "Ağabeyin" : "Ablan"
    return k.cins === "e" ? "Erkek kardeşin" : "Kız kardeşin"
  }

  function aileTum(p) {
    const l = []
    if (p.anne) l.push(p.anne)
    if (p.baba) l.push(p.baba)
    for (const k of p.kardesler) if (!k.dogmadi && (k.yas >= 0 || !k.sag)) l.push(k)
    if (p.eskiEsler) l.push(...p.eskiEsler)
    if (p.es) l.push(p.es)
    l.push(...p.cocuklar)
    return l
  }

  function kardesOzet(p) {
    const v = p.kardesler.filter((k) => !k.dogmadi && (k.yas >= 0 || !k.sag))
    return v.length ? `${v.length} (${v.filter((k) => k.sag).length} hayatta)` : "Yok"
  }

  function aileListe(p) {
    return aileTum(p).map((k) => ({
      id: k.id,
      rol: k.rol,
      rolAd: akrabaAd(p, k),
      ad: k.ad,
      numara: k.nefer || k.numara || null,
      yas: k.sag ? k.yas : k.olumYas,
      sag: k.sag,
      olumNeden: k.olumNeden || null,
      olumYil: k.olumYil || null,
      yakinlik: Math.round(k.yakinlik),
      meslek: k.yas < 14 ? (k.yas < 6 ? "bebek" : "çocuk") : k.meslek ? MESLEK[k.meslek].ad : "işsiz",
      evli: k.evli,
      eylemler: aileEylemleri(p, k),
    }))
  }

  const AILE_EYLEM_AD = { vakit: "Vakit geçir", para_iste: "Para iste", para_ver: "Para ver", kavga: "Kavga et" }

  function aileEylemleri(p, k) {
    if (!k.sag || p.olu) return []
    const l = []
    const ekle = (id, sebep) => l.push({ id, ad: AILE_EYLEM_AD[id], uygun: !sebep, sebep: sebep || null })
    const buYil = p.hapis > 0 ? "Zindandasın; onu ancak ziyaret gününde görebilirsin." : p.yolculuk && ["anne", "baba", "kardes"].includes(k.rol) ? "O Boğaz'da; sen çok uzaktasın." : k.etkYil === p.yil ? "Bu yıl onunla zaten bir şey yaptın." : null
    const kucuk = p.yas < 4 ? "Henüz çok küçüksün." : null
    ekle("vakit", kucuk || buYil)
    if (k.yas >= 3) {
      ekle("para_iste", kucuk || (p.yas < 6 ? "Henüz çok küçüksün." : null) || (k.yas < 16 ? "Onun da parası yok." : null) || buYil)
      ekle("para_ver", kucuk || (p.lira < 5 ? "En az 5 Koloni Lirası gerek." : null) || buYil)
      ekle("kavga", kucuk || (p.yas < 6 ? "Henüz çok küçüksün." : null) || buYil)
    }
    return l
  }

  function aileEylem(p, id, eylem) {
    const k = aileTum(p).find((x) => x.id === id)
    if (!k) return { metin: "Böyle biri yok.", tur: "sessiz" }
    const e = aileEylemleri(p, k).find((x) => x.id === eylem)
    if (!e || !e.uygun) return { metin: e ? e.sebep : "Bunu yapamazsın.", tur: "sessiz" }
    k.etkYil = p.yil
    const ad = k.ad
    let metin, tur = "secim"
    if (eylem === "vakit") {
      if (k.yas < 3) metin = `${ad} kucağında uyudu.`
      else if (sans(0.1)) {
        k.yakinlik -= 5
        metin = `${ad} ile oturdunuz ama konuşma kavgaya döndü.`
        tur = "kotu"
      } else {
        k.yakinlik += rnd(6, 14)
        p.umut += 2
        const yetiskin = k.yas >= 16 && p.yas >= 16
        const l = [`${ad} ile Boğaz'a karşı oturup sustunuz.`, `${ad} ile pazarı baştan sona dolaştınız.`, `${ad} ile bütün bir akşam eski günleri konuştunuz.`]
        if (yetiskin && p.yer !== "kalan") l.push(`${ad} ile meyhanede lağım birası içtiniz.`)
        if ((k.rol === "anne" || k.rol === "baba") && p.yas < 14) l.push(`${ad} sana eski dünyadan kalma bir şarkı öğretti.`)
        if (k.rol === "cocuk" && k.yas < 14) l.push(`${ad} ile teneke bir kutuyu tekmelediniz.`)
        if (p.yer === "kalan") l.push(`${ad} ile yosun yataklarının başında oturdunuz.`)
        metin = sec(l)
        tur = "iyi"
      }
    } else if (eylem === "para_iste") {
      const isli = k.meslek && k.meslek !== "yok" && k.meslek !== "dilenci"
      const sans_ = (k.yakinlik / 100) * (isli || k.rol === "anne" || k.rol === "baba" ? 1 : 0.4)
      if (sans(sans_)) {
        const l = rnd(2, 12) * (p.yer === "hisar" ? 5 : 1)
        p.lira += l
        k.yakinlik -= 4
        metin = `${ad} cebinden ${l} Koloni Lirası çıkarıp avucuna sıkıştırdı.`
      } else {
        k.yakinlik -= 8
        metin = `${ad} "Bende de yok, olsa verirdim," dedi. Belki de vardı.`
        tur = "kotu"
      }
    } else if (eylem === "para_ver") {
      const l = Math.min(p.lira, rnd(5, 10))
      p.lira -= l
      k.yakinlik += rnd(10, 16)
      p.umut += 1
      metin = sec([`${ad} için ${l} Koloni Lirası ayırdın. Bir şey demedi ama gözleri doldu.`, `${l} Koloni Lirası verdin. ${ad} parayı katlayıp göğüs cebine koydu.`])
      tur = "iyi"
    } else if (eylem === "kavga") {
      k.yakinlik -= rnd(15, 30)
      p.umut -= 3
      if (sans(0.15) && k.yas >= 12) {
        p.saglik -= 6
        metin = `${ad} ile kavga ettiniz. Sözler yetmedi, yumruklar konuştu.`
      } else metin = sec([`${ad} ile bağıra bağıra kavga ettiniz. Bütün avlu duydu.`, `${ad} ile kavga ettiniz. Kapıyı çarpıp çıktın.`, `${ad} ile kavga ettin ve aylardır içinde biriktirdiğin her şeyi söyledin.`])
      tur = "kotu"
    }
    k.yakinlik = kel(k.yakinlik, 0, 100)
    kelle(p)
    p.lira = Math.max(0, Math.round(p.lira))
    return { metin, tur }
  }

  /* ── iş ─────────────────────────────────────────────────── */
  const altS = (p) => ["A", "B", "C", "D", "gocmen"].includes(p.yer)
  const ISLER = {
    hamal: { k: (p) => (altS(p) || p.yer === "koy" ? null : "Burada iskele yok."), a: (p) => (p.bayrak.lonca ? 0.95 : 0.7) },
    tersane: { k: (p) => (altS(p) ? null : "Tersane Alt Şehir'de."), a: (p) => (p.bayrak.lonca ? 0.9 : 0.55) },
    kaynakci: { k: (p) => (!altS(p) ? "Tersane Alt Şehir'de." : p.yas < 16 ? "16 yaşından küçükleri almıyorlar." : null), a: (p) => (p.bayrak.lonca ? 0.85 : 0.45) },
    fabrika: { k: (p) => (altS(p) ? null : "Fabrikalar Alt Şehir'de."), a: () => 0.7 },
    seyyar: { k: (p) => (p.yer === "kalan" ? "Pazara çıkamazsın." : p.yer === "hisar" ? "Hisarlı pazarda tezgâh açmaz." : null), a: () => 1 },
    meyhaneci: { k: (p) => (!altS(p) ? "Bunun için Alt Şehir'de olmalısın." : p.yas < 18 ? "18 yaşından küçüksün." : p.lira < 20 ? "Bir tezgâh için 20 Koloni Lirası gerek." : null), a: () => 1 },
    eskici: { k: (p) => (p.yer === "kalan" ? "Pazara çıkamazsın." : p.yas < 16 ? "16 yaşından küçükleri çırak bile almıyorlar." : null), a: () => 0.6 },
    tamirci: { k: (p) => (p.yer === "kalan" || p.yer === "hisar" ? "Burada tamirhane yok." : p.yas < 16 ? "16 yaşından küçüksün." : null), a: (p) => (p.okur ? 0.7 : 0.45) },
    balikci: { k: (p) => (altS(p) || p.yer === "koy" ? null : "Teknen yok."), a: () => 0.8 },
    hurdaci: { k: (p) => (altS(p) || p.yer === "koy" ? null : "Burada harabe yok."), a: () => 1 },
    kanal: { k: (p) => (altS(p) ? null : "Kanallar Alt Şehir'de."), a: () => 0.9 },
    ciftci: { k: (p) => (p.yer === "koy" ? null : "Tarla köylerde."), a: () => 0.9 },
    hizmetci: { k: (p) => (!altS(p) ? "Hisar aileleri Alt Şehir'den hizmetçi alır." : p.basamak < 4 ? "Bu işe senin basamağından kimse girmez." : p.yas < 15 || p.yas > 40 ? "15 ile 40 yaş arasını istiyorlar." : null), a: () => 0.5 },
    polis: { k: (p) => (p.yer === "kalan" ? "Karakol Kalanlar'ı almaz." : !p.okur ? "Okuma yazma bilmek gerek." : p.sicil > 0 ? "Sicilinin temiz olması gerek." : p.yas < 17 || p.yas > 30 ? "17 ile 30 yaş arasını alıyorlar." : null), a: () => 0.5 },
    memur: { k: (p) => (p.yer === "kalan" ? "Heyet Kalanlar'ı almaz." : !p.okur ? "Okuma yazma bilmek gerek." : !(p.yer === "hisar" || p.yer === "A" || p.yer === "B" || p.bayrak.ileriOkulBitti) ? "Okulu bitirmiş olmak ya da A veya B Sektörü'nden olmak gerek." : p.sicil > 1 ? "Sicilin fazla kirli." : p.yas < 18 ? "18 yaşından küçüksün." : null), a: (p) => (p.yer === "hisar" ? 0.8 : 0.35) },
    subay: { k: (p) => (p.yer !== "hisar" ? "Subaylık Hisarlı ailelere ayrılmış." : p.yas < 18 ? "18 yaşından küçüksün." : null), a: () => 0.7 },
    kacakci: { k: (p) => (p.yer === "kalan" || p.yer === "hisar" ? "Bu dünyaya buradan girilmez." : !p.bayrak.kacakci ? "Kaçakçı ağlarında tanıdığın yok." : null), a: () => 0.9 },
    yosuncu: { k: (p) => (!altS(p) ? "Yosun Alt Şehir'de satılır." : !(p.yosun > 0 || p.bayrak.kacakci) ? "Yosun işine girecek bağlantın yok." : null), a: () => 0.9 },
    toplayici: { k: (p) => (p.yer === "kalan" ? null : "Yosun yatakları lağımda."), a: () => 1 },
    dilenci: { k: (p) => (p.yer === "hisar" || p.yer === "kalan" ? "Burada avuç açacak bir pazar yok." : null), a: () => 1 },
  }

  function isKilidi(p) {
    if (p.olu) return "Öldün."
    if (p.hapis > 0) return "Zindandasın."
    if (yurtDisi(p)) return "Boğaz'dan uzaktasın; burada işini yolculuğun belirliyor."
    if (p.yas < 14) return "Çalışmak için 14 yaşını beklemelisin."
    if (p.numara && ["nefer", "cavus"].includes(p.meslek)) return "Nizam'ın neferisin. Numara istifa etmez."
    if (p.meslek === "konsey") return "Konsey'den istifa edilmez."
    if (p.meslek === "intizamci") return "İntizam Heyeti'nin serbest görevlisisin. Başka iş verilmez."
    if (p.meslek === "soylu") return "Ailenin işleri seni bırakmaz."
    if (p.okulda) return "Okuldasın. İş için okulu bırakmalısın."
    return null
  }

  function gelirMetni(id) {
    const M = MESLEK[id]
    const g = []
    if (M.fis) g.push(`${M.fis} fiş`)
    if (M.lira) g.push(`${M.lira} lira`)
    return g.length ? "yılda " + g.join(" + ") : "kazancı yok denecek kadar az"
  }
  const buyukHarf = (s) => s.charAt(0).toLocaleUpperCase("tr") + s.slice(1)

  function isler(p) {
    const kilit = isKilidi(p)
    const liste = Object.keys(ISLER).map((id) => {
      const sebep = ISLER[id].k(p)
      return { id, ad: buyukHarf(MESLEK[id].ad), gelir: gelirMetni(id), uygun: !sebep && !kilit && p.meslek !== id, sebep: p.meslek === id ? "Şu an bu işi yapıyorsun." : sebep, kabul: Math.round(ISLER[id].a(p) * 100) }
    })
    liste.sort((a, b) => (b.uygun ? 1 : 0) - (a.uygun ? 1 : 0))
    return { kilit, mevcut: p.meslek ? buyukHarf(MESLEK[p.meslek].ad) : p.yas < 14 ? "Çocuk" : "İşsiz", istifaEdilebilir: !kilit && p.meslek && p.meslek !== "yok", basvuruKaldi: Math.max(0, 2 - p.buYil.basvuru), liste }
  }

  function isBasla(p, id) {
    p.meslek = id
    const M = MESLEK[id]
    let ek = ""
    if (id === "fabrika") {
      p.urun = sec(FABRIKA_URUN)
      ek = ` ${p.urun} üreten bir fabrikada.`
    }
    if (id === "hizmetci") {
      p.yerEski = p.yer
      p.yer = "A"
      ek = " Hisar'daki eve arka merdivenden giriyorsun; ön kapıdan girmene izin yok."
    }
    if (id === "tezgahci") {
      p.lira -= 15
      ek = " 15 liraya köprü pazarında bir tezgâh kiraladın."
    }
    if (id === "meyhaneci") {
      p.lira -= 20
      ek = " 20 liraya bir tezgâh ve üç fıçı lağım birası aldın."
    }
    if (id === "polis") {
      p.basamak = Math.min(p.basamak, 3)
      ek = " Siyah üniformanı karakolun eksi birinci katındaki emanetten aldın."
    }
    if (id === "memur") {
      p.basamak = Math.min(p.basamak, 2)
      ek = " Evrak dairesinde bir masan var. Daktilolar hiç susmuyor."
    }
    p.onemli.push(`${p.yas} yaşında ${M.ad} oldu.`)
    return `İşe başladın: ${M.ad}.${ek}`
  }

  function basvur(p, id) {
    const k = isKilidi(p)
    if (k) return { metin: k, tur: "sessiz" }
    if (p.buYil.basvuru >= 2) return { metin: "Bu yıl yeterince kapı çaldın. Seneye.", tur: "sessiz" }
    const I = ISLER[id]
    const sebep = I && I.k(p)
    if (!I || sebep) return { metin: sebep || "Böyle bir iş yok.", tur: "sessiz" }
    p.buYil.basvuru++
    if (sans(I.a(p) * (p.hast.yesil && !p.bayrak.sakla && p.yer !== "kalan" ? 0.6 : 1))) {
      const m = isBasla(p, id)
      p.lira = Math.max(0, Math.round(p.lira))
      return { metin: m, tur: "donum" }
    }
    return { metin: sec([`${buyukHarf(MESLEK[id].ad)} olmak için kapı çaldın. Seni almadılar.`, `${buyukHarf(MESLEK[id].ad)} işine başvurdun ama "Yer yok," dediler.`]), tur: "kotu" }
  }

  function istifa(p) {
    const k = isKilidi(p)
    if (k) return { metin: k, tur: "sessiz" }
    if (!p.meslek || p.meslek === "yok") return { metin: "Zaten bir işin yok.", tur: "sessiz" }
    const eski = MESLEK[p.meslek].ad
    if (p.meslek === "hizmetci" && p.yerEski) {
      p.yer = p.yerEski
      p.yerEski = null
    }
    p.meslek = "yok"
    return { metin: `İşi bıraktın; artık ${eski} değilsin.`, tur: "donum" }
  }

  /* ── okul ve ilk iş kararları ────────────────────────────── */
  function ozelSecim(p, id) {
    if (id === "__okul") {
      return {
        id,
        metin: "Mahallede bir okul var. Eski dünyadan kalma bir ders kitabını üç çocuk paylaşıyor. Ailen seni okula da yollayabilir, sokağa çalışmaya da.",
        secenekler: ["Okula git", "Sokakta çalış, eve para getir"],
      }
    }
    if (id === "__is") {
      if (isKilidi(p) && !p.okulda) return null
      const uygun = isler(p).liste.filter((x) => x.uygun && x.id !== "dilenci")
      const secilen = []
      for (let i = 0; i < 25 && secilen.length < 3; i++) {
        const m = meslekSec(p)
        if (uygun.some((x) => x.id === m) && !secilen.includes(m)) secilen.push(m)
      }
      for (const x of uygun) if (secilen.length < 3 && !secilen.includes(x.id) && !["kacakci", "yosuncu"].includes(x.id)) secilen.push(x.id)
      p.isTeklif = secilen.slice()
      const etiket = secilen.map((m) => `${buyukHarf(MESLEK[m].ad)} (${gelirMetni(m)})`)
      if (p.yas === 14 && p.bayrak.okula && p.yer !== "hisar") {
        p.isTeklif.push("__okul16")
        etiket.push("Okula devam et (16 yaşına kadar)")
      }
      p.isTeklif.push("__bekle")
      etiket.push("Şimdilik iş arama")
      const metin = p.yas === 14 ? `On dört yaşına girdin. ${p.yer === "koy" ? "Köyde" : "Alt Şehir'de"} bu yaş çalışma yaşı demek. Önünde şu kapılar açık:` : "Okulu bitirdin. Önünde şu kapılar açık:"
      return { id, metin: p.yer === "hisar" ? "On dört yaşına girdin. Ailen senin için şu yolları düşünüyor:" : metin, secenekler: etiket }
    }
    return null
  }

  function ozelSecimYap(p, id, i) {
    let metin, tur = "secim", etiket
    if (id === "__okul") {
      if (i === 0) {
        p.okulda = true
        p.bayrak.okula = true
        etiket = "Okula git"
        metin = "Sabahları okula, öğleden sonra eve. Kitabın kapağı yoktu ama sayfaları tamdı."
        tur = "iyi"
      } else {
        p.bayrak.sokak = true
        p.ciger -= 2
        etiket = "Sokakta çalış"
        metin = "İskelede ip taşıdın, pazarda kasa sildin. Eve birkaç lira getirdin."
      }
    } else {
      const sec_ = (p.isTeklif || [])[i]
      if (sec_ === "__okul16") {
        p.okulda = true
        p.bayrak.ileriOkul = true
        etiket = "Okula devam et"
        metin = "Yaşıtların iskeleye giderken sen okula devam ettin. Ailen bunun bedelini cebinde hissetti."
        p.umut += 3
      } else if (sec_ === "__bekle" || !sec_) {
        etiket = "Şimdilik iş arama"
        metin = "Şimdilik iş aramadın. İş ekranından istediğin zaman başvurabilirsin."
      } else {
        etiket = buyukHarf(MESLEK[sec_].ad)
        metin = isBasla(p, sec_)
        tur = "donum"
      }
      p.isTeklif = null
    }
    kelle(p)
    p.lira = Math.max(0, Math.round(p.lira))
    return { metin: "» " + etiket + ". " + metin, tur }
  }

  /* ── etkinlikler ─────────────────────────────────────────── */
  const ETKINLIK = [
    { id: "revir", ad: "Revire git", bilgi: "10 lira · sağlık", k: (p) => (p.yer === "kalan" ? "Revir Kalanlar'ı kabul etmez." : p.lira < 10 ? "10 Koloni Lirası gerek." : null), f: (p) => { p.lira -= 10; p.saglik += rnd(10, 20); return ["Revirde gri önlüklü bir hemşire seni muayene etti. 10 liraya bir avuç ilaç aldın." + tedavi(p, 0.7), "iyi"] } },
    { id: "yardimevi", ad: "Yardımlaşma evine git", bilgi: "umut · bazen okuma", k: (p) => (!(altS(p) || p.yer === "koy") ? "Burada yardımlaşma evi yok." : p.yas < 6 ? "Henüz çok küçüksün." : null), f: (p) => { p.umut += 5; if (p.saglik < 60) p.saglik += 5; if (!p.okur && p.yas >= 10 && sans(0.25)) { p.okur = true; p.onemli.push("Okumayı bir yardımlaşma evinde öğrendi."); return ["Çorbanı içerken biri sana eski bir kitaptan okumayı öğretti.", "iyi"] } if (p.yas >= 16 && sans(p.inanc === "inançsız" ? 0 : 0.1)) { p.sicil++; return ["Çorba sıcaktı. Ama kapıda Heyet'ten biri gelenlerin adlarını yazıyordu.", "kotu"] } return ["Bir kâse çorba içtin. Masada kimse kimin neye inandığını sormadı.", "iyi"] } },
    { id: "bar", ad: "Barda lağım birası iç", bilgi: "1 lira · umut", k: (p) => (p.yer === "kalan" || p.yer === "hisar" ? "Burada lağım birası satan yok." : p.yas < 16 ? "16 yaşından küçüklere vermiyorlar." : p.lira < 1 ? "1 Koloni Lirası gerek." : null), f: (p) => { p.lira -= 1; p.umut += 3; if (sans(0.12)) { p.saglik -= 8; return ["Barda bir kavgaya karıştın. Sabah kaburgaların konuşuyordu.", "kotu"] } return p.bayrak.cark ? "Çark'ın barında kafası dövmeli kardeşlerinle içtin." : "Bulanık bir bardak bira, üstünde parmak kalınlığında köpük. Tadı tam beklediğin gibiydi." } },
    { id: "yosun_al", ad: "Yosun al", bilgi: "5 lira · unutturur", k: (p) => (p.yas < 16 ? "16 yaşından küçüklere satmıyorlar." : p.yer !== "kalan" && p.lira < 5 ? "5 Koloni Lirası gerek." : null), f: (p) => { if (p.yer !== "kalan") p.lira -= 5; if (p.yosun === 0) p.onemli.push("Yosun'la tanıştı."); p.yosun += 12; p.umut += 8; return "Bir avuç kurutulmuş Yosun aldın. O gece sefaletin çok uzakta kaldığı derin bir uyku uyudun." } },
    { id: "yosun_birak", ad: "Yosun'u bırakmayı dene", bilgi: "zor", k: (p) => (p.yosun === 0 ? "Yosun kullanmıyorsun." : null), f: (p) => { if (sans(0.45 + p.umut / 250)) { p.yosun -= 25; p.saglik -= 4; return ["Haftalarca titredin ama bıraktın. En azından şimdilik.", "iyi"] } p.umut -= 3; return ["Üçüncü gece dayanamadın.", "kotu"] } },
    { id: "lagim", ad: "Lağıma in, Kalanlar'la takas yap", bilgi: "lira · radyasyon", k: (p) => (!altS(p) ? "Bunun için Alt Şehir'de olmalısın." : p.yas < 16 ? "16 yaşından küçüksün." : p.numara ? "Nefer lağıma emirle iner." : null), f: (p) => { p.bayrak.lagim = true; const l = rnd(25, 45); p.lira += l; if (sans(filtreRiski(p))) { p.saglik -= 20; return [`Filtren yarı yolda bitti. ${l} lirayla yukarı çıktın ama ciğerlerin zarar gördü.`, "kotu"] } return `Gaz maskeni takıp indin, Kalanlar'dan paketi alıp çıktın. Karşılığında ${l} Koloni Lirası kazandın.` + yesilBulas(p) } },
    { id: "karaborsa", ad: "Fişi karaborsada liraya çevir", bilgi: "kötü kur · risk", k: (p) => (p.yas < 16 ? "16 yaşından küçüksün." : p.fis < 100 ? "En az 100 fiş gerek." : null), f: (p) => { const l = Math.round(p.fis / 55); p.lira += l; p.fis = 0; if (sans(0.12)) { p.sicil++; return [`${l} lira aldın. Bir hafta sonra adın bir tutanağa geçti.`, "kotu"] } return `Fişlerini bir karaborsacıya verdin, karşılığında ${l} Koloni Lirası aldın.` } },
    { id: "cark", ad: "Çark'a katıl", bilgi: "koruma · şiddet", k: (p) => (!["B", "C", "D", "gocmen"].includes(p.yer) ? "Çark senin mahallende değil." : p.bayrak.cark ? "Zaten Çark'tansın." : p.numara ? "Üniformalıları sevmezler." : p.yas < 14 || p.yas > 35 ? "14 ile 35 yaş arasını alırlar." : null), f: (p) => { if (sans(0.6)) { p.bayrak.cark = true; p.umut += 6; p.onemli.push("Çark tarikatına katıldı; kafası dövmeyle kaplandı."); return ["Kafanı kazıdılar ve ilk çark dövmesini tam tepene yaptılar.", "donum"] } if (sans(0.5)) { p.saglik -= 8; return ["Barlarına gittin. Seni sınamak için dövdüler, sonra kapı dışarı ettiler.", "kotu"] } return "Barlarına gittin. Seni dinlediler ama bir şey söylemediler. Belki seneye." } },
    { id: "mezarlik", ad: "Yamaçtaki mezarlığa çık", bilgi: "umut", k: (p) => (p.yer === "kalan" ? "Kalanlar'ın mezarı yok; adları ezberlenir." : p.yas < 8 ? "Henüz çok küçüksün." : null), f: (p) => { p.umut += rnd(3, 6); const olu = aileTum(p).filter((k) => !k.sag); if (olu.length) { const k = sec(olu); return `${k.ad} için dikilen taşın başında oturdun. Aşağıda Boğaz zift gibi kapkara duruyordu.` } return "Taşların arasında oturup Boğaz'a baktın. Kimse ölülerden manzarayı esirgemeyi akıl etmemiş." } },
    { id: "dilekce", ad: "Heyet'e dilekçe yaz", bilgi: "okuma yazma", k: (p) => (p.yer === "kalan" ? "Heyet Kalanlar'ı tanımaz." : !p.okur ? "Okuma yazma bilmek gerek." : p.yas < 18 ? "18 yaşından küçüksün." : null), f: (p) => { const r = R(); if (r < 0.15) { p.fis += 80; return ["Dilekçen okunmuş. Erzak payın artırıldı.", "iyi"] } if (r < 0.27) { p.sicil++; return ["Dilekçen bir dosyaya girdi. Adın da.", "kotu"] } return "Dilekçeni verdin. Cevap gelmedi." } },
    { id: "es_ara", ad: "Eş ara", bilgi: "evlilik", k: (p) => (p.evli && p.es && p.es.sag ? "Zaten evlisin." : p.yas < 16 ? "16 yaşından küçüksün." : p.yas > 60 ? "Bu yaştan sonra kimse aramıyor." : null), f: (p) => { if (sans(0.35 + p.umut / 300 + ((p.cemaat || 0) >= 30 ? 0.1 : 0))) { if (p.es) { p.es.rol = "eskies"; (p.eskiEsler = p.eskiEsler || []).push(p.es) } evlen(p); p.onemli.push(`${p.yas} yaşında ${p.es.ad} ile evlendi.`); return [`${p.es.ad} ile tanıştın. Bir yıl dolmadan evlendiniz.`, "iyi"] } return "Birkaç kişiyle tanıştın ama hiçbiri bir yere varmadı." } },
    { id: "cocuk", ad: "Çocuk yapmayı dene", bilgi: "aile", k: (p) => (!(p.evli && p.es && p.es.sag) ? "Önce evli olmalısın." : p.yas > (p.cins === "k" ? 44 : 55) || p.es.yas > 50 ? "Artık bu yaşta olmuyor." : null), f: (p) => { if (sans(0.45)) { const l = []; const c = cocukDogdu(p, (m) => l.push(m)); return [`Bir çocuğun oldu: ${c.ad}.`, "iyi"] } return "Bu yıl olmadı." } },
    { id: "okul_birak", ad: "Okulu bırak", bilgi: "sokağa çık", k: (p) => (!p.okulda ? "Okula gitmiyorsun." : p.yer === "hisar" ? "Hisarlı okulu bırakmaz." : null), f: (p) => { p.okulda = false; p.bayrak.ileriOkul = false; p.bayrak.sokak = true; return "Ders kitabını küçük bir çocuğa verip sokağa çıktın." } },
    { id: "oku_ogren", ad: "Okumayı öğrenmeye çalış", bilgi: "akşam dersleri", k: (p) => (p.okur ? "Zaten okuyorsun." : p.yas < 15 ? "15 yaşından küçüksün." : !(altS(p) || p.yer === "koy") ? "Burada öğretecek kimse yok." : null), f: (p) => { if (sans(0.35)) { p.okur = true; p.onemli.push(`${p.yas} yaşında okumayı öğrendi.`); return ["Akşamları bir yardımlaşma evinde harfleri söktün. Artık tutanakları okuyabiliyorsun.", "iyi"] } return "Bu yıl harfleri bir türlü sökemedin." } },
    { id: "goc", ad: "Alt Şehir'e göç et", bilgi: "iş · pus", k: (p) => (p.yer !== "koy" ? "Köyde yaşamıyorsun." : p.yas < 16 || p.yas > 45 ? "16 ile 45 yaş arası olmalısın." : null), f: (p) => { p.yer = sec(["C", "D"]); if (p.meslek === "balikci" || p.meslek === "ciftci") p.meslek = "yok"; p.onemli.push(`Köyden ${YERLER[p.yer].ad}'ne göçtü.`); return [`${YERLER[p.yer].uzun} bir oda buldun. İlk sabah öksürerek uyandın.`, "donum"] } },
    { id: "ana", ad: "Ana'ya dua et", bilgi: "umut", k: (p) => (p.yas < 5 ? "Henüz çok küçüksün." : p.yer !== "kalan" ? "Ana'yı yalnızca Kalanlar bilir." : null), f: (p) => { p.umut += 5; return "Tünelin derinliklerine doğru Ana'nın adını fısıldadın. Cevap gelmedi ama kendini yalnız hissetmedin." } },
    { id: "mazgal", ad: "Mazgaldan yukarıyı izle", bilgi: "merak", k: (p) => (p.yas < 4 ? "Henüz çok küçüksün." : p.yer !== "kalan" ? "Yukarıdasın zaten." : null), f: (p) => { p.umut += 2; return sec(["Maskesiz yüzler, numaralı yakalar ve asit pusu gördün. Yukarısı tuhaf bir yer.", "Bir çocuk mazgala eğilip sana baktı. Kaçmadı."]) } },
  ]

  // yedek filtre varsa lağımda filtrenin bitme riski çok düşer
  function filtreRiski(p) {
    if ((p.esya.filtre || 0) > 0) {
      p.esya.filtre--
      return 0.03
    }
    return 0.25
  }

  function etkGorunur(p, e) {
    if (e.gizle && e.gizle(p)) return false
    if (yurtDisi(p) && !YURTDISI_ETK.includes(e.id) && e.kat !== "Yolculuk") return false
    return true
  }

  function etkinlikler(p) {
    return ETKINLIK.filter((e) => etkGorunur(p, e)).map((e) => {
      const sebep = p.olu ? "Öldün." : p.hapis > 0 ? "Zindandasın." : p.buYil.etk[e.id] ? "Bunu bu yıl zaten yaptın." : e.k(p)
      return { id: e.id, ad: e.ad, kat: e.kat, etki: e.etki, uygun: !sebep, sebep }
    }).filter((e) => !(e.sebep && /^(Köyde yaşamıyorsun|Ana'yı yalnızca|Yukarıdasın|Okula gitmiyorsun|Yosun kullanmıyorsun)/.test(e.sebep)))
  }

  function etkinlik(p, id) {
    const e = ETKINLIK.find((x) => x.id === id)
    if (!e) return { metin: "Böyle bir şey yok.", tur: "sessiz" }
    const sebep = p.olu ? "Öldün." : p.hapis > 0 ? "Zindandasın." : !etkGorunur(p, e) ? "Bunu şu an yapamazsın." : p.buYil.etk[id] ? "Bunu bu yıl zaten yaptın." : e.k(p)
    if (sebep) return { metin: sebep, tur: "sessiz" }
    p.buYil.etk[id] = true
    const r = e.f(p)
    const [metin, tur] = Array.isArray(r) ? r : [r, "secim"]
    kelle(p)
    p.lira = Math.max(0, Math.round(p.lira))
    p.fis = Math.max(0, Math.round(p.fis))
    return { metin, tur }
  }

  /* ── pazar: Koloni Lirası'nı harcamak ────────────────────── */
  const lagimdaPazarYok = (p) => (p.yer === "kalan" ? "Lağımda pazar yok; bunu sana getirecek bir kaçakçı da yok." : null)
  const PAZAR = [
    { id: "yemek", ad: "Bir hafta sıcak yemek", fiyat: 4, bilgi: "sağlık ve umut", k: () => null, f: (p) => { p.saglik += 5; p.umut += 2; return ["Bir hafta boyunca her akşam sıcak çorba ve taze ekmek yedin.", "iyi"] } },
    { id: "ilac", ad: "Karaborsadan antibiyotik", fiyat: 12, bilgi: "sağlık, ama sahtesi de çıkar", k: () => null, f: (p) => { if (sans(0.12)) return ["İlaç sahte çıktı. Tebeşir ile şekerden başka bir şey değildi.", "kotu"]; p.saglik += rnd(12, 20); return ["Karaborsacının kutusundan çıkan ilaç işe yaradı. Ateşin düştü." + tedavi(p, 0.8), "iyi"] } },
    { id: "filtre", ad: "Gaz maskesi filtresi", fiyat: 6, coklu: true, bilgi: "lağımda filtren yarı yolda bitmez", k: (p) => lagimdaPazarYok(p) || (p.filtre >= 3 ? "Üç filtren var; fazlası kurur." : null), f: (p) => { p.filtre = (p.filtre || 0) + 1; return `Kaçakçıdan yeni bir filtre aldın. Şimdi ${p.filtre} filtren var.` } },
    { id: "palto", ad: "Kalın bir kışlık palto", fiyat: 10, tek: "palto", bilgi: "kışın açlık ve soğuk daha az vurur", k: lagimdaPazarYok, f: (p) => { p.bayrak.palto = true; return ["Eskiciden yünlü, ağır bir palto aldın. İlk kez bir kışı üşümeden geçireceksin.", "iyi"] } },
    { id: "oda", ad: "Daha iyi bir oda kirala", fiyat: 12, bilgi: "kirası her yıl ödenir · ciğerin daha az yıpranır", k: (p) => lagimdaPazarYok(p) || (p.yer === "hisar" ? "Hisar'da zaten iyi bir evin var." : p.bayrak.oda ? "Zaten kiradasın." : p.yas < 16 ? "16 yaşından küçüklere oda vermiyorlar." : null), f: (p) => { p.bayrak.oda = true; p.onemli.push(`${p.yas} yaşında kendi odasını kiraladı.`); return ["Penceresi sıkı kapanan, duvarı kuru bir oda kiraladın. Kirası her yıl ödenecek.", "iyi"] } },
    { id: "hediye", ad: "Ailene hediye al", fiyat: 6, bilgi: "herkesle yakınlığın artar", k: (p) => (aileTum(p).some((k) => k.sag && k.yas >= 0) ? null : "Hediye alacak kimsen kalmadı."), f: (p) => { for (const k of aileTum(p)) if (k.sag && k.yas >= 0) k.yakinlik = kel(k.yakinlik + 6, 0, 100); p.umut += 2; return ["Pazardan herkese küçük bir şey aldın. Akşam evde uzun zamandır olmayan bir neşe vardı.", "iyi"] } },
    { id: "kitap", ad: "Eski bir kitap", fiyat: 3, bilgi: "umut · okur yazar olmalısın", k: (p) => lagimdaPazarYok(p) || (!p.okur ? "Okuma yazma bilmiyorsun." : null), f: (p) => { p.umut += 5; return sec(["Eskicide kapağı kopmuş bir kitap buldun. Uzun Karanlık'tan önce yazılmış; içindeki dünyayı tanımıyorsun.", "Bir şiir kitabı aldın. Yarısını anlamadın ama her gece okudun."]) } },
    { id: "tutun", ad: "Bir paket tütün", fiyat: 1, bilgi: "biraz umut, biraz ciğer", k: () => null, f: (p) => { p.umut += 2; p.ciger -= 1; return "Acı bir tütün. Rutubet kokusunu bastırmıyor ama elin bir işle meşgul oluyor." } },
    { id: "rusvet", ad: "Memura rüşvet ver, sicilini temizlet", fiyat: 30, bilgi: "sicilin bir derece temizlenir", k: (p) => lagimdaPazarYok(p) || (p.sicil === 0 ? "Sicilin zaten temiz." : null), f: (p) => { if (sans(0.8)) { p.sicil--; return ["Zarf masanın çekmecesine girdi. Bir hafta sonra sicilindeki bir kayıt kaybolmuştu.", "iyi"] } p.sicil++; return ["Memur zarfı aldı, sonra seni Heyet'e bildirdi. Sicilin daha da kirlendi.", "kotu"] } },
    { id: "evrak", ad: "Sahte kayıt evrakı", fiyat: 40, tek: "evrak", bilgi: "kayıtsızlıktan çıkarsın", k: (p) => lagimdaPazarYok(p) || (p.basamak !== 5 ? "Zaten kayıtlısın." : null), f: (p) => { if (sans(0.12)) { p.sicil += 2; return ["Evrak sahte olduğu ilk kontrolde anlaşıldı." + hapseAt(p, 2, "sahte evrakla yakalandığı için"), "kotu"] } p.basamak = 4; p.bayrak.evrak = true; p.onemli.push("Sahte bir evrakla kayda geçti."); return ["Sahteci adını eski bir deftere işledi. Artık Nizam'ın gözünde kayıtlı birisin.", "donum"] } },
    { id: "hisar", ad: "Bir günlüğüne Hisar'a çık", fiyat: 20, bilgi: "geçiş izni · umut", k: (p) => lagimdaPazarYok(p) || (p.yer === "hisar" ? "Zaten Hisar'dasın." : p.meslek === "hizmetci" ? "Her gün oradasın zaten." : p.yas < 12 ? "Çocuklara geçiş izni verilmiyor." : null), f: (p) => { p.umut += 6; return "Bir günlük geçiş izni aldın. Hisar'ın sokakları temizdi, kimse öksürmüyordu. Akşam yokuşu inerken Alt Şehir'in ışıklarına başka gözle baktın." } },
  ]

  function pzGorunur(p, x) {
    if (x.gizle && x.gizle(p)) return false
    if (yurtDisi(p) && !YURTDISI_PZ.includes(x.id)) return false
    return true
  }

  function pazar(p) {
    return PAZAR.filter((x) => pzGorunur(p, x)).map((x) => {
      let sebep = p.olu ? "Öldün." : p.hapis > 0 ? "Zindandasın; buraya pazar gelmez." : x.tek && p.bayrak[x.tek] ? "Bundan sende var." : !x.coklu && p.buYil.pazar && p.buYil.pazar[x.id] ? "Bunu bu yıl zaten aldın." : p.yas < (x.yas || 6) ? (x.yas ? `${x.yas} yaşından küçüklere satmıyorlar.` : "Henüz çok küçüksün.") : x.k(p)
      if (!sebep && p.lira < x.fiyat) sebep = `${x.fiyat} Koloni Lirası gerek.`
      return { id: x.id, ad: x.ad, fiyat: x.fiyat, kat: x.kat, etki: x.etki, uygun: !sebep, sebep }
    })
  }

  function satinAl(p, id) {
    const x = PAZAR.find((y) => y.id === id)
    const d = pazar(p).find((y) => y.id === id)
    if (!x || !d) return { metin: "Böyle bir şey satılmıyor.", tur: "sessiz" }
    if (!d.uygun) return { metin: d.sebep, tur: "sessiz" }
    p.lira -= x.fiyat
    p.buYil.pazar = p.buYil.pazar || {}
    p.buYil.pazar[id] = true
    const r = x.f(p)
    const [metin, tur] = Array.isArray(r) ? r : [r, "secim"]
    kelle(p)
    p.lira = Math.max(0, Math.round(p.lira))
    return { metin, tur }
  }

  /* ═══ Sürüm 3: hastalıklar, Zindan, yeni yerler, işler, etkinlikler, ürünler, olaylar ═══ */

  /* ── hastalıklar ─────────────────────────────────────────── */
  const HASTALIK_AD = { sari: "sarı öksürük", pas: "pas humması", lagim: "lağım ateşi", yesil: "yeşillenme" }

  function hastalikYil(p, satir) {
    const h = p.hast
    const altsehirli = ["A", "B", "C", "D", "gocmen"].includes(p.yer)
    // sarı öksürük: ciğer yıprandıkça gelir, gitmez
    if (!h.sari && p.yer !== "kalan" && p.yas >= 10 && p.ciger < 65 && sans(0.02 + (65 - p.ciger) / 1200)) {
      h.sari = true
      satir("Balgamın balmumu rengine döndü. Revirdeki hemşire adını koydu: sarı öksürük. Bunun ilacı yok.", "kotu")
      p.onemli.push(`${p.yas} yaşında sarı öksürüğe yakalandı.`)
    } else if (h.sari) {
      p.ciger -= 0.7
      p.saglik -= 0.8
    }
    // pas humması: paslı demirle çalışanlarda
    if (!h.pas && p.yas >= 12 && ["hurdaci", "tersane", "hamal", "kaynakci", "dalgic"].includes(p.meslek) && sans(0.025)) pasBulas(p, satir)
    else if (h.pas) {
      p.saglik -= rnd(6, 12)
      if (sans(0.3)) {
        delete h.pas
        satir("Pas humması kendiliğinden geçti. Elindeki yara iz bıraktı ama kapandı.", "iyi")
      }
    }
    // lağım ateşi: salgın, yoksul mahallelerde daha sık; temiz su korur
    if (!h.lagim && (altsehirli || p.yer === "kalan") && sans((["C", "D", "gocmen"].includes(p.yer) ? 0.018 : 0.01) * (p.suYil >= p.yil ? 0.3 : 1) * (p.hapis > 0 ? 3 : 1))) {
      h.lagim = true
      p.saglik -= rnd(10, 16)
      satir(p.hapis > 0 ? "Zindanda lağım ateşi yayıldı ve sana da bulaştı." : "Mahalleye lağım ateşi geldi. Seni de yatağa düşürdü.", "kotu")
    } else if (h.lagim) {
      p.saglik -= rnd(4, 9)
      if (sans(0.45)) {
        delete h.lagim
        satir("Lağım ateşini atlattın. Haftalarca ayağa kalkamadın ama atlattın.", "iyi")
      }
    }
    // yeşillenme: kalıcı; insanlar uzak durur
    if (h.yesil && p.yer !== "kalan" && sans(0.25)) {
      p.umut -= 3
      satir(sec(["Pazarda bir kadın derindeki yeşil lekeleri görünce çocuğunu senden uzaklaştırdı.", "Biri arkandan \"Yeşil!\" diye bağırdı. Başını çevirmedin.", "Barda yanına kimse oturmadı. Lekelerin yüzünden olduğunu biliyorsun."]), "kotu")
    }
    // tavla ve kömür gibi küçük teseller
    if (p.bayrak.tavla && sans(0.5)) p.umut += 1
  }

  function pasBulas(p, satir) {
    p.hast.pas = true
    p.saglik -= 8
    satir("Paslı bir sac elini kesti. Ertesi gün ateşin yükseldi: pas humması.", "kotu")
  }

  function yesilBulas(p) {
    if (p.yer === "kalan" || p.hast.yesil) return ""
    if (sans(0.15)) {
      p.hast.yesil = true
      p.onemli.push("Derisinde yeşil lekeler çıktı; bir daha geçmedi.")
      return " Birkaç hafta sonra kolunda yeşil lekeler belirdi. Geçmeyecekler."
    }
    return ""
  }

  // ilaç ve tedavi: pas humması ve lağım ateşi iyileşebilir
  function tedavi(p, olasilik) {
    const iyilesen = []
    for (const k of ["pas", "lagim"]) if (p.hast[k] && sans(olasilik)) {
      delete p.hast[k]
      iyilesen.push(HASTALIK_AD[k])
    }
    return iyilesen.length ? ` ${buyukHarf(iyilesen.join(" ve "))} geçti.` : ""
  }

  function durum(p) {
    const l = Object.keys(p.hast).map((k) => HASTALIK_AD[k])
    if (p.hapis > 0) l.unshift(`Zindanda · ${p.hapis} yıl kaldı`)
    if (p.yolculuk) l.unshift(`Yolculukta · ${YERLER[p.yer].ad}`)
    if (p.cete) l.push(`${CETE[p.cete].ad} · ${RUTBE[p.ceteRutbe]}`)
    if (p.harac && !p.cete) l.push(`${CETE[p.harac].ad} çetesine haraç ödüyor`)
    return l
  }

  /* ── Zindan ─────────────────────────────────────────────── */
  function hapseAt(p, yil, neden) {
    p.hapis = yil
    p.hapisToplam = (p.hapisToplam || 0) + yil
    p.sicil = Math.max(p.sicil, 2)
    if (p.meslek && !p.numara && !["soylu", "konsey"].includes(p.meslek)) p.meslek = "yok"
    if (p.bayrak.oda) p.bayrak.oda = false
    if (p.meslek === "yok" && p.yerEski) {
      p.yer = p.yerEski
      p.yerEski = null
    }
    p.onemli.push(`${p.yas} yaşında ${neden} Zindan'a atıldı; ${yil} yıl yattı.`)
    return ` Seni Zindan'a attılar. ${yil} yıl yatacaksın.`
  }

  const ZINDAN_OLAY = [
    () => "Hücrede on iki kişiydiniz; yalnızca altı yatak vardı.",
    () => "Gardiyan ekmeği yere attı ve kimin önce kapacağını seyretti.",
    () => "Hücre arkadaşın bir gece öksürerek öldü. Sabah yerine bir başkasını getirdiler.",
    () => "Zindanın duvarına çentik atarak günleri saydın.",
    () => "Haftada bir yarım saat avluda güneş gördün.",
    () => "Bir keşiş zindana gelip hastalara ilaç dağıttı. Gardiyanlar ona dokunmadı.",
    () => "Mahallenden bir tanıdık da içeri düştü. Seni görünce başını öne eğdi.",
    (p) => {
      const z = aileTum(p).filter((k) => k.sag && k.yas >= 14 && k.yakinlik >= 40)
      if (!z.length) return "Ziyaret gününde kimse gelmedi."
      const k = sec(z)
      k.yakinlik = kel(k.yakinlik + 5, 0, 100)
      p.umut += 3
      return `Ziyaret gününde ${akrabaAd(p, k).toLocaleLowerCase("tr")} ${k.ad} geldi. Parmaklığın arkasından el ele tutuştunuz.`
    },
  ]

  const ZINDAN_SECIM = [
    {
      id: "z_rusvet",
      metin: (p) => `Bir gardiyan kulağına eğildi: "20 lira ver, kayıtlarda adının yanına 'salıverildi' yazayım." Cebinde ${p.lira} lira var.`,
      secenek: [
        ["Öde", (p) => { if (p.lira < 20) return ["O kadar paran yoktu. Gardiyan güldü ve gitti.", "kotu"]; p.lira -= 20; if (sans(0.7)) { p.hapis = 0; return ["Ertesi sabah kapı açıldı. Kimse bir şey sormadı.", "iyi"] } return ["Parayı aldı ve bir daha görünmedi.", "kotu"] }],
        ["Ödeme", () => "Gardiyan omuz silkip yürüdü."],
      ],
    },
    {
      id: "z_kacis",
      metin: "Hücre arkadaşın bir kaçış planı fısıldadı: kanalizasyon ızgarası gevşemiş. \"Bu gece. Sen de geliyor musun?\"",
      secenek: [
        ["Kaç", (p) => { if (sans(0.4)) { p.hapis = 0; p.sicil++; p.bayrak.firari = true; p.onemli.push("Zindan'dan kaçtı."); return ["Izgarayı söktünüz ve lağıma indiniz. Sabah mahallendeydin; adın artık firari listesinde.", "donum"] } p.hapis += 2; p.saglik -= 10; return ["Yakalandınız. Dövdüler ve cezana iki yıl eklediler.", "kotu"] }],
        ["Kalma, kaçma", () => "Kalmayı seçtin. Sabah hücre arkadaşının yatağı boştu; ondan bir daha haber alınmadı."],
      ],
    },
  ]

  function zindanYili(p, yasBas) {
    const satirlar = []
    const satir = (metin, tur) => satirlar.push({ metin, tur: tur || "" })
    yaslan(p)
    hastalikYil(p, satir)
    aile(p, satir)
    satir(sec(ZINDAN_OLAY)(p))
    p.saglik -= rnd(1, 4)
    p.hapis--
    p.lira = Math.max(0, Math.round(p.lira))
    kelle(p)
    if (sans(olumOlasiligi(p, yasBas))) {
      oldur(p)
      satir(p.olumMetni, "olum")
      return { satirlar, secim: null, olu: true }
    }
    if (p.hapis <= 0) {
      p.hapis = 0
      p.sicil = Math.max(0, p.sicil - 1)
      satir("Zindan'dan çıktın. Dışarıdaki hava içeridekinden temiz değildi ama dışarıdaydın.", "donum")
      return { satirlar, secim: null, olu: false }
    }
    let secim = null
    if (sans(0.35)) {
      const s = sec(ZINDAN_SECIM)
      secim = { id: s.id, metin: typeof s.metin === "function" ? s.metin(p) : s.metin, secenekler: s.secenek.map((o) => o[0]) }
    }
    return { satirlar, secim, olu: false }
  }

  function yakalanmaKontrol(p, satir) {
    if (p.hapis > 0 || p.yer === "kalan" || p.yas < 14) return false
    if ((p.sicil >= 4 && sans(0.15 * (p.inanc === "inançsız" ? 0.7 : 1))) || (p.sicil === 3 && sans(0.05)) || (p.bayrak.firari && sans(0.1))) {
      const yil = rnd(1, Math.min(5, p.sicil))
      satir("Bir gece kapını çaldılar. Sicilin yeterince kirlenmişti." + hapseAt(p, yil, "sicili yüzünden"), "kotu")
      p.bayrak.firari = false
      return true
    }
    return false
  }

  /* ── yeni meslekler ─────────────────────────────────────── */
  Object.assign(MESLEK, {
    hankatip: { ad: "Trakya hanında katip", fis: 0, lira: 20, ciger: 0.5 },
    hanhamal: { ad: "Trakya hanında sözleşmeli hamal", fis: 0, lira: 12, kaza: 0.008, ciger: 1 },
    hastabakici: { ad: "manastırda hastabakıcı", fis: 0, lira: 6, ciger: 0.6 },
    dalgic: { ad: "batık mahallede dalgıç", fis: 0, lira: 22, kaza: 0.014, ciger: 1.4 },
    dovuscu: { ad: "dövüş çukurlarında dövüşçü", fis: 0, lira: 26, siddet: 0.02, ciger: 1 },
    gardiyan: { ad: "Zindan gardiyanı", fis: 150, lira: 3, siddet: 0.004, ciger: 1, kayitli: true },
    tezgahci: { ad: "köprü pazarında tezgâhçı", fis: 0, lira: 14, ciger: 1 },
  })
  Object.assign(ISLER, {
    hankatip: { k: (p) => (!altS(p) ? "Han Alt Şehir'in iskelesinde." : !p.okur ? "Okuma yazma bilmek gerek." : p.yas < 16 ? "16 yaşından küçüksün." : null), a: () => 0.4 },
    hanhamal: { k: (p) => (!altS(p) ? "Han Alt Şehir'in iskelesinde." : null), a: () => 0.7 },
    hastabakici: { k: (p) => (p.yer === "kalan" ? "Manastır Kalanlar'ı içeri almaz." : p.yas < 15 ? "15 yaşından küçüksün." : null), a: () => 0.8 },
    dalgic: { k: (p) => (!altS(p) ? "Batık mahalle Alt Şehir'de." : p.yas < 16 ? "16 yaşından küçüksün." : p.saglik < 40 ? "Dalmak için sağlığın yetmez." : null), a: () => 0.6 },
    dovuscu: { k: (p) => (!altS(p) ? "Dövüş çukurları Alt Şehir'de." : p.yas < 16 || p.yas > 40 ? "16 ile 40 yaş arasını alırlar." : p.saglik < 50 ? "Bu bedenle ringe çıkamazsın." : null), a: (p) => (p.huy === "ofkeli" ? 0.7 : 0.5) },
    gardiyan: { k: (p) => (!altS(p) ? "Zindan Alt Şehir'de." : p.sicil > 0 ? "Sicilinin temiz olması gerek." : p.yas < 18 ? "18 yaşından küçüksün." : null), a: () => 0.5 },
    tezgahci: { k: (p) => (!altS(p) ? "Köprü pazarı Alt Şehir'de." : p.lira < 15 ? "Bir tezgâh için 15 Koloni Lirası gerek." : null), a: () => 1 },
  })

  /* ── yeni etkinlikler ───────────────────────────────────── */
  function dovus(p, odul) {
    const kazan = 0.35 + (p.saglik - 50) / 200 + (p.huy === "ofkeli" ? 0.1 : 0) + (p.bayrak.bicak ? 0.05 : 0) + (p.meslek === "dovuscu" ? 0.15 : 0)
    if (sans(0.05)) return ["Dövüşün ortasında Nizam baskın yaptı." + hapseAt(p, 1, "dövüş çukurunda yakalandığı için"), "kotu"]
    if (sans(kazan)) {
      p.lira += odul
      p.umut += 4
      return [`Rakibini üçüncü rauntta yere serdin. Çukurun sahibi eline ${odul} Koloni Lirası tutuşturdu.`, "iyi"]
    }
    p.saglik -= rnd(8, 25)
    return [sec(["Rakibin seni ilk rauntta yere serdi. Kaburgaların günlerce sızladı.", "Kaşın yarıldı, bir dişin kırıldı. Kalabalık senin için değil, rakibin için bağırıyordu."]), "kotu"]
  }

  ETKINLIK.push(
    { id: "koprugecesi", ad: "Köprü Gecesi'ne git", bilgi: "ölenleri anmak · umut", k: (p) => (p.yer === "kalan" ? "Kalanlar köprüye çıkamaz." : p.yas < 6 ? "Henüz çok küçüksün." : null), f: (p) => { p.umut += rnd(4, 8); const olu = aileTum(p).filter((k) => !k.sag); if (olu.length) { const k = sec(olu); return [`Köprünün üstünde ${k.ad} için bir fener yaktın. Yüzlerce fener suya yansıyordu.`, "iyi"] } return ["Köprünün üstü fenerle doldu. Kimin için yakıldıklarını bilmediğin fenerlerin arasında yürüdün.", "iyi"] } },
    { id: "dovus", ad: "Dövüş çukurunda dövüş", bilgi: "para · sakatlık", k: (p) => (!altS(p) ? "Dövüş çukurları Alt Şehir'de." : p.yas < 16 || p.yas > 45 ? "16 ile 45 yaş arası olmalısın." : p.saglik < 30 ? "Bu bedenle dövüşemezsin." : null), f: (p) => dovus(p, rnd(10, 40)) },
    { id: "bahis", ad: "Dövüş çukurunda bahse gir", bilgi: "en çok 10 lira", k: (p) => (!altS(p) ? "Dövüş çukurları Alt Şehir'de." : p.yas < 16 ? "16 yaşından küçüklere bahis yok." : p.lira < 5 ? "En az 5 Koloni Lirası gerek." : null), f: (p) => { const k = Math.min(p.lira, 10); if (sans(0.03)) return ["Bahis masasına baskın yapıldı." + hapseAt(p, 1, "kumar oynarken yakalandığı için"), "kotu"]; if (sans(0.45)) { p.lira += k; return [`Doğru adama oynadın. ${k} liran ${k * 2} lira oldu.`, "iyi"] } p.lira -= k; return [`Oynadığın adam ikinci rauntta yere düştü. ${k} liran gitti.`, "kotu"] } },
    { id: "dal", ad: "Batık mahallede dal", bilgi: "eski dünya eşyası · boğulma", k: (p) => (!altS(p) ? "Batık mahalle Alt Şehir'de." : p.yas < 16 || p.yas > 50 ? "16 ile 50 yaş arası olmalısın." : p.saglik < 35 ? "Dalmak için sağlığın yetmez." : null), f: (p) => { const r = R(); const usta = p.meslek === "dalgic" ? 0.15 : 0; if (r < 0.12 - usta / 2) { p.saglik -= rnd(8, 15); return ["Bir pencere çerçevesine takıldın. Yukarı çıktığında ciğerlerin yanıyordu.", "kotu"] } if (r < 0.2) { p.hast.lagim = true; p.saglik -= 8; return ["Batık sokakların suyu lağımla karışmış. Ertesi hafta lağım ateşiyle yattın.", "kotu"] } if (r < 0.32 + usta) { p.umut += 8; p.lira += rnd(15, 35); return [sec(["Su altındaki bir evde sağlam bir duvar saati buldun. Köprü pazarında iyi para etti.", "Eski dünyadan kalma bir fotoğraf albümü çıkardın. Gülümseyen, maskesiz insanlar. Albümü satmadın, ama yanındaki gümüş çatalları sattın."]), "iyi"] } if (r < 0.75 + usta) { const l = rnd(5, 20); p.lira += l; return `Bir çuval paslı ama işe yarar eşya çıkardın. Köprü pazarında ${l} lira etti.` } return "Bütün gün daldın ve eli boş çıktın." } },
    { id: "hurdatepe", ad: "Hurda tepesinde kazı yap", bilgi: "biraz para · pas, çete", k: (p) => (!(altS(p) || p.yer === "koy") ? "Hurda tepesi Alt Şehir'in kenarında." : p.yas < 10 ? "Henüz çok küçüksün." : null), f: (p) => { const r = R(); if (r < 0.08) { const l = []; pasBulas(p, (m) => l.push(m)); return [l[0], "kotu"] } if (r < 0.16) { p.saglik -= 8; return ["Tepenin çetesi seni kendi bölgelerinde yakaladı. Dövüp eli boş gönderdiler.", "kotu"] } if (r < 0.19) { const l = rnd(30, 60); p.lira += l; return [`Çöpün altından eski dünyadan kalma, hâlâ çalışan bir el feneri çıktı. Trakya hanındaki bir tüccar ${l} lira verdi.`, "iyi"] } const l = rnd(2, 12); p.lira += l; return `Bütün gün tel, bakır ve cam topladın. ${l} lira etti.` } },
    { id: "manastir", ad: "Manastıra git", bilgi: "sağlık · pas ve lağım ateşine iyi gelir", k: (p) => (p.yer === "kalan" ? "Manastır Kalanlar'ı içeri almaz." : p.yas < 3 ? "Henüz çok küçüksün." : null), f: (p) => { p.saglik += 6; p.umut += p.inanc === "Hristiyan" ? 6 : 3; const t = tedavi(p, p.inanc === "Hristiyan" ? 0.7 : 0.5); return [`Kuzeyli keşişler kimin neye inandığını sormadan seni muayene etti ve şifalı ot verdi.${t}`, "iyi"] } },
    { id: "hacilar", ad: "Bekleyen hacılarla konuş", bilgi: "umut · başka dünyalar", k: (p) => (p.yer === "kalan" ? "Hacılar lağıma inmez." : p.yas < 8 ? "Henüz çok küçüksün." : null), f: (p) => { p.umut += 2; return sec(["Kuzeyden gelen yaşlı bir hacı, köyündeki karlı kışları anlattı. Kar hiç görmedin.", "Hacılar dört yıldır iskelede bekliyor. Nizam geçmelerine izin verecek mi, kimse bilmiyor.", "Bir hacı sana ekmeğinin yarısını verdi ve senin için dua etti.", "Hacıların çocuklarıyla iskelede taş sektirdin. Dillerini anlamıyordun ama gülmek aynıydı."]) } },
  )

  /* ── yeni Pazar ürünleri ────────────────────────────────── */
  PAZAR.push(
    { id: "surup", ad: "Sarı öksürük şurubu", fiyat: 5, bilgi: "hafifletir, iyileştirmez", k: (p) => (!p.hast.sari ? "Sarı öksürüğün yok." : null), f: (p) => { p.ciger += 4; p.saglik += 3; return "Acı, koyu bir şurup. Birkaç hafta rahat nefes aldın." } },
    { id: "merhem", ad: "Keşişlerin pas merhemi", fiyat: 7, bilgi: "pas hummasına iyi gelir", k: (p) => (!p.hast.pas ? "Pas humman yok." : null), f: (p) => { if (sans(0.7)) { delete p.hast.pas; return ["Merhemi yarana sürdün. Ateşin üç günde düştü; pas humması geçti.", "iyi"] } return ["Merhem işe yaramadı. Ateşin düşmedi.", "kotu"] } },
    { id: "su", ad: "Bir yıllık temiz su", fiyat: 3, bilgi: "lağım ateşine karşı korur", k: (p) => (p.suYil > p.yil ? "Bu yılın suyunu zaten aldın." : null), f: (p) => { p.suYil = p.yil + 1; return "Sakaya bir yıllık temiz su ısmarladın. Bidonlar her hafta kapına gelecek." } },
    { id: "komur", ad: "Bir kışlık kömür", fiyat: 3, bilgi: "kış daha az vurur", k: lagimdaPazarYok, f: (p) => { p.komurYil = p.yil + 1; p.saglik += 3; return "Bir kışlık kömürü odanın köşesine yığdın. Bu kış soba hiç sönmeyecek." } },
    { id: "bot", ad: "Trakya hanından ısmarlama bot", fiyat: 15, tek: "bot", bilgi: "iş kazalarına karşı biraz korur", k: lagimdaPazarYok, f: (p) => { p.bayrak.bot = true; return ["Hanın kunduracısı ayağının ölçüsünü aldı. İki ay sonra ömür boyu dayanacak bir çift bot geldi.", "iyi"] } },
    { id: "bicak", ad: "Sustalı bıçak", fiyat: 5, tek: "bicak", bilgi: "sokakta ve dövüşte işe yarar", k: (p) => lagimdaPazarYok(p) || null, f: (p) => { p.bayrak.bicak = true; return "Köprü pazarından bir sustalı aldın. Ceketinin iç cebinde duruyor." } },
    { id: "sandik", ad: "Kilitli sandık", fiyat: 6, tek: "sandik", bilgi: "hırsızlara karşı", k: lagimdaPazarYok, f: (p) => { p.bayrak.sandik = true; return "Demir köşeli, kilitli bir sandık aldın. Paranı artık yastığının altında saklamıyorsun." } },
    { id: "tavla", ad: "Tavla takımı", fiyat: 4, tek: "tavla", bilgi: "akşamları umut", k: lagimdaPazarYok, f: (p) => { p.bayrak.tavla = true; p.umut += 3; return "Köprü pazarında kemik pullu eski bir tavla buldun. Akşamları avluda oynuyorsunuz." } },
    { id: "oyuncak", ad: "Çocuğuna oyuncak", fiyat: 2, bilgi: "küçük bir çocuğunla yakınlık", k: (p) => (!p.cocuklar.some((c) => c.sag && c.yas < 12) ? "Küçük bir çocuğun yok." : null), f: (p) => { const c = sec(p.cocuklar.filter((x) => x.sag && x.yas < 12)); c.yakinlik = kel(c.yakinlik + 12, 0, 100); return [`${c.ad} için teneke bir asker aldın. Bütün gün elinden bırakmadı.`, "iyi"] } },
    { id: "yuzuk", ad: "Eşine yüzük", fiyat: 15, bilgi: "eşinle yakınlık", k: (p) => (!(p.es && p.es.sag) ? "Evli değilsin." : null), f: (p) => { p.es.yakinlik = kel(p.es.yakinlik + 20, 0, 100); p.umut += 3; return [`${p.es.ad} için batık mahalleden çıkarılmış ince bir yüzük aldın. Parmağından hiç çıkarmadı.`, "iyi"] } },
    { id: "kutsalsu", ad: "Hacılardan kutsal su", fiyat: 2, bilgi: "umut", k: lagimdaPazarYok, f: (p) => { p.umut += p.inanc === "Hristiyan" ? 5 : 2; return "Hacıların getirdiği küçük bir şişe kutsal su aldın. Kapının üstüne koydun." } },
    { id: "saat", ad: "Batık mahalleden eski bir saat", fiyat: 25, tek: "saat", bilgi: "umut · tereke", k: lagimdaPazarYok, f: (p) => { p.bayrak.saat = true; p.umut += 8; p.onemli.push("Eski dünyadan kalma bir cep saati aldı."); return ["Uzun Karanlık'tan önce yapılmış, hâlâ çalışan bir cep saati. Tıkırtısını dinleyerek uyuyorsun.", "iyi"] } },
    { id: "evlilikhediye", ad: "Bir kardeşine düğün hediyesi", fiyat: 8, bilgi: "evli bir kardeşle yakınlık", k: (p) => (!p.kardesler.some((k) => k.sag && k.evli && k.yas >= 0) ? "Evli bir kardeşin yok." : null), f: (p) => { const k = sec(p.kardesler.filter((x) => x.sag && x.evli && x.yas >= 0)); k.yakinlik = kel(k.yakinlik + 15, 0, 100); return [`${k.ad} için bir takım tabak aldın. Yıllarca o tabaklardan yediler.`, "iyi"] } },
  )

  /* ── yeni olaylar ───────────────────────────────────────── */
  const olenAkraba = (p) => aileTum(p).filter((k) => !k.sag && k.olumYil >= p.yil - 1)
  OLAYLAR.push(
    { id: "koprugecesi_o", yas: [6, 95], w: 1.4, ara: 3, kosul: (p) => p.yer !== "kalan", f: (p) => { const o = olenAkraba(p); if (o.length) { p.umut += 2; return `Köprü Gecesi'nde ${o[0].ad} için de bir fener yakıldı. Fenerler suya karışıp kayboldu.` } return sec(["Köprü Gecesi geldi. Paslı köprünün üstü boydan boya fenerle doldu.", "Köprü Gecesi'nde Nizam yasakları kaldırdı. Gece boyunca kimse kimseye numarasını sormadı."]) } },
    { id: "feneralayi_o", yas: [5, 95], w: 1.2, ara: 4, kosul: (p) => p.yer !== "kalan", f: (p) => (p.numara ? "Fener alayında sen de yürüdün. Kaldırımdan kimse alkışlamadı." : p.yer === "hisar" ? "Fener alayını evinizin balkonundan izledin. Aşağıda, kaldırıma dizilmiş Alt Şehirliler sessizdi." : "Fener alayı için seni de kaldırıma dizdiler. Neferler Hisar'a doğru geçerken alkışlamak zorundaydın.") },
    { id: "dovusdedikodu", yas: [12, 70], w: 1, kosul: altSehir, f: () => sec(["Dövüş çukurlarında bir adam bir gecede üç rakibini yendi. Bütün mahalle onu konuşuyor.", "Dövüş çukurunda on altı yaşında bir çocuk öldü. Çukur bir hafta kapalı kaldı, sonra yeniden açıldı."]) },
    { id: "batikbulgu", yas: [8, 90], w: 1, kosul: altSehir, f: () => sec(["Bir dalgıç batık mahalleden eski dünyaya ait sağlam bir piyano çıkardı. Kimse çalmayı bilmiyordu.", "Batık mahallede bir dalgıç boğuldu. Cesedi üç gün sonra köprünün ayağına takıldı."]) },
    { id: "hurdacete", yas: [10, 80], w: 1, kosul: altSehir, f: () => "Hurda tepesinde iki çete çatıştı. Tepe günlerce yandı; duman bütün sektörü kapladı." },
    { id: "zindankomsu", yas: [8, 95], w: 1.2, kosul: altSehir, f: () => sec(["Komşunu gece Zindan'a götürdüler. Neden götürüldüğünü kimse sormadı.", "Zindan'dan sekiz yıl sonra çıkan bir adam mahalleye döndü. Evini başkası tutmuştu."]) },
    { id: "hanmektup", yas: [12, 90], w: 0.8, kosul: altSehir, f: () => "Trakya hanının önünde mühürlü sandıklar sıralandı. Taşıyan hamallar içlerinde ne olduğunu bilmiyordu." },
    { id: "hacibekle", yas: [8, 95], w: 1, kosul: (p) => p.yer !== "kalan", f: () => sec(["İskelede kuzeyden gelmiş bir hacı kafilesi bekliyor. Kimisi üç yıldır burada.", "Nizam bekleyen hacılardan yeni bir geçiş vergisi istedi. Hacılar iskelede bütün gece ilahi söyledi."]) },
    { id: "kopruyangin", yas: [8, 95], w: 0.6, kosul: altSehir, f: () => "Köprü pazarında yangın çıktı ve pazarın yarısı kül oldu. Bir hafta sonra yeniden kurulmuştu." },
    { id: "hirsiz", yas: [16, 95], w: (p) => (p.lira > 10 && p.yer !== "kalan" && p.yer !== "hisar" ? 1.5 : 0), f: (p) => { if (p.bayrak.sandik) return "Gece odana hırsız girdi ama kilitli sandığını açamadı."; const k = Math.round(p.lira * 0.3); p.lira -= k; return [`Gece odana hırsız girdi. Yastığının altındaki ${k} lira gitti.`, "kotu"] } },
    { id: "asitfirtina", yas: [3, 95], w: 1, kosul: (p) => p.yer !== "hisar" && p.yer !== "kalan", f: (p) => { p.ciger -= 3; return "Üç gün süren bir asit fırtınası çatıları deldi. Herkes evlerine kapandı." } },
    { id: "subaskini", yas: [0, 95], w: 0.8, kosul: altSehir, f: (p) => { p.saglik -= 2; return "Boğaz taştı. Alt sokaklar haftalarca diz boyu suyun altında kaldı." } },
    { id: "ekmekzam", yas: [10, 95], w: 1, kosul: (p) => p.yer !== "kalan", f: () => "Nizam erzak payını yine kıstı. Fişle alınan ekmek yarıya indi." },
    { id: "komsuyardim", yas: [8, 95], w: 1, kosul: (p) => altSehir(p) || p.yer === "koy", f: (p) => { p.umut += 3; return sec(["Komşun kışın kapına bir torba kömür bıraktı. Kim olduğunu söylemedi.", "Hastalandığında yan odadaki kadın sana her gün çorba getirdi."]) } },
    { id: "komsubebek", yas: [6, 95], w: 0.8, f: () => "Yan odada bir bebek doğdu. Bütün gece ağladı, bütün avlu sevindi." },
    { id: "cenaze", yas: [8, 95], w: 1, kosul: altSehir, f: () => "Sokağın ucundaki yaşlı kadın öldü. Cenazesine bütün mahalle çıktı." },
    { id: "nizamduyuru", yas: [10, 95], w: 0.8, kosul: (p) => p.yer !== "kalan", f: () => sec(["Nizam yeni bir duyuru astı: gece sokağa çıkma yasağı bir saat erkene alındı.", "Duvarlara yeni duyurular asıldı: firari neferlerin numaraları ve ödülleri."]) },
    { id: "tasinma", yas: [16, 95], w: 0.5, kosul: (p) => altSehir(p) && !p.bayrak.oda, f: (p) => { p.umut -= 2; return "Ev sahibi kirayı artırdı. Ailen daha küçük, daha nemli bir odaya taşındı." } },
    { id: "kardesbebek", yas: [14, 90], w: 1.2, kosul: (p) => p.kardesler.some((k) => k.sag && k.evli && k.yas >= 18), f: (p) => { const k = sec(p.kardesler.filter((x) => x.sag && x.evli && x.yas >= 18)); return [`${akrabaAd(p, k)} ${k.ad} ${k.cins === "e" ? "baba" : "anne"} oldu.`, "iyi"] } },
    { id: "kardeshasta", yas: [14, 90], w: 0.8, kosul: (p) => p.kardesler.some((k) => k.sag && k.yas >= 20), f: (p) => { const k = sec(p.kardesler.filter((x) => x.sag && x.yas >= 20)); return `${akrabaAd(p, k)} ${k.ad} sarı öksürüğe yakalandı. Artık merdivenleri soluklanarak çıkıyor.` } },
    { id: "kardesis", yas: [14, 90], w: 0.8, kosul: (p) => p.kardesler.some((k) => k.sag && k.yas >= 16 && k.meslek && k.meslek !== "nefer"), f: (p) => { const k = sec(p.kardesler.filter((x) => x.sag && x.yas >= 16 && x.meslek && x.meslek !== "nefer")); k.meslek = sec(["hamal", "fabrika", "seyyar", "hanhamal", "tezgahci", "yok"]); return k.meslek === "yok" ? `${akrabaAd(p, k)} ${k.ad} işini kaybetti.` : `${akrabaAd(p, k)} ${k.ad} yeni bir işe girdi: ${MESLEK[k.meslek].ad}.` } },
    { id: "anneyasli", yas: [10, 90], w: 1, kosul: (p) => [p.anne, p.baba].some((k) => k.sag && k.yas >= 58), f: (p) => { const k = sec([p.anne, p.baba].filter((x) => x.sag && x.yas >= 58)); return `${akrabaAd(p, k)} ${k.ad} artık merdivenleri tek başına çıkamıyor.` } },
    { id: "esisizi", yas: [18, 70], w: 1, kosul: (p) => p.es && p.es.sag && p.es.meslek && p.es.meslek !== "yok", f: (p) => { p.es.meslek = "yok"; p.umut -= 3; return [`Eşin ${p.es.ad} işini kaybetti.`, "kotu"] } },
    { id: "esisbuldu", yas: [18, 70], w: 1, kosul: (p) => p.es && p.es.sag && (!p.es.meslek || p.es.meslek === "yok"), f: (p) => { p.es.meslek = sec(["seyyar", "fabrika", "eskici", "hastabakici", "tezgahci"]); return [`Eşin ${p.es.ad} iş buldu: ${MESLEK[p.es.meslek].ad}.`, "iyi"] } },
    { id: "cocukokul", yas: [20, 70], w: 1.2, kosul: (p) => p.cocuklar.some((c) => c.sag && c.yas >= 7 && c.yas <= 9 && !c.okul), f: (p) => { const c = p.cocuklar.find((x) => x.sag && x.yas >= 7 && x.yas <= 9 && !x.okul); c.okul = true; return `${akrabaAd(p, c)} ${c.ad} mahalle okuluna başladı. Kitabını senden saklıyor, önce kendisi okumak istiyor.` } },
    { id: "cocukmaas", yas: [28, 80], w: 1.2, kosul: (p) => p.cocuklar.some((c) => c.sag && c.yas >= 14 && c.yas <= 17 && c.meslek && c.meslek !== "yok"), f: (p) => { const c = p.cocuklar.find((x) => x.sag && x.yas >= 14 && x.yas <= 17 && x.meslek && x.meslek !== "yok"); p.lira += 3; return [`${akrabaAd(p, c)} ${c.ad} ilk kazancını eve getirdi ve masaya bıraktı.`, "iyi"] } },
    { id: "kalan2", yas: [8, 90], w: 3, kosul: (p) => p.yer === "kalan", f: () => sec(["Yukarıdan inen bir dalgıç tünellerde kaybolmuştu. Onu mazgala kadar geri götürdünüz; teşekkür etmeden kaçtı.", "Yaşlılar bütün gece ölülerin adlarını sırayla saydı. Sayma üç gün sürdü.", "Yosun yataklarından birini bir taşkın sürükleyip götürdü.", "Bir Kalan çocuğu mazgaldan yukarıya çıkıp bir gün sonra döndü. Yukarıda kimse onu fark etmemiş.", "Köprü Gecesi'nde yukarıdaki fenerlerin ışığı mazgallardan aşağı süzüldü. Kalanlar da kendi ölülerini andı."]) },
    { id: "koy2", yas: [6, 90], w: 3, kosul: (p) => p.yer === "koy", f: () => sec(["Köye kuzeyli hacılar uğradı. Bir gece ambarda yatıp sabah yola çıktılar.", "Köyün kuyusunun suyu acılaştı. Artık su şehirden taşınıyor.", "Köyde bir düğün oldu; üç gün davul çalındı.", "Nizam köyden altı genci tersanede çalışmaya götürdü.", "Kıyıya eski dünyadan kalma bir tekne enkazı vurdu. Bütün köy içini yağmaladı."]) },
    { id: "hisar2", yas: [10, 90], w: 3, kosul: (p) => p.yer === "hisar", f: () => sec(["Bir Mühürler ailesi iflas etti. Evini bir Kılıçlar subayı satın aldı.", "Hisar'ın su depolarından biri çatladı. Bir hafta Alt Şehir'den su taşındı.", "Trakya hanından gelen bir tüccar ailene ipek getirdi.", "Yüksek Konsey'de bir subay Reis'e itiraz etti. Ertesi hafta subayın adı kayıtlardan silinmişti.", "Bir ziyafette Ege'den gelen bir konuk Koloni Lirası'nın yeni basımını gösterdi."]) },
    { id: "nefer2", yas: [14, 55], w: 2, kosul: (p) => p.numara && ["nefer", "cavus"].includes(p.meslek), f: () => sec(["Zindan nöbetine verildin. İçeridekilerin çoğu senin mahallendendi.", "Dövüş çukuruna baskın yaptınız. Kumarhanenin kasası tutanağa yarım yazıldı.", "Köprü Gecesi'nde nöbetteydin. Fenerleri uzaktan izledin.", "Batık mahallede bir cesedi sudan çıkarmak sana düştü."]) },
    { id: "cocuk2", yas: [5, 12], w: 3, kosul: (p) => altSehir(p), f: () => sec(["Hurda tepesinde teneke bir asker buldun. Yıllarca sakladın.", "Köprü pazarında kayboldun. Seni bir hacı bulup eve getirdi.", "Batık mahallenin kıyısında yüzmeyi öğrendin. Annen öğrenince seni bir hafta evden çıkarmadı.", "Fener alayında bir nefer sana söndürülmüş bir fener verdi.", "Arkadaşlarınla dövüş çukurunun kapısından içeri bakmaya çalıştınız. Kapıcı kulağını çekti."]) },
    { id: "genc2", yas: [16, 26], w: 2, kosul: (p) => altSehir(p), f: () => sec(["İlk kez lağım birası içtin. Sabah hiçbir şey hatırlamıyordun.", "Köprü Gecesi'nde biriyle tanıştın. Fenerler sönünce o da kayboldu.", "Arkadaşların dövüş çukurunda para kazandığını anlattı. Biri gözünü kaybetmişti.", "Trakya hanının katipleri sana okuma yazma bilip bilmediğini sordu."]) },
    { id: "yasli2", yas: [55, 99], w: 1.5, f: () => sec(["Köprü Gecesi'nde yaktığın fenerlerin sayısı her yıl artıyor.", "Artık torunları dinliyorsun; onların dünyası seninkinden farklı.", "Mahallede seni çocukluğundan tanıyan kimse kalmadı.", "Ellerin titremeye başladı. Çay bardağını iki elle tutuyorsun."]) },
  )

  /* ── yeni kararlar ──────────────────────────────────────── */
  const yetiskinKardes = (p) => p.kardesler.filter((k) => k.sag && k.yas >= 18 && k.yakinlik >= 20)
  SECIMLER.push(
    {
      id: "kardesborc", yas: [18, 80], kosul: (p) => yetiskinKardes(p).length && p.lira >= 10 && p.yer !== "kalan",
      metin: (p) => { const k = yetiskinKardes(p)[0]; p.secimKisi = k.id; return `${akrabaAd(p, k)} ${k.ad} kapına geldi. Kira birikmiş, çocuklar aç. Senden 10 lira istiyor.` },
      secenek: [
        ["Ver", (p) => { const k = aileTum(p).find((x) => x.id === p.secimKisi); p.lira -= 10; k.yakinlik = kel(k.yakinlik + 15, 0, 100); if (sans(0.35)) { p.lira += 10; return [`${k.ad} parayı bir yıl sonra kuruşu kuruşuna geri getirdi.`, "iyi"] } return [`${k.ad} parayı aldı ve gözleri dolu dolu teşekkür etti.`, "iyi"] }],
        ["Verme", (p) => { const k = aileTum(p).find((x) => x.id === p.secimKisi); k.yakinlik = kel(k.yakinlik - 15, 0, 100); return [`${k.ad} bir şey demeden gitti. Uzun süre uğramadı.`, "kotu"] }],
      ],
    },
    {
      id: "ebeveynhasta", yas: [16, 70], kosul: (p) => [p.anne, p.baba].some((k) => k.sag && k.yas >= 50) && p.yer !== "kalan",
      metin: (p) => { const k = [p.anne, p.baba].filter((x) => x.sag && x.yas >= 50)[0]; p.secimKisi = k.id; return `${akrabaAd(p, k)} ${k.ad} ağır hastalandı. Revir ilaç için 12 lira istiyor. Cebinde ${p.lira} lira var.` },
      secenek: [
        ["Parayı bul ve öde", (p) => { const k = aileTum(p).find((x) => x.id === p.secimKisi); if (p.lira >= 12) { p.lira -= 12; k.yakinlik = kel(k.yakinlik + 20, 0, 100); return [`İlacı aldın. ${k.ad} bir ay sonra ayağa kalktı.`, "iyi"] } p.umut -= 4; if (sans(0.5)) { k.yakinlik = kel(k.yakinlik + 15, 0, 100); return [`Paran yetmedi; komşulardan topladın. ${k.ad} iyileşti, ama borcun var.`, "iyi"] } const l = []; akrabaOldu(p, k, (m) => l.push(m)); return [`Paranı topladın ama yetmedi. ${l[0]}`, "kotu"] }],
        ["Ödeyemem", (p) => { const k = aileTum(p).find((x) => x.id === p.secimKisi); k.yakinlik = kel(k.yakinlik - 10, 0, 100); if (sans(0.4)) { const l = []; akrabaOldu(p, k, (m) => l.push(m)); return [l[0], "kotu"] } return `${k.ad} ilaçsız atlattı. Ama sana bir daha eskisi gibi bakmadı.` }],
      ],
    },
    {
      id: "dovuscagri", yas: [16, 35], kosul: (p) => altSehir(p) && p.saglik >= 55 && p.meslek !== "dovuscu",
      metin: "Dövüş çukurunun sahibi seni pazarda durdurdu: \"Kolların sağlam. Bir dövüş, 30 lira. Kaybetsen de 5 lira veririm.\"",
      secenek: [
        ["Dövüş", (p) => { const r = dovus(p, 30); if (r[1] === "kotu" && !p.hapis) p.lira += 5; return r }],
        ["Reddet", () => "Adam omuz silkti: \"Fikrini değiştirirsen çukur hep orada.\""],
      ],
    },
    {
      id: "haciaile", yas: [20, 75], kosul: (p) => p.yer !== "kalan" && p.yer !== "hisar",
      metin: "Kuzeyli bir hacı ailesi kışı geçirecek bir yer arıyor. Karşılığında az bir para ve ekmeklerini paylaşmayı teklif ediyorlar.",
      secenek: [
        ["Evine al", (p) => { p.lira += 8; p.umut += 5; if (sans(0.12)) { p.hast.lagim = true; return ["Kışı birlikte geçirdiniz. Çocukları senden dilini öğrendi. Bahara doğru hepiniz lağım ateşine yakalandınız.", "kotu"] } return ["Kışı birlikte geçirdiniz. Giderken kapına tahta bir haç astılar.", "iyi"] }],
        ["Yer yok", () => "Kapıyı kapattın. Sabah iskelede onları yağmurun altında gördün."],
      ],
    },
    {
      id: "gizlimektup", yas: [16, 55], kosul: (p) => altSehir(p) && p.hapis === 0,
      metin: "Trakya hanında biri mühürlü bir mektup uzattı: \"Bunu Hisar'daki bir kapıya götür. 25 lira. Kimse açmayacak, sen de açmayacaksın.\"",
      secenek: [
        ["Götür", (p) => { if (sans(0.75)) { p.lira += 25; p.onemli.push("Trakya hanı için Hisar'a gizli bir mektup taşıdı."); return "Mektubu kapıdaki uşağa verdin. Kim olduğunu sormadılar, sen de sormadın. 25 lira cebinde." } return ["Geçiş kapısında üstünü aradılar ve mektubu buldular." + hapseAt(p, rnd(1, 3), "gizli bir mektup taşırken yakalandığı için"), "kotu"] }],
        ["Reddet", () => "Mektubu geri ittin. Adam gülümsedi; anlaşılan başka birini bulacaktı."],
      ],
    },
    {
      id: "batiksandik", yas: [16, 45], kosul: (p) => altSehir(p),
      metin: "Batık mahallede dalarken paslı bir sandık buldun. Kıyıda bir dalgıç seni gördü ve yarısını istiyor.",
      secenek: [
        ["Paylaş", (p) => { p.lira += 20; return "Sandığı birlikte açtınız: gümüş çatallar ve küflü bir ipek. Payına 20 lira düştü." }],
        ["Al ve kaç", (p) => { if (sans(0.6)) { p.lira += 40; return ["Sandığı sırtlayıp sokaklara daldın. Köprü pazarında 40 lira etti.", "iyi"] } p.saglik -= 15; return ["Dalgıç ve arkadaşları seni bir ara sokakta yakaladı. Sandık da gitti, iki dişin de.", "kotu"] }],
      ],
    },
    {
      id: "hurdaharac", yas: [15, 65], kosul: (p) => altSehir(p) && (p.meslek === "hurdaci" || p.olaylar["hurdacete"]),
      metin: "Hurda tepesinin çetesi yolunu kesti: \"Tepeye çıkmak beş lira. Ödemeyen tepede kazı yapamaz.\"",
      secenek: [
        ["Öde", (p) => { p.lira = Math.max(0, p.lira - 5); return "Beş lirayı verdin. Çetenin başı başını sallayıp yol verdi." }],
        ["Direnme", (p) => { if (sans(0.5)) { p.saglik -= 12; return ["Dört kişiydiler. Kaburgaların bir ay sızladı.", "kotu"] } p.umut += 4; return ["Geri adım atmadın. Çetenin başı güldü: \"İnatçıymışsın.\" Bir daha para istemediler.", "iyi"] }],
      ],
    },
    {
      id: "yetimal", yas: [25, 55], kosul: (p) => (altSehir(p) || p.yer === "koy") && p.evli && p.es && p.es.sag,
      metin: "Komşunun kızı ve kocası lağım ateşinden öldü. Küçük oğulları ortada kaldı. Kimse almazsa Nizam alacak.",
      secenek: [
        ["Evlat edin", (p) => { const c = kisiYap(p, "cocuk", "e", rnd(4, 9)); c.yakinlik = 50; c.evlatlik = true; p.cocuklar.push(c); p.umut += 6; p.onemli.push(`${c.ad} adında yetim bir çocuğu evlat edindi.`); return [`${c.ad} artık senin oğlun. İlk gece hiç konuşmadı, ikinci gece masaya oturdu.`, "iyi"] }],
        ["Yardımlaşma evine götür", () => "Çocuğu yardımlaşma evine götürdün. Giderken arkasına bakmadı."],
      ],
    },
    {
      id: "feneralkis", yas: [16, 70], kosul: (p) => altSehir(p) && !p.numara,
      metin: "Fener alayında neferler kalabalığı kaldırıma dizdi. Önünde duran subay herkesin alkışlamasını bekliyor.",
      secenek: [
        ["Alkışla", () => "Alkışladın. Avuçların kızarana kadar."],
        ["Islık çal", (p) => { p.umut += 5; p.sicil++; if (sans(0.15)) return ["Islığın kalabalığın içinden duyuldu. Subay parmağıyla seni gösterdi." + hapseAt(p, 1, "Fener alayında ıslık çaldığı için"), "kotu"]; return ["Bir ıslık, sonra bir tane daha. Subay kimin çaldığını bulamadı ama sicilinde bir kayıt açıldı.", "secim"] }],
      ],
    },
    {
      id: "manastirgonullu", yas: [16, 60], kosul: (p) => p.yer !== "kalan",
      metin: "Mahallede lağım ateşi salgını var. Manastırdaki keşişler hastalara bakacak gönüllü arıyor.",
      secenek: [
        ["Git", (p) => { p.umut += 8; p.onemli.push("Bir lağım ateşi salgınında manastırda gönüllü olarak hastalara baktı."); if (sans(0.25)) { p.hast.lagim = true; p.saglik -= 10; return ["Haftalarca hastalara su taşıdın. Sonunda sen de yatağa düştün.", "kotu"] } return ["Haftalarca hastalara su taşıdın. Keşişler adını dualarına kattı.", "iyi"] }],
        ["Gitme", () => "Kapını kapattın ve salgın geçene kadar dışarı çıkmadın."],
      ],
    },
    {
      id: "yesilsakla", yas: [12, 90], kosul: (p) => p.hast.yesil,
      metin: "Derindeki yeşil lekeler büyüyor. Pazarda insanlar senden uzak duruyor, iş verenler kollarına bakıyor.",
      secenek: [
        ["Uzun kollu giy, sakla", (p) => { p.umut -= 2; p.bayrak.sakla = true; return "Yazın da uzun kollu giyiyorsun artık. Kimse sormuyor, sen de anlatmıyorsun." }],
        ["Saklama", (p) => { p.umut += 4; return "Kollarını sıvadın. Bakan baksın. Pazarda bir Kalan çocuğu sana göz kırptı." }],
      ],
    },
    {
      id: "dalgicteklif", yas: [16, 40], kosul: (p) => altSehir(p) && p.meslek !== "dalgic" && p.saglik >= 45,
      metin: "Batık mahallede çalışan yaşlı bir dalgıç çırak arıyor: \"Nefesin uzunsa sana bu işi öğretirim. Para iyi, ama Boğaz bazen geri vermez.\"",
      secenek: [
        ["Çırak ol", (p) => { p.meslek = "dalgic"; p.onemli.push(`${p.yas} yaşında batık mahallede dalgıç oldu.`); return ["İlk gün iki dakika nefesini tuttun. Bir yıl sonra dört dakika tutuyordun.", "donum"] }],
        ["Reddet", () => "Yaşlı dalgıç başını salladı: \"Akıllısın.\""],
      ],
    },
  )

  /* ═══ Sürüm 4: envanter, çeteler, inanç, yolculuk, Hisar, açıklamalar ═══ */

  const BOGAZ = ["hisar", "A", "B", "C", "D", "koy", "gocmen", "kalan"]
  const yurtDisi = (p) => !BOGAZ.includes(p.yer)

  /* ── envanter ───────────────────────────────────────────── */
  // Kalıcı eşyalar bayraklarda durur; tüketilenler ve bulunanlar p.esya'da sayılır.
  const KALICI = {
    palto: { ad: "Kışlık palto", acik: "Kışın açlık ve soğuktan daha az etkilenirsin." },
    bot: { ad: "Ismarlama bot", acik: "İş kazalarında ölme ihtimalin biraz düşer." },
    bicak: { ad: "Sustalı bıçak", acik: "Sokak kavgalarında ve dövüş çukurunda işe yarar." },
    sandik: { ad: "Kilitli sandık", acik: "Hırsızlar paranı çalamaz." },
    tavla: { ad: "Tavla takımı", acik: "Akşamları oynarsın; umudun yavaş yavaş artar." },
    saat: { ad: "Eski dünyadan cep saati", acik: "Uzun Karanlık'tan önce yapılmış, hâlâ çalışıyor.", sat: 18 },
    evrak: { ad: "Sahte kayıt evrakı", acik: "Nizam'ın gözünde kayıtlı birisin." },
    portre: { ad: "Yağlıboya portren", acik: "Hisar'da bir ressama yaptırdın.", sat: 10 },
    kitaplik: { ad: "Kitap koleksiyonu", acik: "Uzun Karanlık'tan kalma kitaplar.", sat: 40 },
    konak: { ad: "Yenilenmiş konak", acik: "Hisar'daki evin baştan sona yenilendi." },
    dukkan: { ad: "Köprü pazarında dükkân", acik: "Her yıl 35 lira getirir.", sat: 250 },
    yardimevi: { ad: "Kurduğun yardımlaşma evi", acik: "Alt Şehir'de adınla anılan bir yardımlaşma evi." },
  }
  const TUKETIM = {
    filtre: { ad: "Gaz maskesi filtresi", acik: "Lağıma inerken filtren yarı yolda bitmez. Lağıma inince bir tane harcanır." },
    ilac: { ad: "Antibiyotik", acik: "Kullanınca Sağlık +12–20; pas humması ve lağım ateşini büyük ihtimalle iyileştirir.", kullan: (p) => { if (sans(0.12)) return ["İlaç sahte çıktı. Tebeşirle şekerden başka bir şey değildi.", "kotu"]; p.saglik += rnd(12, 20); return ["İlacı içtin. Ateşin düştü." + tedavi(p, 0.8), "iyi"] } },
    surup: { ad: "Sarı öksürük şurubu", acik: "Kullanınca Ciğer +4, Sağlık +3.", kullan: (p) => { p.ciger += 4; p.saglik += 3; return "Acı, koyu şurubu içtin. Birkaç hafta rahat nefes aldın." } },
    merhem: { ad: "Pas merhemi", acik: "Kullanınca pas hummasını %70 ihtimalle iyileştirir.", kullan: (p) => { if (!p.hast.pas) return ["Merhemi sürdün ama pas humman yoktu. Boşa gitti.", "sessiz"]; if (sans(0.7)) { delete p.hast.pas; return ["Merhemi yarana sürdün. Ateşin üç günde düştü; pas humması geçti.", "iyi"] } return ["Merhem işe yaramadı.", "kotu"] } },
    tutun: { ad: "Tütün paketi", acik: "İçince Umut +2, Ciğer −1.", kullan: (p) => { p.umut += 2; p.ciger -= 1; return "Bir sigara sardın. Rutubet kokusunu bastırmadı ama ellerin bir işle meşgul oldu." } },
    kutsalsu: { ad: "Kutsal su", acik: "Kullanınca Umut +2 (Hristiyansan +5).", kullan: (p) => { p.umut += p.inanc === "Hristiyan" ? 5 : 2; return "Kutsal suyla alnını ıslattın ve dua ettin." } },
    kitap: { ad: "Eski bir kitap", acik: "Okuyunca Umut +5. Okuma yazma bilmek gerekir.", kullan: (p) => { if (!p.okur) return ["Kitabı açtın ama okuyamadın. Okuma yazma öğrenmen gerek.", "sessiz"]; p.umut += 5; return sec(["Kapağı kopmuş kitabı bir gecede bitirdin. İçindeki dünyayı tanımıyorsun.", "Bir şiir kitabıydı. Yarısını anlamadın ama her gece okudun."]) } },
    muska: { ad: "Kamın muskası", acik: "Yanında taşıdığın sürece içini rahatlatır. Kullanınca Umut +4.", kullan: (p) => { p.umut += 4; return "Muskayı boynuna astın. Kam, Gök Tengri'nin seni gördüğünü söylemişti." } },
    sarap: { ad: "Trakya şarabı", acik: "İçince Umut +3.", kullan: (p) => { p.umut += 3; return "Trakya şarabını açtın. Lağım birasından sonra tadı başka bir dünyadandı." } },
    albüm: { ad: "Eski fotoğraf albümü", acik: "Batık mahalleden çıktı. Maskesiz, gülümseyen insanlar.", sat: 20 },
    fener: { ad: "Çalışan el feneri", acik: "Eski dünyadan kalma; Trakya hanındaki tüccarlar iyi para verir.", sat: 40 },
    catal: { ad: "Gümüş çatal takımı", acik: "Köprü pazarında satılabilir.", sat: 15 },
    sikke: { ad: "Eski Ege sikkesi", acik: "Koloni Lirası'ndan önce basılmış; koleksiyoncular arar.", sat: 25 },
    keçe: { ad: "Bozkır keçesi", acik: "Anadolu'dan getirdiğin kalın keçe. Kışın üstüne örtersin.", sat: 8 },
    hac: { ad: "Tahta haç", acik: "Kuzeyden getirdin.", sat: 3 },
  }

  function esyaEkle(p, id, n) {
    p.esya[id] = (p.esya[id] || 0) + (n || 1)
  }

  function envanter(p) {
    const l = []
    for (const id in KALICI) if (p.bayrak[id]) l.push({ id, ad: KALICI[id].ad, adet: 1, acik: KALICI[id].acik, kullan: false, sat: KALICI[id].sat || 0 })
    for (const id in p.esya) {
      const n = p.esya[id]
      if (!n) continue
      const T = TUKETIM[id]
      if (!T) continue
      l.push({ id, ad: T.ad, adet: n, acik: T.acik, kullan: !!T.kullan, sat: T.sat || 0 })
    }
    return l
  }

  function esyaKullan(p, id) {
    const T = TUKETIM[id]
    if (!T || !T.kullan || !p.esya[id]) return { metin: "Bu eşya sende yok.", tur: "sessiz" }
    if (p.hapis > 0) return { metin: "Zindanda eşyalarına el koydular.", tur: "sessiz" }
    p.esya[id]--
    const r = T.kullan(p)
    const [metin, tur] = Array.isArray(r) ? r : [r, "secim"]
    kelle(p)
    return { metin, tur }
  }

  function esyaSat(p, id) {
    if (p.hapis > 0) return { metin: "Zindanda bir şey satamazsın.", tur: "sessiz" }
    if (KALICI[id] && p.bayrak[id] && KALICI[id].sat) {
      p.bayrak[id] = false
      p.lira += KALICI[id].sat
      return { metin: `${KALICI[id].ad} için ${KALICI[id].sat} Koloni Lirası aldın.`, tur: "secim" }
    }
    const T = TUKETIM[id]
    if (T && T.sat && p.esya[id]) {
      p.esya[id]--
      p.lira += T.sat
      return { metin: `${T.ad} için ${T.sat} Koloni Lirası aldın.`, tur: "secim" }
    }
    return { metin: "Bunu satamazsın.", tur: "sessiz" }
  }

  // Pazar'da alınan ilaç, şurup, merhem, tütün, kutsal su ve kitap artık envantere gider
  for (const x of PAZAR) {
    if (["ilac", "surup", "merhem", "tutun", "kutsalsu", "kitap"].includes(x.id)) {
      const id = x.id
      x.coklu = true
      x.k = id === "surup" || id === "merhem" ? () => null : x.k
      x.f = (p) => { esyaEkle(p, id); return `${TUKETIM[id].ad} aldın. Eşyalar bölümünde duruyor; istediğin zaman kullanabilirsin.` }
    }
    if (x.id === "filtre") {
      x.k = (p) => lagimdaPazarYok(p) || ((p.esya.filtre || 0) >= 3 ? "Üç filtren var; fazlası kurur." : null)
      x.f = (p) => { esyaEkle(p, "filtre"); return `Kaçakçıdan yeni bir filtre aldın. Şimdi ${p.esya.filtre} filtren var.` }
    }
  }

  /* ── çeteler ────────────────────────────────────────────── */
  const CETE = {
    cark: { ad: "Çark", yerler: ["B", "C", "D", "gocmen"], acik: "makineye tapan dazlak tarikatı" },
    kancalar: { ad: "Kara Kancalar", yerler: ["A", "B", "C", "D", "gocmen"], acik: "iskelenin kabadayıları" },
    batiklar: { ad: "Batıklar", yerler: ["C", "D", "gocmen"], acik: "Batık mahallenin dalgıç çetesi" },
    tepe: { ad: "Tepe Çetesi", yerler: ["B", "C", "D", "gocmen"], acik: "Hurda tepesinin sahipleri" },
    dokuzlar: { ad: "Dokuzlar", yerler: ["C", "D", "gocmen"], acik: "firari neferlerin çetesi" },
  }
  const RUTBE = ["çaylak", "adam", "sağ kol", "reis"]

  function ceteKatil(p, id) {
    p.cete = id
    p.ceteRutbe = 0
    p.ceteIs = 0
    if (id === "cark") p.bayrak.cark = true
    p.onemli.push(`${p.yas} yaşında ${CETE[id].ad} çetesine katıldı.`)
  }
  function ceteAyril(p) {
    if (p.cete === "cark") p.bayrak.cark = false
    p.onemli.push(`${p.yas} yaşında ${CETE[p.cete].ad} çetesinden ayrıldı.`)
    p.cete = null
    p.ceteRutbe = 0
  }
  function ceteKatilabilir(p, id) {
    const C = CETE[id]
    if (p.cete) return "Zaten bir çetedesin."
    if (!C.yerler.includes(p.yer)) return `${C.ad} senin mahallende değil.`
    if (p.numara && ["nefer", "cavus", "konsey", "intizamci"].includes(p.meslek)) return "Üniformalıyı çeteye almazlar."
    if (p.yas < 16 || p.yas > 40) return "16 ile 40 yaş arasını alırlar."
    if (id === "dokuzlar" && !(p.bayrak.firari || p.numara || p.sicil >= 2)) return "Dokuzlar yalnızca firarileri ve sicili kirli olanları alır."
    if (id === "batiklar" && !(p.meslek === "dalgic" || p.olaylar.dal_yapti)) return "Batıklar dalmayı bilmeyeni almaz."
    return null
  }
  const rakipCete = (p) => sec(Object.keys(CETE).filter((k) => k !== p.cete && CETE[k].yerler.includes(p.yer === "A" ? "B" : p.yer)))

  for (const id in CETE) {
    ETKINLIK.push({
      id: "katil_" + id, kat: "Çete", ad: `${CETE[id].ad} çetesine katıl`, etki: `${buyukHarf(CETE[id].acik)}. Para ve koruma, ama şiddet ve Zindan riski.`,
      gizle: (p) => !!p.cete || !CETE[id].yerler.includes(p.yer) || p.yas < 14,
      k: (p) => ceteKatilabilir(p, id),
      f: (p) => { if (sans(0.6)) { ceteKatil(p, id); return [`${CETE[id].ad} seni aralarına aldı. Artık bir çaylaksın.`, "donum"] } p.saglik -= 6; return [`${CETE[id].ad} seni sınadı ve yetersiz buldu. Seneye yeniden dene.`, "kotu"] },
    })
  }
  ETKINLIK.push(
    { id: "ceteis", kat: "Çete", ad: "Çete için iş yap", etki: "Rütben yükseldikçe daha çok para. Yaralanma ve Zindan riski var.", gizle: (p) => !p.cete, k: () => null, f: (p) => {
      p.ceteIs = (p.ceteIs || 0) + 1
      const r = R()
      if (r < 0.06) return ["İş ters gitti; Nizam devriyesi hepinizi topladı." + hapseAt(p, rnd(1, 2), `${CETE[p.cete].ad} adına iş yaparken yakalandığı için`), "kotu"]
      if (r < 0.16) { p.saglik -= rnd(8, 16); return [`${CETE[rakipCete(p) || "kancalar"].ad} adamları sizi bir ara sokakta bekliyordu. Yaralandın.`, "kotu"] }
      const l = rnd(5, 12) * (p.ceteRutbe + 1)
      p.lira += l
      let ek = ""
      if (p.ceteRutbe < 3 && p.ceteIs >= 3 * (p.ceteRutbe + 1) && sans(0.4)) { p.ceteRutbe++; ek = ` Çetede ${RUTBE[p.ceteRutbe]} oldun.`; p.onemli.push(`${CETE[p.cete].ad} çetesinde ${RUTBE[p.ceteRutbe]} oldu.`) }
      const isler_ = { cark: "Çark'ın barı için kaçak motor parçası taşıdın.", kancalar: "İskelede hamallardan haftalık haracı topladın.", batiklar: "Dalgıçların çıkardığı malın payını köprü pazarında tahsil ettin.", tepe: "Hurdacılardan tepe payını topladın.", dokuzlar: "Bir Nizam deposundan silah kaçırdınız." }
      return [`${isler_[p.cete]} Payına ${l} lira düştü.${ek}`, ek ? "donum" : "iyi"]
    } },
    { id: "ceteayril", kat: "Çete", ad: "Çeteden ayrıl", etki: "Ayrılmak kolay değil; dövülebilirsin.", gizle: (p) => !p.cete, k: () => null, f: (p) => { const ad = CETE[p.cete].ad; const dayak = sans(0.4); ceteAyril(p); if (dayak) { p.saglik -= 15; return [`${ad} gitmene izin verdi, ama önce seni bir güzel dövdüler.`, "kotu"] } return [`${ad} reisi seni uzun uzun süzdü, sonra kapıyı gösterdi.`, "secim"] } },
  )

  OLAYLAR.push(
    { id: "ceteSavasHaber", yas: [8, 95], w: 1.4, ara: 3, kosul: (p) => ["B", "C", "D", "gocmen"].includes(p.yer) && !p.cete, f: (p) => { const [a, b] = Object.keys(CETE).sort(() => R() - 0.5); if (sans(0.15)) { p.saglik -= 8; return [`${CETE[a].ad} ile ${CETE[b].ad} sokağında çatıştı. Kaçarken sen de yaralandın.`, "kotu"] } return `${CETE[a].ad} ile ${CETE[b].ad} arasında çete savaşı çıktı. ${sec(["Köprü pazarı üç gün kapalı kaldı.", "İki kişi öldü, biri on altı yaşındaydı.", "Sokağın ortasında bir dükkân yandı."])}` } },
    { id: "ceteReis", yas: [16, 70], w: (p) => (p.cete && p.ceteRutbe === 3 ? 3 : 0), f: (p) => { p.lira += 30; return [`Reis olarak ${CETE[p.cete].ad} kasasından payına 30 lira düştü. Herkes sana selam veriyor; arkandan da bakıyor.`, "iyi"] } },
    { id: "ceteKarsi", yas: [14, 70], w: (p) => (p.cete ? 1.2 : 0), f: (p) => sec([`${CETE[p.cete].ad} toplantısında yeni bir bölge paylaşıldı.`, `${CETE[rakipCete(p) || "kancalar"].ad} adamlarından biri seni pazarda tanıdı ve yere tükürdü.`, `${CETE[p.cete].ad} arkadaşlarından biri Zindan'a düştü. Ailesine para topladınız.`]) },
  )

  SECIMLER.push(
    {
      id: "ceteSavas", yas: [16, 60], kosul: (p) => !!p.cete && !yurtDisi(p),
      metin: (p) => { p.secimRakip = rakipCete(p) || "kancalar"; return `${CETE[p.cete].ad} ile ${CETE[p.secimRakip].ad} arasında savaş çıktı. Bu gece ${CETE[p.secimRakip].ad} bölgesine baskın yapılacak ve herkes orada olacak.` },
      secenek: [
        ["Baskına katıl", (p) => { const r = R(); if (r < 0.08) return ["Baskında Nizam araya girdi." + hapseAt(p, rnd(1, 3), "bir çete savaşında yakalandığı için"), "kotu"]; if (r < 0.35) { p.saglik -= rnd(12, 25); return ["Baskın kötü bitti. Bir bıçak darbesiyle sokakta kaldın; seni arkadaşların taşıdı.", "kotu"] } p.lira += 20; if (p.ceteRutbe < 3 && sans(0.4)) { p.ceteRutbe++; p.onemli.push(`Bir çete savaşından sonra ${RUTBE[p.ceteRutbe]} oldu.`); return [`Bölge artık sizin. Reis seni önüne çağırdı: artık ${RUTBE[p.ceteRutbe]}sın.`, "donum"] } return ["Bölge artık sizin. Payına 20 lira düştü.", "iyi"] }],
        ["Saklan", (p) => { if (sans(0.5) && p.ceteRutbe > 0) p.ceteRutbe--; p.umut -= 3; return ["O gece evden çıkmadın. Ertesi gün kimse sana bakmadı.", "kotu"] }],
      ],
    },
    {
      id: "harac", yas: [16, 75], kosul: (p) => !p.cete && ["tezgahci", "meyhaneci", "seyyar", "eskici", "tamirci", "hamal", "hanhamal", "hurdaci"].includes(p.meslek) && ["B", "C", "D", "gocmen"].includes(p.yer),
      metin: (p) => { p.secimRakip = p.meslek === "hurdaci" ? "tepe" : p.meslek.includes("hamal") ? "kancalar" : sec(["kancalar", "batiklar", "tepe"]); return `${CETE[p.secimRakip].ad} adamları geldi: "Her ay haraç vereceksin. Yoksa başına bir iş gelir."` },
      secenek: [
        ["Haracı öde", (p) => { p.harac = p.secimRakip; return `Artık her yıl ${CETE[p.secimRakip].ad} çetesine haraç ödüyorsun.` }],
        ["Reddet", (p) => { if (sans(0.5)) { p.saglik -= 12; p.lira = Math.round(p.lira * 0.6); return ["Bir gece tezgâhını dağıttılar ve seni dövdüler.", "kotu"] } p.umut += 4; return ["Geri adım atmadın. Bir daha uğramadılar; belki seneye.", "iyi"] }],
        ["Başka bir çeteye sığın", (p) => { const k = Object.keys(CETE).find((x) => x !== p.secimRakip && !ceteKatilabilir(p, x)); if (k) { ceteKatil(p, k); return [`${CETE[k].ad} seni korumasına aldı. Karşılığında artık onlardansın.`, "donum"] } return ["Seni koruyacak bir çete bulamadın. Haracı ödemek zorunda kaldın.", "kotu"] }],
      ],
    },
  )

  /* ── inanç ──────────────────────────────────────────────── */
  const INANCLI = (p) => p.inanc === "Tengrici" || p.inanc === "Hristiyan"
  function inancDegistir(p, yeni) {
    const eski = p.inanc
    p.inanc = yeni
    p.cemaat = 0
    for (const k of [p.anne, p.baba]) if (k && k.sag && p.aileInanc && p.aileInanc !== yeni) k.yakinlik = kel(k.yakinlik - 15, 0, 100)
    p.onemli.push(`${p.yas} yaşında ${eski === "inançsız" ? "inançsızken" : eski + " iken"} ${yeni === "inançsız" ? "inancını bıraktı" : yeni + " oldu"}.`)
  }

  ETKINLIK.push(
    { id: "dua", kat: "İnanç", ad: "Topluluğunla dua et", etki: "Umut +4. Topluluğun seni daha çok tanır ve zor günde yardım eder.", gizle: (p) => !INANCLI(p), k: (p) => (p.yas < 5 ? "Henüz çok küçüksün." : null), f: (p) => { p.umut += 4; p.cemaat = Math.min(100, (p.cemaat || 0) + 12); return p.inanc === "Tengrici" ? "Mahallenin Tengricileriyle sabah damda güneşe karşı Gök Tengri'ye dua ettin." : "Manastırın sabah ayinine katıldın. Hacılar da oradaydı." } },
    { id: "kam", kat: "İnanç", ad: "Kama danış", etki: "3 lira. Sağlık +6, bazen hastalığı iyileştirir; fal da bakar.", gizle: (p) => p.inanc !== "Tengrici" && p.yer !== "anadolu", k: (p) => (p.lira < 3 ? "3 Koloni Lirası gerek." : p.yas < 6 ? "Henüz çok küçüksün." : null), f: (p) => { p.lira -= 3; p.saglik += 6; const t = tedavi(p, 0.3); const fal = sec([["Kam, önünde uzun bir yol olduğunu söyledi.", 3], ["Kam yüzüne uzun uzun baktı, sonra hiçbir şey söylemedi.", -2], ["Kam, ailenden birinin seni koruduğunu söyledi.", 4], ["Kam davulunu çaldı ve seni kötü ruhlardan arındırdığını söyledi.", 2]]); p.umut += fal[1]; if (sans(0.3)) esyaEkle(p, "muska"); return [`Kam seni otlarla tütsüledi.${t} ${fal[0]}`, "iyi"] } },
    { id: "gec_tengri", kat: "İnanç", ad: "Tengriciliğe geç", etki: "İnancın değişir. Ailen farklı inançtaysa onlarla yakınlığın düşer.", gizle: (p) => p.inanc === "Tengrici" || p.yer === "kalan", k: (p) => (p.yas < 16 ? "16 yaşından küçüksün." : null), f: (p) => { inancDegistir(p, "Tengrici"); return ["Bir kam senin için dua etti ve seni Gök Tengri'nin çocukları arasına kattı.", "donum"] } },
    { id: "gec_hristiyan", kat: "İnanç", ad: "Hristiyanlığa geç", etki: "İnancın değişir. Ailen farklı inançtaysa onlarla yakınlığın düşer.", gizle: (p) => p.inanc === "Hristiyan" || p.yer === "kalan", k: (p) => (p.yas < 16 ? "16 yaşından küçüksün." : null), f: (p) => { inancDegistir(p, "Hristiyan"); return ["Manastırda keşişler seni vaftiz etti. Boynuna küçük, tahta bir haç taktılar.", "donum"] } },
    { id: "gec_yok", kat: "İnanç", ad: "İnancını bırak", etki: "Nizam'ın gözünde daha az şüpheli olursun ama topluluğunun yardımını kaybedersin.", gizle: (p) => !INANCLI(p), k: (p) => (p.yas < 16 ? "16 yaşından küçüksün." : null), f: (p) => { inancDegistir(p, "inançsız"); return ["Artık dua etmiyorsun. Komşuların bunu fark etti.", "donum"] } },
  )

  OLAYLAR.push(
    { id: "cemaatyardim", yas: [10, 95], w: (p) => (INANCLI(p) && (p.cemaat || 0) >= 30 && p.saglik < 60 ? 2 : 0), f: (p) => { p.saglik += 8; p.umut += 3; return [p.inanc === "Tengrici" ? "Zor günlerinde Tengrici komşular sana her akşam yemek getirdi." : "Hastalandığında manastırdan bir keşiş her gün sana bakmaya geldi.", "iyi"] } },
    { id: "kundak", yas: [8, 95], w: 0.8, kosul: (p) => ["B", "C", "D", "gocmen"].includes(p.yer), f: () => sec(["Mahallede bir Tengrici evi kundaklandı. Nizam iki taraftan da adam topladı.", "Bir gece manastırın kapısına yağlı bez atıp ateşe verdiler. Keşişler sabaha kadar söndürdü."]) },
  )

  SECIMLER.push(
    {
      id: "inancKavga", yas: [17, 75], kosul: (p) => INANCLI(p) && ["A", "B", "C", "D", "gocmen"].includes(p.yer),
      metin: (p) => `Mahallede Tengricilerle Hristiyanlar arasında kavga çıktı. Bir ${p.inanc === "Tengrici" ? "Tengrici" : "Hristiyan"} dükkânının camları taşlandı ve sokak ikiye bölündü.`,
      secenek: [
        ["Kendi tarafının yanında dur", (p) => { p.cemaat = Math.min(100, (p.cemaat || 0) + 15); if (sans(0.3)) { p.saglik -= 10; return ["Taşlar havada uçuşurken biri başına isabet etti. Topluluğun seni unutmayacak.", "kotu"] } if (sans(0.2)) { p.sicil++; return ["Nizam geldiğinde en öndekilerden biriydin. Adın bir tutanağa geçti.", "kotu"] } return ["Kavga dağıldığında topluluğun seni omuzlarında taşıdı.", "iyi"] }],
        ["Araya gir, iki tarafı ayır", (p) => { p.umut += 5; if (sans(0.3)) { p.saglik -= 8; return ["İki taraf da sana vurdu. Ama kavga dağıldı.", "kotu"] } p.onemli.push("Mahalledeki bir inanç kavgasında iki tarafı barıştırdı."); return ["İki tarafın yaşlılarını bir masaya oturttun. O yıl bir daha kavga çıkmadı.", "iyi"] }],
        ["Kapını kapat", (p) => { p.cemaat = Math.max(0, (p.cemaat || 0) - 5); return "Kapını kapattın. Topluluğundan biri ertesi gün selamını almadı." }],
      ],
    },
    {
      id: "carkSaldiri", yas: [17, 70], kosul: (p) => p.cete === "cark" || (INANCLI(p) && ["B", "C", "D", "gocmen"].includes(p.yer)),
      metin: (p) => (p.cete === "cark" ? "Çark'ın büyükleri, eski inançları \"düzensizlik\" sayıp manastıra ve Tengricilerin dua damına bu gece saldırı düzenliyor. Senden de gelmen bekleniyor." : `Çark'ın dazlakları ${p.inanc === "Tengrici" ? "Tengricilerin dua damına" : "manastıra"} saldırdı. Camları kırıyor, içeridekileri sokağa döküyorlar.`),
      secenek: [
        ["Katıl / Karşı koy", (p) => { if (p.cete === "cark") { p.umut -= 6; p.sicil++; if (p.ceteRutbe < 3 && sans(0.4)) p.ceteRutbe++; return ["Gece boyunca camları kırdınız. Eve döndüğünde ellerin titriyordu.", "kotu"] } p.cemaat = Math.min(100, (p.cemaat || 0) + 20); if (sans(0.4)) { p.saglik -= rnd(10, 20); return ["Dazlakların karşısına dikildin. Seni yere serdiler ama geri çekilmediniz.", "kotu"] } p.umut += 6; return ["Topluluğunla birlikte kapıyı tuttunuz. Dazlaklar sonunda geri çekildi.", "iyi"] }],
        ["Uzak dur", (p) => { if (p.cete === "cark") { if (p.ceteRutbe > 0) p.ceteRutbe--; p.saglik -= 8; return ["Gitmedin. Ertesi gün Çark'ın barında seni duvara yasladılar.", "kotu"] } p.cemaat = Math.max(0, (p.cemaat || 0) - 8); return "Uzak durdun. Sabah kırık camların arasından geçerken başını kaldıramadın." }],
      ],
    },
    {
      id: "esInanc", yas: [16, 70], kosul: (p) => p.es && p.es.sag && p.es.inanc && p.es.inanc !== p.inanc && p.yer !== "kalan",
      metin: (p) => `Eşin ${p.es.ad} ${p.es.inanc === "inançsız" ? "inançsız" : p.es.inanc}. Çocuklarınızın hangi inançla büyüyeceğini konuşuyorsunuz; eşin senin de kendi inancına geçmeni istiyor.`,
      secenek: [
        ["Eşinin inancına geç", (p) => { inancDegistir(p, p.es.inanc); p.es.yakinlik = kel(p.es.yakinlik + 15, 0, 100); return ["Eşinin inancına geçtin. Annenle baban bunu kolay kabul etmedi.", "donum"] }],
        ["Kendi inancında kal", (p) => { p.es.yakinlik = kel(p.es.yakinlik - 8, 0, 100); return "Kendi inancında kaldın. Evde bu konu bir daha açılmadı ama unutulmadı da." }],
      ],
    },
  )

  /* ── yolculuk: dört güç ─────────────────────────────────── */
  Object.assign(YERLER, {
    anadolu: { ad: "Anadolu beylikleri", uzun: "Anadolu'da, beyliklerin bozkırında", sira: 3, olum: 0.85, ciger: 0.2 },
    trakya: { ad: "Trakya", uzun: "Trakya'nın tüccar şehirlerinde", sira: 3, olum: 0.72, ciger: 0.6 },
    ege: { ad: "Ege kolonileri", uzun: "Ege'nin koloni limanlarında", sira: 3, olum: 0.78, ciger: 0.4 },
    kuzey: { ad: "Kuzeydeki krallık", uzun: "kuzeydeki krallığın dağlarında", sira: 4, olum: 1.2, ciger: 0.3 },
  })
  Object.assign(MESLEK, {
    kervanci: { ad: "beylik kervanlarında kervancı", fis: 0, lira: 12, kaza: 0.008, ciger: 0.3 },
    trakyaisci: { ad: "Trakya'da sözleşmeli işçi", fis: 0, lira: 20, kaza: 0.004, ciger: 0.8 },
    gemici: { ad: "Ege gemilerinde gemici", fis: 0, lira: 18, kaza: 0.01, ciger: 0.3 },
    irgat: { ad: "kuzeyde bir beyin topraklarında ırgat", fis: 0, lira: 3, kaza: 0.004, ciger: 0.2 },
    coban: { ad: "Anadolu'da bir beyin topraklarında çoban", fis: 0, lira: 8, kaza: 0.003, ciger: 0.1 },
  })
  const YOLCULUK = {
    anadolu: { ad: "Anadolu'ya kervanla git", fiyat: 15, meslek: "kervanci", etki: "15 lira. Bozkırda yeni bir hayat; Tengrici beylikler. İstediğin zaman dönebilirsin.", yola: "Bir beylik kervanına katıldın. Haftalarca bozkırda yürüdünüz; geceleri yıldızlar Boğaz'dakinden kat kat fazlaydı." },
    trakya: { ad: "Trakya'ya sözleşmeli işçi olarak git", fiyat: 0, meslek: "trakyaisci", sozlesme: 5, etki: "Ücretsiz, ama 5 yıllık sözleşme imzalarsın; bitmeden dönemezsin. Kazanç iyi.", yola: "Trakya hanında sözleşmeni imzaladın. Bir gemi seni ve otuz kişiyi Trakya'nın tüccar şehirlerine götürdü." },
    ege: { ad: "Ege'ye gemiyle git", fiyat: 0, meslek: "gemici", etki: "Gemide güverte işçisi olarak gidersin. Fırtına riski var. Koloni Lirası'nın basıldığı yer.", yola: "Bir Ege gemisinde güverte işçisi oldun. Boğaz arkanda küçülürken ilk kez açık denizi gördün." },
    kuzey: { ad: "Kuzeydeki krallığa git", fiyat: 10, meslek: "irgat", etki: "10 lira. En zor yol: yolda ölebilirsin. Fakir, soğuk, Hristiyan bir krallık.", yola: "Kuzeye giden bir hacı kafilesinin tersine yürüdün. Dağlar her gün biraz daha soğuktu." },
  }
  function yolaCik(p, b) {
    const Y = YOLCULUK[b]
    p.lira -= Y.fiyat
    p.yolculuk = { bolge: b, eskiYer: p.yer, eskiMeslek: p.meslek, baslangic: p.yil, sozlesme: Y.sozlesme ? p.yil + Y.sozlesme : 0 }
    if (p.numara && ["nefer", "cavus"].includes(p.meslek)) p.bayrak.firari = true
    p.yer = b
    p.meslek = Y.meslek
    if (p.cete) ceteAyril(p)
    p.onemli.push(`${p.yas} yaşında Boğaz'dan ayrılıp ${YERLER[b].ad} yoluna çıktı.`)
    let metin = Y.yola
    if (b === "kuzey" && sans(0.25)) { p.saglik -= rnd(15, 30); metin += " Bir geçitte tipiye yakalandınız. Ayak parmaklarından ikisini orada bıraktın." }
    if (b === "ege" && sans(0.15)) { p.saglik -= rnd(8, 15); metin += " Yolda fırtınaya yakalandınız; dalgalar seni güverteye çarptı." }
    if (b === "anadolu" && sans(0.15)) { p.lira = Math.round(p.lira * 0.5); metin += " Yolda kervanı haydutlar soydu; paranın yarısı gitti." }
    if (p.numara) metin += " Nizam'ın kayıtlarında artık firari bir nefersin."
    return [metin, "donum"]
  }
  function eveDon(p) {
    const y = p.yolculuk
    p.yer = y.eskiYer === "A" && p.meslek === "hizmetci" ? "A" : y.eskiYer
    p.meslek = "yok"
    p.yolculuk = null
    p.onemli.push(`${p.yas} yaşında Boğaz'a geri döndü.`)
    const hatira = { anadolu: "keçe", trakya: "sarap", ege: "sikke", kuzey: "hac" }[y.bolge]
    esyaEkle(p, hatira)
    return [`Yıllar sonra Boğaz'ın sisini yeniden gördün. ${YERLER[p.yer] ? YERLER[p.yer].uzun : "Alt Şehir'de"} bir oda tuttun. Yanında bir hatıra getirdin: ${TUKETIM[hatira].ad.toLocaleLowerCase("tr")}.`, "donum"]
  }
  for (const b in YOLCULUK) {
    const Y = YOLCULUK[b]
    ETKINLIK.push({ id: "yol_" + b, kat: "Yolculuk", ad: Y.ad, etki: Y.etki, gizle: (p) => yurtDisi(p) || p.yer === "kalan" || p.yas < 14, k: (p) => (p.yas < 16 || p.yas > 55 ? "16 ile 55 yaş arası olmalısın." : p.lira < Y.fiyat ? `${Y.fiyat} Koloni Lirası gerek.` : null), f: (p) => yolaCik(p, b) })
  }
  ETKINLIK.push({ id: "eve_don", kat: "Yolculuk", ad: "Boğaz'a geri dön", etki: "Eski mahallene dönersin; işin olmaz ama yanında bir hatıra getirirsin.", gizle: (p) => !yurtDisi(p), k: (p) => (p.yolculuk && p.yolculuk.sozlesme > p.yil ? `Sözleşmen ÇS ${p.yolculuk.sozlesme} yılında bitiyor.` : null), f: (p) => eveDon(p) })

  const bolgeOlay = (b, l) => ({ id: "bolge_" + b, yas: [14, 99], w: 6, ara: 1, kosul: (p) => p.yer === b, f: (p) => { const x = sec(l); return typeof x === "function" ? x(p) : x } })
  OLAYLAR.push(
    bolgeOlay("anadolu", [
      "Bozkırda bir beyliğin şenliğine denk geldiniz. Kamlar davul çaldı, gece boyunca ateşler yandı.",
      "İki beylik arasında sınır kavgası çıktı. Yollar üç hafta kapalı kaldı.",
      (p) => { p.ciger += 3; return ["Bozkırın havası temiz. Ciğerlerin yıllar sonra ilk kez rahat nefes alıyor.", "iyi"] },
      (p) => { p.saglik -= 6; return ["Bozkırda haydutlar saldırdı. Mallarınızı korudunuz ama yaralandın.", "kotu"] },
      "Beyliklerin çatısındaki büyük bey öldü; yerine kimin geçeceği bütün bozkırda konuşuluyor.",
      "Bir kam elini tutup Boğaz'dan geldiğini hemen bildi. Nasıl bildiğini söylemedi.",
      (p) => { p.lira += 15; return ["Bir beylik pazarında iyi bir pazarlık yaptınız; payına 15 lira düştü.", "iyi"] },
    ]),
    bolgeOlay("trakya", [
      "Tüccar şehrinin rıhtımında yüzlerce gemi vardı. Kimse kimsenin inancını sormuyordu; yalnızca fiyatını.",
      "Bir tüccar ailesinin düğününe garson olarak çağrıldın. Bir gecede bir yıllık fiş maaşından fazla bahşiş aldın.",
      (p) => { p.lira += 20; return ["Sözleşme patronun cömert bir yıl geçirdi; ikramiye dağıttı.", "iyi"] },
      (p) => { p.lira = Math.max(0, p.lira - 15); return ["Patron sözleşmedeki küçük bir maddeyi gösterip maaşından kesti.", "kotu"] },
      "Trakya'nın mahkemeleri bir tüccarı yalan defter tuttuğu için sürgüne yolladı. Burada yasa paraya bakıyor ama bakıyor.",
      "Şehrin kanallarında kayıkla gezen tüccar çocuklarını izledin. Hiçbiri öksürmüyordu.",
    ]),
    bolgeOlay("ege", [
      "Koloni Lirası'nın basıldığı darphanenin önünden geçtin. Kapıda Nizam'ınkinden daha parlak üniformalı muhafızlar vardı.",
      (p) => { p.saglik -= 10; return ["Açık denizde bir fırtına çıktı. Direk kırıldı, iki gemici denize düştü; sen halata tutundun.", "kotu"] },
      (p) => { p.lira += 18; return ["Bir koloni adasına mal taşıdınız. Kaptan herkese ikramiye verdi.", "iyi"] },
      "Bir koloni limanında yeni bir yerleşim için gönüllü topluyorlardı. Gidenler bir daha görülmüyormuş.",
      (p) => { esyaEkle(p, "sikke"); return ["Limanda bir koleksiyoncu sana eski bir Ege sikkesi hediye etti.", "iyi"] },
      "Ege'de borçlu yolcuların gemiye zincirle bağlandığını gördün. Sen kendi isteğinle gelmiştin; şimdilik.",
    ]),
    bolgeOlay("kuzey", [
      (p) => { p.saglik -= 8; return ["Kuzeyin kışı Boğaz'dakine benzemiyor. Bir gece bütün köy kar altında kaldı.", "kotu"] },
      "Köyün kilisesinde her pazar güneye, kutsal topraklara inme vaazları veriliyor. Kimse ne zaman olacağını bilmiyor.",
      "Beyin adamları hasadın yarısını aldı. Irgatlar sesini çıkarmadı.",
      (p) => { p.umut += 4; return ["Köylüler seni ilk başta yabancı saydı; sonra bir düğüne çağırdılar.", "iyi"] },
      (p) => { p.saglik -= 5; return ["Ekmek yetmedi. Kış boyunca yalnızca lahana çorbası içtiniz.", "kotu"] },
      "Bir keşiş, Boğaz'da bekleyen hacılardan haber sordu. Kardeşi yıllardır oradaymış.",
    ]),
  )
  // yurt dışında Boğaz'a özgü olaylar ve kararlar çıkmasın
  const HER_YERDE = ["ilksoz", "atesgece", "yasli", "yasli2", "torun", "esisizi", "esisbuldu", "cocukmaas", "kaza", "yosunderin", "yosunbirak", "kardesbebek", "anneyasli", "cemaatyardim", "ceteReis"]
  SECIMLER.push(
    { id: "anadolu_kal", yas: [16, 80], bolge: "anadolu", metin: "Bir beyin kâhyası sana kervandan ayrılıp beyin topraklarında çalışmayı teklif etti: kendi çadırın, kendi sürün olacak.", secenek: [["Kabul et, burada kal", (p) => { p.yolculuk.kalici = true; p.meslek = "coban"; p.lira += 10; p.umut += 6; p.onemli.push("Anadolu'da bir beyin topraklarına yerleşti."); return ["Kendi çadırını kurdun. Boğaz artık bir hatıra.", "donum"] }], ["Kervanda kal", () => "Kervanla yola devam ettin."]] },
    { id: "trakya_sozlesme", yas: [16, 80], bolge: "trakya", metin: "Patronun sözleşmeni beş yıl daha uzatmanı istiyor. Karşılığında maaşına zam ve şehirde bir oda.", secenek: [["Uzat", (p) => { p.yolculuk.sozlesme = p.yil + 5; p.lira += 25; return ["Sözleşmeni uzattın. Şehirde kendi odan oldu.", "iyi"] }], ["Uzatma", () => "Uzatmadın. Sözleşmen bitince istediğin yere gidebileceksin."]] },
    { id: "ege_koloni", yas: [16, 60], bolge: "ege", metin: "Bir koloni şirketi yeni kurulacak bir yerleşim için gemici arıyor. Para üç katı, ama dönüş garanti değil.", secenek: [["Git", (p) => { if (sans(0.3)) { p.saglik -= 25; return ["Yerleşimde salgın çıktı. Dönen ilk gemiye zor bindin.", "kotu"] } p.lira += 60; p.onemli.push("Ege'de yeni bir koloni yerleşiminde çalıştı."); return ["İki yıl yeni bir limanın kurulmasında çalıştın. Cebin doldu.", "iyi"] }], ["Gitme", () => "Limanda kaldın."]] },
    { id: "kuzey_kilise", yas: [16, 70], bolge: "kuzey", metin: "Köyün papazı, burada kalmak istiyorsan vaftiz olmanı ve köyden biriyle evlenmeni söylüyor.", secenek: [["Kabul et", (p) => { if (p.inanc !== "Hristiyan") inancDegistir(p, "Hristiyan"); if (!(p.es && p.es.sag)) evlen(p); p.yolculuk.kalici = true; return [`Köyün kilisesinde vaftiz oldun ve ${p.es.ad} ile evlendin.`, "donum"] }], ["Reddet", (p) => { p.umut -= 3; return "Reddettin. Köylüler sana bir daha eskisi gibi sıcak davranmadı." }]] },
  )

  /* ── Hisar: nüfuz ve zenginlerin harcamaları ────────────── */
  const hisarli = (p) => p.yer === "hisar"
  ETKINLIK.push(
    { id: "ziyafet", kat: "Hisar", ad: "Ziyafet ver", etki: "60 lira. Nüfuz +8, Umut +4.", gizle: (p) => !hisarli(p), k: (p) => (p.yas < 18 ? "18 yaşından küçüksün." : p.lira < 60 ? "60 Koloni Lirası gerek." : null), f: (p) => { p.lira -= 60; p.nufuz = Math.min(100, (p.nufuz || 0) + 8); p.umut += 4; if (sans(0.1)) { p.nufuz -= 10; return ["Ziyafette bir konuk sarhoş olup diğer kanadı aşağıladı. Ertesi gün bütün Hisar seni konuşuyordu.", "kotu"] } return ["Konağında otuz kişilik bir ziyafet verdin. Trakya şarabı, Ege'den deniz ürünleri. İki kanadın da ileri gelenleri geldi.", "iyi"] } },
    { id: "bagis", kat: "Hisar", ad: "Yardımlaşma evine bağış yap", etki: "30 lira. Umut +6. Kılıçlar kanadı bunu hoş karşılamaz.", gizle: (p) => !hisarli(p), k: (p) => (p.yas < 16 ? "16 yaşından küçüksün." : p.lira < 30 ? "30 Koloni Lirası gerek." : null), f: (p) => { p.lira -= 30; p.umut += 6; if (p.kanat === "Kılıçlar") p.nufuz = Math.max(0, (p.nufuz || 0) - 3); if (!p.bayrak.bagis) { p.bayrak.bagis = true; p.onemli.push("Alt Şehir'deki yardımlaşma evlerine bağış yaptı."); } return "Alt Şehir'deki bir yardımlaşma evine 30 lira gönderdin. Bir hafta sonra yetimlerin elinden çıkma bir teşekkür mektubu geldi." } },
    { id: "yatirim", kat: "Hisar", ad: "Trakya hanına yatırım yap", etki: "100 lira. 2–4 yıl sonra büyük ihtimalle kârla döner; gemi batarsa hepsi gider.", gizle: (p) => !hisarli(p) && p.lira < 100, k: (p) => (p.yas < 18 ? "18 yaşından küçüksün." : p.lira < 100 ? "100 Koloni Lirası gerek." : (p.yatirim || []).length >= 3 ? "Zaten üç yatırımın var." : null), f: (p) => { p.lira -= 100; (p.yatirim = p.yatirim || []).push({ donus: p.yil + rnd(2, 4), miktar: 100 }); return "Trakya hanındaki bir tüccarın gemisine 100 lira ortak oldun. Sözleşmeyi mühürlediniz." } },
    { id: "entrika", kat: "Hisar", ad: "Kanat entrikası çevir", etki: "Nüfuz +12 olabilir. Skandal çıkarsa nüfuz düşer, sicilin kirlenir.", gizle: (p) => !hisarli(p), k: (p) => (p.yas < 20 ? "20 yaşından küçüksün." : null), f: (p) => { const r = R(); if (r < 0.55) { p.nufuz = Math.min(100, (p.nufuz || 0) + 12); return [`${p.kanat === "Kılıçlar" ? "Mühürler" : "Kılıçlar"} kanadından bir rakibinin borçlarını Yüksek Konsey'e sızdırdın. Koltuğu sarsıldı, seninki sağlamlaştı.`, "iyi"] } if (r < 0.85) return "Mektuplar yazdın, fısıltılar yaydın. Bu yıl bir şey değişmedi."; p.nufuz = Math.max(0, (p.nufuz || 0) - 15); p.sicil++; return ["Entrikan ortaya çıktı. Bir ay boyunca hiçbir ziyafete çağrılmadın.", "kotu"] } },
    { id: "konseykoltuk", kat: "Hisar", ad: "Konsey koltuğu için uğraş", etki: "150 lira ve en az 60 nüfuz gerekir. Başarırsan Konsey üyesi olursun.", gizle: (p) => !hisarli(p) || p.meslek === "konsey", k: (p) => (p.yas < 30 ? "30 yaşından küçüksün." : (p.nufuz || 0) < 60 ? `Nüfuzun ${Math.round(p.nufuz || 0)}; en az 60 olmalı.` : p.lira < 150 ? "150 Koloni Lirası gerek." : null), f: (p) => { if (sans(0.6)) { p.lira -= 150; p.meslek = "konsey"; p.onemli.push(`${p.yas} yaşında Yüksek Konsey'e girdi.`); return ["Doğru kapılara doğru zarflar gitti. Yüksek Konsey'de artık senin de bir koltuğun var.", "donum"] } p.lira -= 75; p.nufuz -= 10; return ["Zarfların yarısı boşa gitti. Koltuğu bir Kılıçlar subayı kaptı.", "kotu"] } },
    { id: "kilik", kat: "Hisar", ad: "Kılık değiştirip Alt Şehir'e in", etki: "Bir macera: ne olacağı belli olmaz.", gizle: (p) => !hisarli(p), k: (p) => (p.yas < 16 ? "16 yaşından küçüksün." : null), f: (p) => { const r = R(); if (r < 0.2) { const k = Math.round(p.lira * 0.2); p.lira -= k; return [`Köprü pazarında cebindeki ${k} lirayı çaldılar. Kimse Hisarlı olduğunu anlamadı; yalnızca paran olduğunu anladılar.`, "kotu"] } if (r < 0.3) { p.saglik -= 10; return ["Bir barda yanlış kişiye yanlış soruyu sordun. Dövüldün.", "kotu"] } p.umut += 5; return sec([["Eski bir paltoyla Alt Şehir'in sokaklarında dolaştın. Tek odada üç kuşağın yaşadığını kendi gözünle gördün.", "iyi"], ["Bir lağım birası içtin, Köprü Gecesi fenerlerini kalabalığın içinden izledin. Kimse sana selam durmadı; hoşuna gitti.", "iyi"]]) } },
  )
  PAZAR.push(
    { id: "konak", kat: "Hisar çarşısı", ad: "Konağını yenilet", fiyat: 150, tek: "konak", etki: "Umut +8, Nüfuz +5. Kalıcı.", gizle: (p) => !hisarli(p), k: () => null, f: (p) => { p.bayrak.konak = true; p.umut += 8; p.nufuz = Math.min(100, (p.nufuz || 0) + 5); return ["Ustalar konağını bir yıl boyunca baştan sona yeniledi. Yüksek Konsey'in yarısı açılışa geldi.", "iyi"] } },
    { id: "kanatbagis", kat: "Hisar çarşısı", ad: "Kanadının kasasına bağış yap", fiyat: 100, etki: "Nüfuz +10.", gizle: (p) => !hisarli(p), k: () => null, f: (p) => { p.nufuz = Math.min(100, (p.nufuz || 0) + 10); return `${p.kanat || "Kanadının"} kasasına 100 lira bağışladın. Bir sonraki toplantıda seni en öne oturttular.` } },
    { id: "yardimevikur", kat: "Büyük harcamalar", ad: "Alt Şehir'de bir yardımlaşma evi kur", fiyat: 300, tek: "yardimevi", etki: "Umut +12. Adın Alt Şehir'de anılır. Kılıçlar kanadı bunu sevmez.", gizle: (p) => yurtDisi(p) || p.yer === "kalan" || p.lira < 150, k: () => null, f: (p) => { p.bayrak.yardimevi = true; p.umut += 12; p.cemaat = Math.min(100, (p.cemaat || 0) + 20); if (p.kanat === "Kılıçlar") p.nufuz = Math.max(0, (p.nufuz || 0) - 5); p.onemli.push("Alt Şehir'de kendi adıyla anılan bir yardımlaşma evi kurdu."); return ["D Sektörü'nde eski bir depoyu yardımlaşma evine çevirdin. İlk gün yüz kişiye çorba dağıtıldı.", "donum"] } },
    { id: "dukkan", kat: "Büyük harcamalar", ad: "Köprü pazarında dükkân satın al", fiyat: 400, tek: "dukkan", etki: "Her yıl 35 lira getirir. İstersen sonra satabilirsin.", gizle: (p) => yurtDisi(p) || p.yer === "kalan" || p.lira < 200, k: () => null, f: (p) => { p.bayrak.dukkan = true; p.onemli.push("Köprü pazarında bir dükkân satın aldı."); return ["Köprü pazarında, köprünün tam ortasında bir dükkân satın aldın. Kiracın her yıl kirasını getirecek.", "donum"] } },
    { id: "ipek", kat: "Hisar çarşısı", ad: "İpek elbise", fiyat: 30, etki: "Nüfuz +3, Umut +3.", bilgi: "", gizle: (p) => !hisarli(p), k: () => null, f: (p) => { p.nufuz = Math.min(100, (p.nufuz || 0) + 3); p.umut += 3; return "Trakya hanından gelen ipekle bir elbise diktirdin. Ziyafette herkes ona baktı." } },
    { id: "sarap", kat: "Hisar çarşısı", ad: "Trakya şarabı", fiyat: 8, coklu: true, etki: "Eşyalarına gider. İçince Umut +3.", bilgi: "", gizle: (p) => !hisarli(p) && p.yer !== "trakya", k: () => null, f: (p) => { esyaEkle(p, "sarap"); return "Bir şişe Trakya şarabı aldın. Eşyalarında duruyor." } },
    { id: "kitaplik", kat: "Hisar çarşısı", ad: "Kitap koleksiyonu", fiyat: 60, tek: "kitaplik", etki: "Umut +6. Tereke olarak kalır.", bilgi: "", gizle: (p) => !hisarli(p), k: () => null, f: (p) => { p.bayrak.kitaplik = true; p.umut += 6; return "Uzun Karanlık'tan kalma kitaplardan bir koleksiyon aldın. Kütüphanende bir raf doldu." } },
    { id: "portre", kat: "Hisar çarşısı", ad: "Yağlıboya portre yaptır", fiyat: 40, tek: "portre", etki: "Umut +4. Tereke olarak kalır.", bilgi: "", gizle: (p) => !hisarli(p), k: () => null, f: (p) => { p.bayrak.portre = true; p.umut += 4; return "Bir ressam üç hafta boyunca seni çizdi. Portren konağın girişine asıldı." } },
    { id: "hekim", kat: "Hisar çarşısı", ad: "Hisar hekimine muayene ol", fiyat: 25, etki: "Sağlık +20; hastalıklarını büyük ihtimalle iyileştirir.", bilgi: "", gizle: (p) => !hisarli(p), k: () => null, f: (p) => { p.saglik += 20; return ["Hisar'ın hekimi seni baştan aşağı muayene etti." + tedavi(p, 0.9), "iyi"] } },
    { id: "keçe", kat: "Yöresel", ad: "Bozkır keçesi", fiyat: 4, coklu: true, etki: "Eşyalarına gider; Boğaz'da satılabilir.", bilgi: "", gizle: (p) => p.yer !== "anadolu", k: () => null, f: (p) => { esyaEkle(p, "keçe"); return "Kalın bir bozkır keçesi aldın." } },
    { id: "muska", kat: "Yöresel", ad: "Kamdan muska", fiyat: 3, coklu: true, etki: "Eşyalarına gider. Kullanınca Umut +4.", bilgi: "", gizle: (p) => p.yer !== "anadolu" && p.inanc !== "Tengrici", k: lagimdaPazarYok, f: (p) => { esyaEkle(p, "muska"); return "Bir kamdan muska aldın." } },
    { id: "hac", kat: "Yöresel", ad: "Tahta haç", fiyat: 1, coklu: true, etki: "Eşyalarına gider.", bilgi: "", gizle: (p) => p.yer !== "kuzey", k: () => null, f: (p) => { esyaEkle(p, "hac"); return "Köyün marangozundan küçük bir tahta haç aldın." } },
  )

  function yatirimKontrol(p, satir) {
    if (!p.yatirim || !p.yatirim.length) return
    const kalan = []
    for (const y of p.yatirim) {
      if (y.donus > p.yil) { kalan.push(y); continue }
      const r = R()
      if (r < 0.2) satir("Ortak olduğun Trakya gemisi fırtınada battı. 100 liran denizin dibinde.", "kotu")
      else if (r < 0.5) { const l = rnd(100, 130); p.lira += l; satir(`Trakya yatırımın döndü: ${l} lira. Kâr az ama zarar yok.`) }
      else { const l = rnd(170, 260); p.lira += l; satir(`Trakya yatırımın büyük kârla döndü: ${l} lira.`, "iyi") }
    }
    p.yatirim = kalan
  }

  /* ── açıklamalar: her etkinliğin ve ürünün ne yaptığı ───── */
  const ETK_KAT = { revir: "Sağlık", yardimevi: "Sağlık", manastir: "Sağlık", bar: "Eğlence", koprugecesi: "Eğlence", mezarlik: "Eğlence", hacilar: "Eğlence", mazgal: "Eğlence", dovus: "Para ve tehlike", bahis: "Para ve tehlike", dal: "Para ve tehlike", hurdatepe: "Para ve tehlike", lagim: "Para ve tehlike", karaborsa: "Para ve tehlike", yosun_al: "Yosun", yosun_birak: "Yosun", cark: "Çete", dilekce: "Nizam", es_ara: "Aile", cocuk: "Aile", okul_birak: "Okul", oku_ogren: "Okul", goc: "Yolculuk", ana: "İnanç" }
  const ETK_ETKI = {
    revir: "10 lira. Sağlık +10–20; pas humması ya da lağım ateşini %70 iyileştirir.",
    yardimevi: "Ücretsiz. Umut +5, sağlığın düşükse Sağlık +5. Bazen okuma öğretirler.",
    manastir: "Ücretsiz. Sağlık +6; hastalıkları %50 iyileştirir.",
    bar: "1 lira. Umut +3. Bazen kavga çıkar.",
    koprugecesi: "Ücretsiz. Umut +4–8; ölen yakınlarını anarsın.",
    mezarlik: "Ücretsiz. Umut +3–6.",
    hacilar: "Ücretsiz. Umut +2.",
    mazgal: "Ücretsiz. Umut +2.",
    dovus: "Kazanırsan 10–40 lira; kaybedersen Sağlık −8–25. Baskın olursa Zindan.",
    bahis: "En çok 10 lira yatırırsın; yaklaşık yarı yarıya ikiye katlanır ya da gider.",
    dal: "Çoğu zaman 5–35 lira değerinde eşya çıkar. Boğulma ve lağım ateşi riski.",
    hurdatepe: "2–12 lira; nadiren 30–60. Pas humması ve çete riski.",
    lagim: "25–45 lira. Filtren yoksa %25 ihtimalle ciğerin zarar görür; yeşillenme riski.",
    karaborsa: "Bütün fişin kötü bir kurla liraya döner. %12 ihtimalle sicilin kirlenir.",
    yosun_al: "5 lira. Umut +8, ama Yosun bağımlılığı artar ve sağlığı yavaş yavaş düşürür.",
    yosun_birak: "Yarı yarıya başarılı olursun. Başarırsan bağımlılık −25.",
    cark: "Çark çetesine katılırsın: koruma ve para, ama şiddet riski.",
    dilekce: "Bazen erzak payın artar; bazen adın bir dosyaya girer.",
    es_ara: "Umudun yüksekse evlenme şansın artar.",
    cocuk: "%45 ihtimalle bir çocuğun olur.",
    okul_birak: "Okulu bırakıp çalışmaya başlarsın.",
    oku_ogren: "%35 ihtimalle okuma yazma öğrenirsin.",
    goc: "Şehre taşınırsın: iş çok ama hava kötü.",
    ana: "Umut +5.",
  }
  for (const e of ETKINLIK) {
    if (!e.kat) e.kat = ETK_KAT[e.id] || "Diğer"
    if (!e.etki) e.etki = ETK_ETKI[e.id] || e.bilgi || ""
  }
  const PZ_KAT = { yemek: "Yiyecek ve sağlık", ilac: "Yiyecek ve sağlık", surup: "Yiyecek ve sağlık", merhem: "Yiyecek ve sağlık", su: "Yiyecek ve sağlık", komur: "Ev ve giyim", palto: "Ev ve giyim", oda: "Ev ve giyim", bot: "Ev ve giyim", sandik: "Ev ve giyim", filtre: "Lağım ve kaçak işler", rusvet: "Lağım ve kaçak işler", evrak: "Lağım ve kaçak işler", bicak: "Lağım ve kaçak işler", hediye: "Aile", oyuncak: "Aile", yuzuk: "Aile", evlilikhediye: "Aile", kitap: "Keyif", tutun: "Keyif", tavla: "Keyif", kutsalsu: "Keyif", saat: "Keyif", hisar: "Keyif" }
  const PZ_ETKI = {
    yemek: "Sağlık +5, Umut +2.",
    ilac: "Eşyalarına gider. Kullanınca Sağlık +12–20 ve hastalık tedavisi.",
    surup: "Eşyalarına gider. Kullanınca Ciğer +4, Sağlık +3.",
    merhem: "Eşyalarına gider. Pas hummasını %70 iyileştirir.",
    su: "Bir yıl boyunca lağım ateşine yakalanma ihtimalin çok düşer.",
    komur: "Bu kış açlık ve soğuk daha az vurur. Sağlık +3.",
    palto: "Kalıcı. Kışlar daha az zarar verir.",
    oda: "Her yıl 12 lira kira. Ciğerin daha yavaş yıpranır.",
    bot: "Kalıcı. İş kazası riski biraz düşer.",
    sandik: "Kalıcı. Hırsızlar paranı çalamaz.",
    filtre: "Eşyalarına gider. Lağıma inerken filtren bitmez.",
    rusvet: "%80 ihtimalle sicilin bir derece temizlenir; yakalanırsan kirlenir.",
    evrak: "Kayıtsızsan kayda geçersin. Yakalanırsan Zindan.",
    bicak: "Kalıcı. Kavgada ve dövüşte avantaj.",
    hediye: "Bütün ailenle yakınlık +6.",
    oyuncak: "Küçük bir çocuğunla yakınlık +12.",
    yuzuk: "Eşinle yakınlık +20, Umut +3.",
    evlilikhediye: "Evli bir kardeşinle yakınlık +15.",
    kitap: "Eşyalarına gider. Okuyunca Umut +5.",
    tutun: "Eşyalarına gider. İçince Umut +2, Ciğer −1.",
    tavla: "Kalıcı. Umudun yavaş yavaş artar.",
    kutsalsu: "Eşyalarına gider. Umut +2 ya da +5.",
    saat: "Kalıcı. Umut +8. İstersen sonra satabilirsin.",
    hisar: "Umut +6.",
  }
  for (const x of PAZAR) {
    if (!x.kat) x.kat = PZ_KAT[x.id] || "Diğer"
    if (!x.etki) x.etki = PZ_ETKI[x.id] || x.bilgi || ""
  }

  // eski "Çark'a katıl" etkinliği yeni çete sisteminin içinde
  ETKINLIK.find((e) => e.id === "cark").gizle = () => true
  const YURTDISI_ETK = ["dua", "kam", "gec_tengri", "gec_hristiyan", "gec_yok", "eve_don", "yosun_birak", "es_ara", "cocuk", "oku_ogren", "yatirim"]
  const YURTDISI_PZ = ["yemek", "ilac", "tutun", "kitap", "hediye", "oyuncak", "yuzuk", "sarap", "keçe", "muska", "hac"]

  /* ═══ Sürüm 5: yaşa uygun kararlar, mesleğe özel içerik, suç ═══ */

  /* ── suç ────────────────────────────────────────────────── */
  // Ortak suç sonucu: başarı, yakalanma (çocuksa aile cezası, yetişkinse sicil ve Zindan)
  function suc(p, o) {
    p.sucSay = (p.sucSay || 0) + 1
    const polis = p.meslek === "polis" || p.meslek === "gardiyan"
    const yakalanma = o.yakalanma * (p.inanc === "inançsız" ? 0.9 : 1) * (p.cete ? 0.8 : 1)
    if (sans(yakalanma)) {
      if (p.yas < 16) {
        const k = [p.anne, p.baba].find((x) => x && x.sag)
        if (k) k.yakinlik = kel(k.yakinlik - 12, 0, 100)
        p.saglik -= 4
        return [`${o.yakalandi} ${k ? `Seni eve ${akrabaAd(p, k).toLocaleLowerCase("tr")} getirdi ve bir hafta evden çıkarmadı.` : "Bir nefer kulağından tutup mahalleye kadar sürükledi."}`, "kotu"]
      }
      p.sicil++
      if (polis) {
        p.meslek = "yok"
        return [`${o.yakalandi} Üniformanı ve rozetini aldılar.` + hapseAt(p, rnd(o.ceza[0] + 1, o.ceza[1] + 1), `görevdeyken ${o.ad} yakalandığı için`), "kotu"]
      }
      if (sans(o.zindan)) return [o.yakalandi + hapseAt(p, rnd(o.ceza[0], o.ceza[1]), `${o.ad} yakalandığı için`), "kotu"]
      return [`${o.yakalandi} Bu sefer yalnızca sicilin kirlendi.`, "kotu"]
    }
    if (o.yara && sans(o.yara)) {
      p.saglik -= rnd(8, 18)
      return [o.yaralandi, "kotu"]
    }
    return o.basarili(p)
  }

  ETKINLIK.push(
    { id: "s_yankesici", kat: "Suç", ad: "Pazarda yankesicilik yap", etki: "2–10 lira. Yakalanırsan sicilin kirlenir; Zindan'a düşebilirsin.", gizle: (p) => yurtDisi(p) || p.yer === "kalan" || p.yer === "hisar", k: (p) => (p.yas < 9 ? "Henüz çok küçüksün." : null), f: (p) => suc(p, { ad: "yankesicilik yaparken", yakalanma: 0.22, zindan: 0.25, ceza: [1, 1], yakalandi: "Bir kadının cebine elini daldırırken bileğini yakaladı.", basarili: (p) => { const l = rnd(2, 10); p.lira += l; return [`Köprü pazarının kalabalığında birinin kesesini aşırdın. İçinden ${l} lira çıktı.`, "secim"] } }) },
    { id: "s_ev", kat: "Suç", ad: "Gece bir eve hırsızlığa gir", etki: "15–40 lira ya da değerli bir eşya. Yakalanma ve yaralanma riski yüksek.", gizle: (p) => yurtDisi(p) || p.yer === "kalan" || p.yas < 14, k: (p) => (p.yas < 16 ? "16 yaşından küçüksün." : p.hapis ? "Zindandasın." : null), f: (p) => suc(p, { ad: "bir eve girerken", yakalanma: 0.2, zindan: 0.7, ceza: [1, 3], yara: 0.12, yaralandi: "Ev sahibi uyanıktı. Kaçarken pencereden düştün.", yakalandi: "Komşular bağırınca devriye yetişti.", basarili: (p) => { if (sans(0.3)) { const e = sec(["catal", "albüm", "fener"]); esyaEkle(p, e); return [`A Sektörü'nde bir eve girdin. ${TUKETIM[e].ad} aldın; Eşyalar bölümünde.`, "secim"] } const l = rnd(15, 40); p.lira += l; return [`Gece bir evin arka penceresinden girdin. Yatağın altındaki kutuda ${l} lira vardı.`, "secim"] } }) },
    { id: "s_hisarli", kat: "Suç", ad: "Bir Hisarlıyı soy", etki: "20–80 lira. Yakalanırsan uzun yıllar Zindan.", gizle: (p) => yurtDisi(p) || !["A", "B", "C", "D", "gocmen"].includes(p.yer) || p.yas < 16, k: (p) => (p.yas < 18 ? "18 yaşından küçüksün." : null), f: (p) => suc(p, { ad: "bir Hisarlıyı soyarken", yakalanma: 0.28, zindan: 0.9, ceza: [2, 4], yara: 0.1, yaralandi: "Hisarlının korumaları vardı. Bir dipçik darbesiyle sokağa yığıldın.", yakalandi: "Hisarlı bağırdı; üç nefer bir anda başına çöktü.", basarili: (p) => { const l = rnd(20, 80); p.lira += l; p.onemli.push("Bir Hisarlıyı soydu ve yakalanmadı."); return [`Geçiş kapısından inen bir Hisarlıyı karanlık bir merdivende sıkıştırdın. Kesesinde ${l} lira vardı.`, "secim"] } }) },
    { id: "s_erzak", kat: "Suç", ad: "Sahte erzak kartı yap ve sat", etki: "20–40 lira. Okuma yazma gerekir. Yakalanırsan Zindan.", gizle: (p) => yurtDisi(p) || p.yer === "kalan" || p.yas < 16, k: (p) => (!p.okur ? "Okuma yazma bilmek gerek." : p.yas < 18 ? "18 yaşından küçüksün." : null), f: (p) => suc(p, { ad: "sahte erzak kartı yaparken", yakalanma: 0.18, zindan: 0.8, ceza: [1, 3], yakalandi: "Kartlardan biri erzak dairesinde fark edildi ve iz sana kadar geldi.", basarili: (p) => { const l = rnd(20, 40); p.lira += l; return [`Bir gece boyunca eski kartları kazıyıp yeniden mühürledin. Karaborsada ${l} liraya gitti.`, "secim"] } }) },
    { id: "s_yosun", kat: "Suç", ad: "Sokakta Yosun sat", etki: "10–25 lira. Kaçakçı ya da Yosun kullanan biri olmalısın.", gizle: (p) => yurtDisi(p) || p.yer === "hisar" || p.yas < 14, k: (p) => (p.yas < 16 ? "16 yaşından küçüksün." : !(p.yosun > 0 || p.bayrak.kacakci || p.yer === "kalan") ? "Yosun bulacak bağlantın yok." : null), f: (p) => suc(p, { ad: "Yosun satarken", yakalanma: 0.15, zindan: 0.6, ceza: [1, 2], yakalandi: "Sattığın adam sivil bir polisti.", basarili: (p) => { const l = rnd(10, 25); p.lira += l; return [`Bir gece boyunca köşede Yosun sattın. ${l} lira kazandın; müşterilerinin yüzüne bakmadın.`, "secim"] } }) },
    { id: "s_kundak", kat: "Suç", ad: "Para karşılığı bir dükkânı kundakla", etki: "30 lira. Umut −6. Yakalanırsan uzun Zindan.", gizle: (p) => yurtDisi(p) || !["B", "C", "D", "gocmen"].includes(p.yer) || p.yas < 16, k: (p) => (p.yas < 18 ? "18 yaşından küçüksün." : null), f: (p) => suc(p, { ad: "kundakçılık yaparken", yakalanma: 0.2, zindan: 0.9, ceza: [2, 5], yakalandi: "Yangın söndürülünce bir tanık seni tarif etti.", basarili: (p) => { p.lira += 30; p.umut -= 6; return ["Gece yarısı bir dükkânın kapısına yağlı bez attın. Sabah yerinde kül vardı. Kimin dükkânı olduğunu sormadın.", "kotu"] } }) },
    { id: "s_tefeci", kat: "Suç", ad: "Faizle borç ver (tefecilik)", etki: "50 lira verirsin; 2 yıl sonra büyük ihtimalle 80 lira olarak geri döner. Borçlu kaçabilir.", gizle: (p) => yurtDisi(p) || p.yas < 18 || p.lira < 30, k: (p) => (p.lira < 50 ? "50 Koloni Lirası gerek." : (p.tefeci || []).length >= 3 ? "Zaten üç borçlun var." : null), f: (p) => { p.lira -= 50; (p.tefeci = p.tefeci || []).push({ donus: p.yil + 2 }); p.sucSay = (p.sucSay || 0) + 1; return "Bir seyyar satıcıya 50 lira verdin. İki yıl sonra 80 olarak geri ödeyecek. Ödemezse ne yapacağını biliyor." } },
  )

  function tefeciKontrol(p, satir) {
    if (!p.tefeci || !p.tefeci.length) return
    const kalan = []
    for (const t of p.tefeci) {
      if (t.donus > p.yil) { kalan.push(t); continue }
      const r = R()
      if (r < 0.2) satir("Borçlun gece mahalleden kaçtı. 50 liran onunla gitti.", "kotu")
      else if (r < 0.28) { p.sicil++; satir("Borçlun seni Heyet'e şikâyet etti. Paran gitti, adın bir tutanağa geçti.", "kotu") }
      else { p.lira += 80; satir("Borçlun 80 lirayı titreyen elleriyle masana bıraktı.", "iyi") }
    }
    p.tefeci = kalan
  }

  /* ── çocuklara uygun kararlar ───────────────────────────── */
  SECIMLER.push(
    {
      id: "c_okulkavga", yas: [7, 13], kosul: (p) => p.okulda || p.okur,
      metin: "Okulda senden büyük bir çocuk her gün ekmeğini istiyor. Bugün de kapıda bekliyor.",
      secenek: [
        ["Ekmeği ver", (p) => { p.umut -= 3; return "Ekmeğini verdin. O gün öğlene kadar karnın guruldadı." }],
        ["Kavga et", (p) => { if (sans(0.45)) { p.umut += 5; return ["Ona bir yumruk attın ve ikiniz de toza bulandınız. Bir daha ekmeğini istemedi.", "iyi"] } p.saglik -= 4; return ["Seni yere serdi. Ekmeğin de gitti, dişin de sallandı.", "kotu"] }],
        ["Öğretmene söyle", (p) => { if (sans(0.5)) return "Öğretmen çocuğun kulağını çekti. Birkaç hafta rahat ettin."; p.umut -= 2; return ["Öğretmen omuz silkti. Çocuk ertesi gün seni bekliyordu.", "kotu"] }],
      ],
    },
    {
      id: "c_elma", yas: [8, 13], kosul: (p) => ["A", "B", "C", "D", "gocmen", "koy"].includes(p.yer),
      metin: "Mahalledeki çocuklar pazardan meyve çalmaya gidiyor. Seni de çağırıyorlar.",
      secenek: [
        ["Onlarla git", (p) => suc(p, { ad: "meyve çalarken", yakalanma: 0.3, zindan: 0, ceza: [1, 1], yakalandi: "Seyyar satıcı seni yakaladı ve kulağını çekti.", basarili: (p) => { p.umut += 3; p.saglik += 1; return "Ceplerin elma doldu. Akşam kardeşlerinle paylaştın." } })],
        ["Gitme", () => "Gitmedin. Ertesi gün ötekiler seni korkak diye çağırdı."],
      ],
    },
    {
      id: "c_kardesbak", yas: [8, 13], kosul: (p) => p.kardesler.some((k) => k.sag && k.yas >= 0 && k.yas < p.yas - 2) && p.anne.sag,
      metin: (p) => { const k = p.kardesler.find((x) => x.sag && x.yas >= 0 && x.yas < p.yas - 2); p.secimKisi = k.id; return `Annen işe gidecek ve bütün gün küçük kardeşin ${k.ad} ile ilgilenmeni istiyor. Arkadaşların ise sokakta seni bekliyor.` },
      secenek: [
        ["Kardeşine bak", (p) => { const k = aileTum(p).find((x) => x.id === p.secimKisi); k.yakinlik = kel(k.yakinlik + 12, 0, 100); p.anne.yakinlik = kel(p.anne.yakinlik + 6, 0, 100); return ["Bütün gün kardeşinle oynadın. Akşam annen başını okşadı.", "iyi"] }],
        ["Sokağa kaç", (p) => { const k = aileTum(p).find((x) => x.id === p.secimKisi); p.anne.yakinlik = kel(p.anne.yakinlik - 8, 0, 100); if (sans(0.2)) { k.yakinlik = kel(k.yakinlik - 10, 0, 100); return ["Döndüğünde kardeşin merdivenden düşmüştü. Annen sana günlerce konuşmadı.", "kotu"] } return "Akşama kadar sokaktaydın. Annen döndüğünde kızdı ama kardeşin iyiydi." }],
      ],
    },
    {
      id: "c_inanckavga", yas: [8, 16], kosul: (p) => (p.inanc === "Tengrici" || p.inanc === "Hristiyan") && ["A", "B", "C", "D", "gocmen"].includes(p.yer),
      metin: "Mahallede büyükler arasında inanç kavgası çıktı. Çocuklar da ikiye ayrıldı; karşı taraftaki çocuklar size taş atıyor.",
      secenek: [
        ["Sen de taş at", (p) => { if (sans(0.3)) { p.saglik -= 5; return ["Bir taş da kaşına geldi. Yara izi hiç geçmedi.", "kotu"] } return "Taşlar havada uçuştu. Akşam anneler çocuklarını çağırdı ve herkes evine dağıldı." }],
        ["Eve kaç", () => "Eve kaçıp pencereden izledin. Büyükler bile birbirine bağırıyordu."],
        ["Karşı taraftaki arkadaşının yanına git", (p) => { p.umut += 4; p.onemli.push("Çocukken bir inanç kavgasında karşı taraftaki arkadaşının yanında durdu."); return ["Karşı sokaktaki arkadaşının yanına gittin. İkiniz de taş atmadınız. Büyükler bunu sonradan çok konuştu.", "iyi"] }],
      ],
    },
    {
      id: "c_mazgal", yas: [8, 13], kosul: (p) => ["B", "C", "D", "gocmen"].includes(p.yer),
      metin: "Arkadaşların iddiaya girdi: mazgaldan lağıma inip bir Kalan görebilen olursa herkes ona şeker verecek.",
      secenek: [
        ["İn", (p) => { if (sans(0.25)) { p.saglik -= 8; p.ciger -= 5; return ["Birkaç basamak indin ve havası boğazını yaktı. Arkadaşların seni yukarı çekti; günlerce öksürdün.", "kotu"] } p.umut += 5; return ["Karanlıkta parlayan iki göz gördün ve kendini yukarı attın. Bütün mahalle günlerce seni konuştu.", "iyi"] }],
        ["İnme", () => "İnmedin. Kimse inmedi. İddia ertesi güne kaldı ve unutuldu."],
      ],
    },
    {
      id: "c_paket", yas: [10, 15], kosul: (p) => ["B", "C", "D", "gocmen"].includes(p.yer),
      metin: "Bir adam elinde küçük bir paketle yanına geldi: \"Bunu köprünün öbür ucundaki meyhaneye götür, sana iki lira veririm. Sakın açma.\"",
      secenek: [
        ["Götür", (p) => suc(p, { ad: "kaçak paket taşırken", yakalanma: 0.15, zindan: 0, ceza: [1, 1], yakalandi: "Köprüde bir nefer seni durdurdu ve paketi aldı.", basarili: (p) => { p.lira += 2; return "Paketi meyhaneciye verdin. İki liran cebinde. Ne taşıdığını hiç sormadın." } })],
        ["Kaç", () => "Arkana bakmadan koştun. Adam peşinden gelmedi."],
      ],
    },
    {
      id: "c_hasta", yas: [6, 12], kosul: (p) => p.saglik < 50,
      metin: "Bir haftadır ateşin var. Annen seni revire mi götürsün, yoksa komşunun bildiği otlarla mı iyileşmeyi beklesin?",
      secenek: [
        ["Revire git", (p) => { if (p.lira >= 5 || sans(0.5)) { p.saglik += 12; return ["Revirde bir hemşire sana acı bir şurup içirdi. Üç günde ayağa kalktın.", "iyi"] } return ["Revirde yer yoktu. Annen seni sırtında eve geri taşıdı.", "kotu"] }],
        ["Otlarla bekle", (p) => { if (sans(0.6)) { p.saglik += 6; return "Komşunun otları işe yaradı; ateşin yavaş yavaş düştü." } p.saglik -= 6; return ["Otlar işe yaramadı. Ateşin bir hafta daha sürdü.", "kotu"] }],
      ],
    },
  )

  /* ── mesleğe özel eylemler ──────────────────────────────── */
  const isEtk = (meslekler, o) => Object.assign({ kat: "İşine özel", gizle: (p) => !meslekler.includes(p.meslek) || p.hapis > 0 || p.yas < (o.yas || 14) }, o)
  ETKINLIK.push(
    isEtk(["hamal", "tersane", "kaynakci", "fabrika", "hanhamal", "kanal", "trakyaisci"], { id: "m_mesai", ad: "Fazla mesai yap", etki: "Lira +6, Fiş +30, Sağlık −4.", k: () => null, f: (p) => { p.lira += 6; p.fis += 30; p.saglik -= 4; return "Bütün hafta gece yarısına kadar çalıştın. Fazladan para kazandın ama çok yoruldun." } }),
    isEtk(["fabrika"], { id: "m_asir", yas: 16, ad: "Fabrikadan mal aşır", etki: "Çaldığın mal karaborsada 10–25 lira eder. Yakalanırsan işten atılırsın, Zindan'a düşebilirsin.", k: () => null, f: (p) => suc(p, { ad: "fabrikadan mal çalarken", yakalanma: 0.2, zindan: 0.5, ceza: [1, 2], yakalandi: "Çıkışta ustabaşı ceplerini aradı. İşten de atıldın.", basarili: (p) => { const l = rnd(10, 25); p.lira += l; return [`Ceplerine birkaç kutu ${p.urun || "mermi"} doldurdun. Karaborsada ${l} lira etti.`, "secim"] } }) }),
    isEtk(["polis"], { id: "m_devriye", ad: "Gece devriyesine çık", etki: "Bazen bir suçlu yakalarsın (Lira +10). Bazen yaralanırsın.", k: () => null, f: (p) => { const r = R(); if (r < 0.15) { p.saglik -= rnd(8, 15); return ["Bir ara sokakta bıçaklı bir adamla karşılaştın. Seni kolundan yaraladı.", "kotu"] } if (r < 0.55) { p.lira += 10; return ["Bir hırsızı damların üstünde kovalayıp yakaladın. Komiser sana ikramiye verdi.", "iyi"] } return "Bütün gece sokakları dolaştın. Sessiz bir geceydi." } }),
    isEtk(["polis", "gardiyan", "memur"], { id: "m_rusvet", yas: 16, ad: "Rüşvet al", etki: "10–30 lira. Yakalanırsan işini kaybeder, Zindan'a düşersin.", k: () => null, f: (p) => suc(p, { ad: "rüşvet alırken", yakalanma: 0.15, zindan: 0.6, ceza: [1, 3], yakalandi: "Zarfı veren adam Heyet'in adamıydı.", basarili: (p) => { const l = rnd(10, 30); p.lira += l; const ne = { polis: "Bir kaçakçının tezgâhını görmezden geldin.", gardiyan: "Bir mahkûmun ailesine görüş günü ayarladın.", memur: "Bir dilekçeyi dosyanın en üstüne koydun." }[p.meslek]; return [`${ne} Karşılığında ${l} lira aldın.`, "secim"] } }) }),
    isEtk(["memur", "hankatip"], { id: "m_defter", yas: 16, ad: "Defterde oynama yap", etki: "15–35 lira. Okuma yazma bilen işler için. Yakalanırsan Zindan.", k: () => null, f: (p) => suc(p, { ad: "defterde sahtecilik yaparken", yakalanma: 0.15, zindan: 0.7, ceza: [1, 3], yakalandi: "Yıllık sayımda rakamlar tutmadı.", basarili: (p) => { const l = rnd(15, 35); p.lira += l; return [`Defterde birkaç rakamı değiştirdin. Aradaki ${l} lira senin cebine kaldı.`, "secim"] } }) }),
    isEtk(["balikci", "gemici"], { id: "m_gecebalik", ad: "Gece avına çık", etki: "Lira +5–20. Fırtına riski.", k: () => null, f: (p) => { if (sans(0.15)) { p.saglik -= rnd(8, 15); return ["Gece fırtına çıktı. Tekneyi zor kıyıya çektin.", "kotu"] } const l = rnd(5, 20); p.lira += l; return `Bütün gece ağ attın. Sabah pazarda ${l} liralık balık sattın.` } }),
    isEtk(["meyhaneci"], { id: "m_kacakicki", yas: 16, ad: "Kaçak içki sat", etki: "Lira +15–30. Yakalanırsan sicilin kirlenir.", k: () => null, f: (p) => suc(p, { ad: "kaçak içki satarken", yakalanma: 0.15, zindan: 0.3, ceza: [1, 1], yakalandi: "Bir devriye tezgâhın altındaki fıçıları buldu.", basarili: (p) => { const l = rnd(15, 30); p.lira += l; return [`Trakya'dan kaçak gelen şarabı lağım birası fiyatına sattın. ${l} lira kâr.`, "secim"] } }) }),
    isEtk(["eskici", "tezgahci", "seyyar"], { id: "m_calinti", yas: 16, ad: "Çalıntı mal al, sat", etki: "Lira +10–25. Yakalanırsan sicilin kirlenir.", k: () => null, f: (p) => suc(p, { ad: "çalıntı mal satarken", yakalanma: 0.15, zindan: 0.35, ceza: [1, 2], yakalandi: "Sattığın bir saatin sahibi tezgâhının önünden geçti.", basarili: (p) => { const l = rnd(10, 25); p.lira += l; return [`Gece bir adamın getirdiği çuvalı ucuza aldın ve tezgâhta sattın. ${l} lira kâr.`, "secim"] } }) }),
    isEtk(["tamirci", "kaynakci"], { id: "m_motor", ad: "Hurda bir motoru tamir et", etki: "Bir hafta uğraşırsın; başarırsan Lira +20–40.", k: () => null, f: (p) => { if (sans(0.5)) { const l = rnd(20, 40); p.lira += l; return [`Eski dünyadan kalma bir motoru yeniden çalıştırdın. Bir tüccar ${l} lira verdi.`, "iyi"] } return "Bir hafta uğraştın ama motor çalışmadı." } }),
    isEtk(["hastabakici"], { id: "m_hasta", ad: "Ağır hastalara bak", etki: "Umut +6. Lağım ateşi kapma riski.", k: () => null, f: (p) => { p.umut += 6; if (sans(0.15)) { p.hast.lagim = true; return ["Bütün hafta ağır hastaların başında bekledin. Sonunda sen de yatağa düştün.", "kotu"] } return ["Bir çocuğun ateşi senin başında düştü. Annesi elini öptü.", "iyi"] } }),
    isEtk(["kanal"], { id: "m_kanalbul", ad: "Kanalda bulunanı sakla", etki: "Bazen değerli bir şey çıkar. Lağım ateşi riski.", k: () => null, f: (p) => { if (sans(0.15)) { p.hast.lagim = true; return ["Kanalın çamurunu karıştırırken lağım ateşine yakalandın.", "kotu"] } if (sans(0.35)) { const e = sec(["catal", "sikke"]); esyaEkle(p, e); return [`Çamurun içinde ${TUKETIM[e].ad.toLocaleLowerCase("tr")} buldun ve kimseye söylemedin.`, "iyi"] } return "Bütün gün çamur karıştırdın; eline bir şey geçmedi." } }),
    isEtk(["nefer", "cavus"], { id: "m_nobetrusvet", yas: 16, ad: "Kontrol noktasında para al", etki: "Lira +10–25. Yakalanırsan Zindan ve rütben gider.", k: () => null, f: (p) => suc(p, { ad: "nöbette rüşvet alırken", yakalanma: 0.12, zindan: 0.7, ceza: [1, 3], yakalandi: "Bir subay gizlice izliyordu.", basarili: (p) => { const l = rnd(10, 25); p.lira += l; return [`Bir kaçakçıyı aramadan geçirdin. Cebine ${l} lira bıraktı.`, "secim"] } }) }),
    isEtk(["hurdaci"], { id: "m_bakir", yas: 16, ad: "Kablolardan bakır sök", etki: "Lira +8–18. Nizam'ın kablolarıysa yakalanma riski.", k: () => null, f: (p) => suc(p, { ad: "Nizam'ın kablolarını çalarken", yakalanma: 0.18, zindan: 0.5, ceza: [1, 2], yakalandi: "Bir devriye seni direğin tepesinde yakaladı.", basarili: (p) => { const l = rnd(8, 18); p.lira += l; return `Gece bir direkten bakır kablo söktün. Tepe Çetesi'nin adamına ${l} liraya sattın.` } }) }),
  )

  /* ── mesleğe özel olaylar ───────────────────────────────── */
  const isOlay = (id, meslekler, l, w) => ({ id, yas: [14, 80], w: w || 2.5, ara: 3, kosul: (p) => meslekler.includes(p.meslek) && !yurtDisi(p), f: (p) => { const x = sec(l); return typeof x === "function" ? x(p) : x } })
  OLAYLAR.push(
    isOlay("io_liman", ["hamal", "tersane", "hanhamal"], ["İskeleye Ege'den büyük bir gemi yanaştı. Üç gün boyunca yük boşalttın.", "Kara Kancalar iskelede haraç topladı. Hamallardan biri itiraz edince denize atıldı.", (p) => { p.fis += 20; return ["Lonca bu ay ek iş dağıttı; fazladan fiş kazandın.", "iyi"] }]),
    isOlay("io_fabrika", ["fabrika", "kaynakci"], ["Fabrikada makinelerden biri patladı. Üretim bir hafta durdu.", (p) => `Fabrika ${p.urun || "mermi"} kotasını artırdı. Herkes on iki saat çalışıyor.`, "Ustabaşı en hızlı çalışanlara fazladan ekmek dağıttı."]),
    isOlay("io_polis", ["polis"], ["Karakolun eksi ikisine yeni bir dedektif geldi. Kimse onunla konuşmuyor.", "Komiser herkese aynı tutanağı yazdırdı: suçlu bir Yeşil'di.", (p) => { p.umut -= 3; return ["Gözaltındaki bir çocuk gece hücrede öldü. Tutanağa \"kalp\" yazıldı.", "kotu"] }, "Bir hırsızı yakaladın. Ertesi gün Hisar'dan bir mektup geldi ve serbest bırakıldı."]),
    isOlay("io_memur", ["memur"], ["Evrak dairesine bir Hisarlının dosyası geldi. Dosyayı kimse açmadı, herkes mühürledi.", "Daktilonun şeridi bitti. Yenisi üç ay gelmedi; tutanakları elle yazdın.", "Heyet'ten bir müfettiş geldi ve masanı aradı."]),
    isOlay("io_balik", ["balikci"], ["Boğaz'da ölü balıklar kıyıya vurdu. Bir hafta kimse balık almadı.", (p) => { p.lira += 8; return ["Ağına iri bir lüfer takıldı. Pazarda iyi para etti.", "iyi"] }, "Bir Nizam gemisi balıkçıları açık denizden geri çevirdi."]),
    isOlay("io_meyhane", ["meyhaneci"], ["Barında Çark'ın dazlakları ile Kara Kancalar kavga etti. Masaların yarısı kırıldı.", (p) => { p.lira += 10; return ["Köprü Gecesi'nde meyhane sabaha kadar doldu.", "iyi"] }, "Bir müşterin hesabı ödemeden öldü. Karısı borcu kapatmaya geldi."]),
    isOlay("io_tamir", ["tamirci"], ["Bir nefer telsizini tamire getirdi; içinde hiç görmediğin parçalar vardı.", "Hisar'dan biri eski bir jeneratörü getirdi. Bir haftada çalıştırdın."]),
    isOlay("io_nefer", ["nefer", "cavus"], ["Taburun yeni komutanı numaraları yeniden dağıttı. Arkadaşının numarası bir başkasına geçti.", "Bir firari neferin numarası duvarlara asıldı. Onu tanıyordun."]),
    isOlay("io_gardiyan", ["gardiyan"], ["Zindanda bir isyan çıktı. Kapıları üç gün kapalı tuttunuz.", "Bir mahkûm sana çocuğuna verilmesi için bir mektup verdi."]),
    isOlay("io_hasta", ["hastabakici"], ["Manastıra bir gecede yirmi lağım ateşi hastası getirildi.", "Bir keşiş sana yaraların nasıl dikildiğini öğretti."]),
    isOlay("io_seyyar", ["seyyar", "tezgahci", "eskici"], ["Köprü pazarında yer kavgası çıktı; tezgâhın devrildi.", (p) => { p.lira += 6; return ["Hacılar pazara indi ve tezgâhındaki her şeyi aldı.", "iyi"] }, "Nizam pazardaki tezgâhlardan yeni bir vergi topladı."]),
    isOlay("io_dalgic", ["dalgic"], ["Batık mahallede su altında bir okul binası buldun. Sıraların üstünde hâlâ defterler vardı.", "Batıklar çetesi dalgıçlardan pay istedi."]),
  )

  // Pazar'da yaş sınırı olan ürünler
  for (const x of PAZAR) {
    const y = { tutun: 14, bicak: 16, rusvet: 16, evrak: 16, sarap: 16, oda: 16, yuzuk: 16 }[x.id]
    if (y) x.yas = y
  }

  const KK = { dogum, yil, secimYap, tutanak, kiyas, tamAd, kisiAd, YERLER, BASAMAK_AD, MESLEK, temelOlum, sicilAd, basamakAd, aileListe, aileEylemleri, aileEylem, isler, basvur, istifa, etkinlikler, etkinlik, pazar, satinAl, durum, envanter, esyaKullan, esyaSat, yurtDisi }
  if (typeof window !== "undefined") window.KK = KK
  else globalThis.KK = KK
})()
