import { keuanganSummary } from "@/data/mock";
import { pengeluaranList, pemasukanList } from "@/data/mock";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function KeuanganPage() {
  const transactions = [
    ...pemasukanList.map((item) => ({ id: item.id, date: item.tanggal, category: item.kategori, amount: item.jumlah, type: "income" })),
    ...pengeluaranList.map((item) => ({ id: item.id, date: item.tanggal, category: item.kategori, amount: item.jumlah, type: "expense" })),
  ];

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Transparansi Keuangan</h1>
      <div className="grid gap-6 md:grid-cols-3 mb-8">
        <Card>
          <CardHeader><CardDescription>Saldo Bulan Ini</CardDescription></CardHeader>
          <CardContent><p className="text-3xl font-bold text-primary">Rp {keuanganSummary.saldo.toLocaleString("id-ID")}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardDescription>Pemasukan</CardDescription></CardHeader>
          <CardContent><p className="text-3xl font-bold text-green-600">Rp {keuanganSummary.pemasukan.toLocaleString("id-ID")}</p></CardContent>
        </Card>
        <Card>
          <CardHeader><CardDescription>Pengeluaran</CardDescription></CardHeader>
          <CardContent><p className="text-3xl font-bold text-red-600">Rp {keuanganSummary.pengeluaran.toLocaleString("id-ID")}</p></CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Transaksi Publik</CardTitle>
          <CardDescription>Transaksi yang dipublikasikan untuk transparansi</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {transactions.map((tx) => (
              <div key={tx.id} className="flex justify-between items-center py-3 border-b">
                <div>
                  <p className="font-medium">{tx.category}</p>
                  <p className="text-sm text-muted-foreground">{tx.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <Badge variant={tx.type === "income" ? "success" : "danger"}>{tx.type === "income" ? "Masuk" : "Keluar"}</Badge>
                  <span className={`font-semibold ${tx.type === "income" ? "text-green-600" : "text-red-600"}`}>
                    {tx.type === "income" ? "+" : "-"} Rp {tx.amount.toLocaleString("id-ID")}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </main>
  );
}