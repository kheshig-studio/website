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
    hisar: { ad: "Hisar", uzun: "Hisar'da", sira: 0, olum: 0.42, ciger: 0.3 },
    A: { ad: "A Sektörü", uzun: "Alt Şehir'in A Sektörü'nde", sira: 1, olum: 0.73, ciger: 1.0 },
    B: { ad: "B Sektörü", uzun: "Alt Şehir'in B Sektörü'nde", sira: 2, olum: 0.8, ciger: 1.5 },
    C: { ad: "C Sektörü", uzun: "Alt Şehir'in C Sektörü'nde", sira: 3, olum: 0.88, ciger: 2.0 },
    D: { ad: "D Sektörü", uzun: "Alt Şehir'in D Sektörü'nde, Boğaz'ın en aşağısında", sira: 4, olum: 0.98, ciger: 2.5 },
    koy: { ad: "Kıyı köyü", uzun: "Marmara kıyısında, Nizam'a balık ve tahıl veren bir köyde", sira: 3, olum: 0.84, ciger: 0.7 },
    gocmen: { ad: "Göçmen", uzun: "D Sektörü'nün göçmen damlarında", sira: 4, olum: 1.08, ciger: 2.5 },
    kalan: { ad: "Lağım", uzun: "Alt Şehir'in lağımlarında, Kalanlar'ın arasında", sira: 5, olum: 1.02, ciger: 0 },
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
    soylu: { ad: "Hisarlı bir ailenin mirasçısı", fis: 0, lira: 220, ciger: 0.2 },
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
        p.saglik -= Math.round((3 + eksik * 7) * (p.bayrak.palto ? 0.6 : 1))
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
    if (p.yas >= 14) q += ((M.kaza || 0) + (M.siddet || 0) + (M.rad || 0)) * RISK
    if (p.bayrak.cark) q += 0.006 * RISK
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
      ["siddet", 5 + (M.siddet || 0) * 1500 + (p.bayrak.cark ? 15 : 0) + (p.bayrak.kacakci ? 10 : 0) + (p.numara ? 12 : 0)],
      ["yosun", p.yosun * 0.9],
      ["aclik", (p.basamak >= 5 || p.lira + p.fis / 40 < 3 ? 10 : 2) * (p.bayrak.palto ? 0.5 : 1)],
      ["radyasyon", (p.bayrak.lagim ? 10 : 0) + (M.rad || 0) * 2000 + (p.yer === "kalan" ? 18 : 0)],
    ]
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
      if (p.bayrak.cark) return ["Çark'ın bir hesaplaşmasında bıçaklandın.", "Çark tarikatının bir hesaplaşmasında bıçaklandı."]
      if (p.bayrak.kacakci || p.meslek === "kacakci" || p.meslek === "yosuncu") return sec([["Gece Boğaz'a bir kaçak tekneyle açıldın. Sabah cesedin kıyıya vurdu.", "Gece bir kaçak teknede öldürüldü; cesedi sabah kıyıya vurdu."], ["Başka bir ağın adamları seni bir ara sokakta bekliyordu.", "Rakip bir kaçakçı ağının adamları onu bir ara sokakta öldürdü."]])
      if (p.yer === "kalan") return ["Nizam'ın lağıma yaptığı bir baskında vuruldun.", "Nizam'ın lağıma yaptığı bir baskında vuruldu."]
      return sec([["Bir barda kavga çıktı ve biri bıçak çekti.", "Bir bar kavgasında bıçaklandı."], ["Mahalleye baskın yapıldığında yanlış kapının önündeydin.", "Mahalleye yapılan bir baskında vuruldu."], ["Bir ara sokakta, birkaç lira için öldürüldün.", "Bir ara sokakta, birkaç lira için öldürüldü."]])
    },
    yosun: () => sec([["Kesik Yosun. Uyudun ve bir daha uyanmadın.", "Kesik Yosun'dan öldü; uyudu ve uyanmadı."], ["Yosun önce unutturdu, sonra uyuttu. En sonunda nefes almayı da unutturdu.", "Yıllarca kullandığı Yosun'dan öldü."], ["Sokakta zehirli bir parti dolaşıyordu; senin payına da düştü.", "Sokakta dolaşan zehirli bir Yosun partisinden öldü."]]),
    radyasyon: (p) => (p.yer === "kalan" ? ["Lağımın derinindeki ışık sonunda seni de aldı.", "Lağımın derinlerindeki radyasyondan öldü."] : sec([["Lağımda filtren bitti. Yukarı çıktın ama ciğerlerin aşağıda kaldı.", "Lağımda filtresi bitti; radyasyon ciğerlerini yaktı."], ["Lağımdan getirdiğin hastalık seni yavaş yavaş tüketti.", "Lağımdan kaptığı radyasyon hastalığından öldü."]])),
    yaslilik: (p) => sec([["Yaşlılıktan, uykunda öldün.", "Yaşlılıktan, uykusunda öldü."], [`Bir sabah kalkmadın. ${p.yas} yaşındaydın; Alt Şehir için uzun bir ömür.`, `Bir sabah kalkmadı. ${p.yas} yaşındaydı.`], ["Akşam yemeğinden sonra gözlerini kapattın ve açmadın.", "Akşam yemeğinden sonra uykusunda öldü."]]),
  }
  const OLUM_AD = {
    salgin: "Salgın / ateşli hastalık",
    aclik: "Açlık ve soğuk",
    ciger: "Ciğer hastalığı (asit pusu)",
    kaza: "İş kazası",
    siddet: "Şiddet / ateşli silah",
    yosun: "Yosun",
    radyasyon: "Radyasyon",
    yaslilik: "Yaşlılık",
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
    { id: "kaza", yas: [14, 65], w: (p) => (MESLEK[p.meslek || "yok"].kaza || 0) * 250, kosul: (p) => p.meslek, f: (p) => { p.saglik -= rnd(10, 22); return [isKazasi(p), "kotu"] } },
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
    { id: "dovme", yas: [14, 60], w: 2, kosul: (p) => p.bayrak.cark, f: () => sec(["Kafana yeni bir çark dövmesi yapıldı.", "Çark'ın barında makinelerin duasını ezberledin.", "Tarikatın büyükleri sana eski dünyadan kalma bir motoru öptürdü."]) },
    { id: "kacakgece", yas: [14, 70], w: 2, kosul: (p) => p.bayrak.kacakci, f: (p) => { p.lira += rnd(8, 25); if (sans(0.15)) { p.sicil++; return ["Bir gece tekne yakalandı. Sen kaçtın; adın bir tutanağa geçti.", "kotu"] } return "Gece Boğaz'dan bir yük geçirdin. Kimse görmedi." } },
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
      id: "kacakci", yas: [14, 40], kosul: (p) => p.yer !== "hisar" && p.yer !== "kalan" && !p.bayrak.kacakci,
      metin: "Gece iskelede bir adam yanına yaklaştı. Kaçakçılardan biriydi: \"Bu gece Boğaz'dan yük geçireceğiz ve bir kişi eksiğiz. Koloni Lirası'yla öderiz.\"",
      secenek: [
        ["Kabul et", (p) => { p.bayrak.kacakci = true; p.lira += 30; if (sans(0.3)) { p.meslek = "kacakci"; p.onemli.push("Kaçakçı ağlarına katıldı."); return "Bir gece derken iki gece oldu, sonra daha fazlası. Artık sen de bir kaçakçısın." } p.onemli.push("Kaçakçılara bir gece el verdi."); return "Yük karşıya geçti. Cebinde ilk kez gerçek Koloni Lirası vardı." }],
        ["Reddet", (p) => { p.umut -= 2; return "Adam omuz silkip karanlıkta kayboldu." }],
      ],
    },
    {
      id: "cark", yas: [14, 32], kosul: (p) => ["B", "C", "D", "gocmen"].includes(p.yer) && !p.bayrak.cark && !p.numara,
      metin: "Çark'ın dazlakları seni barlarına çağırdı. Kazınmış kafalarında harfler, çarklar ve tekrar eden bir şekil vardı. \"Düzen kutsaldır, makine kutsaldır,\" dediler. \"Bizden olursan mahallede kimse sana dokunamaz.\"",
      secenek: [
        ["Katıl", (p) => { p.bayrak.cark = true; p.umut += 6; p.lira += 6; p.onemli.push("Çark tarikatına katıldı; kafası dövmeyle kaplandı."); return "Kafanı kazıdılar ve ilk çark dövmesini tam tepene yaptılar." }],
        ["Reddet", (p) => { if (sans(0.4)) { p.saglik -= 12; return ["Bir gece seni sokakta sıkıştırıp reddetmenin bedelini ödettiler.", "kotu"] } return "Bir daha çağırmadılar." }],
      ],
    },
    {
      id: "yosun", yas: [15, 55], kosul: (p) => p.yosun === 0 && p.yer !== "kalan" && !p.olaylar["sec_yosun"],
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
        ["İn", (p) => { p.bayrak.lagim = true; if (sans(filtreRiski(p))) { p.saglik -= 25; p.lira += 40; p.onemli.push("Lağıma indi; filtresi yolda bitti."); return ["Filtren yarı yolda bitti. Yukarı çıkmayı başardın ama ciğerlerin hasar gördü.", "kotu"] } p.lira += 40; p.onemli.push("Gaz maskesiyle lağıma inip Kalanlar'la alışveriş yaptı."); return "Aşağıda konuşan, adı olan insanlar gördün. Yukarıda bunu anlatsan kimse inanmaz." }],
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
      id: "yukari", yas: [14, 55], kosul: (p) => p.yer === "kalan",
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
      (s) => p.yas >= s.yas[0] && p.yas <= s.yas[1] && !p.olaylar["sec_" + s.id] && (!s.kosul || s.kosul(p))
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
    const s = SECIMLER.find((x) => x.id === id)
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
    const satirlar = []
    const satir = (metin, tur) => satirlar.push({ metin, tur: tur || "" })

    yaslan(p)
    donum(p, satir)
    aile(p, satir)
    yillikGecim(p, satir)

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
    if (p.yer === "kalan") p.mezar = "Kayıt yok. Adı Kalanlar'ın yaşlılarına ezberletildi."
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
    if (p.numara && ["nefer", "cavus"].includes(p.meslek)) return `Numara ${p.numara} boşta bırakılmamıştır; yeniden dağıtılmak üzere ikmal listesine işlenmiştir. İntizam meselesi.`
    if (p.meslek === "konsey") return "Konsey'deki koltuğu boşalmıştır. Halef Reis tarafından belirlenecektir."
    if (p.meslek === "intizamci") return "Serbest görevlinin dosyaları karakolun eksi ikisindeki masada kapatılmıştır. Masa boştur."
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
    const buYil = k.etkYil === p.yil ? "Bu yıl onunla zaten bir şey yaptın." : null
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
    if (sans(I.a(p))) {
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
    { id: "revir", ad: "Revire git", bilgi: "10 lira · sağlık", k: (p) => (p.yer === "kalan" ? "Revir Kalanlar'ı kabul etmez." : p.lira < 10 ? "10 Koloni Lirası gerek." : null), f: (p) => { p.lira -= 10; p.saglik += rnd(10, 20); return ["Revirde gri önlüklü bir hemşire seni muayene etti. 10 liraya bir avuç ilaç aldın.", "iyi"] } },
    { id: "yardimevi", ad: "Yardımlaşma evine git", bilgi: "umut · bazen okuma", k: (p) => (!(altS(p) || p.yer === "koy") ? "Burada yardımlaşma evi yok." : p.yas < 6 ? "Henüz çok küçüksün." : null), f: (p) => { p.umut += 5; if (p.saglik < 60) p.saglik += 5; if (!p.okur && p.yas >= 10 && sans(0.25)) { p.okur = true; p.onemli.push("Okumayı bir yardımlaşma evinde öğrendi."); return ["Çorbanı içerken biri sana eski bir kitaptan okumayı öğretti.", "iyi"] } if (p.yas >= 16 && sans(0.1)) { p.sicil++; return ["Çorba sıcaktı. Ama kapıda Heyet'ten biri gelenlerin adlarını yazıyordu.", "kotu"] } return ["Bir kâse çorba içtin. Masada kimse kimin neye inandığını sormadı.", "iyi"] } },
    { id: "bar", ad: "Barda lağım birası iç", bilgi: "1 lira · umut", k: (p) => (p.yer === "kalan" || p.yer === "hisar" ? "Burada lağım birası satan yok." : p.yas < 16 ? "16 yaşından küçüklere vermiyorlar." : p.lira < 1 ? "1 Koloni Lirası gerek." : null), f: (p) => { p.lira -= 1; p.umut += 3; if (sans(0.12)) { p.saglik -= 8; return ["Barda bir kavgaya karıştın. Sabah kaburgaların konuşuyordu.", "kotu"] } return p.bayrak.cark ? "Çark'ın barında kafası dövmeli kardeşlerinle içtin." : "Bulanık bir bardak bira, üstünde parmak kalınlığında köpük. Tadı tam beklediğin gibiydi." } },
    { id: "yosun_al", ad: "Yosun al", bilgi: "5 lira · unutturur", k: (p) => (p.yas < 14 ? "Henüz çok küçüksün." : p.yer !== "kalan" && p.lira < 5 ? "5 Koloni Lirası gerek." : null), f: (p) => { if (p.yer !== "kalan") p.lira -= 5; if (p.yosun === 0) p.onemli.push("Yosun'la tanıştı."); p.yosun += 12; p.umut += 8; return "Bir avuç kurutulmuş Yosun aldın. O gece sefaletin çok uzakta kaldığı derin bir uyku uyudun." } },
    { id: "yosun_birak", ad: "Yosun'u bırakmayı dene", bilgi: "zor", k: (p) => (p.yosun === 0 ? "Yosun kullanmıyorsun." : null), f: (p) => { if (sans(0.45 + p.umut / 250)) { p.yosun -= 25; p.saglik -= 4; return ["Haftalarca titredin ama bıraktın. En azından şimdilik.", "iyi"] } p.umut -= 3; return ["Üçüncü gece dayanamadın.", "kotu"] } },
    { id: "lagim", ad: "Lağıma in, Kalanlar'la takas yap", bilgi: "lira · radyasyon", k: (p) => (!altS(p) ? "Bunun için Alt Şehir'de olmalısın." : p.yas < 16 ? "16 yaşından küçüksün." : p.numara ? "Nefer lağıma emirle iner." : null), f: (p) => { p.bayrak.lagim = true; const l = rnd(25, 45); p.lira += l; if (sans(filtreRiski(p))) { p.saglik -= 20; return [`Filtren yarı yolda bitti. ${l} lirayla yukarı çıktın ama ciğerlerin zarar gördü.`, "kotu"] } return `Gaz maskeni takıp indin, Kalanlar'dan paketi alıp çıktın. Karşılığında ${l} Koloni Lirası kazandın.` } },
    { id: "karaborsa", ad: "Fişi karaborsada liraya çevir", bilgi: "kötü kur · risk", k: (p) => (p.fis < 100 ? "En az 100 fiş gerek." : null), f: (p) => { const l = Math.round(p.fis / 55); p.lira += l; p.fis = 0; if (sans(0.12)) { p.sicil++; return [`${l} lira aldın. Bir hafta sonra adın bir tutanağa geçti.`, "kotu"] } return `Fişlerini bir karaborsacıya verdin, karşılığında ${l} Koloni Lirası aldın.` } },
    { id: "cark", ad: "Çark'a katıl", bilgi: "koruma · şiddet", k: (p) => (!["B", "C", "D", "gocmen"].includes(p.yer) ? "Çark senin mahallende değil." : p.bayrak.cark ? "Zaten Çark'tansın." : p.numara ? "Üniformalıları sevmezler." : p.yas < 14 || p.yas > 35 ? "14 ile 35 yaş arasını alırlar." : null), f: (p) => { if (sans(0.6)) { p.bayrak.cark = true; p.umut += 6; p.onemli.push("Çark tarikatına katıldı; kafası dövmeyle kaplandı."); return ["Kafanı kazıdılar ve ilk çark dövmesini tam tepene yaptılar.", "donum"] } if (sans(0.5)) { p.saglik -= 8; return ["Barlarına gittin. Seni sınamak için dövdüler, sonra kapı dışarı ettiler.", "kotu"] } return "Barlarına gittin. Seni dinlediler ama bir şey söylemediler. Belki seneye." } },
    { id: "mezarlik", ad: "Yamaçtaki mezarlığa çık", bilgi: "umut", k: (p) => (p.yer === "kalan" ? "Kalanlar'ın mezarı yok; adları ezberlenir." : p.yas < 8 ? "Henüz çok küçüksün." : null), f: (p) => { p.umut += rnd(3, 6); const olu = aileTum(p).filter((k) => !k.sag); if (olu.length) { const k = sec(olu); return `${k.ad} için dikilen taşın başında oturdun. Aşağıda Boğaz zift gibi kapkara duruyordu.` } return "Taşların arasında oturup Boğaz'a baktın. Kimse ölülerden manzarayı esirgemeyi akıl etmemiş." } },
    { id: "dilekce", ad: "Heyet'e dilekçe yaz", bilgi: "okuma yazma", k: (p) => (p.yer === "kalan" ? "Heyet Kalanlar'ı tanımaz." : !p.okur ? "Okuma yazma bilmek gerek." : p.yas < 18 ? "18 yaşından küçüksün." : null), f: (p) => { const r = R(); if (r < 0.15) { p.fis += 80; return ["Dilekçen okunmuş. Erzak payın artırıldı.", "iyi"] } if (r < 0.27) { p.sicil++; return ["Dilekçen bir dosyaya girdi. Adın da.", "kotu"] } return "Dilekçeni verdin. Cevap gelmedi." } },
    { id: "es_ara", ad: "Eş ara", bilgi: "evlilik", k: (p) => (p.evli && p.es && p.es.sag ? "Zaten evlisin." : p.yas < 16 ? "16 yaşından küçüksün." : p.yas > 60 ? "Bu yaştan sonra kimse aramıyor." : null), f: (p) => { if (sans(0.35 + p.umut / 300)) { if (p.es) { p.es.rol = "eskies"; (p.eskiEsler = p.eskiEsler || []).push(p.es) } evlen(p); p.onemli.push(`${p.yas} yaşında ${p.es.ad} ile evlendi.`); return [`${p.es.ad} ile tanıştın. Bir yıl dolmadan evlendiniz.`, "iyi"] } return "Birkaç kişiyle tanıştın ama hiçbiri bir yere varmadı." } },
    { id: "cocuk", ad: "Çocuk yapmayı dene", bilgi: "aile", k: (p) => (!(p.evli && p.es && p.es.sag) ? "Önce evli olmalısın." : p.yas > (p.cins === "k" ? 44 : 55) || p.es.yas > 50 ? "Artık bu yaşta olmuyor." : null), f: (p) => { if (sans(0.45)) { const l = []; const c = cocukDogdu(p, (m) => l.push(m)); return [`Bir çocuğun oldu: ${c.ad}.`, "iyi"] } return "Bu yıl olmadı." } },
    { id: "okul_birak", ad: "Okulu bırak", bilgi: "sokağa çık", k: (p) => (!p.okulda ? "Okula gitmiyorsun." : p.yer === "hisar" ? "Hisarlı okulu bırakmaz." : null), f: (p) => { p.okulda = false; p.bayrak.ileriOkul = false; p.bayrak.sokak = true; return "Ders kitabını küçük bir çocuğa verip sokağa çıktın." } },
    { id: "oku_ogren", ad: "Okumayı öğrenmeye çalış", bilgi: "akşam dersleri", k: (p) => (p.okur ? "Zaten okuyorsun." : p.yas < 15 ? "15 yaşından küçüksün." : !(altS(p) || p.yer === "koy") ? "Burada öğretecek kimse yok." : null), f: (p) => { if (sans(0.35)) { p.okur = true; p.onemli.push(`${p.yas} yaşında okumayı öğrendi.`); return ["Akşamları bir yardımlaşma evinde harfleri söktün. Artık tutanakları okuyabiliyorsun.", "iyi"] } return "Bu yıl harfleri bir türlü sökemedin." } },
    { id: "goc", ad: "Alt Şehir'e göç et", bilgi: "iş · pus", k: (p) => (p.yer !== "koy" ? "Köyde yaşamıyorsun." : p.yas < 16 || p.yas > 45 ? "16 ile 45 yaş arası olmalısın." : null), f: (p) => { p.yer = sec(["C", "D"]); if (p.meslek === "balikci" || p.meslek === "ciftci") p.meslek = "yok"; p.onemli.push(`Köyden ${YERLER[p.yer].ad}'ne göçtü.`); return [`${YERLER[p.yer].uzun} bir oda buldun. İlk sabah öksürerek uyandın.`, "donum"] } },
    { id: "ana", ad: "Ana'ya dua et", bilgi: "umut", k: (p) => (p.yer !== "kalan" ? "Ana'yı yalnızca Kalanlar bilir." : null), f: (p) => { p.umut += 5; return "Tünelin derinliklerine doğru Ana'nın adını fısıldadın. Cevap gelmedi ama kendini yalnız hissetmedin." } },
    { id: "mazgal", ad: "Mazgaldan yukarıyı izle", bilgi: "merak", k: (p) => (p.yer !== "kalan" ? "Yukarıdasın zaten." : null), f: (p) => { p.umut += 2; return sec(["Maskesiz yüzler, numaralı yakalar ve asit pusu gördün. Yukarısı tuhaf bir yer.", "Bir çocuk mazgala eğilip sana baktı. Kaçmadı."]) } },
  ]

  // yedek filtre varsa lağımda filtrenin bitme riski çok düşer
  function filtreRiski(p) {
    if (p.filtre > 0) {
      p.filtre--
      return 0.03
    }
    return 0.25
  }

  function etkinlikler(p) {
    return ETKINLIK.map((e) => {
      const sebep = p.olu ? "Öldün." : p.buYil.etk[e.id] ? "Bunu bu yıl zaten yaptın." : e.k(p)
      return { id: e.id, ad: e.ad, bilgi: e.bilgi, uygun: !sebep, sebep }
    }).filter((e) => !(e.sebep && /^(Köyde yaşamıyorsun|Ana'yı yalnızca|Yukarıdasın|Okula gitmiyorsun|Yosun kullanmıyorsun)/.test(e.sebep)))
  }

  function etkinlik(p, id) {
    const e = ETKINLIK.find((x) => x.id === id)
    if (!e) return { metin: "Böyle bir şey yok.", tur: "sessiz" }
    const sebep = p.olu ? "Öldün." : p.buYil.etk[id] ? "Bunu bu yıl zaten yaptın." : e.k(p)
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
    { id: "ilac", ad: "Karaborsadan antibiyotik", fiyat: 12, bilgi: "sağlık, ama sahtesi de çıkar", k: () => null, f: (p) => { if (sans(0.12)) return ["İlaç sahte çıktı. Tebeşir ile şekerden başka bir şey değildi.", "kotu"]; p.saglik += rnd(12, 20); return ["Karaborsacının kutusundan çıkan ilaç işe yaradı. Ateşin düştü.", "iyi"] } },
    { id: "filtre", ad: "Gaz maskesi filtresi", fiyat: 6, coklu: true, bilgi: "lağımda filtren yarı yolda bitmez", k: (p) => lagimdaPazarYok(p) || (p.filtre >= 3 ? "Üç filtren var; fazlası kurur." : null), f: (p) => { p.filtre = (p.filtre || 0) + 1; return `Kaçakçıdan yeni bir filtre aldın. Şimdi ${p.filtre} filtren var.` } },
    { id: "palto", ad: "Kalın bir kışlık palto", fiyat: 10, tek: "palto", bilgi: "kışın açlık ve soğuk daha az vurur", k: lagimdaPazarYok, f: (p) => { p.bayrak.palto = true; return ["Eskiciden yünlü, ağır bir palto aldın. İlk kez bir kışı üşümeden geçireceksin.", "iyi"] } },
    { id: "oda", ad: "Daha iyi bir oda kirala", fiyat: 12, bilgi: "kirası her yıl ödenir · ciğerin daha az yıpranır", k: (p) => lagimdaPazarYok(p) || (p.yer === "hisar" ? "Hisar'da zaten iyi bir evin var." : p.bayrak.oda ? "Zaten kiradasın." : p.yas < 16 ? "16 yaşından küçüklere oda vermiyorlar." : null), f: (p) => { p.bayrak.oda = true; p.onemli.push(`${p.yas} yaşında kendi odasını kiraladı.`); return ["Penceresi sıkı kapanan, duvarı kuru bir oda kiraladın. Kirası her yıl ödenecek.", "iyi"] } },
    { id: "hediye", ad: "Ailene hediye al", fiyat: 6, bilgi: "herkesle yakınlığın artar", k: (p) => (aileTum(p).some((k) => k.sag && k.yas >= 0) ? null : "Hediye alacak kimsen kalmadı."), f: (p) => { for (const k of aileTum(p)) if (k.sag && k.yas >= 0) k.yakinlik = kel(k.yakinlik + 6, 0, 100); p.umut += 2; return ["Pazardan herkese küçük bir şey aldın. Akşam evde uzun zamandır olmayan bir neşe vardı.", "iyi"] } },
    { id: "kitap", ad: "Eski bir kitap", fiyat: 3, bilgi: "umut · okur yazar olmalısın", k: (p) => lagimdaPazarYok(p) || (!p.okur ? "Okuma yazma bilmiyorsun." : null), f: (p) => { p.umut += 5; return sec(["Eskicide kapağı kopmuş bir kitap buldun. Uzun Karanlık'tan önce yazılmış; içindeki dünyayı tanımıyorsun.", "Bir şiir kitabı aldın. Yarısını anlamadın ama her gece okudun."]) } },
    { id: "tutun", ad: "Bir paket tütün", fiyat: 1, bilgi: "biraz umut, biraz ciğer", k: () => null, f: (p) => { p.umut += 2; p.ciger -= 1; return "Acı bir tütün. Rutubet kokusunu bastırmıyor ama elin bir işle meşgul oluyor." } },
    { id: "rusvet", ad: "Memura rüşvet ver, sicilini temizlet", fiyat: 30, bilgi: "sicilin bir derece temizlenir", k: (p) => lagimdaPazarYok(p) || (p.sicil === 0 ? "Sicilin zaten temiz." : null), f: (p) => { if (sans(0.8)) { p.sicil--; return ["Zarf masanın çekmecesine girdi. Bir hafta sonra sicilindeki bir kayıt kaybolmuştu.", "iyi"] } p.sicil++; return ["Memur zarfı aldı, sonra seni Heyet'e bildirdi. Sicilin daha da kirlendi.", "kotu"] } },
    { id: "evrak", ad: "Sahte kayıt evrakı", fiyat: 40, tek: "evrak", bilgi: "kayıtsızlıktan çıkarsın", k: (p) => lagimdaPazarYok(p) || (p.basamak !== 5 ? "Zaten kayıtlısın." : null), f: (p) => { if (sans(0.12)) { p.sicil += 2; return ["Evrak sahte olduğu ilk kontrolde anlaşıldı. Sicilin karardı.", "kotu"] } p.basamak = 4; p.bayrak.evrak = true; p.onemli.push("Sahte bir evrakla kayda geçti."); return ["Sahteci adını eski bir deftere işledi. Artık Nizam'ın gözünde kayıtlı birisin.", "donum"] } },
    { id: "hisar", ad: "Bir günlüğüne Hisar'a çık", fiyat: 20, bilgi: "geçiş izni · umut", k: (p) => lagimdaPazarYok(p) || (p.yer === "hisar" ? "Zaten Hisar'dasın." : p.meslek === "hizmetci" ? "Her gün oradasın zaten." : p.yas < 12 ? "Çocuklara geçiş izni verilmiyor." : null), f: (p) => { p.umut += 6; return "Bir günlük geçiş izni aldın. Hisar'ın sokakları temizdi, kimse öksürmüyordu. Akşam yokuşu inerken Alt Şehir'in ışıklarına başka gözle baktın." } },
  ]

  function pazar(p) {
    return PAZAR.map((x) => {
      let sebep = p.olu ? "Öldün." : x.tek && p.bayrak[x.tek] ? "Bundan sende var." : !x.coklu && p.buYil.pazar && p.buYil.pazar[x.id] ? "Bunu bu yıl zaten aldın." : p.yas < 6 ? "Henüz çok küçüksün." : x.k(p)
      if (!sebep && p.lira < x.fiyat) sebep = `${x.fiyat} Koloni Lirası gerek.`
      return { id: x.id, ad: x.ad, fiyat: x.fiyat, bilgi: x.bilgi, uygun: !sebep, sebep }
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

  const KK = { dogum, yil, secimYap, tutanak, kiyas, tamAd, kisiAd, YERLER, BASAMAK_AD, MESLEK, temelOlum, sicilAd, basamakAd, aileListe, aileEylemleri, aileEylem, isler, basvur, istifa, etkinlikler, etkinlik, pazar, satinAl }
  if (typeof window !== "undefined") window.KK = KK
  else globalThis.KK = KK
})()
