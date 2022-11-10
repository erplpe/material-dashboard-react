import { createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import { useSelector } from "react-redux";
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

export const getProject = createAsyncThunk("works/getWorks", async (partNumber) => {
  const parts = useSelector((state) => state.parts);
  const filtered = parts.filter((el)=>(el.part_number===partNumber));
  const selected = filtered[0];
  const data = await getDocs(collection(db, `projects/${selected.projectKey}/parts/${partNumber}`)).then((querySnapshot) => {
    const partData = querySnapshot.docs.map((doc) => {
                      const originalData = doc.data();
                      return originalData;
                      });
    return partData;
  });
  return { payload: data };
});

export default worksSlice.reducer;
