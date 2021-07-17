import { GridItem, GridItemProps, Text } from '@chakra-ui/react';

export type EntryHorsesHeaderProps = GridItemProps & {
  /** 馬番ラベル */
  pgmLabel: string;
  /** 馬名ラベル */
  horseNameLabel: string;
  /** 馬番ラベルProps */
  pgmLabelGridItemProps?: GridItemProps;
  /** 馬名ラベルProps */
  horseNameLabelGridItemProps?: GridItemProps;
};

export const EntryHorsesHeader: React.FC<EntryHorsesHeaderProps> = ({
  pgmLabel,
  horseNameLabel,
  pgmLabelGridItemProps = {
    paddingLeft: 2,
    paddingTop: 1,
  },
  horseNameLabelGridItemProps = {
    paddingLeft: 2,
    paddingTop: 1,
  },
}) => (
  <>
    <GridItem {...pgmLabelGridItemProps}>
      <Text>{pgmLabel}</Text>
    </GridItem>
    <GridItem {...horseNameLabelGridItemProps}>
      <Text>{horseNameLabel}</Text>
    </GridItem>
  </>
);
