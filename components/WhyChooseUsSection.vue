<template>
  <section class="section-padding bg-white relative overflow-hidden" aria-labelledby="why-choose-heading">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: linear-gradient(45deg, #3b82f6 1px, transparent 1px), linear-gradient(-45deg, #3b82f6 1px, transparent 1px); background-size: 30px 30px;"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-20">
        <div class="inline-block mb-4">
          <span class="px-4 py-2 bg-medical-100 text-medical-700 rounded-full text-sm font-semibold">
            Why Choose Us
          </span>
        </div>
        <h2 id="why-choose-heading" class="section-title text-gray-900 mb-6">
          Excellence in Every
          <span class="block text-gradient">Aspect of Care</span>
        </h2>
        <p class="section-subtitle">
          We stand out with our commitment to excellence, innovation, and patient-centered care
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div
          v-for="(feature, index) in features"
          :key="feature.id"
          class="group relative"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <div class="card p-8 text-center h-full hover:border-primary-300 transition-all duration-300">
            <!-- Icon with Gradient Background -->
            <div class="relative mb-6 inline-block">
              <div class="absolute inset-0 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300"></div>
              <div class="relative w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg group-hover:scale-110 transition-transform duration-300">
                <component :is="feature.icon" class="w-10 h-10 text-white" />
              </div>
            </div>

            <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors">
              {{ feature.title }}
            </h3>
            <p class="text-gray-600 leading-relaxed">
              {{ feature.description }}
            </p>
          </div>
        </div>
      </div>

      <!-- CTA Section -->
      <div class="mt-20 text-center">
        <div class="card-gradient p-8 md:p-12 max-w-4xl mx-auto rounded-3xl">
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Ready to Experience the Difference?
          </h3>
          <p class="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied patients who have chosen us for their healthcare needs
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <NuxtLink to="/contact" class="btn-primary inline-flex items-center justify-center">
              <span>Book Your Appointment</span>
              <svg class="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
            <NuxtLink to="/#services" class="btn-secondary inline-flex items-center justify-center">
              <span>Explore Services</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const features = [
  {
    id: 1,
    title: 'Certified Professionals',
    description: 'Our team consists of highly qualified and certified healthcare professionals with years of experience in their respective fields.',
    icon: 'CertifiedIcon'
  },
  {
    id: 2,
    title: 'Affordable Pricing',
    description: 'We believe quality healthcare should be accessible to everyone with transparent and affordable pricing options.',
    icon: 'PricingIcon'
  },
  {
    id: 3,
    title: 'Advanced Technology',
    description: 'State-of-the-art medical equipment and modern treatment approaches for better outcomes and faster recovery.',
    icon: 'TechnologyIcon'
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Round-the-clock support and emergency care services when you need us most, ensuring your health is always our priority.',
    icon: 'SupportIcon'
  },
  {
    id: 5,
    title: 'Personalized Care',
    description: 'Individualized treatment plans tailored to your unique health needs and goals, ensuring the best possible outcomes.',
    icon: 'CareIcon'
  },
  {
    id: 6,
    title: 'Proven Results',
    description: 'Track record of successful treatments and satisfied patients over the years, with measurable improvements in health outcomes.',
    icon: 'ResultsIcon'
  }
]
</script>

<script>
export default {
  components: {
    CertifiedIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
        </svg>
      `
    },
    PricingIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `
    },
    TechnologyIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      `
    },
    SupportIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      `
    },
    CareIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      `
    },
    ResultsIcon: {
      template: `
        <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      `
    }
  }
}
</script>
