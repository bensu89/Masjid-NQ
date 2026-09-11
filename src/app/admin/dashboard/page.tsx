import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Dashboard</h1>
        <p className="text-muted-foreground">Ringkasan data masjid</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
        <Card>
          <CardHeader>
            <CardDescription>Saldo Masjid</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-primary">Rp 47.750.000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Pemasukan Bulan Ini</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-green-600">Rp 22.500.000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Pengeluaran Bulan Ini</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold text-red-600">Rp 8.750.000</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardDescription>Transaksi Terbaru</CardDescription>
          </CardHeader>
          <CardContent>
            <p className="text-3xl font-bold">15</p>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Jadwal Jumat Berikutnya</CardTitle>
            <CardDescription>Jumat, 12 September 2026</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <p><span className="font-medium">Khatib:</span> Ustadz Muhammad Hidayat</p>
            <p><span className="font-medium">Imam:</span> Ustadz Ahmad Fauzi</p>
            <p><span className="font-medium">Bilal:</span> Bapak Samsul Hadi</p>
            <Link href="/admin/jadwal">
              <Button className="mt-4">Kelola Jadwal</Button>
            </Link>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pengumuman Aktif</CardTitle>
            <CardDescription>3 pengumuman aktif</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="border-b pb-3">
              <p className="font-medium">Pengajian Rutin Malam Jumat</p>
              <p className="text-sm text-muted-foreground">Aktif sampai 30 Sep 2026</p>
            </div>
            <div className="border-b pb-3">
              <p className="font-medium">Renovasi Toilet Masjid</p>
              <p className="text-sm text-muted-foreground">Aktif sampai 20 Sep 2026</p>
            </div>
            <Link href="/admin/pengumuman">
              <Button variant="secondary">Kelola Pengumuman</Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}