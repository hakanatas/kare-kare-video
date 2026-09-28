/* ─────────────────────────────────────────────────────────────
   KARE KARE VİDEO — BTY.6.2.8 (senaryo)
   Her vuruş bir altyazıdır: tr, en, note (öğretmen için seslendirme).
   Değiştirdikten sonra: npm run build
   ───────────────────────────────────────────────────────────── */
BF.defineFilm({
  meta: {
    slug: 'kare-kare-video', title: 'Kare Kare Video', titleEn: 'Frame by Frame', code: 'BTY.6.2.8',
    outcomeEn: 'Making use of video editing programs',
    summary: 'Videonun art arda gösterilen resimlerden (karelerden) oluştuğu, piksel ve çözünürlük kavramlarıyla birlikte açıklanır; .mp4 gibi video dosyası türleri tanıtılır. İşe göre masaüstü, mobil, çevrim içi ya da yapay zekâ destekli video aracı seçilir. Bir video düzenleme programında klipler içe aktarılır, kesilir, geçiş eklenir, başlık yazılır, müzik eklenir, hız ayarlanır ve video dışa aktarılır. Son olarak video araçlarının kullanımı verimlilik ve etik açısından değerlendirilir.',
    summaryEn: 'Video is explained as many still frames per second, with pixels and resolution; video files are introduced; desktop, mobile, online and AI tools are matched to jobs; Karo imports, cuts, adds transitions, a title, music and speed, and exports; and tool use is judged.',
    blurb: 'Kare, çözünürlük ve video dosyası; uygun aracı seçmek; kes, geçiş, başlık, müzik, dışa aktar.',
    posterAlt: 'Başlık ve Karo; çevresinde klaket, film şeridi, kamera ve oynat karoları',
  },
  scenes: [
    { type: 'intro', icons: [{ icon: 'clapper', c: 'safran' }, { icon: 'film', c: 'kobalt' }, { icon: 'webcam', c: 'mercan' }, { icon: 'play', c: 'zumrut' }, { icon: 'pixels', c: 'turkuaz' }, { icon: 'phone', c: 'mor' }, { icon: 'ai', c: 'kobalt' }, { icon: 'headphones', c: 'mercan' }],
      beats: [
        { tr: 'Okul gezisinde bir sürü video çektik', en: 'We shot lots of videos on the school trip', extra: 1,
          note: 'Karo ve arkadaşları okul gezisinde telefonla bir sürü kısa video çekti. Şimdi bunları tek bir güzel videoda birleştirmek istiyorlar.' },
        { tr: 'Ama önce: video nedir?', en: 'But first: what is a video?',
          note: 'Görüntü ve ses bilgisayara nasıl aktarılıyor? Önce videoyu tanıyalım.' },
      ] },
    { type: 'cards', name: 'Video nedir?', en: 'What is video?', desc: 'Kare, çözünürlük ve video dosyası türleri.', out: 'a',
      cards: [
        { word: 'KARE', def: 'Video, art arda gösterilen resimlerdir', icon: 'film', c: 'kobalt' },
        { word: 'ÇÖZÜNÜRLÜK', def: 'Her karedeki piksel sayısı: 1920 × 1080', icon: 'pixels', c: 'turkuaz' },
        { word: 'DOSYA TÜRÜ', def: '.mp4 en yaygın video dosyasıdır', icon: 'file', c: 'mercan' },
      ],
      result: { word: 'VİDEO', c: 'safran', join: false, chips: ['görüntü', 'ses', 'zaman'], line: 'Saniyede 30 kare: göz hareket olarak görür' },
      beats: [
        { tr: 'Kare: video art arda gelen resimlerdir', en: 'Frame: a video is pictures shown one after another',
          note: 'Video aslında art arda gösterilen resimlerdir. Her birine kare denir. Saniyede 30 kare gösterilince gözümüz bunu hareket olarak görür.' },
        { tr: 'Çözünürlük: karedeki piksel sayısı', en: 'Resolution: the number of pixels in a frame',
          note: 'Her kare piksellerden oluşur. 1920\'ye 1080 piksellik bir video, daha az pikselli bir videodan daha nettir.' },
        { tr: 'En yaygın video dosyası: .mp4', en: 'The most common video file: .mp4',
          note: 'Videolar genellikle .mp4 olarak kaydedilir. Bu dosyada hem görüntü hem ses bulunur.' },
        { tr: 'Video: görüntü, ses ve zaman', en: 'Video: picture, sound and time', extra: 1,
          note: 'Video düzenleme programlarıyla görüntüyü, sesi ve zamanı birlikte düzenleriz.' },
      ] },
    { type: 'sort', name: 'Uygun araç', en: 'The right tool', desc: 'İşe göre masaüstü, mobil, çevrim içi ya da yapay zekâ destekli video aracı.', out: 'b',
      bins: [{ label: 'MASAÜSTÜ', c: 'kobalt' }, { label: 'MOBİL', c: 'mercan' }, { label: 'ÇEVRİM İÇİ', c: 'turkuaz' }, { label: 'YAPAY ZEKÂ', c: 'mor' }],
      items: [
        { icon: 'laptop', name: 'Uzun gezi filmi', bin: 0, beat: 1 },
        { icon: 'phone', name: 'Telefonda hızlı kısa video', bin: 1, beat: 1 },
        { icon: 'group', name: 'Grupça ortak proje', bin: 2, beat: 2 },
        { icon: 'translate', name: 'Otomatik altyazı', bin: 3, beat: 2 },
      ],
      beats: [
        { tr: 'Hangi video aracını seçelim?', en: 'Which video tool should we choose?',
          note: 'Video araçlarını işimize, cihazımıza ve güvenliğe göre seçeriz.' },
        { tr: 'Uzun işe masaüstü, hızlı işe mobil', en: 'Desktop for long work, mobile for quick edits',
          note: 'Uzun bir gezi filmini masaüstü programında rahatça düzenleriz. Kısa ve hızlı bir video için telefondaki uygulama yeter.' },
        { tr: 'Ortak işe çevrim içi, altyazıya yapay zekâ', en: 'Online for teamwork, AI for subtitles', extra: 1,
          note: 'Grupça bir proje için çevrim içi araç, otomatik altyazı için yapay zekâ destekli araç kullanabiliriz. Yapay zekânın yazdığı altyazıyı yine de kontrol ederiz.' },
      ] },
    { type: 'app', app: 'video', title: 'Video Düzenleyici', name: 'Arayüzü kullanalım', en: 'Using the interface', desc: 'İçe aktarma, kesme, geçiş, başlık, müzik, hız ve dışa aktarma.', out: 'c',
      data: { title: 'Gezimiz', file: 'okul-gezimiz.mp4  dışa aktarıldı', speed: 'Hız: 2×' },
      tools: [{ id: 'import', label: 'İçe aktar' }, { id: 'cut', label: 'Kes' }, { id: 'transition', label: 'Geçiş' }, { id: 'text', label: 'Başlık' }, { id: 'music', label: 'Müzik' }, { id: 'speed', label: 'Hız' }, { id: 'export', label: 'Dışa aktar' }],
      beats: [
        { tr: 'Klipleri içe aktar ve fazlalığı kes', en: 'Import the clips and cut the extra', tools: ['import', 'cut'], hint: 'Zaman çizelgesine sürükle',
          note: 'Telefondaki klipleri programa aktarır, zaman çizelgesine sürükleriz. Titrek ve gereksiz kısımları keseriz.' },
        { tr: 'Klipler arasına geçiş, başa başlık', en: 'Transitions between clips, a title at the start', tools: ['transition', 'text'], hint: 'Geçiş + "Gezimiz"',
          note: 'Klipler arasına yumuşak geçişler, başa da "Gezimiz" başlığını ekleriz.' },
        { tr: 'Müzik ekle, otobüs yolculuğunu hızlandır', en: 'Add music and speed up the bus ride', tools: ['music', 'speed'], hint: 'Hız: 2×',
          note: 'Ses katmanına fon müziği ekleriz. Uzun otobüs yolculuğunu iki kat hızlandırırız.' },
        { tr: 'Videoyu .mp4 olarak dışa aktar', en: 'Export the video as .mp4', tool: 'export', hint: 'okul-gezimiz.mp4', extra: 1,
          note: 'Son olarak videoyu .mp4 olarak dışa aktarırız. Gezi videomuz hazır!' },
      ] },
    { type: 'judge', name: 'Verimli ve doğru mu?', en: 'Efficient and fair?', desc: 'Video araçlarının kullanımı verimlilik ve etik açısından değerlendirilir.', out: 'ç', labels: { ok: 'uygun', no: 'uygun değil' },
      beats: [
        { tr: 'Her klibe ayrı bir geçiş efekti koymak', en: 'A different transition on every clip',
          note: 'Her klip arasına farklı ve gösterişli bir geçiş koymak izleyicinin dikkatini dağıtır. Sade geçişler daha iyi.',
          row: { icon: 'film', text: 'Her klip arasına farklı, gösterişli bir geçiş koydum', ok: false, why: 'Dikkat dağıtır, sade olmalı' } },
        { tr: 'Arkadaşlarımın iznini alarak videoya koymak', en: 'Putting friends in the video with permission',
          note: 'Videoda görünen arkadaşlarımızdan paylaşmadan önce izin almak doğrudur.',
          row: { icon: 'group', text: 'Videoda görünen arkadaşlarımdan izin aldım', ok: true, why: 'Mahremiyete saygı' } },
        { tr: 'Yapay zekâ altyazısını kontrol etmek', en: 'Checking the AI subtitles',
          note: 'Yapay zekâ altyazıyı hızlı hazırlar ama hata yapabilir. Kontrol edip düzeltmek verimli ve doğrudur.',
          row: { icon: 'translate', text: 'Yapay zekânın yazdığı altyazıyı okuyup düzelttim', ok: true, why: 'Hızlı ve doğru' } },
      ] },
    { type: 'summary',
      lines: [
        { icon: 'film', c: 'kobalt', text: 'Video art arda gelen karelerdir' },
        { icon: 'phone', c: 'mercan', text: 'İşe ve cihaza uygun aracı seç' },
        { icon: 'clapper', c: 'safran', text: 'Kes, geçiş, başlık, müzik, dışa aktar' },
      ],
      beats: [
        { tr: 'Aklında kalsın: az ama öz kurgu', en: 'Remember: keep the edit short and sweet',
          note: 'Aklında kalsın: iyi bir videoda gereksiz kısımlar kesilir, geçişler sade tutulur.' },
        { tr: 'Kamera sende, kurgu sende!', en: 'The camera and the edit are yours!',
          note: 'Artık sen de videolarını kurgulayabilirsin!' },
      ] },
  ],
});
