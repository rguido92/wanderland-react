import {Link} from 'react-router-dom';
export default function Landing() {
    return (
          <div>
            <section className='max-w-7xl mx-auto px-4 py-20 text-center'>
                <h1 className='text-4xl md:text-6xl font-bold mb-6'>Planifica tu próximo viaje con Wanderland</h1>
                <p className='text-xl text-gray-600 mb-8'>Descubre destinos únicos y crea recuerdos inolvidables</p>
                <Link to="/dashboard" className="bg-primary text-white px-6 py-3 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                    Comenzar
                </Link>
            </section>
          </div>
    )
}