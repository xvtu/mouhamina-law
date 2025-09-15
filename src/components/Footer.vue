<template>
  <footer class="bg-secondary text-white">
    <div class="container mx-auto px-6 py-12">
      <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
        <!-- Logo & Description -->
        <div class="md:col-span-2">
          <div class="flex items-center space-x-3 mb-4">
            <img src="/logo.jpg" alt="Mouhamina Logo" class="h-16 w-16 rounded-full object-cover border-2 border-primary shadow-lg">
            <div>
              <h3 class="text-xl font-serif font-bold text-primary">{{ $t('brand.name') }}</h3>
              <p class="text-sm text-gray-300">{{ $t('brand.tagline') }}</p>
            </div>
          </div>
          <p class="text-gray-300 mb-4 leading-relaxed">
            {{ $t('footer.description') }}
          </p>
          <div class="flex space-x-4">
            <a href="mailto:rl.legal.consultancy@gmail.com" class="text-primary hover:text-primary-light transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
            </a>
            <a href="tel:+963932244513" class="text-primary hover:text-primary-light transition-colors">
              <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Quick Links -->
        <div>
          <h4 class="text-lg font-serif font-semibold text-primary mb-4">{{ $t('footer.quickLinks') }}</h4>
          <ul class="space-y-3">
            <li>
              <router-link to="/about" class="text-gray-300 hover:text-white transition-colors">
                {{ $t('nav.about') }}
              </router-link>
            </li>
            <li>
              <router-link to="/founders" class="text-gray-300 hover:text-white transition-colors">
                {{ $t('nav.founders') }}
              </router-link>
            </li>
            <li>
              <router-link to="/services" class="text-gray-300 hover:text-white transition-colors">
                {{ $t('nav.services') }}
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-300 hover:text-white transition-colors">
                {{ $t('nav.contact') }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h4 class="text-lg font-serif font-semibold text-primary mb-4">{{ $t('footer.contactInfo') }}</h4>
          <div class="space-y-3 text-gray-300">
            <div class="flex items-start space-x-3">
              <svg class="w-5 h-5 text-primary mt-1 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd"/>
              </svg>
              <div>
                <p>{{ $t('contact.info.office.address1') }}</p>
                <p>{{ $t('contact.info.office.address2') }}</p>
              </div>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z"/>
              </svg>
              <p>+963 932 244 513</p>
            </div>
            <div class="flex items-center space-x-3">
              <svg class="w-5 h-5 text-primary flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
              </svg>
              <p class="break-all">rl.legal.consultancy@gmail.com</p>
            </div>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-gray-700">
        <div class="flex flex-col md:flex-row justify-between items-center">
          <p class="text-gray-400 text-sm mb-4 md:mb-0">
            © {{ currentYear }} {{ $t('footer.copyright') }}
          </p>
          <p class="text-gray-400 text-sm">
            {{ $t('footer.serving') }}
          </p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  computed: {
    currentYear() {
      return new Date().getFullYear()
    }
  }
}
</script>