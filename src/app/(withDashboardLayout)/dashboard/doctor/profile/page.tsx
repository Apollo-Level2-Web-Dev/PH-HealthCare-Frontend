'use client';

import {
   useGetMYProfileQuery,
   useUpdateMYProfileMutation,
} from '@/redux/api/myProfile';
import { Box, Button, Container } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2'; // Grid version 2
import Image from 'next/image';
import React, { useState } from 'react';
import DoctorInformation from './components/DoctorInformations';
import AutoFileUploader from '@/components/Forms/AutoFileUploader';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import ProfileUpdateModal from './components/ProfileUpdateModal';
import ModeEditIcon from '@mui/icons-material/ModeEdit';

const Profile = () => {
   const [isModalOpen, setIsModalOpen] = useState(false);

   const { data, isLoading } = useGetMYProfileQuery(undefined);
   const [updateMYProfile, { isLoading: updating }] =
      useUpdateMYProfileMutation();

   const fileUploadHandler = (file: File) => {
      const formData = new FormData();
      formData.append('file', file);
      formData.append('data', JSON.stringify({}));

      updateMYProfile(formData);
   };

   if (isLoading) {
      <p>Loading...</p>;
   }

   return (
      <>
         <ProfileUpdateModal
            open={isModalOpen}
            setOpen={setIsModalOpen}
            id={data?.id}
         />
         <Container>
            <Grid container spacing={2}>
               <Grid xs={12} md={4}>
                  <Box
                     sx={{
                        height: 300,
                        width: '100%',
                        overflow: 'hidden',
                        borderRadius: 1,
                     }}
                  >
                     <Image
                        height={300}
                        width={400}
                        src={data?.profilePhoto}
                        alt='User Photo'
                     />
                  </Box>

                  {updating ? (
                     <p>Uploading...</p>
                  ) : (
                     <AutoFileUploader
                        name='file'
                        label='Choose Your Profile Photo'
                        icon={<CloudUploadIcon />}
                        onFileUpload={fileUploadHandler}
                        variant='text'
                     />
                  )}

                  <Button
                     fullWidth
                     endIcon={<ModeEditIcon />}
                     onClick={() => setIsModalOpen(true)}
                  >
                     Edit Profile
                  </Button>
               </Grid>
               <Grid xs={12} md={8}>
                  <DoctorInformation data={data} />
               </Grid>
            </Grid>
         </Container>
      </>
   );
};

export default Profile;
