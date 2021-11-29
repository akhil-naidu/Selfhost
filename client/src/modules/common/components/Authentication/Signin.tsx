import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Checkbox,
  Stack,
  Link,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Divider,
  useToast,
  Center,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Link as RouterLink, useNavigate } from 'react-router-dom';
import { FcGoogle } from 'react-icons/fc';

import { useAuth } from '../../../../contexts/AuthContext';

const Signin = () => {
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { login } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      setLoading(true);
      const unsubscribe = await login(loginEmail, loginPassword);
      return unsubscribe;
    } catch (error) {
      console.log(error);
      setError('Failed to Login');
    }
    setLoading(false);
    navigate('/dashboard');
  };

  const handleLoginWithGoogle = async () => {};

  useEffect(() => {
    if (error !== '')
      toast({
        title: error,
        position: 'top-right',
        isClosable: true,
        status: 'error',
      });
  }, [toast, error]);

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Sign in to your Account</Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool <Link color={'orange.400'}>features</Link>{' '}
            ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id='email'>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                value={loginEmail}
                onChange={(e) => setLoginEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id='password'>
              <FormLabel>Password</FormLabel>
              <Input
                type='password'
                value={loginPassword}
                onChange={(e) => setLoginPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10}>
              <Stack
                direction={{ base: 'column', sm: 'row' }}
                align={'start'}
                justify={'space-between'}
              >
                <Checkbox>Remember me</Checkbox>
                <Link as={RouterLink} to='/reset' color={'orange.400'}>
                  Forgot password?
                </Link>
              </Stack>
              <Button
                disabled={loading}
                bg={'orange.400'}
                color={'white'}
                onClick={handleLogin}
                _hover={{
                  bg: 'orange.500',
                }}
              >
                Sign in
              </Button>
            </Stack>
            <Divider />

            <Button
              disabled={loading}
              w={'full'}
              maxW={'md'}
              variant={'outline'}
              leftIcon={<FcGoogle />}
            >
              <Center>
                <Text>Sign in with Google</Text>
              </Center>
            </Button>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signin;
