import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit'
import { Character } from '../../types/Character'
import axios from 'axios'

type InitialState = {
  loading: boolean
  characters: Character[]
  error: string
}

const initialState: InitialState = {
  loading: false,
  characters: [],
  error: ''
}

export const fetchCharacters = createAsyncThunk(
  'character/fetchCharacters',
  async () => {
    return axios
      .get('http://localhost:3000/characters')
      .then((response) => response.data)
  }
)

const characterSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCharacters.pending, (state) => {
      state.loading = true
    })
    builder.addCase(
      fetchCharacters.fulfilled,
      (state, action: PayloadAction<Character[]>) => {
        state.loading = false
        state.characters = action.payload
        state.error = ''
      }
    )
    builder.addCase(fetchCharacters.rejected, (state, action) => {
      state.loading = false
      state.characters = []
      state.error = action.error.message || 'Algo salio mal'
    })
  }
})

export default characterSlice.reducer
