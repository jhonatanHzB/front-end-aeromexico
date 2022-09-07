import { configureStore } from '@reduxjs/toolkit'
import characterReducer from '../features/characters/characterSlice'
import favoritesReducer from '../features/favorites/favoritesSlice'
import { localStorageMiddleware } from './middlewares'

const store = configureStore({
  reducer: {
    character: characterReducer,
    favorites: favoritesReducer
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(localStorageMiddleware)
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
