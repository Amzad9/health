<template>
  <div>
    <HeroSection />
    <AboutSection id="about" />
    <ServicesSection id="services" />
    <WhyChooseUsSection />
    <TestimonialsSection id="testimonials" />
    <FAQsSection id="faqs" />
    <GallerySection />
    <HealthTipsScroll />
  </div>
</template>

<script setup>
useHead({
  title: 'Health & Wellness Center - Your Trusted Health Partner',
  meta: [
    {
      name: 'description',
      content: 'Comprehensive health and wellness services including general health checkups, diet consultation, physiotherapy, mental wellness coaching, and more. Book your appointment today!'
    },
    {
      name: 'keywords',
      content: 'health clinic, wellness center, medical services, health checkup, diet consultation, physiotherapy, mental wellness'
    },
    {
      property: 'og:title',
      content: 'Health & Wellness Center - Your Trusted Health Partner'
    },
    {
      property: 'og:description',
      content: 'Comprehensive health and wellness services with certified professionals and personalized care.'
    },
    {
      property: 'og:type',
      content: 'website'
    }
  ]
})

useSchemaOrg([
  {
    '@type': 'MedicalBusiness',
    name: 'Health & Wellness Center',
    description: 'Comprehensive health and wellness services',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '123 Health Street',
      addressLocality: 'Medical City',
      addressRegion: 'MC',
      postalCode: '12345',
      addressCountry: 'US'
    },
    telephone: '+1-234-567-890',
    priceRange: '$$',
    image: '/images/clinic.jpg'
  }
])
</script>

