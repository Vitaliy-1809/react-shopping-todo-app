import styled from 'styled-components';

export const StyledButton = styled.button`
  font-family: "Inter", sans-serif;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  text-align: center;
  color: '#fff';
  background-color: ${(props) => (props.disabled ? 'rgba(28, 52, 84, 0.26)' : '#1E4DFC')};
  border-radius: 4px;
  border: none;
  outline: none;
  text-decoration: none;
  padding: 14.5px 0;
  cursor: pointer;

  &:hover {
    opacity: ${(props) => (props.disabled ? 'none' : 0.8)};
  }
`;