<template>
  <div></div>
</template>

<script>
export default {
  name: 'SEOHead',
  props: {
    title: {
      type: String,
      default: 'Mouhamina Law Office - Leading Legal Consultancy in Syria'
    },
    description: {
      type: String,
      default: 'Mouhamina Law Office provides expert legal consultancy, registration, licensing, and representation services in Syria. Founded by Rula Bash Imam with 18+ years of experience serving 117+ organizations.'
    },
    keywords: {
      type: String,
      default: 'Syria lawyer, legal consultancy Syria, Damascus law firm, civil society registration, NGO licensing Syria, legal representation Damascus, business law Syria, international legal services'
    },
    image: {
      type: String,
      default: '/logo.jpg'
    },
    url: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'website'
    }
  },
  mounted() {
    this.updateHead()
  },
  watch: {
    title: 'updateHead',
    description: 'updateHead',
    keywords: 'updateHead'
  },
  methods: {
    updateHead() {
      // Update title
      document.title = this.title

      // Update or create meta tags
      this.updateMetaTag('description', this.description)
      this.updateMetaTag('keywords', this.keywords)
      this.updateMetaTag('author', 'Rula Bash Imam - Mouhamina Law Office')
      this.updateMetaTag('robots', 'index, follow')
      this.updateMetaTag('viewport', 'width=device-width, initial-scale=1.0')
      
      // Language and locale
      this.updateMetaTag('language', 'English')
      this.updateMetaTag('geo.region', 'SY-DI') // Damascus, Syria
      this.updateMetaTag('geo.placename', 'Damascus')
      this.updateMetaTag('geo.position', '33.5138;36.2765')
      this.updateMetaTag('ICBM', '33.5138, 36.2765')

      // Open Graph tags
      this.updateMetaProperty('og:title', this.title)
      this.updateMetaProperty('og:description', this.description)
      this.updateMetaProperty('og:type', this.type)
      this.updateMetaProperty('og:image', window.location.origin + this.image)
      this.updateMetaProperty('og:url', window.location.origin + this.url)
      this.updateMetaProperty('og:site_name', 'Mouhamina Law Office')
      this.updateMetaProperty('og:locale', 'en_US')

      // Twitter Card tags
      this.updateMetaProperty('twitter:card', 'summary_large_image')
      this.updateMetaProperty('twitter:title', this.title)
      this.updateMetaProperty('twitter:description', this.description)
      this.updateMetaProperty('twitter:image', window.location.origin + this.image)

      // Additional SEO tags
      this.updateMetaTag('theme-color', '#C9A96E')
      this.updateMetaTag('msapplication-TileColor', '#C9A96E')
      
      // Canonical URL
      this.updateCanonical(window.location.origin + this.url)

      // Add structured data
      this.addStructuredData()
    },

    updateMetaTag(name, content) {
      let element = document.querySelector(`meta[name="${name}"]`)
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute('name', name)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    },

    updateMetaProperty(property, content) {
      let element = document.querySelector(`meta[property="${property}"]`)
      if (element) {
        element.setAttribute('content', content)
      } else {
        element = document.createElement('meta')
        element.setAttribute('property', property)
        element.setAttribute('content', content)
        document.head.appendChild(element)
      }
    },

    updateCanonical(href) {
      let element = document.querySelector('link[rel="canonical"]')
      if (element) {
        element.setAttribute('href', href)
      } else {
        element = document.createElement('link')
        element.setAttribute('rel', 'canonical')
        element.setAttribute('href', href)
        document.head.appendChild(element)
      }
    },

    addStructuredData() {
      // Remove existing structured data
      const existingScript = document.querySelector('script[type="application/ld+json"]')
      if (existingScript) {
        existingScript.remove()
      }

      // Create new structured data
      const structuredData = {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "LegalService",
            "@id": `${window.location.origin}#legalservice`,
            "name": "Mouhamina Law Office",
            "alternateName": "محامينا",
            "description": this.description,
            "url": window.location.origin,
            "logo": {
              "@type": "ImageObject",
              "url": `${window.location.origin}/logo.jpg`
            },
            "image": `${window.location.origin}/logo.jpg`,
            "telephone": "+963932244513",
            "email": "rl.legal.consultancy@gmail.com",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Al-Salihiyah, Al-Abed Street",
              "addressLocality": "Damascus",
              "addressCountry": "Syria"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": "33.5138",
              "longitude": "36.2765"
            },
            "founder": {
              "@type": "Person",
              "name": "Rula Bash Imam",
              "jobTitle": "Founder & Managing Partner",
              "telephone": "+963932244513",
              "email": "rl.legal.consultancy@gmail.com"
            },
            "employee": [
              {
                "@type": "Person",
                "name": "Rula Bash Imam",
                "jobTitle": "Founder & Managing Partner"
              },
              {
                "@type": "Person",
                "name": "Louay Shnoudy",
                "jobTitle": "Senior Legal Counsel"
              }
            ],
            "areaServed": {
              "@type": "Country",
              "name": "Syria"
            },
            "serviceType": [
              "Legal Consultancy",
              "Business Registration",
              "Legal Representation",
              "Contract Development",
              "Legislative Reform",
              "Legal Training"
            ],
            "knowsAbout": [
              "Civil Society Law",
              "Corporate Law", 
              "International Law",
              "Legal Compliance",
              "NGO Registration",
              "Business Licensing"
            ],
            "yearsFounded": "2014",
            "foundingDate": "2014",
            "sameAs": []
          },
          {
            "@type": "WebSite",
            "@id": `${window.location.origin}#website`,
            "url": window.location.origin,
            "name": "Mouhamina Law Office",
            "description": this.description,
            "publisher": {
              "@id": `${window.location.origin}#legalservice`
            },
            "inLanguage": "en-US"
          },
          {
            "@type": "Organization",
            "@id": `${window.location.origin}#organization`,
            "name": "Mouhamina Law Office",
            "alternateName": "محامينا",
            "url": window.location.origin,
            "logo": `${window.location.origin}/logo.jpg`,
            "contactPoint": {
              "@type": "ContactPoint",
              "telephone": "+963932244513",
              "contactType": "Legal Services",
              "email": "rl.legal.consultancy@gmail.com",
              "availableLanguage": ["English", "Arabic"]
            }
          }
        ]
      }

      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.textContent = JSON.stringify(structuredData)
      document.head.appendChild(script)
    }
  }
}
</script>