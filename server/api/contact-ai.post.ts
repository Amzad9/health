import { readBody, createError } from 'h3'

const fallbackSuggestion = (form: {
  name?: string
  email?: string
  phone?: string
  message?: string
}) => {
  const { name, email, phone, message } = form
  const trimmed = (message ?? '').trim()
  const intro = name ? `Hi ${name}, thank you for reaching out!` : 'Hi there, thank you for reaching out!'
  return (
    `${intro}\n\n` +
    `${trimmed}\n\n` +
    `Please let us know your preferred time window, and we will follow up at ${email || 'your email'} or ${phone || 'your phone number'} soon.`.trim()
  )
}

export default defineEventHandler(async (event) => {
  const payload = await readBody(event)
  const { message } = payload ?? {}
  if (!message || !message.trim()) {
    throw createError({ statusCode: 400, statusMessage: 'Message is required for AI suggestions.' })
  }

  const openAiKey = process.env.OPENAI_API_KEY
  const suggestionPrompt = `
You are a friendly but professional health concierge assistant.
Use the message below to craft a polished version of the inquiry that keeps the intent intact and highlights any urgency or appointment requests.
Keep it short (2–3 sentences) and make sure it sounds human, compassionate, and clear.

Message:
${message.trim()}

Patient Name: ${payload.name ?? 'Not provided'}
Email: ${payload.email ?? 'Not provided'}
Phone: ${payload.phone ?? 'Not provided'}
`

  if (!openAiKey) {
    return {
      suggestion: fallbackSuggestion(payload)
    }
  }

  const response = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${openAiKey}`
    },
    body: JSON.stringify({
      model: 'gpt-3.5-turbo',
      messages: [
        {
          role: 'system',
          content: 'You are helpful, concise, and professional.'
        },
        {
          role: 'user',
          content: suggestionPrompt
        }
      ],
      temperature: 0.6,
      max_tokens: 220
    })
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw createError({
      statusCode: 502,
      statusMessage: `OpenAI error: ${errorText}`
    })
  }

  const data = await response.json()
  const suggestion = (data?.choices?.[0]?.message?.content ?? '').trim()

  return {
    suggestion: suggestion || fallbackSuggestion(payload),
    source: 'openai'
  }
})

