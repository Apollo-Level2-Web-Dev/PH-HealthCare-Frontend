'use client';

import { Box, Button, Container, Stack, Typography } from '@mui/material';
import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Link from 'next/link';

const NotFoundPage = () => {
   return (
      <Container>
         <Box
            sx={{
               width: '100%',
               maxWidth: 500,
               mx: 'auto',
               textAlign: 'center',
               mt: {
                  xs: 2,
                  md: 10,
               },
            }}
         >
            <Typography variant='h1' gutterBottom>
               404
            </Typography>
            <Typography variant='h4' gutterBottom>
               Oops! Page not found.
            </Typography>

            <Stack direction='row' gap={2} justifyContent='center'>
               <Link href='/'>
                  <Button
                     variant='outlined'
                     color='primary'
                     startIcon={<HomeIcon />}
                  >
                     Home
                  </Button>
               </Link>
               <Button
                  variant='contained'
                  onClick={() => window.history.back()}
                  startIcon={<ArrowBackIcon />}
               >
                  Back
               </Button>
            </Stack>
         </Box>
      </Container>
   );
};

export default NotFoundPage;
