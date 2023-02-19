import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddTodoAction, DeleteTodoAction, Todo, TodosState } from "./types";

const initialState: TodosState = {
  todos: [] as Todo[],
  totalPrice: 0,
};

const setTotalPrice = (state: TodosState) => {
  return (state.totalPrice = state.todos.reduce(
    (acc, { price }) => (acc += Number(price)),
    0
  ));
};

const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<AddTodoAction>) {
      const { title, price } = action.payload;

      state.todos.push({
        id: new Date().toISOString(),
        title,
        price,
      });

      setTotalPrice(state);
    },
    removeTodo(state, action: PayloadAction<DeleteTodoAction>) {
      const { id } = action.payload;

      state.todos = state.todos.filter((todo) => todo.id !== id);

      setTotalPrice(state);
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
