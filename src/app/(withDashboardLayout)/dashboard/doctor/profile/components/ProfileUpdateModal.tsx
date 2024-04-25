/* eslint-disable react-hooks/exhaustive-deps */

import React, { useState } from 'react';

import PHFullScreenModal from '@/components/Shared/PHModal/PHFullScreenModal';
import {
   useGetDoctorQuery,
   useUpdateDoctorMutation,
} from '@/redux/api/doctorApi';
import PHForm from '@/components/Forms/PHForm';
import { FieldValue } from 'react-hook-form';
import { Button, Grid } from '@mui/material';
import PHInput from '@/components/Forms/PHInput';
import PHSelectField from '@/components/Forms/PHSelectField';
import { Gender } from '@/types';
import MultipleSelectChip from './MultipleSelectChip';
import { useGetAllSpecialtiesQuery } from '@/redux/api/specialtiesApi';

type TProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
   id: string;
};

const ProfileUpdateModal = ({ open, setOpen, id }: TProps) => {
   const { data: doctorData } = useGetDoctorQuery(id);
   const { data: allSpecialties } = useGetAllSpecialtiesQuery(undefined);
   const [selectedSpecialtiesIds, setSelectedSpecialtiesIds] = useState([]);

   const [updateDoctor, { isLoading: updating }] = useUpdateDoctorMutation();

   console.log(selectedSpecialtiesIds);

   const submitHandler = async (values: FieldValue) => {
      const specialties = allSpecialties.map((specialtiesId: string) => ({
         specialtiesId,
         isDeleted: false,
      }));

      console.log({ id });
      // return;

      const excludedFields: Array<keyof typeof values> = [
         'email',
         'id',
         'role',
         'needPasswordChange',
         'status',
         'createdAt',
         'updatedAt',
         'isDeleted',
         'averageRating',
         'review',
         'profilePhoto',
         'registrationNumber',
         'schedules',
         'doctorSpecialties',
      ];

      const updatedValues = Object.fromEntries(
         Object.entries(values).filter(([key]) => {
            return !excludedFields.includes(key);
         })
      );

      updatedValues.specialties = specialties;

      try {
         updateDoctor({ body: { updatedValues, id } });
      } catch (error) {
         console.log(error);
      }
   };

   return (
      <PHFullScreenModal open={open} setOpen={setOpen} title='Update Profile'>
         <PHForm onSubmit={submitHandler} defaultValues={doctorData}>
            <Grid container spacing={2} sx={{ my: 5 }}>
               <Grid item xs={12} sm={12} md={4}>
                  <PHInput name='name' label='Name' sx={{ mb: 2 }} fullWidth />
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <PHInput
                     name='email'
                     type='email'
                     label='Email'
                     sx={{ mb: 2 }}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <PHInput
                     name='contactNumber'
                     label='Contract Number'
                     sx={{ mb: 2 }}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <PHInput
                     name='address'
                     label='Address'
                     sx={{ mb: 2 }}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <PHInput
                     name='registrationNumber'
                     label='Registration Number'
                     sx={{ mb: 2 }}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <PHInput
                     name='experience'
                     type='number'
                     label='Experience'
                     sx={{ mb: 2 }}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <PHSelectField
                     items={Gender}
                     name='gender'
                     label='Gender'
                     sx={{ mb: 2 }}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <PHInput
                     name='apointmentFee'
                     type='number'
                     label='ApointmentFee'
                     sx={{ mb: 2 }}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <PHInput
                     name='qualification'
                     label='Qualification'
                     sx={{ mb: 2 }}
                     fullWidth
                  />
               </Grid>

               <Grid item xs={12} sm={12} md={4}>
                  <PHInput
                     name='currentWorkingPlace'
                     label='Current Working Place'
                     sx={{ mb: 2 }}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <PHInput
                     name='designation'
                     label='Designation'
                     sx={{ mb: 2 }}
                     fullWidth
                  />
               </Grid>
               <Grid item xs={12} sm={12} md={4}>
                  <MultipleSelectChip
                     allSpecialties={allSpecialties}
                     selectedIds={selectedSpecialtiesIds}
                     setSelectedIds={setSelectedSpecialtiesIds}
                  />
               </Grid>
            </Grid>

            <Button type='submit' disabled={updating}>
               Save
            </Button>
         </PHForm>
      </PHFullScreenModal>
   );
};

export default ProfileUpdateModal;
