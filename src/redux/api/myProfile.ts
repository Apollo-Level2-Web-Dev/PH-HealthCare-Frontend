import { baseApi } from './baseApi';
import { tagTypes } from '../tag-types';

export const profileAPi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      getMYProfile: build.query({
         query: () => {
            return {
               url: '/user/me',
               method: 'GET',
            };
         },
         providesTags: [tagTypes.user],
      }),
      updateMYProfile: build.mutation({
         query: (data) => {
            return {
               url: '/user/update-my-profile',
               method: 'PATCH',
               data,
               contentType: 'multipart/form-data',
            };
         },
         invalidatesTags: [tagTypes.user],
      }),
   }),
});

export const { useGetMYProfileQuery, useUpdateMYProfileMutation } = profileAPi;
