// src/app/(admin)/layout.tsx
import React from 'react';

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {/* Opsional: Navbar Admin */}
      <nav>
        <h1>Admin Panel</h1>
        {/* Link navigasi admin: Dashboard, Siswa, Nilai, Jadwal */}
      </nav>

      <main>
        {children}
      </main>

      {/* Opsional: Footer Admin */}
      {/* <footer>Admin Footer</footer> */}
    </div>
  );
}
