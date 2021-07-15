import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChakraProvider, GridItem, Text } from '@chakra-ui/react';
import { customTheme } from '@/theme';
import { EntryHorsesGrid } from '.';

export default {
  title: 'atoms/entry-horse/frame',
  component: EntryHorsesGrid,
} as ComponentMeta<typeof EntryHorsesGrid>;

const Template: ComponentStory<typeof EntryHorsesGrid> = (props) => (
  <ChakraProvider resetCSS theme={customTheme}>
    <EntryHorsesGrid {...props}>
      <GridItem>
        <Text>馬番</Text>
      </GridItem>
      <GridItem>
        <Text>馬名</Text>
      </GridItem>
      <GridItem>
        <Text>1</Text>
      </GridItem>
      <GridItem>
        <Text>ゴールドシップ</Text>
      </GridItem>
      <GridItem>
        <Text>2</Text>
      </GridItem>
      <GridItem>
        <Text>ステイゴールド</Text>
      </GridItem>
    </EntryHorsesGrid>
  </ChakraProvider>
);

export const Width16rem = Template.bind({});
Width16rem.args = {
  width: '16rem',
  boxShadow: 'md',
  borderWidth: '1px',
  borderRadius: 'md',
  borderColor: 'gray.400',
};

export const Width20rem = Template.bind({});
Width20rem.args = {
  width: '20rem',
  boxShadow: 'md',
  borderWidth: '1px',
  borderRadius: 'md',
  borderColor: 'gray.400',
};
