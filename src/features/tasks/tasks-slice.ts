import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type TasksModel = {
  id: string;
  nameTask: string;
};

type InitialStateModel = {
  tasks: TasksModel[];
};

const initialState: InitialStateModel = {
  tasks: [],
};

type EditTaskModel = {
  id: string;
  newNameTask: string;
};

type DeleteTask = {
  id: string;
};

export const tasksSlice = createSlice({
  name: "tasks",
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<TasksModel>) {
      state.tasks = [...state.tasks, action.payload];
      state.tasks.reverse();
    },
    editTask(state, action: PayloadAction<EditTaskModel>) {
      const index = state.tasks.findIndex(
        (item) => item.id === action.payload.id
      );
      state.tasks[index].nameTask = action.payload.newNameTask;
    },
    deleteTask(state, action: PayloadAction<DeleteTask>) {
      state.tasks = state.tasks.filter((item) => item.id !== action.payload.id);
    },
  },
});

export const { addTask, editTask, deleteTask } = tasksSlice.actions;

export const taskreducer = tasksSlice.reducer;
