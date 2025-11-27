<template>
  <div class="min-h-screen bg-white">
    <!-- Hero Section -->
    <div class="bg-gradient-to-br from-primary-50 via-white to-medical-50 border-b border-gray-100">
      <div class="container-custom py-20 md:py-28">
        <div class="max-w-3xl mx-auto text-center">
          <h1 class="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight">
            Health & Wellness
            <span class="block text-gradient">Blog</span>
          </h1>
          <p class="text-xl md:text-2xl text-gray-600 leading-relaxed">
            Expert insights, practical tips, and evidence-based advice for your health journey
          </p>
        </div>
      </div>
    </div>

    <div class="container-custom py-16 md:py-24">
      <!-- Featured Post -->
      <div v-if="featuredPost" class="mb-20">
        <article class="group">
          <NuxtLink :to="`/blog/${featuredPost.slug}`" class="block">
            <div class="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center bg-white rounded-3xl overflow-hidden hover:shadow-2xl transition-all duration-500 border border-gray-100">
              <!-- Image -->
              <div class="relative h-80 lg:h-full min-h-[400px] overflow-hidden bg-gray-100">
                <img
                  :src="`https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=800&h=600&fit=crop&q=80`"
                  :alt="featuredPost.title"
                  class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                    @error="handleImageError"
                />
                <div class="absolute top-6 left-6">
                  <span class="px-4 py-2 bg-white/95 backdrop-blur-sm rounded-full text-sm font-bold text-primary-700 shadow-lg">
                    Featured
                  </span>
                </div>
              </div>
              
              <!-- Content -->
              <div class="p-8 lg:p-12">
                <div class="flex items-center gap-4 mb-6 text-sm text-gray-500">
                  <span class="flex items-center">
                    <Icon name="heroicons:calendar-days" class="w-4 h-4 mr-2" />
                    {{ formatDate(featuredPost.date) }}
                  </span>
                  <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                  <span>{{ featuredPost.category }}</span>
                </div>
                <h2 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight group-hover:text-primary-600 transition-colors">
                  {{ featuredPost.title }}
                </h2>
                <p class="text-lg text-gray-600 leading-relaxed mb-8">
                  {{ featuredPost.excerpt }}
                </p>
                <div class="inline-flex items-center text-primary-600 font-semibold group-hover:gap-3 transition-all">
                  <span>Read Article</span>
                  <Icon name="heroicons:arrow-right" class="w-5 h-5 ml-2" />
                </div>
              </div>
            </div>
          </NuxtLink>
        </article>
      </div>

      <!-- Blog Posts Grid -->
      <div>
        <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mb-12">Latest Articles</h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <article
            v-for="post in regularPosts"
            :key="post.id"
            class="group"
          >
            <NuxtLink :to="`/blog/${post.slug}`" class="block h-full">
              <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                <!-- Image -->
                <div class="relative h-56 overflow-hidden bg-gray-100">
                  <img
                    :src="`https://images.unsplash.com/photo-${getPlaceholderImage(post.id)}?w=600&h=400&fit=crop&q=80`"
                    :alt="post.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    @error="handleImageError"
                  />
                  <div class="absolute top-4 left-4">
                    <span class="px-3 py-1.5 bg-white/95 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-700 shadow-md">
                      {{ post.category }}
                    </span>
                  </div>
                </div>
                
                <!-- Content -->
                <div class="p-6 flex-grow flex flex-col">
                  <div class="flex items-center gap-3 mb-4 text-xs text-gray-500">
                    <span>{{ formatDate(post.date) }}</span>
                    <span class="w-1 h-1 bg-gray-300 rounded-full"></span>
                    <span>{{ post.readTime || 5 }} min read</span>
                  </div>
                  <h3 class="text-xl md:text-2xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2 leading-tight">
                    {{ post.title }}
                  </h3>
                  <p class="text-gray-600 mb-6 line-clamp-3 flex-grow leading-relaxed">
                    {{ post.excerpt }}
                  </p>
                  <div class="flex items-center text-primary-600 font-semibold text-sm group-hover:gap-2 transition-all">
                    <span>Read More</span>
                    <Icon name="heroicons:chevron-right" class="w-4 h-4 ml-1" />
                  </div>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useImageFallback } from '~/composables/useImageFallback'

