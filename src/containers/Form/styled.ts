import styled from "styled-components";

export const Form = styled.form`
  max-width: 548px;
  width: 100%;
  font-size: 14px;
  font-weight: bold;
  color: #666666;

  textarea {
    resize: none;
    margin: 16px 0;
    height: 100px;
  }
`;

export const Options = styled.div`
  margin-bottom: 16px;

  p {
    margin-bottom: 6px;
  }

  label {
    margin-right: 8px;
    margin-left: 2px;
  }
`;

export const Option = styled.div`
  display: inline;
  text-transform: capitalize;
`;
