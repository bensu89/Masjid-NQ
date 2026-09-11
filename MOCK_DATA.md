# Mock Data — Masjid App MVP

## 1. Mosque Data

```ts
export const mockMosque = {
  id: "mosque-001",
  name: "Masjid Al-Ikhlas",
  slug: "al-ikhlas",
  address: "Jl. Raya Masjid No. 123, Jakarta Selatan 12345",
  phone: "+62 21 1234 5678",
  email: "info@alihlas.org",
  description: "Masjid Al-Ikhlas adalah masjid yang berdiri sejak tahun 1990 dan melayani warga sekitar untuk beribadah dan kegiatan keagamaan.",
  logo: "/images/mosque-logo.png",
  ogImage: "/images/mosque-og.jpg",
  createdAt: new Date("2024-01-01"),
  updatedAt: new Date("2026-09-01"),
};
```

## 2. Users Data

```ts
export const mockUsers = [
  {
    id: "user-001",
    email: "admin@alihlas.org",
    name: "Ahmad Sudrajat",
    role: "admin",
    mosqueId: "mosque-001",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2026-09-01"),
  },
  {
    id: "user-002",
    email: "bendahara@alihlas.org",
    name: "Siti Nurhaliza",
    role: "bendahara",
    mosqueId: "mosque-001",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2026-09-01"),
  },
  {
    id: "user-003",
    email: "sekretaris@alihlas.org",
    name: "Budi Santoso",
    role: "sekretaris",
    mosqueId: "mosque-001",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2026-09-01"),
  },
  {
    id: "user-004",
    email: "ketua@alihlas.org",
    name: "H. Abdullah Rahman",
    role: "ketua_dkm",
    mosqueId: "mosque-001",
    createdAt: new Date("2024-01-01"),
    updatedAt: new Date("2026-09-01"),
  },
];
```

## 3. Transactions Data

