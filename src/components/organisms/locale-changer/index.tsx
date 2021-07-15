import { defaultLocale, defaultOrigin } from '@/lib/env';
import { buildLocalizedUrlFromLocale } from '@/lib/url';
import { HStack, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

export type LocaleChangerProps = {
  /** サポートしているロケール一覧 */
  supportedLocales: string[];
};

export const LocaleChanger = ({ supportedLocales = [] }: LocaleChangerProps): JSX.Element => {
  const { asPath } = useRouter();
  return (
    <HStack>
      {supportedLocales.map((locale) => (
        <Link key={`${locale}`} href={buildLocalizedUrlFromLocale(asPath, locale, defaultOrigin, defaultLocale)}>
          {locale}
        </Link>
      ))}
    </HStack>
  );
};
