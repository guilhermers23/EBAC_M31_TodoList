import styled from "styled-components";
import * as enums from "../../utilities/enums/TasksEnums";

type PropsTagColor = {
  statuscolor?: enums.Status;
  prioritycolor?: enums.Priority;
  parameter: "Priority" | "Status";
};

const checkBackgroundColor = (props: PropsTagColor): string => {
  if (props.parameter === "Status") {
    if (props.statuscolor === enums.Status.PENDENTE)
      return "var(--color-yellow)";
    if (props.statuscolor === enums.Status.CONCLUIDA)
      return "var(--color-green)";
  } else {
    if (props.prioritycolor === enums.Priority.URGENTE)
      return "var(--color-red)";
    if (props.prioritycolor === enums.Priority.IMPORTANTE)
      return "var(--color-warning)";
  }

  return "#CCC";
};

export const Card = styled.div`
  background-color: #fcfcfc;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-bottom: 32px;
  border-radius: 10px;

  label {
    display: flex;
    align-items: center;
    input {
      width: 1.15em;
      height: 1.15em;
      border-radius: 0.15em;
      margin-bottom: 16px;
      margin-right: 8px;
    }
  }
`;

export const TitleTask = styled.h3`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
`;

export const Tag = styled.span<PropsTagColor>`
  padding: 4px 8px;
  color: #fff;
  font-weight: bold;
  font-size: 10px;
  background-color: ${(props) => checkBackgroundColor(props)};
  border-radius: 8px;
  margin-right: 16px;
  display: inline-block;
`;

export const Description = styled.textarea`
  color: #8b8b8b;
  font-size: 14px;
  line-height: 24px;
  font-family: var(--font-mono);
  display: block;
  width: 100%;
  margin: 16px 0;
  resize: none;
  border: none;
  background-color: transparent;
`;

export const ActionsBar = styled.div`
  border-top: 2px solid rgba(0, 0, 0, 0.1);
  padding-top: 16px;
`;
