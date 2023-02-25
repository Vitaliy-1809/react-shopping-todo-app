import React, { FC } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { StyledApp, StyledAppTitle } from "./App.styles";

const App: FC = () => {
  return (
    <StyledApp>
      <StyledAppTitle>Grocery shopping list</StyledAppTitle>
      <Form />
      <TodoList />
    </StyledApp>
  );
};

export default App;
