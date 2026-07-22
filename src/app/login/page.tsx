// src/app/login/page.tsx
import LoginForm from '../components/auth/LoginForm'; // Asumsikan ada komponen LoginForm

export default function LoginPage() {
  return (
    <div>
      <h1>Admin Login</h1>
      <p>Please enter your credentials to access the admin panel.</p>
      <LoginForm /> {/* Komponen form login */}
    </div>
  );
}
