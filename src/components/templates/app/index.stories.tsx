import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ChakraProvider, Image, Heading } from '@chakra-ui/react';
import { customTheme } from '@/theme';
import { AppLayout } from '.';

export default {
  title: 'Templates/App',
  component: AppLayout,
} as ComponentMeta<typeof AppLayout>;

const Template: ComponentStory<typeof AppLayout> = (props) => (
  <ChakraProvider resetCSS theme={customTheme}>
    <AppLayout {...props} />
  </ChakraProvider>
);

export const Normal = Template.bind({});
Normal.args = {
  children: (
    <>
      <Heading as="h2">App Layout</Heading>
      <Image width="100%" height="auto" pt="1rem" src="https://placekitten.com/1200/630" objectFit="contain" />
    </>
  ),
};
