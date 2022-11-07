import { createSlice } from "@reduxjs/toolkit";

// хранилище для изменения состояния счетчиков элементов товаров
export const userSlice = createSlice({
  name: "user",
  initialState: {
    name: "zero",
    password: "02",
    status: false,
  },
  reducers: {
    signIn: (state, action) => {
      state.status = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { signIn } = userSlice.actions;

export default userSlice.reducer;
