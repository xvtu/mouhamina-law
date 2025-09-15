import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': '/src',
      '@team-member-imges': '/src/assets/team-member-imges',
    },
  },
  build: {
    // Generate source maps for better debugging
    sourcemap: false,
    // Optimize bundle size
    rollupOptions: {
      output: {
        // Manual chunks for better caching
        manualChunks: {
          vendor: ['vue', 'vue-router'],
          ui: ['tailwindcss']
        }
      }
    },
    // Compress assets
    cssCodeSplit: true,
    // Minimize bundle size
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true
      }
    }
  },
  // Performance optimizations
  server: {
    // Enable HTTP/2
    https: false,
    // Optimize dev server
    hmr: {
      overlay: false
    }
  },
  // SEO and performance optimization
  define: {
    __VUE_PROD_DEVTOOLS__: false,
    __VUE_PROD_HYDRATION_MISMATCH_DETAILS__: false
  }
})