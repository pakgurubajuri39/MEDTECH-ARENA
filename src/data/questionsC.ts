import { Question } from '../types';

export const questionsPacketC: Question[] = [
  // =================== BAHASA INDONESIA (SOAL 1 - 30) ===================
  {
    id: 201,
    number: 1,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Hemofilia merupakan gangguan genetik langka yang menyebabkan darah sulit membeku secara normal akibat kekurangan faktor pembekuan VIII atau IX. Penderita hemofilia rentan mengalami pendarahan spontan di dalam sendi lutut, siku, maupun pergelangan kaki. Terapi profilaksis berupa suntikan konsentrat faktor pembekuan secara teratur terbukti mampu mencegah kerusakan sendi permanen pada pasien anak.`,
    questionText: `Menurut teks, apa penyebab utama darah penderita hemofilia sulit membeku secara normal?`,
    options: [
      { key: 'A', text: 'Kelebihan sel darah putih leukosit di dalam sumsum tulang belakang' },
      { key: 'B', text: 'Kekurangan protein faktor pembekuan VIII atau IX' },
      { key: 'C', text: 'Tersumbatnya pembuluh darah arteri oleh kolesterol jahat' },
      { key: 'D', text: 'Kurangnya konsumsi garam beryodium sejak masa balita' }
    ],
    correctAnswer: 'B',
    explanation: 'Pada kalimat pertama secara tersurat dinyatakan: "akibat kekurangan faktor pembekuan VIII atau IX".',
    recommendationHint: 'Lacak kata kunci penyebab langsung dari penjelasan kalimat utama.'
  },
  {
    id: 202,
    number: 2,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Metode "isolasi mandiri" atau isoman adalah tindakan memisahkan seseorang yang terkonfirmasi terinfeksi penyakit menular tetapi tidak bergejala atau hanya bergejala ringan dari orang sehat lainnya di lingkungan rumah demi memutus mata rantai penularan di tingkat keluarga.`,
    questionText: `Tujuan pokok dari tindakan isolasi mandiri adalah...`,
    options: [
      { key: 'A', text: 'Memutus mata rantai penularan infeksi di tingkat keluarga dan masyarakat' },
      { key: 'B', text: 'Menghindari biaya tagihan listrik rumah sakit swasta' },
      { key: 'C', text: 'Memaksa pasien berhenti berinteraksi sosial secara permanen' },
      { key: 'D', text: 'Mendapatkan bantuan sembako dari dinas sosial kelurahan' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyebutkan secara eksplisit: "demi memutus mata rantai penularan di tingkat keluarga".',
    recommendationHint: 'Identifikasi tujuan utama yang dinyatakan dengan kata penanda "demi" atau "untuk".'
  },
  {
    id: 203,
    number: 3,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Kemampuan berpikir kritis dan literasi sains merupakan tameng utama generasi muda di era banjir disinformasi kesehatan. Media sosial kini dipenuhi klaim penyembuhan tanpa bukti ilmiah yang kerap merugikan pasien. Tanpa verifikasi sumber terpercaya seperti jurnal medis dan situs resmi kementerian kesehatan, masyarakat mudah terjebak hoaks berbahaya.`,
    questionText: `Gagasan sentral paragraf tersebut adalah...`,
    options: [
      { key: 'A', text: 'Urgensi berpikir kritis dan literasi sains untuk membentengi diri dari hoaks medis' },
      { key: 'B', text: 'Keunggulan tarif kuota internet cepat di era modern' },
      { key: 'C', text: 'Tata cara membuat akun media sosial yang populer bagi remaja' },
      { key: 'D', text: 'Sejarah penerbitan jurnal kesehatan pertama di dunia' }
    ],
    correctAnswer: 'A',
    explanation: 'Paragraf membahas pentingnya nalar kritis sains untuk menyaring banjir disinformasi kesehatan di internet.',
    recommendationHint: 'Carilah gagasan yang merangkum keseluruhan relasi kalimat dalam wacana.'
  },
  {
    id: 204,
    number: 4,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `SMA Genesis Medicare mengembangkan kurikulum kolaboratif yang mengintegrasikan sains biologi modern dengan teknologi informatika medis (Health Informatics). Siswa tidak hanya mempelajari struktur molekul DNA, tetapi juga dilatih melakukan visualisasi data pemetaan sebaran penyakit secara digital. Inovasi pembelajaran ini membekali lulusan memiliki kesiapan unggul menuju fakultas kedokteran ternama.`,
    questionText: `Simpulan yang tepat mengenai lulusan program tersebut adalah...`,
    options: [
      { key: 'A', text: 'Lulusan memiliki kompetensi unggul perpaduan sains dan teknologi yang siap bersaing di bidang kedokteran.' },
      { key: 'B', text: 'Seluruh lulusan langsung diangkat menjadi dokter spesialis bedah tanpa kuliah lanjutan.' },
      { key: 'C', text: 'Program tersebut menghapuskan pelajaran bahasa dan pendidikan karakter.' },
      { key: 'D', text: 'Hanya siswa dengan komputer tercanggih yang diizinkan mengikuti pelajaran.' }
    ],
    correctAnswer: 'A',
    explanation: 'Simpulan merangkum keunggulan perpaduan sains dan informatika kesehatan bagi bekal menuju perguruan tinggi kedokteran.',
    recommendationHint: 'Simpulan yang valid harus mencerminkan hasil sintesis seluruh isi paragraf.'
  },
  {
    id: 205,
    number: 5,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `(1) Senam kesegaran jasmani diadakan di halaman sekolah setiap hari Jumat pagi.
(2) Kegiatan ini diikuti oleh seluruh dewan guru, staf tata usaha, dan siswa.
(3) Siapa pun yang datang terlambat senam pastilah anak pemalas yang tidak punya masa depan.
(4) Detak denyut nadi istirahat peserta diukur sebelum dan sesudah kegiatan senam berlangsung.`,
    questionText: `Pernyataan yang merupakan fakta objektif dapat ditemukan pada kalimat nomor...`,
    options: [
      { key: 'A', text: '(1), (2), dan (4)' },
      { key: 'B', text: '(3) saja' },
      { key: 'C', text: '(1) dan (3)' },
      { key: 'D', text: '(2) dan (3)' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalimat (1), (2), dan (4) menyajikan fakta konkret terukur. Kalimat (3) adalah prasangka opini subjektif.',
    recommendationHint: 'Pisahkan data kejadian nyata dari anggapan atau asumsi pribadi penulis.'
  },
  {
    id: 206,
    number: 6,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Sebuah unggahan viral menyatakan bahwa meminum larutan detergen dalam dosis kecil dapat membersihkan paru-paru dari lendir batuk berdahak.`,
    questionText: `Penilaian kritis pembaca yang cerdas terhadap klaim tersebut adalah...`,
    options: [
      { key: 'A', text: 'Klaim tersebut sangat berbahaya dan mematikan karena zat detergen bersifat korosif dan merusak saluran cerna serta pernapasan.' },
      { key: 'B', text: 'Klaim tersebut layak dicoba karena sabun memang terkenal membersihkan kotoran.' },
      { key: 'C', text: 'Klaim tersebut benar asalkan detergen dicampur dengan madu murni.' },
      { key: 'D', text: 'Klaim tersebut disetujui jika dilakukan pada waktu pagi hari sebelum sarapan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Detergen mengandung bahan surfaktan kimia berbahaya yang menyebabkan keracunan parah dan perforasi lambung.',
    recommendationHint: 'Gunakan pengetahuan sains dasar bahwa bahan pembersih kimia adalah racun bagi tubuh.'
  },
  {
    id: 207,
    number: 7,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Di tengah gemuruh badai yang memorakporandakan tenda posko darurat, Naya tetap memeluk erat tabung oksigen untuk seorang balita yang sedang mengalami asma akut. Tangannya gemetar menahan tiupan angin dingin yang menusuk, tetapi tatapannya tak pernah lepas dari monitor saturasi oksigen.`,
    questionText: `Karakter tokoh Naya yang paling menonjol dalam kutipan di atas adalah...`,
    options: [
      { key: 'A', text: 'Pemberani, penuh dedikasi, dan rela berkorban' },
      { key: 'B', text: 'Mudah panik saat menghadapi cuaca buruk' },
      { key: 'C', text: 'Suka memamerkan keahlian di depan rekan kerja' },
      { key: 'D', text: 'Pendiam dan tidak suka bekerja sama dalam tim' }
    ],
    correctAnswer: 'A',
    explanation: 'Perilaku melindungi balita dan menjaga oksigen di tengah badai menunjukkan sifat berani dan berdedikasi tinggi.',
    recommendationHint: 'Cermati keteguhan sikap tokoh dalam situasi genting.'
  },
  {
    id: 208,
    number: 8,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Lembayung senja membentang indah di ufuk barat SMA Genesis Medicare. Burung-burung pipit kembali ke sarangnya di dahan pohon rindang. Di teras musala, beberapa santri duduk melingkar menyimak wejangan guru dengan penuh takzim. Kehangatan persaudaraan begitu kental terasa di udara.`,
    questionText: `Latar tempat dan suasana dalam kutipan cerita tersebut adalah...`,
    options: [
      { key: 'A', text: 'Teras musala sekolah dengan suasana hangat dan khidmat' },
      { key: 'B', text: 'Pasar malam yang hiruk pikuk dengan musik keras' },
      { key: 'C', text: 'Ruang gawat darurat rumah sakit yang bising' },
      { key: 'D', text: 'Stasiun kereta api pada tengah malam' }
    ],
    correctAnswer: 'A',
    explanation: 'Latar tempat adalah teras musala sekolah dengan suasana hangat penuh persaudaraan.',
    recommendationHint: 'Amati deskripsi fisik lokasi dan impresi emosional lingkungan.'
  },
  {
    id: 209,
    number: 9,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Sidiq teringat wejangan ayahnya: "Jadilah seperti pohon peneduh di tepi jalan berdebu; tak pernah meminta imbalan kepada musafir yang berteduh di bawah rindang dedaunanmu." Kata-kata itulah yang membuatnya selalu tulus menolong siapa saja tanpa pandang bulu.`,
    questionText: `Amanat yang terkandung dalam cuplikan cerita di atas adalah...`,
    options: [
      { key: 'A', text: 'Memberikan manfaat dan pertolongan kepada sesama secara ikhlas tanpa mengharap pamrih.' },
      { key: 'B', text: 'Menanam pohon peneduh di setiap sudut persimpangan jalan tol.' },
      { key: 'C', text: 'Meminta imbalan yang layak kepada setiap orang yang meminta bantuan.' },
      { key: 'D', text: 'Menjual dedaunan pohon untuk menambah penghasilan keluarga.' }
    ],
    correctAnswer: 'A',
    explanation: 'Perumpamaan pohon peneduh mengajarkan keikhlasan dalam berbuat kebaikan kepada sesama tanpa pamrih.',
    recommendationHint: 'Maknai kiasan metaforis dalam pesan moral cerita.'
  },
  {
    id: 210,
    number: 10,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Perhatikan kalimat tidak baku berikut:
"Buku itu sangat bermanfaat sekali buat para praktisi-praktisi di rumah sakit."
Perbaikan kalimat tersebut agar efektif adalah...`,
    options: [
      { key: 'A', text: 'Buku itu sangat bermanfaat bagi para praktisi di rumah sakit.' },
      { key: 'B', text: 'Buku itu amat sangat bermanfaat sekali buat praktisi-praktisi.' },
      { key: 'C', text: 'Buku itu bermanfaat buat para praktisi-praktisi di rumah sakit.' },
      { key: 'D', text: 'Buku sangat bermanfaat sekali untuk para praktisi.' }
    ],
    correctAnswer: 'A',
    explanation: 'Hindari kombinasi "sangat ... sekali" dan "para praktisi-praktisi" serta gunakan kata depan baku "bagi" bukan "buat".',
    recommendationHint: 'Hapus redundansi kata penguat berlebihan dan jamak ganda.'
  },
  // Soal 11-30 Paket C (Bahasa Indonesia)
  {
    id: 211,
    number: 11,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Penulisan huruf kapital yang benar terdapat pada kalimat...`,
    options: [
      { key: 'A', text: 'Siswa kelas IX berkunjung ke Museum Nasional dan Sungai Ciliwung.' },
      { key: 'B', text: 'Siswa kelas ix berkunjung ke museum nasional dan sungai ciliwung.' },
      { key: 'C', text: 'Siswa Kelas IX berkunjung ke museum Nasional dan Sungai Ciliwung.' },
      { key: 'D', text: 'Siswa kelas IX berkunjung ke Museum nasional dan sungai Ciliwung.' }
    ],
    correctAnswer: 'A',
    explanation: 'Nama geografi (Sungai Ciliwung) dan nama diri lembaga/museum (Museum Nasional) diawali huruf kapital.',
    recommendationHint: 'Kapitalisasi berlaku pada unsur nama geografi yang diikuti nama spesifiknya.'
  },
  {
    id: 212,
    number: 12,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Kelenjar tiroid memproduksi hormon tiroksin yang mengatur kecepatan pembakaran energi dalam tubuh. Defisiensi iodium pada masa pertumbuhan dapat memicu penyakit gondok dan gangguan perkembangan kognitif. Garam beryodium standar nasional mengandung senyawa kalium iodat (KIO3) minimal 30 miligram per kilogram (mg/kg).`,
    questionText: `Berapa kandungan minimal kalium iodat pada garam beryodium standar nasional?`,
    options: [
      { key: 'A', text: '30 mg/kg' },
      { key: 'B', text: '10 mg/kg' },
      { key: 'C', text: '50 mg/kg' },
      { key: 'D', text: '100 mg/kg' }
    ],
    correctAnswer: 'A',
    explanation: 'Disebutkan pada kalimat terakhir: "minimal 30 miligram per kilogram (mg/kg)".',
    recommendationHint: 'Fokus pada angka syarat baku minimal yang tertulis di teks.'
  },
  {
    id: 213,
    number: 13,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Stres kronis memicu pelepasan hormon kortisol berlebih ke dalam sirkulasi darah. Hormon ini menekan respons limfosit T sehingga daya tahan tubuh melemah. Remaja yang mengalami tekanan psikologis berkepanjangan lebih rentan terinfeksi virus influenza dan membutuhkan waktu pemulihan luka dua kali lebih lambat dibanding individu yang rileks.`,
    questionText: `Hubungan antara stres dan kekebalan tubuh menurut kutipan teks di atas adalah...`,
    options: [
      { key: 'A', text: 'Stres memicu kortisol tinggi yang menekan sel limfosit T sehingga imunitas tubuh menurun.' },
      { key: 'B', text: 'Stres meningkatkan sel darah putih sehingga tubuh menjadi kebal terhadap segala kuman.' },
      { key: 'C', text: 'Stres membakar lemak dan otomatis menyembuhkan luka infeksi dengan cepat.' },
      { key: 'D', text: 'Stres tidak berpengaruh sama sekali terhadap kesehatan fisiologis manusia.' }
    ],
    correctAnswer: 'A',
    explanation: 'Rantai keterkaitan: stres kronis -> kortisol berlebih -> supresi limfosit T -> imunitas melemah.',
    recommendationHint: 'Hubungkan variabel pemicu, proses hormonal, dan akibat biologisnya.'
  },
  {
    id: 214,
    number: 14,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Sebuah sekolah menerapkan kebijakan "Gerakan Pungut Sampah dan Olah Kompos" selama 10 menit setiap pergantian jam istirahat.`,
    questionText: `Dampak pembentukan karakter positif yang paling mendasar bagi siswa dari program tersebut adalah...`,
    options: [
      { key: 'A', text: 'Menumbuhkan kepedulian lingkungan, tanggung jawab bersama, dan etos gotong royong.' },
      { key: 'B', text: 'Menghabiskan waktu istirahat agar siswa tidak sempat jajan di kantin.' },
      { key: 'C', text: 'Menjadikan siswa sebagai petugas kebersihan pengganti staf sekolah.' },
      { key: 'D', text: 'Mengurangi anggaran pengadaan buku pelajaran baru di perpustakaan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Program partisipatif menanamkan nilai karakter kepedulian, gotong royong, dan tanggung jawab terhadap lingkungan.',
    recommendationHint: 'Arahkan evaluasi pada dimensi penguatan profil pelajar berkarakter mulia.'
  },
  {
    id: 215,
    number: 15,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Kalimat dengan penggunaan kata depan (preposisi) "di" yang tepat adalah...`,
    options: [
      { key: 'A', text: 'Para siswa berkumpul di laboratorium farmasi untuk mengamati reaksi asam-basa.' },
      { key: 'B', text: 'Sampel darah itu dilaboratoriumkan kemarin pagi.' },
      { key: 'C', text: 'Obat harus disimpan didalam lemari pendingin.' },
      { key: 'D', text: 'Pengumuman itu ditempel dimading sekolah.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata depan "di" yang menunjukkan tempat wajib ditulis terpisah dari kata yang mengikutinya: "di laboratorium", "di dalam", "di mading".',
    recommendationHint: 'Kata depan "di" penunjuk lokasi dipisah spasi, imbuhan "di-" perbuatan disambung.'
  },
  {
    id: 216,
    number: 16,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Pena di jemari Pak Dokter bagaikan kuas pelukis yang menggoreskan harapan kesembuhan di lembar resep putih. Pasien yang menatapnya dengan pandangan nanar perlahan menemukan kembali cahaya kehidupan di matanya.`,
    questionText: `Majas perumpamaan yang menonjol pada kalimat pertama kutipan cerita adalah...`,
    options: [
      { key: 'A', text: 'Simile / Asosiasi' },
      { key: 'B', text: 'Metonimia' },
      { key: 'C', text: 'Ironi' },
      { key: 'D', text: 'Litotes' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "bagaikan" membandingkan pena dengan kuas pelukis secara eksplisit, merupakan majas simile.',
    recommendationHint: 'Identifikasi kata penghubung komparasi: bagai, seperti, bagaikan, laksana.'
  },
  {
    id: 217,
    number: 17,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Tanaman kelor (Moringa oleifera) dijuluki sebagai "pohon ajaib" karena kandungan nutrisinya yang melimpah. Daun kelor segar mengandung vitamin C tujuh kali lebih banyak dibanding buah jeruk, kalsium empat kali lebih banyak dibanding susu sapi, dan vitamin A empat kali lebih banyak dibanding wortel dalam bobot yang sama.`,
    questionText: `Berapa kali lipat kandungan vitamin C pada daun kelor segar jika dibandingkan dengan buah jeruk?`,
    options: [
      { key: 'A', text: 'Tujuh kali lebih banyak' },
      { key: 'B', text: 'Empat kali lebih banyak' },
      { key: 'C', text: 'Dua kali lebih banyak' },
      { key: 'D', text: 'Sepuluh kali lebih banyak' }
    ],
    correctAnswer: 'A',
    explanation: 'Sesuai kutipan: "vitamin C tujuh kali lebih banyak dibanding buah jeruk".',
    recommendationHint: 'Fokus pada padanan komparasi zat vitamin C terhadap buah jeruk.'
  },
  {
    id: 218,
    number: 18,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Olahraga teratur meningkatkan sensitivitas insulin dan membantu otot menggunakan glukosa darah tanpa tergantung sepenuhnya pada hormon insulin. Dengan demikian, olahraga rutin dapat bertindak layaknya obat penurun gula darah alami bagi orang dengan pra-diabetes.`,
    questionText: `Pernyataan berikut yang paling sesuai dengan isi bacaan adalah...`,
    options: [
      { key: 'A', text: 'Aktivitas fisik teratur berperan penting membantu tubuh mengendalikan kadar glukosa darah secara alami.' },
      { key: 'B', text: 'Penderita diabetes tidak boleh berolahraga sama sekali karena berbahaya bagi jantung.' },
      { key: 'C', text: 'Olahraga hanya membakar kadar air tanpa menyentuh cadangan gula tubuh.' },
      { key: 'D', text: 'Sensitivitas insulin menurun drastis saat seseorang melakukan peregangan otot.' }
    ],
    correctAnswer: 'A',
    explanation: 'Opsi A merangkum fungsi olahraga dalam peningkatan sensitivitas insulin dan regulasi glukosa.',
    recommendationHint: 'Pilih pernyataan yang paling selaras dengan prinsip ilmiah dalam paragraf.'
  },
  {
    id: 219,
    number: 19,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Klinik sekolah menyediakan layanan bimbingan konseling kesehatan mental gratis bagi seluruh siswa untuk mengatasi kecemasan menghadapi ujian akhir.`,
    questionText: `Urgensi layanan kesehatan mental di lingkungan sekolah adalah...`,
    options: [
      { key: 'A', text: 'Kesehatan psikologis dan kestabilan emosi merupakan prasyarat fundamental bagi optimalnya proses belajar siswa.' },
      { key: 'B', text: 'Memberikan sanksi berat kepada siswa yang nilainya rendah.' },
      { key: 'C', text: 'Membuat seluruh siswa wajib meminum obat penenang setiap pekan.' },
      { key: 'D', text: 'Menggantikan peran orang tua di rumah secara penuh.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kesehatan mental mendukung ketenangan dan efektivitas kognitif siswa dalam belajar.',
    recommendationHint: 'Pahami hubungan mutualisme antara kesehatan psikologis dan prestasi akademik.'
  },
  {
    id: 220,
    number: 20,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Kalimat di bawah ini yang memuat kata bersinonim secara tepat adalah...`,
    options: [
      { key: 'A', text: 'Dokter tersebut sangat cermat dan teliti saat memeriksa gejala penyakit pasien.' },
      { key: 'B', text: 'Ayah sedang pergi ke pasar sedangkan ibu pulang dari kantor.' },
      { key: 'C', text: 'Suhu udara di puncak terasa panas dan dingin bergantian.' },
      { key: 'D', text: 'Pasien yang gemuk itu ternyata memiliki berat badan yang sangat kurus.' }
    ],
    correctAnswer: 'A',
    explanation: 'Kata "cermat" dan "teliti" merupakan pasangan kata yang bersinonim (memiliki makna sepadan).',
    recommendationHint: 'Sinonim adalah padanan kata dengan kemiripan arti.'
  },
  {
    id: 221,
    number: 21,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Surya tersenyum menatap piala olimpiade sains di genggamannya. Di benaknya terbayang hari-hari melelahkan ketika ia harus bersepeda 10 kilometer setiap sore sepulang sekolah menuju laboratorium pembinaan. Keringat dan pengorbanannya kini terbayar lunas.`,
    questionText: `Nilai keteladanan yang dapat dipetik dari perjuangan Surya adalah...`,
    options: [
      { key: 'A', text: 'Kerja keras, ketekunan, dan keikhlasan berkorban mengantarkan seseorang meraih puncak prestasi.' },
      { key: 'B', text: 'Bersepeda jauh merupakan satu-satunya cara menjadi juara olimpiade sains.' },
      { key: 'C', text: 'Piala olimpiade harus selalu dipamerkan kepada semua tetangga desa.' },
      { key: 'D', text: 'Kemenangan hanya pantas dirayakan secara mewah di hotel berbintang.' }
    ],
    correctAnswer: 'A',
    explanation: 'Cerita menggambarkan dedikasi dan ketekunan yang membuahkan prestasi membanggakan.',
    recommendationHint: 'Ambil pesan keteladanan inspiratif untuk pengembangan diri.'
  },
  {
    id: 222,
    number: 22,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Golongan darah manusia dalam sistem ABO ditentukan oleh keberadaan antigen A dan antigen B pada permukaan membran eritrosit. Individu bergolongan darah O tidak memiliki antigen A maupun antigen B sehingga dapat mendonorkan sel darah merahnya ke semua golongan darah lain (disebut donor universal).`,
    questionText: `Mengapa individu dengan golongan darah O disebut sebagai donor universal?`,
    options: [
      { key: 'A', text: 'Karena sel darah merahnya tidak memiliki antigen A maupun antigen B sehingga tidak memicu reaksi penolakan.' },
      { key: 'B', text: 'Karena memiliki plasma darah yang paling kental di dunia.' },
      { key: 'C', text: 'Karena tidak memiliki sel darah putih sama sekali.' },
      { key: 'D', text: 'Karena golongan darah O hanya dimiliki oleh para bangsawan.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan: "Individu bergolongan darah O tidak memiliki antigen A maupun antigen B sehingga dapat mendonorkan sel darah merahnya ke semua golongan darah lain".',
    recommendationHint: 'Pahami alasan biologis ketiadaan antigen pada donor universal.'
  },
  {
    id: 223,
    number: 23,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Penerapan teknologi rekam medis elektronik (RME) di rumah sakit memangkas waktu pencarian berkas pasien dari 45 menit menjadi hanya 30 detik. Selain efisiensi waktu, RME meminimalkan risiko kesalahan pembacaan resep obat akibat tulisan tangan dokter yang kurang jelas.`,
    questionText: `Dua manfaat utama implementasi RME berdasarkan wacana adalah...`,
    options: [
      { key: 'A', text: 'Efisiensi waktu pencarian berkas dan pencegahan kesalahan pembacaan resep obat' },
      { key: 'B', text: 'Mengurangi kebutuhan listrik dan menaikkan harga tarif dokter spesialis' },
      { key: 'C', text: 'Menghapuskan kebutuhan tenaga apoteker di instalasi farmasi' },
      { key: 'D', text: 'Mengharuskan pasien membeli komputer tablet baru' }
    ],
    correctAnswer: 'A',
    explanation: 'Kedua manfaat eksplisit yang dipadukan adalah efisiensi waktu dan reduksi risiko salah baca resep.',
    recommendationHint: 'Gabungkan poin-poin keuntungan yang diuraikan dalam teks.'
  },
  {
    id: 224,
    number: 24,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Penulisan kata bilangan yang benar menurut pedoman PUEBI adalah...`,
    options: [
      { key: 'A', text: 'Tiga orang siswa berprestasi menerima beasiswa pendidikan dari SMA Genesis Medicare.' },
      { key: 'B', text: '3 orang siswa berprestasi menerima beasiswa pendidikan.' },
      { key: 'C', text: 'Sebanyak tiga-orang siswa berprestasi menerima beasiswa.' },
      { key: 'D', text: 'Para 3 siswa berprestasi menerima beasiswa.' }
    ],
    correctAnswer: 'A',
    explanation: 'Bilangan pada awal kalimat yang dapat dinyatakan dengan satu atau dua kata wajib ditulis dengan huruf, bukan angka (Tiga orang siswa...).',
    recommendationHint: 'Bilangan di awal kalimat harus dieja dengan huruf kata.'
  },
  {
    id: 225,
    number: 25,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Konsumsi serat pangan larut air (seperti beta-glukan pada gandum) membentuk gel kental di dalam lumen saluran cerna yang mengikat asam empedu. Tubuh kemudian terpaksa menarik kolesterol darah untuk memproduksi asam empedu baru, sehingga kadar kolesterol total darah berangsur-angsur turun.`,
    questionText: `Mekanisme penurunan kolesterol tubuh oleh serat larut adalah melalui...`,
    options: [
      { key: 'A', text: 'Pengikatan asam empedu oleh gel serat sehingga tubuh menggunakan kolesterol darah untuk membentuk empedu pengganti.' },
      { key: 'B', text: 'Pemusnahan seluruh organ hati secara kimiawi.' },
      { key: 'C', text: 'Penguapan kolesterol melalui pori-pori kulit saat berkeringat.' },
      { key: 'D', text: 'Pengubahan kolesterol menjadi gas karbondioksida di lambung.' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menjelaskan siklus pengikatan asam empedu yang memaksa tubuh menyerap kolesterol darah sebagai bahan baku empedu baru.',
    recommendationHint: 'Uraikan tahapan fisiologis sesuai alur penjelasan teks.'
  },
  {
    id: 226,
    number: 26,
    subject: 'indonesian',
    subTopic: 'Mengevaluasi & Merefleksi',
    passage: `Sebuah sekolah menengah memprogramkan kegiatan "Satu Jam Tanpa Gawai" di ruang kelas setiap istirahat siang, di mana siswa diajak berinteraksi tatap muka, membaca buku, atau bermain catur.`,
    questionText: `Refleksi manfaat sosial dari program tersebut adalah...`,
    options: [
      { key: 'A', text: 'Mempererat empati antarsiswa, melatih komunikasi langsung, dan mengurangi kecemasan fobia ketinggalan informasi (FOMO).' },
      { key: 'B', text: 'Menurunkan penjualan kuota pulsa operator seluler di lingkungan sekitar sekolah.' },
      { key: 'C', text: 'Memaksa siswa agar tidur siang di atas meja kelas masing-masing.' },
      { key: 'D', text: 'Meniadakan pembelajaran teknologi di laboratorium komputer sekolah.' }
    ],
    correctAnswer: 'A',
    explanation: 'Interaksi tatap muka tanpa distraksi layar menumbuhkan keterampilan sosial, empati nyata, dan kesehatan emosi.',
    recommendationHint: 'Tinjau dampak psikososial positif dari detoks digital terprogram.'
  },
  {
    id: 227,
    number: 27,
    subject: 'indonesian',
    subTopic: 'Mengapresiasi Teks Fiksi',
    passage: `Hati Bima bergetar hebat saat mendengar tangisan bayi yang baru lahir di ruang persalinan darurat. Di luar, hujan lebat mengguyur atap seng puskesmas desa. Semua jerih payah tim medis mendadak sirna berganti senyum kebahagiaan yang membuncah. Sebuah kehidupan baru telah hadir menyapa dunia.`,
    questionText: `Suasana hati tokoh dan tim medis dalam cuplikan teks fiksi tersebut adalah...`,
    options: [
      { key: 'A', text: 'Haru dan penuh kebahagiaan yang mendalam' },
      { key: 'B', text: 'Marah dan kecewa terhadap fasilitas desa' },
      { key: 'C', text: 'Takut akan bahaya banjir susulan' },
      { key: 'D', text: 'Bosan karena jam kerja yang panjang' }
    ],
    correctAnswer: 'A',
    explanation: 'Keberhasilan menolong persalinan memancarkan rasa haru dan kebahagiaan mendalam bagi seluruh tim.',
    recommendationHint: 'Rasakan resonansi emosi positif yang digambarkan penulis.'
  },
  {
    id: 228,
    number: 28,
    subject: 'indonesian',
    subTopic: 'Struktur & Kebahasaan',
    questionText: `Penulisan tanda petik ("...") yang tepat dalam kalimat langsung adalah...`,
    options: [
      { key: 'A', text: '"Kalian harus selalu menjaga kejujuran akademik," pesan Kepala Sekolah sebelum ujian dimulai.' },
      { key: 'B', text: '"Kalian harus selalu menjaga kejujuran akademik" pesan Kepala Sekolah sebelum ujian dimulai.' },
      { key: 'C', text: 'Kalian harus selalu menjaga kejujuran akademik, "pesan Kepala Sekolah sebelum ujian dimulai".' },
      { key: 'D', text: '"Kalian harus selalu menjaga kejujuran akademik." pesan Kepala Sekolah.' }
    ],
    correctAnswer: 'A',
    explanation: 'Tanda koma diletakkan di dalam tanda petik penutup untuk memisahkan kutipan langsung dari klausa pengiringnya.',
    recommendationHint: 'Tanda baca koma kalimat langsung terletak di dalam tanda petik penutup.'
  },
  {
    id: 229,
    number: 29,
    subject: 'indonesian',
    subTopic: 'Menemukan Informasi (Tekstual)',
    passage: `Indeks Massa Tubuh (IMT) dihitung dengan membagi berat badan (dalam kilogram) dengan kuadrat tinggi badan (dalam meter). Kategori berat badan normal menurut standar Kementerian Kesehatan RI untuk orang dewasa Asia berkisar pada angka IMT 18,5 hingga 22,9. Nilai IMT 23,0 ke atas telah dikategorikan kelebihan berat badan (overweight).`,
    questionText: `Berapakah rentang nilai IMT kategori normal menurut teks?`,
    options: [
      { key: 'A', text: '18,5 hingga 22,9' },
      { key: 'B', text: '23,0 hingga 25,0' },
      { key: 'C', text: '15,0 hingga 18,4' },
      { key: 'D', text: 'Di atas 30,0' }
    ],
    correctAnswer: 'A',
    explanation: 'Teks menyatakan: "berkisar pada angka IMT 18,5 hingga 22,9".',
    recommendationHint: 'Perhatikan batas rentang angka normal pada teks kesehatan.'
  },
  {
    id: 230,
    number: 30,
    subject: 'indonesian',
    subTopic: 'Memahami & Menyusun Informasi (Inferensial)',
    passage: `Pemberantasan sarang nyamuk (PSN) dengan metode 3M Plus—menguras tempat penampungan air, menutup rapat wadah air, mendaur ulang barang bekas, plus memasang kawat kasa dan memelihara ikan pemakan jentik—terbukti jauh lebih efektif dan berkelanjutan dibanding pengasapan (fogging). Pengasapan hanya membasmi nyamuk dewasa tanpa membunuh jentik yang siap bermetamorfosis.`,
    questionText: `Mengapa metode 3M Plus lebih unggul dan berkelanjutan dibanding pengasapan (fogging)?`,
    options: [
      { key: 'A', text: 'Karena 3M Plus memutus daur hidup nyamuk sejak fase telur dan jentik secara tuntas.' },
      { key: 'B', text: 'Karena asap fogging membuat nyamuk bertambah gemuk dan besar.' },
      { key: 'C', text: 'Karena metode 3M Plus menggunakan bahan kimia pemutih beracun.' },
      { key: 'D', text: 'Karena pengasapan membutuhkan biaya gratis dari pemerintah pusat.' }
    ],
    correctAnswer: 'A',
    explanation: '3M Plus memberantas fase pradewasa (jentik/telur) sehingga siklus reproduksi nyamuk terputus secara mendasar.',
    recommendationHint: 'Fahami keunggulan pencegahan berbasis pemutusan siklus hidup biologis patogen.'
  },

  // =================== MATEMATIKA (SOAL 31 - 60) ===================
  {
    id: 231,
    number: 31,
    subject: 'math',
    subTopic: 'Bilangan: Operasi Bilangan Bulat',
    questionText: `Suhu di dalam ruang penyimpanan plasma darah mula-mula adalah -18°C. Karena terjadi pemadaman listrik darurat selama 30 menit, suhu naik sebesar 4°C setiap 6 menit. Berapakah suhu di dalam ruang penyimpanan tersebut sekarang?`,
    options: [
      { key: 'A', text: '2°C' },
      { key: 'B', text: '-2°C' },
      { key: 'C', text: '0°C' },
      { key: 'D', text: '-4°C' }
    ],
    correctAnswer: 'A',
    explanation: 'Banyak kenaikan = 30 / 6 = 5 kali. Total kenaikan suhu = 5 × 4°C = 20°C. Suhu sekarang = -18°C + 20°C = 2°C.',
    recommendationHint: 'Operasi penjumlahan bilangan bulat negatif dan positif.'
  },
  {
    id: 232,
    number: 32,
    subject: 'math',
    subTopic: 'Bilangan: Pecahan & Persen',
    questionText: `Pak Guru Luky memiliki sebidang tanah seluas 600 m². Sebanyak 2/5 bagian tanah dibangun laboratorium sains, 1/4 bagian dijadikan taman herbal apotek hidup, dan sisanya dibuat lapangan olahraga. Berapakah luas lapangan olahraga tersebut?`,
    options: [
      { key: 'A', text: '210 m²' },
      { key: 'B', text: '240 m²' },
      { key: 'C', text: '180 m²' },
      { key: 'D', text: '225 m²' }
    ],
    correctAnswer: 'A',
    explanation: 'Lab sains = 2/5 × 600 = 240 m². Taman herbal = 1/4 × 600 = 150 m². Sisa lapangan = 600 - (240 + 150) = 600 - 390 = 210 m².',
    recommendationHint: 'Hitung proporsi pecahan masing-masing bagian dari total luas tanah.'
  },
  {
    id: 233,
    number: 33,
    subject: 'math',
    subTopic: 'Bilangan: Perbandingan Senilai & Berbalik Nilai',
    questionText: `Untuk menjahit 120 pasang jas laboratorium diperlukan 18 meter kain drill khusus. Berapa meter kain drill yang dibutuhkan untuk membuat 200 pasang jas laboratorium serupa?`,
    options: [
      { key: 'A', text: '30 meter' },
      { key: 'B', text: '32 meter' },
      { key: 'C', text: '28 meter' },
      { key: 'D', text: '36 meter' }
    ],
    correctAnswer: 'A',
    explanation: 'Perbandingan senilai: Jas / Kain -> 120 / 18 = 200 / x -> x = (200 × 18) / 120 = 3600 / 120 = 30 meter.',
    recommendationHint: 'Gunakan prinsip perkalian silang pada perbandingan senilai.'
  },
  {
    id: 234,
    number: 34,
    subject: 'math',
    subTopic: 'Bilangan: Pangkat & Bentuk Akar',
    questionText: `Bentuk rasional dari pecahan 12 / (3 + √3) adalah...`,
    options: [
      { key: 'A', text: '6 - 2√3' },
      { key: 'B', text: '6 + 2√3' },
      { key: 'C', text: '4 - √3' },
      { key: 'D', text: '4 + 2√3' }
    ],
    correctAnswer: 'A',
    explanation: 'Kalikan dengan sekawan: 12(3 - √3) / ((3+√3)(3-√3)) = 12(3 - √3) / (9 - 3) = 12(3 - √3) / 6 = 2(3 - √3) = 6 - 2√3.',
    recommendationHint: 'Rasionalkan penyebut dengan mengalikan bentuk sekawan (a - √b).'
  },
  {
    id: 235,
    number: 35,
    subject: 'math',
    subTopic: 'Aljabar: Barisan Geometri',
    questionText: `Sebuah bola elastis dijatuhkan dari ketinggian 16 meter ke lantai laboratorium. Setiap kali memantul, bola mencapai ketinggian 3/4 dari ketinggian sebelumnya. Berapakah tinggi pantulan bola pada pantulan ke-3?`,
    options: [
      { key: 'A', text: '6,75 meter' },
      { key: 'B', text: '9,00 meter' },
      { key: 'C', text: '12,00 meter' },
      { key: 'D', text: '5,25 meter' }
    ],
    correctAnswer: 'A',
    explanation: 'Pantulan 1: 16 × 3/4 = 12 m. Pantulan 2: 12 × 3/4 = 9 m. Pantulan 3: 9 × 3/4 = 27/4 = 6,75 meter.',
    recommendationHint: 'Hitung ketinggian secara berurutan dengan faktor pengali 3/4.'
  },
  {
    id: 236,
    number: 36,
    subject: 'math',
    subTopic: 'Aljabar: Deret Aritmetika',
    questionText: `Seorang siswa menabung di koperasi sekolah: hari pertama Rp5.000,00, hari kedua Rp7.000,00, hari ketiga Rp9.000,00, dan seterusnya dengan penambahan tetap setiap hari. Berapakah jumlah tabungan siswa tersebut setelah 20 hari?`,
    options: [
      { key: 'A', text: 'Rp480.000,00' },
      { key: 'B', text: 'Rp500.000,00' },
      { key: 'C', text: 'Rp450.000,00' },
      { key: 'D', text: 'Rp520.000,00' }
    ],
    correctAnswer: 'A',
    explanation: 'a = 5.000, b = 2.000, n = 20. S20 = 20/2 [2(5.000) + (19)(2.000)] = 10 [10.000 + 38.000] = 10 × 48.000 = Rp480.000,00.',
    recommendationHint: 'Gunakan rumus jumlah deret aritmetika Sn = n/2 [2a + (n-1)b].'
  },
  {
    id: 237,
    number: 37,
    subject: 'math',
    subTopic: 'Aljabar: PLSV Kontekstual',
    questionText: `Tiga kali umur Rian ditambah 4 tahun sama dengan umur kakeknya yaitu 64 tahun. Berapakah umur Rian sekarang?`,
    options: [
      { key: 'A', text: '20 tahun' },
      { key: 'B', text: '18 tahun' },
      { key: 'C', text: '22 tahun' },
      { key: 'D', text: '16 tahun' }
    ],
    correctAnswer: 'A',
    explanation: '3x + 4 = 64 -> 3x = 60 -> x = 20 tahun.',
    recommendationHint: 'Bentuk model aljabar persamaan satu variabel dari kalimat soal cerita.'
  },
  {
    id: 238,
    number: 38,
    subject: 'math',
    subTopic: 'Aljabar: SPLDV Sistem Persamaan',
    questionText: `Di tempat parkir klinik sekolah terdapat 60 kendaraan yang terdiri dari sepeda motor (roda 2) dan mobil (roda 4). Jika jumlah seluruh roda kendaraan ada 160 buah, berapakah banyak mobil yang parkir di tempat tersebut?`,
    options: [
      { key: 'A', text: '20 mobil' },
      { key: 'B', text: '25 mobil' },
      { key: 'C', text: '15 mobil' },
      { key: 'D', text: '30 mobil' }
    ],
    correctAnswer: 'A',
    explanation: 'm + b = 60 -> 2m + 2b = 120. Roda: 2m + 4b = 160. Kurangkan: 2b = 40 -> b = 20 mobil.',
    recommendationHint: 'Selesaikan SPLDV jumlah kendaraan dan jumlah roda dengan eliminasi.'
  },
  {
    id: 239,
    number: 39,
    subject: 'math',
    subTopic: 'Aljabar: Relasi & Fungsi Linier',
    questionText: `Diketahui rumus fungsi h(x) = px + q. Jika h(2) = 7 dan h(4) = 13, nilai dari h(-3) adalah...`,
    options: [
      { key: 'A', text: '-8' },
      { key: 'B', text: '-7' },
      { key: 'C', text: '-9' },
      { key: 'D', text: '-10' }
    ],
    correctAnswer: 'A',
    explanation: 'h(4) - h(2) = 2p -> 13 - 7 = 6 -> p = 3. 2(3) + q = 7 -> q = 1. Rumus h(x) = 3x + 1. Nilai h(-3) = 3(-3) + 1 = -8.',
    recommendationHint: 'Tentukan koefisien kemiringan p dan konstanta q fungsi.'
  },
  {
    id: 240,
    number: 40,
    subject: 'math',
    subTopic: 'Aljabar: Pemfaktoran Selisih Kuadrat',
    questionText: `Hasil pemfaktoran dari 49x² - 64y² adalah...`,
    options: [
      { key: 'A', text: '(7x - 8y)(7x + 8y)' },
      { key: 'B', text: '(7x - 8y)²' },
      { key: 'C', text: '(49x - 64y)(x + y)' },
      { key: 'D', text: '(7x + 8y)²' }
    ],
    correctAnswer: 'A',
    explanation: 'Rumus selisih dua kuadrat: a² - b² = (a - b)(a + b). (7x)² - (8y)² = (7x - 8y)(7x + 8y).',
    recommendationHint: 'Gunakan bentuk a² - b² = (a - b)(a + b).'
  },
  {
    id: 241,
    number: 41,
    subject: 'math',
    subTopic: 'Geometri: Teorema Pythagoras',
    questionText: `Sebuah kawat penopang tiang pemancar sinyal sekolah diikatkan pada tanah berjarak 9 meter dari kaki tiang. Jika tinggi tiang pemancar adalah 12 meter, berapakah panjang kawat penopang tersebut?`,
    options: [
      { key: 'A', text: '15 meter' },
      { key: 'B', text: '14 meter' },
      { key: 'C', text: '16 meter' },
      { key: 'D', text: '18 meter' }
    ],
    correctAnswer: 'A',
    explanation: 'Tripel Pythagoras (3, 4, 5 dikali 3): 9, 12, 15. Kawat c = √(9² + 12²) = √(81 + 144) = √225 = 15 meter.',
    recommendationHint: 'Kenali tripel Pythagoras dasar (3, 4, 5).'
  },
  {
    id: 242,
    number: 42,
    subject: 'math',
    subTopic: 'Geometri: Kesebangunan Segitiga',
    questionText: `Pada segitiga ABC, garis DE sejajar dengan sisi BC. Jika panjang AD = 6 cm, DB = 3 cm, dan panjang DE = 8 cm, berapakah panjang sisi BC?`,
    options: [
      { key: 'A', text: '12 cm' },
      { key: 'B', text: '10 cm' },
      { key: 'C', text: '15 cm' },
      { key: 'D', text: '14 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'AB = AD + DB = 6 + 3 = 9 cm. Kesebangunan: DE / BC = AD / AB -> 8 / BC = 6 / 9 -> BC = (8 × 9) / 6 = 72 / 6 = 12 cm.',
    recommendationHint: 'Perhatikan bahwa sisi pembanding adalah sisi penuh segitiga AB, bukan sekadar potongan DB.'
  },
  {
    id: 243,
    number: 43,
    subject: 'math',
    subTopic: 'Geometri: Luas Trapesium',
    questionText: `Halaman upacara SMA Genesis Medicare berbentuk trapesium sama kaki dengan panjang sisi sejajar masing-masing 24 m dan 14 m. Jika panjang sisi miringnya 13 m, berapakah luas halaman tersebut?`,
    options: [
      { key: 'A', text: '228 m²' },
      { key: 'B', text: '240 m²' },
      { key: 'C', text: '216 m²' },
      { key: 'D', text: '252 m²' }
    ],
    correctAnswer: 'A',
    explanation: 'Proyeksi alas: x = (24 - 14) / 2 = 10 / 2 = 5 m. Tinggi t = √(13² - 5²) = √(169 - 25) = √144 = 12 m. Luas = 1/2 × (24 + 14) × 12 = 1/2 × 38 × 12 = 38 × 6 = 228 m².',
    recommendationHint: 'Cari tinggi trapesium dengan Pythagoras sebelum menghitung luas.'
  },
  {
    id: 244,
    number: 44,
    subject: 'math',
    subTopic: 'Geometri: Bangun Ruang Tabung & Kerucut',
    questionText: `Sebuah tempat sampah steril berbentuk tabung dengan tutup berbentuk setengah bola. Diameter tabung 28 cm dan tinggi tabung 40 cm (π = 22/7). Berapakah luas permukaan wadah tersebut beserta tutupnya (termasuk alas bawah tabung)?`,
    options: [
      { key: 'A', text: '5.368 cm²' },
      { key: 'B', text: '4.850 cm²' },
      { key: 'C', text: '6.160 cm²' },
      { key: 'D', text: '4.200 cm²' }
    ],
    correctAnswer: 'A',
    explanation: 'r = 14 cm, t = 40 cm. Luas alas tabung = πr² = (22/7)×14² = 616 cm². Luas selimut tabung = 2πrt = 2×(22/7)×14×40 = 3.520 cm². Luas kubah setengah bola = 2πr² = 2×616 = 1.232 cm². Luas total = 616 + 3.520 + 1.232 = 5.368 cm².',
    recommendationHint: 'Jumlahkan luas alas tabung + selimut tabung + kubah setengah bola.'
  },
  {
    id: 245,
    number: 45,
    subject: 'math',
    subTopic: 'Geometri: Luas Permukaan Prisma Segitiga',
    questionText: `Sebuah prisma tegak segitiga alasnya berbentuk segitiga siku-siku dengan panjang sisi siku-sikunya 6 cm dan 8 cm. Jika tinggi prisma tersebut 15 cm, berapakah luas permukaan seluruh prisma tersebut?`,
    options: [
      { key: 'A', text: '408 cm²' },
      { key: 'B', text: '360 cm²' },
      { key: 'C', text: '420 cm²' },
      { key: 'D', text: '450 cm²' }
    ],
    correctAnswer: 'A',
    explanation: 'Hipotenusa alas c = √(6² + 8²) = 10 cm. Keliling alas = 6 + 8 + 10 = 24 cm. Luas alas = 1/2 × 6 × 8 = 24 cm². Luas permukaan = 2(Luas alas) + (Keliling alas × tinggi) = 2(24) + (24 × 15) = 48 + 360 = 408 cm².',
    recommendationHint: 'Luas prisma = 2 × Luas alas + (Keliling alas × tinggi).'
  },
  {
    id: 246,
    number: 46,
    subject: 'math',
    subTopic: 'Geometri: Transformasi Translasi & Refleksi',
    questionText: `Titik P(5, -2) ditranslasikan oleh T = (-3, 6), kemudian direfleksikan terhadap sumbu X. Koordinat bayangan akhir titik P adalah...`,
    options: [
      { key: 'A', text: 'P\'\'(2, -4)' },
      { key: 'B', text: 'P\'\'(2, 4)' },
      { key: 'C', text: 'P\'\'(-2, 4)' },
      { key: 'D', text: 'P\'\'(-2, -4)' }
    ],
    correctAnswer: 'A',
    explanation: 'Translasi: P\' = (5 + (-3), -2 + 6) = (2, 4). Refleksi sumbu X: (x, y) -> (x, -y), sehingga P\'\' = (2, -4).',
    recommendationHint: 'Refleksi terhadap sumbu X mengubah tanda ordinat (y) menjadi lawannya.'
  },
  {
    id: 247,
    number: 47,
    subject: 'math',
    subTopic: 'Geometri: Sudut Luar Segitiga',
    questionText: `Pada segitiga KLM, besar sudut K = 45° dan besar sudut L = 75°. Berapakah besar sudut luar di titik M?`,
    options: [
      { key: 'A', text: '120°' },
      { key: 'B', text: '110°' },
      { key: 'C', text: '130°' },
      { key: 'D', text: '105°' }
    ],
    correctAnswer: 'A',
    explanation: 'Teorema sudut luar: Besar sudut luar segitiga sama dengan jumlah dua sudut dalam yang bukan pelurusnya. Sudut luar M = Sudut K + Sudut L = 45° + 75° = 120°.',
    recommendationHint: 'Sudut luar segitiga sama dengan jumlah dua sudut dalam di hadapannya.'
  },
  {
    id: 248,
    number: 48,
    subject: 'math',
    subTopic: 'Geometri: Luas Permukaan Bola',
    questionText: `Sebuah bola sepak untuk kegiatan olahraga siswa memiliki diameter 20 cm (π = 3,14). Berapakah luas permukaan bola tersebut?`,
    options: [
      { key: 'A', text: '1.256 cm²' },
      { key: 'B', text: '628 cm²' },
      { key: 'C', text: '3.140 cm²' },
      { key: 'D', text: '1.570 cm²' }
    ],
    correctAnswer: 'A',
    explanation: 'r = 10 cm. Luas = 4πr² = 4 × 3,14 × 10² = 4 × 3,14 × 100 = 1.256 cm².',
    recommendationHint: 'Ingat rumus luas bola penuh = 4πr².'
  },
  {
    id: 249,
    number: 49,
    subject: 'math',
    subTopic: 'Data & Statistika: Rata-rata Gabungan',
    questionText: `Rata-rata berat badan 15 siswa laki-laki adalah 54 kg, dan rata-rata berat badan 25 siswa perempuan adalah 46 kg. Berapakah rata-rata berat badan seluruh siswa tersebut?`,
    options: [
      { key: 'A', text: '49 kg' },
      { key: 'B', text: '50 kg' },
      { key: 'C', text: '48 kg' },
      { key: 'D', text: '51 kg' }
    ],
    correctAnswer: 'A',
    explanation: 'X_gab = [(15 × 54) + (25 × 46)] / (15 + 25) = [810 + 1150] / 40 = 1960 / 40 = 49 kg.',
    recommendationHint: 'Rata-rata gabungan = total seluruh bobot dibagi total seluruh siswa.'
  },
  {
    id: 250,
    number: 50,
    subject: 'math',
    subTopic: 'Data & Statistika: Kuartil Bawah (Q1)',
    questionText: `Diberikan data nilai tes matematika 8 siswa: 65, 70, 72, 78, 82, 85, 88, 92. Nilai kuartil bawah (Q1) dari data tersebut adalah...`,
    options: [
      { key: 'A', text: '71' },
      { key: 'B', text: '70' },
      { key: 'C', text: '72' },
      { key: 'D', text: '68' }
    ],
    correctAnswer: 'A',
    explanation: 'Separuh bawah: {65, 70, 72, 78}. Q1 adalah nilai tengah dari separuh bawah = (70 + 72) / 2 = 71.',
    recommendationHint: 'Kuartil bawah adalah median dari paruh data pertama.'
  },
  {
    id: 251,
    number: 51,
    subject: 'math',
    subTopic: 'Peluang: Pengambilan Bola',
    questionText: `Sebuah kotak berisi 6 bola merah, 9 bola kuning, dan 5 bola putih. Diambil satu bola secara acak. Berapakah peluang terambilnya bola berwarna merah?`,
    options: [
      { key: 'A', text: '3/10' },
      { key: 'B', text: '1/4' },
      { key: 'C', text: '2/5' },
      { key: 'D', text: '1/3' }
    ],
    correctAnswer: 'A',
    explanation: 'Total bola = 6 + 9 + 5 = 20. Bola merah = 6. Peluang = 6/20 = 3/10.',
    recommendationHint: 'Peluang = jumlah kejadian yang diinginkan dibagi total kemungkinan.'
  },
  {
    id: 252,
    number: 52,
    subject: 'math',
    subTopic: 'Peluang: Dua Dadu Jumlah Tertentu',
    questionText: `Dua buah dadu bermata 6 dilemparkan bersama-sama satu kali. Peluang munculnya mata dadu yang berjumlah 10 adalah...`,
    options: [
      { key: 'A', text: '3/36' },
      { key: 'B', text: '4/36' },
      { key: 'C', text: '2/36' },
      { key: 'D', text: '5/36' }
    ],
    correctAnswer: 'A',
    explanation: 'Mata dadu berjumlah 10: (4,6), (5,5), (6,4) -> ada 3 pasang. Peluang = 3/36 (atau 1/12).',
    recommendationHint: 'Daftar semua pasangan dadu yang jumlahnya tepat 10.'
  },
  {
    id: 253,
    number: 53,
    subject: 'math',
    subTopic: 'Bilangan: Aritmetika Sosial Pajak PPN',
    questionText: `Rangga membeli mikroskop digital seharga Rp2.500.000,00 dan dikenakan Pajak Pertambahan Nilai (PPN) sebesar 11%. Berapakah total uang yang harus dibayarkan oleh Rangga?`,
    options: [
      { key: 'A', text: 'Rp2.775.000,00' },
      { key: 'B', text: 'Rp2.750.000,00' },
      { key: 'C', text: 'Rp2.800.000,00' },
      { key: 'D', text: 'Rp2.650.000,00' }
    ],
    correctAnswer: 'A',
    explanation: 'PPN 11% = 11/100 × 2.500.000 = Rp275.000. Total bayar = 2.500.000 + 275.000 = Rp2.775.000,00.',
    recommendationHint: 'Pajak pertambahan nilai (PPN) menambahkan nilai belanja awal.'
  },
  {
    id: 254,
    number: 54,
    subject: 'math',
    subTopic: 'Aljabar: Himpunan Bagian',
    questionText: `Banyaknya himpunan bagian dari himpunan P = {faktor dari 12} yang memiliki 2 anggota adalah... (Faktor dari 12: {1, 2, 3, 4, 6, 12})`,
    options: [
      { key: 'A', text: '15' },
      { key: 'B', text: '12' },
      { key: 'C', text: '20' },
      { key: 'D', text: '10' }
    ],
    correctAnswer: 'A',
    explanation: 'n = 6 elemen. Kombinasi 2 dari 6: C(6, 2) = (6 × 5) / (2 × 1) = 30 / 2 = 15.',
    recommendationHint: 'Gunakan kombinasi nCr atau segitiga Pascal baris ke-6 elemen ke-2.'
  },
  {
    id: 255,
    number: 55,
    subject: 'math',
    subTopic: 'Geometri: Luas Juring Lingkaran',
    questionText: `Luas juring lingkaran dengan sudut pusat 60° dan panjang jari-jari 21 cm (π = 22/7) adalah...`,
    options: [
      { key: 'A', text: '231 cm²' },
      { key: 'B', text: '462 cm²' },
      { key: 'C', text: '154 cm²' },
      { key: 'D', text: '308 cm²' }
    ],
    correctAnswer: 'A',
    explanation: 'Luas lingkaran = (22/7) × 21² = 1.386 cm². Luas juring = (60° / 360°) × 1.386 = 1/6 × 1.386 = 231 cm².',
    recommendationHint: 'Luas juring = (sudut pusat / 360°) × Luas lingkaran.'
  },
  {
    id: 256,
    number: 56,
    subject: 'math',
    subTopic: 'Data & Statistika: Tabel Frekuensi & Mean',
    questionText: `Dari tabel nilai: nilai 6 (frekuensi 3), nilai 7 (frekuensi 5), nilai 8 (frekuensi 8), nilai 9 (frekuensi 4). Rata-rata hitung nilai tersebut adalah...`,
    options: [
      { key: 'A', text: '7,65' },
      { key: 'B', text: '7,50' },
      { key: 'C', text: '7,80' },
      { key: 'D', text: '8,00' }
    ],
    correctAnswer: 'A',
    explanation: 'Total data = (6×3) + (7×5) + (8×8) + (9×4) = 18 + 35 + 64 + 36 = 153. Banyak frekuensi = 3 + 5 + 8 + 4 = 20. Mean = 153 / 20 = 7,65.',
    recommendationHint: 'Kalikan setiap nilai dengan frekuensinya lalu bagi dengan jumlah total frekuensi.'
  },
  {
    id: 257,
    number: 57,
    subject: 'math',
    subTopic: 'Aljabar: Persamaan Garis Sejajar',
    questionText: `Persamaan garis yang melalui titik (3, -2) dan sejajar dengan garis y = 2x + 5 adalah...`,
    options: [
      { key: 'A', text: 'y = 2x - 8' },
      { key: 'B', text: 'y = 2x + 8' },
      { key: 'C', text: 'y = -2x + 4' },
      { key: 'D', text: 'y = 1/2x - 5' }
    ],
    correctAnswer: 'A',
    explanation: 'Garis sejajar memiliki gradien sama m = 2. Rumus: y - y1 = m(x - x1) -> y - (-2) = 2(x - 3) -> y + 2 = 2x - 6 -> y = 2x - 8.',
    recommendationHint: 'Dua garis sejajar memiliki gradien m1 = m2.'
  },
  {
    id: 258,
    number: 58,
    subject: 'math',
    subTopic: 'Geometri: Volume Tabung',
    questionText: `Sebuah tabung termos memiliki volume 6.160 cm³ dan tinggi 10 cm (π = 22/7). Berapakah panjang diameter alas termos tersebut?`,
    options: [
      { key: 'A', text: '28 cm' },
      { key: 'B', text: '14 cm' },
      { key: 'C', text: '21 cm' },
      { key: 'D', text: '35 cm' }
    ],
    correctAnswer: 'A',
    explanation: 'V = πr²t -> 6160 = (22/7) × r² × 10 -> 616 = (22/7) × r² -> r² = 616 × 7 / 22 = 196 -> r = 14 cm. Diameter = 2r = 28 cm.',
    recommendationHint: 'Hati-hati dengan pertanyaan: yang ditanyakan adalah diameter, bukan jari-jari.'
  },
  {
    id: 259,
    number: 59,
    subject: 'math',
    subTopic: 'Bilangan: Rasio Perbandingan Bertingkat',
    questionText: `Perbandingan uang Ani dan Budi adalah 3 : 4, sedangkan perbandingan uang Budi dan Caca adalah 2 : 5. Jika jumlah uang Ani dan Budi adalah Rp70.000,00, berapakah uang Caca?`,
    options: [
      { key: 'A', text: 'Rp100.000,00' },
      { key: 'B', text: 'Rp80.000,00' },
      { key: 'C', text: 'Rp120.000,00' },
      { key: 'D', text: 'Rp90.000,00' }
    ],
    correctAnswer: 'A',
    explanation: 'Ani : Budi = 3 : 4. Budi : Caca = 4 : 10 (disetarakan). Maka rasio Ani : Budi : Caca = 3 : 4 : 10. Ani + Budi = 3 + 4 = 7 bagian = Rp70.000 -> 1 bagian = Rp10.000. Uang Caca = 10 bagian = 10 × Rp10.000 = Rp100.000,00.',
    recommendationHint: 'Samakan rasio pembanding tengah sebelum menghitung nilai variabel lainnya.'
  },
  {
    id: 260,
    number: 60,
    subject: 'math',
    subTopic: 'Data & Statistika: Jangkauan Interkuartil',
    questionText: `Diberikan data nilai tes: 4, 5, 5, 6, 7, 7, 8, 8, 9, 10. Jangkauan interkuartil dari data tersebut adalah...`,
    options: [
      { key: 'A', text: '3' },
      { key: 'B', text: '2' },
      { key: 'C', text: '4' },
      { key: 'D', text: '5' }
    ],
    correctAnswer: 'A',
    explanation: 'Data 10 bilangan: paruh bawah {4, 5, 5, 6, 7} -> Q1 = 5. Paruh atas {7, 8, 8, 9, 10} -> Q3 = 8. Jangkauan interkuartil = Q3 - Q1 = 8 - 5 = 3.',
    recommendationHint: 'Q3 - Q1 adalah selisih kuartil atas dan kuartil bawah.'
  }
];
