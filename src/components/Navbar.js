import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';

import Logo from '../assets/images/Logo.png';

const Navbar = () => (
  <Stack
    direction='row'
    justifyContent='space-around'
    backgroundColor='white'
    sx={{
      gap: { sm: '110px', xs: '37px' },
      padding: { sm: '20px', xs: '12px' },
      justifyContent: 'none',
    }}
    px='20px'
  >
    <Link to='/'>
      <img
        src={Logo}
        alt='logo'
        style={{ width: '40px', height: '48px', margin: '0px 20px' }}
      />
    </Link>
    <Stack
      direction='row'
      gap='50px'
      fontFamily='Josefin Sans'
      fontSize='18px'
      alignItems='flex-end'
    >
      <Link
        to='/'
        style={{
          textDecoration: 'none',
          color: 'black',
          borderBottom: '3px solid #424',
          fontSize: '19px',
        }}
      >
        Home
      </Link>
      <a
        href='#exercises'
        style={{
          textDecoration: 'none',
          color: 'black',
          fontSize: '19px',
        }}
      >
        Exercises
      </a>
    </Stack>
  </Stack>
);

export default Navbar;
