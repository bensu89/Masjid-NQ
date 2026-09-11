import { jadwalShalatMeta, jadwalShalatSeptember2026 } from "@/data/jadwalShalat";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function JadwalShalatPage() {
  const jadwalMingguan = jadwalShalatSeptember2026.slice(0, 7);

  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-2">Jadwal Shalat</h1>
      <p className="text-muted-foreground mb-8">
        {jadwalShalatMeta.bulanNama} {jadwalShalatMeta.tahun} - {jadwalShalatMeta.kabkota}, {jadwalShalatMeta.provinsi}
      </p>
      <Card>
        <CardHeader>
          <CardTitle>Jadwal Mingguan</CardTitle>
          <CardDescription>Tampilan 7 hari pertama - Imsak sampai Isya</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3">Tanggal</th>
                  <th className="py-3">Hari</th>
                  <th className="py-3">Imsak</th>
                  <th className="py-3">Subuh</th>
                  <th className="py-3">Terbit</th>
                  <th className="py-3">Dhuha</th>
                  <th className="py-3">Dzuhur</th>
                  <th className="py-3">Ashar</th>
                  <th className="py-3">Maghrib</th>
                  <th className="py-3">Isya</th>
                </tr>
              </thead>
              <tbody>
                {jadwalMingguan.map((item) => (
                  <tr key={item.tanggalLengkap} className="border-b">
                    <td className="py-3 font-medium">{item.tanggal}</td>
                    <td className="py-3">{item.hari}</td>
                    <td className="py-3">{item.imsak}</td>
                    <td className="py-3">{item.subuh}</td>
                    <td className="py-3">{item.terbit}</td>
                    <td className="py-3">{item.dhuha}</td>
                    <td className="py-3">{item.dzuhur}</td>
                    <td className="py-3">{item.ashar}</td>
                    <td className="py-3">{item.maghrib}</td>
                    <td className="py-3">{item.isya}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </main>
  );
}