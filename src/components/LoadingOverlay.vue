<template>
  <transition name="loading-overlay" appear>
    <div v-if="isLoading" class="fixed inset-0 z-50 flex items-center justify-center">
      <!-- Background overlay -->
      <div class="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-light to-primary opacity-95"></div>
      
      <!-- Loading content -->
      <div class="relative z-10 text-center">
        <!-- Animated logo -->
        <div class="mb-8 animate-pulse">
          <img 
            src="/logo.jpg" 
            alt="Mouhamina Logo" 
            class="h-24 w-24 mx-auto rounded-full object-cover border-4 border-white shadow-2xl"
          />
        </div>
        
        <!-- Loading spinner -->
        <div class="loading-spinner mb-4"></div>
        
        <!-- Loading text -->
        <p class="text-white text-lg font-serif">{{ $t('common.loading') }}</p>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: 'LoadingOverlay',
  props: {
    isLoading: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style scoped>
/* Loading overlay transition */
.loading-overlay-enter-active,
.loading-overlay-leave-active {
  transition: all 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.loading-overlay-enter-from,
.loading-overlay-leave-to {
  opacity: 0;
}

/* Luxury loading spinner */
.loading-spinner {
  width: 48px;
  height: 48px;
  margin: 0 auto;
  border: 3px solid rgba(255, 255, 255, 0.2);
  border-top: 3px solid #C9A96E;
  border-radius: 50%;
  animation: luxury-spin 1.2s cubic-bezier(0.68, -0.55, 0.265, 1.55) infinite;
}

@keyframes luxury-spin {
  0% {
    transform: rotate(0deg) scale(1);
  }
  50% {
    transform: rotate(180deg) scale(1.1);
  }
  100% {
    transform: rotate(360deg) scale(1);
  }
}

/* Pulse animation for logo */
@keyframes pulse {
  0%, 100% {
    transform: scale(1);
    opacity: 1;
  }
  50% {
    transform: scale(1.05);
    opacity: 0.9;
  }
}
</style>