import Link from "next/link";
import { Bell, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const AdminHeader = () => {
  return (
    <header className="flex h-16 items-center justify-between px-4 bg-white border-b border-border">
      <div className="flex items-center space-x-4">
        <div className="flex items-center space-x-2">
          <UserCircle className="w-8 h-8 text-primary" />
          <div className="space-y-1">
            <p className="font-semibold text-foreground">Masjid Nurul Qolbi</p>
            <p className="text-sm text-muted-foreground">Panel Admin</p>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <Button variant="secondary" size="sm" className="flex items-center space-x-2">
          <Bell className="h-4 w-4" />
          Notifikasi
        </Button>
        <Button variant="secondary" size="sm" className="flex items-center space-x-2">
          <UserCircle className="h-4 w-4" />
          Admin
        </Button>
      </div>
    </header>
  );
};