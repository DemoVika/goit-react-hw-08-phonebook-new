import { Helmet } from 'react-helmet';
import { Box } from '@chakra-ui/react';
import { LoginForm } from 'components/LoginForm/LoginForm';
import css from './Login.module.css';
import background from '../../images/fixiki-5.jpg';

export default function Login() {
  return (
    <Box pos="relative" h="auto" bg="rgba(255,0,0,0.1)" bgImage={background}>
      <div className={css.container}>
        <Helmet>
          <title>Login</title>
        </Helmet>
        <LoginForm />
      </div>
    </Box>
  );
}
