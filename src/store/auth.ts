import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react'

export const AuthApi = createApi({
    reducerPath: 'authApi',
    baseQuery: fetchBaseQuery
    ({ baseUrl:
            'https://ecoapp.cloud.technokratos.com/eco-rus/api/v1', }),
    endpoints: (builder) => ({
        registration: builder.mutation({ //сами задаём имя
            //параметры, которые хотим отправить, можно ещё query-параметры,
            //которые отправляются в адресной строке
            query: (body) => ({
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
        })
    })
})

export const { useRegistrationMutation, useAuthorizationMutation } = AuthApi
// экспортируем хук из AuthApi, который автоматом генерируется
// отвечает за то, чтобы из любой точки приложения можно было отправить запрос
// в других местах приложения будем по этому хуку будем вызывать эту ручку