import { Grid, GridProps } from '@chakra-ui/react';

export type EntryHorsesGridProps = GridProps & {
  /** 馬番ヘッダラベル */
  pgmHeaderLabel: string;
  /** 馬名ヘッダラベル */
  horseHeaderLabel: string;
};
export const EntryHorsesGrid: React.FC<EntryHorsesGridProps> = ({ column = '', ...rest }) => (
  <Grid column={column} {...rest} />
);
