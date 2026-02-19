import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

const GROQ_API_KEY = Deno.env.get("GROQ_API_KEY")
const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions"

serve(async (req) => {
  if (req.method !== "POST") {
    return new Response("Method not allowed", { status: 405 })
  }

  try {
    const { destination, startDate, endDate, budget, currency, preferences } =
      await req.json()

    const prompt = `
Eres un planificador de viajes experto. Genera un itinerario para:

Destino: ${destination}
Fechas: ${startDate} a ${endDate}
Presupuesto: ${budget} ${currency}
Preferencias: ${preferences}

Responde SOLO con JSON válido (sin markdown):
{
  "days": [
    {
      "day": 1,
      "title": "Título",
      "activities": [
        { "time": "09:00", "activity": "Actividad", "cost": 0 }
      ]
    }
  ],
  "totalCost": 0
}
    `

    const groqResponse = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        "Authorization": `Bearer ${GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3-70b-versatile",
        messages: [{ role: "user", content: prompt }],
        max_tokens: 2000,
        temperature: 0.7,
      }),
    })

    if (!groqResponse.ok) {
      throw new Error(`Groq error: ${groqResponse.statusText}`)
    }

    const groqData = await groqResponse.json()
    const content = groqData.choices[0].message.content
    const itinerary = JSON.parse(content)

    return new Response(JSON.stringify(itinerary), {
      headers: { "Content-Type": "application/json" },
    })
  } catch (error) {
    console.error("Error:", error)
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    })
  }
})