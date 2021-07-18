import type { AppProps } from 'next/app';
import { appWithTranslation } from 'next-i18next';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '@/theme';
import { AppLayout } from '@/components/templates/app';

const MyApp = ({ Component, pageProps }: AppProps): JSX.Element => (
  <ChakraProvider resetCSS theme={customTheme}>
    <AppLayout>
      <Component {...pageProps} />
    </AppLayout>
  </ChakraProvider>
);
export default appWithTranslation(MyApp);
