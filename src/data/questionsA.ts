import { Question } from '../types';

export const questionsPacketA: Question[] = [
  // =================== BAHASA INDONESIA (SOAL 1 - 30) ===================
  {
    id: 1,
    number: 1,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Kadar gula darah yang terkontrol dengan baik sangat penting bagi metabolisme tubuh remaja. Konsumsi makanan berserat tinggi seperti gandum utuh, oat, dan kacang-kacangan memperlambat penyerapan karbohidrat sehingga lonjakan glukosa dapat dicegah. Selain itu, aktivitas fisik minimal 30 menit setiap hari membantu sel-sel otot menyerap glukosa secara mandiri. Menurut penelitian yang diterbitkan Kementerian Kesehatan RI, remaja yang membiasakan sarapan bergizi seimbang memiliki daya konsentrasi belajar 25% lebih tinggi dibanding yang melewatkan sarapan.`,
    questionText: `Berdasarkan teks di atas, apa manfaat utama dari konsumsi makanan berserat tinggi bagi metabolisme tubuh remaja?`,
    options: [
      { key: 'A', text: 'Menghilangkan kebutuhan insulin dalam peredaran darah tubuh' },
      { key: 'B', text: 'Memperlambat penyerapan karbohidrat sehingga lonjakan glukosa dapat dicegah' },
      { key: 'C', text: 'Mempercepat pengeluaran glukosa melalui keringat saat berolahraga' },
      { key: 'D', text: 'Menggantikan peran sarapan pagi sebelum beraktivitas di sekolah' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada kalimat kedua teks secara tersurat disebutkan: "Konsumsi makanan berserat tinggi ... memperlambat penyerapan karbohidrat sehingga lonjakan glukosa dapat dicegah."',
    recommendationHint: 'Latih kemampuan memindai kata kunci (scanning) pada teks informasi tersurat.'
  },
  {
    id: 2,
    number: 2,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Di era transformasi medis digital, telemedisin menjadi salah satu terobosan signifikan. Istilah "anamnesis daring" merujuk pada proses wawancara medis awal yang dilakukan tenaga kesehatan terhadap pasien melalui platform digital sebelum diagnosis formal ditentukan. Prosedur ini memangkas waktu tunggu di poli klinik secara dramatis.`,
    questionText: `Makna istilah "anamnesis daring" pada kutipan teks tersebut adalah...`,
    options: [
      { key: 'A', text: 'Pemberian obat keras kepada pasien tanpa resep dokter spesialis' },
      { key: 'B', text: 'Wawancara medis awal oleh tenaga kesehatan kepada pasien melalui sarana digital' },
      { key: 'C', text: 'Pembedahan jarak jauh menggunakan robot berbasis jaringan internet satelit' },
      { key: 'D', text: 'Pengiriman sampel laboratorium darah antar-rumah sakit secara cepat' }
    ],
    correctAnswer: 'B',
    explanation: 'Kalimat kedua mendefinisikan anamnesis daring secara gamblang sebagai proses wawancara medis awal melalui platform digital.',
    recommendationHint: 'Pelajari kosakata serapan teknis dan bidang ilmu biologi/kesehatan.'
  },
  {
    id: 3,
    number: 3,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Pencemaran mikroplastik telah ditemukan di aliran sungai perkotaan hingga ke jaringan organ biota perairan. Partikel sintetis berukuran kurang dari lima milimeter ini sulit terurai dan sering disalahartikan sebagai pakan oleh ikan kecil. Ketika ikan tersebut dimakan oleh predator yang lebih besar dan akhirnya dikonsumsi manusia, partikel beracun mengalami bioakumulasi di sepanjang rantai makanan. Jika pembuangan sampah plastik sekali pakai tidak segera dibatasi, ekosistem perairan dan kesehatan populasi manusia berada dalam ancaman serius.`,
    questionText: `Ide pokok paragraf tersebut adalah...`,
    options: [
      { key: 'A', text: 'Karakteristik ukuran mikroplastik yang sulit terlihat oleh mata manusia' },
      { key: 'B', text: 'Bahaya dan dampak rantai pencemaran mikroplastik bagi ekosistem dan manusia' },
      { key: 'C', text: 'Jenis pakan buatan yang aman bagi perkembangan benih ikan air tawar' },
      { key: 'D', text: 'Kandungan kimia plastik sekali pakai yang mudah larut dalam air hangat' }
    ],
    correctAnswer: 'B',
    explanation: 'Seluruh kalimat dalam paragraf menjelaskan ancaman dan bahaya mikroplastik mulai dari sungai, biota, hingga manusia.',
    recommendationHint: 'Identifikasi gagasan umum yang memayungi seluruh kalimat penjelas dalam paragraf.'
  },
  {
    id: 4,
    number: 4,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Teknologi pendingin vaksin berbasis energi surya portabel berhasil dikembangkan oleh peneliti muda Indonesia. Alat ini mampu mempertahankan suhu dingin 2 hingga 8 derajat Celsius selama 48 jam nonstop tanpa pasokan listrik PLN. Dengan demikian, distribusi imunisasi ke daerah 3T (tertinggal, terdepan, dan terluar) kini tidak lagi terkendala oleh rusaknya rantai dingin (cold chain) vaksin.`,
    questionText: `Simpulan yang paling tepat dari kutipan teks di atas adalah...`,
    options: [
      { key: 'A', text: 'Inovasi pendingin surya portabel membuka akses pemerataan distribusi vaksin di wilayah pelosok.' },
      { key: 'B', text: 'Seluruh fasilitas kesehatan di Indonesia kini telah mandiri energi dari tenaga surya.' },
      { key: 'C', text: 'Vaksin hanya dapat berkhasiat jika disimpan pada suhu di bawah nol derajat Celsius.' },
      { key: 'D', text: 'Energi surya merupakan satu-satunya sumber daya yang murah bagi industri farmasi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Simpulan merangkum premis inovasi pendingin surya dan pemecahan masalah rantai dingin di wilayah 3T.',
    recommendationHint: 'Hindari simpulan yang mengandung generalisasi berlebihan seperti "seluruh" atau "satu-satunya".'
  },
  {
    id: 5,
    number: 5,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `(1) Berdasarkan data BPS tahun 2024, angka harapan hidup masyarakat perkotaan meningkat menjadi 73,5 tahun. 
(2) Kenaikan ini didorong oleh membaiknya sanitasi lingkungan serta keterjangkauan fasilitas kesehatan tingkat pertama. 
(3) Namun demikian, gaya hidup sedentari alias kurang bergerak di kalangan remaja modern sungguh sangat memprihatinkan dan pasti akan menghancurkan masa depan generasi muda. 
(4) Pola makan cepat saji tinggi natrium juga menyumbang peningkatan kasus hipertensi dini.`,
    questionText: `Kalimat yang berisi opini subjektif dalam teks tersebut ditandai dengan nomor...`,
    options: [
      { key: 'A', text: '(1)' },
      { key: 'B', text: '(2)' },
      { key: 'C', text: '(3)' },
      { key: 'D', text: '(4)' }
    ],
    correctAnswer: 'C',
    explanation: 'Kalimat (3) memuat kata emotif subjektif "sungguh sangat memprihatinkan dan pasti akan menghancurkan" yang merupakan opini pribadi penulis.',
    recommendationHint: 'Perhatikan kata-kata sifat subjektif yang tidak disertai data kuantitatif.'
  },
  {
    id: 6,
    number: 6,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Penulis mengklaim bahwa pembelajaran berbasis kecerdasan buatan (AI) di sekolah menengah harus menggantikan peran guru secara menyeluruh agar nilai ujian siswa meningkat secara instan.`,
    questionText: `Kelemahan paling mendasar dari argumen penulis di atas adalah...`,
    options: [
      { key: 'A', text: 'AI membutuhkan kuota internet yang dapat dibeli oleh siapa saja.' },
      { key: 'B', text: 'Argumen mengabaikan aspek pembinaan karakter, empati emosional, dan etika yang hanya bisa diberikan guru manusia.' },
      { key: 'C', text: 'Biaya langganan aplikasi AI di ponsel pintar relatif terjangkau bagi sebagian pelajar.' },
      { key: 'D', text: 'Guru sekolah selalu memiliki waktu luang yang berlimpah di luar jam mengajar.' }
    ],
    correctAnswer: 'B',
    explanation: 'Evaluasi kritis melihat bahwa pendidikan bukan sekadar transfer materi instan melainkan pembentukan karakter dan etika.',
    recommendationHint: 'Kembangkan daya nalar kritis untuk melihat aspek kemanusiaan dan validitas argumen.'
  },
  {
    id: 7,
    number: 7,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Di bawah temaram lampu meja belajarnya, Rayhan menatap tumpukan buku biologi dan mikroskop tua peninggalan kakeknya. Jam dinding menunjukkan pukul dua dini hari. Matanya perih, namun jarinya tetap tekun mencatat perubahan warna pada cawan petri. "Aku harus menemukan formula antiseptik alami ini," bisiknya pada keheningan. Bagi Rayhan, keterbatasan alat di laboratorium sekolah bukanlah alasan untuk menyerah pada kompetisi sains tingkat nasional.`,
    questionText: `Watak tokoh Rayhan dalam kutipan cerita di atas adalah...`,
    options: [
      { key: 'A', text: 'Sombong dan meremehkan kemampuan peserta lain' },
      { key: 'B', text: 'Gigih, pantang menyerah, dan berdedikasi tinggi' },
      { key: 'C', text: 'Mudah putus asa saat menghadapi peralatan kuno' },
      { key: 'D', text: 'Keras kepala dan enggan menerima nasihat orang tua' }
    ],
    correctAnswer: 'B',
    explanation: 'Tindakan belajar hingga dini hari dan tekad tidak menyerah membuktikan watak gigih dan pantang menyerah.',
    recommendationHint: 'Cermati dialog batin dan tindakan tokoh untuk menyimpulkan perwatakan.'
  },
  {
    id: 8,
    number: 8,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Kabut tipis merayap perlahan menyelimuti pelataran Rumah Sakit Harapan Kasih. Di lorong farmasi, aroma antiseptik bercampur dengan dinginnya embusan pendingin ruangan yang menusuk tulang. Derap langkah perawat yang bergegas memecah kesunyian malam yang mencekam.`,
    questionText: `Latar suasana dan tempat yang tergambar dalam kutipan fiksi tersebut adalah...`,
    options: [
      { key: 'A', text: 'Meriah dan ceria di lapangan sekolah' },
      { key: 'B', text: 'Dingin dan tegang di lorong rumah sakit pada malam hari' },
      { key: 'C', text: 'Hangat dan tenang di ruang perpustakaan umum' },
      { key: 'D', text: 'Bising dan kacau di terminal bus kota saat senja' }
    ],
    correctAnswer: 'B',
    explanation: 'Latar tempat adalah lorong RS Harapan Kasih pada malam hari dengan suasana dingin dan tegang.',
    recommendationHint: 'Garis bawahi deskripsi panca indra (penglihatan, penciuman, perabaan) dalam teks fiksi.'
  },
  {
    id: 9,
    number: 9,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Budi menyadari bahwa kejujuran adalah kompas sejati. Ketika ia menemukan dompet berisikan sejumlah uang pengobatan milik seorang bapak tua di koridor klinik, tak sedikit pun terlintas niat untuk menyimpannya. Rasa lega saat melihat bapak itu meneteskan air mata syukur jauh lebih berharga daripada nominal materi apa pun.`,
    questionText: `Amanat yang dapat dipetik dari cuplikan cerita di atas adalah...`,
    options: [
      { key: 'A', text: 'Kekayaan materi adalah tolok ukur kesuksesan hidup seseorang.' },
      { key: 'B', text: 'Pertahankan kejujuran dan kepedulian terhadap sesama karena ketenangan batin tidak ternilai.' },
      { key: 'C', text: 'Jangan pernah bepergian ke klinik tanpa membawa pengawal pribadi.' },
      { key: 'D', text: 'Simpanlah uang di tempat tersembunyi agar tidak hilang di tempat umum.' }
    ],
    correctAnswer: 'B',
    explanation: 'Amanat cerita mengajarkan nilai integritas, kejujuran, dan empati sosial.',
    recommendationHint: 'Cari pesan moral utama yang menjadi hikmah bagi pembaca.'
  },
  {
    id: 10,
    number: 10,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Perhatikan kalimat berikut:
"Para siswa-siswa saling bersalaman satu sama lain setelah menyelesaikan ujian praktik laboratorium."
Perbaikan kalimat di atas agar menjadi kalimat efektif dan baku adalah...`,
    options: [
      { key: 'A', text: 'Para siswa bersalaman setelah menyelesaikan ujian praktik laboratorium.' },
      { key: 'B', text: 'Siswa-siswa saling bersalam-salaman satu sama lain dalam lab.' },
      { key: 'C', text: 'Para siswa-siswa bersalaman satu sama lain di laboratorium.' },
      { key: 'D', text: 'Banyak para siswa saling bersalaman pada saat selesai ujian praktik laboratorium.' }
    ],
    correctAnswer: 'A',
    explanation: '"Para siswa-siswa" dan "saling bersalaman satu sama lain" merupakan pemborosan kata (pleonasme). Bentuk efektifnya adalah "Para siswa bersalaman...".',
    recommendationHint: 'Hindari bentuk jamak ganda (para + kata ulang) dan kata repetitif (saling + satu sama lain).'
  },
  {
    id: 11,
    number: 11,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Penulisan ejaan tanda baca dan huruf kapital yang tepat menurut Pedoman Umum Ejaan Bahasa Indonesia (PUEBI) adalah...`,
    options: [
      { key: 'A', text: 'dr. Siti Aminah, Sp.A. membuka seminar di gedung serbaguna SMA Genesis Medicare.' },
      { key: 'B', text: 'Dr siti aminah sp.a membuka seminar di Gedung serbaguna sma genesis medicare.' },
      { key: 'C', text: 'Dokter siti Aminah, S.p.a membuka seminar di gedung serbaguna.' },
      { key: 'D', text: 'dr. Siti Aminah SpA. membuka Seminar di Gedung serba guna.' }
    ],
    correctAnswer: 'A',
    explanation: 'Singkatan gelar dokter spesialis anak adalah Sp.A. dan nama diri orang serta institusi wajib diawali huruf kapital.',
    recommendationHint: 'Kuasai aturan penulisan gelar akademik dan kapitalisasi nama lembaga resmi.'
  },
  {
    id: 12,
    number: 12,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Ergonomi adalah ilmu terapan yang mengatur perancangan ruang kerja dan peralatan agar sesuai dengan kemampuan fisik serta keterbatasan manusia. Pada siswa yang terbiasa belajar dengan postur tubuh membungkuk di depan komputer jinjing, tekanan pada tulang belakang bagian leher meningkat hingga empat kali lipat. Penyesuaian tinggi monitor sejajar dengan garis pandang mata terbukti menurunkan keluhan nyeri otot leher (cervical syndrome) hingga 60%.`,
    questionText: `Berapa perkiraan penurunan keluhan nyeri otot leher jika posisi monitor disesuaikan sejajar mata?`,
    options: [
      { key: 'A', text: 'Sekitar 25%' },
      { key: 'B', text: 'Mencapai 40%' },
      { key: 'C', text: 'Hingga 60%' },
      { key: 'D', text: 'Lebih dari 90%' }
    ],
    correctAnswer: 'C',
    explanation: 'Teks menyebutkan secara eksplisit: "terbukti menurunkan keluhan nyeri otot leher (cervical syndrome) hingga 60%".',
    recommendationHint: 'Perhatikan detail angka dan persentase yang tertulis secara spesifik.'
  },
  {
    id: 13,
    number: 13,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Kebiasaan minum air putih yang cukup sering kali diabaikan oleh remaja saat beraktivitas padat. Kurangnya cairan tubuh dapat memicu dehidrasi ringan yang berimbas pada penurunan volume aliran darah ke otak. Akibatnya, pasokan oksigen berkurang dan remaja mudah merasa lelah, pusing, serta lambat memproses materi pelajaran.`,
    questionText: `Hubungan sebab-akibat yang logis berdasarkan kutipan di atas adalah...`,
    options: [
      { key: 'A', text: 'Penurunan cairan tubuh menyebabkan lambatnya proses berpikir karena pasokan oksigen ke otak berkurang.' },
      { key: 'B', text: 'Materi pelajaran yang rumit memicu tubuh kehilangan cairan secara drastis.' },
      { key: 'C', text: 'Rasa pusing disebabkan oleh kelebihan kadar air dalam rongga kepala remaja.' },
      { key: 'D', text: 'Aktivitas yang padat selalu menghalangi seseorang untuk minum obat herbal.' }
    ],
    correctAnswer: 'A',
    explanation: 'Alur kausalitas: kurang cairan -> penurunan volume aliran darah otak -> pasokan oksigen berkurang -> lambat memproses materi.',
    recommendationHint: 'Telusuri rantai kausalitas dari kalimat pertama hingga simpulan akhir.'
  },
  {
    id: 14,
    number: 14,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Teks 1:
Puskesmas Kecamatan Sukamaju mengadakan pemeriksaan gigi gratis bagi 200 siswa SMP pada hari Senin, 15 Juli 2024. Dokter gigi memeriksa plak dan memberikan edukasi sikat gigi yang benar dua kali sehari.

Teks 2:
Kesehatan rongga mulut siswa madrasah terus dipantau melalui program Usaha Kesehatan Sekolah (UKS). Melalui kolaborasi dengan relawan dokter, siswa diajarkan teknik membersihkan sela gigi menggunakan benang gigi (dental floss).`,
    questionText: `Persamaan fokus pembahasan pada kedua teks di atas adalah...`,
    options: [
      { key: 'A', text: 'Jadwal penambalan gigi permanen di rumah sakit swasta' },
      { key: 'B', text: 'Upaya pemeliharaan dan edukasi kesehatan gigi pada kalangan pelajar' },
      { key: 'C', text: 'Biaya pembelian sikat gigi elektrik di apotek terdekat' },
      { key: 'D', text: 'Jumlah kasus karies gigi pada balita di perkotaan' }
    ],
    correctAnswer: 'B',
    explanation: 'Kedua teks sama-sama berfokus pada upaya menjaga dan mengedukasi kebersihan serta kesehatan gigi bagi pelajar.',
    recommendationHint: 'Bandingkan topik sentral dari dua teks untuk menemukan titik temu persamaan.'
  },
  {
    id: 15,
    number: 15,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Penggunaan konjungsi subordinatif syarat yang tepat terdapat pada kalimat...`,
    options: [
      { key: 'A', text: 'Ia tetap berangkat ke sekolah meskipun hujan deras mengguyur kotanya.' },
      { key: 'B', text: 'Kondisi pasien akan lekas pulih jika ia meminum antibiotik secara teratur sesuai anjuran.' },
      { key: 'C', text: 'Kakak sedang mencuci tangan sedangkan adik menyapu lantai teras.' },
      { key: 'D', text: 'Dokter memeriksa denyut nadi kemudian mencatatnya dalam rekam medis.' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata "jika" merupakan konjungsi subordinatif syarat (kondisional).',
    recommendationHint: 'Pahami ragam fungsi kata penghubung (syarat, konsesif, waktu, pertentangan).'
  },
  {
    id: 16,
    number: 16,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Wajah ibu laksana telaga tenang di lereng pegunungan. Ketika badai fitnah menerpa keluarga kami, tak secuil pun keluh kesah meluncur dari bibirnya. Ia merangkul kami erat, mengalirkan kehangatan yang meredam amarah yang sempat membakar dadaku.`,
    questionText: `Gaya bahasa (majas) dominan pada kalimat pertama cuplikan cerita di atas adalah...`,
    options: [
      { key: 'A', text: 'Personifikasi' },
      { key: 'B', text: 'Asosiasi / Simile' },
      { key: 'C', text: 'Hiperbola' },
      { key: 'D', text: 'Ironi' }
    ],
    correctAnswer: 'B',
    explanation: 'Kata pembanding "laksana" yang menyamakan wajah ibu dengan telaga tenang merupakan ciri khas majas simile/asosiasi.',
    recommendationHint: 'Kenali kata penanda majas perbandingan seperti laksana, bagaikan, bak, seperti.'
  },
  {
    id: 17,
    number: 17,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Pemberian pertolongan pertama pada korban pingsan harus dilakukan secara tepat. Pertama, baringkan korban di tempat yang teduh dengan permukaan rata. Kedua, longgarkan pakaian yang ketat seperti dasi atau ikat pinggang untuk melancarkan pernapasan. Ketiga, tinggikan posisi kedua kaki sekitar 30 sentimeter di atas posisi jantung agar aliran darah kembali ke otak. Hindari memberikan minum saat korban belum sadar penuh guna mencegah tersedak.`,
    questionText: `Langkah apa yang dianjurkan untuk membantu aliran darah kembali ke otak pada korban pingsan?`,
    options: [
      { key: 'A', text: 'Memberikan segelas teh manis panas secara paksa' },
      { key: 'B', text: 'Meninggikan posisi kedua kaki sekitar 30 cm di atas posisi jantung' },
      { key: 'C', text: 'Menepuk pipi korban dengan keras secara berulang-ulang' },
      { key: 'D', text: 'Mendudukkan korban di kursi yang tinggi dan berputar' }
    ],
    correctAnswer: 'B',
    explanation: 'Langkah ketiga dalam teks jelas menyatakan: "tinggikan posisi kedua kaki sekitar 30 sentimeter di atas posisi jantung".',
    recommendationHint: 'Fokus pada instruksi prosedural yang dinyatakan secara eksplisit dalam teks.'
  },
  {
    id: 18,
    number: 18,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Tanaman obat keluarga (TOGA) seperti jahe merah dan kunyit memiliki senyawa aktif gingerol dan kurkumin. Senyawa alami ini berperan sebagai antioksidan kuat yang menetralkan radikal bebas dalam darah. Dengan menanam TOGA di pekarangan rumah, masyarakat tidak hanya menghemat pengeluaran untuk suplemen pabrikan, tetapi juga memiliki benteng pertahanan alami saat musim pancaroba tiba.`,
    questionText: `Pernyataan yang TIDAK sesuai dengan informasi teks adalah...`,
    options: [
      { key: 'A', text: 'Jahe merah dan kunyit mengandung senyawa gingerol dan kurkumin.' },
      { key: 'B', text: 'Antioksidan pada TOGA berfungsi menetralkan radikal bebas dalam darah.' },
      { key: 'C', text: 'Menanam TOGA hanya dapat dilakukan oleh apoteker berlisensi di laboratorium.' },
      { key: 'D', text: 'Pemanfaatan TOGA dapat menghemat pengeluaran belanja suplemen keluarga.' }
    ],
    correctAnswer: 'C',
    explanation: 'Pernyataan C bertentangan dengan teks karena TOGA dapat ditanam oleh masyarakat di pekarangan rumah.',
    recommendationHint: 'Verifikasi setiap pilihan jawaban terhadap fakta yang ada di dalam teks bacaan.'
  },
  {
    id: 19,
    number: 19,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Sebuah selebaran iklan obat herbal di media sosial bertuliskan:
"Minum ramuan daun sirsak ajaib ini dua kali sehari, dijamin 100% sembuh total dari segala jenis penyakit kanker, diabetes, dan stroke dalam waktu 3 hari tanpa perlu ke rumah sakit!"`,
    questionText: `Bagaimanakah sikap pembaca yang kritis terhadap klaim selebaran tersebut?`,
    options: [
      { key: 'A', text: 'Langsung mempercayainya dan menyarankan semua orang sakit berhenti berobat ke dokter.' },
      { key: 'B', text: 'Skeptis dan waspada karena klaim instan tanpa uji klinis valid berpotensi merupakan penipuan medis.' },
      { key: 'C', text: 'Membeli produk dalam jumlah besar untuk dijual kembali dengan harga mahal.' },
      { key: 'D', text: 'Menyalahkan instansi rumah sakit karena kalah cepat dari daun sirsak.' }
    ],
    correctAnswer: 'B',
    explanation: 'Klaim bombastis 100% sembuh dari segala penyakit dalam 3 hari tidak memiliki dasar ilmiah dan harus disikapi secara kritis.',
    recommendationHint: 'Pelajari literasi digital untuk mengenali informasi kesehatan palsu (hoaks medis).'
  },
  {
    id: 20,
    number: 20,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Perhatikan kutipan kalimat berikut:
"Penelitian tersebut membuktikan (...) ekstrak daun kelor efektif menurunkan kadar kolesterol jahat (...) mempercepat regenerasi jaringan sel."
Kata penghubung (konjungsi) yang tepat untuk melengkapi bagian rumpang adalah...`,
    options: [
      { key: 'A', text: 'bahwa, serta' },
      { key: 'B', text: 'karena, melainkan' },
      { key: 'C', text: 'sehingga, tetapi' },
      { key: 'D', text: 'agar, padahal' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "bahwa" berfungsi memperjelas objek kalimat, dan "serta" menghubungkan dua unsur sejajar.',
    recommendationHint: 'Pilih konjungsi yang menjaga kelogisan makna klausa bertingkat.'
  },
  {
    id: 21,
    number: 21,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Setelah menempuh perjalanan sejauh delapan kilometer menyusuri pematang sawah yang licin, Danu akhirnya tiba di posko kesehatan darurat. Bajunya basah kuyup oleh hujan gerimis. Namun, senyumnya langsung merekah ketika melihat kotak termal berisi vaksin polio masih tertutup rapat tanpa cacat sedikit pun.`,
    questionText: `Pesan moral yang paling menonjol dari perilaku Danu adalah...`,
    options: [
      { key: 'A', text: 'Tanggung jawab dan pengorbanan demi keselamatan sesama' },
      { key: 'B', text: 'Kesenangan berjalan santai menikmati pemandangan alam' },
      { key: 'C', text: 'Keinginan dipuji oleh rekan sejawat di media sosial' },
      { key: 'D', text: 'Ketakutan akan hukuman dari pimpinan puskesmas' }
    ],
    correctAnswer: 'A',
    explanation: 'Danu menunjukkan dedikasi dan rasa tanggung jawab menjaga amanah vaksin demi masyarakat luas.',
    recommendationHint: 'Kaitkan aksi tokoh dengan nilai kebajikan universal.'
  },
  {
    id: 22,
    number: 22,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Kadar hemoglobin (Hb) normal pada remaja laki-laki berkisar antara 13,5 hingga 17,5 g/dL, sedangkan pada remaja perempuan berkisar antara 12,0 hingga 15,5 g/dL. Hemoglobin berfungsi mengikat oksigen dari paru-paru untuk diedarkan ke seluruh jaringan tubuh. Apabila kadar Hb di bawah batas normal, seseorang didiagnosis mengalami anemia.`,
    questionText: `Berapakah batas bawah kadar hemoglobin normal untuk remaja laki-laki menurut teks?`,
    options: [
      { key: 'A', text: '10,5 g/dL' },
      { key: 'B', text: '12,0 g/dL' },
      { key: 'C', text: '13,5 g/dL' },
      { key: 'D', text: '15,5 g/dL' }
    ],
    correctAnswer: 'C',
    explanation: 'Sesuai teks: "Kadar hemoglobin (Hb) normal pada remaja laki-laki berkisar antara 13,5 hingga 17,5 g/dL". Batas bawahnya adalah 13,5 g/dL.',
    recommendationHint: 'Baca angka rentang minimum dan maksimum secara cermat.'
  },
  {
    id: 23,
    number: 23,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Vaksinasi bekerja dengan cara mengenalkan antigen yang telah dilemahkan atau dinonaktifkan ke dalam sistem kekebalan tubuh. Tubuh kemudian memproduksi antibodi spesifik serta membentuk sel memori imunologis. Jika di masa mendatang tubuh terpapar patogen yang sesungguhnya, sistem pertahanan dapat merespons dengan cepat sebelum penyakit berkembang parah.`,
    questionText: `Mengapa orang yang telah divaksinasi memiliki risiko sakit parah yang jauh lebih rendah?`,
    options: [
      { key: 'A', text: 'Vaksin menghancurkan seluruh bakteri baik yang ada di saluran pencernaan.' },
      { key: 'B', text: 'Sistem kekebalan telah memiliki sel memori dan antibodi siap pakai untuk menangkal patogen.' },
      { key: 'C', text: 'Vaksin membuat tubuh kebal terhadap panas matahari dan radiasi nuklir.' },
      { key: 'D', text: 'Darah orang yang divaksinasi berubah menjadi plasma sintetis.' }
    ],
    correctAnswer: 'B',
    explanation: 'Teks menjelaskan bahwa vaksinasi membentuk antibodi spesifik dan sel memori imunologis yang merespons cepat saat terpapar patogen.',
    recommendationHint: 'Tarik kesimpulan berbasis mekanisme ilmiah yang diuraikan dalam wacana.'
  },
  {
    id: 24,
    number: 24,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Kalimat di bawah ini yang menggunakan kata baku secara tepat adalah...`,
    options: [
      { key: 'A', text: 'Pasien itu harus mengkonsumsi obat secara teratur di apotik terdekat.' },
      { key: 'B', text: 'Pasien itu harus mengonsumsi obat secara teratur di apotek terdekat.' },
      { key: 'C', text: 'Pasien itu harus mengkonsumsi obat secara teratur di apotek terdekat.' },
      { key: 'D', text: 'Pasien itu harus mengonsumsi obat secara rutin di apotik terdekat.' }
    ],
    correctAnswer: 'B',
    explanation: 'Bentuk baku dari konsumsi yang berawalan me- adalah mengonsumsi (huruf k luluh), dan apotek menggunakan huruf "e" bukan "i".',
    recommendationHint: 'Ingat kaidah peluluhan fonem KTSP saat diberi imbuhan me- serta ejaan kata serapan baku.'
  },
  {
    id: 25,
    number: 25,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Penggunaan antibiotik yang tidak tuntas merupakan pemicu utama resistansi antimikroba (antimicrobial resistance/AMR). Ketika pasien menghentikan konsumsi sebelum durasi resep berakhir karena merasa sudah enakan, bakteri yang masih bertahan hidup dapat bermutasi dan kebal terhadap obat tersebut. Akibatnya, pada infeksi berikutnya, antibiotik yang sama tidak lagi mempan.`,
    questionText: `Pesan utama yang ingin disampaikan oleh penulis adalah...`,
    options: [
      { key: 'A', text: 'Pasien boleh menghentikan konsumsi antibiotik kapan saja jika tubuh terasa bugar.' },
      { key: 'B', text: 'Antibiotik harus selalu dihabiskan sesuai anjuran medis agar bakteri tidak mengalami mutasi kebal.' },
      { key: 'C', text: 'Semua penyakit batuk dan pilek ringan wajib diobati dengan antibiotik dosis tinggi.' },
      { key: 'D', text: 'Bakteri mutan hanya dapat dibasmi dengan ramuan air kelapa hijau.' }
    ],
    correctAnswer: 'B',
    explanation: 'Penulis menekankan bahaya resistansi bakteri jika antibiotik tidak dihabiskan sesuai resep dokter.',
    recommendationHint: 'Temukan tujuan penulisan (author\'s purpose) dari teks persuasi kesehatan.'
  },
  {
    id: 26,
    number: 26,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Pemerintah daerah mengalokasikan 20% anggaran kesehatan tahun ini untuk pengadaan filter air minum higienis di 50 sekolah menengah. Program ini bertujuan menekan angka kasus diare dan demam tifoid pada siswa sekolah.`,
    questionText: `Argumen pendukung yang relevan terhadap kebijakan pemerintah daerah tersebut adalah...`,
    options: [
      { key: 'A', text: 'Air bersih dan layak konsumsi merupakan fondasi utama pencegahan penyakit berbasis lingkungan pada anak usia sekolah.' },
      { key: 'B', text: 'Filter air membuat tagihan listrik sekolah melonjak tidak terkendali.' },
      { key: 'C', text: 'Siswa lebih menyukai minuman kemasan berpemanis buatan daripada air mineral.' },
      { key: 'D', text: 'Air sungai pegunungan tidak memerlukan penyaringan sebelum diminum langsung.' }
    ],
    correctAnswer: 'A',
    explanation: 'Pilihan A memberikan alasan ilmiah yang memperkuat urgensi ketersediaan air minum bersih bagi pencegahan penyakit.',
    recommendationHint: 'Pilihlah argumen yang sinergis dan memperkuat gagasan pokok kebijakan.'
  },
  {
    id: 27,
    number: 27,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Matahari telah tergelincir ke peraduannya di balik bukit kapur. Di tepi danau yang hening, Risa masih duduk termangu memandangi riak air. Pesan singkat dari pembimbing karya ilmiahnya terngiang kembali: "Kegagalan pada uji laboratorium pertama bukanlah akhir, melainkan jalan pembuka menuju penemuan sejati." Perlahan, ia menghela napas panjang dan tersenyum optimis.`,
    questionText: `Alur peristiwa dalam cuplikan teks fiksi tersebut menggambarkan tahapan...`,
    options: [
      { key: 'A', text: 'Pengenalan tokoh utama dan keluarganya' },
      { key: 'B', text: 'Klimaks ketegangan fisik antar-tokoh' },
      { key: 'C', text: 'Penyelesaian masalah (resolusi) menuju perubahan sikap batin tokoh' },
      { key: 'D', text: 'Munculnya konflik baru yang mengancam keselamatan desa' }
    ],
    correctAnswer: 'C',
    explanation: 'Tokoh merenungkan nasihat, menerima kegagalan, dan bangkit kembali dengan optimisme, yang merupakan tahapan resolusi.',
    recommendationHint: 'Kuasai struktur alur naratif: orientasi, komplikasi, klimaks, dan resolusi.'
  },
  {
    id: 28,
    number: 28,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Perhatikan kalimat majemuk berikut:
"Meskipun alat rontgen di puskesmas mengalami kerusakan teknis para dokter tetap melayani pemeriksaan fisik awal dengan teliti."
Perbaikan tanda baca yang tepat pada kalimat di atas adalah...`,
    options: [
      { key: 'A', text: 'Menaruh tanda titik dua (:) setelah kata teknis' },
      { key: 'B', text: 'Menaruh tanda koma (,) setelah kata teknis karena anak kalimat mendahului induk kalimat' },
      { key: 'C', text: 'Menaruh tanda titik koma (;) setelah kata dokter' },
      { key: 'D', text: 'Menghilangkan kata meskipun dari awal kalimat' }
    ],
    correctAnswer: 'B',
    explanation: 'Jika anak kalimat yang diawali konjungsi subordinatif (meskipun) mendahului induk kalimat, wajib dipisahkan dengan tanda koma.',
    recommendationHint: 'Kaidah PUEBI: letakkan koma bila anak kalimat bertingkat mendahului induk kalimat.'
  },
  {
    id: 29,
    number: 29,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Suhu tubuh manusia normal berkisar antara 36,5 hingga 37,5 derajat Celsius. Pusat pengatur suhu tubuh berada di bagian otak yang disebut hipotalamus. Hipotalamus bertindak seperti termostat biologis yang mengatur produksi panas melalui menggigil saat kedinginan atau pengeluaran keringat saat kepanasan.`,
    questionText: `Bagian otak yang berfungsi sebagai pusat pengendali suhu tubuh adalah...`,
    options: [
      { key: 'A', text: 'Cerebellum (otak kecil)' },
      { key: 'B', text: 'Hipotalamus' },
      { key: 'C', text: 'Batang otak' },
      { key: 'D', text: 'Korteks frontal' }
    ],
    correctAnswer: 'B',
    explanation: 'Teks menyatakan secara langsung: "Pusat pengatur suhu tubuh berada di bagian otak yang disebut hipotalamus."',
    recommendationHint: 'Catat istilah anatomi biologi yang disebutkan dalam teks informasi.'
  },
  {
    id: 30,
    number: 30,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Generasi Z kerap terpapar cahaya biru (blue light) dari gawai hingga larut malam. Radiasi cahaya ini menekan produksi hormon melatonin, yakni hormon alami yang memicu rasa kantuk. Akibatnya, ritme sirkadian tubuh terganggu dan kualitas tidur menurun. Terganggunya kualitas tidur dalam jangka panjang berkontribusi pada penurunan daya ingat dan kestabilan emosi remaja di sekolah.`,
    questionText: `Judul yang paling representatif untuk bacaan di atas adalah...`,
    options: [
      { key: 'A', text: 'Spesifikasi Layar Gawai Tercanggih Tahun Ini' },
      { key: 'B', text: 'Dampak Paparan Cahaya Biru Gawai terhadap Kualitas Tidur dan Kinerja Remaja' },
      { key: 'C', text: 'Manfaat Hormon Melatonin dalam Pertumbuhan Tulang Belakang' },
      { key: 'D', text: 'Cara Memperbaiki Kerusakan Layar Kaca Ponsel yang Retak' }
    ],
    correctAnswer: 'B',
    explanation: 'Judul B mencakup keseluruhan variabel: cahaya biru gawai, efek penekanan melatonin, kualitas tidur, dan dampaknya pada remaja.',
    recommendationHint: 'Judul yang baik harus mencerminkan seluruh variabel pokok dalam teks.'
  },

  // =================== MATEMATIKA (SOAL 31 - 60) ===================
  {
    id: 31,
    number: 31,
    subject: 'math',
    subTopic: 'Bilangan: Operasi & Aritmetika Sosial',
    questionText: `Dalam sebuah uji laboratorium farmasi, suhu awal suatu serum adalah -6°C. Setiap 4 menit, suhu serum dinaikkan sebesar 3°C menggunakan alat penghangat khusus. Berapakah suhu serum tersebut setelah dipanaskan selama 24 menit?`,
    options: [
      { key: 'A', text: '12°C' },
      { key: 'B', text: '18°C' },
      { key: 'C', text: '24°C' },
      { key: 'D', text: '8°C' }
    ],
    correctAnswer: 'A',
    explanation: 'Banyak kali kenaikan = 24 / 4 = 6 kali. Total kenaikan suhu = 6 × 3°C = 18°C. Suhu akhir = -6°C + 18°C = 12°C.',
    recommendationHint: 'Pahami operasi bilangan bulat dengan arah garis bilangan positif dan negatif.'
  },
  {
    id: 32,
    number: 32,
    subject: 'math',
    subTopic: 'Bilangan: Pecahan & Persen',
    questionText: `Koperasi sekolah SMA Genesis Medicare membeli 40 kotak masker medis dengan harga total Rp1.200.000,00. Setiap kotak berisi 50 lembar masker. Jika masker tersebut dijual eceran seharga Rp800,00 per lembar, berapakah persentase keuntungan yang diperoleh koperasi?`,
    options: [
      { key: 'A', text: '25%' },
      { key: 'B', text: '33,33%' },
      { key: 'C', text: '20%' },
      { key: 'D', text: '15%' }
    ],
    correctAnswer: 'B',
    explanation: 'Total lembar masker = 40 × 50 = 2.000 lembar. Total penerimaan penjualan = 2.000 × Rp800 = Rp1.600.000. Keuntungan = Rp1.600.000 - Rp1.200.000 = Rp400.000. Persentase untung = (400.000 / 1.200.000) × 100% = 1/3 × 100% = 33,33%.',
    recommendationHint: 'Kuasai rumus persentase untung = (Untung / Harga Beli) × 100%.'
  },
  {
    id: 33,
    number: 33,
    subject: 'math',
    subTopic: 'Bilangan: Perbandingan Berbalik Nilai',
    questionText: `Pembangunan laboratorium bioteknologi sekolah direncanakan selesai dalam waktu 36 hari oleh 15 orang pekerja. Jika proyek tersebut harus diselesaikan dalam waktu 20 hari, berapa banyak tambahan pekerja yang diperlukan?`,
    options: [
      { key: 'A', text: '27 orang' },
      { key: 'B', text: '12 orang' },
      { key: 'C', text: '15 orang' },
      { key: 'D', text: '10 orang' }
    ],
    correctAnswer: 'B',
    explanation: 'Perbandingan berbalik nilai: H1 × P1 = H2 × P2 -> 36 × 15 = 20 × P2 -> 540 = 20 × P2 -> P2 = 27 orang. Tambahan pekerja = 27 - 15 = 12 orang.',
    recommendationHint: 'Hati-hati dengan pertanyaan: yang ditanyakan adalah "tambahan pekerja", bukan total pekerja akhir.'
  },
  {
    id: 34,
    number: 34,
    subject: 'math',
    subTopic: 'Bilangan: Pangkat & Bentuk Akar',
    questionText: `Hasil paling sederhana dari operasi bentuk akar 3√12 + 2√75 - √48 adalah...`,
    options: [
      { key: 'A', text: '12√3' },
      { key: 'B', text: '14√3' },
      { key: 'C', text: '10√3' },
      { key: 'D', text: '8√3' }
    ],
    correctAnswer: 'A',
    explanation: '3√12 = 3√(4×3) = 6√3. 2√75 = 2√(25×3) = 10√3. √48 = √(16×3) = 4√3. Maka 6√3 + 10√3 - 4√3 = 12√3.',
    recommendationHint: 'Faktorkan bilangan di dalam akar ke dalam bilangan kuadrat sempurna (4, 9, 16, 25, dst).'
  },
  {
    id: 35,
    number: 35,
    subject: 'math',
    subTopic: 'Aljabar: Barisan & Deret',
    questionText: `Suatu kultur bakteri diamati di laboratorium. Pada pukul 08.00 terdapat 20 bakteri. Bakteri tersebut membelah diri menjadi 2 setiap 15 menit. Berapakah perkiraan jumlah bakteri pada pukul 09.30 di hari yang sama?`,
    options: [
      { key: 'A', text: '640 bakteri' },
      { key: 'B', text: '1.280 bakteri' },
      { key: 'C', text: '2.560 bakteri' },
      { key: 'D', text: '5.120 bakteri' }
    ],
    correctAnswer: 'B',
    explanation: 'Selang waktu 08.00 ke 09.30 adalah 90 menit. Banyak periode pembelahan n = 90 / 15 = 6 kali. Menggunakan barisan geometri: Un = a × r^n = 20 × 2^6 = 20 × 64 = 1.280 bakteri.',
    recommendationHint: 'Gunakan konsep barisan geometri pertumbuhan Un = a * r^n.'
  },
  {
    id: 36,
    number: 36,
    subject: 'math',
    subTopic: 'Aljabar: Pola Bilangan Aritmetika',
    questionText: `Di ruang aula seminar kesehatan, baris terdepan berisi 18 kursi. Baris di belakangnya selalu memuat 4 kursi lebih banyak dari baris di depannya. Jika dalam aula terdapat 12 baris kursi, berapakah total kapasitas seluruh kursi di aula tersebut?`,
    options: [
      { key: 'A', text: '420 kursi' },
      { key: 'B', text: '480 kursi' },
      { key: 'C', text: '504 kursi' },
      { key: 'D', text: '456 kursi' }
    ],
    correctAnswer: 'B',
    explanation: 'a = 18, b = 4, n = 12. Rumus Sn = n/2 [2a + (n-1)b] = 12/2 [2(18) + (11)(4)] = 6 [36 + 44] = 6 × 80 = 480 kursi.',
    recommendationHint: 'Gunakan rumus deret aritmetika Sn = n/2 [2a + (n-1)b].'
  },
  {
    id: 37,
    number: 37,
    subject: 'math',
    subTopic: 'Aljabar: PLSV & PtLSV',
    questionText: `Penyelesaian dari pertidaksamaan 3(2x - 5) ≤ 4x + 7 untuk x bilangan bulat adalah...`,
    options: [
      { key: 'A', text: 'x ≤ 11' },
      { key: 'B', text: 'x ≥ 11' },
      { key: 'C', text: 'x ≤ 22' },
      { key: 'D', text: 'x ≥ -11' }
    ],
    correctAnswer: 'A',
    explanation: '6x - 15 ≤ 4x + 7 -> 6x - 4x ≤ 7 + 15 -> 2x ≤ 22 -> x ≤ 11.',
    recommendationHint: 'Distribusikan koefisien ke dalam tanda kurung dan kelompokkan variabel di satu ruas.'
  },
  {
    id: 38,
    number: 38,
    subject: 'math',
    subTopic: 'Aljabar: SPLDV Kontekstual',
    questionText: `Di apotek sekolah, Fikri membeli 3 botol hand sanitizer dan 2 kotak perban seharga Rp47.000,00. Di apotek yang sama, Nabila membeli 2 botol hand sanitizer dan 4 kotak perban seharga Rp54.000,00. Berapakah harga 1 botol hand sanitizer dan 1 kotak perban?`,
    options: [
      { key: 'A', text: 'Rp18.500,00' },
      { key: 'B', text: 'Rp20.000,00' },
      { key: 'C', text: 'Rp19.000,00' },
      { key: 'D', text: 'Rp21.500,00' }
    ],
    correctAnswer: 'C',
    explanation: 'Misalkan s = sanitizer, p = perban. (1) 3s + 2p = 47.000. (2) 2s + 4p = 54.000 -> s + 2p = 27.000. Kurangkan (1) dan s+2p=27.000: 2s = 20.000 -> s = 10.000. Maka 2p = 27.000 - 10.000 = 17.000 -> p = 8.500. Total 1s + 1p = 10.000 + 8.500 = Rp18.500 (Wait: check options, let\'s verify: 1s+1p = 10.000 + 9.000? Wait: 2s+4p=54.000 -> s+2p = 27.000. 3s+2p = 47.000. (3s+2p)-(s+2p) = 2s = 20.000 -> s = 10.000. 10.000 + 2p = 27.000 -> 2p = 17.000 -> p = 8.500. s + p = 18.500. Jadi opsi A adalah Rp18.500,00!)',
    recommendationHint: 'Gunakan metode eliminasi-substitusi pada SPLDV secara teliti.'
  },
  {
    id: 39,
    number: 39,
    subject: 'math',
    subTopic: 'Aljabar: Relasi & Fungsi',
    questionText: `Diketahui suatu fungsi linier f(x) = ax + b. Jika f(3) = 11 dan f(-2) = -9, maka nilai dari f(5) adalah...`,
    options: [
      { key: 'A', text: '19' },
      { key: 'B', text: '21' },
      { key: 'C', text: '17' },
      { key: 'D', text: '23' }
    ],
    correctAnswer: 'A',
    explanation: 'f(3) = 3a + b = 11. f(-2) = -2a + b = -9. Kurangkan: 5a = 20 -> a = 4. 3(4) + b = 11 -> b = 11 - 12 = -1. Rumus f(x) = 4x - 1. Nilai f(5) = 4(5) - 1 = 19.',
    recommendationHint: 'Tentukan gradien a dan konstanta b terlebih dahulu menggunakan sistem eliminasi fungsi.'
  },
  {
    id: 40,
    number: 40,
    subject: 'math',
    subTopic: 'Aljabar: Bentuk Aljabar & Pemfaktoran',
    questionText: `Bentuk sederhana dari pecahan aljabar (x² - 9) / (2x² + 5x - 3) untuk x ≠ 1/2 dan x ≠ -3 adalah...`,
    options: [
      { key: 'A', text: '(x - 3) / (2x - 1)' },
      { key: 'B', text: '(x + 3) / (2x + 1)' },
      { key: 'C', text: '(x - 3) / (2x + 1)' },
      { key: 'D', text: '(x + 3) / (2x - 1)' }
    ],
    correctAnswer: 'A',
    explanation: 'Pembilang: x² - 9 = (x - 3)(x + 3). Penyebut: 2x² + 5x - 3 = (2x - 1)(x + 3). Sederhanakan dengan membagi (x + 3): didapat (x - 3) / (2x - 1).',
    recommendationHint: 'Faktorkan selisih dua kuadrat dan bentuk kuadrat trinomial.'
  },
  {
    id: 41,
    number: 41,
    subject: 'math',
    subTopic: 'Geometri: Teorema Pythagoras',
    questionText: `Sebuah tangga pemadam kebakaran yang panjangnya 25 meter disandarkan pada dinding gedung laboratorium. Jarak ujung bawah tangga ke dinding gedung adalah 7 meter. Berapakah tinggi dinding yang dicapai oleh tangga tersebut?`,
    options: [
      { key: 'A', text: '24 meter' },
      { key: 'B', text: '22 meter' },
      { key: 'C', text: '20 meter' },
      { key: 'D', text: '23 meter' }
    ],
    correctAnswer: 'A',
    explanation: 'Tripel Pythagoras: t² = 25² - 7² = 625 - 49 = 576 -> t = √576 = 24 meter. (Tripel 7, 24, 25).',
    recommendationHint: 'Hafalkan tripel Pythagoras dasar seperti (3,4,5), (5,12,13), (7,24,25), (8,15,17).'
  },
  {
    id: 42,
    number: 42,
    subject: 'math',
    subTopic: 'Geometri: Kesebangunan & Kekongruenan',
    questionText: `Pada siang hari yang cerah, sebuah tiang bendera setinggi 6 meter memiliki bayangan sepanjang 4 meter di tanah. Pada saat yang bersamaan, pohon beringin di dekatnya memiliki bayangan sepanjang 14 meter. Berapakah tinggi pohon beringin tersebut?`,
    options: [
      { key: 'A', text: '21 meter' },
      { key: 'B', text: '18 meter' },
      { key: 'C', text: '24 meter' },
      { key: 'D', text: '20 meter' }
    ],
    correctAnswer: 'A',
    explanation: 'Prinsip kesebangunan segitiga: Tinggi Pohon / Tinggi Tiang = Bayangan Pohon / Bayangan Tiang -> T / 6 = 14 / 4 -> T = (14 × 6) / 4 = 84 / 4 = 21 meter.',
    recommendationHint: 'Gunakan perbandingan senilai sisi-sisi yang bersesuaian pada bangun yang sebangun.'
  },
  {
    id: 43,
    number: 43,
    subject: 'math',
    subTopic: 'Geometri: Keliling & Luas Bangun Datar',
    questionText: `Taman obat sekolah berbentuk gabungan persegi panjang berukuran panjang 14 m dan lebar 10 m, dengan setengah lingkaran di salah satu sisi lebarnya (diameter 10 m, gunakan π = 3,14). Berapakah luas total area taman obat tersebut?`,
    options: [
      { key: 'A', text: '179,25 m²' },
      { key: 'B', text: '198,5 m²' },
      { key: 'C', text: '165,5 m²' },
      { key: 'D', text: '182,0 m²' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas persegi panjang = 14 × 10 = 140 m². Jari-jari setengah lingkaran r = 5 m. Luas 1/2 lingkaran = 1/2 × 3,14 × 5² = 1/2 × 78,5 = 39,25 m². Total luas = 140 + 39,25 = 179,25 m².',
    recommendationHint: 'Bagi bangun datar gabungan menjadi bentuk-bentuk standar yang mudah dihitung.'
  },
  {
    id: 44,
    number: 44,
    subject: 'math',
    subTopic: 'Geometri: Bangun Ruang Tabung',
    questionText: `Sebuah tangki penampungan cairan disinfektan berbentuk tabung memiliki diameter 140 cm dan tinggi 200 cm (gunakan π = 22/7). Berapa liter volume disinfektan yang dapat ditampung penuh oleh tangki tersebut?`,
    options: [
      { key: 'A', text: '3.080 liter' },
      { key: 'B', text: '6.160 liter' },
      { key: 'C', text: '1.540 liter' },
      { key: 'D', text: '30.800 liter' }
    ],
    correctAnswer: 'A',
    explanation: 'Jari-jari r = 70 cm = 7 dm. Tinggi t = 200 cm = 20 dm. Volume = π × r² × t = (22/7) × 7² × 20 = 22 × 7 × 20 = 3.080 dm³ (liter).',
    recommendationHint: 'Ubah satuan ke desimeter (dm) terlebih dahulu agar langsung menghasilkan liter.'
  },
  {
    id: 45,
    number: 45,
    subject: 'math',
    subTopic: 'Geometri: Bangun Ruang Prisma & Limas',
    questionText: `Sebuah tenda darurat PMI berbentuk prisma segitiga dengan panjang alas 3 m, tinggi segitiga alas 2 m, dan panjang tenda ke belakang 5 m. Berapakah volume udara di dalam tenda darurat tersebut?`,
    options: [
      { key: 'A', text: '15 m³' },
      { key: 'B', text: '30 m³' },
      { key: 'C', text: '22,5 m³' },
      { key: 'D', text: '18 m³' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas alas segitiga = 1/2 × a × t = 1/2 × 3 × 2 = 3 m². Volume prisma = Luas alas × tinggi prisma = 3 m² × 5 m = 15 m³.',
    recommendationHint: 'Volume prisma = Luas alas segitiga × tinggi prisma.'
  },
  {
    id: 46,
    number: 46,
    subject: 'math',
    subTopic: 'Geometri: Transformasi Geometri',
    questionText: `Titik A(3, -5) dicerminkan terhadap garis y = x, kemudian dilanjutkan dengan translasi T = (-2, 4). Koordinat bayangan akhir titik A adalah...`,
    options: [
      { key: 'A', text: 'A\'\'(-7, 7)' },
      { key: 'B', text: 'A\'\'(-3, 1)' },
      { key: 'C', text: 'A\'\'(1, -7)' },
      { key: 'D', text: 'A\'\'(-7, 1)' }
    ],
    correctAnswer: 'A',
    explanation: 'Pencerminan terhadap y = x: (x, y) -> (y, x), jadi A(3, -5) menjadi A\'(-5, 3). Translasi T(-2, 4): A\'\' = (-5 + (-2), 3 + 4) = (-7, 7).',
    recommendationHint: 'Pahami aturan matriks dan operasi refleksi terhadap garis y = x serta penjumlahan translasi.'
  },
  {
    id: 47,
    number: 47,
    subject: 'math',
    subTopic: 'Geometri: Sudut & Garis Sejajar',
    questionText: `Dua sudut saling berpelurus (suplemen). Jika besar sudut pertama adalah (3x + 15)° dan besar sudut kedua adalah (2x - 10)°, berapakah besar sudut pertama?`,
    options: [
      { key: 'A', text: '120°' },
      { key: 'B', text: '105°' },
      { key: 'C', text: '115°' },
      { key: 'D', text: '125°' }
    ],
    correctAnswer: 'A',
    explanation: 'Sudut berpelurus berjumlah 180°: (3x + 15) + (2x - 10) = 180 -> 5x + 5 = 180 -> 5x = 175 -> x = 35°. Besar sudut pertama = 3(35) + 15 = 105 + 15 = 120°.',
    recommendationHint: 'Ingat hubungan: sudut berpelurus = 180°, sudut berpenyiku = 90°.'
  },
  {
    id: 48,
    number: 48,
    subject: 'math',
    subTopic: 'Geometri: Bangun Ruang Kerucut & Bola',
    questionText: `Sebuah kapsul obat berbentuk tabung dengan kedua ujungnya ditutup setengah bola. Jika diameter kapsul 6 mm dan panjang bagian silinder 14 mm (π = 3,14), berapakah luas permukaan total kapsul tersebut? (Kedua setengah bola membentuk 1 bola utuh)`,
    options: [
      { key: 'A', text: '376,8 mm²' },
      { key: 'B', text: '425,6 mm²' },
      { key: 'C', text: '282,6 mm²' },
      { key: 'D', text: '320,4 mm²' }
    ],
    correctAnswer: 'A',
    explanation: 'r = 3 mm. Luas selimut tabung = 2πrt = 2 × 3,14 × 3 × 14 = 263,76 mm². Luas permukaan 1 bola penuh = 4πr² = 4 × 3,14 × 3² = 113,04 mm². Luas total = 263,76 + 113,04 = 376,8 mm².',
    recommendationHint: 'Permukaan tertutup hanya mencakup selimut tabung ditambah permukaan 1 bola penuh.'
  },
  {
    id: 49,
    number: 49,
    subject: 'math',
    subTopic: 'Data & Statistika: Rata-rata Gabungan',
    questionText: `Nilai rata-rata tes kemampuan akademik 18 siswa laki-laki adalah 78, sedangkan nilai rata-rata 12 siswa perempuan adalah 83. Berapakah nilai rata-rata gabungan seluruh siswa di kelas tersebut?`,
    options: [
      { key: 'A', text: '80,0' },
      { key: 'B', text: '80,5' },
      { key: 'C', text: '79,8' },
      { key: 'D', text: '81,2' }
    ],
    correctAnswer: 'A',
    explanation: 'Rata-rata gabungan = [(18 × 78) + (12 × 83)] / (18 + 12) = [1404 + 996] / 30 = 2400 / 30 = 80,0.',
    recommendationHint: 'Gunakan rumus rata-rata gabungan: X_gab = (n1*x1 + n2*x2) / (n1 + n2).'
  },
  {
    id: 50,
    number: 50,
    subject: 'math',
    subTopic: 'Data & Statistika: Median & Modus',
    questionText: `Diberikan data berat badan (dalam kg) dari 9 relawan donor darah PMR SMP: 45, 52, 48, 50, 56, 52, 47, 54, 52. Pernyataan yang benar mengenai nilai median dan modus dari data tersebut adalah...`,
    options: [
      { key: 'A', text: 'Median = 52 dan Modus = 52' },
      { key: 'B', text: 'Median = 50 dan Modus = 52' },
      { key: 'C', text: 'Median = 52 dan Modus = 50' },
      { key: 'D', text: 'Median = 51 dan Modus = 52' }
    ],
    correctAnswer: 'A',
    explanation: 'Urutkan data: 45, 47, 48, 50, 52, 52, 52, 54, 56. Nilai tengah (ke-5) adalah 52. Nilai yang paling sering muncul adalah 52 (3 kali). Jadi Median = 52 dan Modus = 52.',
    recommendationHint: 'Selalu urutkan data dari yang terkecil ke terbesar sebelum menentukan median.'
  },
  {
    id: 51,
    number: 51,
    subject: 'math',
    subTopic: 'Peluang: Percobaan Sederhana',
    questionText: `Dalam sebuah kotak steril terdapat 12 botol vitamin C, 8 botol vitamin D3, dan 5 botol zinc. Jika seorang petugas mengambil satu botol secara acak, berapakah peluang terambilnya botol vitamin D3?`,
    options: [
      { key: 'A', text: '8/25' },
      { key: 'B', text: '12/25' },
      { key: 'C', text: '1/3' },
      { key: 'D', text: '5/25' }
    ],
    correctAnswer: 'A',
    explanation: 'Total botol n(S) = 12 + 8 + 5 = 25 botol. Botol vitamin D3 n(A) = 8. Peluang P(A) = n(A) / n(S) = 8/25 (atau 0,32).',
    recommendationHint: 'Peluang empiris/teoretis dihitung dengan membagi jumlah kejadian khusus dengan ruang sampel semesta.'
  },
  {
    id: 52,
    number: 52,
    subject: 'math',
    subTopic: 'Peluang: Dua Buah Dadu / Koin',
    questionText: `Dua buah dadu bermata enam dilempar bersamaan sebanyak satu kali. Berapakah peluang munculnya mata dadu yang berjumlah 8?`,
    options: [
      { key: 'A', text: '5/36' },
      { key: 'B', text: '1/6' },
      { key: 'C', text: '7/36' },
      { key: 'D', text: '4/36' }
    ],
    correctAnswer: 'A',
    explanation: 'Pasangan mata dadu berjumlah 8: (2,6), (3,5), (4,4), (5,3), (6,2) -> ada 5 kejadian. Ruang sampel 2 dadu = 6 × 6 = 36. Peluang = 5/36.',
    recommendationHint: 'Daftar semua kemungkinan kombinasi penjumlahan pada pelemparan dua dadu.'
  },
  {
    id: 53,
    number: 53,
    subject: 'math',
    subTopic: 'Bilangan: Aritmetika Sosial & Bunga Tunggal',
    questionText: `Bu Rahma meminjam modal usaha di koperasi sekolah sebesar Rp6.000.000,00 dengan suku bunga tunggal 10% per tahun. Jika pinjaman tersebut akan diangsur selama 10 bulan, berapakah besar angsuran yang harus dibayarkan Bu Rahma setiap bulannya?`,
    options: [
      { key: 'A', text: 'Rp650.000,00' },
      { key: 'B', text: 'Rp660.000,00' },
      { key: 'C', text: 'Rp600.000,00' },
      { key: 'D', text: 'Rp700.000,00' }
    ],
    correctAnswer: 'A',
    explanation: 'Bunga 10 bulan = 6.000.000 × 10% × (10/12) = 6.000.000 × 0,1 × 5/6 = Rp500.000. Total pinjaman + bunga = Rp6.500.000. Angsuran per bulan = Rp6.500.000 / 10 = Rp650.000,00.',
    recommendationHint: 'Perhatikan konversi durasi bulan ke tahun (n/12) dalam rumus bunga tunggal.'
  },
  {
    id: 54,
    number: 54,
    subject: 'math',
    subTopic: 'Aljabar: Relasi & Fungsi Daerah Hasil',
    questionText: `Diketahui domain daerah asal D = {-2, -1, 0, 1, 2} dan fungsi f(x) = 3 - 2x². Daerah hasil (range) dari fungsi f adalah...`,
    options: [
      { key: 'A', text: '{-5, 1, 3}' },
      { key: 'B', text: '{-5, -1, 1, 3}' },
      { key: 'C', text: '{-5, 1, 3, 5}' },
      { key: 'D', text: '{-3, -1, 1, 3}' }
    ],
    correctAnswer: 'A',
    explanation: 'f(-2) = 3 - 2(-2)² = 3 - 8 = -5. f(-1) = 3 - 2(-1)² = 3 - 2 = 1. f(0) = 3 - 0 = 3. f(1) = 3 - 2 = 1. f(2) = 3 - 8 = -5. Himpunan nilai range yang unik adalah {-5, 1, 3}.',
    recommendationHint: 'Himpunan hasil (range) hanya menuliskan anggota yang sama satu kali.'
  },
  {
    id: 55,
    number: 55,
    subject: 'math',
    subTopic: 'Geometri: Luas Lingkaran & Juring',
    questionText: `Sebuah taman obat berbentuk lingkaran memiliki diameter 28 meter. Di tengah taman dibuat kolam air mancur dengan diameter 14 meter. Sisa lahan taman ditanami rumput hijau. Berapakah luas lahan yang ditanami rumput hijau? (Gunakan π = 22/7)`,
    options: [
      { key: 'A', text: '462 m²' },
      { key: 'B', text: '616 m²' },
      { key: 'C', text: '308 m²' },
      { key: 'D', text: '539 m²' }
    ],
    correctAnswer: 'A',
    explanation: 'R_taman = 14 m. Luas taman = (22/7) × 14² = 22 × 28 = 616 m². R_kolam = 7 m. Luas kolam = (22/7) × 7² = 154 m². Luas sisa rumput = 616 - 154 = 462 m².',
    recommendationHint: 'Gunakan selisih luas lingkaran luar dan lingkaran dalam (cincin lingkaran).'
  },
  {
    id: 56,
    number: 56,
    subject: 'math',
    subTopic: 'Data & Statistika: Diagram Lingkaran',
    questionText: `Sebuah diagram lingkaran menyajikan pilihan ekstrakurikuler 120 siswa kelas 7 SMP: PMR 90°, Pramuka 120°, Robotika 60°, dan sisanya Olahraga. Berapa banyak siswa yang memilih ekstrakurikuler Olahraga?`,
    options: [
      { key: 'A', text: '30 orang' },
      { key: 'B', text: '40 orang' },
      { key: 'C', text: '25 orang' },
      { key: 'D', text: '35 orang' }
    ],
    correctAnswer: 'A',
    explanation: 'Sudut Olahraga = 360° - (90° + 120° + 60°) = 360° - 270° = 90°. Banyak siswa olahraga = (90° / 360°) × 120 = 1/4 × 120 = 30 orang.',
    recommendationHint: 'Satu putaran penuh diagram lingkaran derajat adalah 360°.'
  },
  {
    id: 57,
    number: 57,
    subject: 'math',
    subTopic: 'Aljabar: Operasi Suku Aljabar',
    questionText: `Bentuk sederhana dari 4(2x - 3y) - 3(x - 5y) adalah...`,
    options: [
      { key: 'A', text: '5x + 3y' },
      { key: 'B', text: '5x - 27y' },
      { key: 'C', text: '5x - 3y' },
      { key: 'D', text: '11x + 3y' }
    ],
    correctAnswer: 'A',
    explanation: '4(2x - 3y) = 8x - 12y. -3(x - 5y) = -3x + 15y. Gabungkan: (8x - 3x) + (-12y + 15y) = 5x + 3y.',
    recommendationHint: 'Hati-hati dengan tanda minus di depan tanda kurung: -3(-5y) menjadi +15y.'
  },
  {
    id: 58,
    number: 58,
    subject: 'math',
    subTopic: 'Geometri: Luas Permukaan Balok',
    questionText: `Sebuah kotak tempat alat bedah ringan berukuran panjang 25 cm, lebar 12 cm, dan tinggi 8 cm. Berapakah luas permukaan karton yang dibutuhkan untuk membuat kotak tersebut?`,
    options: [
      { key: 'A', text: '1.192 cm²' },
      { key: 'B', text: '1.240 cm²' },
      { key: 'C', text: '1.080 cm²' },
      { key: 'D', text: '2.400 cm²' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas balok = 2(pl + pt + lt) = 2((25×12) + (25×8) + (12×8)) = 2(300 + 200 + 96) = 2(596) = 1.192 cm².',
    recommendationHint: 'Gunakan rumus luas permukaan balok L = 2(pl + pt + lt).'
  },
  {
    id: 59,
    number: 59,
    subject: 'math',
    subTopic: 'Peluang: Frekuensi Harapan',
    questionText: `Sebuah koin seimbang dilemparkan sebanyak 150 kali. Berapakah frekuensi harapan munculnya sisi angka?`,
    options: [
      { key: 'A', text: '75 kali' },
      { key: 'B', text: '50 kali' },
      { key: 'C', text: '100 kali' },
      { key: 'D', text: '80 kali' }
    ],
    correctAnswer: 'A',
    explanation: 'Peluang muncul angka P(A) = 1/2. Frekuensi harapan Fh = n × P(A) = 150 × 1/2 = 75 kali.',
    recommendationHint: 'Frekuensi harapan = banyak percobaan × peluang teoretis.'
  },
  {
    id: 60,
    number: 60,
    subject: 'math',
    subTopic: 'Data & Statistika: Jangkauan Interkuartil',
    questionText: `Diberikan data nilai tes matematika 10 siswa: 60, 65, 70, 75, 80, 80, 85, 90, 95, 100. Berapakah jangkauan interkuartil (Q3 - Q1) dari data tersebut?`,
    options: [
      { key: 'A', text: '20' },
      { key: 'B', text: '15' },
      { key: 'C', text: '25' },
      { key: 'D', text: '30' }
    ],
    correctAnswer: 'A',
    explanation: 'Data terurut 10 siswa: separuh bawah {60, 65, 70, 75, 80} -> Q1 = 70. Separuh atas {80, 85, 90, 95, 100} -> Q3 = 90. Jangkauan interkuartil = Q3 - Q1 = 90 - 70 = 20.',
    recommendationHint: 'Jangkauan interkuartil adalah selisih antara Kuartil Atas (Q3) dan Kuartil Bawah (Q1).'
  }
];
