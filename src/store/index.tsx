import { configureStore } from '@reduxjs/toolkit';
import TodoReducer from "./todoSlice";

const store = configureStore({
  reducer: {
    todo: TodoReducer
  },
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch