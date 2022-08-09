import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    name: '',
    id: '',
  },
  reducers: {
    usersLoggedIn(state, action) {
      state.isLoggedIn = true;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
    usersLoggedOut(state, action) {
      state.isLoggedIn = false;
      state.name = '';
      state.id = '';
    },
  },
});

export const { userLoggedIn, userLoggedOut } = usersSlice.actions;

export default usersSlice.reducer;
