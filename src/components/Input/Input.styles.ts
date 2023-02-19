import styled from "styled-components";

export const StyledInput = styled.input`
  width: ${(props) => props.width};
  padding: 10px;
  margin-right: 10px;
  border: 1px solid rgba(28, 55, 90, 0.16);
  box-sizing: border-box;
  border-radius: 4px;
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
`;
