import { useState, useEffect } from "react";
import { supabase } from "../lib/supabase";
export function useAuth() {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Check for existing session on mount
        const checkAuth = async () => {
            try {
                const { data: { session } } = await supabase.auth.getSession()
                setUser(session?.user || null);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }
        checkAuth()

        // Listen for auth state changes
        const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
            setUser(session?.user || null);
        });
        return () => subscription.unsubscribe();
    }, [])

    const register = async (email, password) => {
        try {
            setError(null)
            const { data, error: err } = await supabase.auth.signUp({ email, password })
            if (err) throw err
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    }

    const login = async (email, password) => {
        try {
            setError(null)
            const { data, error: err } = await supabase.auth.signInWithPassword({ email, password })
            if (err) throw err
            setUser(data.user);
            return data;
        } catch (err) {
            setError(err.message);
            throw err;
        }
    }

    const loginWithGoogle = async () => {
        try {
            setError(null)
            const { data, error: err } = await supabase.auth.signInWithOAuth({
                provider: 'google', options: {
                    redirectTo: `${window.location.origin}/`,
                },
            })
            if (err)
                throw err;
            return data
        } catch (err) {
            setError(err.message);
            throw err;
        }
    }

    // Ensure the redirect URL is correct})


    const logout = async () => {
        try {
            setError(null)
            const { error: err } = await supabase.auth.signOut();
            if (err) throw err
        } catch (err) {
            setError(err.message);
            throw err;
        }
    }
    return { user, loading, error, register, login, loginWithGoogle, logout };
}