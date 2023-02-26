import React, { useState, FC, ReactNode } from "react";
import { useDispatch } from "react-redux";
import { addTodo } from "../../../store/todos/todosSlice";
import { Todo } from "../../../store/todos/types";

import {
  Container,
  AppTitle,
  StyledForm,
  StyledButton,
  StyledInput,
  StyledTodoList,
  StyledDefaultTitle,
  StyledListTitle,
  StyledTotalTitle,
  StyledTodoItem,
  StyledLi,
} from "./GroceryApp.styles";

interface GroceryAppProps {
  children: ReactNode;
}

const GroceryApp: FC<GroceryAppProps> = ({ children, ...restProps }) => {
  return <Container {...restProps}>{children}</Container>;
};

interface AppTitleProps {
  children: ReactNode;
}

const GroceryAppTitle: FC<AppTitleProps> = ({ children, ...restProps }) => {
  return <AppTitle {...restProps}>{children}</AppTitle>;
};

const GroceryAppForm: FC = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoPrice, setTodoPrice] = useState("");

  const dispatch = useDispatch();

  const addNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ title: todoTitle, price: todoPrice }));
    setTodoTitle("");
    setTodoPrice("");
  };

  const isBtnDisabled =
    todoTitle.trim().length === 0 || todoPrice.trim().length === 0;

  return (
    <StyledForm onSubmit={addNewTodo}>
      <StyledInput
        width="335px"
        placeholder="Type product name..."
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <StyledInput
        type="number"
        placeholder="Type product price..."
        value={todoPrice}
        onChange={(e) => setTodoPrice(e.target.value)}
      />
      <StyledButton type="submit" disabled={isBtnDisabled}>
        Add product
      </StyledButton>
    </StyledForm>
  );
};

interface GroceryTodoListProps {
  children: ReactNode;
}

const GroceryTodoList: FC<GroceryTodoListProps> = ({
  children,
  ...restProps
}) => {
  return <StyledTodoList {...restProps}>{children}</StyledTodoList>;
};

interface GroceryTodoListItemProps {
  children: ReactNode;
  todo: Todo;
}

const GroceryTodoListItem: FC<GroceryTodoListItemProps> = ({
  children,
  ...restProps
}) => {
  return (
    <StyledTodoItem {...restProps}>
      <StyledLi>{children}</StyledLi>
    </StyledTodoItem>
  );
};

interface DefaultTodoListTitleProps {
  children: ReactNode;
}

const DefaultTodoListTitle: FC<DefaultTodoListTitleProps> = ({
  children,
  ...restProps
}) => {
  return <StyledDefaultTitle {...restProps}>{children}</StyledDefaultTitle>;
};

interface TodoListTitleProps {
  children: ReactNode;
}

const TodoListTitle: FC<TodoListTitleProps> = ({ children, ...restProps }) => {
  return <StyledListTitle {...restProps}>{children}</StyledListTitle>;
};

interface TodoListTotalTitleProps {
  children: ReactNode;
}

const TodoListTotalTitle: FC<TodoListTotalTitleProps> = ({
  children,
  ...restProps
}) => {
  return <StyledTotalTitle {...restProps}>{children}</StyledTotalTitle>;
};

export default GroceryApp;

export {
  GroceryAppTitle,
  GroceryAppForm,
  GroceryTodoList,
  GroceryTodoListItem,
  DefaultTodoListTitle,
  TodoListTitle,
  TodoListTotalTitle,
};
