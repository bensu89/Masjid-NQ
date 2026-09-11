# Types — Masjid App MVP

## 1. User & Auth

```ts
type UserRole = 'admin' | 'bendahara' | 'sekretaris' | 'ketua_dkm' | 'pengurus_kegiatan' | 'public';

interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  mosqueId: string;
  createdAt: Date;
  updatedAt: Date;
}

interface AuthPayload {
  email: string;
  password: string;
}

interface AuthResponse {
  user: User;
  token: string;
  expiresIn: number;
}

interface Permission {
  module: string;
  action: 'create' | 'read' | 'update' | 'delete';
}

interface RolePermissions {
  [role: string]: Permission[];
}
```

## 2. Transaction

```ts
type TransactionType = 'income' | 'expense';
type TransactionStatus = 'active' | 'cancelled' | 'corrected';
type PublicationStatus = 'public' | 'private';

interface Transaction {
  id: string;
  mosqueId: string;
  type: TransactionType;
  amount: number;
  category: string;
  date: Date;
  description: string;
  source?: string;
  notes?: string;
  publicationStatus: PublicationStatus;
  status: TransactionStatus;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
  proof?: string; // Phase 2: file URL
}

interface TransactionFilter {
  type?: TransactionType;
  category?: string;
  dateFrom?: Date;
  dateTo?: Date;
  publicationStatus?: PublicationStatus;
  page?: number;
  limit?: number;
}

interface TransactionSummary {
  totalIncome: number;
  totalExpense: number;
  balance: number;
  period: string; // 'daily', 'weekly', 'monthly', 'yearly', 'custom'
}

interface TransactionHistoryItem {
  id: string;
  status: TransactionStatus;
  changedAt: Date;
  changedBy: string;
  previousData?: Partial<Transaction>;
  newData: Partial<Transaction>;
}
```

## 3. Jadwal (Friday Schedule)

```ts
interface JadwalJumat {
  id: string;
  mosqueId: string;
  date: Date;
  khatib: string;
  imam: string;
  bilal: string;
  theme?: string;
  adhanTime?: string; // HH:mm format
  prayerTime?: string; // HH:mm format
  notes?: string;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

interface JadwalFilter {
  dateFrom?: Date;
  dateTo?: Date;
  page?: number;
  limit?: number;
}

interface JadwalDetail extends JadwalJumat {
  formattedDate: string;
  daysUntil: number; // negative if past
  isPast: boolean;
}
```

## 4. Pengumuman (Announcement)

```ts
type PengumumanStatus = 'active' | 'inactive' | 'archived';

interface Pengumuman {
  id: string;
  mosqueId: string;
  title: string;
  content: string;
  image?: string; // URL
  publishedAt: Date;
  expiresAt?: Date;
  status: PengumumanStatus;
  createdBy: string;
  createdAt: Date;
  updatedAt: Date;
}

interface PengumumanFilter {
  status?: PengumumanStatus;
  page?: number;
  limit?: number;
}

interface PengumumanDetail extends Pengumuman {
  isExpired: boolean;
  daysLeft?: number;
}
```

## 5. Mosque

```ts
interface Mosque {
  id: string;
  name: string;
  slug: string; // for public URL: /masjid/:slug
  address: string;
  phone?: string;
  email?: string;
  description?: string;
  logo?: string; // URL
  ogImage?: string; // OG image untuk social share
  createdAt: Date;
  updatedAt: Date;
}

interface MosqueInfo {
  id: string;
  name: string;
  slug: string;
  description?: string;
  logo?: string;
  address: string;
}
```

## 6. Report

```ts
type ReportPeriod = 'daily' | 'weekly' | 'monthly' | 'yearly' | 'custom';

interface ReportFilter {
  period: ReportPeriod;
  dateFrom: Date;
  dateTo: Date;
  category?: string;
  transactionType?: 'income' | 'expense' | 'all';
}

interface ReportData {
  period: string;
  startBalance: number;
  totalIncome: number;
  totalExpense: number;
  endBalance: number;
  incomeDetail: {
    category: string;
    amount: number;
  }[];
  expenseDetail: {
    category: string;
    amount: number;
  }[];
}

interface ReportResponse {
  filter: ReportFilter;
  data: ReportData;
  generatedAt: Date;
}
```

## 7. API Response

```ts
interface ApiResponse<T> {
  success: boolean;
  data?: T;
  error?: {
    code: string;
    message: string;
  };
  timestamp: Date;
}

interface PaginatedResponse<T> {
  success: boolean;
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
  error?: {
    code: string;
    message: string;
  };
}
```

## 8. Form Data

```ts
interface TransactionFormData {
  type: TransactionType;
  amount: number;
  category: string;
  date: Date;
  description: string;
  source?: string;
  notes?: string;
  publicationStatus: PublicationStatus;
}

interface JadwalFormData {
  date: Date;
  khatib: string;
  imam: string;
  bilal: string;
  theme?: string;
  adhanTime?: string;
  prayerTime?: string;
  notes?: string;
}

interface PengumumanFormData {
  title: string;
  content: string;
  image?: File;
  publishedAt: Date;
  expiresAt?: Date;
  status: PengumumanStatus;
}

interface LoginFormData {
  email: string;
  password: string;
}
```

## 9. UI State

```ts
interface LoadingState {
  [key: string]: boolean;
}

interface ErrorState {
  [key: string]: string | null;
}

interface NotificationState {
  type: 'success' | 'error' | 'warning' | 'info';
  message: string;
  duration?: number;
}
```

## 10. Component Props

```ts
interface BaseComponentProps {
  className?: string;
  testId?: string;
}

interface FormFieldProps extends BaseComponentProps {
  label: string;
  required?: boolean;
  error?: string;
  helperText?: string;
}

interface CardProps extends BaseComponentProps {
  title?: string;
  subtitle?: string;
  footer?: React.ReactNode;
  hoverable?: boolean;
}

interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'danger' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  onClick?: () => void;
}
```
