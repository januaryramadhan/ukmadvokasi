# 🏛️ UKM Advokasi Website

Website resmi **Unit Kegiatan Mahasiswa Advokasi** Kabinet Kresna 2024/2025 yang dibangun dengan teknologi modern untuk memberikan informasi lengkap tentang organisasi, program kerja, publikasi, dan kegiatan UKM Advokasi.

![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0-38B2AC?style=for-the-badge&logo=tailwind-css)

## 🌟 Fitur Utama

### 📋 Halaman Informasi
- **Beranda** - Hero section dengan informasi utama organisasi
- **Profil Organisasi** - Sejarah, visi-misi, AD/ART, dan struktur kepengurusan
- **Program Kerja** - Showcase program-program UKM dengan design banner-style
- **Publikasi** - Artikel dan karya tulis anggota UKM
- **Dokumentasi** - Galeri dan dokumentasi kegiatan
- **Kontak** - Informasi kontak dan formulir pendaftaran

### 🎨 Desain & UX
- **Responsive Design** - Optimized untuk semua ukuran layar
- **Modern UI** - Clean, professional design dengan color scheme merah-kuning
- **Portrait Image Optimization** - Khusus untuk foto pengurus dan program (1080x1350)
- **Smooth Animations** - Transisi halus tanpa gangguan
- **Fast Performance** - Built dengan Next.js 15 dan optimizations

### 🔧 Teknologi
- **Framework**: Next.js 15.4.6 dengan App Router
- **Language**: TypeScript untuk type safety
- **Styling**: Tailwind CSS 4.0 dengan custom design system
- **Components**: Shadcn/ui untuk komponen UI konsisten
- **Icons**: Lucide React untuk iconography
- **Image Optimization**: Next.js Image component

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- pnpm (recommended) atau npm/yarn

### Installation

1. **Clone repository**
```bash
git clone https://github.com/your-username/ukmadvokasi.git
cd ukmadvokasi
```

2. **Install dependencies**
```bash
pnpm install
```

3. **Run development server**
```bash
pnpm dev
```

4. **Open browser**
```
http://localhost:3000
```

## 📁 Struktur Proyek

```
ukmadvokasi/
├── public/
│   ├── images/
│   │   ├── logo.png
│   │   ├── pengurus/          # Foto pengurus organisasi
│   │   └── program/           # Foto dokumentasi program
│   └── icons/
├── src/
│   ├── app/
│   │   ├── (pages)/           # Grouped routes
│   │   │   ├── dokumentasi/
│   │   │   ├── kontak/
│   │   │   ├── pendaftaran/
│   │   │   ├── profil/
│   │   │   │   ├── ad-art/
│   │   │   │   ├── sejarah/
│   │   │   │   ├── struktur/
│   │   │   │   └── visi-misi/
│   │   │   ├── program-kerja/
│   │   │   └── publikasi/
│   │   ├── globals.css
│   │   ├── layout.tsx
│   │   └── page.tsx           # Homepage
│   ├── components/
│   │   ├── layout/            # Header, Footer
│   │   ├── section/           # Homepage sections
│   │   └── ui/                # Reusable UI components
│   └── lib/
│       ├── utils.ts
│       └── data/
│           └── constants.ts   # Data organisasi & program
└── config files...
```

## 🎯 Halaman & Komponen

### 🏠 Homepage Sections
1. **Hero** - Welcome section dengan CTA buttons
2. **Visi Misi** - Visi dan misi organisasi
3. **Program Terdekat** - Showcase program upcoming
4. **Pengurus** - Tim pengurus inti dengan foto
5. **Latest Publications** - Artikel terbaru
6. **Kontak** - Informasi kontak dan social media

### 📄 Static Pages
- `/profil/sejarah` - Sejarah UKM Advokasi
- `/profil/visi-misi` - Visi, misi, dan tujuan
- `/profil/ad-art` - Anggaran Dasar dan Anggaran Rumah Tangga
- `/profil/struktur` - Struktur organisasi lengkap
- `/program-kerja` - Daftar program kerja
- `/publikasi` - Artikel dan publikasi
- `/dokumentasi` - Dokumentasi dan galeri kegiatan
- `/kontak` - Kontak dan pendaftaran

## 🛠️ Development

### Available Scripts
```bash
# Development
pnpm dev              # Start development server
pnpm build            # Build for production
pnpm start            # Start production server
pnpm lint             # Run ESLint
pnpm type-check       # TypeScript type checking
```

### Code Standards
- **TypeScript** - Strict mode enabled
- **ESLint** - Code linting dengan custom rules
- **Prettier** - Code formatting
- **Tailwind CSS** - Utility-first CSS framework
- **Component Structure** - Organized by feature/layout/ui

### Design System
```css
/* Color Palette */
Primary Red: #991b1b (red-800)
Secondary Red: #dc2626 (red-600)  
Accent Yellow: #fbbf24 (yellow-400)
Background: #f9fafb (gray-50)
Text: #111827 (gray-900)
```

## 📊 Performance & SEO

- ✅ **Core Web Vitals** optimized
- ✅ **SEO friendly** dengan proper meta tags
- ✅ **Image optimization** menggunakan Next.js Image
- ✅ **Responsive design** untuk semua device
- ✅ **Fast loading** dengan code splitting
- ✅ **Accessibility** compliant (WCAG guidelines)

## 🔧 Configuration

### Environment Variables
```env
# Create .env.local file
NEXT_PUBLIC_SITE_URL=https://your-domain.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@ukmadvokasi.com
```

### Deployment
Website siap untuk deployment di:
- **Vercel** (recommended untuk Next.js)
- **Netlify**
- **Railway**
- **VPS/Dedicated Server**

## 📝 Content Management

### Data Sources
Semua data organisasi disimpan di `/src/lib/data/constants.ts`:
- `ORGANIZATION_INFO` - Info dasar organisasi
- `ORGANIZATIONAL_STRUCTURE` - Struktur kepengurusan
- `SAMPLE_PROGRAMS` - Data program kerja
- `NAVIGATION_ITEMS` - Menu navigasi

### Adding Content
1. **Pengurus Baru**: Tambah foto di `/public/images/pengurus/` dan update `constants.ts`
2. **Program Baru**: Tambah foto di `/public/images/program/` dan update `SAMPLE_PROGRAMS`
3. **Publikasi**: Update data publikasi di komponen terkait

## 🤝 Contributing

1. Fork repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📋 Todo List

- [ ] Add CMS integration (Strapi/Sanity)
- [ ] Implement search functionality
- [ ] Add blog/news section
- [ ] Mobile app version
- [ ] Multi-language support
- [ ] Event booking system
- [ ] Member dashboard

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

**UKM Advokasi Kabinet Kresna 2024/2025**
- Ketua Umum: Rafly Alviandi
- Wakil Ketua: Nisah Rahmawati  
- Sekretaris Umum: Alya Nur Rahmawati
- Bendahara Umum: Clara Sailendra

## 📞 Contact

- **Website**: [ukmadvokasi.com](https://ukmadvokasi.com)
- **Email**: contact@ukmadvokasi.com
- **Instagram**: [@ukmadvokasi](https://instagram.com/ukmadvokasi)
- **LinkedIn**: [UKM Advokasi](https://linkedin.com/company/ukmadvokasi)

---

<div align="center">

**Made with ❤️ by January Ramadhan**
https://januaryramadhan.works

</div>