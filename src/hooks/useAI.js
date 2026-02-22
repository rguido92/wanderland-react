import { useState, useCallback } from "react";

export default function useAI() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const FUNCTION_URL = import.meta.env.VITE_FUNCTION_URL;

    const generateItinerary = useCallback(async (tripData, signal) => {
        if (!FUNCTION_URL) {
            const err = new Error("VITE_FUNCTION_URL no está configurada");
            setError(err.message);
            throw err;
        }

        setLoading(true);
        setError(null);

        const timeoutId = setTimeout(() => {
            if (!signal?.aborted) {
                const err = new Error("La solicitud tardó demasiado tiempo");
                setError(err.message);
                throw err;
            }
        }, 60000);

        try {
            const response = await fetch(FUNCTION_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    destination: tripData.destination,
                    startDate: tripData.startDate,
                    endDate: tripData.endDate,
                    budget: tripData.budget,
                    currency: tripData.currency,
                    preferences: tripData.preferences,
                }),
                signal,
            })

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            
            const itinerary = await response.json();
            return itinerary;
        } catch (err) {
            clearTimeout(timeoutId);
            if (err.name === 'AbortError') {
                setError("Solicitud cancelada");
            } else {
                setError(err.message);
            }
            throw err;
        } finally {
            setLoading(false);
        }
    }, [FUNCTION_URL])
    
    return { loading, error, generateItinerary };
}
