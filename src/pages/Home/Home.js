import { Box } from '@chakra-ui/react';
import React from 'react';
import css from './Home.module.css';
import background from '../../images/fixiki-6a.jpg';

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
      <div style={css.container}>
        <h1 style={css.title}>PHONEBOOK</h1>
      </div>
    </Box>
  );
}
