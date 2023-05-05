import styled from "styled-components"

const Button = styled.button`
  background-color: ${props => props.theme.primary};
  padding: 15px 20px;
  border-radius: 15px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  color ${props => props.theme.white};
  font-size: 16px;
  transition: all 0.3s;

  :hover {
      background-color: ${props => props.theme.primaryHover}
  };
`


export default Button