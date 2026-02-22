import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom'
import { useAuthContext } from './context/AuthContext'
import Landing from './pages/Landing'
import Dashboard from './pages/Dashboard'
import NewTrip from './pages/NewTrip'
import Login from './pages/Auth/Login'
import Signup from './pages/Auth/Signup'
import Layout from './components/Layout/Layout'
import ProtectedRoute from './components/ProtectedRoute'

export default function App() {

  const { user, loading } = useAuthContext()
  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-2xl font-bold">Cargando...</div>
      </div>
    )
  }
  return (
    <Router>
      <Routes>
        {/*Public routes */}
        <Route path="/" element={user ? <Navigate to="/dashboard" /> : <Landing />} />
        <Route path="/auth/login" element={user ? <Navigate to="/dashboard" /> : <Login />} />
        <Route path="/auth/signup" element={user ? <Navigate to="/dashboard" /> : <Signup />} />
        {/*Protected routes */}
        <Route element={<Layout />}>
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
          <Route
            path="/new-trip"
            element={
              <ProtectedRoute>
                <NewTrip />
              </ProtectedRoute>
            } 
          />
          <Route
            path="/trip/:id"
            element={
              <ProtectedRoute>
                <Dashboard />
              </ProtectedRoute>
            } 
          />
        </Route>
        {/* 404 */}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  )
}