import { configureStore } from "@reduxjs/toolkit";

import { taskreducer } from "../tasks/tasks-slice";

export const store = configureStore({
  reducer: taskreducer,
});

export type RootState = ReturnType<typeof store.getState>;
