<template>
  <section class="relative min-h-screen flex items-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white" aria-labelledby="hero-heading">
    <!-- Animated Background Elements -->
    <div class="absolute inset-0 overflow-hidden">
      <div class="absolute top-0 left-1/4 w-96 h-96 bg-primary-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float"></div>
      <div class="absolute top-0 right-1/4 w-96 h-96 bg-medical-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 1s;"></div>
      <div class="absolute bottom-0 left-1/2 w-96 h-96 bg-accent-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style="animation-delay: 2s;"></div>
    </div>

    <!-- Grid Pattern Overlay -->
    <div class="absolute inset-0 opacity-10" style="background-image: linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px); background-size: 50px 50px;"></div>

    <div class="container-custom relative z-10 py-20">
      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="space-y-8 animate-fade-in-up">
          <div class="inline-block">
            <span class="px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-semibold border border-white/30">
              🏥 Trusted Healthcare Since 2009
            </span>
          </div>
          
          <h1 id="hero-heading" class="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
            Your Trusted
            <span class="block text-transparent bg-clip-text bg-gradient-to-r from-white via-primary-100 to-medical-200">
              Health & Wellness
            </span>
            Partner
          </h1>
          
          <p class="text-xl md:text-2xl text-primary-100 leading-relaxed max-w-2xl">
            Comprehensive medical services with certified professionals. Experience personalized care that puts your health first.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink
            to="/contact"
            class="btn-primary bg-white hover:shadow-glow-lg text-center inline-flex items-center justify-center group !text-primary-100"
          >
              <span>Book Consultation</span>
              <svg class="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </NuxtLink>
            <NuxtLink
              to="/#services"
              class="btn-outline text-center"
            >
              Explore Services
            </NuxtLink>
          </div>

          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
            <div>
              <div class="text-3xl md:text-4xl font-bold mb-1">15+</div>
              <div class="text-sm text-primary-200">Years Experience</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-bold mb-1">50K+</div>
              <div class="text-sm text-primary-200">Happy Patients</div>
            </div>
            <div>
              <div class="text-3xl md:text-4xl font-bold mb-1">25+</div>
              <div class="text-sm text-primary-200">Expert Doctors</div>
            </div>
          </div>
        </div>

        <!-- Right Content - Feature Cards -->
        <div class="hidden lg:block relative">
          <div class="relative space-y-6 animate-fade-in-up" style="animation-delay: 0.2s;">
            <!-- Floating Card 1 -->
            <div class="card bg-white/95 backdrop-blur-lg p-6 transform hover:scale-105 transition-all duration-300 shadow-large">
              <div class="flex items-start space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 text-lg mb-1">Certified Professionals</h3>
                  <p class="text-sm text-gray-600">Expert medical team with years of experience</p>
                </div>
              </div>
            </div>

            <!-- Floating Card 2 -->
            <div class="card bg-white/95 backdrop-blur-lg p-6 transform hover:scale-105 transition-all duration-300 shadow-large ml-8" style="animation-delay: 0.1s;">
              <div class="flex items-start space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-medical-500 to-medical-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 text-lg mb-1">24/7 Support</h3>
                  <p class="text-sm text-gray-600">Always here when you need us most</p>
                </div>
              </div>
            </div>

            <!-- Floating Card 3 -->
            <div class="card bg-white/95 backdrop-blur-lg p-6 transform hover:scale-105 transition-all duration-300 shadow-large" style="animation-delay: 0.2s;">
              <div class="flex items-start space-x-4">
                <div class="w-14 h-14 bg-gradient-to-br from-accent-500 to-accent-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-glow">
                  <svg class="w-7 h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h3 class="font-bold text-gray-900 text-lg mb-1">Affordable Pricing</h3>
                  <p class="text-sm text-gray-600">Quality healthcare accessible to everyone</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Decorative Elements -->
          <div class="absolute -top-10 -right-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div class="absolute -bottom-10 -left-10 w-40 h-40 bg-medical-400/20 rounded-full blur-3xl"></div>
        </div>
      </div>
    </div>

    <!-- Scroll Indicator -->
    <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
      <svg class="w-6 h-6 text-white/70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </div>
  </section>
</template>

