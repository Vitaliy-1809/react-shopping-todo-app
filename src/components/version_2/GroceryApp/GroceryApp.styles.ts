import styled from "styled-components";

export const Container = styled.div`
  height: 100vh;
  padding: 20px 0 20px 50px;
  color: #823230;
`;

export const AppTitle = styled.h1`
  font-size: 45px;
  margin-top: 10px;
`;

export const StyledForm = styled.form`
  margin-bottom: 20px;
`;

export const StyledButton = styled.button`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: #ffffff;
  background-color: ${(props) =>
    props.disabled ? "rgba(28, 52, 84, 0.26)" : "#d7a67e"};
  border-radius: 4px;
  border: none;
  outline: none;
  text-decoration: none;
  padding: 10px;
  cursor: ${(props) => (props.disabled ? "not-allowed" : "pointer")};

  &:hover {
    opacity: ${(props) => (props.disabled ? "none" : 0.8)};
  }
`;

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

export const StyledTodoList = styled.div`
  max-height: 80vh;
  overflow: auto;
  width: 40%;
  min-width: 651px;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid rgba(28, 55, 90, 0.16);
  box-sizing: border-box;
  border-radius: 4px;
`;

export const StyledDefaultTitle = styled.p`
  margin-top: 0;
`;

export const StyledListTitle = styled.h3`
  margin-top: 0;
`;

export const StyledHr = styled.hr`
  width: 50%;
  margin: 20px 0;
`;

export const StyledTotalTitle = styled.h3`
  margin-top: 0;
`;

export const StyledTodoItem = styled.div`
  padding: 10px;
  margin-bottom: 10px;
  background-color: #d7a67e;
  color: #ffffff;
  border: 1px solid rgba(28, 55, 90, 0.16);
  box-sizing: border-box;
  border-radius: 4px;
  font-weight: 600;
`;

export const StyledLi = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledIcon = styled.span`
  cursor: pointer;
`;
