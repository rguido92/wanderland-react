import { Link } from 'react-router-dom'
import { Plus, Trash2 } from 'lucide-react'
import { useAuthContext } from '../context/AuthContext'
import { useTrip } from '../hooks/useTrip'
import { useEffect } from 'react'

export default function Dashboard() {
  const { user } = useAuthContext()
  const { trips, loading, fetchUserTrips, deleteTrip } = useTrip()

  useEffect(() => {
    if (user) {
      fetchUserTrips(user.id)
    }
  }, [user, fetchUserTrips])

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50 via-orange-50 to-amber-50 flex items-center justify-center">
        <div className="text-2xl font-bold text-slate-700">Cargando viajes...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-orange-50 to-amber-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-12">
          <div>
            <h1 className="text-4xl font-bold text-slate-800 mb-2">Mis Viajes</h1>
            <p className="text-slate-600">Gestiona todos tus itinerarios en un solo lugar</p>
          </div>
          <Link
            to="/new-trip"
            className="bg-gradient-to-r from-rose-500 to-orange-400 text-white px-6 py-3 rounded-xl font-semibold flex items-center gap-2 hover:shadow-lg hover:shadow-rose-500/25 transition"
          >
            <Plus size={20} />
            Nuevo Viaje
          </Link>
        </div>

        {trips.length === 0 ? (
          <div className="text-center py-20">
            <div className="text-7xl mb-6">🧳</div>
            <h3 className="text-2xl font-bold text-slate-800 mb-2">No tienes viajes aún</h3>
            <p className="text-slate-600 mb-8">Crea tu primer viaje para comenzar a planificar</p>
            <Link
              to="/new-trip"
              className="bg-gradient-to-r from-rose-500 to-orange-400 text-white px-8 py-3 rounded-xl font-semibold inline-block hover:shadow-lg hover:shadow-rose-500/25 transition"
            >
              Crear primer viaje
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {trips.map((trip) => (
              <Link
                key={trip.id}
                to={`/trip/${trip.id}`}
                className="bg-white/90 backdrop-blur rounded-2xl p-6 hover:shadow-xl transition border border-rose-100 cursor-pointer"
              >
                <h3 className="text-xl font-bold text-slate-800 mb-2">{trip.title || 'Viaje sin título'}</h3>
                <p className="text-slate-600 mb-4">{trip.destination}</p>
                <p className="text-sm text-slate-500 mb-4">
                  {trip.start_date} - {trip.end_date}
                </p>
                <button
                  onClick={(e) => {
                    e.preventDefault()
                    deleteTrip(trip.id, user.id)
                  }}
                  className="text-red-500 hover:text-red-700 flex items-center gap-2 text-sm font-medium"
                >
                  <Trash2 size={16} />
                  Eliminar
                </button>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
