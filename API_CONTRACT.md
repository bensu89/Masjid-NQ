# API Contract — Masjid App MVP

## Base URL
- Development: `http://localhost:3000/api`
- Production: `https://api.masjid.app/api`

## Authentication

### POST /api/auth/login
**Request**:
```json
{
  "email": "admin@alihlas.org",
  "password": "password123"
}
```

**Success (200)**:
```json
{
  "success": true,
  "data": {
    "user": {
      "id": "user-001",
      "email": "admin@alihlas.org",
      "name": "Ahmad Sudrajat",
      "role": "admin",
      "mosqueId": "mosque-001"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
    "expiresIn": 3600
  },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

**Error (401)**:
```json
{
  "success": false,
  "error": {
    "code": "INVALID_CREDENTIALS",
    "message": "Email atau password salah"
  },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### POST /api/auth/logout
**Headers**: `Authorization: Bearer <token>`

**Success (200)**:
```json
{
  "success": true,
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### GET /api/auth/me
**Headers**: `Authorization: Bearer <token>`

**Success (200)**:
```json
{
  "success": true,
  "data": {
    "id": "user-001",
    "email": "admin@alihlas.org",
    "name": "Ahmad Sudrajat",
    "role": "admin",
    "mosqueId": "mosque-001"
  },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

---

## Mosque

### GET /api/mosque
**Success (200)**:
```json
{
  "success": true,
  "data": {
    "id": "mosque-001",
    "name": "Masjid Al-Ikhlas",
    "slug": "al-ikhlas",
    "address": "Jl. Raya Masjid No. 123",
    "phone": "+62 21 1234 5678",
    "email": "info@alihlas.org",
    "description": "Desc...",
    "logo": "/images/mosque-logo.png",
    "ogImage": "/images/mosque-og.jpg"
  },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### GET /api/mosque/by-slug/:slug
**Success (200)**:
```json
{
  "success": true,
  "data": {
    "id": "mosque-001",
    "name": "Masjid Al-Ikhlas",
    "slug": "al-ikhlas",
    "address": "Jl. Raya Masjid No. 123"
  },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

---

## Transactions

### GET /api/transactions
**Query Params**: `?type=income&page=1&limit=10&category=infak_jumat`

**Headers**: `Authorization: Bearer <token>`

**Success (200)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "txn-001",
      "type": "income",
      "amount": 5000000,
      "category": "infak_jumat",
      "date": "2026-09-05",
      "description": "Infak Jumat...",
      "source": "Jamaah",
      "publicationStatus": "public",
      "status": "active"
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 10,
    "total": 100,
    "totalPages": 10
  },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### GET /api/transactions/public
**Query Params**: `?page=1&limit=10`

**Success (200)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "txn-001",
      "type": "income",
      "amount": 5000000,
      "category": "infak_jumat",
      "date": "2026-09-05",
      "description": "Infak Jumat...",
      "source": "Jamaah",
      "publicationStatus": "public"
    }
  ],
  "pagination": { ... },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### POST /api/transactions
**Headers**: `Authorization: Bearer <token>`

**Request**:
```json
{
  "type": "income",
  "amount": 5000000,
  "category": "infak_jumat",
  "date": "2026-09-11",
  "description": "Infak Jumat",
  "source": "Jamaah",
  "publicationStatus": "public"
}
```

**Success (201)**:
```json
{
  "success": true,
  "data": {
    "id": "txn-002",
    "type": "income",
    "amount": 5000000,
    "category": "infak_jumat",
    "date": "2026-09-11",
    "description": "Infak Jumat",
    "source": "Jamaah",
    "publicationStatus": "public",
    "status": "active"
  },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### PUT /api/transactions/:id
**Headers**: `Authorization: Bearer <token>`

**Request**:
```json
{
  "amount": 6000000,
  "description": "Infak Jumatupdated"
}
```

**Success (200)**:
```json
{
  "success": true,
  "data": { ...updated transaction... },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### DELETE /api/transactions/:id (soft delete)
**Headers**: `Authorization: Bearer <token>`

**Success (200)**:
```json
{
  "success": true,
  "data": {
    "id": "txn-001",
    "status": "cancelled"
  },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### GET /api/transactions/balance
**Headers**: `Authorization: Bearer <token>`

**Success (200)**:
```json
{
  "success": true,
  "data": {
    "currentBalance": 47000000,
    "balanceDate": "2026-09-11",
    "incomeThisMonth": 22500000,
    "expenseThisMonth": 8750000
  },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

---

## Jadwal Jumat

### GET /api/jadwal
**Headers**: `Authorization: Bearer <token>`

**Success (200)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "jadwal-001",
      "date": "2026-09-12",
      "khatib": "Ustadz Muhammad Hidayat",
      "imam": "Ustadz Ahmad Fauzi",
      "bilal": "Bapak Samsul Hadi",
      "theme": "Keutamaan Bersedekah",
      "adhanTime": "11:45",
      "prayerTime": "12:00"
    }
  ],
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### GET /api/jadwal/public
**Success (200)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "jadwal-001",
      "date": "2026-09-12",
      "khatib": "Ustadz Muhammad Hidayat",
      "imam": "Ustadz Ahmad Fauzi",
      "bilal": "Bapak Samsul Hadi",
      "theme": "Keutamaan Bersedekah",
      "adhanTime": "11:45",
      "prayerTime": "12:00"
    }
  ],
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### POST /api/jadwal
**Headers**: `Authorization: Bearer <token>`

