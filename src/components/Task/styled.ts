import styled from "styled-components";

type PropsTagColor = {
  statusColor?: string;
  priorityColor?: string;
};

const checkBackgroundColor = (props: PropsTagColor): string => {
  if ("statusColor" in props) {
    if (props.statusColor === "Pendente") return "var(--color-yellow)";
    if (props.statusColor === "Concluído") return "var(--color-green)";
  } else if ("priorityColor" in props) {
    if (props.priorityColor === "Urgente") return "var(--color-red)";
    if (props.priorityColor === "Importante") return "var(--color-warning)";
  }
  return "#CCC";
};

export const Card = styled.div`
  background-color: #fcfcfc;
  padding: 16px;
  box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
  margin-bottom: 32px;
  border-radius: 10px;
`;

export const Title = styled.h3`
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

export const Button = styled.button`
  font-weight: bold;
  font-size: 12px;
  color: #fff;
  padding: 8px 12px;
  border: none;
  background-color: #2f3640;
  border-radius: 8px;
  margin-right: 8px;
  cursor: pointer;
`;

export const SaveButton = styled(Button)`
  background-color: var(--color-green);
`;

export const RedButton = styled(Button)`
  background-color: var(--color-red);
`;
