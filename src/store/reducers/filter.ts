import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import * as enums from "../../utilities/enums/TasksEnums";

type FilterState = {
  term: string;
  criterion: "Priority" | "Status" | "All";
  value?: enums.Priority | enums.Status;
};

const initialState: FilterState = { term: "", criterion: "All" };

const filterSlice = createSlice({
  name: "filter",
  initialState,
  reducers: {
    changeTerm: (state, action: PayloadAction<string>) => {
      state.term = action.payload;
    },
  },
});

export const { changeTerm } = filterSlice.actions;
export default filterSlice.reducer;
