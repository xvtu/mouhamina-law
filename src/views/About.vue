<template>
  <div class="pt-20">
    <SEOHead 
      title="About Mouhamina Law Office - Syria's Premier Legal Consultancy Since 2007"
      description="Learn about Mouhamina Law Office, founded by Rula Bash Imam in 2014. Discover our mission, vision, core values, and achievements in providing expert legal services in Syria for 18+ years."
      keywords="About Mouhamina, Rula Bash Imam, Syria law firm history, legal consultancy Damascus, civil society law Syria, business registration Damascus, legal expertise Syria"
      url="/about"
    />
    <!-- Hero Section -->
    <section class="py-20 bg-gradient-to-br from-secondary to-secondary-light text-white">
      <div class="container mx-auto px-6">
        <div class="text-center max-w-4xl mx-auto">
          <h1 class="text-5xl md:text-6xl font-serif font-bold mb-6">{{ $t('about.hero.title') }}</h1>
          <p class="text-xl md:text-2xl text-gray-200 leading-relaxed">
            {{ $t('about.hero.subtitle') }}
          </p>
        </div>
      </div>
    </section>

    <!-- Introduction Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-title">{{ $t('about.introduction.title') }}</h2>
            <p class="text-lg text-gray-600 mb-6 leading-relaxed">
              {{ $t('home.about.description1') }}
            </p>
            <p class="text-gray-600 mb-8">
              {{ $t('home.about.description2') }}
            </p>
            <div class="bg-primary/10 p-6 rounded-lg">
              <h3 class="font-serif text-xl font-semibold text-secondary mb-2">{{ $t('about.introduction.mission') }}</h3>
              <p class="text-gray-700">
                {{ $t('about.introduction.missionText') }}
              </p>
            </div>
          </div>
          <div class="relative">
            <img 
              src="https://images.unsplash.com/photo-1521791136064-7986c2920216?ixlib=rb-4.0.3&auto=format&fit=crop&w=1469&q=80" 
              alt="Legal Office" 
              class="rounded-2xl shadow-2xl"
            />
            <div class="absolute -top-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
              <div class="text-2xl font-bold text-primary">2014</div>
              <div class="text-sm text-gray-600">{{ $t('common.established') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Vision Section -->
    <section class="py-20 bg-accent-cream">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('about.vision.title') }}</h2>
          <div class="max-w-4xl mx-auto bg-white p-8 rounded-2xl shadow-lg">
            <p class="text-xl text-gray-700 leading-relaxed">
              {{ $t('about.vision.text') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Core Values Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('about.values.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-3xl mx-auto">
            {{ $t('about.values.description') }}
          </p>
        </div>
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <!-- Integrity -->
          <div class="card-elegant p-8 text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('about.values.integrity.title') }}</h3>
            <p class="text-gray-600">
              {{ $t('about.values.integrity.description') }}
            </p>
          </div>

          <!-- Citizenship -->
          <div class="card-elegant p-8 text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3z"/>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('about.values.citizenship.title') }}</h3>
            <p class="text-gray-600">
              {{ $t('about.values.citizenship.description') }}
            </p>
          </div>

          <!-- Confidentiality -->
          <div class="card-elegant p-8 text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd"/>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('about.values.confidentiality.title') }}</h3>
            <p class="text-gray-600">
              {{ $t('about.values.confidentiality.description') }}
            </p>
          </div>

          <!-- Innovation -->
          <div class="card-elegant p-8 text-center">
            <div class="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg class="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"/>
              </svg>
            </div>
            <h3 class="text-xl font-serif font-semibold text-secondary mb-4">{{ $t('about.values.innovation.title') }}</h3>
            <p class="text-gray-600">
              {{ $t('about.values.innovation.description') }}
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Key Achievements Section -->
    <section class="py-20 bg-white">
      <div class="container mx-auto px-6">
        <div class="text-center mb-16">
          <h2 class="section-title">{{ $t('about.achievements.title') }}</h2>
          <p class="text-lg text-gray-600 max-w-4xl mx-auto">
            {{ $t('about.achievements.description') }}
          </p>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div class="text-4xl font-bold text-primary mb-4">55+</div>
            <h3 class="text-lg font-semibold text-secondary mb-2">{{ $t('about.achievements.organizationsLicensed') }}</h3>
            <p class="text-gray-600">
              Facilitating the establishment and licensing of organizations and companies 
              across different Syrian provinces.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div class="text-4xl font-bold text-primary mb-4">117+</div>
            <h3 class="text-lg font-semibold text-secondary mb-2">{{ $t('about.achievements.organizationsConsulted') }}</h3>
            <p class="text-gray-600">
              Providing legal consultancy to local and international organizations, 
              ensuring compliance with Syrian laws and international best practices.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div class="text-4xl font-bold text-primary mb-4">11</div>
            <h3 class="text-lg font-semibold text-secondary mb-2">{{ $t('about.achievements.legalRepresentations') }}</h3>
            <p class="text-gray-600">
              Representing entities legally, including companies, NGOs, 
              and civil society organizations.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div class="text-4xl font-bold text-primary mb-4">931+</div>
            <h3 class="text-lg font-semibold text-secondary mb-2">{{ $t('about.achievements.traineesBenefited') }}</h3>
            <p class="text-gray-600">
              Developing and delivering legal training materials, 
              benefiting trainees from different sectors.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div class="text-4xl font-bold text-primary mb-4">45</div>
            <h3 class="text-lg font-semibold text-secondary mb-2">{{ $t('about.achievements.legalContracts') }}</h3>
            <p class="text-gray-600">
              Drafting and harmonizing legal contracts, ensuring alignment 
              between local regulations and international requirements.
            </p>
          </div>

          <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
            <div class="text-4xl font-bold text-primary mb-4">110+</div>
            <h3 class="text-lg font-semibold text-secondary mb-2">{{ $t('about.achievements.legalNetwork') }}</h3>
            <p class="text-gray-600">
              Building a strong network of legal practitioners and activists 
              across various Syrian governorates.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Current Focus Section -->
    <section class="py-20 bg-gray-50">
      <div class="container mx-auto px-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 class="section-title">{{ $t('about.currentFocus.title') }}</h2>
            <p class="text-lg text-gray-600 mb-8">
              {{ $t('about.currentFocus.description') }}
            </p>
            
            <div class="space-y-6">
              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-white text-sm font-bold">1</span>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary mb-2">{{ $t('about.currentFocus.items.internationalOrganizations') }}</h3>
                  <p class="text-gray-600">
                    Facilitating the registration and legal activation of international organizations 
                    and civil society institutions within Syria.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-white text-sm font-bold">2</span>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary mb-2">{{ $t('about.currentFocus.items.legalAccessibility') }}</h3>
                  <p class="text-gray-600">
                    Enhancing legal accessibility and compliance mechanisms for organizations 
                    operating in the country.
                  </p>
                </div>
              </div>

              <div class="flex items-start space-x-4">
                <div class="w-8 h-8 bg-primary rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <span class="text-white text-sm font-bold">3</span>
                </div>
                <div>
                  <h3 class="font-semibold text-secondary mb-2">{{ $t('about.currentFocus.items.legalReforms') }}</h3>
                  <p class="text-gray-600">
                    Advocating for legal and policy reforms that promote civil rights and governance.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div class="relative">
            <img 
              :src="legalTeamWorking" 
              alt="Legal Team Working" 
              class="rounded-2xl shadow-2xl"
            />
            <div class="absolute -bottom-6 -left-6 bg-primary text-white p-6 rounded-lg shadow-lg">
              <div class="text-3xl font-bold">4+2</div>
              <div class="text-sm">{{ $t('about.currentFocus.legalExperts') }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SEOHead from '../components/SEOHead.vue'
import legalTeamWorking from '@/assets/DSC_1364.jpg'

export default {
  name: 'About',
  components: {
    SEOHead
  },
  data() {
    return {
      legalTeamWorking
    }
  }
}
</script>