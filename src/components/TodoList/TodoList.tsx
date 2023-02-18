import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Todo } from "../../store/todos/todosSlice";
import TodoItem from "../TodoItem";

const TodoList: FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);

  return (
    <ul>
      {todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
