import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchRandomGreeting = createAsyncThunk(
  'greeting/fetchRandomGreeting',
  async () => {
    try {
      const response = await fetch('http://127.0.0.1:3000/random_greeting');
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      return data.greeting;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
);
