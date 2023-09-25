import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const store = createApi({
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/'}),
    endpoints: (builder) => ({
        get
    })
})