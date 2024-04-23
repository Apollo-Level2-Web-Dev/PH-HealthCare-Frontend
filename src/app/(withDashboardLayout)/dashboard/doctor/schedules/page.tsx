'use client';
import { Box, Button } from '@mui/material';
import DoctorScheduleModal from './components/DoctorScheduleModal';
import { useState } from 'react';

const DoctorSchedulesPage = () => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
   return (
      <Box>
         <Button onClick={() => setIsModalOpen(true)}>
            Create Doctor Schedule
         </Button>
         <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
         <Box>Schedule table goes here</Box>
      </Box>
   );
};

export default DoctorSchedulesPage;
