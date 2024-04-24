import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


export const authApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://testtourapp.herokuapp.com' }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body: { email: string, password: string }) => ({
                url: '/signin',
                method: 'POST',
                body,
            }),
        }),
    }),
});

export const { useLoginUserMutation } = authApi;