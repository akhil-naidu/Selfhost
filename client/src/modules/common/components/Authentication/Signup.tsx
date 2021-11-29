import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  // HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  useToast,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

import { useAuth } from '../../../../contexts/AuthContext';

const Signup = () => {
  const [regEmail, setRegEmail] = useState('');
  const [regPassword, setRegPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const { signup } = useAuth();
  const toast = useToast();
  const navigate = useNavigate();

  const handleRegister = async () => {
    if (regPassword !== confirmPassword) {
      return setError(`Password didn't matched`);
    }

    try {
      setLoading(true);
      await signup(regEmail, regPassword);
    } catch (error) {
      setError(`Failed to create an account, try again later`);
    }

    setLoading(false);
    navigate('/');
  };

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
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Sign up
          </Heading>
          <Text fontSize={'lg'} color={'gray.600'}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}
        >
          <Stack spacing={4}>
            {/* <HStack>
              <Box>
                <FormControl id='firstName' isRequired>
                  <FormLabel>First Name</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
              <Box>
                <FormControl id='lastName'>
                  <FormLabel>Last Name</FormLabel>
                  <Input type='text' />
                </FormControl>
              </Box>
            </HStack> */}
            <FormControl id='email' isRequired>
              <FormLabel>Email address</FormLabel>
              <Input
                type='email'
                value={regEmail}
                onChange={(e) => setRegEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id='password' isRequired>
              <FormLabel>Password</FormLabel>
              <InputGroup>
                <Input
                  type={showPassword ? 'text' : 'password'}
                  value={regPassword}
                  onChange={(e) => setRegPassword(e.target.value)}
                />
                <InputRightElement h={'full'}>
                  <Button
                    variant={'ghost'}
                    onClick={() =>
                      setShowPassword((showPassword) => !showPassword)
                    }
                  >
                    {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
            <FormControl id='confirmPassword' isRequired>
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type='text'
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                disabled={loading}
                loadingText='Submitting'
                size='lg'
                bg={'orange.400'}
                color={'white'}
                onClick={handleRegister}
                _hover={{
                  bg: 'orange.500',
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={'center'}>
                Already a user?{' '}
                <Link as={RouterLink} to='/login' color={'orange.400'}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Signup;
