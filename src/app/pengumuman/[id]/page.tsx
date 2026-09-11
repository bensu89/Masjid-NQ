import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function PengumumanDetailPage({ params }: { params: { id: string } }) {
  const mockData: Record<string, any> = {
    "1": { title: "Pengajian Rutin Malam Jumat", date: "1 Sep 2026", content: "Bapak-bapak dan Ibu-ibu jamaah yang dirahmati Allah. Kami mengundang seluruh jamaah untuk menghadiri pengajian rutin yang diadakan setiap malam Jumat setelah Isya. Pengajian akan diisi oleh Ustadz Muhammad Hidayat dengan tema 'Tafsir Al-Quran Surat Yusuf'. Mari kita tingkatkan ilmu agama kita bersama." },
    "2": { title: "Renovasi Toilet Masjid", date: "8 Sep 2026", content: "Assalamualaikum warahmatullahi wabarakatuh. Kami informasikan bahwa toilet masjid bagian barat akan direnovasi mulai tanggal 15 September 2026. Selama renovasi, jamaah dapat menggunakan toilet bagian timur. Mohon maaf atas ketidaknyamanannya." },
    "3": { title: "Pendaftaran Kelas Tahfidz Anak", date: "5 Sep 2026", content: "Alhamdulillah, Masjid Nurul Qolbi membuka pendaftaran kelas Tahfidz untuk anak-anak usia 7-12 tahun. Kelas akan dimulai pada 1 Oktober 2026 setiap hari Sabtu dan Minggu pukul 08:00-10:00 WIB. Pendaftaran dibuka hingga 25 September 2026." },
  };

  const peng = mockData[params.id];

  if (!peng) {
    return (
      <main className="max-w-4xl mx-auto px-4 py-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Pengumuman tidak ditemukan</h2>
        <Link href="/pengumuman"><Button>Kembali ke Pengumuman</Button></Link>
      </main>
    );
  }

  return (
    <main className="max-w-4xl mx-auto px-4 py-8">
      <Link href="/pengumuman" className="text-sm text-primary hover:underline mb-6 inline-block">← Kembali ke Pengumuman</Link>
      
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl">{peng.title}</CardTitle>
          <p className="text-sm text-muted-foreground mt-2">{peng.date}</p>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-base leading-relaxed">{peng.content}</p>
          
          <div className="flex gap-3 border-t pt-6">
            <Button>Bagikan</Button>
            <Button variant="secondary">Kembali</Button>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}