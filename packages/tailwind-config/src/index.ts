import typographyPlugin from '@tailwindcss/typography'
import { type Config } from 'tailwindcss'
import { fontFamily as defaultFontFamily } from 'tailwindcss/defaultTheme.js'
import safeAreaPlugin from 'tailwindcss-safe-area'

const tailwindConfig: Config = {
  content: [],
  plugins: [typographyPlugin, safeAreaPlugin],
  theme: {
    fontFamily: {
      ...defaultFontFamily,
      sans: ['YuGothic', 'Yu Gothic', ...defaultFontFamily.sans],
      serif: ['YuMincho', 'Yu Mincho', ...defaultFontFamily.serif]
    }
  }
}

export default tailwindConfig
