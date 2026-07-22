// src/app/layout.tsx
import './styles/globals.css'; // Import global styles
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'My App',
  description: 'A Next.js application',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {/* Anda bisa menambahkan Header/Footer global di sini */}
        <header>
          <nav>
            <a href="/">Home</a> | <a href="/about">About</a> | <a href="/announcements">Announcements</a> | <a href="/login">Admin Login</a>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2023 My App</p>
        </footer>
      </body>
    </html>
  );
}
