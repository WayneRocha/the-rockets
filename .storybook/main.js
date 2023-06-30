/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: [
    '../apps/ui/**!(/node_modules)/**/*.stories.@(js|jsx|ts|tsx)',
    '../apps/web/**!(/node_modules)/**/*.stories.@(js|jsx|ts|tsx)',
    '../apps/account/**!(/node_modules)/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  staticDirs: ['../apps/account/public', '../apps/web/public'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
  ],
  framework: {
    name: '@storybook/nextjs',
    options: {},
  },
  docs: {
    autodocs: 'tag',
  },
  core: {
    builder: '@storybook/builder-webpack5',
  },
};

export default config;
