'use server';

import { cookies } from 'next/headers';

export const deleteCookies = (keys: string[]) => {
   keys.forEach((key) => {
      cookies().delete(key);
   });
};
