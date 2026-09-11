# Screen Specification — Masjid App MVP

## PUBLIC PORTAL

### 1. Homepage (/public)
**Purpose**: Warga melihat informasi masjid & ringkasan data.

**Layout**:
- Header (sticky)
- Hero Section: Masjid name, logo, tagline
- Section: Jadwal Jumat Berikutnya
  - Card: Tanggal, khatib, imam, bilal, tema
  - CTA: Lihat Jadwal Selengkapnya
- Section: Transparansi Keuangan (Ringkasan)
  - Stats: Saldo Bulan Ini, Pemasukan, Pengeluaran
  - CTA: Lihat Detail Keuangan
- Section: Pengumuman Aktif
  - Card list (max 3): Judul, excerpt, tanggal
  - CTA: Lihat Semua Pengumuman
- Section: Tentang Masjid
  - Deskripsi, alamat, kontak
- Footer

**Components**:
- HeroSection
- JadwalCard (next Friday)
- FinancialSummary
- PengumumanCard (x3)
- MosqueInfo
- Header, Footer

**Mobile**:
- Stack sections vertically
- Hero: reduced padding
- Cards: full width

---

### 2. Jadwal Jumat List (/public/jadwal)
**Purpose**: Warga melihat daftar jadwal Jumat.

**Layout**:
- Header
- Title: "Jadwal Salat Jumat"
- Filter/Sort (optional MVP): Terdekat, Terlama
- List/Grid: JadwalCard items
  - Tanggal (format: "Jumat, 15 September 2026")
  - Khatib, Imam, Bilal (nama)
  - Tema (jika ada)
  - CTA: Lihat Detail / Bagikan
- Pagination (jika > 10 jadwal)
- Footer

**Components**:
- Header, JadwalCard, Pagination, Footer

**Data**:
- Sort by date ascending
- Show only future jadwal (status: upcoming)
- If no future jadwal, show riwayat (max 3)

---

### 3. Jadwal Jumat Detail (/public/jadwal/[id])
**Purpose**: Warga melihat detail jadwal spesifik.

**Layout**:
- Header
- Back button
- Title: "Detail Jadwal Jumat"
- Card (large):
  - Tanggal (full)
  - Waktu Adzan, Waktu Salat
  - Khatib, Imam, Bilal (dengan deskripsi jika ada)
  - Tema Khutbah
  - Catatan (jika public)
- Share buttons: Native Share, Copy Link, WhatsApp
- QR Code (phase 2)
- Footer

**Components**:
- Header, DetailCard, ShareButtons, Footer

**Mobile**:
- Full width card
- Share buttons: horizontal scroll

---

### 4. Transparansi Keuangan (/public/keuangan)
**Purpose**: Warga melihat transaksi publik.

**Layout**:
- Header
- Title: "Transparansi Keuangan"
- Stats (3 cards): Saldo Bulan Ini, Total Pemasukan, Total Pengeluaran
- Filter (optional MVP): Pemasukan / Pengeluaran / Semua, Bulan
- TransactionList:
  - Columns: Tanggal, Kategori, Jumlah, Sumber (optional)
  - Rows: transactions where publicationStatus = 'public'
  - Format: Pemasukan (green +), Pengeluaran (red -)
- Pagination
- Footer

**Components**:
- Header, StatsCards, FilterBar, TransactionList, Pagination, Footer

**Data**:
- Filter by current month (default)
- Show only public transactions
- Sort by date descending

---

### 5. Pengumuman List (/public/pengumuman)
**Purpose**: Warga melihat pengumuman aktif.

**Layout**:
- Header
- Title: "Pengumuman"
- PengumumanCard list (grid 1-2 columns):
  - Image (jika ada)
  - Judul
  - Excerpt (first 100 chars)
  - Tanggal publikasi
  - CTA: Baca Selengkapnya
- Pagination
- Footer

**Components**:
- Header, PengumumanCard, Pagination, Footer

**Data**:
- Filter: status = 'active', expiresAt >= today
- Sort by publishedAt descending
- Limit 10 per page

---

### 6. Pengumuman Detail (/public/pengumuman/[id])
**Purpose**: Warga membaca pengumuman lengkap.

**Layout**:
- Header
- Back button
- Title: Judul pengumuman
- Meta: Tanggal publikasi, Berlaku hingga (jika ada)
- Image (jika ada)
- Content (full)
- Share buttons
- Related pengumuman (max 3, optional)
- Footer

**Components**:
- Header, DetailContent, ShareButtons, RelatedCards, Footer

---

## ADMIN PANEL

### 7. Admin Login (/admin/login)
**Purpose**: Pengurus login ke sistem.

**Layout**:
- Centered form card (max-width: 400px)
- Logo/Branding
- Form:
  - Email (text input)
  - Password (password input)
  - Remember Me (checkbox)
  - Login button (primary)
- Error message area (jika login gagal)
- Forgot Password link (phase 2)

**Components**:
- Form, Input, Button, Alert

