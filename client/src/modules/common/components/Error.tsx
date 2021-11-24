import { Box, Heading, Text, Button } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';

export default function Error() {
  const navigate = useNavigate();
  return (
    <Box textAlign='center' py={'35vh'} px={6}>
      <Heading
        display='inline-block'
        as='h2'
        size='2xl'
        bgGradient='linear(to-r, orange.300, orange.600)'
        backgroundClip='text'
      >
        404
      </Heading>
      <Text fontSize='18px' mt={3} mb={2}>
        Page Not Found
      </Text>
      <Text color={'gray.500'} mb={6}>
        The page you're looking for does not seem to exist
      </Text>

      <Button
        colorScheme='orange'
        bgGradient='linear(to-r, orange.400, orange.500, orange.600)'
        color='white'
        variant='solid'
        onClick={() => navigate('/')}
      >
        Go to Home
      </Button>
    </Box>
  );
}
