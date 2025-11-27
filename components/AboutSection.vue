<template>
  <section class="section-padding bg-white relative overflow-hidden" id="about" aria-labelledby="about-heading">
    <!-- Background Pattern -->
    <div class="absolute inset-0 opacity-5" style="background-image: radial-gradient(circle, #3b82f6 1px, transparent 1px); background-size: 50px 50px;"></div>
    
    <div class="container-custom relative z-10">
      <div class="text-center mb-20">
        <div class="inline-block mb-4">
          <span class="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            About Us
          </span>
        </div>
        <h2 id="about-heading" class="section-title text-gray-900 mb-6">
          Dedicated to Your
          <span class="block text-gradient">Health & Wellness</span>
        </h2>
        <p class="section-subtitle">
          We are committed to providing exceptional healthcare services with a focus on prevention, wellness, and personalized treatment.
        </p>
      </div>
      
      <div class="grid lg:grid-cols-2 gap-16 items-center mb-20">
        <!-- Mission & Vision -->
        <div class="space-y-8">
          <div class="card p-8 border-l-4 border-primary-600">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4 shadow-glow">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Our Mission</h3>
            </div>
            <p class="text-gray-600 leading-relaxed text-lg">
              To provide accessible, high-quality healthcare services that empower individuals to achieve optimal health and wellness. We believe in treating the whole person, not just the symptoms.
            </p>
          </div>

          <div class="card p-8 border-l-4 border-medical-600">
            <div class="flex items-center mb-4">
              <div class="w-12 h-12 bg-gradient-to-br from-medical-500 to-medical-600 rounded-xl flex items-center justify-center mr-4 shadow-glow">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                </svg>
              </div>
              <h3 class="text-2xl font-bold text-gray-900">Our Vision</h3>
            </div>
            <p class="text-gray-600 leading-relaxed text-lg">
              To be the leading healthcare provider in our community, recognized for excellence in patient care, innovation in treatment approaches, and commitment to health education.
            </p>
          </div>
        </div>

        <!-- Stats Grid -->
        <div class="relative">
          <div class="card-gradient p-8 md:p-12 rounded-3xl">
            <div class="grid grid-cols-2 gap-8">
              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="text-5xl font-bold text-gradient mb-2">15+</div>
                <div class="text-gray-700 font-semibold">Years Experience</div>
              </div>
              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-br from-medical-500 to-medical-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                  </svg>
                </div>
                <div class="text-5xl font-bold text-gradient mb-2">50K+</div>
                <div class="text-gray-700 font-semibold">Happy Patients</div>
              </div>
              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div class="text-5xl font-bold text-gradient mb-2">25+</div>
                <div class="text-gray-700 font-semibold">Expert Doctors</div>
              </div>
              <div class="text-center group">
                <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-medical-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-glow group-hover:scale-110 transition-transform duration-300">
                  <svg class="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div class="text-5xl font-bold text-gradient mb-2">100%</div>
                <div class="text-gray-700 font-semibold">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <!-- Certifications -->
      <div class="card-gradient p-8 md:p-12 rounded-3xl">
        <div class="text-center mb-12">
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Certifications & Accreditations</h3>
          <p class="text-lg text-gray-600">Trusted by leading healthcare organizations</p>
        </div>
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <div class="text-center group">
            <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
            </div>
            <p class="font-bold text-gray-900 text-lg">ISO Certified</p>
            <p class="text-sm text-gray-600 mt-1">Quality Standards</p>
          </div>
          <div class="text-center group">
            <div class="w-24 h-24 bg-gradient-to-br from-medical-500 to-medical-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <p class="font-bold text-gray-900 text-lg">Medical Board</p>
            <p class="text-sm text-gray-600 mt-1">Licensed Practice</p>
          </div>
          <div class="text-center group">
            <div class="w-24 h-24 bg-gradient-to-br from-accent-500 to-accent-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
              </svg>
            </div>
            <p class="font-bold text-gray-900 text-lg">HIPAA Compliant</p>
            <p class="text-sm text-gray-600 mt-1">Privacy Protected</p>
          </div>
          <div class="text-center group">
            <div class="w-24 h-24 bg-gradient-to-br from-primary-500 to-accent-500 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <svg class="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <p class="font-bold text-gray-900 text-lg">Team Certified</p>
            <p class="text-sm text-gray-600 mt-1">Expert Professionals</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
