"use client";
import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";

export default function AdminPemasukanPage() {
  const [items, setItems] = useState([
    { id: "1", tanggal: "12 Sep 2026", kategori: "Infak Jumat", jumlah: 5000000, sumber: "Jamaah", status: "public" },
    { id: "2", tanggal: "5 Sep 2026", kategori: "Donasi", jumlah: 10000000, sumber: "Donatur", status: "private" },
  ]);

  return (
    <div className="space-y-8">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Pemasukan</h1>
          <p className="text-muted-foreground">Kelola transaksi pemasukan</p>
        </div>
        <Button>+ Tambah Pemasukan</Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Daftar Pemasukan</CardTitle>
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
                    <td className="py-3 font-medium text-green-600">Rp {item.jumlah.toLocaleString("id-ID")}</td>
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