import { USER_ROLE } from '@/contants/role';
import { DrawerItem, UserRole } from '@/types';

//icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import GroupIcon from '@mui/icons-material/Group';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import ReviewsIcon from '@mui/icons-material/Reviews';
import AirlineSeatIndividualSuiteIcon from '@mui/icons-material/AirlineSeatIndividualSuite';
import TryIcon from '@mui/icons-material/Try';
import PersonIcon from '@mui/icons-material/Person';
import KeyIcon from '@mui/icons-material/Key';
import BookOnlineIcon from '@mui/icons-material/BookOnline';
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

export const drawerItems = (role: UserRole): DrawerItem[] => {
   const roleMenus: DrawerItem[] = [];

   const defaultMenus = [
      {
         title: 'Profile',
         path: `${role}/profile`,
         icon: PersonIcon,
      },
      {
         title: 'Change Password',
         path: `change-password`,
         icon: KeyIcon,
      },
   ];

   switch (role) {
      case USER_ROLE.SUPER_ADMIN:
         roleMenus.push(
            {
               title: 'Dashboard',
               path: `${role}`,
               icon: DashboardIcon,
            },
            {
               title: 'Manage Users',
               path: `${role}/manage-users`,
               icon: GroupIcon,
            }
         );
         break;

      case USER_ROLE.ADMIN:
         roleMenus.push(
            {
               title: 'Dashboard',
               path: `${role}`,
               icon: DashboardIcon,
            },
            {
               title: 'Specialties',
               path: `${role}/specialties`,
               icon: TryIcon,
            },
            {
               title: 'Doctors',
               path: `${role}/doctors`,
               icon: MedicalInformationIcon,
            },
            {
               title: 'Schedules',
               path: `${role}/schedules`,
               icon: CalendarMonthIcon,
            },
            {
               title: 'Appointments',
               path: `${role}/appointments`,
               icon: BookOnlineIcon,
            },
            {
               title: 'Reviews',
               path: `${role}/reviews`,
               icon: ReviewsIcon,
            }
         );
         break;

      case USER_ROLE.DOCTOR:
         roleMenus.push(
            {
               title: 'Dashboard',
               path: `${role}`,
               icon: DashboardIcon,
            },
            {
               title: 'Schedules',
               path: `${role}/schedules`,
               icon: CalendarMonthIcon,
            },
            {
               title: 'Appointments',
               path: `${role}/appointment`,
               icon: BookOnlineIcon,
            }
         );
         break;

      case USER_ROLE.PATIENT:
         roleMenus.push(
            {
               title: 'Appointments',
               path: `${role}/appointments`,
               icon: BookOnlineIcon,
            },
            {
               title: 'Prescriptions',
               path: `${role}/prescriptions`,
               icon: ReceiptLongIcon,
            },
            {
               title: 'Payment History',
               path: `${role}/payment-history`,
               icon: AttachMoneyIcon,
            }
         );
         break;

      default:
         break;
   }

   return [...roleMenus, ...defaultMenus];
};
