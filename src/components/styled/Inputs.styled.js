import styled from "styled-components";

export const StyledInput = styled.input`
  padding: 0.75em;
  background: ${(props) => props.theme.screen};
  color: ${(props) => props.theme.textColor1};
  outline: none;
  border: none;
  border-radius: 10px;
  text-align: right;
  font-size: 28px;
  font-weight: bold;
  width: 100%;
  caret-color: transparent;

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &::placeholder {
    color: ${(props) => props.theme.textColor1};
  }
`;

export const StyledCircle = styled.span`
  position: absolute;
  top: 3.5px;
  left: 3.5px;
  height: 13px;
  width: 13px;
  border-radius: 50%;
`;

export const StyledRadioInput = styled.input`
  position: absolute;
  opacity: 0;
  transition: all 0.3s ease;

  &:checked ~ ${StyledCircle} {
    background: ${(props) => props.theme.keyBG2};
  }
`;
