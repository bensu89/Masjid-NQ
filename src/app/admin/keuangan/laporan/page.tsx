import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Input } from "@/components/ui/Input";

export default function AdminLaporanPage() {
  return (
    <div className="space-y-8">
      <div>
        <h1 className="text-3xl font-bold">Laporan Keuangan</h1>
        <p className="text-muted-foreground">Generate laporan sederhana sesuai periode</p>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Filter Laporan</CardTitle>
          <CardDescription>Pilih periode dan kategori</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Input label="Periode" placeholder="Bulanan" />
            <Input label="Tanggal Mulai" type="date" />
            <Input label="Tanggal Akhir" type="date" />
            <div className="flex items-end">
              <Button className="w-full">Generate</Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Hasil Laporan</CardTitle>
          <CardDescription>View-only untuk MVP</CardDescription>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between"><span>Saldo Awal</span><span>Rp 32.000.000</span></div>
          <div className="flex justify-between"><span>Total Pemasukan</span><span className="text-green-600">Rp 22.500.000</span></div>
          <div className="flex justify-between"><span>Total Pengeluaran</span><span className="text-red-600">Rp 8.750.000</span></div>
          <div className="flex justify-between font-semibold text-lg border-t pt-3"><span>Saldo Akhir</span><span>Rp 45.750.000</span></div>
        </CardContent>
      </Card>
    </div>
  );
}