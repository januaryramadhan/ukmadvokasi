Tentu. Dengan mempertimbangkan semua informasi baru dan referensi yang Anda berikan, saya akan menyusun versi final dari Dokumen Kebutuhan Fungsional (FRD) yang komprehensif.

Dokumen ini mengintegrasikan identitas, konten, dan inspirasi desain dari referensi yang Anda berikan ke dalam struktur teknis yang telah kita diskusikan.

---

### **Dokumen Kebutuhan Fungsional (Functional Requirements Document - FRD)**

| | |
| :--- | :--- |
| **Nama Proyek** | Website Resmi UNIT KEGIATAN MAHASISWA ADVOKASI (ADVO) |
| **Universitas** | Universitas Terbuka Bogor |
| **Nama Kabinet** | Prometheus Aletheia |
| **Tanggal Dokumen**| 12 Agustus 2025 |

---

### **1. Pendahuluan**

#### **1.1. Latar Belakang Proyek**
UNIT KEGIATAN MAHASISWA ADVOKASI (ADVO) adalah organisasi mahasiswa internal di bawah naungan Organisasi Mahasiswa UT Bogor. Sebagai **"Wadah Bagi Mahasiswa Mempelajari Hukum dan Advokasi"**, ADVO memerlukan sebuah identitas digital yang kuat melalui website resmi. Website ini akan menjadi platform utama untuk Kabinet Prometheus Aletheia dalam menyebarkan informasi, menampilkan citra profesional, mempublikasikan kajian, dan mengelola rekrutmen anggota baru secara efektif.

#### **1.2. Tujuan Website**
*   **Identitas & Branding:** Membangun citra ADVO sebagai organisasi mahasiswa yang berintelektual dan berintegritas, dengan slogan **"Makhluk Pilihan Tuhan"**.
*   **Pusat Informasi:** Menjadi sumber informasi yang terpusat, akurat, dan mudah diakses mengenai profil, sejarah, visi-misi, dan struktur organisasi.
*   **Media Publikasi:** Menyediakan platform untuk publikasi artikel dan kajian hukum, sesuai dengan misi menanamkan budaya diskusi dan membaca.
*   **Gerbang Rekrutmen:** Memfasilitasi proses pendaftaran anggota baru melalui sistem online yang terstruktur.
*   **Portofolio Digital:** Mendokumentasikan seluruh program kerja dan kegiatan sebagai arsip digital dan bukti eksistensi organisasi.

#### **1.3. Ruang Lingkup (Scope)**
Pengembangan website ini mencakup fungsionalitas publik yang dapat diakses oleh semua pengunjung. Pengelolaan konten dilakukan oleh admin melalui CMS. Fungsionalitas login dan area khusus anggota tidak termasuk dalam ruang lingkup proyek ini.

### **2. Deskripsi Umum**

