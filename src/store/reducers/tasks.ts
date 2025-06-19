import { data, type TaskState } from "../../db/dataTasks";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Task from "../../models/Task";

const initialState: TaskState = data;

const taskSSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      state.taskList = state.taskList.filter(
        (task) => task.id !== action.payload
      );
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const indexTask = state.taskList.findIndex(
        (t) => t.id === action.payload.id
      );
      if (indexTask >= 0) {
        state.taskList[indexTask] = action.payload;
      }
    },
  },
});

export const { removeTask, editTask } = taskSSlice.actions;
export default taskSSlice.reducer;
