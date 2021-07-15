import { GridItem, GridItemProps, Text, Link } from '@chakra-ui/react';

export type EntryHorsesHorseNameProps = GridItemProps & {
  /** パス */
  href: string;
  /** 馬番 */
  horseNumber: number;
  /** 馬名 */
  horseName: string;
  /** 馬番Props */
  horseNumberGridItemProps?: GridItemProps;
  /** 馬名Props */
  horseNameGridItemProps?: GridItemProps;
};

export const EntryHorsesHorseName: React.FC<EntryHorsesHorseNameProps> = ({
  href,
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
      <Link href={href} isExternal>
        {horseName}
      </Link>
    </GridItem>
  </>
);
