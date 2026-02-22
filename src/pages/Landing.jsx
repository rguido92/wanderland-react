import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3, MapPin, Sparkles, Plane } from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-cream via-amber-50 to-rose-50">
      {/* Hero */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-gradient-to-br from-rose-300 to-orange-200 rounded-full blur-3xl opacity-60"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-violet-200 to-rose-200 rounded-full blur-3xl opacity-60"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="px-5 py-2.5 text-sm font-bold text-rose-700 bg-rose-100 rounded-full border border-rose-200">
                  ✨ Impulsado por IA
                </span>
              </div>

              <h1 className="text-5xl md:text-6xl font-bold text-slate-800 mb-6 leading-tight">
                Planifica viajes perfectos en segundos
              </h1>

              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                Wanderland genera itinerarios personalizados usando inteligencia artificial. 
                Ahorra tiempo, dinero y estrés en la planificación de tu viaje.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/auth/signup"
                  className="bg-gradient-to-r from-rose-500 via-rose-600 to-orange-400 text-white px-8 py-3.5 rounded-xl font-bold hover:shadow-xl hover:shadow-rose-500/25 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
                >
                  Comenzar Gratis
                  <ArrowRight size={20} />
                </Link>
                
                <Link
                  to="/"
                  onClick={(e) => {
                    e.preventDefault()
                    document.getElementById('features')?.scrollIntoView({ behavior: 'smooth' })
                  }}
                  className="border-2 border-slate-300 text-slate-700 bg-white/80 backdrop-blur px-8 py-3.5 rounded-xl font-semibold hover:bg-white hover:border-slate-400 transition flex items-center justify-center"
                >
                  Conocer más
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-rose-500">100%</div>
                  <div className="text-sm text-slate-500">Gratis siempre</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-orange-500">10K+</div>
                  <div className="text-sm text-slate-500">Destinos</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-amber-500">&lt;2min</div>
                  <div className="text-sm text-slate-500">Para planificar</div>
                </div>
              </div>
            </div>

            <div className="hidden md:block relative">
              <div className="bg-gradient-to-br from-white/90 to-rose-50/80 backdrop-blur-xl rounded-3xl p-8 border border-white/60 shadow-2xl shadow-rose-200/50">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-rose-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-rose-500" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">Itinerarios automáticos</h3>
                      <p className="text-slate-500 text-sm">Generados en segundos según tus preferencias</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-orange-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-orange-500" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">Optimización inteligente</h3>
                      <p className="text-slate-500 text-sm">Presupuesto, tiempo y distancias optimizadas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-xl bg-amber-100 flex items-center justify-center flex-shrink-0">
                      <CheckCircle2 className="text-amber-500" size={22} />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-800 mb-1">Edición flexible</h3>
                      <p className="text-slate-500 text-sm">Ajusta cualquier detalle en tiempo real</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-20 bg-white/70 backdrop-blur-sm border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Características principales
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Herramientas poderosas diseñadas para hacer tu viaje extraordinario
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-rose-100 rounded-2xl hover:shadow-xl hover:shadow-rose-100/50 transition bg-white/80 backdrop-blur">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-rose-400 to-rose-600 flex items-center justify-center mb-5 shadow-lg shadow-rose-200">
                <Zap className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Generación IA</h3>
              <p className="text-slate-600">
                Algoritmos de inteligencia artificial que aprenden de millones de itinerarios para crear el tuyo perfecto.
              </p>
            </div>

            <div className="p-8 border border-orange-100 rounded-2xl hover:shadow-xl hover:shadow-orange-100/50 transition bg-white/80 backdrop-blur">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-orange-400 to-orange-600 flex items-center justify-center mb-5 shadow-lg shadow-orange-200">
                <Shield className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">100% Seguro</h3>
              <p className="text-slate-600">
                Tus datos están protegidos con encriptación de grado empresarial. Privacidad garantizada.
              </p>
            </div>

            <div className="p-8 border border-amber-100 rounded-2xl hover:shadow-xl hover:shadow-amber-100/50 transition bg-white/80 backdrop-blur">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-amber-400 to-amber-600 flex items-center justify-center mb-5 shadow-lg shadow-amber-200">
                <BarChart3 className="text-white" size={28} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">Análisis inteligente</h3>
              <p className="text-slate-600">
                Visualiza gastos, distancias y tiempo. Toma decisiones informadas sobre tu viaje.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-20 bg-gradient-to-b from-rose-50 via-orange-50 to-amber-50 border-t border-rose-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-4">
              Cómo funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-rose-400 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-rose-200">
                <MapPin className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Cuéntanos
              </h3>
              <p className="text-slate-600">
                Destino, fechas, presupuesto y tus preferencias de viaje
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-orange-400 to-orange-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-orange-200">
                <Sparkles className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                IA genera
              </h3>
              <p className="text-slate-600">
                Nuestros algoritmos crean un itinerario completo en segundos
              </p>
            </div>

            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-xl shadow-amber-200">
                <Plane className="text-white" size={36} />
              </div>
              <h3 className="text-xl font-bold text-slate-800 mb-3">
                Viaja
              </h3>
              <p className="text-slate-600">
                Edita, comparte y disfruta tu viaje perfecto sin estrés
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-20 bg-gradient-to-r from-rose-500 via-orange-500 to-amber-500">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-xl text-white/90 mb-10">
            Crea tu primer viaje totalmente gratis. Sin tarjeta de crédito requerida.
          </p>
          <Link
            to="/auth/signup"
            className="inline-block bg-white text-rose-600 px-10 py-4 rounded-xl font-bold hover:bg-rose-50 transition-all transform hover:-translate-y-1 shadow-xl hover:shadow-2xl"
          >
            Comenzar ahora
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-slate-800 py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">🌅</span>
              <div>
                <p className="font-bold text-white text-lg">Wanderland</p>
                <p className="text-slate-400 text-sm">Planificación inteligente de viajes</p>
              </div>
            </div>
            <div className="text-slate-400 text-sm">
              &copy; 2026 Wanderland. Todos los derechos reservados.
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
