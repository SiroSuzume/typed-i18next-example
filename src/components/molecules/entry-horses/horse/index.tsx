import { GridItem, GridItemProps, Text } from '@chakra-ui/react';

export type EntryHorsesHorseNameProps = GridItemProps & {
  /** 馬番 */
  horseNumber: string;
  /** 馬名 */
  horseName: string;
  /** 馬番Props */
  horseNumberGridItemProps?: GridItemProps;
  /** 馬名Props */
  horseNameGridItemProps?: GridItemProps;
};

export const EntryHorsesHorseName: React.FC<EntryHorsesHorseNameProps> = ({
  horseNumber,
  horseName,
  horseNumberGridItemProps = {
    paddingLeft: 2,
    paddingTop: 1,
  },
  horseNameGridItemProps = {
    paddingLeft: 2,
    paddingTop: 1,
  },
}) => (
  <>
    <GridItem {...horseNumberGridItemProps}>
      <Text>{horseNumber}</Text>
    </GridItem>
    <GridItem {...horseNameGridItemProps}>
      <Text>{horseName}</Text>
    </GridItem>
  </>
);