```ts
export const mockTransactions = [
  {
    id: "txn-001",
    mosqueId: "mosque-001",
    type: "income",
    amount: 5000000,
    category: "infak_jumat",
    date: new Date("2026-09-05"),
    description: "Infak Jumat minggu pertama September",
    source: "Jamaah",
    notes: "",
    publicationStatus: "public",
    status: "active",
    createdBy: "user-002",
    createdAt: new Date("2026-09-05"),
    updatedAt: new Date("2026-09-05"),
  },
  {
    id: "txn-002",
    mosqueId: "mosque-001",
    type: "income",
    amount: 2500000,
    category: "kotak_amal",
    date: new Date("2026-09-01"),
    description: "Kotak Amal Agustus 2026",
    source: "Kotak Amal",
    notes: "",
    publicationStatus: "public",
    status: "active",
    createdBy: "user-002",
    createdAt: new Date("2026-09-01"),
    updatedAt: new Date("2026-09-01"),
  },
  {
    id: "txn-003",
    mosqueId: "mosque-001",
    type: "income",
    amount: 10000000,
    category: "donasi",
    date: new Date("2026-08-28"),
    description: "Donasi dari Bapak Haji Abdullah",
    source: "Donatur",
    notes: "Untuk renovasi masjid",
    publicationStatus: "private",
    status: "active",
    createdBy: "user-002",
    createdAt: new Date("2026-08-28"),
    updatedAt: new Date("2026-08-28"),
  },
  {
    id: "txn-004",
    mosqueId: "mosque-001",
    type: "expense",
    amount: 1200000,
    category: "listrik",
    date: new Date("2026-09-10"),
    description: "Bayar listrik bulan Agustus 2026",
    source: "Kas Masjid",
    notes: "",
    publicationStatus: "public",
    status: "active",
    createdBy: "user-002",
    createdAt: new Date("2026-09-10"),
    updatedAt: new Date("2026-09-10"),
  },
  {
    id: "txn-005",
    mosqueId: "mosque-001",
    type: "expense",
    amount: 500000,
    category: "air",
    date: new Date("2026-09-08"),
    description: "Bayar air bulan Agustus 2026",
    source: "Kas Masjid",
    notes: "",
    publicationStatus: "public",
    status: "active",
    createdBy: "user-002",
    createdAt: new Date("2026-09-08"),
    updatedAt: new Date("2026-09-08"),
  },
  {
    id: "txn-006",
    mosqueId: "mosque-001",
    type: "expense",
    amount: 300000,
    category: "internet",
    date: new Date("2026-09-07"),
    description: "Bayar internet bulan September 2026",
    source: "Kas Masjid",
    notes: "",
    publicationStatus: "public",
    status: "active",
    createdBy: "user-002",
    createdAt: new Date("2026-09-07"),
    updatedAt: new Date("2026-09-07"),
  },
  {
    id: "txn-007",
    mosqueId: "mosque-001",
    type: "expense",
    amount: 750000,
    category: "kebersihan",
    date: new Date("2026-09-03"),
    description: "Pembersihan dan perawatan rutin masjid",
    source: "Kas Masjid",
    notes: "",
    publicationStatus: "public",
    status: "active",
    createdBy: "user-002",
    createdAt: new Date("2026-09-03"),
    updatedAt: new Date("2026-09-03"),
  },
  {
    id: "txn-008",
    mosqueId: "mosque-001",
    type: "income",
    amount: 4200000,
    category: "infak_jumat",
    date: new Date("2026-08-29"),
    description: "Infak Jumat minggu terakhir Agustus",
    source: "Jamaah",
    notes: "",
    publicationStatus: "public",
    status: "active",
    createdBy: "user-002",
    createdAt: new Date("2026-08-29"),
    updatedAt: new Date("2026-08-29"),
  },
  {
    id: "txn-009",
    mosqueId: "mosque-001",
    type: "expense",
    amount: 450000,
    category: "atk",
    date: new Date("2026-08-25"),
    description: "Pembelian ATK untuk administrasi masjid",
    source: "Kas Masjid",
    notes: "",
    publicationStatus: "public",
    status: "active",
    createdBy: "user-002",
    createdAt: new Date("2026-08-25"),
    updatedAt: new Date("2026-08-25"),
  },
  {
    id: "txn-010",
    mosqueId: "mosque-001",
    type: "income",
    amount: 1500000,
    category: "donasi",
    date: new Date("2026-08-20"),
    description: "Donasi anonim untuk operasional masjid",
    source: "Donatur",
    notes: "",
    publicationStatus: "public",
    status: "active",
    createdBy: "user-002",
    createdAt: new Date("2026-08-20"),
    updatedAt: new Date("2026-08-20"),
  },
];
```

## 4. Jadwal Jumat Data

```ts
export const mockJadwal = [
  {
    id: "jadwal-001",
    mosqueId: "mosque-001",
    date: new Date("2026-09-12"),
    khatib: "Ustadz Muhammad Hidayat, S.Ag",
    imam: "Ustadz Ahmad Fauzi, Lc",
    bilal: "Bapak Samsul Hadi",
    theme: "Keutamaan Bersedekah dalam Islam",
    adhanTime: "11:45",
    prayerTime: "12:00",
    notes: "",
    createdBy: "user-003",
    createdAt: new Date("2026-09-01"),
    updatedAt: new Date("2026-09-01"),
  },
  {
    id: "jadwal-002",
    mosqueId: "mosque-001",
    date: new Date("2026-09-19"),
    khatib: "Ustadz Abdullah Rahman, M.Pd.I",
    imam: "Ustadz Yusuf Mansur",
    bilal: "Bapak Joko Prasetyo",
    theme: "Menjaga Silaturahmi di Era Digital",
    adhanTime: "11:45",
    prayerTime: "12:00",
    notes: "",
    createdBy: "user-003",
    createdAt: new Date("2026-09-01"),
    updatedAt: new Date("2026-09-01"),
  },
  {
    id: "jadwal-003",
    mosqueId: "mosque-001",
    date: new Date("2026-09-26"),
    khatib: "Ustadz Bambang Setiawan, S.Pd.I",
    imam: "Ustadz Ahmad Fauzi, Lc",
    bilal: "Bapak Samsul Hadi",
    theme: "Akhlak Mulia dalam Kehidupan Sehari-hari",
    adhanTime: "11:45",
    prayerTime: "12:00",
    notes: "",
    createdBy: "user-003",
    createdAt: new Date("2026-09-01"),
    updatedAt: new Date("2026-09-01"),
  },
  {
    id: "jadwal-004",
    mosqueId: "mosque-001",
    date: new Date("2026-09-05"),
    khatib: "Ustadz Lukman Hakim, Lc",
    imam: "Ustadz Yusuf Mansur",
    bilal: "Bapak Joko Prasetyo",
    theme: "Pentingnya Menuntut Ilmu",
    adhanTime: "11:45",
    prayerTime: "12:00",
    notes: "",
    createdBy: "user-003",
    createdAt: new Date("2026-08-25"),
    updatedAt: new Date("2026-08-25"),
  },
];
```

