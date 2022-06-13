import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import contactsSlice from './contactsSlice'

export const store =  configureStore({
  reducer: contactsSlice
})

export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch
export type RootState = ReturnType<typeof store.getState>