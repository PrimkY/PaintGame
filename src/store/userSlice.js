import { createSlice } from '@reduxjs/toolkit';

const usersSlice = createSlice({
  name: 'user',
  initialState: {
    isLoggedIn: false,
    email: '',
    name: '',
    id: '',
  },
  reducers: {
    usersLoggedIn(state, action) {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.name = action.payload.name;
      state.id = action.payload.id;
    },
    usersLoggedOut(state, action) {
      state.isLoggedIn = false;
      state.name = '';
      state.id = '';
      state.email = '';
    },
  },
});

export const { userLoggedIn, userLoggedOut } = usersSlice.actions;

export default usersSlice.reducer;