## 5. Pengumuman Data

```ts
export const mockPengumuman = [
  {
    id: "pengumuman-001",
    mosqueId: "mosque-001",
    title: "Pengajian Rutin Malam Jumat",
    content: "Bapak-bapak dan Ibu-ibu jamaah yang dirahmati Allah. Kami mengundang seluruh jamaah untuk menghadiri pengajian rutin yang diadakan setiap malam Jumat setelah Isya. Pengajian akan diisi oleh Ustadz Muhammad Hidayat dengan tema 'Tafsir Al-Quran Surat Yusuf'. Mari kita tingkatkan ilmu agama kita bersama.",
    image: null,
    publishedAt: new Date("2026-09-01"),
    expiresAt: new Date("2026-09-30"),
    status: "active",
    createdBy: "user-003",
    createdAt: new Date("2026-09-01"),
    updatedAt: new Date("2026-09-01"),
  },
  {
    id: "pengumuman-002",
    mosqueId: "mosque-001",
    title: "Renovasi Toilet Masjid",
    content: "Assalamualaikum warahmatullahi wabarakatuh. Kami informasikan bahwa toilet masjid bagian barat akan direnovasi mulai tanggal 15 September 2026. Selama renovasi, jamaah dapat menggunakan toilet bagian timur. Mohon maaf atas ketidaknyamanannya. Jazakumullahu khairan.",
    image: null,
    publishedAt: new Date("2026-09-08"),
    expiresAt: new Date("2026-09-20"),
    status: "active",
    createdBy: "user-003",
    createdAt: new Date("2026-09-08"),
    updatedAt: new Date("2026-09-08"),
  },
  {
    id: "pengumuman-003",
    mosqueId: "mosque-001",
    title: "Pendaftaran Kelas Tahfidz Anak",
    content: "Alhamdulillah, Masjid Al-Ikhlas membuka pendaftaran kelas Tahfidz untuk anak-anak usia 7-12 tahun. Kelas akan dimulai pada 1 Oktober 2026 setiap hari Sabtu dan Minggu pukul 08:00-10:00 WIB. Pendaftaran dibuka hingga 25 September 2026. Untuk informasi lebih lanjut silakan hubungi Ustadz Ahmad Fauzi di nomor 0812-3456-7890.",
    image: null,
    publishedAt: new Date("2026-09-05"),
    expiresAt: new Date("2026-09-25"),
    status: "active",
    createdBy: "user-003",
    createdAt: new Date("2026-09-05"),
    updatedAt: new Date("2026-09-05"),
  },
  {
    id: "pengumuman-004",
    mosqueId: "mosque-001",
    title: "Laporan Keuangan Bulan Agustus 2026",
    content: "Kepada seluruh jamaah, kami sampaikan laporan keuangan masjid bulan Agustus 2026. Total pemasukan: Rp 22.500.000. Total pengeluaran: Rp 8.750.000. Saldo akhir: Rp 45.750.000. Detail lengkap dapat dilihat di halaman Transparansi Keuangan. Jazakumullahu khairan atas kontribusi dan kepercayaan jamaah.",
    image: null,
    publishedAt: new Date("2026-09-01"),
    expiresAt: null,
    status: "active",
    createdBy: "user-002",
    createdAt: new Date("2026-09-01"),
    updatedAt: new Date("2026-09-01"),
  },
];
```

