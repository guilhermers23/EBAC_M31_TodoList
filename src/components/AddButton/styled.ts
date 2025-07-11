import { Link } from "react-router-dom";
import styled from "styled-components";

export const ButtonIcon = styled(Link)`
  height: 64px;
  width: 64px;
  background-color: var(--color-green);
  color: #fff;
  position: fixed;
  bottom: 48px;
  right: 48px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 40px;
  transition: all ease-in 0.2s;
  &:hover {
    transition: all ease-in-out 0.2s;
    height: 70px;
    width: 70px;
  }
`;
