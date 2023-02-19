import React, { FC } from "react";
import { StyledForm } from "./Form.styles";
import { StyledInput } from "../Input/Input.styles";
import { StyledButton } from "../Button/Button.styles";

interface Props {
  todoTitle: string;
  todoPrice: string;
  setTodoTitle: React.Dispatch<React.SetStateAction<string>>;
  setTodoPrice: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const Form: FC<Props> = ({
  todoTitle,
  todoPrice,
  setTodoTitle,
  setTodoPrice,
  handleSubmit,
}) => {
  const isBtnDisabled =
    todoTitle.trim().length === 0 || todoPrice.trim().length === 0;

  return (
    <StyledForm onSubmit={(e) => handleSubmit(e)}>
      <StyledInput
        width={"335px"}
        type="text"
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
      <StyledButton type={"submit"} disabled={isBtnDisabled}>
        Add product
      </StyledButton>
    </StyledForm>
  );
};

export default Form;
