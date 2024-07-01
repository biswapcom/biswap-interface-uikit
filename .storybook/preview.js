import React from "react";
/** @type { import('@storybook/react').Preview } */
import { withThemeFromJSXProvider } from "@storybook/addon-themes";
import { ThemeProvider } from "styled-components";
import { light, dark, ResetCSS } from "../src/theme";
import { MatchBreakpointsProvider } from "../src/contexts";
import { ModalProvider } from "../src/widgets/Modal";

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
    (Story) => (
      <MatchBreakpointsProvider>
        <ModalProvider>
          <Story />
        </ModalProvider>
      </MatchBreakpointsProvider>
    ),
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