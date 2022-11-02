import { configureStore } from "@reduxjs/toolkit";
import workersReducer from "./slices/workersSlice";

export default configureStore({
  reducer: {
    workers: workersReducer,
  },
});
