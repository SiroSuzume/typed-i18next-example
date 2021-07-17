import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '@/theme';
import { AppLayout } from '@/components/templates/app';
import { defaultLocale, supportedLocales } from '@/lib/env';
import { nameSpaces } from '@/lib/i18next/types';
import { initializeI18n } from '@/lib/i18next/initializer';
import { withTranslation } from 'react-i18next';
import i18next from 'i18next';
import { useEffect } from 'react';

initializeI18n(supportedLocales, [...nameSpaces], defaultLocale);

const MyApp = ({ Component, pageProps, router: { locale } }: AppProps): JSX.Element => {
  useEffect(() => {
    if (locale !== i18next.language) i18next.changeLanguage(locale);
  }, [locale]);

  return (
    <ChakraProvider resetCSS theme={customTheme}>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </ChakraProvider>
  );
};
export default withTranslation()(MyApp);
