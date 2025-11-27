<template>
  <div class="section-padding bg-gray-50">
    <div class="container-custom">
      <div class="max-w-4xl mx-auto">
        <div class="mb-8">
          <NuxtLink to="/#services" class="text-primary-600 hover:text-primary-700 flex items-center mb-6 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7" />
            </svg>
            Back to Services
          </NuxtLink>
        </div>

        <article>
          <h1 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Diet & Nutrition Consultation</h1>
          
          <div class="prose max-w-none mb-8">
            <p class="text-xl text-gray-600 mb-8">
              Personalized nutrition plans and dietary guidance for better health and wellness. Our registered dietitians work with you to create sustainable eating habits that support your health goals.
            </p>
          </div>

          <div class="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">What We Offer</h2>
            <ul class="space-y-3 text-gray-700">
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Personalized meal plans tailored to your needs</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Nutritional assessment and analysis</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Weight management programs</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Dietary counseling for medical conditions</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Sports nutrition guidance</span>
              </li>
              <li class="flex items-start">
                <svg class="w-6 h-6 text-primary-600 mr-3 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span>Ongoing support and meal plan adjustments</span>
              </li>
            </ul>
          </div>

          <div class="bg-primary-50 rounded-xl p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
            <div class="grid md:grid-cols-2 gap-6">
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Improved Energy Levels</h3>
                <p class="text-gray-600">Fuel your body with the right nutrients for sustained energy throughout the day.</p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Better Health Outcomes</h3>
                <p class="text-gray-600">Manage chronic conditions and prevent diseases through proper nutrition.</p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Sustainable Weight Management</h3>
                <p class="text-gray-600">Achieve and maintain your ideal weight with science-backed approaches.</p>
              </div>
              <div>
                <h3 class="font-semibold text-gray-900 mb-2">Enhanced Performance</h3>
                <p class="text-gray-600">Optimize your nutrition for athletic performance and recovery.</p>
              </div>
            </div>
          </div>

          <div class="bg-white rounded-xl shadow-md p-8 mb-8">
            <h2 class="text-2xl font-bold text-gray-900 mb-4">Our Approach</h2>
            <p class="text-gray-700 mb-4">
              We believe in evidence-based nutrition that fits your lifestyle. Our registered dietitians take into account your medical history, food preferences, cultural background, and lifestyle to create a personalized plan that you can actually follow.
            </p>
            <p class="text-gray-700">
              We don't believe in fad diets or quick fixes. Instead, we focus on building healthy, sustainable eating habits that will serve you for life.
            </p>
          </div>

          <div class="text-center">
            <NuxtLink to="/contact" class="btn-primary inline-block">
              Schedule Nutrition Consultation
            </NuxtLink>
          </div>
        </article>
      </div>
    </div>
  </div>
</template>

<script setup>
useHead({
  title: 'Diet & Nutrition Consultation - Health & Wellness Center',
  meta: [
    {
      name: 'description',
      content: 'Personalized nutrition plans and dietary guidance from registered dietitians. Get expert advice for weight management, medical conditions, and optimal health.'
    }
  ]
})
</script>

