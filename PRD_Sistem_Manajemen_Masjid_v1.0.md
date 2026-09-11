PRODUCT REQUIREMENTS DOCUMENT (PRD)
Sistem Manajemen Masjid dan Transparansi Keuangan
Version 1.0 — Initial Product Specification

## 1. Ringkasan Produk
Aplikasi ini merupakan platform digital untuk membantu masjid dalam mengelola administrasi, keuangan, jadwal Salat Jumat, kegiatan, dan informasi masjid.
Aplikasi memiliki dua sisi utama:
- Public Portal — dapat diakses warga/jamaah tanpa harus login.
- Admin Panel — digunakan pengurus/admin masjid untuk mengelola data.
Fokus utama MVP:
- Transparansi keuangan masjid (kategori terbatas).
- Pencatatan pemasukan.
- Pencatatan pengeluaran.
- Monitoring saldo.
- Jadwal Salat Jumat.
- Data khatib, imam, dan bilal.
- Pengumuman.

Catatan: Modul Kegiatan Masjid masuk Phase 2. Kategori transaksi disederhanakan untuk MVP. Lihat bagian 24, 25, 26 untuk scope detail.

Prinsip utama produk: Pengurus mengelola, warga mendapatkan informasi dan transparansi.

## 2. Tujuan Produk

### 2.1 Tujuan Utama
Membangun aplikasi yang memungkinkan pengurus masjid mengelola informasi dan keuangan secara mudah, terstruktur, transparan, dan dapat dipertanggungjawabkan.

### 2.2 Tujuan untuk Pengurus
- Mencatat pemasukan.
- Mencatat pengeluaran.
- Melihat saldo.
- Melihat histori transaksi.
- Membuat laporan keuangan.
- Mengelola jadwal Salat Jumat.
- Mengelola khatib, imam, dan bilal.
- Membuat pengumuman.
- Mengelola kegiatan masjid.

### 2.3 Tujuan untuk Warga
- Melihat informasi masjid.
- Melihat jadwal Salat Jumat.
- Mengetahui khatib, imam, dan bilal.
- Melihat transparansi keuangan.
- Melihat pemasukan dan pengeluaran yang dipublikasikan.
- Melihat pengumuman.
- Melihat kegiatan masjid.
Warga tidak perlu login untuk mengakses informasi publik.

## 3. Target Pengguna

### 3.1 Warga/Jamaah
- Menggunakan smartphone.
- Tidak selalu memahami teknologi.
- Membutuhkan informasi secara cepat.
- Tidak ingin melalui proses login untuk informasi umum.
Kebutuhan utama: “Saya ingin tahu apa yang terjadi di masjid dan bagaimana kondisi keuangannya.”

### 3.2 Pengurus Masjid
- Bendahara
- Sekretaris
- Ketua DKM
- Pengurus kegiatan
Kebutuhan: mencatat transaksi, mengelola jadwal, membuat laporan, dan mengelola informasi masjid.

### 3.3 Administrator
- Mengelola user.
- Mengatur role.
- Mengatur profil masjid.
- Mengatur konfigurasi aplikasi.

## 4. Role dan Permission

### 4.1 Public / Warga
Tidak memerlukan autentikasi.
- Dapat melihat Homepage, Jadwal Jumat, Transparansi Keuangan, Pengumuman, dan Kegiatan.
- Tidak dapat menambah, mengubah, atau menghapus transaksi.
- Tidak dapat mengubah jadwal.
- Tidak dapat mengakses data internal.

### 4.2 Pengurus
Memerlukan login. Hak akses diberikan sesuai tanggung jawab/role.

#### Matrix Permission MVP
| Modul | Bendahara | Sekretaris | Ketua DKM | Pengurus Kegiatan |
| --- | --- | --- | --- | --- |
| Dashboard | Read | Read | Read | Read |
| Keuangan - Pemasukan | Create, Read, Update | Read | Read | - |
| Keuangan - Pengeluaran | Create, Read, Update | Read | Read | - |
| Keuangan - Saldo | Read | Read | Read | Read |
| Keuangan - Laporan | Read | Read | Read | - |
| Jadwal Jumat | Read | Create, Read, Update | Create, Read, Update | - |
| Pengumuman | Read | Create, Read, Update | Create, Read, Update | Create, Read, Update |

