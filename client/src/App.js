import '@fontsource/fira-mono';
import '@fontsource/allerta-stencil';

import React from 'react';
import {
  ChakraProvider,
  Box,
  VStack,
  Grid,
  Container,
  Stack,
  Heading,
  Text,
} from '@chakra-ui/react';

import theme from './theme';
import { ColorModeSwitcher } from './ColorModeSwitcher';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <VStack spacing={8}>
            <Container>
              <Stack>
                <Heading>The spectacle before us was indeed sublime.</Heading>
                <Text>
                  Apparently we had reached a great height in the atmosphere,
                  for the sky was a dead black, and the stars had ceased to
                  twinkle. By the same illusion which lifts the horizon of the
                  sea to the level of the spectator on a hillside, the sable
                  cloud beneath was dished out, and the car seemed to float in
                  the middle of an immense dark sphere, whose upper half was
                  strewn with silver. Looking down into the dark gulf below, I
                  could see a ruddy light streaming through a rift in the
                  clouds.
                </Text>
              </Stack>
            </Container>
          </VStack>
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
