import { configureStore } from "@reduxjs/toolkit";
import employees from "~entities/employees/model/store";

export const store = configureStore({
  reducer: { employees },
});
