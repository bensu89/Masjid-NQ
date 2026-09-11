import { Card, CardContent, CardDescription, CardHeader } from "@/components/ui/Card";

export default function AdminRingkasanKeuanganPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Ringkasan Keuangan</h1>
        <p className="text-muted-foreground">Ikhtisar kondisi keuangan masjid</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardDescription>Saldo Saat Ini</CardDescription>
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
      </div>
    </div>
  );
}