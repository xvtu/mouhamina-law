<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-lg transition-all duration-300">
    <nav class="container mx-auto px-6 py-4">
      <div class="flex items-center justify-between" :class="{ 'flex-row-reverse': $i18n.locale === 'ar' }">
        <!-- Logo -->
        <router-link to="/" class="brand-container flex items-center hover:scale-105 transition-transform duration-300" :class="$i18n.locale === 'ar' ? 'space-x-reverse space-x-3' : 'space-x-3'">
          <img src="/logo.jpg" alt="Mouhamina Logo" class="h-14 sm:h-16 w-14 sm:w-16 rounded-full object-cover border-2 border-primary shadow-lg">
          <div class="brand-text hidden sm:block">
            <h1 class="text-lg sm:text-xl font-serif font-bold text-secondary">{{ $t('brand.name') }}</h1>
            <p class="text-xs sm:text-sm text-primary">{{ $t('brand.tagline') }}</p>
          </div>
        </router-link>

        <!-- Desktop Navigation -->
        <div class="header-nav hidden md:flex items-center" :class="$i18n.locale === 'ar' ? 'space-x-reverse space-x-8' : 'space-x-8'">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path" 
            class="nav-link text-gray-700 hover:text-primary font-medium transition-all duration-500 relative group luxury-hover"
            active-class="text-primary"
          >
            {{ $t(item.nameKey) }}
            <span class="absolute bottom-0 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
          </router-link>
          
          <!-- Language Selector -->
          <div class="relative" ref="languageDropdown">
            <button 
              @click="toggleLanguageDropdown" 
              class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 hover:bg-gray-200 transition-colors duration-300"
              :class="{ 'bg-gray-200': isLanguageDropdownOpen }"
            >
              <svg class="w-5 h-5 text-gray-600" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M7 2a1 1 0 011 1v1h3a1 1 0 110 2H9.578a18.87 18.87 0 01-1.724 4.78c.29.354.596.696.914 1.026a1 1 0 11-1.44 1.389c-.188-.196-.373-.396-.554-.6a19.098 19.098 0 01-3.107 3.567 1 1 0 01-1.334-1.49 17.087 17.087 0 003.13-3.733 18.992 18.992 0 01-1.487-2.494 1 1 0 111.79-.89c.234.47.489.928.764 1.372.417-.934.752-1.913.997-2.927H3a1 1 0 110-2h3V3a1 1 0 011-1zm6 6a1 1 0 01.894.553l2.991 5.982a.869.869 0 01.02.037l.99 1.98a1 1 0 11-1.79.895L15.383 16h-4.764l-.724 1.447a1 1 0 11-1.788-.894l.99-1.98.019-.038 2.99-5.982A1 1 0 0113 8zm-1.382 6h2.764L13 11.236 11.618 14z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-medium text-gray-700">{{ currentLanguage.toUpperCase() }}</span>
              <svg class="w-4 h-4 text-gray-600 transition-transform duration-200" :class="{ 'rotate-180': isLanguageDropdownOpen }" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"/>
              </svg>
            </button>
            
            <transition
              enter-active-class="transition duration-200 ease-out"
              enter-from-class="transform scale-95 opacity-0"
              enter-to-class="transform scale-100 opacity-100"
              leave-active-class="transition duration-75 ease-in"
              leave-from-class="transform scale-100 opacity-100"
              leave-to-class="transform scale-95 opacity-0"
            >
              <div v-if="isLanguageDropdownOpen" class="language-dropdown absolute right-0 top-full mt-2 w-32 bg-white rounded-lg shadow-lg border border-gray-200 z-50">
                <button
                  @click="changeLanguage('en')"
                  class="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 rounded-t-lg transition-colors"
                  :class="{ 'bg-primary/10 text-primary': currentLanguage === 'en' }"
                >
                  English
                </button>
                <button
                  @click="changeLanguage('ar')"
                  class="w-full px-4 py-2 text-left text-sm hover:bg-gray-50 rounded-b-lg transition-colors"
                  :class="{ 'bg-primary/10 text-primary': currentLanguage === 'ar' }"
                >
                  العربية
                </button>
              </div>
            </transition>
          </div>
        </div>

        <!-- Mobile Menu Button -->
        <button 
          @click="toggleMobileMenu" 
          class="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors duration-300"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path 
              stroke-linecap="round" 
              stroke-linejoin="round" 
              stroke-width="2" 
              :d="isMobileMenuOpen ? 'M6 18L18 6M6 6l12 12' : 'M4 6h16M4 12h16M4 18h16'"
            />
          </svg>
        </button>
      </div>

      <!-- Mobile Navigation -->
      <transition
        enter-active-class="transition-all duration-300"
        enter-from-class="opacity-0 transform -translate-y-4"
        enter-to-class="opacity-100 transform translate-y-0"
        leave-active-class="transition-all duration-300"
        leave-from-class="opacity-100 transform translate-y-0"
        leave-to-class="opacity-0 transform -translate-y-4"
      >
        <div v-if="isMobileMenuOpen" class="mobile-menu md:hidden mt-4 py-4 border-t border-gray-200">
          <router-link 
            v-for="item in navItems" 
            :key="item.path"
            :to="item.path" 
            @click="closeMobileMenu"
            class="block py-3 px-4 text-gray-700 hover:text-primary hover:bg-gray-50 rounded-lg transition-colors duration-300"
            active-class="text-primary bg-primary/10"
          >
            {{ $t(item.nameKey) }}
          </router-link>
          
          <!-- Mobile Language Selector -->
          <div class="mt-4 px-4">
            <div class="flex items-center justify-between">
              <span class="text-sm font-medium text-gray-700">{{ $i18n.locale === 'ar' ? 'اللغة:' : 'Language:' }}</span>
              <div class="flex space-x-2">
                <button
                  @click="changeLanguage('en')"
                  class="px-3 py-1 text-xs rounded-full transition-colors"
                  :class="currentLanguage === 'en' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                >
                  EN
                </button>
                <button
                  @click="changeLanguage('ar')"
                  class="px-3 py-1 text-xs rounded-full transition-colors"
                  :class="currentLanguage === 'ar' ? 'bg-primary text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'"
                >
                  ع
                </button>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </nav>
  </header>