**Request**:
```json
{
  "date": "2026-09-19",
  "khatib": "Ustadz Abdullah Rahman",
  "imam": "Ustadz Yusuf Mansur",
  "bilal": "Bapak Joko Prasetyo",
  "theme": "Menjaga Silaturahmi",
  "adhanTime": "11:45",
  "prayerTime": "12:00"
}
```

**Success (201)**:
```json
{
  "success": true,
  "data": { ...jadwal... },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### PUT /api/jadwal/:id
**Headers**: `Authorization: Bearer <token>`

**Success (200)**:
```json
{
  "success": true,
  "data": { ...updated jadwal... },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### GET /api/jadwal/:id
**Headers**: `Authorization: Bearer <token>`

**Success (200)**:
```json
{
  "success": true,
  "data": { ...jadwal detail... },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

---

## Pengumuman

### GET /api/pengumuman
**Headers**: `Authorization: Bearer <token>`

**Success (200)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "pengumuman-001",
      "title": "Pengajian Rutin",
      "content": "Isi konten...",
      "image": null,
      "publishedAt": "2026-09-01",
      "expiresAt": "2026-09-30",
      "status": "active"
    }
  ],
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### GET /api/pengumuman/public
**Success (200)**:
```json
{
  "success": true,
  "data": [
    {
      "id": "pengumuman-001",
      "title": "Pengajian Rutin",
      "content": "Isi konten...",
      "image": null,
      "publishedAt": "2026-09-01",
      "expiresAt": "2026-09-30",
      "isExpired": false
    }
  ],
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### POST /api/pengumuman
**Headers**: `Authorization: Bearer <token>`

**Request**:
```json
{
  "title": "Pengajian Baru",
  "content": "Isi konten pengumuman...",
  "image": null,
  "publishedAt": "2026-09-11",
  "expiresAt": "2026-09-30",
  "status": "active"
}
```

**Success (201)**:
```json
{
  "success": true,
  "data": { ...pengumuman... },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

### PUT /api/pengumuman/:id
**Headers**: `Authorization: Bearer <token>`

**Success (200)**:
```json
{
  "success": true,
  "data": { ...updated... },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

---

## Laporan

### GET /api/reports/summary
**Headers**: `Authorization: Bearer <token>`

**Query**: `?period=monthly&dateFrom=2026-09-01&dateTo=2026-09-30`

**Success (200)**:
```json
{
  "success": true,
  "data": {
    "period": "September 2026",
    "startBalance": 32000000,
    "totalIncome": 22500000,
    "totalExpense": 8750000,
    "endBalance": 45750000,
    "incomeDetail": [
      { "category": "infak_jumat", "amount": 9200000 },
      { "category": "kotak_amal", "amount": 2500000 },
      { "category": "donasi", "amount": 10800000 }
    ],
    "expenseDetail": [
      { "category": "listrik", "amount": 1200000 },
      { "category": "air", "amount": 500000 },
      { "category": "internet", "amount": 300000 }
    ]
  },
  "timestamp": "2026-09-11T01:00:00Z"
}
```

---

## Error Codes

| Code | Message | Description |
| --- | --- | --- |
| `INVALID_CREDENTIALS` | Email atau password salah | Login gagal |
| `UNAUTHORIZED` | Token tidak valid atau expired | Auth error |
| `FORBIDDEN` | Anda tidak memiliki akses | Permission denied |
| `VALIDATION_ERROR` | Validasi gagal | Form input error |
| `RESOURCE_NOT_FOUND` | Data tidak ditemukan | 404 |
| `CONFLICT` | Data sudah ada / konflik | 409 |
| `SERVER_ERROR` | Terjadi kesalahan server | 500 |

---

## Rate Limiting

- 100 requests/minute per IP
- 1000 requests/hour per authenticated user

---

## Future (Phase 2+)

- File upload (bukti transaksi, gambar pengumuman)
- Export PDF/Excel
- QR Code generation
- WhatsApp notifications
- Multi-mosque support
