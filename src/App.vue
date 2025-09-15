<template>
  <div id="app" class="min-h-screen bg-white">
    <!-- Loading Overlay -->
    <LoadingOverlay :is-loading="isLoading" />
    
    <!-- Main Content -->
    <Header />
    <main class="flex-1 relative overflow-hidden">
      <!-- Page Transition Wrapper -->
      <PageTransition name="luxury-slide">
        <router-view :key="$route.fullPath" />
      </PageTransition>
    </main>
    <Footer />
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import PageTransition from './components/PageTransition.vue'
import LoadingOverlay from './components/LoadingOverlay.vue'

export default {
  name: 'App',
  components: {
    Header,
    Footer,
    PageTransition,
    LoadingOverlay
  },
  data() {
    return {
      isLoading: false
    }
  },
  watch: {
    '$route'(to, from) {
      // Show loading for a brief moment during page transition
      if (to.path !== from.path) {
        this.showLoading()
      }
    }
  },
  methods: {
    showLoading() {
      this.isLoading = true
      setTimeout(() => {
        this.isLoading = false
      }, 500)
    }
  },
  mounted() {
    // Show initial loading
    this.showLoading()
  }
}
</script>

<style>
#app {
  font-family: 'Inter', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>