Contoh hak akses Bendahara: Keuangan — Create/Read/Update; Jadwal — Read; Laporan — Read.

### 4.3 Admin
- CREATE, READ, UPDATE, DELETE.
- Manage Users.
- Manage Roles.
- Manage Mosque.
- Manage Settings.
- Mengatur seluruh modul tanpa batasan role operasional.

## 5. Information Architecture

### Public Portal
/
├── Beranda
├── Jadwal Jumat
│   ├── Jadwal Terdekat
│   └── Riwayat Jadwal
├── Keuangan
│   ├── Ringkasan
│   ├── Pemasukan
│   └── Pengeluaran
├── Kegiatan
├── Pengumuman
└── Tentang Masjid

### Admin Panel
/admin
├── Dashboard
├── Keuangan
│   ├── Ringkasan
│   ├── Pemasukan
│   ├── Pengeluaran
│   └── Laporan
├── Jadwal Jumat
├── Kegiatan
├── Pengumuman
├── Pengurus
└── Pengaturan

## 6. Public Portal

### 6.1 Homepage
Homepage merupakan halaman pertama yang dilihat warga.
Prioritas informasi:
1. Identitas masjid.
1. Jadwal Jumat berikutnya.
1. Informasi khatib/imam/bilal.
1. Transparansi keuangan.
1. Pengumuman.
1. Kegiatan masjid.
Komponen: Header, Hero/Mosque Information, Next Friday Schedule, Financial Transparency, Announcements, Upcoming Activities, Footer.

## 7. Jadwal Salat Jumat

### 7.1 Fitur
- Tanggal.
- Khatib.
- Imam.
- Bilal.
- Tema khutbah.
- Waktu adzan.
- Waktu salat.
- Catatan.

### 7.2 Public View
Warga dapat melihat tanggal, waktu, khatib, imam, bilal, dan tema khutbah.

### 7.3 Admin
Admin dapat melihat daftar jadwal dalam List View atau Calendar View, serta menambah dan mengubah jadwal.

### 7.4 Validasi
- Tanggal wajib.
- Khatib wajib.
- Imam wajib.
- Bilal wajib.
- Satu jadwal Jumat tidak boleh memiliki konflik jadwal.

## 8. Modul Keuangan
Modul keuangan merupakan salah satu fitur inti.
Pemasukan
+
Pengeluaran
=
Saldo
Sistem tetap harus menyimpan transaksi sebagai histori yang dapat diaudit.

### 8.1 Dashboard Keuangan
- Saldo saat ini.
- Pemasukan bulan ini.
- Pengeluaran bulan ini.
- Grafik pemasukan.
- Grafik pengeluaran.
- Transaksi terbaru.
- Distribusi berdasarkan kategori.

### 8.2 Pemasukan (Kategori MVP)
- Infak Jumat
- Kotak Amal
- Donasi
- Lainnya

Kategori lengkap untuk Phase 2: Zakat, Wakaf, Infak Ramadan, Infak Idul Fitri, Infak Idul Adha, Sumbangan Pembangunan, Sumbangan Kegiatan.

Field: Jumlah, Kategori, Tanggal, Sumber Dana, Keterangan, Status Publikasi.
MVP: Bukti Transaksi tidak termasuk (masuk Phase 2 sebagai Upload Bukti Transaksi).


### 8.3 Pengeluaran (Kategori MVP)
- Listrik
- Air
- Internet
- Kebersihan
- Pemeliharaan
- ATK
- Lainnya

Kategori lengkap untuk Phase 2: Perbaikan Bangunan, Sound System, Karpet, Honor Imam, Honor Marbot, Kegiatan Keagamaan, Ramadan, Idul Fitri, Idul Adha, Santunan, Pendidikan, Sosial.

Field: Jumlah, Kategori, Tanggal, Sumber Dana, Keterangan, Status Publikasi.
MVP: Bukti Transaksi tidak termasuk (masuk Phase 2 sebagai Upload Bukti Transaksi).


## 9. Transparansi Keuangan
Public Portal hanya menampilkan transaksi yang ditandai public = true.
Data sensitif yang harus private:
- Nomor rekening.
- Nama lengkap donor jika tidak disetujui.
- Nomor telepon.
- Bukti transfer asli.
- Catatan internal.
- Data user.
- Data audit internal.
Public hanya melihat informasi yang memang ditujukan untuk transparansi.

