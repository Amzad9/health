<script setup lang="ts">
import { ref, computed, onMounted, onBeforeUnmount } from 'vue'
import { useRouter } from '#imports'

const isSupported = ref(false)
const listening = ref(false)
const transcript = ref('')
const statusMessage = ref('Tap the mic to ask about services or appointments.')
const keepListening = ref(false)

const router = useRouter()

const sectionScrollTargets: Record<string, string> = {
  about: '#about',
  services: '#services',
  testimonials: '#testimonials',
  faqs: '#faqs'
}

const getScrollAmount = () => {
  if (typeof window === 'undefined') {
    return 600
  }
  return Math.max(400, window.innerHeight * 0.6)
}

const scrollByAmount = (distance: number) => {
  if (typeof window === 'undefined') {
    return false
  }
  window.scrollBy({ top: distance, behavior: 'smooth' })
  return true
}

const scrollToSection = (selector: string) => {
  if (typeof window === 'undefined') {
    return false
  }
  const target = document.querySelector<HTMLElement>(selector)
  if (!target) {
    return false
  }
  target.scrollIntoView({ behavior: 'smooth', block: 'start' })
  return true
}

const navigateToRoute = (path: string) => {
  router.push(path)
}

const handleVoiceCommand = (command: string) => {
  const normalized = command.trim().toLowerCase()
  if (!normalized) {
    statusMessage.value = 'No command heard—try again.'
    return false
  }

  if (normalized.includes('scroll down') || normalized.includes('go down')) {
    if (scrollByAmount(getScrollAmount())) {
      statusMessage.value = 'Scrolling down.'
      return true
    }
  }

  if (normalized.includes('scroll up') || normalized.includes('go up')) {
    if (scrollByAmount(-getScrollAmount())) {
      statusMessage.value = 'Scrolling up.'
      return true
    }
  }

  if (normalized.includes('scroll to top') || normalized.includes('top of the page')) {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: 0, behavior: 'smooth' })
      statusMessage.value = 'Jumped to the top.'
      return true
    }
  }

  if (normalized.includes('scroll to bottom') || normalized.includes('bottom of the page')) {
    if (typeof window !== 'undefined') {
      window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' })
      statusMessage.value = 'Scrolling to the bottom.'
      return true
    }
  }

  for (const [keyword, selector] of Object.entries(sectionScrollTargets)) {
    if (normalized.includes(keyword)) {
      const scrolled = scrollToSection(selector)
      statusMessage.value = scrolled ? `Navigated to ${keyword}.` : `Unable to find the ${keyword} section.`
      return scrolled
    }
  }

  if (normalized.includes('blog')) {
    navigateToRoute('/blog')
    statusMessage.value = 'Opening the blog.'
    return true
  }

  if (normalized.includes('contact') || normalized.includes('consultation') || normalized.includes('book')) {
    navigateToRoute('/contact')
    statusMessage.value = 'Opening the contact form.'
    return true
  }

  if (normalized.includes('home') || normalized.includes('hero') || normalized.includes('landing')) {
    navigateToRoute('/')
    statusMessage.value = 'Returning to the home page.'
    return true
  }

  statusMessage.value = 'Command not recognized yet. Try “scroll down” or “open blog”.'
  return false
}

let recognition: any = null

const displayMessage = computed(() => {
  if (!isSupported.value) {
    return 'Voice access is not supported on this browser.'
  }
  if (listening.value) {
    return 'Listening… speak clearly into your mic.'
  }
  if (transcript.value) {
    return `Heard: "${transcript.value}". Tap again to ask another question.`
  }
  return statusMessage.value
})

