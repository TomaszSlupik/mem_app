import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchMem = createAsyncThunk(
    'mem/fetchMem',
    async () => {
      const response = await axios.get(`https://tomaszslupik.github.io/api_mem_data/api_mem_data.json`);
      return response;
    }
  );



const memSlice = createSlice({
    name: 'mem',
    initialState: {
      mem: [],
      status: 'idle',
      error: null
    },
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(fetchMem.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchMem.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.mem = action.payload;
        })
        .addCase(fetchMem.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    }
  });
  
  export default memSlice.reducer;

