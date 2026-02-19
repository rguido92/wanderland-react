import { Link , useNavigate} from 'react-router-dom'
import { Menu,LogOut,User } from 'lucide-react'
import { useState } from 'react'
import { useAuth } from '../../hooks/useAuth' 

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/')
  }

 return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold text-primary">
          🌍 Wanderland
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 items-center">
          <Link to="/" className="text-gray-700 hover:text-primary transition">
            Inicio
          </Link>
          {user && (
            <Link to="/dashboard" className="text-gray-700 hover:text-primary transition">
              Mis Viajes
            </Link>
          )}

          {user ? (
            <div className="flex items-center gap-4">
              <span className="text-gray-700 flex items-center gap-2">
                <User size={18} />
                {user.email}
              </span>
              <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition flex items-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>
            </div>
          ) : (
            <Link
              to="/auth/login"
              className="bg-primary text-white px-4 py-2 rounded-lg hover:bg-primary/90 transition"
            >
              Iniciar Sesión
            </Link>
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden"
        >
          <Menu size={24} />
        </button>
      </nav>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t px-4 py-4 space-y-3">
          <Link to="/" className="block text-gray-700 hover:text-primary">
            Inicio
          </Link>
          {user && (
            <Link to="/dashboard" className="block text-gray-700 hover:text-primary">
              Mis Viajes
            </Link>
          )}
          {user ? (
            <>
              <div className="text-gray-700">
                <span className="flex items-center gap-2">
                  <User size={18} />
                  {user.email}
                </span>
              </div>
              <button
                onClick={handleLogout}
                className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition flex items-center justify-center gap-2"
              >
                <LogOut size={18} />
                Logout
              </button>
            </>
          ) : (
            <Link
              to="/auth/login"
              className="block w-full bg-primary text-white px-4 py-2 rounded-lg text-center hover:bg-primary/90 transition"
            >
              Iniciar Sesión
            </Link>
          )}
        </div>
      )}
    </header>
  )
}