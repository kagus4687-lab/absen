// src/app/api/auth/[...nextauth]/route.ts
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "jsmith" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        // Logika otentikasi Anda di sini
        // Contoh: cek username/password terhadap database
        if (credentials?.username === "admin" && credentials?.password === "password123") {
          // Jika berhasil, kembalikan objek user
          return { id: "1", name: "Admin User", email: "admin@example.com" };
        }
        // Jika gagal, kembalikan null
        return null;
      }
    })
    // Anda bisa menambahkan provider lain seperti Google, GitHub, dll.
  ],
  // Konfigurasi lain seperti pages, callbacks, dll.
  pages: {
    signIn: '/login', // Arahkan ke halaman login kustom Anda
  },
});

export { handler as GET, handler as POST };
