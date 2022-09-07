import { Character } from '../types/Character'
import { Middleware } from '@reduxjs/toolkit'
import { addFavorites, removeFavorite } from '../features/favorites/favoritesSlice'

export const localStorageMiddleware: Middleware<{}> =
  (store) => (next) => (action) => {
    const { favorites } = store.getState()
    if (addFavorites.match(action)) {
      const temp = [...favorites.favorites, action.payload]
      localStorage.setItem('favorites', JSON.stringify({ favorites: temp }))
    }
    if (removeFavorite.match(action)) {
      const { name } = action.payload
      const findCharacterIndex = favorites.favorites.findIndex(
        (character: Character) => character.name === name
      )
      localStorage.setItem(
        'favorites',
        JSON.stringify({
          favorites: [
            ...favorites.favorites.slice(0, findCharacterIndex),
            ...favorites.favorites.slice(findCharacterIndex + 1)
          ]
        })
      )
    }
    return next(action)
  }
