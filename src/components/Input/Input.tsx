import React, { FC } from "react";
import { StyledInput } from "./Input.styles";

export interface Props {
  value: string | number;
  type?: string;
  width?: string;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

const Input: FC<Props> = ({
  value,
  type,
  width,
  placeholder,
  onChange,
  ...rest
}) => {
  return (
    <StyledInput
      value={value}
      type={type}
      width={width}
      placeholder={placeholder}
      onChange={onChange}
      {...rest}
    />
  );
};

export default Input;
