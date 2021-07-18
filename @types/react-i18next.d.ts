// import the original type declarations
import 'react-i18next';
// import all namespaces (for the default language, only)
import common from '../public/locales/ja/common.json';
import seo from '../public/locales/ja/seo.json';
import top from '../public/locales/ja/top.json';
import horseNames from '../public/locales/ja/horse-names.json';

declare module 'react-i18next' {
  interface CustomTypeOptions {
    defaultNS: 'common';
    resources: {
      common: typeof common;
      seo: typeof seo;
      top: typeof top;
      'horse-names': typeof horseNames;
    };
  }
}
