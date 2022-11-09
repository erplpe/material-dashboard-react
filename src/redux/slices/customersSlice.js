import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase";

export const customersSlice = createSlice({
  name: "customers",
  initialState: [],
  reducers: {},
  /* eslint-disable no-use-before-define */
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-param-reassign */
  /* eslint-disable prefer-destructuring */
  extraReducers(builder) {
    builder.addCase(getCustomers.fulfilled, (state, action) => {
      const data = action.payload.payload;
      return data;
    });
  },
});

export const getCustomers = createAsyncThunk("customers/getCustomers", async (projectId) => {
  const data = await getDocs(collection(db, "customers")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => {
      const originalData = doc.data();
      return { ...originalData };
    });
    return newData;
  });
  return { payload: data };
});

export default customersSlice.reducer;
