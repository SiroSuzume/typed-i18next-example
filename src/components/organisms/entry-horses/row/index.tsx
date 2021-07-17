import { EntryHorsesHorseName } from '@/components/molecules/entry-horses/horse';
import { EntryHorse } from '@/types/entry-horses';
import { useTranslation } from 'react-i18next';

export const EntryHorsesRow = ({ id, horseNumber, horseName }: EntryHorse): JSX.Element => {
  const { t } = useTranslation('horse-names');
  const href = `https://db.netkeiba.com/horse/${id}`;
  return <EntryHorsesHorseName horseName={t(horseName)} horseNumber={horseNumber} href={href} />;
};
