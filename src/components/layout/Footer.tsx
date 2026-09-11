export function Footer() {
  return (
    <footer className="border-t bg-muted/50 py-8 mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-semibold mb-2">Masjid Al‑Ikhlas</h3>
            <p className="text-sm text-muted-foreground">Jl. Raya Masjid No. 123, Jakarta Selatan 12345</p>
            <p className="text-sm text-muted-foreground">Telepon: +62 21 1234 5678</p>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Layanan</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li><a href="/jadwal" className="hover:text-primary">Jadwal Jumat</a></li>
              <li><a href="/keuangan" className="hover:text-primary">Transparansi Keuangan</a></li>
              <li><a href="/pengumuman" className="hover:text-primary">Pengumuman</a></li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-2">Admin</h3>
            <ul className="text-sm space-y-1 text-muted-foreground">
              <li><a href="/admin/login" className="hover:text-primary">Login</a></li>
              <li><a href="/admin/dashboard" className="hover:text-primary">Dashboard</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} DKM Masjid Al‑Ikhlas. Semua hak cipta dilindungi.</p>
        </div>
      </div>
    </footer>
  );
}
