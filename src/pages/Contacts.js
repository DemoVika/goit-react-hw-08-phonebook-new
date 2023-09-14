import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Helmet } from 'react-helmet';
import { fetchContacts } from 'redux/contacts/operations';
import { ContactForm } from 'components/ContactForm/ContactForm';
import { selectLoading } from 'redux/contacts/selectors';
import { ContactList } from 'components/ContactList/ContactList';
import { Filter } from 'components/Filter/Filter';
import { Box } from '@chakra-ui/react';
import background from '../images/fixiki-8b.jpg';
import { Spinner } from '@chakra-ui/react';

const styles = {
  container: {
    width: '250px',
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
  },
};

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Box pos="relative" h="auto" bg="rgba(255,0,0,0.1)" bgImage={background}>
      <div style={styles.container}>
        <Helmet>
          <title>Your contacts</title>
        </Helmet>
        <div>{isLoading && <Spinner />}</div>
        <ContactForm />
        <Filter />
        <b>Your contacts</b>
        <ContactList />
      </div>
    </Box>
  );
}
