import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import theme from '../src/theme';
import React from 'react';
import '../src/App.css';

const preview: Preview = {
    decorators: [
        (Story) => (
            <ThemeProvider theme={theme}>
                <Story />
            </ThemeProvider>
        )
    ],
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/
            }
        }
    }
};
export default preview;
