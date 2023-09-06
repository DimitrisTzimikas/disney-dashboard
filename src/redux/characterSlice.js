import {createSlice, createAsyncThunk} from '@reduxjs/toolkit';

// Define an async thunk for fetching characters
export const fetchCharacters = createAsyncThunk('characters/fetchCharacters', async (pageSize) => {
  const response = await fetch(`https://api.disneyapi.dev/character?page=1&pageSize=${pageSize}`);
  const charactersResponseData = await response.json();

  return charactersResponseData.data;
});

// Create a slice
const characterSlice = createSlice({
  name: 'characters',
  initialState: {
    characters: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchCharacters.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchCharacters.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.characters = action.payload;
      })
      .addCase(fetchCharacters.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

// Export the actions and selectors
export const {} = characterSlice.actions;

// Export the reducer
export default characterSlice.reducer;

// Create a selector to get characters
export const selectCharacters = (state) => state.characters.characters;
