import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'
import { useNavigate, Link } from 'react-router-dom'
import { Mail, Lock, ArrowRight, AlertCircle, CheckCircle } from 'lucide-react'

export default function Signup() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [passwordError, setPasswordError] = useState('')
  const [successMessage, setSuccessMessage] = useState('')
  const { register, error, loading } = useAuthContext()
  const navigate = useNavigate()

  const handleSignup = async (e) => {
    e.preventDefault()
    setPasswordError('')

    if (password !== confirmPassword) {
      setPasswordError('Las contraseñas no coinciden')
      return
    }

    if (password.length < 6) {
      setPasswordError('La contraseña debe tener al menos 6 caracteres')
      return
    }

    try {
      await register(email, password)
      setSuccessMessage('¡Cuenta creada! Por favor verifica tu email para activar tu cuenta.')
      setTimeout(() => {
        navigate('/auth/login')
      }, 3000)
    } catch (err) {
      console.error('Signup error:', err)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-50 via-violet-50 to-orange-50 flex items-center justify-center px-4 py-8">
      <div className="w-full max-w-md">
        <div className="text-center mb-10">
          <div className="text-6xl mb-4">🌄</div>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">
            Crear cuenta
          </h1>
          <p className="text-slate-600">
            Únete a Wanderland y comienza a planificar
          </p>
        </div>

        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 border border-violet-100">
          <form onSubmit={handleSignup} className="space-y-5">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-400" size={20} />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="tu@email.com"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-400" size={20} />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Confirmar contraseña
              </label>
              <div className="relative">
                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-violet-400" size={20} />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="••••••••"
                  required
                  className="w-full pl-10 pr-4 py-3 border border-violet-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-violet-400 focus:border-transparent bg-white"
                />
              </div>
            </div>

            {passwordError && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                <AlertCircle size={18} />
                {passwordError}
              </div>
            )}

            {successMessage && (
              <div className="bg-green-50 border border-green-200 text-green-600 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                <CheckCircle size={18} />
                {successMessage}
              </div>
            )}

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-lg text-sm flex items-center gap-2">
                <AlertCircle size={18} />
                {error}
              </div>
            )}

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-gradient-to-r from-violet-500 to-orange-400 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-violet-500/25 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {loading ? 'Creando cuenta...' : 'Crear Cuenta'}
              {!loading && <ArrowRight size={20} />}
            </button>
          </form>

          <div className="mt-6 p-4 bg-violet-50 border border-violet-100 rounded-xl text-sm text-slate-600">
            <p className="font-semibold mb-2 text-slate-700">Requisitos:</p>
            <ul className="space-y-1">
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-violet-500" />
                Mínimo 6 caracteres
              </li>
              <li className="flex items-center gap-2">
                <CheckCircle size={14} className="text-violet-500" />
                Puede contener letras, números y caracteres especiales
              </li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-8">
          <p className="text-slate-600">
            ¿Ya tienes cuenta?{' '}
            <Link to="/auth/login" className="text-violet-500 font-semibold hover:underline">
              Inicia sesión aquí
            </Link>
          </p>
        </div>

        <div className="text-center mt-6">
          <Link to="/" className="text-slate-500 hover:text-slate-700 text-sm">
            ← Volver a inicio
          </Link>
        </div>
      </div>
    </div>
  )
}
