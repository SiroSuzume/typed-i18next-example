import type { NextPage, GetStaticProps } from 'next';
import { MyDefaultSeo } from '@/components/organisms/seo/default';
import { TopPageSeo } from '@/components/organisms/seo/top';
import { TopTemplate } from '@/components/templates/top';
import { NameSpace } from '@/lib/i18next/types';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { EntryHorse } from '@/types/entry-horses';
import { mockEntryHorses } from '@/mocks/entry-horse';
import { useRouter } from 'next/router';
import { useMemo } from 'react';
import nextI18NextConfig from '@/../next-i18next.config.js';

/** トップページで使用するネームスペース一覧 */
const i18nextNameSpaces: NameSpace[] = ['seo', 'common', 'horse-names', 'top'];

type TopPageProps = {
  entryHorses: EntryHorse[];
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ locale }) => {
  // 必要なリソースをロードする
  const translation = await serverSideTranslations(locale!, i18nextNameSpaces, nextI18NextConfig);
  return { props: { ...translation, entryHorses: mockEntryHorses } };
};

/** トップページ */
const TopPage: NextPage<TopPageProps> = ({ entryHorses }) => {
  const { locale } = useRouter();
  const myDefaultSeo = useMemo(() => <MyDefaultSeo />, [locale]);
  const topPageSeo = useMemo(() => <TopPageSeo />, [locale]);
  return (
    <>
      {myDefaultSeo}
      {topPageSeo}
      <TopTemplate entryHorses={entryHorses} />
    </>
  );
};

export default TopPage;