**Validation**:
- Email: required, valid email format
- Password: required, min 6 chars
- Error handling: invalid credentials

**Security**:
- POST /api/auth/login
- JWT token in httpOnly cookie (phase 2) or localStorage
- Redirect ke /admin/dashboard jika sudah login

---

### 8. Admin Dashboard (/admin/dashboard)
**Purpose**: Pengurus melihat ringkasan data masjid.

**Layout**:
- Sidebar (sticky, collapsible mobile)
- Header: Logo, User dropdown, Logout
- Main:
  - Title: "Dashboard"
  - Stats (4 cards):
    - Saldo Masjid (big number, primary color)
    - Pemasukan Bulan Ini
    - Pengeluaran Bulan Ini
    - Transaksi Terakhir (count)
  - Section: Jadwal Jumat Berikutnya
    - Card: tanggal, khatib, imam, bilal
    - CTA: Kelola Jadwal
  - Section: Transaksi Terbaru
    - Table: 5 baris (Tanggal, Kategori, Jumlah, Tipe, Keterangan)
    - CTA: Lihat Semua Transaksi
  - Section: Pengumuman Aktif
    - List: 3 items (Judul, Status, CTA: Edit)

**Components**:
- Sidebar, Header, DashboardStats, JadwalCard, TransactionTable, PengumumanList

**Permission**:
- All roles dapat akses (bendahara, sekretaris, ketua_dkm)

---

### 9. Keuangan - Pemasukan (/admin/keuangan/pemasukan)
**Purpose**: Pengurus mencatat & mengelola pemasukan.

**Layout**:
- Sidebar, Header
- Title: "Pemasukan"
- Button: "+ Tambah Pemasukan"
- Filter: Kategori, Bulan
- TransactionTable:
  - Columns: Tanggal, Kategori, Jumlah, Sumber Dana, Keterangan, Status Publikasi, Actions
  - Actions: Edit, Batalkan (phase 2)
- Pagination (10 per page)

**Modal: Tambah/Edit Pemasukan**:
- Form fields:
  - Jumlah (number, required, > 0)
  - Kategori (dropdown: Infak Jumat, Kotak Amal, Donasi, Lainnya)
  - Tanggal (date picker, required)
  - Sumber Dana (text, optional)
  - Keterangan (textarea, optional)
  - Status Publikasi (toggle: Public / Private, default: Private)
  - Button: Simpan, Batal

**Validation**:
- Jumlah: required, number, > 0
- Kategori: required
- Tanggal: required, tidak boleh masa depan
- Form error display inline

**After Submit**:
- Success notification
- Table refresh
- Dashboard update balance

**Components**:
- Sidebar, Header, Button, TransactionTable, TransactionForm, Modal, Alert, Pagination

**Permission**:
- Bendahara: create, read, update
- Sekretaris: read only
- Ketua DKM: read only

---

### 10. Keuangan - Pengeluaran (/admin/keuangan/pengeluaran)
**Purpose**: Pengurus mencatat & mengelola pengeluaran.

**Layout**: Sama seperti Pemasukan

**Modal: Tambah/Edit Pengeluaran**:
- Form fields:
  - Jumlah (number, required, > 0)
  - Kategori (dropdown: Listrik, Air, Internet, Kebersihan, Pemeliharaan, ATK, Lainnya)
  - Tanggal (date picker, required)
  - Sumber Dana (text, optional)
  - Keterangan (textarea, optional)
  - Status Publikasi (toggle: Public / Private, default: Private)
  - Button: Simpan, Batal

**Validation**:
- Jumlah: required, number, > 0
- Kategori: required
- Tanggal: required, tidak boleh masa depan
- **Saldo Check**: Jika saldo < jumlah pengeluaran, tampilkan warning & disable tombol Simpan
- Form error display inline

**After Submit**:
- Success notification
- Table refresh
- Dashboard update balance

**Components**: Sama seperti Pemasukan

**Permission**: Sama seperti Pemasukan

---

### 11. Keuangan - Saldo (/admin/keuangan/ringkasan)
**Purpose**: Pengurus melihat ringkasan keuangan.

**Layout**:
- Sidebar, Header
- Title: "Ringkasan Keuangan"
- Stats (3 big cards):
  - Saldo Saat Ini (primary color, largest)
  - Pemasukan Bulan Ini (green)
  - Pengeluaran Bulan Ini (red)
- Section: Grafik Pemasukan vs Pengeluaran (phase 2)
- Section: Distribusi Kategori (pie chart, phase 2)

**Components**:
- Sidebar, Header, StatsCards, (Chart phase 2)

**Permission**: All roles read

---

### 12. Keuangan - Laporan (/admin/keuangan/laporan)
**Purpose**: Pengurus membuat laporan keuangan sederhana.

**Layout**:
- Sidebar, Header
- Title: "Laporan Keuangan"
- Filter form (inline):
  - Period: Dropdown (Harian, Mingguan, Bulanan, Tahunan, Custom Range)
  - Kategori: Dropdown (Semua, Pemasukan, Pengeluaran, specific category)
  - Jenis Transaksi: Dropdown (Semua, Masuk, Keluar)
  - Button: Generate Laporan
