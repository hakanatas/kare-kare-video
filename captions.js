/* ─────────────────────────────────────────────────────────────
   ALTYAZILAR / CAPTIONS — düzenlenebilir (metin). Zamanlar film saniyesidir.
   note: öğretmen için önerilen seslendirme cümlesi.
   Senaryo değişirse: node scripts/build.mjs (zamanlar yeniden hesaplanır).
   ───────────────────────────────────────────────────────────── */
(function (root) {
  const CAPTIONS = [
    { scene: 1, start: 0.9, end: 7.6, tr: "Okul gezisinde bir sürü video çektik", en: "We shot lots of videos on the school trip",
      note: "Karo ve arkadaşları okul gezisinde telefonla bir sürü kısa video çekti. Şimdi bunları tek bir güzel videoda birleştirmek istiyorlar." },
    { scene: 1, start: 8.4, end: 14.2, tr: "Ama önce: video nedir?", en: "But first: what is a video?",
      note: "Görüntü ve ses bilgisayara nasıl aktarılıyor? Önce videoyu tanıyalım." },
    { scene: 2, start: 17, end: 22.8, tr: "Kare: video art arda gelen resimlerdir", en: "Frame: a video is pictures shown one after another",
      note: "Video aslında art arda gösterilen resimlerdir. Her birine kare denir. Saniyede 30 kare gösterilince gözümüz bunu hareket olarak görür." },
    { scene: 2, start: 23.6, end: 29.3, tr: "Çözünürlük: karedeki piksel sayısı", en: "Resolution: the number of pixels in a frame",
      note: "Her kare piksellerden oluşur. 1920'ye 1080 piksellik bir video, daha az pikselli bir videodan daha nettir." },
    { scene: 2, start: 30.1, end: 35.8, tr: "En yaygın video dosyası: .mp4", en: "The most common video file: .mp4",
      note: "Videolar genellikle .mp4 olarak kaydedilir. Bu dosyada hem görüntü hem ses bulunur." },
    { scene: 2, start: 36.6, end: 43.3, tr: "Video: görüntü, ses ve zaman", en: "Video: picture, sound and time",
      note: "Video düzenleme programlarıyla görüntüyü, sesi ve zamanı birlikte düzenleriz." },
    { scene: 3, start: 46.1, end: 51.8, tr: "Hangi video aracını seçelim?", en: "Which video tool should we choose?",
      note: "Video araçlarını işimize, cihazımıza ve güvenliğe göre seçeriz." },
    { scene: 3, start: 52.6, end: 58.3, tr: "Uzun işe masaüstü, hızlı işe mobil", en: "Desktop for long work, mobile for quick edits",
      note: "Uzun bir gezi filmini masaüstü programında rahatça düzenleriz. Kısa ve hızlı bir video için telefondaki uygulama yeter." },
    { scene: 3, start: 59.1, end: 66.3, tr: "Ortak işe çevrim içi, altyazıya yapay zekâ", en: "Online for teamwork, AI for subtitles",
      note: "Grupça bir proje için çevrim içi araç, otomatik altyazı için yapay zekâ destekli araç kullanabiliriz. Yapay zekânın yazdığı altyazıyı yine de kontrol ederiz." },
    { scene: 4, start: 69, end: 74.7, tr: "Klipleri içe aktar ve fazlalığı kes", en: "Import the clips and cut the extra",
      note: "Telefondaki klipleri programa aktarır, zaman çizelgesine sürükleriz. Titrek ve gereksiz kısımları keseriz." },
    { scene: 4, start: 75.5, end: 81.2, tr: "Klipler arasına geçiş, başa başlık", en: "Transitions between clips, a title at the start",
      note: "Klipler arasına yumuşak geçişler, başa da \"Gezimiz\" başlığını ekleriz." },
    { scene: 4, start: 82, end: 88, tr: "Müzik ekle, otobüs yolculuğunu hızlandır", en: "Add music and speed up the bus ride",
      note: "Ses katmanına fon müziği ekleriz. Uzun otobüs yolculuğunu iki kat hızlandırırız." },
    { scene: 4, start: 88.8, end: 95.5, tr: "Videoyu .mp4 olarak dışa aktar", en: "Export the video as .mp4",
      note: "Son olarak videoyu .mp4 olarak dışa aktarırız. Gezi videomuz hazır!" },
    { scene: 5, start: 98.3, end: 104.1, tr: "Her klibe ayrı bir geçiş efekti koymak", en: "A different transition on every clip",
      note: "Her klip arasına farklı ve gösterişli bir geçiş koymak izleyicinin dikkatini dağıtır. Sade geçişler daha iyi." },
    { scene: 5, start: 105, end: 111.3, tr: "Arkadaşlarımın iznini alarak videoya koymak", en: "Putting friends in the video with permission",
      note: "Videoda görünen arkadaşlarımızdan paylaşmadan önce izin almak doğrudur." },
    { scene: 5, start: 112, end: 117.8, tr: "Yapay zekâ altyazısını kontrol etmek", en: "Checking the AI subtitles",
      note: "Yapay zekâ altyazıyı hızlı hazırlar ama hata yapabilir. Kontrol edip düzeltmek verimli ve doğrudur." },
    { scene: 6, start: 120.5, end: 126.2, tr: "Aklında kalsın: az ama öz kurgu", en: "Remember: keep the edit short and sweet",
      note: "Aklında kalsın: iyi bir videoda gereksiz kısımlar kesilir, geçişler sade tutulur." },
    { scene: 6, start: 127, end: 132.8, tr: "Kamera sende, kurgu sende!", en: "The camera and the edit are yours!",
      note: "Artık sen de videolarını kurgulayabilirsin!" },
  ];
  if (typeof module !== 'undefined' && module.exports) module.exports = CAPTIONS;
  else { root.BF = root.BF || {}; root.BF.CAPTIONS = CAPTIONS; }
})(typeof window !== 'undefined' ? window : globalThis);
