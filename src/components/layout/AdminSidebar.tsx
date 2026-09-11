import Link from "next/link";
import { Menu, LogOut, Home, DollarSign, Calendar, Bell, Users, Settings } from "lucide-react";

export const AdminSidebar = () => {
  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-white border-r border-border z-50">
      <div className="h-full px-4 py-6 overflow-y-auto">
        <Link href="/admin/dashboard" className="flex items-center space-x-4 mb-6">
          <Home className="h-6 w-6 text-primary" />
          <span className="font-semibold text-foreground">Dashboard</span>
        </Link>

        <nav className="space-y-2">
          <Link href="/admin/keuangan/pemasukan" className="flex items-center space-x-4 px-3 py-2 rounded-md hover:bg-primary hover:text-white">
            <DollarSign className="h-5 w-5 text-primary hover:text-white" />
            <span className="text-sm font-medium text-foreground hover:text-white">Pemasukan</span>
          </Link>

          <Link href="/admin/keuangan/pengeluaran" className="flex items-center space-x-4 px-3 py-2 rounded-md hover:bg-primary hover:text-white">
            <Calendar className="h-5 w-5 text-primary hover:text-white" />
            <span className="text-sm font-medium text-foreground hover:text-white">Pengeluaran</span>
          </Link>

          <Link href="/admin/keuangan/ringkasan" className="flex items-center space-x-4 px-3 py-2 rounded-md hover:bg-primary hover:text-white">
            <Bell className="h-5 w-5 text-primary hover:text-white" />
            <span className="text-sm font-medium text-foreground hover:text-white">Ringkasan Keuangan</span>
          </Link>

          <Link href="/admin/jadwal" className="flex items-center space-x-4 px-3 py-2 rounded-md hover:bg-primary hover:text-white">
            <Menu className="h-5 w-5 text-primary hover:text-white" />
            <span className="text-sm font-medium text-foreground hover:text-white">Jadwal Jumat</span>
          </Link>

          <Link href="/admin/pengumuman" className="flex items-center space-x-4 px-3 py-2 rounded-md hover:bg-primary hover:text-white">
            <Users className="h-5 w-5 text-primary hover:text-white" />
            <span className="text-sm font-medium text-foreground hover:text-white">Pengumuman</span>
          </Link>

          <Link href="/admin/pengaturan" className="flex items-center space-x-4 px-3 py-2 rounded-md hover:bg-primary hover:text-white">
            <Settings className="h-5 w-5 text-primary hover:text-white" />
            <span className="text-sm font-medium text-foreground hover:text-white">Pengaturan</span>
          </Link>
        </nav>

        <div className="mt-auto pt-6 border-t border-border">
          <Link href="/admin/logout" className="flex items-center space-x-4 px-3 py-2 rounded-md hover:bg-destructive hover:text-white">
            <LogOut className="h-5 w-5 text-destructive hover:text-white" />
            <span className="text-sm font-medium text-foreground hover:text-white">Keluar</span>
          </Link>
        </div>
      </div>
    </aside>
  );
};