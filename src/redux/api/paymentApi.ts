import { baseApi } from './baseApi';
import { tagTypes } from '../tag-types';

export const BASE_STUDENT_SEMESTER_PAYMENT = '/student-semester-payments';

const paymentApi = baseApi.injectEndpoints({
   endpoints: (build) => ({
      initialPayment: build.mutation({
         query: (id: string) => ({
            url: `/payment/init/${id}`,
            method: 'POST',
         }),
         invalidatesTags: [tagTypes.payment],
      }),
   }),
});

export const { useInitialPaymentMutation } = paymentApi;

export default paymentApi;
