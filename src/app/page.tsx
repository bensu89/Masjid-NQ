import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/Card";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <section className="mx-auto max-w-7xl px-4 py-16 md:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-5xl">Sistem Manajemen Masjid</h1>
          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link href="/jadwal"><Button size="lg">Lihat Jadwal Jumat</Button></Link>
            <Link href="/admin/login"><Button variant="secondary" size="lg">Masuk Admin</Button></Link>
          </div>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Transparansi Keuangan</CardTitle>
              <CardDescription>Lihat transaksi publik masjid.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/keuangan"><Button className="w-full">Buka Keuangan</Button></Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Jadwal Jumat</CardTitle>
              <CardDescription>Lihat khatib, imam, dan bilal.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/jadwal"><Button className="w-full">Buka Jadwal</Button></Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Pengumuman</CardTitle>
              <CardDescription>Informasi terbaru untuk jamaah.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/pengumuman"><Button className="w-full">Buka Pengumuman</Button></Link>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Dashboard Admin</CardTitle>
              <CardDescription>Kelola data masjid dengan login.</CardDescription>
            </CardHeader>
            <CardContent>
              <Link href="/admin/login"><Button className="w-full">Login Admin</Button></Link>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}