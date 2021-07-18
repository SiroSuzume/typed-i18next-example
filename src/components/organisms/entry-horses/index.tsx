import { EntryHorsesGrid } from '@/components/atoms/entry-horses/grid';
import { EntryHorsesHeader } from '@/components/molecules/entry-horses/header';
import { EntryHorse } from '@/types/entry-horses';
import { useTranslation } from 'react-i18next';
import { EntryHorsesRow } from './row';

export type EntryHorsesListProps = {
  /** 出走馬一覧 */
  entryHorses: EntryHorse[];
};

export const EntryHorsesList = ({ entryHorses = [] }: EntryHorsesListProps): JSX.Element => {
  const { t } = useTranslation('common');
  return (
    <EntryHorsesGrid>
      <EntryHorsesHeader pgmLabel={t('馬番')} horseNameLabel={t('馬名')} />
      {entryHorses.map((entryHorse) => (
        <EntryHorsesRow key={entryHorse.id} {...entryHorse} />
      ))}
    </EntryHorsesGrid>
  );
};
