import type { NextPage, GetStaticProps } from 'next';
import { MyDefaultSeo } from '@/components/organisms/seo/default';
import { TopPageSeo } from '@/components/organisms/seo/top';
import { TopTemplate } from '@/components/templates/top';
import { Resource } from 'i18next';
import { NameSpace } from '@/lib/i18next/types';
import { loadI18nextResource } from '@/lib/i18next/loader';
import { initializeI18n } from '@/lib/i18next/initializer';
import { useRouter } from 'next/router';

/** トップページで使用するネームスペース一覧 */
const i18nextNameSpaces: NameSpace[] = ['seo', 'common'];

type TopPageProps = {
  resources: Resource;
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ locale, defaultLocale }) => {
  // 必要なリソースをロードする
  const resources = await loadI18nextResource(locale!, defaultLocale!, i18nextNameSpaces);
  return { props: { resources } };
};

/** トップページ */
const TopPage: NextPage<TopPageProps> = ({ resources }) => {
  const { locale, defaultLocale } = useRouter();
  initializeI18n(resources, locale!, defaultLocale!);
  return (
    <>
      <MyDefaultSeo />
      <TopPageSeo />
      <TopTemplate />
    </>
  );
};

export default TopPage;
