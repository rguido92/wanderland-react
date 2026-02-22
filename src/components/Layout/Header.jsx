import { Link , useNavigate} from 'react-router-dom'
import { Menu, LogOut, User } from 'lucide-react'
import { useState } from 'react'
import { useAuthContext } from '../../context/AuthContext'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuthContext()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-rose-100">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold bg-gradient-to-r from-rose-500 to-orange-500 bg-clip-text text-transparent">
          🌅 Wanderland
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-slate-600 hover:text-rose-500 transition font-medium">
            Inicio
          </Link>
          {user && (
            <Link to="/dashboard" className="text-slate-600 hover:text-rose-500 transition font-medium">
              Mis Viajes
            </Link>
          )}

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-slate-600 flex items-center gap-2 text-sm">
                <User size={18} className="text-rose-400" />
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-rose-100 text-rose-600 px-4 py-2 rounded-lg hover:bg-rose-200 transition flex items-center gap-2 font-medium"
              >
                <LogOut size={18} />
                Salir
              </button>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="bg-gradient-to-r from-rose-500 to-orange-400 text-white px-5 py-2.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition"
            >
              Iniciar Sesión
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-600"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-rose-100 px-4 py-4 space-y-3">
          <Link to="/" className="block text-slate-600 hover:text-rose-500 font-medium py-2">
            Inicio
          </Link>
          {user && (
            <Link to="/dashboard" className="block text-slate-600 hover:text-rose-500 font-medium py-2">
              Mis Viajes
            </Link>
          )}
          {user ? (
            <>
              <div className="text-slate-600 py-2">
                <span className="flex items-center gap-2">
                  <User size={18} className="text-rose-400" />
                  {user.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="w-full bg-rose-100 text-rose-600 px-4 py-2 rounded-lg hover:bg-rose-200 transition flex items-center justify-center gap-2 font-medium"
              >
                <LogOut size={18} />
                Salir
              </button>
            </>
          ) : (
            <Link
              to="/auth/login"
              className="block w-full bg-gradient-to-r from-rose-500 to-orange-400 text-white px-4 py-2.5 rounded-xl text-center font-semibold"
            >
              Iniciar Sesión
            </Link>
          )}
        </div>
      )}
    </header>
  )
}
