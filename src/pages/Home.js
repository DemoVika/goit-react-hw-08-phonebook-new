import { Box, Text } from '@chakra-ui/react';
import React from 'react';

// const styles = {
//   container: {
//     minHeight: 'calc(100vh - 50px)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     // backgroundImage: 'url("../images/fixiki-6.jpg")',
//   },
//   title: {
//     fontWeight: 500,
//     fontSize: 48,
//     textAlign: 'center',
//   },
// };

export default function Home() {
  return (
    <Box
      pos="relative"
      h="400px"
      bg="rgba(255,0,0,0.1)"
      bgImage="url('../images/fixiki-6.jpg')"
      _before={{
        content: '""',
        // bgImage:
        //   'url(https://images.pexels.com/photos/1089438/pexels-photo-1089438.jpeg)',
        // bgImage: 'url(../images/fixiki-6.jpg)',
        bgSize: 'cover',
        pos: 'absolute',
        top: 0,
        right: 0,
        left: 0,
        bottom: 0,
        opacity: 0.9,
      }}
    >
      <Text color="white">Phonebook</Text>
    </Box>
    // <div style={styles.container}>
    //   {/* <img src="../images/fixiki-6.jpg" alt="ggg" /> */}
    //   <h1 style={styles.title}>Phonebook </h1>
    // </div>
    // </Box>
  );
}
