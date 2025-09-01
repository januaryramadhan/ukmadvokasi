// Data konstanta untuk website UKM Advokasi

export const ORGANIZATION_INFO = {
  name: "Unit Kegiatan Mahasiswa Advokasi",
  shortName: "UKM ADVOKASI",
  kabinet: "Prometheus Aletheia",
  slogan: "Makhluk Pilihan Tuhan",
  tagline: "Wadah Bagi Mahasiswa Mempelajari Hukum dan Advokasi",
  university: "Universitas Terbuka Bogor",
  established: "24 Oktober 2021",
} as const;

export const CONTACT_INFO = {
  email: "advokasiutbogor@gmail.com",
  phone: "083804720979",
  social: {
    instagram: "@ukmadvokasiut",
    threads: "@ukmadvokasiut",
    twitter: "@UKMADVOKASI_",
    whatsapp: "https://whatsapp.com/channel/0029VaAqLO5C6ZvBZ8Z5Z5Z5",
  },
} as const;

export const NAVIGATION_ITEMS = [
  {
    label: "Beranda",
    href: "/",
  },
  {
    label: "Profil",
    href: "/profil",
    children: [
      { label: "Sejarah", href: "/profil/sejarah" },
      { label: "Visi & Misi", href: "/profil/visi-misi" },
      { label: "Struktur Organisasi", href: "/profil/struktur" },
      { label: "AD/ART", href: "/profil/ad-art" },
    ],
  },
  {
    label: "Program Kerja",
    href: "/program-kerja",
  },
  {
    label: "Galeri",
    href: "/galeri",
  },
  {
    label: "Dokumentasi",
    href: "/dokumentasi",
  },
  {
    label: "Pendaftaran",
    href: "/pendaftaran",
  },
  {
    label: "Kontak",
    href: "/kontak",
  },
] as const;

export const VISI_MISI = {
  visi: "Menjadi wadah bagi mahasiswa untuk mempelajari hukum dan advokasi dengan semangat intelektualitas dan integritas yang tinggi.",
  misi: [
    "Menanamkan budaya diskusi dan membaca kepada mahasiswa",
    "Memberikan pemahaman dasar tentang hukum dan advokasi",
    "Mengembangkan kemampuan berpikir kritis dan analitis",
    "Membangun jaringan yang solid antar mahasiswa pecinta hukum",
    "Berpartisipasi aktif dalam kegiatan kemahasiswaan yang bermanfaat",
  ],
} as const;

export const ORGANIZATIONAL_STRUCTURE = [
  // Dewan Pengarah
  {
    name: "Irfan Yoga",
    position: "Dewan Pengarah",
    department: "",
    level: "advisor",
  },
  {
    name: "Nilam Rimbawati",
    position: "Dewan Pengarah", 
    department: "",
    level: "advisor",
  },
  // Dewan Pembina
  {
    name: "Edo Saputra, S.H.,M.Si",
    position: "Dewan Pembina",
    department: "",
    level: "supervisor",
  },
  // Pengurus Inti
  {
    name: "Rafly Alviandi",
    position: "Ketua Umum",
    department: "Sosiologi",
    level: "executive",
  },
  {
    name: "Nisah Rahmawati",
    position: "Wakil Ketua Umum",
    department: "Ilmu Hukum",
    level: "executive",
  },
  {
    name: "Alya Nur Rahmawati",
    position: "Sekretaris Umum",
    department: "Ilmu Pemerintahan",
    level: "executive",
  },
  {
    name: "Clara Sailendra",
    position: "Bendahara Umum",
    department: "Ilmu Hukum",
    level: "executive",
  },
  // Kepala Divisi
  {
    name: "Friska Adetia",
    position: "Kadiv Humas",
    department: "Ilmu Adm. Negara",
    level: "division",
  },
  {
    name: "Elzya Suwandi",
    position: "Kadiv Riset & Kajian",
    department: "Sastra Inggris",
    level: "division",
  },
  {
    name: "Juwita Putri",
    position: "Kadiv Medinfo",
    department: "Ilmu Hukum",
    level: "division",
  },
  {
    name: "Dzaky Pathurrahman",
    position: "Kepala Divisi PSDM",
    department: "Ilmu Komunikasi",
    level: "division",
  },
] as const;

