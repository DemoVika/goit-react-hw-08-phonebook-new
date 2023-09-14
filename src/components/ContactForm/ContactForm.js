import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectAllContacts } from 'redux/contacts/selectors';
import { addContact } from 'redux/contacts/operations';
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  InputLeftElement,
  InputGroup,
  Icon,
} from '@chakra-ui/react';
import { FaPhoneAlt, FaUser } from 'react-icons/fa';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contacts = useSelector(selectAllContacts);
  const dispath = useDispatch();

  const handleInput = event => {
    const { name, value } = event.currentTarget;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const nameId = event => {
    event.preventDefault();
    if (contacts.find(item => item.name === name)) {
      alert(`${name} is already in contacts`);
      return;
    }
    const contact = {
      name, //: name
      number, //: number
    };
    dispath(addContact(contact));
    setName('');
    setNumber('');
  };

  return (
    <form onSubmit={nameId}>
      <FormControl isRequired={true}>
        <FormLabel>Name</FormLabel>
        <InputGroup>
          <Input
            borderColor="teal.500"
            boxShadow="lg"
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={name}
            onChange={handleInput}
            placeholder="Contact name"
          />
          <InputLeftElement pointerEvents="none">
            <Icon as={FaUser} color="teal.600" />
          </InputLeftElement>
        </InputGroup>

        <FormLabel>Number</FormLabel>
        <InputGroup>
          <Input
            borderColor="teal.500"
            boxShadow="lg"
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={number}
            onChange={handleInput}
            placeholder="Phone number"
          />
          <InputLeftElement pointerEvents="none">
            <Icon as={FaPhoneAlt} color="teal.600" />
          </InputLeftElement>
        </InputGroup>

        <Button
          type="submit"
          colorScheme="teal"
          variant="solid"
          boxShadow="lg"
          w="250px"
          size="md"
          mt="10px"
          mb="8px"
        >
          Add contact
        </Button>
      </FormControl>
    </form>
  );
};
