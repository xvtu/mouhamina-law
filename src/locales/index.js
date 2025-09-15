import { createI18n } from 'vue-i18n'
import en from './en.js'
import ar from './ar.js'

const messages = {
  en,
  ar
}

// Get the saved language from localStorage or default to English
const savedLocale = localStorage.getItem('language') || 'en'

const i18n = createI18n({
  legacy: false,
  locale: savedLocale,
  fallbackLocale: 'en',
  messages
})

export default i18n

