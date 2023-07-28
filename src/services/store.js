import { configureStore } from '@reduxjs/toolkit'; //configure global state Store
import { articleApi } from './article'; //import articleApi

export const store = configureStore({
    reducer: {
        [articleApi.reducerPath]: articleApi.reducer
    },
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware().concat(articleApi.middleware)
});