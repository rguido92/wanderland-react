/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext } from "react"
import { useAuth } from "../hooks/useAuth"

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const auth = useAuth()
  
  const value = {
    user: auth.user,
    loading: auth.loading,
    error: auth.error,
    register: auth.register,
    login: auth.login,
    loginWithGoogle: auth.loginWithGoogle,
    logout: auth.logout,
  }

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuthContext() {
  const context = useContext(AuthContext)
  if (!context) {
    throw new Error("useAuthContext must be used within AuthProvider")
  }
  return context
}
