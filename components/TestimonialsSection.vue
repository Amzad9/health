<template>
  <section class="section-padding bg-gradient-to-b from-gray-50 to-white relative overflow-hidden" id="testimonials" aria-labelledby="testimonials-heading">
    <!-- Background Decoration -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -mr-48 -mt-48"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-medical-100/20 rounded-full blur-3xl -ml-48 -mb-48"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-20">
        <div class="inline-block mb-4">
          <span class="px-4 py-2 bg-primary-100 text-primary-700 rounded-full text-sm font-semibold">
            Testimonials
          </span>
        </div>
        <h2 id="testimonials-heading" class="section-title text-gray-900 mb-6">
          What Our Patients
          <span class="block text-gradient">Say About Us</span>
        </h2>
        <p class="section-subtitle">
          Real experiences from our valued patients who trust us with their health and wellness
        </p>
      </div>
      
      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <article
          v-for="(testimonial, index) in testimonials"
          :key="testimonial.id"
          class="card p-8 group hover:border-primary-200 transition-all duration-300"
          :style="{ animationDelay: `${index * 0.1}s` }"
        >
          <!-- Quote Icon -->
          <div class="mb-6">
            <div class="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center shadow-glow">
              <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.996 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.984zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
              </svg>
            </div>
          </div>

          <!-- Rating -->
          <div class="flex items-center mb-4">
            <div class="flex text-yellow-400">
              <svg
                v-for="i in 5"
                :key="i"
                class="w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                aria-hidden="true"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          <!-- Review Text -->
          <p class="text-gray-600 mb-6 leading-relaxed text-lg italic">
            "{{ testimonial.review }}"
          </p>

          <!-- Author -->
          <div class="flex items-center pt-6 border-t border-gray-100">
            <div class="w-14 h-14 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-4 shadow-lg group-hover:scale-110 transition-transform duration-300">
              <span class="text-white font-bold text-lg">{{ testimonial.initials }}</span>
            </div>
            <div>
              <p class="font-bold text-gray-900 text-lg">{{ testimonial.name }}</p>
              <p class="text-sm text-gray-600">{{ testimonial.service }}</p>
            </div>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>

<script setup>
const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    initials: 'SJ',
    service: 'General Health Checkup',
    review: 'Excellent service! The staff was professional and caring. I felt heard and understood throughout my visit. Highly recommend!'
  },
  {
    id: 2,
    name: 'Michael Chen',
    initials: 'MC',
    service: 'Physiotherapy',
    review: 'The physiotherapy sessions helped me recover from my injury faster than expected. The therapists are knowledgeable and supportive.'
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    initials: 'ER',
    service: 'Diet Consultation',
    review: 'The personalized nutrition plan changed my life. I\'ve never felt better and more energetic! The dietitian was amazing.'
  },
  {
    id: 4,
    name: 'David Thompson',
    initials: 'DT',
    service: 'Mental Wellness',
    review: 'Professional and empathetic counseling. The team really cares about your mental well-being. Thank you for your support!'
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    initials: 'LA',
    service: 'Skin Treatment',
    review: 'Amazing results with my skin treatment. The dermatologist was knowledgeable and the process was smooth and comfortable.'
  },
  {
    id: 6,
    name: 'James Wilson',
    initials: 'JW',
    service: 'Health Counseling',
    review: 'Great guidance on my health journey. The counselor provided practical advice that I could actually follow. Very helpful!'
  }
]
</script>
