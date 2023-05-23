import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from 'react-redux';
import { AppFormReducer } from "./appForm.slice";


const store = configureStore({
    reducer: {
        appForm:AppFormReducer,
    },
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch // Export a hook that can be reused to resolve types

export {store};