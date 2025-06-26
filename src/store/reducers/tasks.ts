import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utilities/enums/TasksEnums";
import type Task from "../../models/Task";

// Função para carregar as tarefas do localStorage
const loadTasksFromLocalStorage = (): Task[] => {
  try {
    const serializedTasks = localStorage.getItem("taskList");
    if (serializedTasks === null) {
      return []; // Return an empty array if no tasks are found
    }
    return JSON.parse(serializedTasks) as Task[];
  } catch (error) {
    console.error("Error loading tasks from localStorage:", error);
    return []; // Return an empty array in case of an error
  }
};

// Function to save tasks to localStorage
const saveTasksToLocalStorage = (tasks: Task[]) => {
  try {
    const serializedTasks = JSON.stringify(tasks);
    localStorage.setItem("taskList", serializedTasks);
  } catch (error) {
    console.error("Error saving tasks to localStorage:", error);
  }
};

const initialState: Task[] = loadTasksFromLocalStorage();

const taskSSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    removeTask: (state, action: PayloadAction<number>) => {
      const newState = state.filter(({ id }) => id !== action.payload);
      saveTasksToLocalStorage(newState); // Save updated state
      return newState; // Return the new state
    },
    editTask: (state, action: PayloadAction<Task>) => {
      const indexTask = state.findIndex(({ id }) => id === action.payload.id);
      if (indexTask >= 0) {
        state[indexTask] = action.payload;
        saveTasksToLocalStorage(state); // Save updated state
      }
    },
    addTask: (state, action: PayloadAction<Omit<Task, "id">>) => {
      const hasTask = state.find(
        ({ title }) =>
          title.toLowerCase() === action.payload.title.toLowerCase()
      );
      if (hasTask) {
        alert("Já existe tarefa registrada com esse nome.");
      } else {
        const lastTask = state.length > 0 ? state[state.length - 1] : null;
        const newTask = {
          ...action.payload,
          id: lastTask ? lastTask.id + 1 : 1,
        };
        state.push(newTask);
        saveTasksToLocalStorage(state); // Save updated state
      }
    },
    changeStatusTask: (
      state,
      action: PayloadAction<{ id: number; completed: boolean }>
    ) => {
      const indexTask = state.findIndex(({ id }) => id === action.payload.id);

      if (indexTask >= 0) {
        state[indexTask].status = action.payload.completed
          ? enums.Status.CONCLUIDA
          : enums.Status.PENDENTE;
        saveTasksToLocalStorage(state); // Save updated state
      }
    },
  },
});

export const { removeTask, editTask, addTask, changeStatusTask } =
  taskSSlice.actions;
export default taskSSlice.reducer;