</template>

<script>
import { useI18n } from 'vue-i18n'

export default {
  name: 'Header',
  setup() {
    const { locale } = useI18n()
    return { locale }
  },
  data() {
    return {
      isMobileMenuOpen: false,
      isLanguageDropdownOpen: false,
      navItems: [
        { nameKey: 'nav.home', path: '/' },
        { nameKey: 'nav.about', path: '/about' },
        { nameKey: 'nav.founders', path: '/founders' },
        { nameKey: 'nav.services', path: '/services' },
        { nameKey: 'nav.contact', path: '/contact' }
      ]
    }
  },
  computed: {
    currentLanguage() {
      return this.locale
    }
  },
  methods: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    closeMobileMenu() {
      this.isMobileMenuOpen = false
    },
    toggleLanguageDropdown() {
      this.isLanguageDropdownOpen = !this.isLanguageDropdownOpen
    },
    changeLanguage(lang) {
      this.locale = lang
      localStorage.setItem('language', lang)
      this.isLanguageDropdownOpen = false
      
      // Update document direction for Arabic
      if (lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl')
        document.documentElement.setAttribute('lang', 'ar')
      } else {
        document.documentElement.setAttribute('dir', 'ltr')
        document.documentElement.setAttribute('lang', 'en')
      }
    }
  },
  mounted() {
    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.$el.contains(e.target)) {
        this.isMobileMenuOpen = false
      }
    })
    
    // Close language dropdown when clicking outside
    document.addEventListener('click', (e) => {
      if (this.$refs.languageDropdown && !this.$refs.languageDropdown.contains(e.target)) {
        this.isLanguageDropdownOpen = false
      }
    })
    
    // Set initial document direction and language
    const currentLang = this.locale
    if (currentLang === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl')
      document.documentElement.setAttribute('lang', 'ar')
    } else {
      document.documentElement.setAttribute('dir', 'ltr')
      document.documentElement.setAttribute('lang', 'en')
    }
  }
}
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: '';
  position: absolute;
  bottom: -4px;
  left: 0;
  width: 0;
  height: 2px;
  background: linear-gradient(90deg, #C9A96E, #B8956B);
  transition: width 0.3s ease;
}

.nav-link:hover::after {
  width: 100%;
}

.router-link-active::after {
  width: 100%;
}
</style>