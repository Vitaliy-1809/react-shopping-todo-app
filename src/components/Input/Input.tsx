import React, { FC } from "react";
import { StyledInput } from "./Input.styles";

export interface Props {
  value: string | number;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<Props> = ({ value, onChange, ...rest }) => {
  return <StyledInput value={value} onChange={onChange} {...rest} />;
};

export default Input;
