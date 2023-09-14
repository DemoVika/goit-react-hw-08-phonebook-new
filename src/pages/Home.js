import { Box } from '@chakra-ui/react';
import React from 'react';
import background from '../images/fixiki-6a.jpg';

const styles = {
  container: {
    minHeight: 'calc(100vh - 50px)',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
  },
  title: {
    zIndex: 999,
    fontWeight: 700,
    fontSize: 80,
    marginTop: 10,
    textAlign: 'center',
  },
};

export default function Home() {
  return (
    <Box
      pos="relative"
      h="auto"
      bg="rgba(255,0,0,0.1)"
      _before={{
        content: '""',
        bgImage: background,
        bgSize: 'cover',
        pos: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.9,
      }}
    >
      <div style={styles.container}>
        <h1 style={styles.title}>PHONEBOOK</h1>
      </div>
    </Box>
  );
}
