import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { User } from '../../app/interfaces/user';

const initialState: User = {
  id: "",
  avatar: "",
  email: "",
  first_name: "",
  second_name: "",
  createdAt: "",
  last_name: ""
}

export const userSlice = createSlice({
  name: "user",
  initialState: {
    user: { ...initialState }
  },
  reducers: {
    setUser: (state, payload: PayloadAction<User>) => {
      state.user = payload.payload;
    },
  },
});

export const { setUser } = userSlice.actions;

export const getUser = (state: RootState) => state.user.user;
export default userSlice.reducer;
