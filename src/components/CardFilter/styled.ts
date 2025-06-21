import styled from "styled-components";
//Funçao de Omit
//type PropsCardActive = Omit<PropsCard, "label" | "counter" | "value" | "criterion">;
type PropsCardActive = { active: boolean };

export const Card = styled.div<PropsCardActive>`
  padding: 8px;
  border: 1px solid ${(props) => (props.active ? "#1E90FF" : "#a1a1a1")};
  background-color: ${(props) => (props.active ? "#FFF" : "#fcfcfc")};
  color: ${(props) => (props.active ? "#1e90ff" : "#5e5e5e")};
  border-radius: 7px;
  cursor: pointer;
`;

export const Counter = styled.span`
  font-weight: bold;
  font-size: 24px;
  display: block;
`;

export const Label = styled.span`
  font-size: 14px;
`;
