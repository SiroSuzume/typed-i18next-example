import { EntryHorsesList } from '@/components/organisms/entry-horses';
import { LocaleChanger } from '@/components/organisms/locale-changer';
import { supportedLocales } from '@/lib/env';
import { useTopPageTranslation } from '@/lib/i18next/translator/top';
import { EntryHorse } from '@/types/entry-horses';
import { Heading } from '@chakra-ui/react';

export type TopTemplateProps = {
  /** 出走馬 */
  entryHorses?: EntryHorse[];
};

/** トップページテンプレート */
export const TopTemplate = ({ entryHorses = [] }: TopTemplateProps): JSX.Element => {
  const { t } = useTopPageTranslation();
  const title = t('$top-page-title');
  return (
    <>
      <Heading as="h1">{title}</Heading>
      <EntryHorsesList entryHorses={entryHorses} />
      <LocaleChanger supportedLocales={supportedLocales} />
    </>
  );
};
