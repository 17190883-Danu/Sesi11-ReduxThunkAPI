import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios';
const URL = 'https://jsonplaceholder.typicode.com/posts';

const initialState = {
  entities: [],
  loading: false
}
export const fetchUsers = createAsyncThunk('users/fetchUsers',
  async() => {
  const response = await axios.get(URL)
    return response.data;
})
export const usersSlice = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchUsers.fulfilled, (state, action) => {
      state.entities.push(...action.payload)
      state.loading = false
    })
    builder.addCase(fetchUsers.pending, (state, action) => {
      state.loading = true
    })
    builder.addCase(fetchUsers.rejected, (state, action) => {
      state.loading = false
      alert('Kesalahan dari sisi user');
    })
  }
})

export default usersSlice.reducer;

