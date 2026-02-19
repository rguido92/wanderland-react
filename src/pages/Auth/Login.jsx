import { useState } from "react";
import {useAuth} from "../../hooks/useAuth";
import { useNavigate, Link } from "react-router-dom";
import { Mail, Lock } from "lucide-react";
export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { login, loginWithGoogle, error, loading } = useAuth();
    const navigate = useNavigate()

    const handleLogin = async (e) => {
        e.preventDefault()
        try {
            await login(email, password)
            navigate("/dashboard")
        } catch (err) {
            console.error("Login error:", err);
        }
    }

    const handleGoogleLogin = async () => {
        try {
            await loginWithGoogle()
        } catch (err) {
            console.error("Google Login error:", err);
        }
    }
    return (
        <div className="min-h-screen bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center px-4">
            <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold text-center mb-2 text-gray-900">
                    Bienvenido
                </h1>
                <p className="text-center text-gray-600 mb-8">
                    Inicia sesión en Wanderland
                </p>
        <form onSubmit={handleLogin} className="space-y-4">
           {/* Email */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="inline-block mr-2 " size={16} />
                    Email
                </label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
                />
            </div>
            {/* Password */}
            <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Lock className="inline-block mr-2 " size={16} />
                    Password
                </label>
                 <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="••••••••"
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            />
            </div>
            {/* Error Message */}
            {error && <p className="text-red-500 text-sm">{error}</p>}
            {/* Submit */}
          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white py-2 rounded-lg font-bold hover:bg-primary/90 disabled:opacity-50 transition"
          >
            {loading ? 'Iniciando sesión...' : 'Iniciar Sesión'}
          </button>
        </form>

        {/* Google */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-300"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-white text-gray-500">O continúa con</span>
          </div>
        </div>

        <button
          onClick={handleGoogleLogin}
          className="w-full border border-gray-300 py-2 rounded-lg font-medium hover:bg-gray-50 transition"
        >
          🔴 Google
        </button>

        {/* Signup link */}
        <p className="text-center text-gray-600 mt-6">
          ¿No tienes cuenta?{' '}
          <Link to="/auth/signup" className="text-primary font-bold hover:underline">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  )
}