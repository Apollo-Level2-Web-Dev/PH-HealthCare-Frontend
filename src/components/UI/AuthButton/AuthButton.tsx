'use client';

import useUserInfo from '@/hooks/useUserInfo';
import { logoutUser } from '@/services/actions/logoutUser';
import { getUserInfo } from '@/services/auth.services';
import { Button } from '@mui/material';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

const AuthButton = () => {
   const userInfo = useUserInfo();
   const router = useRouter();

   const handleLogOut = () => {
      logoutUser(router);
   };
   return (
      <>
         {userInfo?.userId ? (
            <Button color='error' onClick={handleLogOut}>
               Logout
            </Button>
         ) : (
            <Button component={Link} href='/login'>
               Login
            </Button>
         )}
      </>
   );
};

export default AuthButton;
