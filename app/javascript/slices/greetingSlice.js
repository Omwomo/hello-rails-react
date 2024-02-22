import { createSlice } from '@reduxjs/toolkit';

const greetingSlice = createSlice({
  name: 'greeting',
  initialState: {
    value: '',
  },
  reducers: {
    setGreeting: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setGreeting } = greetingSlice.actions;
export const selectGreeting = (state) => state.greeting.value;

export default greetingSlice.reducer;
