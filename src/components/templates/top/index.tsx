import { EntryHorsesList } from '@/components/organisms/entry-horses';
import { LocaleChanger } from '@/components/organisms/locale-changer';
import { supportedLocales } from '@/lib/env';
import { EntryHorse } from '@/types/entry-horses';
import { Heading } from '@chakra-ui/react';

export type TopTemplateProps = {
  /** タイトル */
  title?: string;
  /** 出走馬 */
  entryHorses?: EntryHorse[];
};

/** トップページテンプレート */
export const TopTemplate = ({ title = '阿寒湖特別', entryHorses = [] }: TopTemplateProps): JSX.Element => (
  <>
    <Heading as="h1">{title}</Heading>
    <EntryHorsesList entryHorses={entryHorses} />
    <LocaleChanger supportedLocales={supportedLocales} />
  </>
);
