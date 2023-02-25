import React, { FC, useState } from "react";
import { useDispatch } from "react-redux";
import { StyledForm } from "./Form.styles";
import { addTodo } from "../../store/todos/todosSlice";
import Button from "../Button";
import Input from "../Input";

const Form: FC = () => {
  const [todoTitle, setTodoTitle] = useState("");
  const [todoPrice, setTodoPrice] = useState("");

  const dispatch = useDispatch();

  const isBtnDisabled =
    todoTitle.trim().length === 0 || todoPrice.trim().length === 0;

  const addNewTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(addTodo({ title: todoTitle, price: todoPrice }));
    setTodoTitle("");
    setTodoPrice("");
  };

  return (
    <StyledForm onSubmit={addNewTodo}>
      <Input
        width="335px"
        placeholder="Type product name..."
        value={todoTitle}
        onChange={(e) => setTodoTitle(e.target.value)}
      />
      <Input
        type="number"
        placeholder="Type product price..."
        value={todoPrice}
        onChange={(e) => setTodoPrice(e.target.value)}
      />
      <Button type="submit" text="Add product" disabled={isBtnDisabled} />
    </StyledForm>
  );
};

export default Form;
