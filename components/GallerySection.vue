<template>
  <section class="section-padding bg-white relative overflow-hidden" aria-labelledby="gallery-heading">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle, #3b82f6 1px, transparent 1px); background-size: 40px 40px;"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-20">
        <div class="inline-block mb-4">
          <span class="px-4 py-2 bg-medical-100 text-medical-700 rounded-full text-sm font-semibold">
            Gallery
          </span>
        </div>
        <h2 id="gallery-heading" class="section-title text-gray-900 mb-6">
          Our Modern
          <span class="block text-gradient">Facilities</span>
        </h2>
        <p class="section-subtitle">
          Take a virtual tour of our state-of-the-art clinic and facilities
        </p>
        <div class="mt-12 max-w-4xl mx-auto">
          <div class="relative overflow-hidden rounded-[32px] shadow-2xl">
            <img
              :src="sectionBannerImage.imageUrl"
              :alt="sectionBannerImage.alt"
              class="w-full h-64 object-cover md:h-80"
              loading="lazy"
              @error="handleImageError"
            />
            <div class="absolute inset-0 bg-gradient-to-t from-primary-900/60 via-primary-900/20 to-transparent flex flex-col justify-end p-8 text-left">
              <p class="text-base text-primary-100 uppercase tracking-[0.2em] font-semibold mb-2">Facility Preview</p>
              <h3 class="text-3xl md:text-4xl font-bold text-white leading-tight">Designed for comfort, safety, and care</h3>
              <p class="text-sm text-primary-100/80 mt-2 max-w-2xl">{{ sectionBannerImage.caption }}</p>
            </div>
          </div>
        </div>
      </div>
      
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
        <div
          v-for="(image, index) in galleryImages"
          :key="index"
          class="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer transform hover:scale-105 transition-all duration-300 shadow-soft hover:shadow-large"
          @click="openLightbox(index)"
        >
          <img
            :src="image.imageUrl"
            :alt="`${image.title} photo`"
            class="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            loading="lazy"
            @error="handleImageError"
          />

          <!-- Overlay -->
          <div class="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-4">
            <div class="text-center text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
              <svg class="w-8 h-8 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
              <p class="font-semibold text-sm">{{ image.title }}</p>
            </div>
          </div>

          <!-- Hover Border Effect -->
          <div class="absolute inset-0 border-2 border-primary-500 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
        </div>
      </div>
    </div>
    
    <!-- Lightbox Modal -->
    <div
      v-if="lightboxOpen"
      class="fixed inset-0 bg-black/95 backdrop-blur-sm z-50 flex items-center justify-center p-4 animate-fade-in"
      @click="closeLightbox"
      role="dialog"
      aria-modal="true"
      aria-labelledby="lightbox-title"
    >
      <button
        @click="closeLightbox"
        class="absolute top-4 right-4 text-white hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-2 transition-colors z-10"
        aria-label="Close lightbox"
      >
        <svg class="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
      <div class="max-w-4xl w-full bg-gradient-to-br from-primary-600 to-primary-800 rounded-3xl p-8 md:p-12 shadow-2xl transform scale-95 animate-scale-in">
        <img
          :src="galleryImages[currentImageIndex].imageUrl"
          :alt="galleryImages[currentImageIndex].title"
          class="w-full rounded-2xl object-cover mb-6 max-h-96"
          @error="handleImageError"
        />
        <h3 id="lightbox-title" class="text-white text-3xl font-bold mb-4">{{ galleryImages[currentImageIndex].title }}</h3>
        <p class="text-white/90 text-lg leading-relaxed">{{ galleryImages[currentImageIndex].description }}</p>
        <div class="mt-6 flex items-center space-x-2">
          <div class="w-2 h-2 bg-white rounded-full"></div>
          <span class="text-white/80 text-sm">Gallery Image {{ currentImageIndex + 1 }} of {{ galleryImages.length }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useImageFallback } from '~/composables/useImageFallback'

const { handleImageError } = useImageFallback()

const sectionBannerImage = {
  imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2000&q=80',
  alt: 'Modern clinic reception and lounge',
  caption: 'Bright, airy suites and collaborative care spaces where patients feel instantly at ease.'
}

const galleryImages = [
  {
    title: 'Reception Area',
    description: 'Welcoming reception area with comfortable seating and modern design',
    imageUrl: 'https://images.unsplash.com/photo-1505751172876-fa1923c5c528?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Consultation Room',
    description: 'Modern consultation rooms equipped with latest medical technology',
    imageUrl: 'https://images.unsplash.com/photo-1582719478190-4e8f2cafb788?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Physiotherapy Center',
    description: 'State-of-the-art physiotherapy equipment and facilities for rehabilitation',
    imageUrl: 'https://images.unsplash.com/photo-1544093473-0d97a3c71508?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Waiting Area',
    description: 'Comfortable and spacious waiting area for patients and families',
    imageUrl: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Medical Equipment',
    description: 'Advanced medical equipment for accurate diagnostics and treatment',
    imageUrl: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc67c?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Team Photo',
    description: 'Our dedicated team of healthcare professionals committed to your wellness',
    imageUrl: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Treatment Room',
    description: 'Clean and modern treatment rooms designed for patient comfort',
    imageUrl: 'https://images.unsplash.com/photo-1600185360530-0b721b0a0c97?auto=format&fit=crop&w=1400&q=80'
  },
  {
    title: 'Laboratory',
    description: 'Fully equipped laboratory for comprehensive tests and diagnostics',
    imageUrl: 'https://images.unsplash.com/photo-1582719478144-32fdc2a0144f?auto=format&fit=crop&w=1400&q=80'
  }
]

const lightboxOpen = ref(false)
const currentImageIndex = ref(0)

const openLightbox = (index) => {
  currentImageIndex.value = index
  lightboxOpen.value = true
  document.body.style.overflow = 'hidden'
}

const closeLightbox = () => {
  lightboxOpen.value = false
  document.body.style.overflow = ''
}
</script>
