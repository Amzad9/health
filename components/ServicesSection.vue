<template>
  <section class="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden" id="services" aria-labelledby="services-heading">
    <!-- Background Decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-100/30 rounded-full blur-3xl -mr-48 -mt-48"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-medical-100/30 rounded-full blur-3xl -ml-48 -mb-48"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-20">
        <div class="inline-block mb-4">
          <span class="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Our Services
          </span>
        </div>
        <h2 id="services-heading" class="section-title text-gray-900 mb-6">
          Comprehensive Healthcare
          <span class="block text-gradient">Solutions</span>
        </h2>
        <p class="section-subtitle">
          Tailored medical services designed to meet your unique health needs with expert care and modern technology
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(service, index) in services"
          :key="service.id"
          class="group relative"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Card -->
          <div class="card h-full p-8 bg-white border border-gray-100 hover:border-primary-200 transition-all duration-300">
            <!-- Icon Container with Gradient Background -->
            <div class="relative mb-6">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <div class="relative w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                <component :is="service.icon" class="w-8 h-8 text-white" />
              </div>
            </div>

            <!-- Content -->
            <h3 class="text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
              {{ service.title }}
            </h3>
            <p class="text-gray-600 mb-6 leading-relaxed">
              {{ service.description }}
            </p>

            <!-- Link -->
            <NuxtLink
              :to="service.link"
              class="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 group/link focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded-lg"
            >
              <span>Learn More</span>
              <svg class="w-5 h-5 ml-2 group-hover/link:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>

            <!-- Hover Effect Border -->
            <div class="absolute inset-0 rounded-2xl border-2 border-primary-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-20 text-center">
        <div class="inline-block card-gradient p-8 md:p-12 max-w-3xl">
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Need Help Choosing a Service?
          </h3>
          <p class="text-lg text-gray-600 mb-6">
            Our team is here to guide you to the right healthcare solution
          </p>
          <NuxtLink to="/contact" class="btn-primary inline-flex items-center">
            <span>Get Free Consultation</span>
            <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const services = [
  {
    id: 1,
    title: 'General Health Checkup',
    description: 'Comprehensive health assessments and preventive care to keep you in optimal health.',
    link: '/services/general-health',
    icon: 'GeneralHealthIcon'
  },
  {
    id: 2,
    title: 'Diet & Nutrition Consultation',
    description: 'Personalized nutrition plans and dietary guidance for better health and wellness.',
    link: '/services/diet-nutrition',
    icon: 'NutritionIcon'
  },
  {
    id: 3,
    title: 'Physiotherapy',
    description: 'Expert physical therapy services to help you recover and maintain mobility.',
    link: '/services/physiotherapy',
    icon: 'PhysiotherapyIcon'
  },
  {
    id: 4,
    title: 'Skin & Hair Treatment',
    description: 'Advanced dermatological treatments for healthy skin and hair.',
    link: '/services/skin-hair',
    icon: 'SkinHairIcon'
  },
  {
    id: 5,
    title: 'Mental Wellness Coaching',
    description: 'Professional mental health support and counseling services.',
    link: '/services/mental-wellness',
    icon: 'MentalWellnessIcon'
  },
  {
    id: 6,
    title: 'Health Counseling',
    description: 'Personalized health counseling to guide you on your wellness journey.',
    link: '/services/health-counseling',
    icon: 'HealthCounselingIcon'
  }
]
</script>

<script>
export default {
  components: {
    GeneralHealthIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `
    },
    NutritionIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      `
    },
    PhysiotherapyIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      `
    },
    SkinHairIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      `
    },
    MentalWellnessIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      `
    },
    HealthCounselingIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      `
    }
  }
}
</script>

