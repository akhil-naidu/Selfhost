import { Container, Box, Stack, useColorModeValue } from '@chakra-ui/react';
import React from 'react';
import Blog from './Blog';

const BlogList = () => {
  return (
    <Box bg={useColorModeValue('gray.100', 'gray.700')}>
      <Container maxW={'7xl'} py={8} as={Stack} spacing={12}>
        <Stack
          bg={useColorModeValue('gray.100', 'gray.700')}
          direction={{ base: 'column', md: 'row' }}
          textAlign='center'
          justify='center'
          spacing={{ base: 4, lg: 10 }}
          py={10}
        >
          <Blog />
          <Blog />
          <Blog />
        </Stack>
      </Container>
    </Box>
  );
};

export default BlogList;
