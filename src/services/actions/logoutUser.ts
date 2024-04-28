import { authKey } from '@/contants/authkey';
import { deleteCookies } from './deleteCookies';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const logoutUser = (router: AppRouterInstance) => {
   localStorage.removeItem(authKey);
   deleteCookies([authKey, 'refreshToken']);
   router.push('/');
   router.refresh();
};
