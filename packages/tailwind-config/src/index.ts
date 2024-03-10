import { type Config } from 'tailwindcss'
import { fontFamily as defaultFontFamily } from 'tailwindcss/defaultTheme.js'

const tailwindConfig: Config = {
  content: [],
  theme: {
    fontFamily: {
      ...defaultFontFamily,
      sans: ['YuGothic', 'Yu Gothic', ...defaultFontFamily.sans],
      serif: ['YuMincho', 'Yu Mincho', ...defaultFontFamily.serif]
    }
  }
}

export default tailwindConfig
