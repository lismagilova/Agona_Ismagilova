import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'
import { RegisterBody, RegisterResponse } from '../models/profile.model'
import { User} from '../models/generated'

export const AuthApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery
    ({ baseUrl:
            'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1', }),
    endpoints: (builder) => ({
        registration: builder.mutation<RegisterResponse, RegisterBody>({ //сами задаём имя
            //параметры, которые хотим отправить, можно ещё query-параметры,
            //которые отправляются в адресной строке
            query: (body: RegisterBody) => ({
                url: 'account', // account т.к. в APIшке по нему регистрация
                body,
                method: 'POST'
            })
        }),
        authorization: builder.mutation({
            query: (body) => ({
                url: "login",
                body,
                method: "POST"
            })
        }),
        getProfile: builder.query<User, null>(({
            query: () => ({
                url: 'profile',
                method: 'GET',
                headers: {'Authorization': `Bearer ${localStorage.getItem('token')}`}
            })
        }))
    })
})

export const { useRegistrationMutation, useAuthorizationMutation, useGetProfileQuery, useLazyGetProfileQuery } = AuthApi
// экспортируем хук из AuthApi, который автоматом генерируется
// отвечает за то, чтобы из любой точки приложения можно было отправить запрос
// в других местах приложения будем по этому хуку будем вызывать эту ручку