import { Link } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { useState } from 'react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <nav className="max-w-7xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-primary">
          🌍 Wanderland
        </Link>
        <ul className="hidden md:flex gap-8">
          <li><Link to="/dashboard" className="hover:text-primary">Mis Viajes</Link></li>
          <li><button className="bg-primary text-white px-4 py-2 rounded">Iniciar Sesión</button></li>
        </ul>
        <button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
          <Menu size={24} />
        </button>
      </nav>
    </header>
  )
}