const initializeRecognition = () => {
  if (typeof window === 'undefined') return
  const SpeechRecognition =
    (window as typeof globalThis & { SpeechRecognition?: typeof window.SpeechRecognition })[
      'SpeechRecognition'
    ] || (window as typeof globalThis & { webkitSpeechRecognition?: typeof window.webkitSpeechRecognition })[
      'webkitSpeechRecognition'
    ]

  if (!SpeechRecognition) {
    isSupported.value = false
    statusMessage.value = 'Voice access is not supported in this browser.'
    return
  }

  recognition = new SpeechRecognition()
  recognition.continuous = true
  recognition.interimResults = true
  recognition.lang = 'en-US'

  recognition.onstart = () => {
    listening.value = true
    statusMessage.value = 'Listening…'
  }

  recognition.onend = () => {
    listening.value = false
    if (keepListening.value) {
      startListening()
      return
    }
    if (!transcript.value) {
      statusMessage.value = 'Tap the mic to try again.'
    }
  }

  recognition.onresult = (event: SpeechRecognitionEvent) => {
    const recorded = Array.from(event.results)
      .map(result => result[0].transcript)
      .join(' ')
      .trim()
    transcript.value = recorded

    if (event.results[event.resultIndex].isFinal) {
      handleVoiceCommand(recorded)
    }
  }

  recognition.onspeechend = () => {
    if (listening.value) {
      statusMessage.value = transcript.value
        ? 'Command captured. Listening for more when you are ready.'
        : 'No voice detected—speak again or tap to stop.'
    }
  }

  recognition.onerror = (event: SpeechRecognitionErrorEvent) => {
    statusMessage.value = `Voice recognition error: ${event.error}`
    listening.value = false
  }

  isSupported.value = true
}

const startListening = () => {
  if (!recognition) {
    statusMessage.value = 'Voice access is not available in this environment.'
    return
  }
  transcript.value = ''
  keepListening.value = true
  recognition.start()
}

const stopListening = () => {
  keepListening.value = false
  recognition?.stop()
}

const toggleListening = () => {
  if (!isSupported.value) return
  if (listening.value) {
    stopListening()
  } else {
    startListening()
  }
}

onMounted(() => {
  initializeRecognition()
})

onBeforeUnmount(() => {
  recognition?.stop()
})
</script>

<template>
  <div class="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4" role="complementary" aria-label="Quick contact options">
    <!-- Call Button -->
    <a
      href="tel:+1234567890"
      class="group w-16 h-16 bg-gradient-to-br from-green-500 to-green-600 text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl hover:from-green-600 hover:to-green-700 transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 transform hover:-translate-y-1"
      aria-label="Call us"
      title="Call us now"
    >
      <svg class="w-7 h-7 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
      <span class="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full mr-2 px-3 py-1.5 bg-gray-900 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
        Call Now
      </span>
    </a>
    
    <!-- WhatsApp Button -->
    <a
      href="https://wa.me/1234567890"
      target="_blank"
      rel="noopener noreferrer"
      class="group w-16 h-16 bg-gradient-to-br from-[#25D366] to-[#20BA5A] text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-[#25D366] focus:ring-offset-2 transform hover:-translate-y-1"
    aria-label="Contact us on WhatsApp"
    title="WhatsApp us"
  >
      <svg class="w-7 h-7 group-hover:scale-110 transition-transform" fill="currentColor" viewBox="0 0 24 24">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
      </svg>
    <span class="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full mr-2 px-3 py-1.5 bg-gray-900 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      WhatsApp
    </span>
  </a>
  
  <!-- Voice Assistant Button -->
  <button
    type="button"
    class="group relative w-16 h-16 bg-gradient-to-br from-primary-500 to-accent-500 text-white rounded-2xl flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:ring-offset-2 transform hover:-translate-y-1 disabled:bg-gray-400 disabled:text-white disabled:from-gray-400 disabled:to-gray-500"
    @click="toggleListening"
    :aria-pressed="listening"
    :aria-label="listening ? 'Stop voice assistant' : 'Start voice assistant'"
    :disabled="!isSupported"
  >
    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 1.75a3.75 3.75 0 013.75 3.75v5.5a3.75 3.75 0 11-7.5 0v-5.5A3.75 3.75 0 0112 1.75zm0 15.5a6 6 0 006-6h-1.5a4.5 4.5 0 01-9 0H6a6 6 0 006 6zm-2.5 2.75a2.5 2.5 0 005 0h-5z" />
    </svg>
    <span class="absolute -left-2 top-1/2 -translate-y-1/2 -translate-x-full mr-2 px-3 py-1.5 bg-gray-900 text-white text-sm font-semibold rounded-lg opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
      Voice Assistant
    </span>
  </button>

  <div
    class="bg-gray-900/90 text-white text-xs px-3 py-2 rounded-2xl shadow-lg max-w-[240px] text-center backdrop-blur-sm"
    aria-live="polite"
  >
    <p>{{ displayMessage }}</p>
    <p v-if="!listening && transcript" class="mt-1 text-[0.65rem] text-primary-200 truncate">
      You said: {{ transcript }}
    </p>
  </div>
</div>
</template>
