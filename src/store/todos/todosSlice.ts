import { createSlice } from "@reduxjs/toolkit";

export interface Todo {
  id: string;
  title: string;
  // price: string;
}

interface AddTodoAction {
  type: string;
  payload: { title: string; price?: string };
}

interface DeleteTodoAction {
  type: string;
  payload: { id: string };
}

const todosSlice = createSlice({
  name: "todos",
  initialState: {
    todos: [] as Todo[],
  },
  reducers: {
    addTodo(state, action: AddTodoAction) {
      state.todos.push({
        id: new Date().toISOString(),
        title: action.payload.title,
        // price: action.payload.price,
      });
    },
    removeTodo(state, action: DeleteTodoAction) {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload.id);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
