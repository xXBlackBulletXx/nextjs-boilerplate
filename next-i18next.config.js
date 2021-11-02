const path = require('path')

module.exports = {
  i18n: {
    defaultLocale: 'it',
    locales: ['it', 'en'],
  },
  localePath: path.resolve('./locales'),
  reloadOnPrerender: process.env.NODE_ENV !== 'production',
}
