<template>
  <div class="text-center">
    <div class="text-4xl md:text-5xl font-bold text-primary mb-2">
      {{ displayValue }}{{ suffix }}
    </div>
    <p class="text-gray-600">{{ label }}</p>
  </div>
</template>

<script>
export default {
  name: 'CounterAnimation',
  props: {
    endValue: {
      type: Number,
      required: true
    },
    label: {
      type: String,
      required: true
    },
    suffix: {
      type: String,
      default: ''
    },
    duration: {
      type: Number,
      default: 2000
    }
  },
  data() {
    return {
      displayValue: 0
    }
  },
  mounted() {
    this.animateCounter()
  },
  methods: {
    animateCounter() {
      const startTime = Date.now()
      const startValue = 0
      
      const updateCounter = () => {
        const elapsed = Date.now() - startTime
        const progress = Math.min(elapsed / this.duration, 1)
        
        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4)
        this.displayValue = Math.floor(startValue + (this.endValue - startValue) * easeOutQuart)
        
        if (progress < 1) {
          requestAnimationFrame(updateCounter)
        } else {
          this.displayValue = this.endValue
        }
      }
      
      requestAnimationFrame(updateCounter)
    }
  }
}
</script>