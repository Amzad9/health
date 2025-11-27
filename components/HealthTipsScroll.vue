<template>
  <section class="bg-gradient-to-r from-primary-600 via-primary-700 to-primary-800 text-white py-6 overflow-hidden relative" aria-label="Health tips">
    <!-- Animated Background -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute top-0 left-0 w-full h-full" style="background-image: linear-gradient(90deg, transparent, rgba(255,255,255,0.1) 50%, transparent); background-size: 200% 100%; animation: shimmer 3s infinite;"></div>
    </div>

    <div class="container-custom relative z-10">
      <div class="flex items-center space-x-4">
        <div class="flex-shrink-0 bg-white/20 backdrop-blur-sm px-5 py-2.5 rounded-full border border-white/30 shadow-lg">
          <span class="font-bold text-sm md:text-base flex items-center">
            <svg class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
              <path d="M11 3a1 1 0 100 2h2.586l-6.293 6.293a1 1 0 101.414 1.414L15 6.414V9a1 1 0 102 0V4a1 1 0 00-1-1h-5z" />
              <path d="M5 5a2 2 0 00-2 2v8a2 2 0 002 2h8a2 2 0 002-2v-3a1 1 0 10-2 0v3H5V7h3a1 1 0 000-2H5z" />
            </svg>
            Health Tip
          </span>
        </div>
        <div class="flex-1 overflow-hidden">
          <div class="animate-scroll whitespace-nowrap">
            <span
              v-for="(tip, index) in tips"
              :key="index"
              class="inline-block mr-12 text-sm md:text-base font-medium"
            >
              {{ tip }}
            </span>
            <!-- Duplicate for seamless loop -->
            <span
              v-for="(tip, index) in tips"
              :key="`duplicate-${index}`"
              class="inline-block mr-12 text-sm md:text-base font-medium"
            >
              {{ tip }}
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const tips = [
  '💧 Stay hydrated - Drink at least 8 glasses of water daily',
  '😴 Get 7-9 hours of sleep for optimal health',
  '🏃 Exercise regularly - Aim for 30 minutes of physical activity daily',
  '🥗 Eat a balanced diet rich in fruits and vegetables',
  '👀 Take regular breaks from screens to protect your eyes',
  '🧘 Practice deep breathing exercises to reduce stress',
  '🏥 Schedule regular health checkups for preventive care',
  '💪 Maintain good posture to prevent back problems',
  '🍎 Limit processed foods and sugar intake',
  '☀️ Spend time outdoors for natural vitamin D'
]
</script>

<style scoped>
@keyframes scroll {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}

@keyframes shimmer {
  0% {
    background-position: -200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}

.animate-scroll {
  animation: scroll 60s linear infinite;
}
</style>
