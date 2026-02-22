import { useState, useCallback } from 'react'
import { supabase } from '../lib/supabase'

export function useTrip() {
  const [trips, setTrips] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  const fetchUserTrips = useCallback(async (userId) => {
    setLoading(true)
    setError(null)
    try {
      const { data, error: err } = await supabase
        .from('trips')
        .select('*')
        .eq('user_id', userId)
        .order('created_at', { ascending: false })
      
      if (err) throw err
      setTrips(data || [])
    } catch (err) {
      setError(err.message)
    } finally {
      setLoading(false)
    }
  }, [])

  const createTrip = useCallback(async (tripData, userId) => {
    setError(null)
    try {
      const { data, error: err } = await supabase
        .from('trips')
        .insert([{
          user_id: userId,
          destination: tripData.destination,
          title: tripData.title,
          start_date: tripData.startDate,
          end_date: tripData.endDate,
          budget: tripData.budget,
          currency: tripData.currency,
          preferences: tripData.preferences,
          itinerary: tripData.itinerary
        }])
        .select()
        .single()
      
      if (err) throw err
      
      if (data) {
        setTrips(prev => [data, ...prev])
      }
      return data
    } catch (err) {
      setError(err.message)
      throw err
    }
  }, [])

  const deleteTrip = useCallback(async (tripId, userId) => {
    setError(null)
    try {
      const { error: err } = await supabase
        .from('trips')
        .delete()
        .eq('id', tripId)
        .eq('user_id', userId)
      
      if (err) throw err
      
      setTrips(prev => prev.filter(t => t.id !== tripId))
    } catch (err) {
      setError(err.message)
      throw err
    }
  }, [])

  const updateTrip = useCallback(async (tripId, userId, updates) => {
    setError(null)
    try {
      const { data, error: err } = await supabase
        .from('trips')
        .update(updates)
        .eq('id', tripId)
        .eq('user_id', userId)
        .select()
        .single()
      
      if (err) throw err
      
      if (data) {
        setTrips(prev => prev.map(t => t.id === tripId ? data : t))
      }
      return data
    } catch (err) {
      setError(err.message)
      throw err
    }
  }, [])

  return {
    trips,
    loading,
    error,
    fetchUserTrips,
    createTrip,
    deleteTrip,
    updateTrip,
  }
}
