const path = require('path');

module.exports = {
  stories: ['../src/components/**/*.stories.tsx'],
  addons: ['@storybook/addon-links', '@storybook/addon-essentials', 'storybook-addon-i18next/register'],
  webpackFinal: async (config) => {
    // typescriptのパス解決に使用する
    config.resolve.alias = {
      '@': path.resolve(__dirname, '../src'),
    };

    // 動作exampleはこれを参照した
    // @see https://github.com/Piepongwong/gatsby_nextjs_storybook_i18n_scaffolding
    return {
      ...config,
      node: {
        ...config.node,
        fs: 'empty', // fix
      },
    };
  },
};