#### **2.1. Referensi & Inspirasi Desain**
*   **Referensi Utama:** [https://bem.hukum.ub.ac.id/](https://bem.hukum.ub.ac.id/)
*   **Palet Warna:** Desain akan didominasi oleh warna identitas UKM: **Putih**, **Hitam**, dan aksen **Merah Tua**.
*   **Tampilan & Nuansa:** Profesional, bersih, modern, dan informatif, sejalan dengan citra sebuah organisasi mahasiswa hukum.

#### **2.2. Karakteristik Pengguna**
*   **Administrator (Pengurus ADVO):** Mengelola seluruh konten website (artikel, acara, galeri) dan data pendaftar baru melalui dashboard WordPress.
*   **Calon Anggota (Mahasiswa UT Bogor):** Mencari informasi lengkap tentang ADVO, melihat kegiatan, dan melakukan pendaftaran online.
*   **Pengunjung Umum (Publik):** Pihak internal/eksternal kampus yang ingin mengetahui profil, kegiatan, dan publikasi dari UKM ADVO.

#### **2.3. Arsitektur Sistem**
*   **Backend (Headless CMS):** **WordPress** untuk manajemen konten.
*   **Frontend (UI):** **Next.js 15** untuk membangun antarmuka yang cepat dan modern.
*   **Styling & Komponen:** **Tailwind CSS** dan **Shadcn/ui** untuk desain yang responsif dan konsisten.

### **3. Kebutuhan Fungsional (Functional Requirements)**

| ID | Fitur | Deskripsi Fungsionalitas | Prioritas |
| :-- | :--- | :--- | :--- |
| **F-01** | **Halaman Beranda** | - Menampilkan *hero section* yang menonjol dengan Logo UKM, nama Kabinet **Prometheus Aletheia**, dan slogan utama **"Makhluk Pilihan Tuhan"**. - Menyajikan deskripsi singkat: **"Wadah Bagi Mahasiswa Mempelajari Hukum dan Advokasi"**. - Menampilkan *section* "Publikasi Terbaru" (3 artikel terakhir). - Menampilkan *section* "Agenda Terdekat" (3 program kerja mendatang). - Tombol *Call-to-Action* (CTA) besar dan jelas menuju halaman pendaftaran. | Tinggi |
| **F-02** | **Halaman Profil** | Terdiri dari beberapa sub-halaman: - **Sejarah:** Halaman statis yang memuat teks sejarah pembentukan UKM pada **Minggu, 24 Oktober 2021**. - **Visi & Misi:** Halaman statis yang secara jelas menampilkan **Visi** dan daftar poin **Misi** sesuai dengan naskah yang diberikan. - **Struktur Organisasi:** Menampilkan bagan hierarki **Kabinet Prometheus Aletheia**, lengkap dengan nama, foto, dan jabatan. - **AD/ART:** Halaman yang menyediakan akses untuk membaca atau mengunduh dokumen AD/ART UKM. | Tinggi |
| **F-03** | **Halaman Program Kerja** | - Berfungsi sebagai **Kalender Program Kerja/Proker**. - Menampilkan daftar semua proker/acara, baik yang akan datang maupun yang telah berlalu. - Setiap proker memiliki halaman detailnya sendiri yang berisi: judul, deskripsi, tanggal, waktu, lokasi, dan galeri dokumentasi (jika sudah selesai). | Tinggi |
| **F-04** | **Halaman Publikasi** | - Berfungsi sebagai pusat artikel dan kajian hukum. - Menampilkan daftar semua publikasi dengan judul, gambar, ringkasan, penulis, dan tanggal. - Halaman detail artikel menampilkan konten secara penuh. - Terdapat fitur pencarian berdasarkan judul/kata kunci dan filter berdasarkan kategori. | Tinggi |
| **F-05** | **Halaman Galeri** | - Berfungsi sebagai halaman **Dokumentasi Kegiatan**. - Menampilkan album-album foto dan/atau video dari berbagai kegiatan. - Setiap album dapat diklik untuk melihat koleksi media di dalamnya. | Sedang |
| **F-06** | **Halaman Pendaftaran** | - Menampilkan formulir pendaftaran online dengan kolom-kolom yang relevan. - Data yang dikirim akan masuk ke database WordPress dan notifikasi email terkirim ke **advokasiutbogor@gmail.com**. - Pengguna melihat pesan konfirmasi "Pendaftaran Berhasil Diterima" setelah submit. | Tinggi |
| **F-07** | **Halaman Kontak** | - Menampilkan informasi kontak secara jelas: - **Email:** advokasiutbogor@gmail.com - **Telepon:** 083804720979 - Tautan ikon ke media sosial: - **Instagram:** @ukmadvokasiut - **Threads:** @ukmadvokasiut - **X (Twitter):** @UKMADVOKASI_ - **WhatsApp Channel:** Tautan langsung ke channel. | Tinggi |
| **F-08** | **Footer (Kaki Halaman)**| - Terdapat di setiap halaman. - Berisi logo UKM, ringkasan kontak, dan tautan navigasi cepat ke halaman-halaman penting. | Tinggi |
| **F-09** | **Manajemen Admin** | - Administrator dapat melakukan operasi CRUD (Create, Read, Update, Delete) pada semua konten melalui dasbor WordPress. - Administrator dapat melihat dan mengelola data calon anggota yang mendaftar. | Tinggi |

### **4. Kebutuhan Non-Fungsional (Non-Functional Requirements)**

| ID | Atribut | Deskripsi |
| :-- | :--- | :--- |
| **NF-01**| **Kinerja** | - Waktu muat halaman (Largest Contentful Paint) harus di bawah 2.5 detik. - Aset (gambar, script) dioptimalkan untuk mempercepat waktu muat. |
| **NF-02**| **Keamanan** | - Seluruh website wajib diakses melalui koneksi aman (HTTPS). - Menerapkan perlindungan dasar terhadap injeksi data pada formulir. |
| **NF-03**| **Usabilitas & Desain** | - Desain antarmuka harus *fully responsive* dan optimal di semua perangkat. - Navigasi harus logis dan mudah digunakan. - Desain visual harus konsisten dengan identitas brand, menggunakan palet warna **Putih, Hitam, dan Merah Tua**. |
| **NF-04**| **Skalabilitas** | - Arsitektur harus memungkinkan penambahan fitur baru di masa depan tanpa merombak total sistem yang sudah ada. |
| **NF-05**| **Pemeliharaan** | - Konten harus dapat diperbarui dengan mudah oleh pengurus UKM melalui WordPress. - Kode sumber frontend harus bersih, terstruktur, dan didokumentasikan. |

---
Dokumen ini menyediakan landasan yang solid dan detail untuk pengembangan website UKM ADVOKASI.

**RAHAYU RAHAYU RAHAYU!**