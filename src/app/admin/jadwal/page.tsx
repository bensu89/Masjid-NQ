"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";

export default function AdminJadwalPage() {
  const [list, setList] = useState([
    { id: "1", date: "12 Sep 2026", khatib: "Ustadz Muhammad Hidayat", imam: "Ustadz Ahmad Fauzi", bilal: "Bapak Samsul Hadi", tema: "Keutamaan Bersedekah dalam Islam" },
    { id: "2", date: "19 Sep 2026", khatib: "Ustadz Abdullah Rahman", imam: "Ustadz Yusuf Mansur", bilal: "Bapak Joko Prasetyo", tema: "Menjaga Silaturahmi di Era Digital" },
  ]);

  const addJadwal = () => {
    const date = prompt("Tanggal (dd MMM yyyy):");
    const khatib = prompt("Khatib:");
    const imam = prompt("Imam:");
    const bilal = prompt("Bilal:");
    const tema = prompt("Tema (opsional):");
    if (date && khatib && imam && bilal) {
      const newItem = { id: Date.now().toString(), date, khatib, imam, bilal, tema: tema || "-" };
      setList(prev => [...prev, newItem]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Jadwal Salat Jumat</h1>
          <p className="text-muted-foreground">Kelola jadwal khatib, imam, dan bilal</p>
        </div>
        <Button onClick={addJadwal}>+ Tambah Jadwal</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Jadwal</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3">Tanggal</th>
                  <th className="py-3">Khatib</th>
                  <th className="py-3">Imam</th>
                  <th className="py-3">Bilal</th>
                  <th className="py-3">Tema</th>
                  <th className="py-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {list.map(item => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3">{item.date}</td>
                    <td className="py-3">{item.khatib}</td>
                    <td className="py-3">{item.imam}</td>
                    <td className="py-3">{item.bilal}</td>
                    <td className="py-3">{item.tema}</td>
                    <td className="py-3">
                      <div className="flex gap-2">
                        <Link href={`/jadwal/${item.id}`}>
                          <Button size="sm" variant="secondary">Edit</Button>
                        </Link>
                        <Button size="sm">Detail</Button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}