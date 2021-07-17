import type { NextPage, GetStaticProps } from 'next';
import { MyDefaultSeo } from '@/components/organisms/seo/default';
import { TopPageSeo } from '@/components/organisms/seo/top';
import { TopTemplate } from '@/components/templates/top';
import { NameSpace } from '@/lib/i18next/types';
import { importI18nextResource, ImportedResource, addImportedResources } from '@/lib/i18next/loader';
import { EntryHorse } from '@/types/entry-horses';
import { mockEntryHorses } from '@/mocks/entry-horse';
import { useRouter } from 'next/router';
import i18next from 'i18next';
import { useMemo } from 'react';

/** トップページで使用するネームスペース一覧 */
const i18nextNameSpaces: NameSpace[] = ['seo', 'common', 'horse-names', 'top'];

type TopPageProps = {
  resources: ImportedResource[];
  entryHorses: EntryHorse[];
};

export const getStaticProps: GetStaticProps<TopPageProps> = async ({ locale, defaultLocale }) => {
  // 必要なリソースをロードする
  const resources = await importI18nextResource([locale!], defaultLocale!, i18nextNameSpaces);
  return { props: { resources, entryHorses: mockEntryHorses } };
};

/** トップページ */
const TopPage: NextPage<TopPageProps> = ({ resources, entryHorses }) => {
  const { locale } = useRouter();
  addImportedResources(resources);
  i18next.changeLanguage(locale);
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
