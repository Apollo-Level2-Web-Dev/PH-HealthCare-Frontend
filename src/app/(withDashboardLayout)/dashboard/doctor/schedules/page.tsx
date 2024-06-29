'use client';
import { Box, Button, IconButton, Pagination } from '@mui/material';
import DoctorScheduleModal from './components/DoctorScheduleModal';
import { useEffect, useState } from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import DeleteIcon from '@mui/icons-material/Delete';
import { dateFormatter } from '@/utils/dateFormatter';
import { ISchedule } from '@/types/schedule';
import dayjs from 'dayjs';
import { useGetAllDoctorSchedulesQuery } from '@/redux/api/doctorScheduleApi';
import AddIcon from '@mui/icons-material/Add';

const DoctorSchedulesPage = () => {
   const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

   const query: Record<string, any> = {};

   const [page, setPage] = useState(1);
   const [limit, setLimit] = useState(3);

   query['page'] = page;
   query['limit'] = limit;

   const [allSchedule, setAllSchedule] = useState<any>([]);
   const { data, isLoading } = useGetAllDoctorSchedulesQuery({ ...query });
   console.log(data);

   const schedules = data?.doctorSchedules;
   const meta = data?.meta;

   console.log({ schedules });

   let pageCount: number;

   if (meta?.total) {
      pageCount = Math.ceil(meta.total / limit);
   }

   const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
      setPage(value);
   };

   useEffect(() => {
      const updateData = schedules?.map(
         (schedule: ISchedule, index: number) => {
            return {
               id: schedule?.scheduleId,
               startDate: dateFormatter(schedule?.schedule?.startDate),
               startTime: dayjs(schedule?.startDate).format('hh:mm a'),
               endTime: dayjs(schedule?.endDate).format('hh:mm a'),
            };
         }
      );
      setAllSchedule(updateData);
   }, [schedules]);

   const columns: GridColDef[] = [
      { field: 'startDate', headerName: 'Date', flex: 1 },
      { field: 'startTime', headerName: 'Start Time', flex: 1 },
      { field: 'endTime', headerName: 'End Time', flex: 1 },
      {
         field: 'action',
         headerName: 'Action',
         flex: 1,
         headerAlign: 'center',
         align: 'center',
         renderCell: ({ row }) => {
            return (
               <IconButton aria-label='delete'>
                  <DeleteIcon sx={{ color: 'red' }} />
               </IconButton>
            );
         },
      },
   ];

   return (
      <Box>
         <Button
            onClick={() => setIsModalOpen(true)}
            endIcon={<AddIcon />}
            sx={{ mt: 3.5 }}
         >
            Create Doctor Schedule
         </Button>
         <DoctorScheduleModal open={isModalOpen} setOpen={setIsModalOpen} />
         <Box sx={{ mb: 5 }}></Box>

         <Box>
            {!isLoading ? (
               <Box my={2}>
                  <DataGrid
                     rows={allSchedule ?? []}
                     columns={columns}
                     hideFooterPagination
                     slots={{
                        footer: () => {
                           return (
                              <Box
                                 sx={{
                                    mb: 2,
                                    display: 'flex',
                                    justifyContent: 'center',
                                 }}
                              >
                                 <Pagination
                                    color='primary'
                                    count={pageCount}
                                    page={page}
                                    onChange={handleChange}
                                 />
                              </Box>
                           );
                        },
                     }}
                  />
               </Box>
            ) : (
               <h1>Loading.....</h1>
            )}
         </Box>
      </Box>
   );
};

export default DoctorSchedulesPage;
