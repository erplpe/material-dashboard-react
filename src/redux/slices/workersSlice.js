import { createSlice } from "@reduxjs/toolkit";
import { getDocs, collection } from "firebase/firestore";
import db from "../../firebase";

export const workersSlice = createSlice({
  name: "workers",
  initialState: [{ name: "asela", id: "36454", working: true }],
  reducers: {
    getWorkers: async (state) => {
      const data = await getDocs(collection(db, "workers")).then((querySnapshot) => {
        const newData = querySnapshot.docs.map((doc) => ({ ...doc.data() }));
        return newData;
      });
      state.push(data);
    },
  },
});

export const { getWorkers } = workersSlice.actions;

export default workersSlice.reducer;
