"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function AdminPengeluaranPage() {
  const [items, setItems] = useState([
    { id: "1", tanggal: "10 Sep 2026", kategori: "Listrik", jumlah: 1200000, sumber: "Kas Masjid", status: "public" },
    { id: "2", tanggal: "8 Sep 2026", kategori: "Air", jumlah: 500000, sumber: "Kas Masjid", status: "public" },
  ]);

  const addPengeluaran = () => {
    const date = prompt("Tanggal (dd MMM yyyy):");
    const category = prompt("Kategori:");
    const amount = parseFloat(prompt("Jumlah (angka):") || "0");
    const source = prompt("Sumber Dana (opsional):");
    const publication = prompt("Status Publikasi (public/private):") || "private";
    if (date && category && amount) {
      const newItem = {
        id: Date.now().toString(),
        tanggal: date,
        kategori: category,
        jumlah: amount,
        sumber: source || "-",
        status: publication,
      };
      setItems(prev => [...prev, newItem]);
    }
  };

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Pengeluaran</h1>
          <p className="text-muted-foreground">Kelola transaksi pengeluaran</p>
        </div>
        <Button onClick={addPengeluaran}>+ Tambah Pengeluaran</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Pengeluaran</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b text-left">
                  <th className="py-3">Tanggal</th>
                  <th className="py-3">Kategori</th>
                  <th className="py-3">Jumlah</th>
                  <th className="py-3">Sumber Dana</th>
                  <th className="py-3">Status</th>
                  <th className="py-3">Aksi</th>
                </tr>
              </thead>
              <tbody>
                {items.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3">{item.tanggal}</td>
                    <td className="py-3">{item.kategori}</td>
                    <td className="py-3 font-medium text-red-600">Rp {item.jumlah.toLocaleString("id-ID")}</td>
                    <td className="py-3">{item.sumber}</td>
                    <td className="py-3"><Badge>{item.status}</Badge></td>
                    <td className="py-3"><Button size="sm" variant="secondary">Edit</Button></td>
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