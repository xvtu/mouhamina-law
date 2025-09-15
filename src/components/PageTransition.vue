<template>
  <transition
    :name="transitionName"
    :mode="transitionMode"
    @before-enter="beforeEnter"
    @enter="enter"
    @leave="leave"
  >
    <slot />
  </transition>
</template>

<script>
export default {
  name: 'PageTransition',
  props: {
    name: {
      type: String,
      default: 'luxury-slide'
    },
    mode: {
      type: String,
      default: 'out-in'
    }
  },
  computed: {
    transitionName() {
      return this.name
    },
    transitionMode() {
      return this.mode
    }
  },
  methods: {
    beforeEnter(el) {
      el.style.opacity = '0'
      el.style.transform = 'translateY(50px) scale(0.95)'
    },
    enter(el, done) {
      el.offsetHeight // trigger reflow
      el.style.transition = 'all 0.8s cubic-bezier(0.23, 1, 0.320, 1)'
      el.style.opacity = '1'
      el.style.transform = 'translateY(0) scale(1)'
      
      setTimeout(() => {
        done()
      }, 800)
    },
    leave(el, done) {
      el.style.transition = 'all 0.6s cubic-bezier(0.755, 0.05, 0.855, 0.06)'
      el.style.opacity = '0'
      el.style.transform = 'translateY(-30px) scale(1.05)'
      
      setTimeout(() => {
        done()
      }, 600)
    }
  }
}
</script>

<style scoped>
/* Luxury Slide Transition */
.luxury-slide-enter-active,
.luxury-slide-leave-active {
  transition: all 0.8s cubic-bezier(0.23, 1, 0.320, 1);
}

.luxury-slide-enter-from {
  opacity: 0;
  transform: translateY(50px) scale(0.95);
}

.luxury-slide-leave-to {
  opacity: 0;
  transform: translateY(-30px) scale(1.05);
}

/* Fade Luxury Transition */
.luxury-fade-enter-active,
.luxury-fade-leave-active {
  transition: all 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.luxury-fade-enter-from,
.luxury-fade-leave-to {
  opacity: 0;
  transform: scale(0.98);
}

/* Scale Luxury Transition */
.luxury-scale-enter-active,
.luxury-scale-leave-active {
  transition: all 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
}

.luxury-scale-enter-from {
  opacity: 0;
  transform: scale(0.9) translateY(20px);
}

.luxury-scale-leave-to {
  opacity: 0;
  transform: scale(1.1) translateY(-20px);
}
</style>