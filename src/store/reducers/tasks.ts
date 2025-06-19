import { data, type TaskState } from "../../db/dataTasks";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

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
  },
});

export const { removeTask } = taskSSlice.actions;
export default taskSSlice.reducer;
