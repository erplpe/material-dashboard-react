import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase";

export const partsSlice = createSlice({
  name: "parts",
  initialState: [],
  reducers: {},
  /* eslint-disable no-use-before-define */
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-param-reassign */
  /* eslint-disable prefer-destructuring */
  extraReducers(builder) {
    builder.addCase(getParts.fulfilled, (state, action) => {
      const data = action.payload.payload;
      return data;
    });
  },
});

export const getParts = createAsyncThunk("parts/getParts", async (projectKey) => {
  const data = await getDocs(collection(db, `projects/${projectKey}/parts`)).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => {
      const originalData = doc.data();
      return { ...originalData };
    });
    return newData;
  });
  return { payload: data };
});

export default partsSlice.reducer;
