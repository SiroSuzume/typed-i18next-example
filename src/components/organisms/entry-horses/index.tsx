import { EntryHorsesGrid } from '@/components/atoms/entry-horses/grid';
import { EntryHorsesHeader } from '@/components/molecules/entry-horses/header';
import { useCommonTranslation } from '@/lib/i18next/translator/common';
import { EntryHorse } from '@/types/entry-horses';
import { EntryHorsesRow } from './row';

export type EntryHorsesListProps = {
  /** 出走馬一覧 */
  entryHorses: EntryHorse[];
};

export const EntryHorsesList = ({ entryHorses = [] }: EntryHorsesListProps): JSX.Element => {
  const { t } = useCommonTranslation();

  return (
    <EntryHorsesGrid>
      <EntryHorsesHeader pgmLabel={t('馬番')} horseNameLabel={t('馬名')} />
      {entryHorses.map((entryHorse) => (
        <EntryHorsesRow key={entryHorse.id} {...entryHorse} />
      ))}
    </EntryHorsesGrid>
  );
};
