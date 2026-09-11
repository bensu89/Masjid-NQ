import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function JadwalDetailPage({ params }: { params: { id: string } }) {
  const mockData: Record<string, any> = {
    "1": { date: "Jumat, 12 September 2026", khatib: "Ustadz Muhammad Hidayat", imam: "Ustadz Ahmad Fauzi", bilal: "Bapak Samsul Hadi", tema: "Keutamaan Bersedekah dalam Islam", adhanTime: "11:45", prayerTime: "12:00" },
    "2": { date: "Jumat, 19 September 2026", khatib: "Ustadz Abdullah Rahman", imam: "Ustadz Yusuf Mansur", bilal: "Bapak Joko Prasetyo", tema: "Menjaga Silaturahmi di Era Digital", adhanTime: "11:45", prayerTime: "12:00" },
    "3": { date: "Jumat, 26 September 2026", khatib: "Ustadz Bambang Setiawan", imam: "Ustadz Ahmad Fauzi", bilal: "Bapak Samsul Hadi", tema: "Akhlak Mulia dalam Kehidupan Sehari-hari", adhanTime: "11:45", prayerTime: "12:00" },
  };

  const jadwal = mockData[params.id];

  if (!jadwal) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Jadwal tidak ditemukan</h2>
        <Link href="/jadwal"><Button>Kembali ke Jadwal</Button></Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/jadwal" className="text-sm text-primary hover:underline mb-6 inline-block">← Kembali ke Jadwal</Link>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{jadwal.date}</CardTitle>
          <CardDescription className="text-lg">{jadwal.tema}</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid md:grid-cols-3 gap-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Khatib</h3>
              <p className="text-base">{jadwal.khatib}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Imam</h3>
              <p className="text-base">{jadwal.imam}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Bilal</h3>
              <p className="text-base">{jadwal.bilal}</p>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 border-t pt-6">
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Waktu Adzan</h3>
              <p className="text-base">{jadwal.adhanTime}</p>
            </div>
            <div>
              <h3 className="text-sm font-medium text-muted-foreground mb-1">Waktu Salat</h3>
              <p className="text-base">{jadwal.prayerTime}</p>
            </div>
          </div>
          
          <div className="flex gap-3 mt-6">
            <Button>Bagikan</Button>
            <Button variant="secondary">Kembali</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}