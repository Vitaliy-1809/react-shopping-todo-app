import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, Todo } from "../../store/todos/todosSlice";

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <li>
      <span>{todo.title}</span>
      <span onClick={() => dispatch(removeTodo({ id: todo.id }))}>&times;</span>
    </li>
  );
};

export default TodoItem;
