import { extendTheme, theme as base } from '@chakra-ui/react';

const theme = extendTheme({
  fonts: {
    heading: `Allerta Stencil, ${base.fonts?.heading}`,
    body: `Fira Mono, ${base.fonts?.body}`,
  },
});

export default theme;
