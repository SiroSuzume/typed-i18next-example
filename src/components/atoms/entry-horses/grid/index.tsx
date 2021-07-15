import { Grid, GridProps } from '@chakra-ui/react';

export type EntryHorsesGridProps = GridProps;
export const EntryHorsesGrid: React.FC<EntryHorsesGridProps> = ({
  templateColumns = '5rem 1fr',
  boxShadow = 'md',
  borderWidth = '1px',
  borderRadius = 'md',
  borderColor = 'gray.400',
  ...rest
}) => (
  <Grid
    templateColumns={templateColumns}
    borderWidth={borderWidth}
    borderRadius={borderRadius}
    borderColor={borderColor}
    boxShadow={boxShadow}
    {...rest}
  />
);
