import type { StorybookConfig } from '@storybook/angular';

const config: StorybookConfig = {
  stories: ['../src/**/*.stories.@(js|jsx|ts|tsx|mdx)'],
  addons: [],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    // Find and modify the SCSS rule to include PostCSS
    const scssRule = config.module.rules.find(
      (rule) => rule.test && rule.test.toString().includes('scss')
    );

    if (scssRule && scssRule.use && Array.isArray(scssRule.use)) {
      // Find the postcss-loader in the use array
      const postcssLoaderIndex = scssRule.use.findIndex(
        (use) => use.loader && use.loader.includes('postcss-loader')
      );

      if (postcssLoaderIndex !== -1) {
        // Update the postcss-loader configuration
        scssRule.use[postcssLoaderIndex] = {
          ...scssRule.use[postcssLoaderIndex],
          options: {
            ...scssRule.use[postcssLoaderIndex].options,
            postcssOptions: {
              plugins: [require('tailwindcss'), require('autoprefixer')],
            },
          },
        };
      }
    }

    return config;
  },
};

export default config;
