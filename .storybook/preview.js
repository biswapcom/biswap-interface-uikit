/** @type { import('@storybook/react').Preview } */
import {withThemeFromJSXProvider} from '@storybook/addon-themes';
import {ThemeProvider} from 'styled-components';
import { light, dark, ResetCSS } from "../src/theme";

const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        light: light,
        dark: dark,
      },
      defaultTheme: 'light',
      Provider: ThemeProvider,
      GlobalStyles: ResetCSS,
    }),
  ],
};

export default preview;
