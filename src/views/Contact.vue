<template>
  <div class="pt-20">
    <SEOHead 
      title="Contact Mouhamina Law Office - Legal Consultation Damascus Syria"
      description="Contact Mouhamina Law Office for expert legal consultation in Syria. Located in Damascus, Al-Salihiyah. Call +963 932 244 513 or email rl.legal.consultancy@gmail.com for professional legal services."
      keywords="contact Mouhamina lawyer, Damascus law office contact, Syria legal consultation, Rula Bash Imam contact, legal services Damascus, Al-Salihiyah law firm, Syria lawyer phone number"
      url="/contact"
    />
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-secondary to-secondary-light text-white">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6">{{ $t('contact.hero.title') }}</h1>
          <p class="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {{ $t('contact.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Contact Form & Info Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <!-- Professional Image -->
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1521587760476-6c12a4b040da?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
              alt="Professional law library with legal books and scales of justice - Mouhamina Law Office Damascus"
              class="w-full h-full object-cover rounded-2xl shadow-2xl"
              loading="lazy"
              decoding="async"
            />
            <!-- Overlay with logo -->
            <div class="absolute inset-0 bg-gradient-to-t from-secondary/80 via-transparent to-transparent rounded-2xl"></div>
            <div class="absolute bottom-6 left-6 right-6">
              <div class="flex items-center space-x-4">
                <img src="/logo.jpg" alt="Mouhamina Logo" class="h-16 w-16 rounded-full object-cover border-3 border-white shadow-lg">
                <div class="text-white">
                  <h3 class="text-xl font-serif font-bold">{{ $t('contact.professional.title') }}</h3>
                  <p class="text-sm opacity-90">{{ $t('contact.professional.subtitle') }}</p>
                </div>
              </div>
            </div>
          </div>

          <!-- Contact Information -->
          <div class="space-y-8">
            <!-- Office Info -->
            <div class="bg-accent-cream rounded-2xl p-8">
              <h3 class="text-2xl font-serif font-bold text-secondary mb-6">{{ $t('contact.info.title') }}</h3>
              <div class="space-y-6">
                <!-- Address -->
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-secondary mb-1">{{ $t('contact.info.office.title') }}</h4>
                    <p class="text-gray-600">{{ $t('contact.info.office.address1') }}</p>
                    <p class="text-gray-600">{{ $t('contact.info.office.address2') }}</p>
                  </div>
                </div>

                <!-- Phone -->
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-secondary mb-1">{{ $t('contact.info.phone.title') }}</h4>
                    <p class="text-gray-600">{{ $t('contact.info.phone.office') }}</p>
                    <p class="text-gray-600">{{ $t('contact.info.phone.rula') }}</p>
                    <p class="text-gray-600">{{ $t('contact.info.phone.louay') }}</p>
                  </div>
                </div>

                <!-- Email -->
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-secondary mb-1">{{ $t('contact.info.email.title') }}</h4>
                    <p class="text-gray-600">{{ $t('contact.info.email.address') }}</p>
                  </div>
                </div>

                <!-- Office Hours -->
                <div class="flex items-start space-x-4">
                  <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h4 class="font-semibold text-secondary mb-1">{{ $t('contact.info.hours.title') }}</h4>
                    <p class="text-gray-600">{{ $t('contact.info.hours.schedule1') }}</p>
                    <p class="text-gray-600">{{ $t('contact.info.hours.schedule2') }}</p>
                    <p class="text-gray-600">{{ $t('contact.info.hours.schedule3') }}</p>
                  </div>
                </div>
              </div>
            </div>

            <!-- Quick Actions -->
            <div class="bg-white rounded-2xl shadow-lg p-8">
              <h3 class="text-xl font-serif font-bold text-secondary mb-6">{{ $t('contact.quickActions.title') }}</h3>
              <div class="space-y-4">
                <a 
                  href="tel:+963932244513" 
                  class="flex items-center space-x-4 p-4 bg-green-50 rounded-lg hover:bg-green-100 transition-colors duration-300"
                >
                  <div class="w-10 h-10 bg-green-600 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">{{ $t('contact.quickActions.callNow') }}</p>
                    <p class="text-sm text-gray-600">{{ $t('contact.quickActions.callDesc') }}</p>
                  </div>
                </a>

                <a 
                  href="mailto:rl.legal.consultancy@gmail.com" 
                  class="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg hover:bg-blue-100 transition-colors duration-300"
                >
                  <div class="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">{{ $t('contact.quickActions.sendEmail') }}</p>
                    <p class="text-sm text-gray-600">{{ $t('contact.quickActions.emailDesc') }}</p>
                  </div>
                </a>

                <router-link 
                  to="/services" 
                  class="flex items-center space-x-4 p-4 bg-primary/10 rounded-lg hover:bg-primary/20 transition-colors duration-300"
                >
                  <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
                    <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                      <path fill-rule="evenodd" d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <p class="font-semibold text-gray-800">{{ $t('contact.quickActions.viewServices') }}</p>
                    <p class="text-sm text-gray-600">{{ $t('contact.quickActions.servicesDesc') }}</p>
                  </div>
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Google Maps Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('contact.map.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            Located in the heart of Damascus, Al-Salihiyah district on Al-Abed Street. 
            Our office is easily accessible and we welcome appointments.
          </p>
        </div>
        
        <div class="max-w-6xl mx-auto">
          <div class="bg-white rounded-2xl shadow-xl overflow-hidden">
            <!-- Google Maps Embed -->
            <div class="relative h-96 md:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3324.7899944580464!2d36.29163!3d33.51909!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDMxJzA4LjciTiAzNsKwMTcnMzcuOCJF!5e0!3m2!1sen!2s!4v1000000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
                class="w-full h-full"
              ></iframe>
            </div>
            
            <!-- Map Info Overlay -->
            <div class="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm p-4 rounded-lg shadow-lg max-w-sm">
              <div class="flex items-start space-x-3">
                <div class="w-10 h-10 bg-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <svg class="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <div>
                  <h4 class="font-semibold text-secondary mb-1">{{ $t('brand.name') }} {{ $t('brand.tagline') }}</h4>
                  <p class="text-sm text-gray-600">{{ $t('contact.info.office.address1') }}</p>
                  <p class="text-sm text-gray-600">{{ $t('contact.info.office.address2') }}</p>
                  <p class="text-xs text-primary mt-1">{{ $t('contact.map.cta') }}</p>
                </div>
              </div>
            </div>
          </div>
          
          <!-- Additional Location Info -->
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="font-semibold text-secondary mb-2">{{ $t('contact.info.hours.title') }}</h3>
              <p class="text-sm text-gray-600">{{ $t('contact.info.hours.schedule1') }}</p>
              <p class="text-sm text-gray-600">{{ $t('contact.info.hours.schedule2') }}</p>
              <p class="text-sm text-gray-600">{{ $t('contact.info.hours.schedule3') }}</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"/>
                  <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1V8a1 1 0 00-1-1h-3z"/>
                </svg>
              </div>
              <h3 class="font-semibold text-secondary mb-2">{{ $t('contact.map.parking.title') }}</h3>
              <p class="text-sm text-gray-600">{{ $t('contact.map.parking.street') }}</p>
              <p class="text-sm text-gray-600">{{ $t('contact.map.parking.public') }}</p>
            </div>
            
            <div class="bg-white p-6 rounded-lg shadow-lg text-center">
              <div class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="font-semibold text-secondary mb-2">{{ $t('contact.map.appointments.title') }}</h3>
              <p class="text-sm text-gray-600">{{ $t('contact.map.appointments.walkins') }}</p>
              <p class="text-sm text-gray-600">{{ $t('contact.map.appointments.recommended') }}</p>
              <p class="text-sm text-gray-600">{{ $t('contact.map.appointments.callAhead') }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- FAQ Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('contact.faq.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('contact.faq.subtitle') }}
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="space-y-6">
            <div 
              v-for="(faq, index) in faqs" 
              :key="index"
              class="bg-white rounded-lg shadow-lg overflow-hidden"
            >
              <button 
                @click="toggleFaq(index)"
                class="w-full px-8 py-6 text-left flex items-center justify-between hover:bg-gray-50 transition-colors duration-300"
              >
                <h3 class="text-lg font-semibold text-secondary">{{ faq.question }}</h3>
                <svg 
                  class="w-5 h-5 text-primary transition-transform duration-300"
                  :class="{ 'transform rotate-180': openFaq === index }"
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>
              <div 
                v-if="openFaq === index"
                class="px-8 pb-6"
              >
                <p class="text-gray-600 leading-relaxed">{{ faq.answer }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SEOHead from '../components/SEOHead.vue'

export default {
  name: 'Contact',
  components: {
    SEOHead
  },
  data() {
    return {
      openFaq: null,
      faqs: [
        {
          question: this.$t('contact.faq.items.q1.question'),
          answer: this.$t('contact.faq.items.q1.answer')
        },
        {
          question: this.$t('contact.faq.items.q2.question'),
          answer: this.$t('contact.faq.items.q2.answer')
        },
        {
          question: this.$t('contact.faq.items.q3.question'),
          answer: this.$t('contact.faq.items.q3.answer')
        },
        {
          question: this.$t('contact.faq.items.q4.question'),
          answer: this.$t('contact.faq.items.q4.answer')
        },
        {
          question: this.$t('contact.faq.items.q5.question'),
          answer: this.$t('contact.faq.items.q5.answer')
        },
        {
          question: this.$t('contact.faq.items.q6.question'),
          answer: this.$t('contact.faq.items.q6.answer')
        }
      ]
    }
  },
  methods: {
    toggleFaq(index) {
      this.openFaq = this.openFaq === index ? null : index
    }
  }
}
</script>