## 10. Laporan Keuangan
Filter: periode, kategori, jenis transaksi, dan sumber dana.
- Harian
- Mingguan
- Bulanan
- Tahunan
- Custom Range
Laporan menampilkan Saldo Awal, Total Pemasukan, Total Pengeluaran, Saldo Akhir, Rincian Pemasukan, dan Rincian Pengeluaran.
Untuk MVP: laporan sederhana ditampilkan di layar (tanpa export file).
Output PDF dan Excel masuk Phase 2.

## 11. Pengumuman
Pengurus dapat membuat pengumuman dengan field: Judul, Isi, Tanggal Publikasi, Tanggal Berakhir, Gambar, dan Status.
Pengumuman dapat ditampilkan di Public Portal.

## 12. Kegiatan Masjid
Modul ini masuk Phase 2 (bukan MVP), tetap didefinisikan di PRD untuk kesinambungan desain.
- Kajian
- Pengajian
- Santunan
- Ramadan
- Idul Fitri
- Idul Adha
- Kegiatan anak
- Kegiatan sosial
- Kerja bakti
Field: Nama kegiatan, Tanggal, Waktu, Lokasi, Deskripsi, Pemateri, Gambar, Status.

## 13. Admin Dashboard
Setelah login, pengurus diarahkan ke Dashboard.
- Saldo Masjid.
- Pemasukan.
- Pengeluaran.
- Grafik Keuangan.
- Jadwal Jumat Berikutnya.
- Transaksi Terbaru.
- Pengumuman Aktif.

## 14. Admin Navigation
🕌 MASJID APP

📊 Dashboard

💰 Keuangan
   ├── Ringkasan
   ├── Pemasukan
   ├── Pengeluaran
   └── Laporan

🕌 Jadwal Jumat

📢 Pengumuman

📅 Kegiatan

👥 Pengurus

⚙️ Pengaturan

## 15. User Flow — Warga
OPEN WEBSITE
     ↓
HOMEPAGE
     ↓
┌──────────┬────────────┬───────────┐
│          │            │           │
▼          ▼            ▼           ▼
JUMAT   KEUANGAN    PENGUMUMAN   KEGIATAN
│          │            │           │
▼          ▼            ▼           ▼
DETAIL   DETAIL       DETAIL      DETAIL
Tidak memerlukan login.

## 16. User Flow — Pengurus
LOGIN
 ↓
DASHBOARD
 ↓
┌───────────────┬──────────────┐
│               │              │
▼               ▼              ▼
KEUANGAN      JADWAL         INFO
│               │              │
├── Pemasukan   ├── List       ├── Pengumuman
├── Pengeluaran ├── Calendar   └── Kegiatan
└── Laporan     └── Form

## 17. Transaction Flow

### 17.1 Pemasukan
Klik + Pemasukan
       ↓
Isi Form
       ↓
Validasi
       ↓
Konfirmasi
       ↓
Simpan
       ↓
Update Saldo
       ↓
Refresh Dashboard

### 17.2 Pengeluaran
Klik + Pengeluaran
       ↓
Isi Form
       ↓
Validasi
       ↓
Pastikan saldo mencukupi
       ↓
Konfirmasi
       ↓
Simpan
       ↓
Update Saldo

## 18. UX Rule — Financial Transaction
Jangan langsung menghapus transaksi secara permanen.
Gunakan konsep status Active, Cancelled, dan Corrected. Perubahan transaksi harus dapat dilacak.
UI dapat menyediakan Edit, Batalkan, dan Lihat Riwayat.

## 19. Share Feature
Informasi publik harus dapat dibagikan.
- Native Share
- Copy Link
- WhatsApp
Informasi publik memiliki URL yang dapat diakses tanpa login.

## 20. QR Code
Setiap masjid memiliki public URL berbasis slug, misalnya /masjid/al-ikhlas.
URL dapat dibuat menjadi QR Code untuk ditempel di papan pengumuman, pintu masjid, kotak amal, banner, dan poster.

## 21. Non-Functional Requirements

### Performance
- Halaman publik cepat dibuka.
- Mobile-first.
- Optimasi gambar.
- Lazy loading.
- Caching data publik.

### Security
- Authentication.
- Authorization.
- Role-Based Access Control.
- Server-side validation.
- Input sanitization.
- Audit log.
- Secure file upload.
- Protected admin routes.

