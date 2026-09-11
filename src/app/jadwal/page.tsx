import Link from "next/link";
import { jadwalList } from "@/data/mock";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function JadwalPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Jadwal Salat Jumat</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jadwalList.map((jadwal) => (
          <Card key={jadwal.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{jadwal.date}</CardTitle>
              <CardDescription>{jadwal.tema}</CardDescription>
            </CardHeader>
            <CardContent className="space-y-2 text-sm">
              <div><span className="font-medium">Khatib:</span> {jadwal.khatib}</div>
              <div><span className="font-medium">Imam:</span> {jadwal.imam}</div>
              <div><span className="font-medium">Bilal:</span> {jadwal.bilal}</div>
              <Link href={`/jadwal/${jadwal.id}`}>
                <Button className="w-full mt-4">Lihat Detail</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}