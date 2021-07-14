/** @type import('next/dist/next-server/server/config-shared').NextConfig */
module.exports = {
  i18n: {
    defaultLocale: process.env.NEXT_PUBLIC_DEFAULT_LOCALE || 'ja',
    locales: (process.env.NEXT_PUBLIC_SUPPORTED_LOCALES_SEPARATE_BY_COMMA || 'ja').split(','),
  },
};
