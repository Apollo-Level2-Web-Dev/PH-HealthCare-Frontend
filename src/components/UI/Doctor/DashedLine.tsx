'use client';

import { Box, styled } from '@mui/material';
import React from 'react';

const StyledDashedLine = styled(Box)(({ theme }) => ({
   borderBottom: '2px dashed',
   borderColor: theme.palette.secondary.main,
   marginTop: theme.spacing(4),
   marginBottom: theme.spacing(4),
}));

const DashedLine = () => {
   return (
      <>
         <StyledDashedLine />
      </>
   );
};

export default DashedLine;
