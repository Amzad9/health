<template>
  <div class="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden">
    <!-- Background Decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-medical-100/20 rounded-full blur-3xl -ml-48 -mb-48"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-16">
        <div class="inline-block mb-4">
          <span class="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Contact Us
          </span>
        </div>
        <h1 class="section-title text-gray-900 mb-6">
          Get in Touch
          <span class="block text-gradient">With Our Team</span>
        </h1>
        <p class="section-subtitle">
          We're here to help! Reach out to book an appointment or ask any questions about our services
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-12">
        <!-- Contact Form -->
        <div class="card p-8 md:p-10">
          <h2 class="text-3xl font-bold text-gray-900 mb-8">Send Us a Message</h2>
          <form @submit.prevent="handleSubmit" class="space-y-5">
            <div>
              <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                Full Name <span class="text-red-500">*</span>
              </label>
              <input
                id="name"
                v-model="form.name"
                type="text"
                required
                class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-200"
                placeholder="Enter your full name"
                aria-required="true"
              />
            </div>
            
            <div>
              <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                Email Address <span class="text-red-500">*</span>
              </label>
              <input
                id="email"
                v-model="form.email"
                type="email"
                required
                class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-200"
                placeholder="your.email@example.com"
                aria-required="true"
              />
            </div>
            
            <div>
              <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                Phone Number <span class="text-red-500">*</span>
              </label>
              <input
                id="phone"
                v-model="form.phone"
                type="tel"
                required
                class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-200"
                placeholder="+1 (234) 567-890"
                aria-required="true"
              />
            </div>
            
            <div>
              <div class="flex items-center justify-between mb-2">
                <label for="message" class="text-sm font-semibold text-gray-700">
                  Message <span class="text-red-500">*</span>
                </label>
                <button
                  type="button"
                  class="text-sm font-semibold text-primary-600 hover:text-primary-500 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded"
                  @click="generateSuggestion"
                  :disabled="isGeneratingSuggestion"
                >
                  <span v-if="!isGeneratingSuggestion">Let AI polish</span>
                  <span v-else class="flex items-center gap-2">
                    <Icon name="heroicons-outline:arrow-path" class="w-4 h-4 animate-spin" />
                    Generating…
                  </span>
                </button>
              </div>
              <textarea
                id="message"
                v-model="form.message"
                rows="4"
                required
                class="w-full px-4 py-3.5 border-2 border-gray-200 rounded-xl focus:ring-2 focus:ring-primary-600 focus:border-primary-600 transition-all duration-200 resize-none"
                placeholder="Tell us how we can help you..."
                aria-required="true"
              ></textarea>
              <p class="mt-2 text-xs text-gray-500">
                {{ aiStatus }}
              </p>
            </div>

            <div
              v-if="aiSuggestion"
              class="mt-4 bg-gray-50 border border-dashed border-primary-200 rounded-2xl p-4 text-sm text-gray-800 space-y-3"
            >
              <p class="text-xs font-semibold uppercase tracking-[0.2em] text-gray-500">AI Suggested Message</p>
              <p class="leading-relaxed text-gray-700 whitespace-pre-line">{{ aiSuggestion }}</p>
              <button
                type="button"
                class="w-full btn-outline border-primary-300 text-primary-600 flex items-center justify-center gap-2"
                @click="applySuggestion"
              >
                <Icon name="heroicons-solid:check" class="w-4 h-4" />
                Use this suggestion
              </button>
            </div>
            
            <button
              type="submit"
              class="w-full btn-primary"
              :disabled="isSubmitting"
            >
              <span v-if="!isSubmitting" class="flex items-center justify-center">
                <span>Send Message</span>
                <Icon name="heroicons-solid:paper-airplane" class="w-5 h-5 ml-2" />
              </span>
              <span v-else class="flex items-center justify-center">
                <Icon name="heroicons-solid:arrow-path" class="w-5 h-5 mr-3 text-white animate-spin" />
                Sending...
              </span>
            </button>
          </form>
        </div>
        
        <!-- Contact Information -->
        <div class="space-y-8">
          <div>
            <h2 class="text-3xl font-bold text-gray-900 mb-8">Contact Information</h2>
            <div class="space-y-6">
              <div class="card p-6 flex items-start group hover:border-primary-300 transition-all duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="heroicons-solid:map-pin" class="w-7 h-7 text-white" />
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-900 text-lg mb-1">Address</h3>
                  <p class="text-gray-600 leading-relaxed">123 Health Street<br>Medical City, MC 12345<br>United States</p>
                </div>
              </div>
              
              <div class="card p-6 flex items-start group hover:border-primary-300 transition-all duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-medical-500 to-medical-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="heroicons-solid:phone" class="w-7 h-7 text-white" />
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-900 text-lg mb-1">Phone</h3>
                  <a href="tel:+1234567890" class="text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors">+1 (234) 567-890</a>
                </div>
              </div>
              
              <div class="card p-6 flex items-start group hover:border-primary-300 transition-all duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="heroicons-solid:envelope" class="w-7 h-7 text-white" />
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-900 text-lg mb-1">Email</h3>
                  <a href="mailto:info@healthcare.com" class="text-primary-600 hover:text-primary-700 font-semibold text-lg transition-colors">info@healthcare.com</a>
                </div>
              </div>
              
              <div class="card p-6 flex items-start group hover:border-primary-300 transition-all duration-300">
                <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-medical-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  <Icon name="heroicons-solid:clock" class="w-7 h-7 text-white" />
                </div>
                <div class="ml-4">
                  <h3 class="font-bold text-gray-900 text-lg mb-1">Hours</h3>
                  <p class="text-gray-600 leading-relaxed">Monday - Saturday: 9:00 AM - 6:00 PM<br>Sunday: Closed<br><span class="text-primary-600 font-semibold">Emergency: 24/7</span></p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Quick Actions -->
          <div class="card-gradient p-8 rounded-3xl">
            <h3 class="font-bold text-gray-900 text-xl mb-6">Quick Appointment Options</h3>
            <div class="space-y-4">
              <a
                href="tel:+1234567890"
                class="flex items-center justify-center w-full btn-primary"
              >
                <Icon name="heroicons-solid:phone" class="w-5 h-5 mr-2" />
                Call Now
              </a>
              <a
                href="https://wa.me/1234567890"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-full bg-[#25D366] text-white px-6 py-4 rounded-xl font-semibold hover:bg-[#20BA5A] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                <Icon name="simple-icons:whatsapp" class="w-5 h-5 mr-2" />
                WhatsApp Us
              </a>
              <a
                href="https://calendly.com/your-link"
                target="_blank"
                rel="noopener noreferrer"
                class="flex items-center justify-center w-full btn-secondary"
              >
                <Icon name="heroicons:calendar-days" class="w-5 h-5 mr-2" />
                Book via Calendly
              </a>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Map Section -->
      <div class="mt-16">
        <h2 class="text-3xl font-bold text-gray-900 mb-6 text-center">Find Us on Map</h2>
        <div class="card p-8 rounded-3xl overflow-hidden">
          <div class="bg-gradient-to-br from-primary-100 to-medical-100 rounded-2xl h-96 flex items-center justify-center">
            <div class="text-center">
              <Icon name="heroicons-solid:map-pin" class="w-20 h-20 text-primary-400 mx-auto mb-4" />
              <p class="text-gray-600 text-lg font-semibold mb-2">Google Maps Embed</p>
              <p class="text-sm text-gray-500">Replace this with your Google Maps embed code</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Modern Modal -->
    <Teleport to="body">
      <Transition name="modal">
        <div
          v-if="showModal"
          class="fixed inset-0 z-50 flex items-center justify-center p-4"
          @click.self="closeModal"
        >
          <!-- Backdrop -->
          <div class="absolute inset-0 bg-black/50 backdrop-blur-sm" @click="closeModal"></div>
          
          <!-- Modal Content -->
          <div class="relative bg-white rounded-3xl shadow-2xl max-w-md w-full p-8 transform transition-all">
            <!-- Success Modal -->
            <div v-if="submitMessage?.type === 'success'" class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="heroicons-solid:check-circle" class="w-10 h-10 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
              <p class="text-gray-600 mb-8 leading-relaxed">
                {{ submitMessage.text }}
              </p>
              <button
                @click="closeModal"
                class="w-full btn-primary"
              >
                Got it
              </button>
            </div>
            
            <!-- Error Modal -->
            <div v-else-if="submitMessage?.type === 'error'" class="text-center">
              <div class="w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <Icon name="heroicons-solid:x-circle" class="w-10 h-10 text-white" />
              </div>
              <h3 class="text-2xl font-bold text-gray-900 mb-3">Oops! Something went wrong</h3>
              <p class="text-gray-600 mb-8 leading-relaxed">
                {{ submitMessage.text }}
              </p>
              <button
                @click="closeModal"
                class="w-full btn-primary"
              >
                Try Again
              </button>
            </div>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
useHead({
  title: 'Contact Us - Health & Wellness Center',
  meta: [
    {
      name: 'description',
      content: 'Contact our health and wellness center to book an appointment or ask questions. We\'re here to help you on your health journey.'
    }
  ]
})

const form = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
})

