import React from 'react';
import { Box, Typography, Button } from '@mui/material';

import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
    sx={{ mt: { lg: '100px', xs: '70px' }, ml: { sm: '50px' } }}
    position='relative'
    p='10px'
  >
    <Typography color='#FF5825' fontWeight='600' fontSize='30px'>
      Fitness App
    </Typography>
    <Typography
      fontWeight={600}
      sx={{ fontSize: { lg: '44px', xs: '40px' } }}
      mb='23px'
      mt='30px'
    >
      Hit the Gym
      <br />
      <b>Everyday....Repeat</b>
    </Typography>
    <Typography fontSize='22px' fontFamily='Alegreya' lineHeight='35px'>
      Check out the most <b>effective exercises </b>
      <br />
      personalized for your <b> body</b>
    </Typography>
    <Button
      href='#exercises'
      style={{
        marginTop: '45px',
        marginBottom: "80px",
        textDecoration: 'none',
        width: '180px',
        textAlign: 'center',
        background: '#424',
        padding: '12px',
        fontSize: '16px',
        textTransform: 'none',
        color: 'white',
        borderRadius: '6px',
      }}
>
      Explore Exercises
    </Button>
    <Typography
      fontWeight={600}
      color='blue'
      sx={{
        opacity: '0.1',
        display: { lg: 'block', xs: 'none' },
        fontSize: '200px',
      }}
    >
      Exercise
    </Typography>
    <img src={HeroBannerImage} alt='hero-banner' className='hero-banner-img' />
  </Box>
);

export default HeroBanner;