export const SAMPLE_ARTICLES = [
  {
    id: "1",
    title: "Memahami Dasar-Dasar Hukum Konstitusi Indonesia",
    excerpt: "Artikel ini membahas tentang pentingnya memahami konstitusi sebagai landasan hukum tertinggi di Indonesia...",
    content: "Konten lengkap artikel...",
    author: "Tim Redaksi UKM Advokasi",
    publishDate: "2025-01-15",
    category: "Hukum Konstitusi",
    image: "/images/articles/article-1.jpg",
    tags: ["hukum", "konstitusi", "indonesia"],
  },
  {
    id: "2",
    title: "Peran Advokasi dalam Penegakan Hukum",
    excerpt: "Menjelaskan bagaimana advokasi berperan penting dalam sistem peradilan dan penegakan hukum...",
    content: "Konten lengkap artikel...",
    author: "Tim Redaksi UKM Advokasi",
    publishDate: "2025-01-10",
    category: "Advokasi",
    image: "/images/articles/article-2.jpg",
    tags: ["advokasi", "hukum", "peradilan"],
  },
  {
    id: "3",
    title: "Etika Profesi dalam Dunia Hukum",
    excerpt: "Pembahasan mengenai pentingnya etika dalam menjalankan profesi di bidang hukum...",
    content: "Konten lengkap artikel...",
    author: "Tim Redaksi UKM Advokasi",
    publishDate: "2025-01-05",
    category: "Etika Hukum",
    image: "/images/articles/article-3.jpg",
    tags: ["etika", "profesi", "hukum"],
  },
] as const;

