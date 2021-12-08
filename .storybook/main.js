// module.exports = {
//   'stories': [
//     '../src/**/*.stories.mdx',
//     '../src/**/*.stories.@(js|jsx|ts|tsx)'
//   ],
//   'addons': [
//     '@storybook/addon-links',
//     '@storybook/addon-essentials',
//     'storybook-css-modules-preset'
//   ],
//   'framework': '@storybook/react'
// }


const path = require('path');

// Export a function. Accept the base config as the only param.
module.exports = {
  core: {
    builder: 'webpack5',
  },
  'stories': [
    '../src/**/*.stories.mdx',
    '../src/**/*.stories.@(js|jsx|ts|tsx)'
  ],
  'addons': [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    'storybook-css-modules-preset'
  ],
  'framework': '@storybook/react',
  webpackFinal: async (config, { configType }) => {
    console.log('config:', config);
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.module.rules.push({
      test: /\.scss$/,
      use: ['style-loader', 'css-loader', 'sass-loader'],
      // include: path.resolve(__dirname, './'),
    });

    // Return the altered config
    return config;
  },
};

