import { defineConfig } from 'vite'
import path from 'node:path'

export default defineConfig({
  resolve: {
    alias: {
      '@vue/reactivity': path.resolve(process.cwd(), '../reactivity/src'),
      '@vue/shared': path.resolve(process.cwd(), '../shared/src')
    }
  },
  define: {
    __DEV__: true,
    __TEST__: true,
    __VERSION__: '"test"',
    __BROWSER__: false,
    __GLOBAL__: false,
    __ESM_BUNDLER__: true,
    __ESM_BROWSER__: false,
    __CJS__: true,
    __SSR__: true,
    __FEATURE_OPTIONS_API__: true,
    __FEATURE_SUSPENSE__: true,
    __FEATURE_PROD_DEVTOOLS__: false,
    __FEATURE_PROD_HYDRATION_MISMATCH_DETAILS__: false,
    __COMPAT__: true
  },
  build: {

    rollupOptions: {
      output: {
        manualChunks: {
          'reactivity': ['@vue/reactivity','@vue/shared'],
        }
      }
    }
  }
})
