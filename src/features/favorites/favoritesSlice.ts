import { Character } from '../../types/Character'
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

type InitialState = {
  favorites: Partial<Character>[]
}

const initialState: InitialState = localStorage.getItem('favorites')
  ? JSON.parse(localStorage.getItem('favorites') || '{}')
  : {
      favorites: []
    }

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorites: (state, action: PayloadAction<Partial<Character>>) => {
      state.favorites = [...state.favorites, action.payload]
    },
    removeFavorite: (state, action: PayloadAction<Partial<Character>>) => {
      const { name } = action.payload
      const findCharacterIndex = state.favorites.findIndex(
        (character) => character.name === name
      )
      state.favorites = [
        ...state.favorites.slice(0, findCharacterIndex),
        ...state.favorites.slice(findCharacterIndex + 1)
      ]
    }
  }
})

export default favoritesSlice.reducer
export const { addFavorites, removeFavorite } = favoritesSlice.actions