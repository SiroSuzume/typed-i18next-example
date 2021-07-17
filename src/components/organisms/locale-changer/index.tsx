import { defaultLocale, defaultOrigin } from '@/lib/env';
import { buildLocalizedUrlFromLocale } from '@/lib/url';
import { HStack, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

export type LocaleChangerProps = {
  /** サポートしているロケール一覧 */
  supportedLocales: string[];
};

export const LocaleChanger = ({ supportedLocales = [] }: LocaleChangerProps): JSX.Element => {
  const { asPath } = useRouter();
  return (
    <HStack>
      {supportedLocales.map((locale) => (
        <NextLink key={`${locale}`} locale={locale} href={asPath} passHref>
          <Link href={buildLocalizedUrlFromLocale(asPath, locale, defaultOrigin, defaultLocale)}>{locale}</Link>
        </NextLink>
      ))}
    </HStack>
  );
};
