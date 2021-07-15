import { extendTheme } from '@chakra-ui/react';

/** デフォルトのフォント */
const defaultFontFamily = `"Helvetica Neue", Arial, "Hiragino Kaku Gothic ProN", "Hiragino Sans", Meiryo, sans-serif;`;

export const customTheme = extendTheme({
  fonts: {
    body: defaultFontFamily,
    heading: defaultFontFamily,
    mono: defaultFontFamily,
  },
});
