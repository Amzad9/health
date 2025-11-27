<template>
  <header class="bg-white/95 backdrop-blur-lg shadow-soft sticky top-0 z-50 border-b border-gray-100" role="banner">
    <nav class="container-custom" aria-label="Main navigation">
      <div class="flex items-center justify-between h-20">
        <NuxtLink to="/" class="flex items-center space-x-3 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded-lg group" aria-label="Home">
          <div class="w-12 h-12 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center shadow-lg group-hover:shadow-glow transition-all duration-300 group-hover:scale-105">
            <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
            </svg>
          </div>
          <div>
            <span class="text-2xl font-bold text-gradient block leading-tight">HealthCare</span>
            <span class="text-xs text-gray-500 font-medium">Wellness Center</span>
          </div>
        </NuxtLink>
        
        <button
          @click="toggleMenu"
          class="md:hidden p-2 rounded-lg text-gray-700 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-600 transition-colors"
          aria-label="Toggle menu"
          :aria-expanded="isMenuOpen"
          aria-controls="mobile-menu"
        >
          <svg v-if="!isMenuOpen" class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
        
        <div class="hidden md:flex items-center space-x-8">
          <NuxtLink
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-200 relative group focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded px-2 py-1"
          >
            {{ link.label }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary-600 group-hover:w-full transition-all duration-300"></span>
          </NuxtLink>
          <NuxtLink to="/contact" class="btn-primary">
            Book Appointment
          </NuxtLink>
        </div>
      </div>
      
      <transition name="fade">
        <div
          v-if="isMenuOpen"
          class="fixed inset-0 bg-black/40 md:hidden z-40"
          aria-hidden="true"
          @click="closeMenu"
        ></div>
      </transition>

      <div
        id="mobile-menu"
        class="fixed inset-y-0 right-0 w-72 md:hidden z-50 transform transition-transform duration-300 border-l border-gray-100 bg-white shadow-2xl overflow-hidden h-full min-h-screen"
        :class="isMenuOpen ? 'translate-x-0' : 'translate-x-full'"
        role="dialog"
        aria-modal="true"
        aria-labelledby="mobile-menu-title"
      >
        <div class="px-6 py-8 h-full flex flex-col">
          <header class="flex items-center justify-between mb-4">
            <h2 id="mobile-menu-title" class="text-lg font-semibold text-gray-900">Menu</h2>
            <button
              type="button"
              class="p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-primary-600 transition-colors"
              @click="closeMenu"
              aria-label="Close menu"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </header>

          <nav class="flex-1 flex flex-col gap-2" aria-label="Mobile navigation">
            <NuxtLink
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              @click="closeMenu"
              class="block py-3 px-4 text-gray-700 hover:text-primary-600 hover:bg-primary-50 font-medium transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2"
            >
              {{ link.label }}
            </NuxtLink>
          </nav>

          <NuxtLink
            to="/contact"
            @click="closeMenu"
            class="mt-6 btn-primary text-center"
          >
            Book Appointment
          </NuxtLink>
        </div>
      </div>
    </nav>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/#about', label: 'About' },
  { path: '/#services', label: 'Services' },
  { path: '/#testimonials', label: 'Testimonials' },
  { path: '/blog', label: 'Blog' },
  { path: '/contact', label: 'Contact' }
]

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const closeMenu = () => {
  isMenuOpen.value = false
}
</script>
