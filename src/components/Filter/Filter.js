import { useDispatch } from 'react-redux';
import { setFilter } from 'redux/contacts/slice';
import {
  FormControl,
  FormLabel,
  Input,
  InputLeftElement,
  InputGroup,
  Icon,
} from '@chakra-ui/react';
import { FaSistrix } from 'react-icons/fa';

export const Filter = () => {
  const dispath = useDispatch();
  const updateFilter = filter => {
    dispath(setFilter(filter));
  };
  return (
    <FormControl>
      <FormLabel>Find contacts by name</FormLabel>
      <InputGroup>
        <Input
          borderColor="teal.500"
          boxShadow="lg"
          mb="8px"
          type="text"
          placeholder="Contact name"
          pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
          onChange={event => {
            updateFilter(event.currentTarget.value);
          }}
        />
        <InputLeftElement pointerEvents="none">
          <Icon as={FaSistrix} color="teal.600" />
        </InputLeftElement>
      </InputGroup>
    </FormControl>
  );
};
