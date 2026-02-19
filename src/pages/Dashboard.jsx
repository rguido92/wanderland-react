import { Link } from "react-router-dom";
export default function Dashboard() {
    return (
        <div className="max-w-7xl mx-auto px-4 py-12">
            <h1 className="text-4xl font-bold mb-8">Mis Viajes</h1>
            <div className="text-center py-12">
                <p className="text-gray-600 mb-4">No tienes viajes aún</p>
                <Link
                    to="/new-trip"
                    className="bg-primary text-white px-6 py-3 rounded-lg inline-block"
                >
                    Crear primer viaje
                </Link>
            </div>
        </div>
    )
}