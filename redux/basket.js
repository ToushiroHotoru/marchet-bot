import { createSlice } from "@reduxjs/toolkit";

// хранилище для изменения состояния счетчиков элементов товаров
export const basketSlice = createSlice({
  name: "counter",
  initialState: {
    total: 0,
  },
  reducers: {
    calc: (state, action) => {
      state.total += action.payload;
    },
    minus: (state, action) => {
      state.total = state.total - action.payload;
    },
    reset: (state) => {
      state.total = 0;
    },
  },
});

// Action creators are generated for each case reducer function
export const { calc, minus, reset } = basketSlice.actions;

export default basketSlice.reducer;