## 6. Computed Balance

```ts
export const computeBalance = (transactions: Transaction[]): number => {
  return transactions.reduce((acc, txn) => {
    if (txn.status !== "active") return acc;
    return txn.type === "income" ? acc + txn.amount : acc - txn.amount;
  }, 0);
};

// Saldo awal (saldo bulan lalu atau initial balance)
export const INITIAL_BALANCE = 32000000; // Rp 32.000.000

// Current balance = initial + sum(income) - sum(expense)
export const getCurrentBalance = () => {
  const activeTransactions = mockTransactions.filter(t => t.status === "active");
  return INITIAL_BALANCE + computeBalance(activeTransactions);
};

// Saldo bulan ini (September 2026)
export const getSeptemberBalance = () => {
  const septemberTxns = mockTransactions.filter(t => 
    t.status === "active" && 
    t.date.getMonth() === 8 && // September = month 8 (0-indexed)
    t.date.getFullYear() === 2026
  );
  return computeBalance(septemberTxns);
};
```

## 7. Mock API Responses

```ts
export const mockApiResponses = {
  getMosque: {
    success: true,
    data: mockMosque,
    timestamp: new Date(),
  },
  
  getTransactions: {
    success: true,
    data: mockTransactions.filter(t => t.publicationStatus === "public"),
    pagination: {
      page: 1,
      limit: 10,
      total: 8,
      totalPages: 1,
    },
  },
  
  getJadwal: {
    success: true,
    data: mockJadwal.filter(j => j.date >= new Date()),
    pagination: {
      page: 1,
      limit: 10,
      total: 3,
      totalPages: 1,
    },
  },
  
  getPengumuman: {
    success: true,
    data: mockPengumuman.filter(p => p.status === "active"),
    pagination: {
      page: 1,
      limit: 10,
      total: 4,
      totalPages: 1,
    },
  },
  
  login: {
    success: true,
    data: {
      user: mockUsers[0],
      token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
      expiresIn: 3600,
    },
    timestamp: new Date(),
  },
};
```

## 8. Helper Functions

```ts
export const getNextFriday = (): Date => {
  const today = new Date();
  const dayOfWeek = today.getDay();
  const daysUntilFriday = (5 - dayOfWeek + 7) % 7 || 7;
  const nextFriday = new Date(today);
  nextFriday.setDate(today.getDate() + daysUntilFriday);
  return nextFriday;
};

export const getNextJadwal = () => {
  const nextFriday = getNextFriday();
  return mockJadwal.find(j => j.date >= nextFriday);
};

export const getTransactionsByMonth = (month: number, year: number) => {
  return mockTransactions.filter(t => 
    t.date.getMonth() === month && 
    t.date.getFullYear() === year &&
    t.status === "active"
  );
};

export const getSummary = (month: number, year: number) => {
  const transactions = getTransactionsByMonth(month, year);
  const income = transactions
    .filter(t => t.type === "income")
    .reduce((sum, t) => sum + t.amount, 0);
  const expense = transactions
    .filter(t => t.type === "expense")
    .reduce((sum, t) => sum + t.amount, 0);
  
  return {
    totalIncome: income,
    totalExpense: expense,
    balance: income - expense,
    period: `${month + 1}/${year}`,
  };
};
```

---

Total Mock Data:
- Mosque: 1
- Users: 4
- Transactions: 10
- Jadwal: 4
- Pengumuman: 4
- Initial Balance: Rp 32.000.000
- Current Balance: ~Rp 47.000.000
