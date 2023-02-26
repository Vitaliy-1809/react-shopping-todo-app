import React, { FC } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { Container, AppTitle } from "./App.styles";

const App: FC = () => {
  return (
    <Container>
      <AppTitle>Grocery shopping list</AppTitle>
      <Form />
      <TodoList />
    </Container>
  );
};

export default App;
