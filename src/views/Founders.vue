<template>
  <div class="pt-20">
    <SEOHead 
      title="Founders & Team - Rula Bash Imam | Mouhamina Law Office Leadership"
      description="Meet Rula Bash Imam, founder of Mouhamina Law Office, and our expert legal team. Discover the leadership behind Syria's premier legal consultancy with 18+ years of experience in civil society and business law."
      keywords="Rula Bash Imam lawyer, Mouhamina founders, Syria legal team, Damascus law firm partners, legal experts Syria, Louay Shnoudy lawyer, civil society law expertise"
      url="/founders"
    />
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-secondary to-secondary-light text-white">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6">{{ $t('founders.hero.title') }}</h1>
          <p class="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {{ $t('founders.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Main Founder Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div class="relative">
            <img 
              :src="images.rulaMain" 
              alt="Rula Bash Imam" 
              class="rounded-2xl shadow-2xl w-full"
            />
            <div class="absolute -top-6 -right-6 bg-primary text-white p-4 rounded-lg shadow-lg">
              <div class="text-lg font-bold">{{ $t('founders.badges.founder') }}</div>
              <div class="text-sm">{{ $t('common.since') }} 2007</div>
            </div>
          </div>
          
          <div>
            <h2 class="section-title">{{ $t('founders.rula.name') }}</h2>
            <div class="text-primary text-lg font-semibold mb-6">
              {{ $t('founders.rula.title') }}
            </div>
            
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              <strong>Rula Bash Imam</strong> is the visionary founder of Mouhamina Law Office, established in 2014. 
              A practicing lawyer since 2007, she brings 18 years of extensive legal expertise to the Syrian 
              legal landscape.
            </p>
            
            <p class="text-gray-600 mb-8">
              Under her leadership, Mouhamina has become one of the leading legal consultancies in Syria, 
              specializing in supporting civil society organizations, businesses, and institutions through 
              strategic legal services tailored to both local and international clients.
            </p>

            <div class="bg-accent-cream p-6 rounded-lg mb-8">
              <h3 class="font-serif text-xl font-semibold text-secondary mb-3">{{ $t('founders.rula.philosophy') }}</h3>
              <p class="text-gray-700 italic">
                "{{ $t('founders.rula.philosophyText') }}"
              </p>
            </div>

            <div class="flex flex-col sm:flex-row gap-4">
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
                <span class="text-gray-600">+963 932 244 513</span>
              </div>
              <div class="flex items-center space-x-3">
                <svg class="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
                <span class="text-gray-600">rl.legal.consultancy@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Professional Journey -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('founders.journey.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('founders.journey.description') }}
          </p>
        </div>

        <div class="max-w-4xl mx-auto">
          <div class="relative">
            <!-- Timeline Line -->
            <div class="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-primary/20"></div>
            
            <!-- Timeline Items -->
            <div class="space-y-12">
              <!-- 2007 -->
              <div class="flex items-center">
                <div class="flex-1 text-right pr-8">
                  <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-serif font-semibold text-secondary mb-2">2007</h3>
                    <h4 class="text-primary font-semibold mb-2">{{ $t('founders.timeline.startedPractice') }}</h4>
                    <p class="text-gray-600">
                      Rula Bash Imam begins her career as a practicing lawyer, laying the foundation 
                      for her extensive legal expertise.
                    </p>
                  </div>
                </div>
                <div class="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div class="flex-1 pl-8"></div>
              </div>

              <!-- 2014 -->
              <div class="flex items-center">
                <div class="flex-1 pr-8"></div>
                <div class="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div class="flex-1 text-left pl-8">
                  <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-serif font-semibold text-secondary mb-2">2014</h3>
                    <h4 class="text-primary font-semibold mb-2">{{ $t('founders.timeline.foundedMouhamina') }}</h4>
                    <p class="text-gray-600">
                      Established Mouhamina Law Office, creating a specialized legal consultancy 
                      focused on civil society and business needs.
                    </p>
                  </div>
                </div>
              </div>

              <!-- 2020s -->
              <div class="flex items-center">
                <div class="flex-1 text-right pr-8">
                  <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-serif font-semibold text-secondary mb-2">2020s</h3>
                    <h4 class="text-primary font-semibold mb-2">{{ $t('founders.timeline.internationalRecognition') }}</h4>
                    <p class="text-gray-600">
                      Expanded partnerships with international organizations including UNDP, UNICEF, 
                      and Swiss Foreign Ministry, gaining accreditation as a legal training provider.
                    </p>
                  </div>
                </div>
                <div class="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div class="flex-1 pl-8"></div>
              </div>

              <!-- Present -->
              <div class="flex items-center">
                <div class="flex-1 pr-8"></div>
                <div class="w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg z-10"></div>
                <div class="flex-1 text-left pl-8">
                  <div class="bg-white p-6 rounded-lg shadow-lg">
                    <h3 class="text-xl font-serif font-semibold text-secondary mb-2">2025</h3>
                    <h4 class="text-primary font-semibold mb-2">{{ $t('founders.timeline.leadingPractice') }}</h4>
                    <p class="text-gray-600">
                      Continues to lead Mouhamina with a team of 4 legal experts and 2 lawyers, serving 117+ organizations 
                      and maintaining excellence in legal consultancy services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Team Section -->
    <section class="py-20">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('founders.team.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('founders.team.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <!-- Main Founder Card -->
          <div class="card-elegant p-8 text-center">
            <img 
              :src="images.rulaMain" 
              alt="Rula Bash Imam" 
              class="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 class="text-xl font-serif font-semibold text-secondary mb-2">Rula Bash Imam</h3>
            <p class="text-primary font-medium mb-4">Founder & Managing Partner</p>
            <p class="text-gray-600 text-sm mb-4">18+ years of legal expertise</p>
            <div class="flex justify-center space-x-3">
              <a href="tel:+963932244513" class="text-primary hover:text-primary-dark">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </a>
              <a href="mailto:rl.legal.consultancy@gmail.com" class="text-primary hover:text-primary-dark">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Team Member -->
          <div class="card-elegant p-8 text-center">
            <img 
              :src="images.officePortrait4" 
              alt="Louay Shnoudy" 
              class="w-24 h-24 rounded-full mx-auto mb-6 object-cover"
            />
            <h3 class="text-xl font-serif font-semibold text-secondary mb-2">Louay Shnoudy</h3>
            <p class="text-primary font-medium mb-4">Senior Legal Counsel</p>
            <p class="text-gray-600 text-sm mb-4">Specialized in corporate law</p>
            <div class="flex justify-center space-x-3">
              <a href="tel:+963944247225" class="text-primary hover:text-primary-dark">
                <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
                </svg>
              </a>
            </div>
          </div>

          <!-- Team Overview Card -->
          <div class="card-elegant p-8 text-center bg-primary/5">
            <div class="w-24 h-24 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-12 h-12 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold text-secondary mb-2">{{ $t('founders.team.teamOverview.title') }}</h3>
            <p class="text-primary font-medium mb-4">{{ $t('founders.team.teamOverview.subtitle') }}</p>
            <p class="text-gray-600 text-sm">
              Our team includes specialists in various legal fields, ensuring comprehensive 
              coverage for all client needs.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Expertise Areas -->
    <section class="py-20 bg-accent-cream">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('founders.expertise.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('founders.expertise.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 class="font-semibold text-secondary mb-2">{{ $t('founders.expertise.items.civilSociety.title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('founders.expertise.items.civilSociety.desc') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 class="font-semibold text-secondary mb-2">{{ $t('founders.expertise.items.corporate.title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('founders.expertise.items.corporate.desc') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 class="font-semibold text-secondary mb-2">{{ $t('founders.expertise.items.international.title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('founders.expertise.items.international.desc') }}</p>
          </div>
          
          <div class="bg-white p-6 rounded-lg shadow-lg text-center">
            <h3 class="font-semibold text-secondary mb-2">{{ $t('founders.expertise.items.training.title') }}</h3>
            <p class="text-sm text-gray-600">{{ $t('founders.expertise.items.training.desc') }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="py-20 bg-secondary text-white">
      <div class="container mx-auto px-6 text-center">
        <h2 class="text-4xl md:text-5xl font-serif font-bold mb-6">
          {{ $t('founders.cta.title') }}
        </h2>
        <p class="text-xl mb-8 text-gray-300 max-w-2xl mx-auto">
          {{ $t('founders.cta.description') }}
        </p>
        <router-link to="/contact" class="btn-primary">
          {{ $t('common.scheduleConsultation') }}
        </router-link>
      </div>
    </section>
  </div>
</template>

<script>
import SEOHead from '../components/SEOHead.vue'
import * as images from '@team-member-imges'

export default {
  name: 'Founders',
  components: {
    SEOHead
  },
  data() {
    return {
      images
    }
  }
}
</script>