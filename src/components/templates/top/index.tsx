import { EntryHorsesList } from '@/components/organisms/entry-horses';
import { LocaleChanger } from '@/components/organisms/locale-changer';
import { supportedLocales } from '@/lib/env';
import { EntryHorse } from '@/types/entry-horses';
import { Heading } from '@chakra-ui/react';
import { useTranslation } from 'react-i18next';

export type TopTemplateProps = {
  /** 出走馬 */
  entryHorses?: EntryHorse[];
};

/** トップページテンプレート */
export const TopTemplate = ({ entryHorses = [] }: TopTemplateProps): JSX.Element => {
  const { t } = useTranslation('top');
  const title = t('$top-page-title');
  return (
    <>
      <Heading as="h1">{title}</Heading>
      <EntryHorsesList entryHorses={entryHorses} />
      <LocaleChanger supportedLocales={supportedLocales} />
    </>
  );
};