export const SAMPLE_PROGRAMS = [
  {
    id: "1",
    title: "Pelatihan Orientasi Advokasi",
    description: "Menjadi agent of change adalah salah satu kewajiban dari setiap insan yang diberikan predikat sebagai mahasiswa. Sebagai wadah pengembangan minat dan bakat mahasiswa, UKM ADVOKASI saat ini memiliki fokus terhadap setiap pengembangan minat dan bakat setiap elemen yang ada didalamnya demi tujuan memberikan perubahan terhadap lingkungan sekitar atau pada dirinya sendiri.",
    date: "2024-12-28",
    time: "19:45 WIB",
    location: "Zoom Meeting",
    status: "completed" as const,
    image: "/program/pelatihan-advokasi.webp",
    category: "Pelatihan",
    speaker: "Ravy Billy Pratama"
  },
  {
    id: "2",
    title: "Pelatihan Manajemen Konflik & Manajemen Organisasi",
    description: "Menjadi agent of change adalah salah satu kewajiban dari setiap insan yang diberikan predikat sebagai mahasiswa. Sebagai wadah pengembangan minat dan bakat mahasiswa, UKM ADVOKASI saat ini memiliki fokus terhadap setiap pengembangan minat dan bakat setiap elemen yang ada didalamnya demi tujuan memberikan perubahan terhadap lingkungan sekitar atau pada dirinya sendiri.",
    date: "2025-01-11",
    time: "19:45 WIB",
    location: "Zoom Meeting",
    status: "completed" as const,
    image: "/program/pelatihan-manajemen-konflik.webp",
    category: "Pelatihan",
    speaker: "Fikri Padilah S.Pd & M.Rizal Zain.,S.Ak.,C.STMI"
  },
  {
    id: "3",
    title: "Pelatihan Kesekretariatan",
    description: "Pelatihan Kesekretariatan ini dirancang untuk memberikan anggota keterampilan dan pengetahuan dasar yang dibutuhkan untuk mengelola tugas-tugas organisasi secara efektif. Fokusnya biasanya pada pemahaman peran kesekretariatan dan persiapan dokumen seperti surat, laporan, dan sertifikat secara akurat.",
    date: "2025-01-18",
    time: "19:45 WIB",
    location: "Zoom Meeting",
    status: "completed" as const,
    image: "/program/pelatihan-kesekertariatan.webp",
    category: "Pelatihan",
    speaker: "Ayu Puspita N"
  },
  {
    id: "4",
    title: "Pelatihan Tata Kelola Keuangan",
    description: "Sebagai wadah pengembangan minat dan bakat mahasiswa, UKM ADVOKASI mengadakan Pelatihan Tata Kelola Keuangan yang bertujuan untuk meningkatkan kemampuan mengelola keuangan dalam organisasi, di berbagai sektor. Contoh nya perencanaan dan pelaporan keuangan.",
    date: "2025-01-25",
    time: "19:45 WIB",
    location: "Zoom Meeting",
    status: "completed" as const,
    image: "/program/pelatihan-keuangan.webp",
    category: "Pelatihan",
    speaker: "Septia Nanda"
  },
  {
    id: "5",
    title: "Pelatihan Copywriting & Bahasa Persuasif",
    description: "Copywriting adalah seni dan teknik menulis teks persuasif yang bertujuan untuk mempromosikan jasa atau ide tertentu. Teks ini dirancang untuk menarik perhatian, membangkitkan minat, menciptakan keinginan, dan mendorong tindakan dari audiens.",
    date: "2025-02-01",
    time: "19:45 WIB",
    location: "Zoom Meeting",
    status: "completed" as const,
    image: "/program/pelatihan-copywriting.webp",
    category: "Pelatihan",
    speaker: "Sarah Mushlihah"
  },
  {
    id: "6",
    title: "Buka Bersama & Santunan",
    description: "Program kegiatan sosial UKM Advokasi bersama Panti Asuhan ALQ dalam rangka berbagi dan mempererat silaturahmi dengan anak-anak panti asuhan.",
    date: "2025-03-22",
    time: "09:00 WIB",
    location: "Kec. Bogor Utara, Kota Bogor",
    status: "completed" as const,
    image: "/program/buka-bersama.webp",
    category: "Sosial",
    speaker: "-"
  },
  {
    id: "7",
    title: "Hidup Perempuan Yang Melawan",
    description: "Pelecehan seksual adalah tindakan bernuansa seksual yang tidak diinginkan dan menyebabkan rasa tidak nyaman, merendahkan, atau mengancam korban. Pelecehan seksual bukan hal baru di Indonesia, karena kasusnya terus terjadi setiap tahun. Saatnya kita buka mata, buka suara, dan ambil sikap!",
    date: "2025-07-31",
    time: "13:00 WIB",
    location: "Aula UT Bogor",
    status: "completed" as const,
    image: "/program/perempuan-yang-melawan.webp",
    category: "Seminar",
    speaker: "TBA"
  },
  {
    id: "8",
    title: "Diskusi Panel HAM",
    description: "Sejarah bangsa Indonesia mencatat berbagai tragedi kemanusiaan dan pelanggaran Hak Asasi Manusia (HAM) yang hingga kini belum sepenuhnya terselesaikan. UKM PENRISTEK dan UKM ADVOKASI berkolaborasi untuk menghadirkan ruang diskusi kritis, ekspresi seni, serta pemanfaatan teknologi dalam mengarsipkan dan menyebarkan isu HAM.",
    date: "2024-09-09",
    time: "20:00 WIB",
    location: "Aula UT Bogor",
    status: "upcoming" as const,
    image: "/program/mimbar-mahasiswa-advo-penristek.jpg",
    category: "Diskusi",
    speaker: "Irfan Yoga, January Ramadhan, Tubagus Alfarizi"
  }
] as const;
