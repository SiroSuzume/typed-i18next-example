import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChakraProvider } from '@chakra-ui/react';
import { customTheme } from '@/theme';
import { AppLayout } from '@/components/templates/app';
import { TopTemplate } from '.';

export default {
  title: 'Templates/App',
  component: TopTemplate,
} as ComponentMeta<typeof TopTemplate>;

const Template: ComponentStory<typeof TopTemplate> = (props) => (
  <ChakraProvider resetCSS theme={customTheme}>
    <AppLayout>
      <TopTemplate {...props} />
    </AppLayout>
  </ChakraProvider>
);

export const Normal = Template.bind({});
Normal.args = {};
