import { configureStore } from "@reduxjs/toolkit";
import studentReducer from "./features/studentSlice"
import { TypedUseSelectorHook, useSelector } from "react-redux";


export const store = configureStore({
    reducer:{
        registerstudent:studentReducer
    }
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export const useAppSelector:TypedUseSelectorHook<RootState> = useSelector