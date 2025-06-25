import { data, type TaskState } from "../../db/dataTasks";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type Task from "../../models/Task";

const initialState: TaskState = data;

const taskSSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    removeTask: (state, action: PayloadAction<string>) => {
      state.taskList = state.taskList.filter(({ id }) => id !== action.payload);
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const indexTask = state.taskList.findIndex(
        ({ id }) => id === action.payload.id
      );
      if (indexTask >= 0) {
        state.taskList[indexTask] = action.payload;
      }
    },
    addTask: (state, action: PayloadAction<Task>) => {
      const hasTask = state.taskList.find(
        ({ title }) =>
          title.toLowerCase() === action.payload.title.toLowerCase()
      );
      if (hasTask) {
        alert("Já existe tarefa registrada com esse nome.");
      } else {
        state.taskList.push(action.payload);
      }
    },
  },
});

export const { removeTask, editTask, addTask } = taskSSlice.actions;
export default taskSSlice.reducer;
