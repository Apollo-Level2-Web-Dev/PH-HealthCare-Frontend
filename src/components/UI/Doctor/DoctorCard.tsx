import { Doctor } from '@/types/doctor';
import { Box, Button, Stack, Typography } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const DoctorCard = ({ doctor }: { doctor: Doctor }) => {
   const placeholder =
      'https://static.vecteezy.com/system/resources/thumbnails/026/489/224/small_2x/muslim-malay-woman-doctor-in-hospital-with-copy-space-ai-generated-photo.jpg';

   return (
      <Stack direction='row' gap={2}>
         <Stack
            direction='row'
            flex={1}
            gap={3}
            sx={{ height: 235, bgcolor: 'white', p: 3 }}
         >
            <Box sx={{ width: 190, height: 190, bgcolor: '#808080' }}>
               <Image
                  src={doctor?.profilePhoto ? doctor.profilePhoto : placeholder}
                  alt='doctor image'
                  width={190}
                  height={190}
                  style={{
                     height: '190px',
                  }}
               />
            </Box>
            <Stack flex={1} justifyContent='space-between'>
               <Box sx={{ flex: 1 }}>
                  <Typography variant='h6' fontWeight={600}>
                     {doctor?.name}
                  </Typography>
                  <Typography sx={{ my: '2px', color: 'secondary.main' }}>
                     {doctor?.designation}
                  </Typography>
                  <Typography
                     noWrap
                     sx={{ color: 'secondary.main', maxWidth: '45ch' }}
                  >
                     {doctor?.doctorSpecialties?.length
                        ? 'Specialties in' +
                          ' ' +
                          doctor?.doctorSpecialties?.map(
                             (specialty) => specialty?.specialties?.title
                          )
                        : ''}
                  </Typography>
               </Box>
               <Box
                  sx={{
                     borderBottom: '2px dashed',
                     borderColor: 'secondary.light',
                     my: 3,
                  }}
               />
               <Stack direction='row' justifyContent='space-between'>
                  <Box>
                     <Stack direction='row' alignItems='center'>
                        <Typography
                           variant='h6'
                           sx={{ color: 'primary.main', fontWeight: '600' }}
                        >
                           Taka : {doctor?.apointmentFee}
                        </Typography>
                        <Typography
                           variant='caption'
                           sx={{
                              display: 'inline',
                              ml: 1,
                              color: 'secondary.main',
                           }}
                        >
                           (incl. Vat)
                        </Typography>
                     </Stack>
                     <Typography variant='caption' color='secondary.main'>
                        Per consultation
                     </Typography>
                  </Box>
                  <Box>
                     <Link href={`/checkout/${doctor?.id}`}>
                        <Button>Book Now</Button>
                     </Link>
                  </Box>
               </Stack>
            </Stack>
         </Stack>
         <Stack sx={{ height: 235, bgcolor: 'white', width: '400px', p: 3 }}>
            <Box flex={1}>
               <Typography color='secondary.main'>Working in</Typography>
               <Typography sx={{ fontWeight: '600', mt: '3px' }}>
                  {doctor?.currentWorkingPlace}
               </Typography>
            </Box>
            <Box
               sx={{
                  borderBottom: '2px dashed',
                  borderColor: 'secondary.light',
                  my: '22px',
               }}
            />
            <Stack direction='row' justifyContent='space-between'>
               <Box>
                  <Typography color='secondary.main'>
                     Total Experience
                  </Typography>
                  <Typography variant='h6' sx={{ fontWeight: '600' }}>
                     {doctor?.experience}+ Years
                  </Typography>
               </Box>
               <Box>
                  <Button component={Link} href={`/doctors/${doctor.id}`}>
                     View Details
                  </Button>
               </Box>
            </Stack>
         </Stack>
      </Stack>
   );
};

export default DoctorCard;
