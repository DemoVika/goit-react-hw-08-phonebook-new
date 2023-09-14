import { RegisterForm } from 'components/RegisterForm/RegisterForm';
import { Box } from '@chakra-ui/react';
import { Helmet } from 'react-helmet';
import background from '../images/fixiki-3a.png';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
};

export default function Register() {
  return (
    <Box
      pos="relative"
      h="auto"
      bg="rgba(255,0,0,0.1)"
      bgImage={background}
      bgRepeat="no-repeat"
    >
      <div style={styles.container}>
        <Helmet>
          <title>Registration</title>
        </Helmet>
        <RegisterForm />
      </div>
    </Box>
  );
}
