import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "./store/todos/todosSlice";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { StyledApp, StyledAppTitle } from "./App.styles";

const App: FC = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoPrice, setTodoPrice] = useState("");

  const dispatch = useDispatch();

  const addNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ title: todoTitle, price: todoPrice }));
    setTodoTitle("");
    setTodoPrice("");
  };

  return (
    <StyledApp>
      <StyledAppTitle>Grocery shopping list</StyledAppTitle>
      <Form
        todoTitle={todoTitle}
        todoPrice={todoPrice}
        setTodoTitle={setTodoTitle}
        setTodoPrice={setTodoPrice}
        handleSubmit={addNewTodo}
      />
      <TodoList />
    </StyledApp>
  );
};

export default App;
