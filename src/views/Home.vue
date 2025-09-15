<template>
  <div class="pt-20">
    <SEOHead 
      title="Mouhamina Law Office - Leading Legal Consultancy in Syria | Damascus Lawyers"
      description="Expert legal services in Syria including NGO registration, business licensing, legal representation, and international legal compliance. Founded by Rula Bash Imam with 18+ years experience serving 117+ organizations."
      keywords="Syria lawyer, legal consultancy Syria, Damascus law firm, civil society registration, NGO licensing Syria, legal representation Damascus, business law Syria, international legal services, Rula Bash Imam, محامينا"
      url="/"
    />
    <!-- Hero Section -->
    <section class="relative min-h-screen flex items-center justify-center gradient-overlay" role="banner" aria-label="Main hero section introducing Mouhamina Law Office">
      <div class="absolute inset-0 bg-gradient-to-r from-secondary/90 to-primary/20 z-10"></div>
      <div class="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589829545856-d10d557cf95f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional legal office in Damascus Syria - Mouhamina Law Office building exterior" 
          class="w-full h-full object-cover"
          loading="eager"
          decoding="async"
        />
      </div>
      
      <div class="relative z-20 text-center text-white px-6 max-w-4xl mx-auto">
        <div class="animate-fade-in">
          <img src="/logo.jpg" alt="Mouhamina Logo" class="mx-auto mb-8 h-32 w-32 rounded-full object-cover border-4 border-white shadow-2xl luxury-float">
          <h1 class="text-5xl md:text-7xl font-serif font-bold mb-6">
            {{ $t('home.hero.title') }}
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-gray-200">
            {{ $t('home.hero.subtitle') }}
          </p>
          <p class="text-lg mb-12 leading-relaxed max-w-3xl mx-auto">
            {{ $t('home.hero.description') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <router-link to="/services" class="btn-primary">
              {{ $t('home.hero.ourServices') }}
            </router-link>
            <router-link to="/contact" class="btn-secondary">
              {{ $t('home.hero.getConsultation') }}
            </router-link>
          </div>
        </div>
      </div>

      <!-- Scroll Indicator -->
      <div class="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
        <div class="animate-bounce">
          <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
          </svg>
        </div>
      </div>
    </section>

    <!-- Stats Section -->
    <section class="py-20 bg-accent-cream">
      <div class="container mx-auto px-6">
        <AnimatedSection>
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <CounterAnimation 
              :end-value="18" 
              suffix="+" 
              :label="$t('home.stats.yearsExperience')"
            />
            <CounterAnimation 
              :end-value="117" 
              suffix="+" 
              :label="$t('home.stats.organizationsServed')"
            />
            <CounterAnimation 
              :end-value="55" 
              suffix="+" 
              :label="$t('home.stats.companiesLicensed')"
            />
            <CounterAnimation 
              :end-value="931" 
              suffix="+" 
              :label="$t('home.stats.traineesBenefited')"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>

    <!-- About Preview -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-title">{{ $t('home.about.title') }}</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              {{ $t('home.about.description1') }}
            </p>
            <p class="text-gray-600 mb-8">
              {{ $t('home.about.description2') }}
            </p>
            <router-link to="/about" class="btn-primary">
              {{ $t('common.learnMore') }}
            </router-link>
          </div>
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1676181739859-08330dea8999?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NDB8fGxhd3xlbnwwfHwwfHx8MA%3D%3D" 
              alt="Professional law and justice imagery representing Mouhamina Law Office legal expertise" 
              class="rounded-2xl shadow-2xl"
            />
            <div class="absolute -bottom-6 -right-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <div class="text-3xl font-bold">{{ $t('common.since') }} 2007</div>
              <div class="text-sm">{{ $t('home.about.practicingLaw') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Services Preview -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('home.services.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('home.services.description') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div 
            v-for="(service, index) in featuredServices" 
            :key="service.id" 
            class="card-elegant p-8" 
            :style="{ animationDelay: `${index * 0.2}s` }"
          >
            <div class="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
              <svg class="w-8 h-8 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path v-html="service.icon"></path>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">
              {{ $t(service.titleKey) }}
            </h3>
            <p class="text-gray-600">
              {{ $t(service.descriptionKey) }}
            </p>
          </div>
        </div>

        <div class="text-center mt-12">
          <router-link to="/services" class="btn-primary">
            {{ $t('home.services.viewAllServices') }}
          </router-link>
        </div>
      </div>
    </section>

    <!-- CTA Section -->
    <section class="py-20 bg-secondary text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6">
          {{ $t('home.cta.title') }}
        </h2>
        <p class="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          {{ $t('home.cta.description') }}
        </p>
        <router-link to="/contact" class="btn-primary">
          {{ $t('home.cta.contactNow') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import AnimatedSection from '../components/AnimatedSection.vue'
import CounterAnimation from '../components/CounterAnimation.vue'
import SEOHead from '../components/SEOHead.vue'

export default {
  name: 'Home',
  components: {
    AnimatedSection,
    CounterAnimation,
    SEOHead
  },
  data() {
    return {
      featuredServices: [
        {
          id: 1,
          titleKey: 'services.consultancy.title',
          descriptionKey: 'services.consultancy.description',
          icon: 'M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
        },
        {
          id: 2,
          titleKey: 'services.registration.title',
          descriptionKey: 'services.registration.description',
          icon: 'M9 5H7a2 2 0 00-2 2v6a2 2 0 002 2h2m4-8V5a2 2 0 00-2-2H9m4 4v6m0-6h2a2 2 0 012 2v6a2 2 0 01-2 2h-2'
        },
        {
          id: 3,
          titleKey: 'services.representation.title',
          descriptionKey: 'services.representation.description',
          icon: 'M17.657 18.657A8 8 0 716.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z'
        }
      ]
    }
  }
}
</script>