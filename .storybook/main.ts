import type { StorybookConfig } from '@storybook/angular';
import path from 'path';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],
  addons: ['@storybook/addon-docs'],
  framework: {
    name: '@storybook/angular',
    options: {},
  },
  webpackFinal: async (config) => {
    if (!config.module) return config;
    config.module.rules = config.module.rules || [];
    config.module.rules.push({
      test: /\.css$/,
      include: [path.resolve(__dirname)],
      use: [
        require.resolve('style-loader'),
        {
          loader: require.resolve('css-loader'),
          options: { importLoaders: 1 },
        },
        {
          loader: require.resolve('postcss-loader'),
        },
      ],
    });
    return config;
  },
};
export default config;
