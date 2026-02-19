import { Link } from 'react-router-dom'
import { ArrowRight, CheckCircle2, Zap, Shield, BarChart3 } from 'lucide-react'

export default function Landing() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative overflow-hidden bg-gradient-to-br from-white via-blue-50 to-white">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-100/20 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-block mb-6">
                <span className="px-3 py-1 text-sm font-semibold text-primary bg-blue-100 rounded-full">
                  Impulsado por IA
                </span>
              </div>

              <h1 className="text-6xl font-bold text-gray-900 mb-6 leading-tight">
                Planifica viajes perfectos en segundos
              </h1>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Wanderland genera itinerarios personalizados usando inteligencia artificial. 
                Ahorra tiempo, dinero y estrés en la planificación de tu viaje.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/auth/signup"
                  className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-secondary transition flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Comenzar Gratis
                  <ArrowRight size={20} />
                </Link>
                
                  href="#features"
                  className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-blue-50 transition"
                <a>
                  Conocer más
                </a>
              </div>

              <div className="mt-12 grid grid-cols-3 gap-6">
                <div>
                  <div className="text-3xl font-bold text-primary">100%</div>
                  <div className="text-sm text-gray-600">Gratis para siempre</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">10K+</div>
                  <div className="text-sm text-gray-600">Destinos disponibles</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-primary">&lt;2min</div>
                  <div className="text-sm text-gray-600">Para planificar</div>
                </div>
              </div>
            </div>

            <div className="hidden md:block">
              <div className="bg-gradient-to-br from-primary to-accent rounded-2xl p-8 text-white shadow-2xl">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold mb-2">Itinerarios automáticos</h3>
                      <p className="text-blue-100 text-sm">Generados en segundos según tus preferencias</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold mb-2">Optimización inteligente</h3>
                      <p className="text-blue-100 text-sm">Presupuesto, tiempo y distancias optimizadas</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <CheckCircle2 className="flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h3 className="font-bold mb-2">Edición flexible</h3>
                      <p className="text-blue-100 text-sm">Ajusta cualquier detalle en tiempo real</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features */}
      <div id="features" className="py-24 bg-white border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Características principales
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Herramientas poderosas diseñadas para hacer tu viaje extraordinario
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <Zap className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Generación IA</h3>
              <p className="text-gray-600">
                Algoritmos de inteligencia artificial que aprenden de millones de itinerarios para crear el tuyo perfecto.
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <Shield className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% Seguro</h3>
              <p className="text-gray-600">
                Tus datos están protegidos con encriptación de grado empresarial. Privacidad garantizada.
              </p>
            </div>

            <div className="p-8 border border-gray-200 rounded-xl hover:shadow-lg transition">
              <BarChart3 className="text-primary mb-4" size={32} />
              <h3 className="text-xl font-bold text-gray-900 mb-3">Análisis inteligente</h3>
              <p className="text-gray-600">
                Visualiza gastos, distancias y tiempo. Toma decisiones informadas sobre tu viaje.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-24 bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Cómo funciona
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                1
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Cuéntanos
              </h3>
              <p className="text-gray-600">
                Destino, fechas, presupuesto y tus preferencias de viaje
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                2
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                IA genera
              </h3>
              <p className="text-gray-600">
                Nuestros algoritmos crean un itinerario completo en segundos
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-lg">
                3
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">
                Viaja
              </h3>
              <p className="text-gray-600">
                Edita, comparte y disfruta tu viaje perfecto sin estrés
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-24 bg-gradient-to-r from-primary to-secondary text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold mb-6">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-xl mb-10 opacity-90">
            Crea tu primer viaje totalmente gratis. Sin tarjeta de crédito requerida.
          </p>
          <Link
            to="/auth/signup"
            className="bg-white text-primary px-10 py-4 rounded-lg font-bold hover:bg-gray-100 transition inline-flex items-center gap-2 shadow-xl hover:shadow-2xl"
          >
            Comenzar ahora
            <ArrowRight size={20} />
          </Link>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="font-semibold text-white mb-2">Wanderland</p>
          <p className="text-sm">Planificación inteligente de viajes</p>
          <p className="text-xs mt-6">&copy; 2026 Wanderland. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  )
}