import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '@/theme';
import { AppLayout } from '@/components/templates/app';
import { defaultLocale, supportedLocales } from '@/lib/env';
import { nameSpaces } from '@/lib/i18next/types';
import { initializeI18n } from '@/lib/i18next/initializer';
import { withTranslation } from 'react-i18next';

initializeI18n(supportedLocales, [...nameSpaces], defaultLocale);

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider resetCSS theme={customTheme}>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </ChakraProvider>
);
export default withTranslation()(MyApp);
