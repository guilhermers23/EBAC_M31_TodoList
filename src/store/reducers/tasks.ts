import { data, type TaskState } from "../../db/dataTasks";
import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utilities/enums/TasksEnums";
import type Task from "../../models/Task";

const initialState: TaskState = data;

const taskSSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
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
    addTask: (state, action: PayloadAction<Omit<Task, "id">>) => {
      const hasTask = state.taskList.find(
        ({ title }) =>
          title.toLowerCase() === action.payload.title.toLowerCase()
      );
      if (hasTask) {
        alert("Já existe tarefa registrada com esse nome.");
      } else {
        //Código para gerar ID progressivo
        const lastTask = state.taskList[state.taskList.length - 1];
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1,
        };
        state.taskList.push(newTask);
      }
    },
    changeStatusTask: (
      state,
      action: PayloadAction<{ id: number; completed: boolean }>
    ) => {
      const indexTask = state.taskList.findIndex(
        ({ id }) => id === action.payload.id
      );

      if (indexTask >= 0) {
        state.taskList[indexTask].status = action.payload.completed
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE;
      }
    },
  },
});

export const { removeTask, editTask, addTask, changeStatusTask } =
  taskSSlice.actions;
export default taskSSlice.reducer;
