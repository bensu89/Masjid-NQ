"use client";

import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-10 border-b bg-background">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="text-2xl font-bold text-primary">
          Masjid Nurul Qolbi
        </Link>
        
        <nav className="hidden md:flex gap-8">
          <Link href="/" className="text-sm hover:text-primary">Beranda</Link>
          <Link href="/jadwal" className="text-sm hover:text-primary">Jadwal Jumat</Link>
          <Link href="/keuangan" className="text-sm hover:text-primary">Keuangan</Link>
          <Link href="/pengumuman" className="text-sm hover:text-primary">Pengumuman</Link>
          <Link href="/admin/login" className="text-sm hover:text-primary">Admin</Link>
        </nav>
        
        <button onClick={() => setOpen(!open)} className="md:hidden p-2">
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      
      {open && (
        <nav className="md:hidden border-t bg-background p-4 space-y-2">
          <Link href="/" className="block text-sm hover:text-primary">Beranda</Link>
          <Link href="/jadwal" className="block text-sm hover:text-primary">Jadwal Jumat</Link>
          <Link href="/keuangan" className="block text-sm hover:text-primary">Keuangan</Link>
          <Link href="/pengumuman" className="block text-sm hover:text-primary">Pengumuman</Link>
          <Link href="/admin/login" className="block text-sm hover:text-primary">Admin</Link>
        </nav>
      )}
    </header>
  );
}
