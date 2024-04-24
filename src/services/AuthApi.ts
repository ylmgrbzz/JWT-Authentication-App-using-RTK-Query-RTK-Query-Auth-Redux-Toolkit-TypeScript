import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { logout } from '../features/authSlice';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://testtourapp.herokuapp.com' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body: { email: string, password: string }) => ({
                url: '/users/signin',
                method: 'POST',
                body,
            }),
        }),
        registerUser: builder.mutation({
            query: (body: { email: string, password: string, firstName: string, lastName: string }) => ({
                url: '/users/signup',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginUserMutation } = authApi;