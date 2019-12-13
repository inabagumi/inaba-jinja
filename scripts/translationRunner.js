/* eslint-disable @typescript-eslint/no-var-requires */

const path = require('path')
const {
  default: manageTranslations
} = require('react-intl-translations-manager')

manageTranslations({
  detectDuplicateIds: false,
  jsonOptions: {
    trailingNewline: true
  },
  languages: ['en', 'ja'],
  messagesDirectory: path.resolve(__dirname, '..', 'build', 'messages'),
  translationsDirectory: path.resolve(__dirname, '..', 'src', 'locales')
})
