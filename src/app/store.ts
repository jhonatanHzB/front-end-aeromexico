import { configureStore } from '@reduxjs/toolkit'
import characterReducer from '../features/characters/characterSlice'

const store = configureStore({
  reducer: {
    character: characterReducer
  }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
