import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase";

export const workersSlice = createSlice({
  name: "workers",
  initialState: [],
  reducers: {},
  /* eslint-disable no-use-before-define */
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-param-reassign */
  /* eslint-disable prefer-destructuring */
  /* eslint-disable camelcase */
  extraReducers(builder) {
    builder.addCase(getWorkers.fulfilled, (state, action) => {
      const data = action.payload.payload;
      return data;
    });
  },
});

export const getWorkers = createAsyncThunk("workers/getWorkers", async () => {
  const data = await getDocs(collection(db, "workers")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => {
      const originalData = doc.data();
      try{
        originalData.assigned_work = originalData.assigned_work.path
      }
      catch(e){
        originalData.assigned_work = "N/A"
      }
      
      return { ...originalData };
    });
    return newData;
  });
  return { payload: data };
});

export default workersSlice.reducer;
