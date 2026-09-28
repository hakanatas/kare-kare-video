/* ─────────────────────────────────────────────────────────────
   FİLM KİMLİĞİ / Film identity — scripts/build.mjs ile scenes/film.js'ten üretilir.
   Süreler altyazı uzunluğundan hesaplanır (okuma hızı: ~10 harf/sn).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const META = {
    "slug": "kare-kare-video",
    "title": "Kare Kare Video",
    "titleEn": "Frame by Frame",
    "grade": 6,
    "theme": "Dijital Ürün Tasarımı ve Geliştirme",
    "code": "BTY.6.2.8",
    "outcome": "Video düzenleme programlarından yararlanabilme",
    "outcomeEn": "Making use of video editing programs",
    "duration": 134.1,
    "tempo": 1
  };
  const SCENES = [
    {
      "id": "s0",
      "t0": 0,
      "t1": 15.5,
      "name": "",
      "en": "",
      "concept": "",
      "noHeader": true
    },
    {
      "id": "s1",
      "t0": 15.5,
      "t1": 44.6,
      "name": "Video nedir?",
      "en": "What is video?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s2",
      "t0": 44.6,
      "t1": 67.6,
      "name": "Uygun araç",
      "en": "The right tool",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s3",
      "t0": 67.6,
      "t1": 96.9,
      "name": "Arayüzü kullanalım",
      "en": "Using the interface",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s4",
      "t0": 96.9,
      "t1": 119.1,
      "name": "Verimli ve doğru mu?",
      "en": "Efficient and fair?",
      "concept": "",
      "noHeader": false
    },
    {
      "id": "s5",
      "t0": 119.1,
      "t1": 134.1,
      "name": "Aklında kalsın",
      "en": "Remember",
      "concept": "",
      "noHeader": false
    }
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = { META, SCENES };
  else { root.BF = root.BF || {}; root.BF.META = META; root.BF.SCENES = SCENES; }
})(typeof window !== 'undefined' ? window : globalThis);
