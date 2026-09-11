# Component Architecture — Masjid App MVP

## 1. Folder Structure

```
src/
├── app/
│   ├── layout.tsx (root layout)
│   ├── page.tsx (public homepage)
│   ├── globals.css
│   ├── (public)/
│   │   ├── layout.tsx (public layout)
│   │   ├── page.tsx (homepage)
│   │   ├── jadwal/
│   │   │   ├── page.tsx (jadwal list)
│   │   │   └── [id]/page.tsx (jadwal detail)
│   │   ├── keuangan/
│   │   │   ├── page.tsx (keuangan overview)
│   │   │   ├── pemasukan/page.tsx
│   │   │   └── pengeluaran/page.tsx
│   │   └── pengumuman/
│   │       ├── page.tsx (pengumuman list)
│   │       └── [id]/page.tsx (pengumuman detail)
│   └── admin/
│       ├── layout.tsx (admin layout)
│       ├── login/page.tsx
│       ├── dashboard/page.tsx
│       ├── keuangan/
│       │   ├── page.tsx (ringkasan)
│       │   ├── pemasukan/page.tsx
│       │   ├── pengeluaran/page.tsx
│       │   └── laporan/page.tsx
│       ├── jadwal/page.tsx
│       └── pengumuman/page.tsx
├── components/
│   ├── layout/
│   │   ├── Header.tsx
│   │   ├── Sidebar.tsx
│   │   ├── Footer.tsx
│   │   └── Navigation.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── Input.tsx
│   │   ├── Card.tsx
│   │   ├── Badge.tsx
│   │   ├── Alert.tsx
│   │   ├── Modal.tsx
│   │   ├── Table.tsx
│   │   ├── Form.tsx
│   │   ├── Dropdown.tsx
│   │   └── Pagination.tsx
│   ├── public/
│   │   ├── HeroSection.tsx
│   │   ├── FinancialSummary.tsx
│   │   ├── JadwalCard.tsx
│   │   ├── PengumumanCard.tsx
│   │   └── TransactionList.tsx
│   └── admin/
│       ├── DashboardStats.tsx
│       ├── TransactionForm.tsx
│       ├── JadwalForm.tsx
│       ├── PengumumanForm.tsx
│       ├── ReportViewer.tsx
│       └── TransactionTable.tsx
├── hooks/
│   ├── useAuth.ts
│   ├── useTransaction.ts
│   ├── useJadwal.ts
│   └── usePengumuman.ts
├── lib/
│   ├── auth.ts (auth logic & JWT handling)
│   ├── constants.ts (kategori, roles, status)
│   ├── utils.ts (helpers)
│   ├── format.ts (number, date formatting)
│   └── validation.ts (form validation)
├── types/
│   ├── index.ts (main types export)
│   ├── transaction.ts
│   ├── jadwal.ts
│   ├── pengumuman.ts
│   ├── user.ts
│   └── auth.ts
├── contexts/
│   ├── AuthContext.tsx
│   └── MosqueContext.tsx
└── data/
    ├── mock.ts (mock data untuk development)
    └── seed.ts (data seed untuk testing)
```

## 2. Base Components (ui/)

### Button
```tsx
interface ButtonProps {
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  children: React.ReactNode;
}
```

### Input
```tsx
interface InputProps {
  label?: string;
  error?: string;
  type?: string;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
}
```

### Card
```tsx
interface CardProps {
  children: React.ReactNode;
  className?: string;
  hover?: boolean;
}
```

### Form
```tsx
interface FormProps {
  onSubmit: (data: any) => void;
  children: React.ReactNode;
  loading?: boolean;
}
```

### Table
```tsx
interface TableProps {
  columns: { key: string; label: string }[];
  data: any[];
  loading?: boolean;
  pagination?: boolean;
}
```

## 3. Layout Components (layout/)

### Header
- Logo + Mosque Name (left)
- Nav Links (center/right) — Public: Jadwal, Keuangan, Pengumuman; Admin: Dashboard, Keuangan, Jadwal, Pengumuman
- User Menu (right, admin only)
- Mobile: Hamburger menu

### Sidebar (Admin)
- Collapsible, sticky
- Icons + Labels
- Active state highlight
- Mobile: Drawer overlay

### Footer
- Mosque info (left)
- Links (center)
- Copyright (right)

