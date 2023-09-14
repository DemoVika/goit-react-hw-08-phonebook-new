import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputLeftElement,
  InputGroup,
  Icon,
} from '@chakra-ui/react';
import { FaUser, FaRegEnvelope, FaKey } from 'react-icons/fa';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <form onSubmit={handleSubmit} autoComplete="off" width="320px">
      <FormControl isRequired={true}>
        <FormLabel>Name</FormLabel>
        <InputGroup>
          <Input
            borderColor="teal.500"
            boxShadow="lg"
            name="name"
            required
            placeholder="Фиксик Файер"
          />
          <InputLeftElement pointerEvents="none">
            <Icon as={FaUser} color="teal.600" />
          </InputLeftElement>
        </InputGroup>

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
            required
          />
          <InputLeftElement pointerEvents="none">
            <Icon as={FaKey} color="teal.600" />
          </InputLeftElement>
        </InputGroup>

        <Button
          type="submit"
          colorScheme="teal"
          variant="solid"
          boxShadow="lg"
          w="320px"
          size="md"
          mt="14px"
        >
          Registration
        </Button>
      </FormControl>
    </form>
  );
};