const isSubmitting = ref(false)
const submitMessage = ref(null)
const showModal = ref(false)
const aiSuggestion = ref('')
const aiStatus = ref('Need a clear message? Let AI help polish your note.')
const isGeneratingSuggestion = ref(false)

const handleSubmit = async () => {
  isSubmitting.value = true
  submitMessage.value = null
  showModal.value = false
  
  try {
    // Simulate form submission
    // In a real app, you would send this to your backend
    await new Promise(resolve => setTimeout(resolve, 1500))
    
    submitMessage.value = {
      type: 'success',
      text: 'Thank you for your message! We will get back to you soon.'
    }
    
    // Show modal
    showModal.value = true
    
    // Reset form
    form.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
    aiSuggestion.value = ''
    aiStatus.value = 'Need a clear message? Let AI help polish your note.'
  } catch (error) {
    submitMessage.value = {
      type: 'error',
      text: 'Something went wrong. Please try again later.'
    }
    showModal.value = true
  } finally {
    isSubmitting.value = false
  }
}

const generateSuggestion = async () => {
  if (!form.value.message.trim() || isGeneratingSuggestion.value) {
    aiStatus.value = 'Please describe how we can help before asking AI for help.'
    return
  }

  isGeneratingSuggestion.value = true
  aiStatus.value = 'Generating AI suggestion…'
  aiSuggestion.value = ''

  try {
    const response = await $fetch('/api/contact-ai', {
      method: 'POST',
      body: {
        name: form.value.name,
        email: form.value.email,
        phone: form.value.phone,
        message: form.value.message
      }
    })

    aiSuggestion.value = response.suggestion ?? ''
    aiStatus.value = aiSuggestion.value
      ? 'Suggestion ready – tap “Use this suggestion” to replace your message.'
      : 'AI did not return a suggestion. Try again or edit your text.'
  } catch (error) {
    aiStatus.value = 'AI helper is unavailable right now. Try again later.'
  } finally {
    isGeneratingSuggestion.value = false
  }
}

const applySuggestion = () => {
  if (!aiSuggestion.value) return
  form.value.message = aiSuggestion.value
  aiStatus.value = 'Suggestion applied. You can edit it before sending.'
}

const closeModal = () => {
  showModal.value = false
  submitMessage.value = null
}

// Close modal on Escape key
onMounted(() => {
  const handleEscape = (e) => {
    if (e.key === 'Escape' && showModal.value) {
      closeModal()
    }
  }
  window.addEventListener('keydown', handleEscape)
  onUnmounted(() => {
    window.removeEventListener('keydown', handleEscape)
  })
})
</script>

<style scoped>
/* Modal Transitions */
.modal-enter-active,
.modal-leave-active {
  transition: opacity 0.3s ease;
}

.modal-enter-active .relative,
.modal-leave-active .relative {
  transition: transform 0.3s ease, opacity 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
}

.modal-enter-from .relative,
.modal-leave-to .relative {
  transform: scale(0.9);
  opacity: 0;
}
</style>
