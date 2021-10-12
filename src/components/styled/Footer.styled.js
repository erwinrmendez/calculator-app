import styled from "styled-components";

export const StyledFooter = styled.footer`
  font-size: 11px;
  color: ${(props) => props.theme.textColor1};
  padding: 1em;
  margin-top: 2em;

  p {
    text-align: center;
    line-height: 1.5em;
    margin: 0;
  }

  a {
    color: ${(props) => props.theme.textColor1};
  }
`;
