import { Helmet } from 'react-helmet';
import { Box } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import background from '../images/fixiki-5.jpg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
};

export default function Login() {
  return (
    <Box pos="relative" h="auto" bg="rgba(255,0,0,0.1)" bgImage={background}>
      <div style={styles.container}>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </div>
    </Box>
  );
}
