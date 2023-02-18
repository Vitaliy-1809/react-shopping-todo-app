import React, { FC, MouseEventHandler } from "react";
import { StyledButton } from "./Button.styles";

export interface Props {
  text: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
}

const Button: FC<Props> = ({ text, onClick, ...rest }) => {
  return (
    <StyledButton onClick={onClick} {...rest}>
      {text}
    </StyledButton>
  );
};

export default Button;
