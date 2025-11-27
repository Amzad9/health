<template>
  <section class="section-padding bg-gradient-to-b from-white via-gray-50 to-white relative overflow-hidden" id="faqs" aria-labelledby="faqs-heading">
    <!-- Background Decoration -->
    <div class="absolute top-0 left-0 w-96 h-96 bg-primary-100/20 rounded-full blur-3xl -ml-48 -mt-48"></div>
    <div class="absolute bottom-0 right-0 w-96 h-96 bg-medical-100/20 rounded-full blur-3xl -mr-48 -mb-48"></div>

    <div class="container-custom relative z-10">
      <div class="text-center mb-20">
        <div class="inline-block mb-4">
          <span class="px-4 py-2 bg-accent-100 text-accent-700 rounded-full text-sm font-semibold">
            FAQs
          </span>
        </div>
        <h2 id="faqs-heading" class="section-title text-gray-900 mb-6">
          Frequently Asked
          <span class="block text-gradient">Questions</span>
        </h2>
        <p class="section-subtitle">
          Find answers to common questions about our services, appointments, and more
        </p>
      </div>
      
      <div class="max-w-4xl mx-auto">
        <div
          v-for="(faq, index) in faqs"
          :key="faq.id"
          class="mb-4"
        >
          <div class="card border border-gray-200 hover:border-primary-300 transition-all duration-300 overflow-hidden">
            <button
              @click="toggleFaq(index)"
              class="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-primary-600 focus:ring-offset-2 rounded-xl transition-colors group"
              :aria-expanded="openFaqs[index]"
              :aria-controls="`faq-answer-${faq.id}`"
            >
              <span class="font-bold text-gray-900 text-lg pr-4 group-hover:text-primary-600 transition-colors">
                {{ faq.question }}
              </span>
              <div class="flex-shrink-0">
                <div class="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center transition-transform duration-300" :class="{ 'rotate-180': openFaqs[index] }">
                  <svg
                    class="w-5 h-5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>
            </button>
            <div
              :id="`faq-answer-${faq.id}`"
              v-show="openFaqs[index]"
              class="px-8 pb-6 text-gray-600 leading-relaxed text-lg animate-fade-in-down"
            >
              {{ faq.answer }}
            </div>
          </div>
        </div>
      </div>

      <!-- Still Have Questions CTA -->
      <div class="mt-16 text-center">
        <div class="card-gradient p-8 md:p-12 max-w-3xl mx-auto rounded-3xl">
          <h3 class="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Still Have Questions?
          </h3>
          <p class="text-lg text-gray-600 mb-6">
            Our team is here to help! Get in touch with us for any additional information.
          </p>
          <NuxtLink to="/contact" class="btn-primary inline-flex items-center">
            <span>Contact Us</span>
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
const faqs = [
  {
    id: 1,
    question: 'What services do you provide?',
    answer: 'We offer a comprehensive range of healthcare services including general health checkups, diet and nutrition consultation, physiotherapy, skin and hair treatment, mental wellness coaching, and health counseling. Each service is tailored to meet your individual needs with personalized care plans.'
  },
  {
    id: 2,
    question: 'Do you offer online consultations?',
    answer: 'Yes, we offer online consultations for many of our services. You can book a virtual appointment through our contact page or by calling our office. Online consultations are convenient and allow you to receive professional healthcare advice from the comfort of your home.'
  },
  {
    id: 3,
    question: 'How can I book an appointment?',
    answer: 'You can book an appointment by calling us at +1 (234) 567-890, filling out the contact form on our website, or using the WhatsApp button. We also accept walk-ins, though appointments are recommended to ensure availability and reduce waiting times.'
  },
  {
    id: 4,
    question: 'Do you accept insurance?',
    answer: 'Yes, we accept most major insurance plans. Please contact our office to verify if your specific insurance plan is accepted. We also offer flexible payment options and affordable self-pay rates for those without insurance coverage.'
  },
  {
    id: 5,
    question: 'What are your operating hours?',
    answer: 'We are open Monday through Saturday from 9:00 AM to 6:00 PM. We also offer emergency support 24/7. For urgent matters outside regular hours, please call our emergency line or use the WhatsApp button for immediate assistance.'
  },
  {
    id: 6,
    question: 'How long does a typical consultation take?',
    answer: 'Consultation times vary depending on the service. A general health checkup typically takes 30-45 minutes, while specialized consultations may take 45-60 minutes. Initial consultations are usually longer to allow time for a thorough assessment and discussion of your health goals.'
  },
  {
    id: 7,
    question: 'Do you provide follow-up care?',
    answer: 'Absolutely! We believe in continuity of care and provide follow-up consultations to monitor your progress. Our team will work with you to create a personalized care plan that includes regular check-ins and adjustments as needed to ensure the best outcomes.'
  },
  {
    id: 8,
    question: 'Are your doctors certified?',
    answer: 'Yes, all our healthcare professionals are fully certified and licensed. Our team includes board-certified doctors, registered dietitians, licensed physiotherapists, and certified mental health counselors. We maintain the highest standards of professional qualifications and continuous education.'
  }
]

const openFaqs = ref(Array(faqs.length).fill(false))

const toggleFaq = (index) => {
  openFaqs.value[index] = !openFaqs.value[index]
}

useHead({
  script: [
    {
      type: 'application/ld+json',
      children: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faqs.map(faq => ({
          '@type': 'Question',
          name: faq.question,
          acceptedAnswer: {
            '@type': 'Answer',
            text: faq.answer
          }
        }))
      })
    }
  ]
})
</script>
