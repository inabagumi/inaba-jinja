import sharedTailwindConfig from '@inaba-jinja/tailwind-config'
import { type Config } from 'tailwindcss'

const tailwindConfig = {
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './node_modules/@inaba-jinja/components/**/*.js'
  ],
  presets: [sharedTailwindConfig],
  theme: {
    extend: {
      animation: {
        shake: 'shake 0.3s infinite alternate linear'
      },
      keyframes: {
        shake: {
          from: {
            transform: 'translateY(0) rotate(180deg)'
          },
          to: {
            transform: 'translateY(20px) rotate(170deg)'
          }
        }
      }
    }
  }
} satisfies Config

export default tailwindConfig
