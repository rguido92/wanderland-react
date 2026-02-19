import { useState, useCallback } from "react";

export default function useAI() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const FUNCTION_URL = import.meta.env.VITE_FUNCTION_URL + '/generate-itinerary';

    const generateItinerary = useCallback(async (tripData) => {
        setLoading(true);
        setError(null);

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
            })
            if (!response.ok) {
                throw new Error(`Error: ${response.statusText}`);
            }
            const itinerary = await response.json();
            return itinerary;
        } catch (err) {
            setError(err.message);
           throw err;
        } finally {
            setLoading(false);
        }
    }, [FUNCTION_URL])
    return { loading, error, generateItinerary };

}