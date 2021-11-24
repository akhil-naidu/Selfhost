import {
  Flex,
  Container,
  Heading,
  Stack,
  Text,
  Button,
} from '@chakra-ui/react';
import HeroIcon from './HeroIcon';

export default function CallToActionWithIllustration() {
  return (
    <Container maxW={'5xl'}>
      <Stack
        textAlign={'center'}
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 20, md: 28 }}
      >
        <Heading
          fontWeight={600}
          fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
          lineHeight={'110%'}
        >
          Self Hosting{' '}
          <Text as={'span'} color={'orange.400'}>
            Made Easy
          </Text>
        </Heading>
        <Text color={'gray.500'} maxW={'3xl'}>
          Self-hosting is the practice of locally hosting and managing
          applications instead of renting from SaaSS providers. With the help of
          our managed self hosting plans you will have the ability to host your
          services to the public with enterprise standards.
        </Text>
        <Stack spacing={6} direction={'row'}>
          <Button
            rounded={'full'}
            px={6}
            colorScheme={'orange'}
            bg={'orange.400'}
            _hover={{ bg: 'orange.500' }}
          >
            Get started
          </Button>
          <Button rounded={'full'} px={6}>
            Learn more
          </Button>
        </Stack>
        <Flex w={'full'}>
          <Illustration
            height={{ sm: '24rem', lg: '28rem' }}
            mt={{ base: 12, sm: 16 }}
          />
        </Flex>
      </Stack>
    </Container>
  );
}

export const Illustration = (props: any) => {
  return <HeroIcon props={props} />;
};
