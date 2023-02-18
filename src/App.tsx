import React, { FC, useState } from "react";
import TodoList from "./components/TodoList";
import { useDispatch } from "react-redux";
import "./App.css";
import { addTodo } from "./store/todos/todosSlice";
import InputField from "./components/InputField";

const App: FC = () => {
  const [todoTitle, setTodoTitle] = useState("");

  const dispatch = useDispatch();

  const addTask = () => {
    dispatch(addTodo({ title: todoTitle }));
    setTodoTitle("");
  };

  return (
    <div>
      <InputField
        todoTitle={todoTitle}
        handleInput={setTodoTitle}
        handleSubmit={addTask}
      />
      <TodoList />
    </div>
  );
};

export default App;
