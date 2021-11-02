const TsConfigPathsPlugin = require('tsconfig-paths-webpack-plugin')

module.exports = {
  stories: ['../design-system/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials'],
  features: {
    postcss: false
  },
  webpackFinal: async (config) => {
    config.resolve.plugins = config.resolve.plugins || []
    config.resolve.plugins.push(new TsConfigPathsPlugin())
    return config
  },
  babel: async (options) => ({
    ...options,
    plugins: [
      ...options.plugins,
      ["@babel/plugin-proposal-private-property-in-object", {
        loose: true
      }]
    ]
  })
}
