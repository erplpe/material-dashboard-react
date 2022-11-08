import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase";

export const worksSlice = createSlice({
  name: "works",
  initialState: [{}],
  reducers: {},
  /* eslint-disable no-use-before-define */
  /* eslint-disable no-unused-vars */
  /* eslint-disable no-param-reassign */
  /* eslint-disable prefer-destructuring */
  extraReducers(builder) {
    builder.addCase(getProject.fulfilled, (state, action) => {
      const data = action.payload.payload;
      state.concat(data);
    });
  },
});

export const getProject = createAsyncThunk("works/getWorks", async (projectId) => {
  const data = await getDocs(collection(db, `projects/${projectId}`)).then((querySnapshot) => {
    const newData = querySnapshot.docs.map((doc) => {
      const originalData = doc.data();
      return { ...originalData };
    });
    return newData;
  });
  return { payload: data };
});

export default worksSlice.reducer;
