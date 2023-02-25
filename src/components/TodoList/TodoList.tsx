import React, { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import { Todo } from "../../store/todos/types";
import TodoItem from "../TodoItem";
import {
  StyledDefaultTitle,
  StyledHr,
  StyledListTitle,
  StyledTodoList,
  StyledTotalTitle,
} from "./TodoList.styles";

const TodoList: FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const totalPrice = useSelector((state: RootState) => state.todos.totalPrice);

  return (
    <StyledTodoList>
      {todos.length === 0 && (
        <StyledDefaultTitle>
          Add some products to the list...
        </StyledDefaultTitle>
      )}
      {todos.length > 0 && <StyledListTitle>Products list:</StyledListTitle>}
      <ul>
        {todos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))}
      </ul>
      <StyledHr />
      <StyledTotalTitle>Total products cost: ${totalPrice}</StyledTotalTitle>
    </StyledTodoList>
  );
};

export default TodoList;
