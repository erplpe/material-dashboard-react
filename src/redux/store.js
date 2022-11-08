import { configureStore } from "@reduxjs/toolkit";
import workersReducer from "./slices/workersSlice";
import worksReducer from "./slices/worksSlice";
import projectsReducer from "./slices/projectsSlice";
import partsReducer from "./slices/partsSlice";

export default configureStore({
  reducer: {
    workers: workersReducer,
    works: worksReducer,
    projects: projectsReducer,
    parts: partsReducer
  },
});