### Accessibility
- Kontras teks cukup.
- Ukuran tombol nyaman untuk mobile.
- Keyboard navigation untuk desktop.
- Label form jelas.
- Error message mudah dipahami.

## 22. SEO Public Portal
- Homepage Masjid.
- Jadwal Jumat.
- Pengumuman.
- Kegiatan.
- Transparansi Keuangan.
Setiap masjid memiliki slug, title, description, dan OG image.

## 23. Prinsip UX Utama
Simple — Pengurus tidak boleh membutuhkan pelatihan teknis yang panjang.
Transparent — Informasi keuangan publik mudah ditemukan.
Mobile First — Sebagian besar aktivitas harus nyaman dilakukan melalui smartphone.
Fast — Pencatatan transaksi harus dapat dilakukan dalam beberapa langkah.
Trustworthy — Data keuangan harus dapat ditelusuri dan memiliki histori.
Public First — Informasi yang memang ditujukan untuk jamaah tidak boleh terkunci di balik login.
Consistent — Semua halaman menggunakan design system dan reusable components yang sama.

## 24. MVP Scope

### Public
- Homepage.
- Jadwal Jumat.
- Detail Jadwal Jumat.
- Transparansi Keuangan.
- Pengumuman.

### Admin
- Login.
- Dashboard.
- Pemasukan.
- Pengeluaran.
- Saldo.
- Laporan sederhana (view-only, tanpa export).
- Jadwal Jumat.
- Pengumuman.

Catatan batas MVP:
- Modul Kegiatan Masjid belum termasuk MVP.
- Export PDF/Excel belum termasuk MVP.

## 25. Phase 2
- Kegiatan Masjid.
- Calendar View.
- PDF Report.
- Excel Export.
- QR Code.
- Share WhatsApp.
- Audit Trail.
- Upload Bukti Transaksi.
- Role & Permission lebih detail.

## 26. Phase 3
- Multi-Masjid.
- Donasi Online.
- Integrasi Payment Gateway.
- Notifikasi WhatsApp.
- Push Notification.
- Manajemen Jamaah.
- Zakat.
- Wakaf.
- Inventaris Masjid.
- Manajemen aset.
- Mobile App.
Fitur Phase 3 jangan dimasukkan ke MVP kecuali memang diperlukan.

## 27. Acceptance Criteria MVP

### Public
- Warga dapat membuka homepage tanpa login.
- Warga dapat melihat jadwal Jumat.
- Warga dapat melihat khatib.
- Warga dapat melihat imam.
- Warga dapat melihat bilal.
- Warga dapat melihat transparansi keuangan.
- Warga dapat melihat pengumuman.

### Admin
- Pengurus dapat login.
- Pengurus dapat melihat dashboard.
- Pengurus dapat menambahkan pemasukan.
- Pengurus dapat menambahkan pengeluaran.
- Saldo diperbarui berdasarkan transaksi.
- Pengurus dapat melihat histori transaksi.
- Pengurus dapat membuat jadwal Jumat.
- Pengurus dapat mengubah jadwal.
- Pengurus dapat membuat pengumuman.

### Security
- Public user tidak dapat mengakses admin.
- Public user tidak dapat mengubah data.
- Permission diperiksa di backend.
- Data private tidak muncul di public API.

## 28. Prioritas Pengembangan UI
PRD
 ↓
Design System
 ↓
Component Architecture
 ↓
Screen Specification
 ↓
Routing
 ↓
Mock Data
 ↓
Coding UI

## 29. Final Product Structure
MASJID APP
                      │
          ┌───────────┴───────────┐
          │                       │
          ▼                       ▼
   PUBLIC PORTAL              ADMIN PANEL
          │                       │
     ┌────┼────┐            ┌─────┼─────┐
     │    │    │            │     │     │
     ▼    ▼    ▼            ▼     ▼     ▼
   Jumat Keuangan Info    Dashboard Finance Jumat
     │      │      │         │      │      │
     └──────┴──────┘         └──────┴──────┘
              │                       │
              └───────────┬───────────┘
                          ▼
                       DATABASE
Core principle: Masjid sebagai pusat informasi, transparansi, dan administrasi digital yang mudah digunakan oleh pengurus serta mudah diakses oleh warga.
PRD v1.0 — Siap digunakan sebagai source of truth untuk tahap UI/UX.