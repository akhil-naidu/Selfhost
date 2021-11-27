import { Box, Container, Stack, useColorModeValue } from '@chakra-ui/react';

import { Link as RouterLink } from 'react-router-dom';

export default function Footer() {
  return (
    <Box
      style={{ position: 'relative', left: 0, bottom: 0, right: 0 }}
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}
    >
      <Container
        as={Stack}
        maxW={'6xl'}
        py={4}
        direction={{ base: 'column', md: 'row' }}
        spacing={4}
        justify={{ base: 'center', md: 'space-between' }}
        align={{ base: 'center', md: 'center' }}
      >
        <Stack direction={'row'} spacing={6}>
          <RouterLink to='/'>Home</RouterLink>
          <RouterLink to='/about'>About</RouterLink>
          <RouterLink to='/blog'>Blog</RouterLink>
          <RouterLink to='/contact'>Contact</RouterLink>
        </Stack>
        <a href={'https://leewardslope.com/'}>© 2021 Leewardslope</a>
      </Container>
    </Box>
  );
}
