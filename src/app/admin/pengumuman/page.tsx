"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function AdminPengumumanPage() {
  const [list, setList] = useState([
    { id: "1", title: "Pengajian Rutin Malam Jumat", date: "1 Sep 2026", status: "active" },
    { id: "2", title: "Renovasi Toilet Masjid", date: "8 Sep 2026", status: "active" },
  ]);

  const addPengumuman = () => {
    const title = prompt("Judul pengumuman:");
    const date = prompt("Tanggal (dd MMM yyyy):");
    if (title && date) {
      const newItem = { id: Date.now().toString(), title, date, status: "active" };
      setList(prev => [...prev, newItem]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Pengumuman</h1>
          <p className="text-muted-foreground">Kelola pengumuman untuk jamaah</p>
        </div>
        <Button onClick={addPengumuman}>+ Tambah Pengumuman</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Pengumuman</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {list.map(item => (
              <div key={item.id} className="flex items-center justify-between rounded-lg border p-4">
                <div>
                  <p className="font-medium">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.date}</p>
                </div>
                <div className="flex items-center gap-3">
                  <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs">{item.status}</span>
                  <Link href={`/pengumuman/${item.id}`}>
                    <Button variant="secondary" size="sm">Edit</Button>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}