import styled from "styled-components";

export const StyledKeypad = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr;
  gap: 1em;
  padding: 1em;
  margin-top: 1em;
  border-radius: 10px;
  background: ${(props) => props.theme.secondary};
  width: 100%;
`;

export const RegularKey = styled.button`
  padding: 10px;
  font-weight: bold;
  font-size: ${(props) => (props.smaller ? "14px" : "26px")};
  background: ${(props) => props.bg || props.theme.keyDefaultBG};
  box-shadow: 0 5px 0
    ${(props) => props.shadowColor || props.theme.keyDefaultShadow};
  color: ${(props) => props.color || props.theme.textColorDefault};
  border: none;
  border-radius: 5px;
  height: 50px;
  line-height: 36px;
  cursor: pointer;

  &:active {
    box-shadow: inset 0px 0px 5px ${(props) => props.theme.primary};
  }
`;

export const TwoColumnsKey = styled(RegularKey)`
  grid-column: span 2;
`;

export const EqualsKey = styled(TwoColumnsKey)`
  color: ${(props) => props.theme.textColor2 || props.color};
`;
