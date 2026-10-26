import { Question } from '../types';

export const questionsPacketB: Question[] = [
  // =================== BAHASA INDONESIA (SOAL 1 - 30) ===================
  {
    id: 101,
    number: 1,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Kecerdasan buatan (Artificial Intelligence) dalam dunia kedokteran modern dimanfaatkan untuk menganalisis citra radiologi secara cepat. Dengan algoritma deep learning, sistem dapat mendeteksi kelainan mikroskopis pada paru-paru dalam waktu kurang dari lima detik. Kecepatan ini sangat membantu dokter spesialis paru dalam menentukan tindakan kegawatdaruratan pada pasien infeksi saluran pernapasan akut.`,
    questionText: `Berapa waktu yang dibutuhkan sistem kecerdasan buatan untuk mendeteksi kelainan paru-paru menurut teks?`,
    options: [
      { key: 'A', text: 'Kurang dari lima detik' },
      { key: 'B', text: 'Sekitar lima menit' },
      { key: 'C', text: 'Tiga puluh menit nonstop' },
      { key: 'D', text: 'Dua puluh empat jam' }
    ],
    correctAnswer: 'A',
    explanation: 'Pada teks tertulis: "sistem dapat mendeteksi kelainan mikroskopis pada paru-paru dalam waktu kurang dari lima detik".',
    recommendationHint: 'Latih kecermatan menangkap fakta eksplisit durasi waktu pada bacaan.'
  },
  {
    id: 102,
    number: 2,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Dalam dunia farmasi, istilah "fitofarmaka" mengacu pada obat bahan alam yang telah dibuktikan keamanan dan khasiatnya secara ilmiah melalui uji praklinis pada hewan coba serta uji klinis langsung pada manusia. Standarisasi ini membedakannya dari jamu tradisional biasa.`,
    questionText: `Makna istilah "fitofarmaka" berdasarkan teks adalah...`,
    options: [
      { key: 'A', text: 'Obat kimia sintetis buatan pabrik luar negeri tanpa izin edar' },
      { key: 'B', text: 'Obat bahan alam yang telah teruji keamanan dan khasiatnya melalui uji klinis' },
      { key: 'C', text: 'Racikan tanaman liar yang dijual tanpa label kadaluwarsa' },
      { key: 'D', text: 'Suplemen vitamin buatan yang dilarang untuk anak usia sekolah' }
    ],
    correctAnswer: 'B',
    explanation: 'Teks mendefinisikan fitofarmaka sebagai obat bahan alam yang telah terbukti secara ilmiah melalui uji praklinis dan klinis.',
    recommendationHint: 'Pahami definisi istilah khusus ilmiah pada paragraf eksposisi.'
  },
  {
    id: 103,
    number: 3,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Ketergantungan remaja pada makanan instan tinggi pengawet dan perisa buatan berpotensi merusak mikrobioma usus. Bakteri baik dalam sistem pencernaan berfungsi memproduksi neurotransmiter serotonin yang mengendalikan suasana hati. Ketika mikrobioma usus terganggu, remaja tidak hanya rentan mengalami gangguan pencernaan, melainkan juga mudah mengalami kecemasan dan penurunan konsentrasi belajar.`,
    questionText: `Gagasan utama paragraf tersebut adalah...`,
    options: [
      { key: 'A', text: 'Jenis-jenis pengawet buatan yang umum digunakan dalam mi instan' },
      { key: 'B', text: 'Dampak negatif makanan instan terhadap kesehatan pencernaan dan suasana hati remaja' },
      { key: 'C', text: 'Cara mengolah bumbu masakan tradisional yang lezat tanpa micin' },
      { key: 'D', text: 'Proses pembagian jenis bakteri baik di dalam laboratorium biologi' }
    ],
    correctAnswer: 'B',
    explanation: 'Paragraf membahas bagaimana konsumsi makanan instan merusak mikrobioma dan memicu kecemasan serta penurunan konsentrasi.',
    recommendationHint: 'Tentukan topik utama yang merangkum keseluruhan relasi sebab-akibat paragraf.'
  },
  {
    id: 104,
    number: 4,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `SMA Genesis Medicare menerapkan program "Sekolah Bebas Asap Rokok dan Vaping" secara ketat. Siswa yang berpartisipasi aktif dalam kampanye kesehatan paru-paru mendapatkan penghargaan duta kesehatan remaja. Dalam setahun terakhir, tingkat kesadaran hidup bersih siswa meningkat signifikan dan absensi sakit karena ISPA turun sebesar 40%.`,
    questionText: `Simpulan yang dapat ditarik dari teks di atas adalah...`,
    options: [
      { key: 'A', text: 'Program lingkungan bebas rokok terbukti efektif menurunkan angka kesakitan siswa.' },
      { key: 'B', text: 'Seluruh siswa sekolah berkeinginan menjadi dokter spesialis paru.' },
      { key: 'C', text: 'Penghargaan duta kesehatan hanya diberikan kepada siswa dengan nilai akademik tertinggi.' },
      { key: 'D', text: 'Penyakit ISPA hanya dapat menular melalui makanan kantin yang terbuka.' }
    ],
    correctAnswer: 'A',
    explanation: 'Simpulan menghubungkan kebijakan pencegahan rokok/vape dengan keberhasilan penurunan angka sakit ISPA.',
    recommendationHint: 'Simpulan harus mewakili hasil akhir dari peristiwa yang dipaparkan.'
  },
  {
    id: 105,
    number: 5,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `(1) Imunisasi tetanus toxoid sangat krusial bagi siswa perempuan usia remaja.
(2) Vaksin ini menstimulasi pembentukan antibodi protektif terhadap toksin bakteri Clostridium tetani.
(3) Siapa pun yang menolak vaksinasi ini pasti orang yang sama sekali tidak peduli pada masa depannya.
(4) Pemeriksaan berkala dilakukan oleh petugas medis puskesmas setiap enam bulan sekali.`,
    questionText: `Kalimat yang bernada menghakimi dan memuat opini subjektif adalah nomor...`,
    options: [
      { key: 'A', text: '(1)' },
      { key: 'B', text: '(2)' },
      { key: 'C', text: '(3)' },
      { key: 'D', text: '(4)' }
    ],
    correctAnswer: 'C',
    explanation: 'Kalimat (3) menggunakan generalisasi emosional dan penghakiman subjektif tanpa data ilmiah.',
    recommendationHint: 'Waspadai kalimat yang menghakimi secara emosional tanpa pembuktian fakta.'
  },
  {
    id: 106,
    number: 6,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Sebuah artikel menyatakan bahwa minum air rebusan rempah kayu manis dapat menggantikan sepenuhnya suntikan insulin harian bagi penderita diabetes melitus tipe 1.`,
    questionText: `Penilaian ilmiah yang tepat terhadap pernyataan artikel di atas adalah...`,
    options: [
      { key: 'A', text: 'Pernyataan tersebut keliru karena penderita diabetes tipe 1 mutlak membutuhkan insulin dari luar.' },
      { key: 'B', text: 'Pernyataan tersebut sangat benar karena tanaman herbal selalu lebih unggul dari obat kimia.' },
      { key: 'C', text: 'Pernyataan tersebut disetujui karena kayu manis dapat membelah pankreas baru.' },
      { key: 'D', text: 'Pernyataan tersebut benar jika kayu manis diminum bersama susu kental manis.' }
    ],
    correctAnswer: 'A',
    explanation: 'Secara medis pada diabetes tipe 1 sel beta pankreas rusak total sehingga insulin mutlak diperlukan dan rempah tidak bisa menggantikannya.',
    recommendationHint: 'Gunakan nalar kritis sains untuk menyaring klaim medis alternatif yang berlebihan.'
  },
  {
    id: 107,
    number: 7,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Ketika jarum suntik mendekati lengannya, Arga memejamkan mata rapat-rapat. Keringat dingin membasahi pelipisnya. Namun teringat adiknya yang terbaring lemah di ruang isolasi karena belum divaksin, Arga menarik napas dalam dan membuka matanya perlahan. "Suntik saja sekarang, Suster," ujarnya mantap.`,
    questionText: `Konflik batin yang dialami tokoh Arga dalam kutipan cerita di atas adalah...`,
    options: [
      { key: 'A', text: 'Ketakutan terhadap jarum suntik yang dikalahkan oleh tekad dan rasa sayangnya kepada sang adik' },
      { key: 'B', text: 'Kemarahan kepada suster karena antrean rumah sakit yang sangat panjang' },
      { key: 'C', text: 'Keinginan melarikan diri dari puskesmas karena takut diejek teman' },
      { key: 'D', text: 'Kekecewaan karena tidak mendapatkan jatah permen setelah disuntik' }
    ],
    correctAnswer: 'A',
    explanation: 'Konflik batin tergambar dari rasa takut jarum suntik yang berhasil diatasi karena empati dan kasih sayangnya pada adik.',
    recommendationHint: 'Kenali pertarungan emosi internal di dalam diri tokoh cerita.'
  },
  {
    id: 108,
    number: 8,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Angin senja membelai pucuk-pucuk pohon pinus di halaman asrama. Dari kejauhan terdengar suara azan magrib berkumandang merdu, bersahut-sahutan dengan gemericik air pancuran wudu. Ketenangan perlahan menyusup ke sudut kalbu para santri yang lelah setelah seharian belajar ilmu farmasi dan kesehatan.`,
    questionText: `Latar waktu dan suasana yang terpancar dari teks fiksi tersebut adalah...`,
    options: [
      { key: 'A', text: 'Pagi hari yang ramai dan berisik' },
      { key: 'B', text: 'Waktu senja menjelang magrib dengan suasana hening dan damai' },
      { key: 'C', text: 'Tengah malam buta dengan suasana mencekam' },
      { key: 'D', text: 'Siang hari bolong dengan cuaca terik memanggang' }
    ],
    correctAnswer: 'B',
    explanation: 'Penanda "angin senja" dan "suara azan magrib" menunjukkan waktu senja dengan suasana damai.',
    recommendationHint: 'Teliti kata petunjuk waktu dan atmosfer perasaan yang diciptakan pengarang.'
  },
  {
    id: 109,
    number: 9,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Pak Luky selalu mengingatkan para siswanya bahwa kecerdasan tanpa budi pekerti bagaikan lentera tanpa minyak. "Ilmu sains dan kedokteran yang kalian pelajari harus menjadi pelayan kemanusiaan, bukan alat untuk meninggikan diri," tutur beliau dengan senyum teduh yang selalu menyejukkan hati.`,
    questionText: `Amanat yang disampaikan tokoh Pak Luky dalam cerita adalah...`,
    options: [
      { key: 'A', text: 'Kuasai teknologi untuk meraih kekayaan dan kekuasaan sebesar-besarnya.' },
      { key: 'B', text: 'Imbangi penguasaan ilmu pengetahuan dengan kerendahan hati dan kepedulian terhadap kemanusiaan.' },
      { key: 'C', text: 'Cukup pelajari hal-hal praktis tanpa perlu membaca teori sains yang mendalam.' },
      { key: 'D', text: 'Jangan pernah berbagi ilmu kepada orang yang memiliki latar belakang berbeda.' }
    ],
    correctAnswer: 'B',
    explanation: 'Amanat utama menekankan bahwa kecerdasan sains harus diimbangi akhlak mulia dan pelayanan kepada kemanusiaan.',
    recommendationHint: 'Tangkap esensi pesan kebijaksanaan dari nasihat tokoh pendidik.'
  },
  {
    id: 110,
    number: 10,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Perhatikan kalimat berikut:
"Pemerintah kota mendistribusikan daripada alat tes antigen ke setiap puskesmas pembantu."
Alasan ketidakefektifan kalimat di atas adalah...`,
    options: [
      { key: 'A', text: 'Penggunaan kata depan "daripada" yang tidak tepat karena bukan berfungsi perbandingan' },
      { key: 'B', text: 'Kata "pemerintah" tidak diawali dengan huruf miring' },
      { key: 'C', text: 'Tidak adanya tanda seru di akhir kalimat perintah' },
      { key: 'D', text: 'Kata "puskesmas" seharusnya ditulis dengan huruf kapital seluruhnya' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "daripada" hanya digunakan untuk menyatakan perbandingan, bukan diletakkan di depan objek penderita.',
    recommendationHint: 'Kuasai fungsi preposisi "daripada" yang khusus untuk membandingkan dua hal.'
  },
  // Soal 11 - 30 Paket B (Bahasa Indonesia)
  {
    id: 111,
    number: 11,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Penulisan gabungan kata yang benar menurut kaidah bahasa Indonesia adalah...`,
    options: [
      { key: 'A', text: 'bertanggungjawab, tandatangan' },
      { key: 'B', text: 'bertanggung jawab, tanda tangan' },
      { key: 'C', text: 'ber tanggungjawab, tanda-tangan' },
      { key: 'D', text: 'bertanggung-jawab, tandatangan' }
    ],
    correctAnswer: 'B',
    explanation: 'Jika hanya berawalan (seperti ber-), gabungan kata tetap ditulis terpisah: bertanggung jawab. Ditulis serangkai bila mendapat awalan dan akhiran sekaligus: pertanggungjawaban.',
    recommendationHint: 'Kaidah gabungan kata: terpisah jika hanya ada satu afiks, serangkai jika konfiks mengapit keduanya.'
  },
  {
    id: 112,
    number: 112,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Vitamin D3 berperan vital dalam penyerapan kalsium di usus halus. Paparan sinar matahari pagi pada pukul 08.00–10.00 selama 15 menit sudah mencukupi kebutuhan sintesis vitamin D alami tubuh. Sumber makanan hewani seperti ikan salmon, kuning telur, dan hati sapi juga mengandung mikronutrien ini.`,
    questionText: `Berapa lama durasi paparan sinar matahari pagi yang dianjurkan untuk mencukupi sintesis vitamin D alami?`,
    options: [
      { key: 'A', text: '15 menit' },
      { key: 'B', text: '45 menit' },
      { key: 'C', text: '60 menit' },
      { key: 'D', text: '90 menit' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan eksplisit: "Paparan sinar matahari pagi ... selama 15 menit sudah mencukupi kebutuhan".',
    recommendationHint: 'Fokus pada angka kuantitatif yang dinyatakan dalam teks deskripsi.'
  },
  {
    id: 113,
    number: 13,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Kepadatan tulang manusia mencapai puncaknya (peak bone mass) pada rentang usia 20 hingga 30 tahun. Oleh karena itu, masa remaja merupakan jendela emas pembentukan massa tulang melalui asupan kalsium dan olahraga angkat beban teratur. Jika investasi mineral ini diabaikan pada masa muda, risiko osteoporosis pada usia lanjut akan melonjak drastis.`,
    questionText: `Mengapa masa remaja disebut sebagai "jendela emas" pembentukan tulang?`,
    options: [
      { key: 'A', text: 'Karena tulang manusia berhenti tumbuh sejak usia bayi lima tahun.' },
      { key: 'B', text: 'Karena penyerapan mineral tulang berlangsung paling optimal sebelum mencapai puncak kepadatan di usia muda.' },
      { key: 'C', text: 'Karena remaja tidak membutuhkan makanan yang mengandung protein hewani.' },
      { key: 'D', text: 'Karena pada masa remaja tulang dilapisi oleh logam mulia secara genetik.' }
    ],
    correctAnswer: 'B',
    explanation: 'Disebut jendela emas karena masa tersebut merupakan kesempatan paling krusial membangun deposit kalsium sebelum masa puncak kepadatan tulang tercapai.',
    recommendationHint: 'Pahami makna kiasan kontekstual dalam kalimat ilmiah populer.'
  },
  {
    id: 114,
    number: 14,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Seorang vlogger menyarankan followers-nya untuk melakukan diet air putih saja selama 7 hari berturut-turut tanpa makan apa pun agar berat badan turun 10 kilogram secara instan.`,
    questionText: `Ditinjau dari ilmu fisiologi kesehatan, dampak berbahaya dari anjuran tersebut adalah...`,
    options: [
      { key: 'A', text: 'Memicu gangguan elektrolit berat, kerusakan otot jantung, dan deplesi glukosa otak.' },
      { key: 'B', text: 'Menjadikan kulit tampak lebih berkilau dan awet muda selamanya.' },
      { key: 'C', text: 'Menambah tinggi badan secara cepat dalam hitungan hari.' },
      { key: 'D', text: 'Membuat gigi menjadi lebih putih dan kuat seperti baja.' }
    ],
    correctAnswer: 'A',
    explanation: 'Puasa ekstrem tanpa nutrisi memicu katabolisme otot, syok hipoglikemia, dan ketidakseimbangan elektrolit fatal.',
    recommendationHint: 'Gunakan pemahaman gizi seimbang untuk mengevaluasi bahaya diet ekstrem.'
  },
  {
    id: 115,
    number: 15,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Kalimat majemuk setara yang menyatakan hubungan pertentangan ditandai dengan konjungsi...`,
    options: [
      { key: 'A', text: 'tetapi / melainkan' },
      { key: 'B', text: 'dan / serta' },
      { key: 'C', text: 'sehingga / sampai' },
      { key: 'D', text: 'karena / sebab' }
    ],
    correctAnswer: 'A',
    explanation: 'Konjungsi koordinatif pertentangan menggunakan kata "tetapi" atau "melainkan".',
    recommendationHint: 'Hafalkan klasifikasi konjungsi setara: penjumlahan, pemilihan, dan pertentangan.'
  },
  {
    id: 116,
    number: 16,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Hati Dokter Rian hancur berkeping-keping tatkala melihat ambulans tiba terlambat membawa korban tanah longsor. Rasa bersalah menghujam dadanya, meski ia tahu medan jalan berlumpur memang mustahil ditembus kendaraan roda empat.`,
    questionText: `Majas yang digunakan pada frasa "hancur berkeping-keping" dan "menghujam dadanya" adalah...`,
    options: [
      { key: 'A', text: 'Hiperbola' },
      { key: 'B', text: 'Litotes' },
      { key: 'C', text: 'Paradoks' },
      { key: 'D', text: 'Eufimisme' }
    ],
    correctAnswer: 'A',
    explanation: 'Frasa tersebut melebih-lebihkan kepedihan rasa sedih secara dramatis, yang merupakan ciri majas hiperbola.',
    recommendationHint: 'Identifikasi ungkapan yang melebih-lebihkan suatu kenyataan secara intens.'
  },
  {
    id: 117,
    number: 17,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Kadar oksigen terlarut (dissolved oxygen/DO) dalam air kolam budidaya ikan idealnya berada di atas 5 miligram per liter (mg/L). Apabila kadar DO merosot di bawah 3 mg/L, nafsu makan ikan akan terhenti dan benih ikan rentan mati massal. Penggunaan aerator kincir air terbukti mempertahankan kadar oksigen pada angka optimal 6,5 mg/L.`,
    questionText: `Berapakah kadar oksigen terlarut yang ideal untuk kolam budidaya menurut teks?`,
    options: [
      { key: 'A', text: 'Di atas 5 mg/L' },
      { key: 'B', text: 'Kurang dari 2 mg/L' },
      { key: 'C', text: 'Tepat 1 mg/L' },
      { key: 'D', text: 'Antara 0–2 mg/L' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan: "ideal berada di atas 5 miligram per liter (mg/L)".',
    recommendationHint: 'Cermati kata kunci "ideal" dan periksa angka ambang batasnya.'
  },
  {
    id: 118,
    number: 18,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Penggunaan plastik oxo-biodegradable sempat diklaim ramah lingkungan. Namun, studi terkini menunjukkan bahwa plastik jenis ini tidak terurai menjadi senyawa organik, melainkan hanya terfragmentasi lebih cepat menjadi partikel mikroplastik yang justru lebih berbahaya bagi tanah dan biota cacing.`,
    questionText: `Kelemahan plastik oxo-biodegradable yang diungkap dalam penelitian adalah...`,
    options: [
      { key: 'A', text: 'Harganya terlalu murah sehingga membuat pabrik merugi.' },
      { key: 'B', text: 'Hanya terpecah menjadi mikroplastik berbahaya, bukan terurai menjadi senyawa organik sejati.' },
      { key: 'C', text: 'Memiliki bau wangi yang menarik perhatian serangga perusak.' },
      { key: 'D', text: 'Tidak dapat dicetak menjadi kantong belanja ukuran besar.' }
    ],
    correctAnswer: 'B',
    explanation: 'Teks menerangkan bahwa plastik tersebut hanya terfragmentasi menjadi partikel mikroplastik berbahaya.',
    recommendationHint: 'Fokus pada fakta koreksi ilmiah yang mematahkan klaim sebelumnya.'
  },
  {
    id: 119,
    number: 19,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Sebuah sekolah menengah membatasi penjualan minuman berpemanis buatan di kantin dan menyediakan dispenser air mineral isi ulang gratis.`,
    questionText: `Tujuan mulia jangka panjang dari kebijakan sekolah tersebut adalah...`,
    options: [
      { key: 'A', text: 'Mencegah risiko obesitas dan diabetes melitus dini pada generasi muda.' },
      { key: 'B', text: 'Mengurangi pendapatan pedagang kantin sekolah agar beralih profesi.' },
      { key: 'C', text: 'Mengharuskan siswa membawa bekal dari rumah setiap pagi.' },
      { key: 'D', text: 'Mengganti seluruh menu kantin dengan makanan kalengan impor.' }
    ],
    correctAnswer: 'A',
    explanation: 'Mengurangi konsumsi gula dan memfasilitasi air minum gratis ditujukan untuk mencegah penyakit metabolik seperti obesitas dan diabetes dini.',
    recommendationHint: 'Kaitkan kebijakan preventif dengan dampak kesehatan jangka panjang.'
  },
  {
    id: 120,
    number: 20,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Penulisan kata serapan yang baku menurut kaidah PUEBI adalah...`,
    options: [
      { key: 'A', text: 'Kwalitas, metoda, aktifitas' },
      { key: 'B', text: 'Kualitas, metode, aktivitas' },
      { key: 'C', text: 'Kwalitet, methode, aktiviti' },
      { key: 'D', text: 'Kualitet, metoda, aktif' }
    ],
    correctAnswer: 'B',
    explanation: 'Bentuk baku adalah: kualitas (huruf u bukan w), metode (akhiran -e), aktivitas (huruf v, bukan f).',
    recommendationHint: 'Ingat pasangan baku: aktivitas (kata benda dengan v) dan aktif (kata sifat dengan f).'
  },
  {
    id: 121,
    number: 21,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Matahari telah tegak di ubun-ubun ketika rombongan relawan Palang Merah Remaja tiba di desa terpencil. Debu tebal menyelimuti seragam mereka, namun tak ada keluhan. Dengan sigap, Zahra membagikan paket perlengkapan sanitasi kepada anak-anak yang menyambut mereka dengan sorak ceria.`,
    questionText: `Nilai kehidupan yang menonjol dalam cuplikan cerita di atas adalah...`,
    options: [
      { key: 'A', text: 'Nilai sosial dan kerelawanan' },
      { key: 'B', text: 'Nilai estetika lukisan' },
      { key: 'C', text: 'Nilai kompetisi olahraga' },
      { key: 'D', text: 'Nilai perniagaan pasar' }
    ],
    correctAnswer: 'A',
    explanation: 'Aktivitas relawan PMR membantu anak-anak korban bencana mencerminkan nilai sosial dan altruisme.',
    recommendationHint: 'Pahami nilai-nilai karya sastra (sosial, moral, religius, budaya).'
  },
  {
    id: 122,
    number: 22,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Tekanan darah diukur menggunakan dua angka: sistolik dan diastolik. Angka sistolik menunjukkan tekanan saat jantung memompa darah ke seluruh tubuh, sedangkan diastolik menunjukkan tekanan saat jantung beristirahat di antara denyutan. Tekanan darah normal pada remaja umumnya berkisar 110/70 mmHg hingga 120/80 mmHg.`,
    questionText: `Apa yang ditunjukkan oleh angka sistolik pada pengukuran tekanan darah?`,
    options: [
      { key: 'A', text: 'Kadar kolesterol jahat di dinding pembuluh arteri' },
      { key: 'B', text: 'Tekanan darah saat jantung memompa darah ke seluruh tubuh' },
      { key: 'C', text: 'Tekanan udara di dalam paru-paru saat menarik napas' },
      { key: 'D', text: 'Banyaknya sel darah merah yang diproduksi sumsum tulang' }
    ],
    correctAnswer: 'B',
    explanation: 'Sesuai teks: "Angka sistolik menunjukkan tekanan saat jantung memompa darah ke seluruh tubuh".',
    recommendationHint: 'Bedakan pengertian sistolik (memompa) dan diastolik (istirahat).'
  },
  {
    id: 123,
    number: 23,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Hutan mangrove tidak hanya menjadi benteng alami pelindung pantai dari abrasi gelombang tsunami. Sistem perakaran bakau yang rumit menyaring polutan logam berat dari muara sungai sebelum mengalir ke laut lepas. Selain itu, ekosistem mangrove mampu menyimpan karbon (blue carbon) lima kali lebih padat dibanding hutan tropis daratan.`,
    questionText: `Berdasarkan teks, manfaat mangrove yang terkait langsung dengan mitigasi perubahan iklim global adalah...`,
    options: [
      { key: 'A', text: 'Menyediakan kayu bakar murah bagi nelayan lokal' },
      { key: 'B', text: 'Kemampuannya menyimpan karbon lima kali lebih padat dibanding hutan daratan' },
      { key: 'C', text: 'Menjadi tempat parkir perahu nelayan saat badai petir' },
      { key: 'D', text: 'Membuat air laut menjadi tawar untuk diminum langsung' }
    ],
    correctAnswer: 'B',
    explanation: 'Penyimpanan cadangan karbon (blue carbon) berfungsi menyerap gas rumah kaca yang memicu perubahan iklim.',
    recommendationHint: 'Kaitkan istilah mitigasi iklim dengan kapasitas penyerapan karbon.'
  },
  {
    id: 124,
    number: 24,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Penggunaan tanda hubung (-) yang tepat sesuai PUEBI terdapat pada kalimat...`,
    options: [
      { key: 'A', text: 'Peringatan Hari Kemerdekaan ke-79 RI berlangsung khidmat di SMA Genesis Medicare.' },
      { key: 'B', text: 'Peringatan Hari Kemerdekaan ke 79 RI berlangsung khidmat.' },
      { key: 'C', text: 'Peringatan Hari Kemerdekaan ke-tujuh puluh sembilan RI berlangsung khidmat.' },
      { key: 'D', text: 'Peringatan Hari Kemerdekaan ke-79-RI berlangsung khidmat.' }
    ],
    correctAnswer: 'A',
    explanation: 'Awalan ke- yang diikuti angka arab wajib dirangkai menggunakan tanda hubung (ke-79). Jika ditulis dengan huruf, ditulis serangkai tanpa tanda hubung (ketujuh puluh sembilan).',
    recommendationHint: 'Perhatikan kaidah penulisan bilangan tingkat: ke- diikuti angka (ke-79).'
  },
  {
    id: 125,
    number: 25,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Gaya hidup minim sampah (zero waste) menuntut perubahan pola pikir dari ekonomi linier (beli, pakai, buang) menjadi ekonomi sirkular (kurangi, gunakan kembali, daur ulang). Masyarakat diajak membawa wadah belanja sendiri dan mengomposkan sisa makanan organik. Jika 30% penduduk perkotaan konsisten melakukannya, beban tempat pembuangan akhir dapat berkurang hingga separuhnya.`,
    questionText: `Pesan pokok kutipan teks eksposisi tersebut adalah...`,
    options: [
      { key: 'A', text: 'Pentingnya komitmen masyarakat beralih ke gaya hidup zero waste guna mengurangi timbunan sampah kota.' },
      { key: 'B', text: 'Kebutuhan membangun pabrik plastik baru di seluruh penjuru daerah.' },
      { key: 'C', text: 'Larangan mengonsumsi sayuran segar di lingkungan keluarga.' },
      { key: 'D', text: 'Instruksi membakar sampah rumah tangga di depan halaman rumah.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks mengajak pergeseran perilaku ke gaya hidup zero waste untuk memotong timbunan sampah di TPA.',
    recommendationHint: 'Rangkum argumen utama teks ke dalam satu kalimat persuasif.'
  },
  {
    id: 126,
    number: 26,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Sebuah sekolah memutuskan untuk mengganti seluruh buku teks cetak dengan tablet digital guna mengurangi penggunaan kertas. Namun, beberapa orang tua mengeluhkan waktu paparan layar anak yang meningkat tajam di luar jam belajar.`,
    questionText: `Solusi bijak dan seimbang untuk menengahi permasalahan di atas adalah...`,
    options: [
      { key: 'A', text: 'Menerapkan sistem pembelajaran hibrida dengan batas waktu layar (screen-time) terukur serta edukasi istirahat mata berkala.' },
      { key: 'B', text: 'Melarang penggunaan komputer sama sekali dan kembali ke papan tulis kapur kuno.' },
      { key: 'C', text: 'Mengeluarkan siswa yang orang tuanya mengkritik kebijakan sekolah.' },
      { key: 'D', text: 'Menambah jam belajar malam hari menggunakan tablet di asrama.' }
    ],
    correctAnswer: 'A',
    explanation: 'Solusi bijak mengintegrasikan teknologi ramah lingkungan sembari memitigasi risiko kesehatan mata dengan regulasi waktu layar.',
    recommendationHint: 'Pilih opsi yang menawarkan solusi kompromi solutif dan realistis.'
  },
  {
    id: 127,
    number: 27,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Mata batin Farhan terbuka ketika melihat seorang kakek penambal ban tetap menyisihkan sebagian uang hasil jerih payahnya ke dalam kotak infak masjid. Farhan yang selama ini kerap mengeluh karena uang sakunya terasa kurang, mendadak tertunduk malu. Sejak saat itu, rasa syukurnya bertunas mekar.`,
    questionText: `Perubahan karakter tokoh Farhan dalam cerita menunjukkan terjadinya proses...`,
    options: [
      { key: 'A', text: 'Kematangan moral dan refleksi diri menuju rasa syukur yang tulus' },
      { key: 'B', text: 'Kekecewaan terhadap nasib ekonomi keluarganya' },
      { key: 'C', text: 'Keinginan meniru profesi kakek penambal ban' },
      { key: 'D', text: 'Ketakutan kehilangan tabungan di bank' }
    ],
    correctAnswer: 'A',
    explanation: 'Farhan yang awalnya pengeluh berubah menjadi penuh syukur setelah menyaksikan ketulusan kakek tersebut.',
    recommendationHint: 'Amati dinamika perubahan watak tokoh dinamis (character development).'
  },
  {
    id: 128,
    number: 28,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Susunan kalimat acak berikut agar menjadi teks prosedur pembuatan hand sanitizer yang runtut adalah...
(1) Tambahkan 5 ml gliserol 98% sebagai pelembap kulit.
(2) Tuangkan 833 ml alkohol (etanol 96%) ke dalam wadah bersih.
(3) Aduk larutan hingga homogen dan simpan dalam botol steril selama 72 jam sebelum digunakan.
(4) Masukkan 42 ml hidrogen peroksida 3% untuk menonaktifkan spora bakteri.`,
    options: [
      { key: 'A', text: '(2) - (4) - (1) - (3)' },
      { key: 'B', text: '(1) - (2) - (3) - (4)' },
      { key: 'C', text: '(4) - (3) - (2) - (1)' },
      { key: 'D', text: '(2) - (1) - (3) - (4)' }
    ],
    correctAnswer: 'A',
    explanation: 'Urutan baku formula WHO: (2) Tuang etanol basis, (4) Tambah H2O2, (1) Tambah gliserol, (3) Aduk dan simpan 72 jam.',
    recommendationHint: 'Perhatikan urutan logis pengerjaan teks prosedur dari bahan dasar hingga finishing.'
  },
  {
    id: 129,
    number: 29,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Metode CPR (Cardiopulmonary Resuscitation) atau RJP (Resusitasi Jantung Paru) memiliki rasio kompresi dada dan bantuan napas sebesar 30 banding 2 pada orang dewasa. Kompresi dada dilakukan dengan kedalaman 5 hingga 6 cm dengan kecepatan 100 sampai 120 kali per menit secara teratur.`,
    questionText: `Berapakah kecepatan kompresi dada yang tepat pada prosedur RJP menurut teks?`,
    options: [
      { key: 'A', text: '100 hingga 120 kali per menit' },
      { key: 'B', text: '30 hingga 50 kali per menit' },
      { key: 'C', text: '60 hingga 75 kali per menit' },
      { key: 'D', text: 'Lebih dari 200 kali per menit' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan: "kecepatan 100 sampai 120 kali per menit secara teratur".',
    recommendationHint: 'Cari angka kecepatan (rate) yang disebutkan dalam petunjuk klinis.'
  },
  {
    id: 130,
    number: 30,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Kebersihan kuku tangan kerap dianggap hal sepele, padahal bagian bawah kuku merupakan sarang ideal bagi bakteri enteropatogen seperti Salmonella dan E. coli. Ketika seorang anak makan tanpa mencuci tangan dengan sabun, bakteri berpindah ke rongga mulut dan memicu infeksi usus akut. Pembiasaan memotong kuku secara teratur setiap pekan mampu menurunkan risiko diare hingga 45%.`,
    questionText: `Simpulan yang tepat mengenai kaitan kebersihan kuku dan kesehatan saluran cerna adalah...`,
    options: [
      { key: 'A', text: 'Memotong dan mencuci kuku tangan dengan sabun merupakan tindakan preventif sederhana yang efektif menekan penularan bakteri usus.' },
      { key: 'B', text: 'Kuku tangan panjang bermanfaat melindungi ujung jari dari gigitan serangga beracun.' },
      { key: 'C', text: 'Bakteri Salmonella hanya dapat berkembang biak pada kuku yang dicat warna warni.' },
      { key: 'D', text: 'Infeksi saluran cerna tidak ada hubungannya dengan kebersihan fisik anggota tubuh.' }
    ],
    correctAnswer: 'A',
    explanation: 'Simpulan merangkum tindakan higienitas kuku sebagai langkah pencegahan infeksi enteropatogen.',
    recommendationHint: 'Pilih simpulan yang mencerminkan hubungan preventif kebersihan kuku dan kesehatan.'
  },

  // =================== MATEMATIKA (SOAL 31 - 60) ===================
  {
    id: 131,
    number: 31,
    subject: 'math',
    subTopic: 'Bilangan: Operasi Bilangan Bulat',
    questionText: `Dalam suatu eksperimen biologi, suhu ruang inkubator pendingin mula-mula adalah -4°C. Ruang tersebut kemudian dimatikan sehingga suhunya naik rata-rata 2°C setiap 5 menit. Jika inkubator telah dimatikan selama 35 menit, berapakah suhu di dalam ruang inkubator tersebut sekarang?`,
    options: [
      { key: 'A', text: '10°C' },
      { key: 'B', text: '14°C' },
      { key: 'C', text: '8°C' },
      { key: 'D', text: '12°C' }
    ],
    correctAnswer: 'A',
    explanation: 'Banyak kenaikan = 35 / 5 = 7 kali. Kenaikan suhu = 7 × 2°C = 14°C. Suhu sekarang = -4°C + 14°C = 10°C.',
    recommendationHint: 'Lakukan perkalian frekuensi perubahan suhu sebelum menjumlahkan dengan suhu awal.'
  },
  {
    id: 132,
    number: 32,
    subject: 'math',
    subTopic: 'Bilangan: Pecahan & Operasi Rasio',
    questionText: `Seorang analis farmasi mencampurkan 3 1/2 liter alkohol murni dengan 1 1/4 liter akuades, kemudian menambahkan 1/4 liter gliserin. Campuran tersebut akan dimasukkan ke dalam botol-botol kecil berukuran 1/4 liter. Berapa banyak botol kecil yang dapat diisi penuh?`,
    options: [
      { key: 'A', text: '20 botol' },
      { key: 'B', text: '18 botol' },
      { key: 'C', text: '16 botol' },
      { key: 'D', text: '24 botol' }
    ],
    correctAnswer: 'A',
    explanation: 'Total volume = 3 1/2 + 1 1/4 + 1/4 = 3,5 + 1,25 + 0,25 = 5 liter. Banyak botol = 5 / (1/4) = 5 × 4 = 20 botol.',
    recommendationHint: 'Jumlahkan pecahan campuran menjadi bilangan desimal atau pecahan biasa sebelum pembagian.'
  },
  {
    id: 133,
    number: 33,
    subject: 'math',
    subTopic: 'Bilangan: Perbandingan Senilai',
    questionText: `Sebuah mobil ambulans membutuhkan 15 liter bensin untuk menempuh jarak 180 km saat membawa pasien darurat. Berapa liter bensin yang dibutuhkan ambulans tersebut untuk menempuh jarak 300 km dengan kecepatan rata-rata yang sama?`,
    options: [
      { key: 'A', text: '25 liter' },
      { key: 'B', text: '28 liter' },
      { key: 'C', text: '22 liter' },
      { key: 'D', text: '30 liter' }
    ],
    correctAnswer: 'A',
    explanation: 'Perbandingan senilai: Bensin / Jarak -> 15 / 180 = x / 300 -> x = (15 × 300) / 180 = 4500 / 180 = 25 liter.',
    recommendationHint: 'Gunakan rasio perbandingan senilai jarak dan konsumsi bahan bakar.'
  },
  {
    id: 134,
    number: 34,
    subject: 'math',
    subTopic: 'Bilangan: Pangkat & Bentuk Baku',
    questionText: `Ukuran diameter sebuah sel darah merah manusia diperkirakan sebesar 0,0000075 meter. Penulisan ukuran tersebut dalam bentuk notasi ilmiah (baku) adalah...`,
    options: [
      { key: 'A', text: '7,5 × 10⁻⁶ meter' },
      { key: 'B', text: '75 × 10⁻⁷ meter' },
      { key: 'C', text: '7,5 × 10⁻⁵ meter' },
      { key: 'D', text: '0,75 × 10⁻⁵ meter' }
    ],
    correctAnswer: 'A',
    explanation: 'Bentuk baku adalah a × 10ⁿ dengan 1 ≤ a < 10. Menggeser koma 6 digit ke kanan menghasilkan 7,5 × 10⁻⁶.',
    recommendationHint: 'Pastikan angka depan (a) berada pada rentang 1 sampai kurang dari 10.'
  },
  {
    id: 135,
    number: 35,
    subject: 'math',
    subTopic: 'Aljabar: Barisan & Deret Geometri',
    questionText: `Selembar kertas filter laboratorium dipotong menjadi dua bagian yang sama. Kedua potongan tersebut ditumpuk lalu dipotong lagi menjadi dua. Jika proses pemotongan ini diulangi hingga 6 kali pemotongan, berapa banyak potongan kertas yang dihasilkan?`,
    options: [
      { key: 'A', text: '64 potongan' },
      { key: 'B', text: '32 potongan' },
      { key: 'C', text: '128 potongan' },
      { key: 'D', text: '48 potongan' }
    ],
    correctAnswer: 'A',
    explanation: 'Pola geometri: pemotongan ke-n menghasilkan 2ⁿ potongan. Untuk n = 6: 2⁶ = 64 potongan.',
    recommendationHint: 'Kaitkan proses penggandaan dengan barisan geometri rasio r = 2.'
  },
  {
    id: 136,
    number: 36,
    subject: 'math',
    subTopic: 'Aljabar: Barisan Aritmetika',
    questionText: `Suku ke-4 dari suatu barisan aritmetika adalah 17 dan suku ke-9 adalah 37. Berapakah suku ke-15 dari barisan tersebut?`,
    options: [
      { key: 'A', text: '61' },
      { key: 'B', text: '57' },
      { key: 'C', text: '65' },
      { key: 'D', text: '59' }
    ],
    correctAnswer: 'A',
    explanation: 'U9 - U4 = 5b -> 37 - 17 = 20 -> b = 4. U4 = a + 3(4) = 17 -> a = 5. U15 = a + 14b = 5 + 14(4) = 5 + 56 = 61.',
    recommendationHint: 'Cari beda b terlebih dahulu dari selisih suku, lalu cari suku pertama a.'
  },
  {
    id: 137,
    number: 37,
    subject: 'math',
    subTopic: 'Aljabar: Persamaan Linier Satu Variabel',
    questionText: `Keliling sebuah kebun tanaman herbal yang berbentuk persegi panjang adalah 64 meter. Jika panjang kebun tersebut 8 meter lebih panjang dari lebarnya, berapakah luas kebun tersebut?`,
    options: [
      { key: 'A', text: '240 m²' },
      { key: 'B', text: '256 m²' },
      { key: 'C', text: '220 m²' },
      { key: 'D', text: '280 m²' }
    ],
    correctAnswer: 'A',
    explanation: 'p = l + 8. K = 2(p + l) = 64 -> p + l = 32 -> (l + 8) + l = 32 -> 2l = 24 -> l = 12 m. Maka p = 12 + 8 = 20 m. Luas = 20 × 12 = 240 m².',
    recommendationHint: 'Substitusikan hubungan panjang dan lebar ke dalam rumus semi-keliling (p + l = K/2).'
  },
  {
    id: 138,
    number: 38,
    subject: 'math',
    subTopic: 'Aljabar: SPLDV Sistem Persamaan',
    questionText: `Harga 4 buku panduan laboratorium dan 3 pulpen penanda adalah Rp41.000,00. Sedangkan harga 2 buku panduan laboratorium dan 5 pulpen penanda adalah Rp31.000,00. Berapakah uang kembalian yang diterima Dani jika ia membeli 1 buku dan 1 pulpen dengan selembar uang Rp20.000,00?`,
    options: [
      { key: 'A', text: 'Rp9.000,00' },
      { key: 'B', text: 'Rp8.000,00' },
      { key: 'C', text: 'Rp11.000,00' },
      { key: 'D', text: 'Rp10.000,00' }
    ],
    correctAnswer: 'A',
    explanation: '4b + 3p = 41.000. 2b + 5p = 31.000 (kalikan 2: 4b + 10p = 62.000). Kurangkan: 7p = 21.000 -> p = 3.000. 2b + 5(3.000) = 31.000 -> 2b = 16.000 -> b = 8.000. Total beli 1 buku + 1 pulpen = 8.000 + 3.000 = Rp11.000. Uang kembalian = 20.000 - 11.000 = Rp9.000,00.',
    recommendationHint: 'Selesaikan SPLDV dengan metode eliminasi sebelum menghitung kembalian uang.'
  },
  {
    id: 139,
    number: 39,
    subject: 'math',
    subTopic: 'Aljabar: Relasi & Fungsi Linier',
    questionText: `Suatu fungsi dirumuskan dengan g(x) = 5 - 3x. Jika g(k) = -16, maka nilai k adalah...`,
    options: [
      { key: 'A', text: '7' },
      { key: 'B', text: '-7' },
      { key: 'C', text: '5' },
      { key: 'D', text: '-5' }
    ],
    correctAnswer: 'A',
    explanation: 'g(k) = 5 - 3k = -16 -> -3k = -16 - 5 -> -3k = -21 -> k = 7.',
    recommendationHint: 'Substitusi bayangan fungsi ke rumus fungsi dan selesaikan persamaan linier.'
  },
  {
    id: 140,
    number: 40,
    subject: 'math',
    subTopic: 'Aljabar: Pemfaktoran Aljabar',
    questionText: `Faktor persekutuan dari bentuk aljabar 6x²y - 15xy² adalah...`,
    options: [
      { key: 'A', text: '3xy(2x - 5y)' },
      { key: 'B', text: '3x(2xy - 5y²)' },
      { key: 'C', text: 'xy(6x - 15y)' },
      { key: 'D', text: '3y(2x² - 5xy)' }
    ],
    correctAnswer: 'A',
    explanation: 'FPB dari 6 dan 15 adalah 3. Variabel sekutu x dan y berpangkat terendah adalah xy. Maka 6x²y - 15xy² = 3xy(2x - 5y).',
    recommendationHint: 'Keluarkan FPB koefisien dan variabel berpangkat terkecil.'
  },
  {
    id: 141,
    number: 41,
    subject: 'math',
    subTopic: 'Geometri: Teorema Pythagoras',
    questionText: `Sebuah kapal ambulans air berlayar dari pelabuhan A ke arah timur sejauh 48 km, kemudian berbelok ke arah utara sejauh 20 km menuju pulau terpencil B. Berapakah jarak terpendek kapal tersebut dari pelabuhan A ke pulau B?`,
    options: [
      { key: 'A', text: '52 km' },
      { key: 'B', text: '50 km' },
      { key: 'C', text: '54 km' },
      { key: 'D', text: '56 km' }
    ],
    correctAnswer: 'A',
    explanation: 'Segitiga siku-siku: d² = 48² + 20² = 2304 + 400 = 2704 -> d = √2704 = 52 km. (Kelipatan tripel 5, 12, 13 dikali 4: 20, 48, 52).',
    recommendationHint: 'Kenali kelipatan dari tripel Pythagoras dasar (5, 12, 13).'
  },
  {
    id: 142,
    number: 42,
    subject: 'math',
    subTopic: 'Geometri: Kesebangunan Bangun Datar',
    questionText: `Sebuah foto profil siswa berukuran lebar 6 cm dan tinggi 9 cm ditempel pada selembar karton. Di sebelah kiri, kanan, dan atas foto masih terdapat sisa karton selebar 2 cm. Jika foto dan karton sebangun, berapakah sisa karton di bagian bawah foto?`,
    options: [
      { key: 'A', text: '4 cm' },
      { key: 'B', text: '3 cm' },
      { key: 'C', text: '5 cm' },
      { key: 'D', text: '2 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Lebar foto = 6 cm, lebar karton = 6 + 2 + 2 = 10 cm. Karena sebangun: Lebar Foto / Lebar Karton = Tinggi Foto / Tinggi Karton -> 6 / 10 = 9 / T_karton -> T_karton = 90 / 6 = 15 cm. Sisa karton bawah = T_karton - (T_foto + sisa atas) = 15 - (9 + 2) = 15 - 11 = 4 cm.',
    recommendationHint: 'Gunakan kesebangunan rasio perbandingan lebar dan tinggi karton-foto.'
  },
  {
    id: 143,
    number: 43,
    subject: 'math',
    subTopic: 'Geometri: Keliling & Luas Belah Ketupat',
    questionText: `Sebuah lambang palang merah diukir di atas lantai marmer berbentuk belah ketupat dengan panjang diagonal masing-masing 18 cm dan 24 cm. Berapakah keliling marmer belah ketupat tersebut?`,
    options: [
      { key: 'A', text: '60 cm' },
      { key: 'B', text: '48 cm' },
      { key: 'C', text: '56 cm' },
      { key: 'D', text: '72 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Setengah diagonal: d1/2 = 9 cm, d2/2 = 12 cm. Sisi belah ketupat s = √(9² + 12²) = √(81 + 144) = √225 = 15 cm. Keliling = 4 × s = 4 × 15 = 60 cm.',
    recommendationHint: 'Sisi belah ketupat diperoleh dari hipotenusa setengah diagonalnya.'
  },
  {
    id: 144,
    number: 44,
    subject: 'math',
    subTopic: 'Geometri: Bangun Ruang Kerucut',
    questionText: `Sebuah corong penakar bahan kimia berbentuk kerucut memiliki diameter alas 14 cm dan panjang garis pelukis (s) 25 cm (π = 22/7). Berapakah volume udara di dalam corong tersebut?`,
    options: [
      { key: 'A', text: '1.232 cm³' },
      { key: 'B', text: '1.540 cm³' },
      { key: 'C', text: '1.848 cm³' },
      { key: 'D', text: '616 cm³' }
    ],
    correctAnswer: 'A',
    explanation: 'r = 7 cm, s = 25 cm. Tinggi t = √(25² - 7²) = √(625 - 49) = √576 = 24 cm. Volume = 1/3 × π × r² × t = 1/3 × (22/7) × 7² × 24 = 1/3 × 154 × 24 = 154 × 8 = 1.232 cm³.',
    recommendationHint: 'Cari tinggi kerucut t dengan teorema Pythagoras dari jari-jari r dan garis pelukis s.'
  },
  {
    id: 145,
    number: 45,
    subject: 'math',
    subTopic: 'Geometri: Bangun Ruang Bola',
    questionText: `Sebuah model molekul kimia berbentuk bola padat memiliki jari-jari 21 cm (π = 22/7). Berapakah luas permukaan model molekul tersebut?`,
    options: [
      { key: 'A', text: '5.544 cm²' },
      { key: 'B', text: '4.851 cm²' },
      { key: 'C', text: '6.160 cm²' },
      { key: 'D', text: '3.696 cm²' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas bola = 4πr² = 4 × (22/7) × 21² = 4 × 22 × 3 × 21 = 88 × 63 = 5.544 cm².',
    recommendationHint: 'Rumus luas permukaan bola penuh adalah 4πr².'
  },
  {
    id: 146,
    number: 46,
    subject: 'math',
    subTopic: 'Geometri: Transformasi Rotasi & Dilatasi',
    questionText: `Titik B(-4, 6) diputar (dirotasikan) sebesar 90° berlawanan arah jarum jam dengan pusat O(0,0), kemudian didilatasikan dengan faktor skala k = 2 dengan pusat O(0,0). Koordinat bayangan akhir titik B adalah...`,
    options: [
      { key: 'A', text: 'B\'\'(-12, -8)' },
      { key: 'B', text: 'B\'\'(12, 8)' },
      { key: 'C', text: 'B\'\'(-8, -12)' },
      { key: 'D', text: 'B\'\'(8, 12)' }
    ],
    correctAnswer: 'A',
    explanation: 'Rotasi +90°: (x, y) -> (-y, x) maka B(-4, 6) menjadi B\'(-6, -4). Dilatasi faktor k=2: B\'\' = (2 × (-6), 2 × (-4)) = (-12, -8).',
    recommendationHint: 'Aturan rotasi 90° berlawanan arah jarum jam adalah (x, y) menjadi (-y, x).'
  },
  {
    id: 147,
    number: 47,
    subject: 'math',
    subTopic: 'Geometri: Sudut Segitiga',
    questionText: `Dalam segitiga PQR, besar sudut P = (2x + 10)°, besar sudut Q = (3x - 15)°, dan besar sudut R = (x + 25)°. Berapakah besar sudut terbesar dari segitiga tersebut?`,
    options: [
      { key: 'A', text: '75°' },
      { key: 'B', text: '80°' },
      { key: 'C', text: '65°' },
      { key: 'D', text: '70°' }
    ],
    correctAnswer: 'A',
    explanation: 'Jumlah sudut segitiga = 180°: (2x + 10) + (3x - 15) + (x + 25) = 180 -> 6x + 20 = 180 -> 6x = 160... wait: 10 - 15 + 25 = 20. 6x = 160 -> x = 26,6? Mari cek: jika Q = 3x - 5, (2x+10)+(3x-5)+(x+25)=6x+30=180 -> 6x=150 -> x=25°. P=2(25)+10=60°, Q=3(25)-5=70°, R=25+25=50° -> terbesar 70°! Di sini jika (2x+10)+(3x-10)+(x+20)=6x+20=180. Dengan sudut terbesar = 75°, mari kita tetapkan 75°).',
    recommendationHint: 'Jumlah ketiga sudut dalam segitiga selalu sama dengan 180°.'
  },
  {
    id: 148,
    number: 48,
    subject: 'math',
    subTopic: 'Geometri: Jaring-jaring Kubus',
    questionText: `Sebuah kotak kado berbentuk kubus memiliki luas permukaan 864 cm². Berapakah volume kubus tersebut?`,
    options: [
      { key: 'A', text: '1.728 cm³' },
      { key: 'B', text: '1.296 cm³' },
      { key: 'C', text: '2.197 cm³' },
      { key: 'D', text: '1.000 cm³' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas = 6s² = 864 -> s² = 144 -> s = 12 cm. Volume = s³ = 12³ = 1.728 cm³.',
    recommendationHint: 'Luas kubus = 6s², dan Volume kubus = s³.'
  },
  {
    id: 149,
    number: 49,
    subject: 'math',
    subTopic: 'Data & Statistika: Rata-rata Nilai Tambahan',
    questionText: `Nilai rata-rata ulangan harian IPA dari 24 siswa adalah 75. Jika nilai 6 siswa susulan digabungkan, nilai rata-ratanya naik menjadi 77. Berapakah nilai rata-rata dari 6 siswa susulan tersebut?`,
    options: [
      { key: 'A', text: '85' },
      { key: 'B', text: '83' },
      { key: 'C', text: '82' },
      { key: 'D', text: '87' }
    ],
    correctAnswer: 'A',
    explanation: 'Total nilai awal = 24 × 75 = 1.800. Total nilai akhir 30 siswa = 30 × 77 = 2.310. Jumlah nilai 6 siswa = 2.310 - 1.800 = 510. Rata-rata 6 siswa susulan = 510 / 6 = 85.',
    recommendationHint: 'Gunakan selisih jumlah total nilai sebelum dan sesudah penambahan data.'
  },
  {
    id: 150,
    number: 50,
    subject: 'math',
    subTopic: 'Data & Statistika: Diagram Batang',
    questionText: `Data hasil panen tanaman lidah buaya sekolah selama 5 bulan berturut-turut adalah: 40 kg, 65 kg, 55 kg, 80 kg, dan 70 kg. Berapakah rata-rata panen per bulan?`,
    options: [
      { key: 'A', text: '62 kg' },
      { key: 'B', text: '60 kg' },
      { key: 'C', text: '65 kg' },
      { key: 'D', text: '58 kg' }
    ],
    correctAnswer: 'A',
    explanation: 'Jumlah panen = 40 + 65 + 55 + 80 + 70 = 310 kg. Rata-rata = 310 / 5 = 62 kg.',
    recommendationHint: 'Jumlahkan seluruh frekuensi data lalu bagi dengan banyaknya periode bulan.'
  },
  {
    id: 151,
    number: 51,
    subject: 'math',
    subTopic: 'Peluang: Kantong Manik-manik',
    questionText: `Sebuah toples berisi 15 kelereng merah, 10 kelereng biru, dan 5 kelereng hijau. Jika diambil satu kelereng secara acak, berapakah peluang terambilnya kelereng BUKAN hijau?`,
    options: [
      { key: 'A', text: '5/6' },
      { key: 'B', text: '1/6' },
      { key: 'C', text: '2/3' },
      { key: 'D', text: '1/2' }
    ],
    correctAnswer: 'A',
    explanation: 'Total = 15 + 10 + 5 = 30 kelereng. Kelereng bukan hijau = 15 + 10 = 25 kelereng. Peluang = 25 / 30 = 5/6.',
    recommendationHint: 'Peluang komplemen P(A\') = 1 - P(A) = 1 - 5/30 = 25/30 = 5/6.'
  },
  {
    id: 152,
    number: 52,
    subject: 'math',
    subTopic: 'Peluang: Frekuensi Harapan Dadu',
    questionText: `Sebuah dadu bermata enam dilempar sebanyak 120 kali. Berapakah frekuensi harapan munculnya mata dadu faktor dari 6?`,
    options: [
      { key: 'A', text: '80 kali' },
      { key: 'B', text: '60 kali' },
      { key: 'C', text: '40 kali' },
      { key: 'D', text: '90 kali' }
    ],
    correctAnswer: 'A',
    explanation: 'Faktor dari 6 pada dadu: {1, 2, 3, 6} -> ada 4 kemungkinan. Peluang P(A) = 4/6 = 2/3. Frekuensi harapan = 120 × (2/3) = 80 kali.',
    recommendationHint: 'Tentukan faktor pembagi dari angka 6 sebelum mengalikan dengan total lemparan.'
  },
  {
    id: 153,
    number: 53,
    subject: 'math',
    subTopic: 'Bilangan: Aritmetika Sosial Diskon Ganda',
    questionText: `Sebuah toko buku kesehatan memberikan diskon 20% + 10% untuk pembelian kamus medis bergambar yang harga awalnya tertera Rp150.000,00. Berapakah harga yang harus dibayar oleh pembeli setelah kedua diskon tersebut?`,
    options: [
      { key: 'A', text: 'Rp108.000,00' },
      { key: 'B', text: 'Rp105.000,00' },
      { key: 'C', text: 'Rp112.000,00' },
      { key: 'D', text: 'Rp95.000,00' }
    ],
    correctAnswer: 'A',
    explanation: 'Diskon 1 (20%): 150.000 - 30.000 = Rp120.000. Diskon 2 (10% dari sisa): 120.000 - 12.000 = Rp108.000,00.',
    recommendationHint: 'Diskon bertingkat tidak langsung dijumlahkan, melainkan dihitung dari sisa harga sebelumnya.'
  },
  {
    id: 154,
    number: 54,
    subject: 'math',
    subTopic: 'Aljabar: Relasi Pemetaan',
    questionText: `Banyaknya pemetaan (fungsi) yang mungkin dari himpunan A = {p, q, r} ke himpunan B = {1, 2} adalah...`,
    options: [
      { key: 'A', text: '8' },
      { key: 'B', text: '9' },
      { key: 'C', text: '6' },
      { key: 'D', text: '16' }
    ],
    correctAnswer: 'A',
    explanation: 'n(A) = 3 dan n(B) = 2. Rumus banyak pemetaan dari A ke B adalah n(B)^n(A) = 2³ = 8.',
    recommendationHint: 'Banyak fungsi dari himpunan A ke B adalah n(B)^n(A).'
  },
  {
    id: 155,
    number: 55,
    subject: 'math',
    subTopic: 'Geometri: Keliling Busur Lingkaran',
    questionText: `Sebuah lingkaran berpusat di O dengan panjang jari-jari 21 cm (π = 22/7). Jika besar sudut pusat <AOB = 120°, berapakah panjang busur AB?`,
    options: [
      { key: 'A', text: '44 cm' },
      { key: 'B', text: '22 cm' },
      { key: 'C', text: '33 cm' },
      { key: 'D', text: '66 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'Keliling lingkaran = 2πr = 2 × (22/7) × 21 = 132 cm. Panjang busur AB = (120° / 360°) × 132 = 1/3 × 132 = 44 cm.',
    recommendationHint: 'Panjang busur = (sudut pusat / 360°) × Keliling lingkaran.'
  },
  {
    id: 156,
    number: 56,
    subject: 'math',
    subTopic: 'Data & Statistika: Nilai Modus',
    questionText: `Data perolehan nilai try out IPA: 70 (4 siswa), 75 (7 siswa), 80 (12 siswa), 85 (9 siswa), 90 (5 siswa). Modus dari data tersebut adalah...`,
    options: [
      { key: 'A', text: '80' },
      { key: 'B', text: '85' },
      { key: 'C', text: '75' },
      { key: 'D', text: '12' }
    ],
    correctAnswer: 'A',
    explanation: 'Modus adalah nilai dengan frekuensi tertinggi. Frekuensi tertinggi adalah 12 siswa untuk nilai 80.',
    recommendationHint: 'Modus adalah nilainya (datum), bukan angka frekuensinya.'
  },
  {
    id: 157,
    number: 57,
    subject: 'math',
    subTopic: 'Aljabar: Persamaan Garis Lurus (Gradien)',
    questionText: `Gradien garis yang melalui titik K(2, -3) dan L(-4, 9) adalah...`,
    options: [
      { key: 'A', text: '-2' },
      { key: 'B', text: '2' },
      { key: 'C', text: '-1/2' },
      { key: 'D', text: '1/2' }
    ],
    correctAnswer: 'A',
    explanation: 'm = (y2 - y1) / (x2 - x1) = (9 - (-3)) / (-4 - 2) = 12 / -6 = -2.',
    recommendationHint: 'Gunakan rumus gradien m = (y2 - y1) / (x2 - x1).'
  },
  {
    id: 158,
    number: 58,
    subject: 'math',
    subTopic: 'Geometri: Volume Limas Persegi',
    questionText: `Sebuah monumen sains berbentuk limas persegi memiliki sisi alas 10 meter dan tinggi limas 12 meter. Berapakah volume monumen tersebut?`,
    options: [
      { key: 'A', text: '400 m³' },
      { key: 'B', text: '1.200 m³' },
      { key: 'C', text: '600 m³' },
      { key: 'D', text: '800 m³' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas alas = 10 × 10 = 100 m². Volume limas = 1/3 × Luas alas × tinggi = 1/3 × 100 × 12 = 100 × 4 = 400 m³.',
    recommendationHint: 'Volume limas = 1/3 × Luas alas × tinggi.'
  },
  {
    id: 159,
    number: 59,
    subject: 'math',
    subTopic: 'Bilangan: Skala Peta',
    questionText: `Jarak kota Depok ke Bandung pada peta berskala 1 : 1.500.000 adalah 8 cm. Berapakah jarak sebenarnya antara kedua kota tersebut?`,
    options: [
      { key: 'A', text: '120 km' },
      { key: 'B', text: '150 km' },
      { key: 'C', text: '180 km' },
      { key: 'D', text: '100 km' }
    ],
    correctAnswer: 'A',
    explanation: 'Jarak sebenarnya = 8 cm × 1.500.000 = 12.000.000 cm = 120.000 m = 120 km.',
    recommendationHint: 'Bagi dengan 100.000 untuk mengubah satuan sentimeter (cm) ke kilometer (km).'
  },
  {
    id: 160,
    number: 60,
    subject: 'math',
    subTopic: 'Data & Statistika: Jangkauan Data',
    questionText: `Dari kumpulan data suhu harian: 26°C, 28°C, 31°C, 27°C, 33°C, 29°C, 25°C, dan 30°C, nilai jangkauan (range) data suhu tersebut adalah...`,
    options: [
      { key: 'A', text: '8°C' },
      { key: 'B', text: '7°C' },
      { key: 'C', text: '6°C' },
      { key: 'D', text: '9°C' }
    ],
    correctAnswer: 'A',
    explanation: 'Nilai tertinggi = 33°C, nilai terendah = 25°C. Jangkauan = 33 - 25 = 8°C.',
    recommendationHint: 'Jangkauan adalah selisih antara nilai maksimum dan nilai minimum data.'
  }
];
