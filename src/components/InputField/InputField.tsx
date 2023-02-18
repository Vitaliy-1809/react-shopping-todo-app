import React, { FC } from "react";

interface Props {
  todoTitle: string;
  handleInput: React.Dispatch<React.SetStateAction<string>>;
  handleSubmit: () => void;
}

const InputField: FC<Props> = ({ todoTitle, handleInput, handleSubmit }) => {
  return (
    <label>
      <input
        type="text"
        value={todoTitle}
        onChange={(e) => handleInput(e.target.value)}
      />
      <button onClick={handleSubmit}>Add Todo</button>
    </label>
  );
};

export default InputField;
