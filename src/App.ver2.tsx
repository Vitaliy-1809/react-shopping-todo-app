import React, { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash } from "tabler-icons-react";
import { RootState } from "./store";
import GroceryApp, {
  DefaultTodoListTitle,
  GroceryAppForm,
  GroceryAppTitle,
  GroceryTodoList,
  GroceryTodoListItem,
  TodoListTitle,
  TodoListTotalTitle,
} from "./components/version_2/GroceryApp/GroceryApp";
import {
  StyledHr,
  StyledIcon,
} from "./components/version_2/GroceryApp/GroceryApp.styles";
import { Todo } from "./store/todos/types";
import { removeTodo } from "./store/todos/todosSlice";

const AppCC: FC = () => {
  const todos = useSelector((state: RootState) => state.todos.todos);
  const totalPrice = useSelector((state: RootState) => state.todos.totalPrice);

  const dispatch = useDispatch();

  return (
    <GroceryApp>
      <GroceryAppTitle>Grocery shopping list</GroceryAppTitle>
      <GroceryAppForm />
      <GroceryTodoList>
        {todos.length === 0 && (
          <DefaultTodoListTitle>
            Add some products to the list...
          </DefaultTodoListTitle>
        )}
        {todos.length > 0 && <TodoListTitle>Products list:</TodoListTitle>}
        <ul>
          {todos.map((todo: Todo) => (
            <GroceryTodoListItem key={todo.id} todo={todo}>
              <span>
                <span>{todo.title}</span> - <span>${todo.price}</span>
              </span>
              <StyledIcon onClick={() => dispatch(removeTodo({ id: todo.id }))}>
                <Trash size={20} color="white" />
              </StyledIcon>
            </GroceryTodoListItem>
          ))}
        </ul>
        <StyledHr />
        <TodoListTotalTitle>
          Total products cost: ${totalPrice}
        </TodoListTotalTitle>
      </GroceryTodoList>
    </GroceryApp>
  );
};

export default AppCC;