### Navigation
- Public & Admin navs isolated
- Role-based visibility

## 4. Public Components (public/)

### HeroSection
- Mosque identity (name, logo, description)
- Call-to-action

### FinancialSummary
- Saldo Bulan Ini (big number)
- Pemasukan vs Pengeluaran (mini cards)
- Grafik dasar (phase 2)

### JadwalCard
- Tanggal, khatib, imam, bilal
- CTA: Lihat Detail
- Compact mobile view

### PengumumanCard
- Judul, excerpt, tanggal
- Image (optional)
- CTA: Baca Selengkapnya

### TransactionList
- Tabel responsif
- Filter by type (masuk/keluar)
- Pagination

## 5. Admin Components (admin/)

### DashboardStats
- 4 stat cards: Saldo, Pemasukan Bulan Ini, Pengeluaran Bulan Ini, Transaksi Terakhir
- Mini grafik (phase 2)

### TransactionForm
- Fields: Jumlah, Kategori, Tanggal, Sumber Dana, Keterangan, Status Publikasi
- Validation: jumlah > 0, kategori required, tanggal required
- Pengeluaran: Validasi saldo cukup sebelum submit

### JadwalForm
- Fields: Tanggal, Khatib, Imam, Bilal, Tema, Waktu Adzan, Waktu Salat, Catatan
- Validasi: Tanggal, Khatib, Imam, Bilal wajib
- Conflict detection: cek jadwal existing

### PengumumanForm
- Fields: Judul, Isi, Tanggal Publikasi, Tanggal Berakhir, Gambar, Status
- Rich text editor (basic, phase 2)

### ReportViewer
- Filter: periode, kategori, jenis transaksi
- Tampil: Saldo Awal, Total Masuk, Total Keluar, Saldo Akhir, Rincian
- Export button (disabled MVP, phase 2)

### TransactionTable
- Columns: Tanggal, Kategori, Jumlah, Sumber Dana, Keterangan, Actions
- Actions: Edit, Batalkan, Lihat Riwayat (phase 2)
- Status badge: Active, Cancelled, Corrected (phase 2)

## 6. Hooks (hooks/)

### useAuth
- getCurrentUser()
- login(email, password)
- logout()
- hasPermission(modul, action)

### useTransaction
- getTransactions(filter)
- createTransaction(data)
- updateTransaction(id, data)
- getBalance()

### useJadwal
- getJadwalList()
- getJadwalDetail(id)
- createJadwal(data)
- updateJadwal(id, data)

### usePengumuman
- getPengumumanList(page, limit)
- getPengumumanDetail(id)
- createPengumuman(data)
- updatePengumuman(id, data)

## 7. Types (types/)

Lihat TYPES.md untuk struktur data detail.

## 8. Contexts (contexts/)

### AuthContext
- currentUser
- isAuthenticated
- userRole
- mosqueId

### MosqueContext
- mosqueName
- mosqueSlug
- mosqueInfo
- balance (computed)

## 9. Constants (lib/constants.ts)

```ts
export const TRANSACTION_CATEGORIES_IN = [
  'infak_jumat',
  'kotak_amal',
  'donasi',
  'lainnya',
];

export const TRANSACTION_CATEGORIES_OUT = [
  'listrik',
  'air',
  'internet',
  'kebersihan',
  'pemeliharaan',
  'atk',
  'lainnya',
];

export const ROLES = ['admin', 'bendahara', 'sekretaris', 'ketua_dkm', 'pengurus_kegiatan'];

export const PERMISSIONS = {
  bendahara: {
    keuangan_pemasukan: ['create', 'read', 'update'],
    keuangan_pengeluaran: ['create', 'read', 'update'],
    jadwal: ['read'],
  },
  // ... other roles
};
```

## 10. Utils (lib/utils.ts)

- formatCurrency(value)
- formatDate(date)
- parseDate(string)
- classNames(...classes)
- cn() — alias untuk clsx

## 11. Validation (lib/validation.ts)

- validateTransaction(data)
- validateJadwal(data)
- validatePengumuman(data)
- validateLogin(data)

## 12. Mock Data (data/mock.ts)

Export mock transactions, jadwal, pengumuman untuk development.
Lihat DATA_MOCK.md untuk struktur.
