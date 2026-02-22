import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuthContext } from '../context/AuthContext'
import { useTrip } from '../hooks/useTrip'
import useAI from '../hooks/useAI'
import { ArrowRight, Loader2, Sparkles } from 'lucide-react'

export default function NewTrip() {
  const { user } = useAuthContext()
  const { createTrip, loading: tripLoading } = useTrip()
  const { generateItinerary, error: aiError } = useAI()
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    title: '',
    destination: '',
    startDate: '',
    endDate: '',
    budget: '',
    currency: 'USD',
    preferences: ''
  })
  const [error, setError] = useState('')
  const [generating, setGenerating] = useState(false)

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')

    if (!formData.destination || !formData.startDate || !formData.endDate) {
      setError('Por favor completa los campos obligatorios')
      return
    }

    if (new Date(formData.endDate) < new Date(formData.startDate)) {
      setError('La fecha de fin debe ser posterior a la de inicio')
      return
    }

    try {
      setGenerating(true)
      
      let itinerary = null
      try {
        itinerary = await generateItinerary({
          destination: formData.destination,
          startDate: formData.startDate,
          endDate: formData.endDate,
          budget: formData.budget,
          currency: formData.currency,
          preferences: formData.preferences
        })
      } catch (aiErr) {
        console.warn('AI generation failed, creating trip without itinerary:', aiErr)
      }

      const trip = await createTrip({
        ...formData,
        itinerary
      }, user.id)

      navigate(`/trip/${trip.id}`)
    } catch (err) {
      setError(err.message)
    } finally {
      setGenerating(false)
    }
  }

  const isLoading = tripLoading || generating

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 via-orange-50 to-amber-50 py-12">
      <div className="max-w-2xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-rose-400 to-orange-400 rounded-2xl mb-4 shadow-lg shadow-rose-200">
            <Sparkles className="text-white" size={32} />
          </div>
          <h1 className="text-4xl font-bold text-slate-800 mb-2">Crear Nuevo Viaje</h1>
          <p className="text-slate-600">Cuéntanos sobre tu próximo destino</p>
        </div>

        <div className="bg-white/90 backdrop-blur rounded-2xl shadow-xl p-8 border border-rose-100">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Título del viaje
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="Mi viaje a París"
                className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Destino *
              </label>
              <input
                type="text"
                name="destination"
                value={formData.destination}
                onChange={handleChange}
                placeholder="París, Francia"
                required
                className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white"
              />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Fecha de inicio *
                </label>
                <input
                  type="date"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Fecha de fin *
                </label>
                <input
                  type="date"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Presupuesto
                </label>
                <input
                  type="number"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  placeholder="1000"
                  className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-slate-700 mb-2">
                  Moneda
                </label>
                <select
                  name="currency"
                  value={formData.currency}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="GBP">GBP</option>
                  <option value="MXN">MXN</option>
                  <option value="ARS">ARS</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">
                Preferencias
              </label>
              <textarea
                name="preferences"
                value={formData.preferences}
                onChange={handleChange}
                placeholder="¿Te gusta la naturaleza, la cultura, la comida? ¿Prefieres hoteles económicos o de lujo?"
                rows={3}
                className="w-full px-4 py-3 border border-rose-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-400 focus:border-transparent bg-white resize-none"
              />
            </div>

            {error && (
              <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-xl text-sm">
                {error}
              </div>
            )}

            {aiError && (
              <div className="bg-amber-50 border border-amber-200 text-amber-700 px-4 py-3 rounded-xl text-sm">
                Nota: No se pudo generar el itinerario con IA. Podrás editarlo manualmente.
              </div>
            )}

            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-rose-500 to-orange-400 text-white py-3.5 rounded-xl font-semibold hover:shadow-lg hover:shadow-rose-500/25 transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="animate-spin" size={20} />
                  {generating ? 'Generando itinerario con IA...' : 'Creando viaje...'}
                </>
              ) : (
                <>
                  <Sparkles size={20} />
                  Crear viaje con IA
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
