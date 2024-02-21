import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  value: 0,
};

const CounterSlice = createSlice({
  name: "value",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    reset: (state) => {
      state.value = 0;
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload;
    },
  },
});

export const { increment, decrement, reset, incrementByAmount } =
  CounterSlice.actions;
export default CounterSlice.reducer;

// interface valueerState {
//   value: number;
// }
// extraReducers: (builder) => {
//   builder.addCase(incrementAsync.fulfilled, (state, action) => {
//     state.value += action.payload;
//   });
// },
// export const incrementAsync = createAsyncThunk(
//   "valueer/incrementAsync",
//   async (amount: number) => {
//     await new Promise((resolve) => setTimeout(resolve, 1000));
//     return amount;
//   }
// );
