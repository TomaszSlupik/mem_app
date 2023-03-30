import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Mem from '../Data/Mem.json'

export const fetchMem = createAsyncThunk(
    'mem/fetchMem',
    async () => {
      // const response = await axios.get(`https://tomaszslupik.github.io/api_mem_data/api_mem_data.json`);
      const response = await Mem
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
    reducers: {
      addMem: (state, action) => {
          state.mem.push (action.payload)
      }
    },
    extraReducers: (builder) => {
      builder
        .addCase(fetchMem.pending, (state) => {
          state.status = 'loading';
        })
        .addCase(fetchMem.fulfilled, (state, action) => {
          state.status = 'succeeded';
          state.error = null;
          state.mem.push(action.payload);
        })
        .addCase(fetchMem.rejected, (state, action) => {
          state.status = 'failed';
          state.error = action.error.message;
        });
    }
  });
  
  export const {addMem} = memSlice.actions
  export default memSlice.reducer;

