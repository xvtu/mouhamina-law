<template>
  <div 
    ref="section"
    class="animate-on-scroll"
    :class="{ 'animate': isVisible }"
  >
    <slot />
  </div>
</template>

<script>
export default {
  name: 'AnimatedSection',
  data() {
    return {
      isVisible: false
    }
  },
  mounted() {
    this.setupObserver()
  },
  methods: {
    setupObserver() {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              this.isVisible = true
              observer.unobserve(entry.target)
            }
          })
        },
        {
          threshold: 0.1,
          rootMargin: '50px'
        }
      )
      
      if (this.$refs.section) {
        observer.observe(this.$refs.section)
      }
    }
  },
  beforeUnmount() {
    if (this.observer) {
      this.observer.disconnect()
    }
  }
}
</script>