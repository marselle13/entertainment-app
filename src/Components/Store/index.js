import { configureStore } from "@reduxjs/toolkit";
import entSlice from "./ent-slice";

const store = configureStore({
  reducer: { ent: entSlice.reducer },
});

export default store;
