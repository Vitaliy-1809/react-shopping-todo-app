import React, { FC } from "react";
import { useDispatch } from "react-redux";
import { Trash } from "tabler-icons-react";
import { removeTodo } from "../../../store/todos/todosSlice";
import { Todo } from "../../../store/todos/types";
import { StyledIcon, StyledLi, StyledTodoItem } from "./TodoItem.styles";

interface Props {
  todo: Todo;
}

const TodoItem: FC<Props> = ({ todo }) => {
  const dispatch = useDispatch();

  return (
    <StyledTodoItem>
      <StyledLi>
        <span>
          <span>{todo.title}</span> - <span>${todo.price}</span>
        </span>
        <StyledIcon
          onClick={() =>
            dispatch(removeTodo({ id: todo.id, price: todo.price }))
          }
        >
          <Trash size={20} color="white" />
        </StyledIcon>
      </StyledLi>
    </StyledTodoItem>
  );
};

export default TodoItem;
