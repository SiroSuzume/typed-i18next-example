import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChakraProvider, GridItem, Text } from '@chakra-ui/react';
import { customTheme } from '@/theme';
import { EntryHorsesGrid } from '@/components/atoms/entry-horses/grid';
import { EntryHorsesHeader } from '.';

export default {
  title: 'molecules/entry-horse/header',
  component: EntryHorsesHeader,
} as ComponentMeta<typeof EntryHorsesHeader>;

const Template: ComponentStory<typeof EntryHorsesHeader> = (props) => (
  <ChakraProvider resetCSS theme={customTheme}>
    <EntryHorsesGrid width="16rem">
      <EntryHorsesHeader {...props} />
      <GridItem paddingLeft={2}>
        <Text>1</Text>
      </GridItem>
      <GridItem paddingLeft={2}>
        <Text>ゴールドシップ</Text>
      </GridItem>
      <GridItem paddingLeft={2}>
        <Text>2</Text>
      </GridItem>
      <GridItem paddingLeft={2}>
        <Text>ステイゴールド</Text>
      </GridItem>
    </EntryHorsesGrid>
  </ChakraProvider>
);

export const Ja = Template.bind({});
Ja.args = {
  pgmLabel: '馬番',
  horseNameLabel: '馬名',
};

export const En = Template.bind({});
En.args = {
  pgmLabel: 'Pgm',
  horseNameLabel: 'Horse name',
};

export const Zh = Template.bind({});
Zh.args = {
  pgmLabel: '馬匹編號',
  horseNameLabel: '馬名',
};
