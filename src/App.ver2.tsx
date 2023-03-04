import React, { FC, useEffect, useState } from "react";
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
  const storageTodos = JSON.parse(localStorage.getItem("todos") as any);
  const storageTotalPrice = JSON.parse(
    localStorage.getItem("totalPrice") as any
  );

  const [todosToDisplay, setTodosToDisplay] = useState(
    (storageTodos as Todo[]) || []
  );
  const [totalPriceToDisplay, setTotalPriceToDisplay] = useState(
    storageTotalPrice || 0
  );

  const todos = useSelector((state: RootState) => state.todos.todos);

  const dispatch = useDispatch();

  useEffect(() => {
    setTodosToDisplay(storageTodos);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  useEffect(() => {
    setTotalPriceToDisplay(storageTotalPrice);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [todos]);

  return (
    <GroceryApp>
      <GroceryAppTitle>Grocery shopping list</GroceryAppTitle>
      <GroceryAppForm />
      <GroceryTodoList>
        {todosToDisplay?.length === 0 && (
          <DefaultTodoListTitle>
            Add some products to the list...
          </DefaultTodoListTitle>
        )}
        {todosToDisplay?.length > 0 && (
          <TodoListTitle>Products list:</TodoListTitle>
        )}
        <ul>
          {todosToDisplay?.map((todo: Todo) => (
            <GroceryTodoListItem key={todo.id} todo={todo}>
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
            </GroceryTodoListItem>
          ))}
        </ul>
        <StyledHr />
        <TodoListTotalTitle>
          Total products cost: ${totalPriceToDisplay}
        </TodoListTotalTitle>
      </GroceryTodoList>
    </GroceryApp>
  );
};

export default AppCC;
