import Link from "next/link";
import { pengumumanList } from "@/data/mock";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function PengumumanPage() {
  return (
    <main className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Pengumuman</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {pengumumanList.map((peng) => (
          <Card key={peng.id} className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <CardTitle className="text-lg">{peng.title}</CardTitle>
              <CardDescription>{peng.date}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground mb-4">{peng.content}</p>
              <Link href={`/pengumuman/${peng.id}`}>
                <Button variant="secondary" size="sm">Baca Selengkapnya</Button>
              </Link>
            </CardContent>
          </Card>
        ))}
      </div>
    </main>
  );
}