import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChakraProvider, GridItem, Text } from '@chakra-ui/react';
import { customTheme } from '@/theme';
import { EntryHorsesGrid } from '@/components/atoms/entry-horses/grid';
import { EntryHorsesHorseName } from '.';

export default {
  title: 'molecules/entry-horse/horse-name',
  component: EntryHorsesHorseName,
} as ComponentMeta<typeof EntryHorsesHorseName>;

const Template: ComponentStory<typeof EntryHorsesHorseName> = (props) => (
  <ChakraProvider resetCSS theme={customTheme}>
    <EntryHorsesGrid width="16rem">
      <GridItem paddingLeft={2}>
        <Text>馬番</Text>
      </GridItem>
      <GridItem paddingLeft={2}>
        <Text>馬名</Text>
      </GridItem>
      <EntryHorsesHorseName {...props} />
    </EntryHorsesGrid>
  </ChakraProvider>
);

export const Ja = Template.bind({});
Ja.args = {
  href: 'https://db.netkeiba.com/horse/2009102739',
  horseNumber: 1,
  horseName: 'ゴールドシップ',
};

export const En = Template.bind({});
En.args = {
  href: 'https://db.netkeiba.com/horse/2009102739',
  horseNumber: 2,
  horseName: 'Gold Ship',
};

export const Zh = Template.bind({});
Zh.args = {
  href: 'https://db.netkeiba.com/horse/2009102739',
  horseNumber: 3,
  horseName: '黄金船',
};
