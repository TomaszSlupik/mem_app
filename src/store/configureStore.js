import { configureStore } from '@reduxjs/toolkit';
import memReducer from './memSlice';

export default configureStore({
    reducer: {
      mem: memReducer
    }
  });
  