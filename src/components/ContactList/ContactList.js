import PropTypes from 'prop-types';
import css from './ContactList.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { selectAllContacts, selectFilter } from 'redux/contacts/selectors';
import { deleteContact } from 'redux/contacts/operations';
import { Button } from '@chakra-ui/react';

const visibleContacts = (contacts, filter) => {
  return contacts.filter(contact => {
    return contact.name.toLowerCase().includes(filter.toLowerCase());
  });
};

export const ContactList = () => {
  const contacts = useSelector(selectAllContacts);
  const filter = useSelector(selectFilter);
  const dispath = useDispatch();
  const handleDeleteItems = id => {
    dispath(deleteContact(id));
  };

  return (
    <ul className={css.list}>
      {visibleContacts(contacts, filter).map(item => {
        return (
          <li className={css.item} key={item.id}>
            {item.name} {item.number}
            <Button
              className={css.button}
              colorScheme="teal"
              variant="outline"
              boxShadow="lg"
              size="xs"
              onClick={() => handleDeleteItems(item.id)}
            >
              Delete
            </Button>
          </li>
        );
      })}
    </ul>
  );
};

ContactList.protoTypes = {
  contacts: PropTypes.arrayOf({
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
  filter: PropTypes.string.isRequired,
};
