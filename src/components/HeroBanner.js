import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Banner from '../assets/images/training.jpg';

const HeroBanner = () => (
  <Box sx={{ mt: { lg: '212px', xs: '70px' }, ml: { sm: '50px' } }} position="relative" p="20px">
    <Typography className="exploreLimits" fontWeight="500" fontSize="38px" letterSpacing="4px">Explore your Limits</Typography>
    <Typography className="mainText" fontWeight={700} letterSpacing="1px" sx={{ fontSize: { lg: '44px', xs: '40px' } }} mb="23px" mt="30px">
      Looking for <br />
      Healthiness
    </Typography>
    <Typography className="checkoutExercises" fontSize="22px" lineHeight="35px" fontWeight="500">
      Check out the most effective exercises personalized to you
    </Typography>
    <Stack>
      <a className="exploreExercisesBtn" href="#exercises" style={{ marginTop: '45px', textDecoration: 'none', fontFamily: 'roboto', width: '200px', textAlign: 'center', padding: '14px', fontSize: '18px', textTransform: 'none', color: 'white', borderRadius: '4px' }}>Explore Exercises</a>
    </Stack>
    <Typography fontWeight={600} color="#FF2625" sx={{ opacity: '0.1', display: { lg: 'block', xs: 'none' }, fontSize: '200px' }}>
      Exercise
    </Typography>
    <img src={Banner} alt="hero-banner" className="hero-banner-img" />
  </Box>
);

export default HeroBanner;
