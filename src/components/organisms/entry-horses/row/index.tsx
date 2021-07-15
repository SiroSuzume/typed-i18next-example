import { EntryHorsesHorseName } from '@/components/molecules/entry-horses/horse';
import { useHorseNamesTranslation } from '@/lib/i18next/translator/horse-names';
import { EntryHorse } from '@/types/entry-horses';

export const EntryHorsesRow = ({ id, horseNumber, horseName }: EntryHorse): JSX.Element => {
  const { t } = useHorseNamesTranslation();
  // netkeibaへのリンク
  const href = `https://db.netkeiba.com/horse/${id}`;
  return <EntryHorsesHorseName horseName={t(horseName)} horseNumber={horseNumber} href={href} />;
};