const { handleImageError } = useImageFallback()

useHead({
  title: 'Health & Wellness Blog - Expert Tips & Advice',
  meta: [
    {
      name: 'description',
      content: 'Read our health and wellness blog for expert tips, health guides, diet plans, fitness advice, and wellness strategies to improve your overall health.'
    },
    {
      property: 'og:title',
      content: 'Health & Wellness Blog - Expert Tips & Advice'
    },
    {
      property: 'og:description',
      content: 'Expert health tips, wellness guides, and medical advice to help you live your healthiest life.'
    }
  ]
})

// Blog posts data
const blogPosts = [
  {
    id: 1,
    slug: '10-tips-for-better-sleep',
    title: '10 Essential Tips for Better Sleep and Rest',
    excerpt: 'Discover proven strategies to improve your sleep quality and wake up feeling refreshed and energized every morning.',
    category: 'Wellness',
    author: 'Dr. Sarah Johnson',
    date: '2024-01-15',
    readTime: 8,
    featured: true
  },
  {
    id: 2,
    slug: 'healthy-eating-guide',
    title: 'Complete Guide to Healthy Eating Habits',
    excerpt: 'Learn how to build a balanced diet that supports your health goals and provides all the nutrients your body needs.',
    category: 'Nutrition',
    author: 'Dr. Michael Chen',
    date: '2024-01-10',
    readTime: 10,
    featured: false
  },
  {
    id: 3,
    slug: 'exercise-routine-beginners',
    title: 'Best Exercise Routine for Beginners',
    excerpt: 'Start your fitness journey with this comprehensive guide to building an effective and sustainable exercise routine.',
    category: 'Fitness',
    author: 'Dr. Emily Rodriguez',
    date: '2024-01-08',
    readTime: 12,
    featured: false
  },
  {
    id: 4,
    slug: 'stress-management-techniques',
    title: 'Effective Stress Management Techniques',
    excerpt: 'Explore practical methods to manage stress and improve your mental well-being in today\'s fast-paced world.',
    category: 'Mental Health',
    author: 'Dr. David Thompson',
    date: '2024-01-05',
    readTime: 9,
    featured: false
  },
  {
    id: 5,
    slug: 'hydration-importance',
    title: 'Why Hydration is Crucial for Your Health',
    excerpt: 'Understand the importance of staying hydrated and how proper water intake affects your overall health and energy levels.',
    category: 'Wellness',
    author: 'Dr. Lisa Anderson',
    date: '2024-01-03',
    readTime: 7,
    featured: false
  },
  {
    id: 6,
    slug: 'preventive-healthcare',
    title: 'The Importance of Preventive Healthcare',
    excerpt: 'Learn why regular checkups and preventive care are essential for maintaining long-term health and catching issues early.',
    category: 'Health',
    author: 'Dr. James Wilson',
    date: '2024-01-01',
    readTime: 11,
    featured: false
  }
]

const featuredPost = computed(() => {
  return blogPosts.find(post => post.featured)
})

const regularPosts = computed(() => {
  return blogPosts.filter(post => !post.featured)
})

// Placeholder images from Unsplash - health/wellness related
const getPlaceholderImage = (id) => {
  const images = {
    1: '1559757148-5c350d0d3c56', // Sleep/wellness
    2: '1490645935967-10de6ba17061', // Nutrition/food
    3: '1571019613454-1cb2f99b2d8b', // Fitness/exercise
    4: '1506126613408-eca07ce68773', // Mental health/meditation
    5: '1548839140-5c059d3d5c1e', // Water/hydration
    6: '1576091160399-112ba8d25d1f' // Healthcare/medical
  }
  return images[id] || '1559757148-5c350d0d3c56'
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
