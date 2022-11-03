import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase";

export const workersSlice = createSlice({
  name: "workers",
  initialState: [{ name: "asela", id: "36454", working: true }],
  reducers: {},
  /* eslint-disable no-use-before-define */
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-param-reassign */
  /* eslint-disable prefer-destructuring */
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
      originalData.assigned_work = originalData.assigned_work.path.split("/")[3];
      return { ...originalData };
    });
    return newData;
  });
  return { payload: data };
});

export default workersSlice.reducer;
