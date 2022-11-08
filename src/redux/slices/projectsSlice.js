import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase";

export const projectsSlice = createSlice({
  name: "projects",
  initialState: [{
    customer: "",
    id:0,
    parts_count: 0,
    key:"",
  }],
  reducers: {},
  /* eslint-disable no-use-before-define */
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-param-reassign */
  /* eslint-disable prefer-destructuring */
  extraReducers(builder) {
    builder.addCase(getprojects.fulfilled, (state, action) => {
      const data = action.payload.payload;
      return data;
    });
  },
});

export const getprojects = createAsyncThunk("projects/getprojects", async () => {
  const data = await getDocs(collection(db, "projects")).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => {
      const originalData = doc.data();
      originalData.key = doc.id;
      return { ...originalData };
    });
    return newData;
  });
  return { payload: data };
});

export default projectsSlice.reducer;
