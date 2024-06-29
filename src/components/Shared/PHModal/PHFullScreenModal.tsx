import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import { DialogContent, DialogTitle, SxProps } from '@mui/material';
import { BootstrapDialog } from './PHModal';

type TModalProps = {
   open: boolean;
   setOpen: React.Dispatch<React.SetStateAction<boolean>>;
   title: string;
   children: React.ReactNode;
   sx?: SxProps;
};

const Transition = React.forwardRef(function Transition(
   props: TransitionProps & {
      children: React.ReactElement;
   },
   ref: React.Ref<unknown>
) {
   return <Slide direction='up' ref={ref} {...props} />;
});

export default function PHFullScreenModal({
   open = false,
   setOpen,
   title = '',
   children,
   sx,
}: TModalProps) {
   const handleClose = () => {
      setOpen(false);
   };

   return (
      <React.Fragment>
         <BootstrapDialog
            fullScreen
            onClose={handleClose}
            aria-labelledby='customized-dialog-title'
            open={open}
            sx={{ ...sx }}
            TransitionComponent={Transition}
         >
            <DialogTitle
               sx={{ color: 'primary.main', background: '#f4f7fe' }}
               id='customized-dialog-title'
            >
               {title}
            </DialogTitle>
            <IconButton
               aria-label='close'
               onClick={handleClose}
               sx={{
                  position: 'absolute',
                  right: 8,
                  top: 8,
                  color: (theme) => theme.palette.grey[500],
               }}
            >
               <CloseIcon />
            </IconButton>
            <DialogContent sx={{ mx: 1 }}>{children}</DialogContent>
         </BootstrapDialog>
      </React.Fragment>
   );
}
