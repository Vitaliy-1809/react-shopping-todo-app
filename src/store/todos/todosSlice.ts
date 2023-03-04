import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AddTodoAction, DeleteTodoAction, TodosState } from "./types";

const initialState: TodosState = {
  todos: JSON.parse(localStorage.getItem("todos") as any) || [],
  totalPrice: JSON.parse(localStorage.getItem("totalPrice") as any) || 0,
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

      const newTodo = {
        id: new Date().toISOString(),
        title,
        price,
      };

      state.todos.push(newTodo);
      localStorage.setItem(
        "todos",
        JSON.stringify([
          ...JSON.parse(localStorage.getItem("todos") || "[]"),
          newTodo,
        ])
      );

      setTotalPrice(state);
      localStorage.setItem(
        "totalPrice",
        JSON.stringify(
          JSON.parse(localStorage.getItem("totalPrice") as any) + Number(price)
        )
      );
    },
    removeTodo(state, action: PayloadAction<DeleteTodoAction>) {
      const { id, price } = action.payload;
      let storageTodos = JSON.parse(localStorage.getItem("todos") as any);

      state.todos = state.todos.filter((todo) => todo.id !== id);

      storageTodos = storageTodos.filter((todo: any) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(storageTodos));

      setTotalPrice(state);
      localStorage.setItem(
        "totalPrice",
        JSON.stringify(
          JSON.parse(localStorage.getItem("totalPrice") as any) - Number(price)
        )
      );
    },
  },
});

export const { addTodo, removeTodo } = todosSlice.actions;

export default todosSlice.reducer;
