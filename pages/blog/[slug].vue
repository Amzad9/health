<template>
  <div class="min-h-screen bg-white">
    <article class="container-custom max-w-4xl py-16 md:py-24">
      <!-- Back Button -->
      <NuxtLink
        to="/blog"
        class="inline-flex items-center text-gray-600 hover:text-gray-900 font-medium mb-12 group transition-colors"
      >
        <Icon name="heroicons:chevron-left" class="w-5 h-5 mr-2 group-hover:-translate-x-1 transition-transform" />
        Back to Blog
      </NuxtLink>

      <!-- Article Header -->
      <header class="mb-12">
        <!-- Category -->
        <div class="mb-6">
          <span class="px-4 py-2 bg-gray-100 text-gray-700 rounded-full text-sm font-semibold">
            {{ post.category }}
          </span>
        </div>

        <!-- Title -->
        <h1 class="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-8 leading-tight">
          {{ post.title }}
        </h1>

        <!-- Meta Information -->
        <div class="flex flex-wrap items-center gap-6 text-gray-600 pb-8 border-b border-gray-200">
          <div class="flex items-center">
            <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mr-3">
              <span class="text-white font-semibold text-sm">{{ getInitials(post.author) }}</span>
            </div>
            <div>
              <p class="font-semibold text-gray-900">{{ post.author }}</p>
              <p class="text-sm text-gray-500">Health Expert</p>
            </div>
          </div>
          <div class="flex items-center text-sm">
            <Icon name="heroicons:calendar" class="w-4 h-4 mr-2" />
            {{ formatDate(post.date) }}
          </div>
          <div class="flex items-center text-sm">
            <Icon name="heroicons:clock" class="w-4 h-4 mr-2" />
            {{ post.readTime }} min read
          </div>
        </div>
      </header>

      <!-- Featured Image -->
      <div class="relative h-80 md:h-[500px] rounded-2xl overflow-hidden mb-16 bg-gray-100">
        <img
          :src="`https://images.unsplash.com/photo-${getPlaceholderImage(post.id)}?w=1200&h=800&fit=crop&q=80`"
          :alt="post.title"
          class="w-full h-full object-cover"
          loading="eager"
          @error="handleImageError"
        />
      </div>

      <!-- Article Content -->
      <div class="prose prose-lg max-w-none">
        <!-- Excerpt -->
        <div class="text-2xl md:text-3xl text-gray-700 font-light leading-relaxed mb-12 border-l-4 border-primary-600 pl-8">
          {{ post.excerpt }}
        </div>

        <!-- Content Sections -->
        <div class="space-y-8 text-lg text-gray-700 leading-relaxed">
          <div v-for="(section, index) in post.content" :key="index" class="space-y-6">
            <h2 class="text-3xl md:text-4xl font-bold text-gray-900 mt-16 mb-8 first:mt-0">{{ section.heading }}</h2>
            <p v-for="(paragraph, pIndex) in section.paragraphs" :key="pIndex" class="leading-relaxed">
              {{ paragraph }}
            </p>
            
            <!-- Image Placeholder -->
            <div v-if="section.image" class="my-12 relative h-80 rounded-2xl overflow-hidden bg-gray-100">
              <img
                :src="`https://images.unsplash.com/photo-${getPlaceholderImage(post.id)}?w=800&h=600&fit=crop&q=80`"
                :alt="section.heading"
                class="w-full h-full object-cover"
                loading="lazy"
                @error="handleImageError"
              />
            </div>

            <!-- Bullet Points -->
            <ul v-if="section.bullets" class="list-none space-y-4 my-8">
              <li v-for="(bullet, bIndex) in section.bullets" :key="bIndex" class="flex items-start">
                <div class="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                  <div class="w-2 h-2 bg-primary-600 rounded-full"></div>
                </div>
                <span class="leading-relaxed">{{ bullet }}</span>
              </li>
            </ul>
          </div>

          <!-- Key Takeaways -->
          <div class="mt-16 p-8 md:p-10 bg-gray-50 rounded-2xl border border-gray-200">
            <h3 class="text-2xl md:text-3xl font-bold text-gray-900 mb-6">Key Takeaways</h3>
            <ul class="list-none space-y-4">
              <li v-for="(takeaway, index) in post.takeaways" :key="index" class="flex items-start">
                <div class="w-6 h-6 bg-primary-600 rounded-full flex items-center justify-center flex-shrink-0 mr-4 mt-1">
                  <Icon name="heroicons:check" class="w-4 h-4 text-white" />
                </div>
                <span class="leading-relaxed">{{ takeaway }}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Author Bio -->
      <div class="mt-20 pt-12 border-t border-gray-200">
        <div class="flex items-start">
          <div class="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-2xl flex items-center justify-center flex-shrink-0 mr-6">
            <span class="text-white font-bold text-xl">{{ getInitials(post.author) }}</span>
          </div>
          <div class="flex-grow">
            <h3 class="text-2xl font-bold text-gray-900 mb-2">{{ post.author }}</h3>
            <p class="text-gray-600 leading-relaxed mb-6">{{ post.authorBio }}</p>
            <div class="flex space-x-4">
              <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-primary-600 transition-colors" aria-label="Twitter">
                <Icon name="simple-icons:twitter" class="w-5 h-5" />
              </a>
              <a href="#" class="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center text-gray-600 hover:bg-gray-200 hover:text-primary-600 transition-colors" aria-label="LinkedIn">
                <Icon name="simple-icons:linkedin" class="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Related Posts -->
      <div class="mt-20 pt-12 border-t border-gray-200">
        <h2 class="text-3xl font-bold text-gray-900 mb-10">Related Articles</h2>
        <div class="grid md:grid-cols-2 gap-8">
          <article
            v-for="relatedPost in relatedPosts"
            :key="relatedPost.id"
            class="group"
          >
            <NuxtLink :to="`/blog/${relatedPost.slug}`" class="block">
              <div class="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300">
                <div class="relative h-48 overflow-hidden bg-gray-100">
                  <img
                    :src="`https://images.unsplash.com/photo-${getPlaceholderImage(relatedPost.id)}?w=600&h=400&fit=crop&q=80`"
                    :alt="relatedPost.title"
                    class="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    loading="lazy"
                    @error="handleImageError"
                  />
                </div>
                <div class="p-6">
                  <h3 class="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary-600 transition-colors line-clamp-2">
                    {{ relatedPost.title }}
                  </h3>
                  <p class="text-gray-600 line-clamp-2">{{ relatedPost.excerpt }}</p>
                </div>
              </div>
            </NuxtLink>
          </article>
        </div>
      </div>
    </article>
  </div>
