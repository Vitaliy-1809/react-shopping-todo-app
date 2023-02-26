import React, { FC } from "react";
import Form from "./components/version_1/Form";
import TodoList from "./components/version_1/TodoList";
import { Container, AppTitle } from "./App.ver1.styles";

const AppClassic: FC = () => {
  return (
    <Container>
      <AppTitle>Grocery shopping list</AppTitle>
      <Form />
      <TodoList />
    </Container>
  );
};

export default AppClassic;
