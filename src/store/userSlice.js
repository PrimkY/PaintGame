import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    isLoggedIn: false,
    email: null,
    id: null,
    token: null,
    name: null,
}

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.isLoggedIn = true;
      state.email = action.payload.email;
      state.id = action.payload.id;
      state.token = action.payload.token;
      state.name = action.payload.name;
    },
    removeUser(state) {
      state.isLoggedIn = false;
      state.id = null;
      state.email = null;
      state.token = null;
      state.name = null
    },
  },
});

export const {setUser, removeUser} = userSlice.actions;

export default userSlice.reducer;
