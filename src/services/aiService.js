import { fallbackMessages } from './fallbackMessages'

export async function getAiMessage(prompt) {
  try {
    const response = await fetch(
      "https://api.groq.com/openai/v1/chat/completions",
      {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${API_KEY}`,
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          model: "llama-3.1-8b-instant",
          messages: [
            { role: "system", content: "You are a supportive mental health companion." },
            { role: "user", content: prompt }
          ]
        })
      }
    )

    const result = await response.json()

    // Check if the AI gave us a real answer
    if (result.choices && result.choices[0]?.message?.content) {
      return result.choices[0].message.content
    }

    throw new Error("Invalid AI response")

  } catch (error) {
    console.warn("AI API failed or was blocked, using fallback:", error)

    // Pick a random message from your local fallbackMessages.js
    const random = fallbackMessages[Math.floor(Math.random() * fallbackMessages.length)]
    return random
  }
}