</template>

<script setup>
import { useImageFallback } from '~/composables/useImageFallback'

const route = useRoute()
const slug = route.params.slug
const { handleImageError } = useImageFallback()

// Blog posts data
const allPosts = {
  '10-tips-for-better-sleep': {
    id: 1,
    slug: '10-tips-for-better-sleep',
    title: '10 Essential Tips for Better Sleep and Rest',
    excerpt: 'Discover proven strategies to improve your sleep quality and wake up feeling refreshed and energized every morning.',
    category: 'Wellness',
    author: 'Dr. Sarah Johnson',
    authorBio: 'Dr. Sarah Johnson is a board-certified sleep medicine specialist with over 15 years of experience helping patients achieve better sleep.',
    date: '2024-01-15',
    readTime: 8,
    content: [
      {
        heading: 'Understanding Sleep Quality',
        paragraphs: [
          'Sleep is one of the most important aspects of our health, yet many people struggle to get quality rest. Quality sleep affects everything from our mood and energy levels to our immune system and cognitive function.',
          'In this comprehensive guide, we\'ll explore ten essential tips that can help you improve your sleep quality and establish healthy sleep habits that will benefit you for years to come.'
        ]
      },
      {
        heading: 'Tip 1: Establish a Consistent Sleep Schedule',
        paragraphs: [
          'Going to bed and waking up at the same time every day, even on weekends, helps regulate your body\'s internal clock. This consistency makes it easier to fall asleep and wake up naturally.'
        ],
        bullets: [
          'Set a bedtime that allows for 7-9 hours of sleep',
          'Wake up at the same time every morning',
          'Avoid sleeping in on weekends by more than an hour'
        ]
      },
      {
        heading: 'Tip 2: Create a Relaxing Bedtime Routine',
        paragraphs: [
          'A calming pre-sleep routine signals to your body that it\'s time to wind down. This can include activities like reading, taking a warm bath, or practicing relaxation techniques.'
        ],
        image: true
      }
    ],
    takeaways: [
      'Consistency is key to improving sleep quality',
      'Your sleep environment significantly impacts rest',
      'Technology should be avoided before bedtime',
      'Regular exercise promotes better sleep'
    ]
  },
  'healthy-eating-guide': {
    id: 2,
    slug: 'healthy-eating-guide',
    title: 'Complete Guide to Healthy Eating Habits',
    excerpt: 'Learn how to build a balanced diet that supports your health goals and provides all the nutrients your body needs.',
    category: 'Nutrition',
    author: 'Dr. Michael Chen',
    authorBio: 'Dr. Michael Chen is a registered dietitian and nutrition expert specializing in preventive health and wellness.',
    date: '2024-01-10',
    readTime: 10,
    content: [
      {
        heading: 'The Foundation of Healthy Eating',
        paragraphs: [
          'Healthy eating is not about strict dietary limitations or depriving yourself of the foods you love. Rather, it\'s about feeling great, having more energy, and stabilizing your mood.',
          'A balanced diet provides your body with the nutrients it needs to function correctly. Without balanced nutrition, your body is more prone to disease, infection, and fatigue.'
        ]
      }
    ],
    takeaways: [
      'Focus on whole, unprocessed foods',
      'Include a variety of fruits and vegetables',
      'Stay hydrated throughout the day',
      'Practice portion control'
    ]
  },
  'exercise-routine-beginners': {
    id: 3,
    slug: 'exercise-routine-beginners',
    title: 'Best Exercise Routine for Beginners',
    excerpt: 'Start your fitness journey with this comprehensive guide to building an effective and sustainable exercise routine.',
    category: 'Fitness',
    author: 'Dr. Emily Rodriguez',
    authorBio: 'Dr. Emily Rodriguez is a certified fitness trainer and sports medicine physician with expertise in exercise physiology.',
    date: '2024-01-08',
    readTime: 12,
    content: [
      {
        heading: 'Getting Started with Exercise',
        paragraphs: [
          'Starting an exercise routine can be intimidating, but it doesn\'t have to be. The key is to start slowly and gradually increase intensity and duration.',
          'This guide will help you create a sustainable exercise routine that fits your lifestyle and fitness level.'
        ]
      }
    ],
    takeaways: [
      'Start with low-intensity exercises',
      'Gradually increase duration and intensity',
      'Include both cardio and strength training',
      'Listen to your body and rest when needed'
    ]
  },
  'stress-management-techniques': {
    id: 4,
    slug: 'stress-management-techniques',
    title: 'Effective Stress Management Techniques',
    excerpt: 'Explore practical methods to manage stress and improve your mental well-being in today\'s fast-paced world.',
    category: 'Mental Health',
    author: 'Dr. David Thompson',
    authorBio: 'Dr. David Thompson is a licensed psychologist specializing in stress management and mental wellness.',
    date: '2024-01-05',
    readTime: 9,
    content: [
      {
        heading: 'Understanding Stress',
        paragraphs: [
          'Stress is a natural response to challenges and demands in life. While some stress can be motivating, chronic stress can have negative effects on your health.',
          'Learning to manage stress effectively is crucial for maintaining both physical and mental well-being.'
        ]
      }
    ],
    takeaways: [
      'Identify your stress triggers',
      'Practice relaxation techniques regularly',
      'Maintain a healthy work-life balance',
      'Seek professional help when needed'
    ]
  },
  'hydration-importance': {
    id: 5,
    slug: 'hydration-importance',
    title: 'Why Hydration is Crucial for Your Health',
    excerpt: 'Understand the importance of staying hydrated and how proper water intake affects your overall health and energy levels.',
    category: 'Wellness',
    author: 'Dr. Lisa Anderson',
    authorBio: 'Dr. Lisa Anderson is a wellness expert and nutritionist focused on preventive health and hydration science.',
    date: '2024-01-03',
    readTime: 7,
    content: [
      {
        heading: 'The Role of Water in Your Body',
        paragraphs: [
          'Water makes up about 60% of your body weight and is essential for nearly every bodily function. From regulating temperature to transporting nutrients, water plays a vital role in maintaining your health.',
          'Dehydration can lead to fatigue, headaches, and decreased cognitive function. Understanding how to stay properly hydrated is fundamental to your well-being.'
        ]
      }
    ],
    takeaways: [
      'Drink at least 8 glasses of water daily',
      'Monitor your hydration levels',
      'Increase intake during exercise',
      'Eat water-rich foods'
    ]
  },
  'preventive-healthcare': {
    id: 6,
    slug: 'preventive-healthcare',
    title: 'The Importance of Preventive Healthcare',
    excerpt: 'Learn why regular checkups and preventive care are essential for maintaining long-term health and catching issues early.',
    category: 'Health',
    author: 'Dr. James Wilson',
    authorBio: 'Dr. James Wilson is a preventive medicine specialist with over 20 years of experience in public health.',
    date: '2024-01-01',
    readTime: 11,
    content: [
      {
        heading: 'What is Preventive Healthcare?',
        paragraphs: [
          'Preventive healthcare involves measures taken to prevent diseases rather than treating them after they occur. This includes regular checkups, screenings, vaccinations, and lifestyle modifications.',
          'Investing in preventive care can save lives, reduce healthcare costs, and improve quality of life.'
        ]
      }
    ],
    takeaways: [
      'Schedule regular health checkups',
      'Stay up to date with vaccinations',
      'Participate in recommended screenings',
      'Maintain a healthy lifestyle'
    ]
  }
}

const post = allPosts[slug]

if (!post) {
  throw createError({ statusCode: 404, statusMessage: 'Post not found' })
}

const relatedPosts = computed(() => {
  return Object.values(allPosts)
    .filter(p => p.id !== post.id && p.category === post.category)
    .slice(0, 2)
})

// Placeholder images from Unsplash
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

const getInitials = (name) => {
  return name.split(' ').map(n => n[0]).join('').toUpperCase()
}

const formatDate = (dateString) => {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

useHead({
  title: `${post.title} - Health & Wellness Blog`,
  meta: [
    {
      name: 'description',
      content: post.excerpt
    },
    {
      property: 'og:title',
      content: post.title
    },
    {
      property: 'og:description',
      content: post.excerpt
    },
    {
      property: 'og:type',
      content: 'article'
    },
    {
      name: 'article:published_time',
      content: post.date
    },
    {
      name: 'article:author',
      content: post.author
    }
  ]
})
</script>

<style scoped>
.line-clamp-2 {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
</style>
