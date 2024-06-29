import { tagTypes } from '../tag-types';
import { baseApi } from './baseApi';
const AUTH_URL = '/auth';

export const authApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      userLogin: build.mutation({
         query: (loginData) => ({
            url: `${AUTH_URL}/login`,
            method: 'POST',
            data: loginData,
         }),
         invalidatesTags: [tagTypes.user],
      }),
      changePassword: build.mutation({
         query: (data) => ({
            url: `${AUTH_URL}/change-password`,
            method: 'POST',
            contentType: 'application/json',
            data: data,
         }),
         invalidatesTags: [tagTypes.user],
      }),
      forgotPassword: build.mutation({
         query: (data) => ({
            url: `${AUTH_URL}/forgot-password`,
            method: 'POST',
            data: data,
         }),
         invalidatesTags: [tagTypes.user],
      }),
      resetPassword: build.mutation({
         query: (data) => ({
            url: `${AUTH_URL}/reset-password`,
            method: 'POST',
            data: data,
         }),
         invalidatesTags: [tagTypes.user],
      }),
   }),
});

export const {
   useUserLoginMutation,
   useChangePasswordMutation,
   useForgotPasswordMutation,
   useResetPasswordMutation,
} = authApi;