- Export buttons (disabled MVP): PDF, Excel (phase 2)
- Report Viewer:
  - Title: "Laporan Keuangan [Period]"
  - Meta: Tanggal Generate, Filter Applied
  - Tabel:
    - Saldo Awal
    - Total Pemasukan (detail per kategori)
    - Total Pengeluaran (detail per kategori)
    - Saldo Akhir
  - Printable layout

**Components**:
- Sidebar, Header, FilterForm, ReportViewer, Button

**Permission**: All roles read

---

### 13. Jadwal Jumat (/admin/jadwal)
**Purpose**: Pengurus mengelola jadwal Jumat.

**Layout**:
- Sidebar, Header
- Title: "Jadwal Salat Jumat"
- Tabs: List View (default, phase 2: Calendar View)
- Button: "+ Tambah Jadwal"
- Filter: Bulan, Tahun (optional)
- JadwalTable:
  - Columns: Tanggal, Khatib, Imam, Bilal, Tema, Actions
  - Actions: Edit, Hapus (soft delete/cancel phase 2)
- Pagination (10 per page)

**Modal: Tambah/Edit Jadwal**:
- Form fields:
  - Tanggal (date picker, required, tidak boleh > 1 minggu)
  - Khatib (text, required)
  - Imam (text, required)
  - Bilal (text, required)
  - Tema Khutbah (text, optional)
  - Waktu Adzan (time picker, optional)
  - Waktu Salat (time picker, optional)
  - Catatan (textarea, optional)
  - Button: Simpan, Batal

**Validation**:
- Tanggal: required, format date
- Khatib, Imam, Bilal: required
- Conflict detection: Jika ada jadwal di tanggal yg sama, show warning
- Form error display inline

**After Submit**:
- Success notification
- Table refresh

**Components**:
- Sidebar, Header, Button, JadwalTable, JadwalForm, Modal, Alert, Pagination

**Permission**:
- Sekretaris: create, read, update
- Ketua DKM: create, read, update
- Bendahara: read only

---

### 14. Pengumuman (/admin/pengumuman)
**Purpose**: Pengurus membuat & mengelola pengumuman.

**Layout**:
- Sidebar, Header
- Title: "Pengumuman"
- Button: "+ Tambah Pengumuman"
- Filter: Status (Active, Inactive, Archived)
- PengumumanTable:
  - Columns: Judul, Status, Tanggal Publikasi, Berlaku Hingga, Actions
  - Actions: Edit, Hapus (soft delete phase 2), Preview
- Pagination (10 per page)

**Modal: Tambah/Edit Pengumuman**:
- Form fields:
  - Judul (text, required)
  - Konten (textarea, required, phase 2: rich text)
  - Gambar (file upload, optional, phase 2)
  - Tanggal Publikasi (date picker, required)
  - Tanggal Berakhir (date picker, optional)
  - Status (radio: Active / Inactive, default: Active)
  - Button: Simpan, Batal, Preview

**Validation**:
- Judul: required, max 200 chars
- Konten: required, min 10 chars
- Tanggal Publikasi: required
- Form error display inline

**After Submit**:
- Success notification
- Table refresh

**Components**:
- Sidebar, Header, Button, PengumumanTable, PengumumanForm, Modal, Alert, Pagination

**Permission**:
- Sekretaris: create, read, update
- Ketua DKM: create, read, update
- Pengurus Kegiatan: create, read, update (hanya pengumuman kegiatan, phase 2)

---

## ROUTING MAP

### Public Routes (no auth required)
- `/` → Homepage
- `/jadwal` → Jadwal List
- `/jadwal/[id]` → Jadwal Detail
- `/keuangan` → Keuangan Overview
- `/pengumuman` → Pengumuman List
- `/pengumuman/[id]` → Pengumuman Detail

### Admin Routes (auth required)
- `/admin/login` → Login
- `/admin/dashboard` → Dashboard
- `/admin/keuangan/pemasukan` → Pemasukan
- `/admin/keuangan/pengeluaran` → Pengeluaran
- `/admin/keuangan/ringkasan` → Ringkasan Keuangan
- `/admin/keuangan/laporan` → Laporan Keuangan
- `/admin/jadwal` → Jadwal Management
- `/admin/pengumuman` → Pengumuman Management
- `/admin/pengurus` → Manage Users (phase 2)
- `/admin/pengaturan` → Settings (phase 2)

---

## NOTES

- **Mobile Responsiveness**: All screens stacked, full-width cards, touch-friendly buttons (min 44px)
- **Loading States**: Show skeleton loaders untuk data fetching
- **Error States**: Generic error message untuk failed API calls
- **Empty States**: Show helpful message & CTA jika data kosong
- **Confirmation Dialogs**: Untuk delete/cancel actions
- **Notifications**: Toast untuk success/error feedback
