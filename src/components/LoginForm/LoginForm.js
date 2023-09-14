import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputLeftElement,
  InputGroup,
  Icon,
} from '@chakra-ui/react';
import { FaRegEnvelope, FaKey } from 'react-icons/fa';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" width="320px">
      <FormControl isRequired={true}>
        <FormLabel>Email</FormLabel>
        <InputGroup>
          <Input
            borderColor="teal.500"
            boxShadow="lg"
            type="email"
            name="email"
            required
            placeholder="example@gmail.com"
          />
          <InputLeftElement pointerEvents="none">
            <Icon as={FaRegEnvelope} color="teal.600" />
          </InputLeftElement>
        </InputGroup>

        <FormLabel>Password</FormLabel>
        <InputGroup>
          <Input
            borderColor="teal.500"
            boxShadow="lg"
            type="password"
            name="password"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            required
            placeholder="password"
          />
          <InputLeftElement pointerEvents="none">
            <Icon as={FaKey} color="teal.600" />
          </InputLeftElement>
        </InputGroup>

        <Button
          type="submit"
          colorScheme="teal"
          variant="solid"
          boxShadow="2xl"
          w="320px"
          size="md"
          mt="16px"
          mb="8px"
        >
          Log In
        </Button>
      </FormControl>
    </form>
  );
};
