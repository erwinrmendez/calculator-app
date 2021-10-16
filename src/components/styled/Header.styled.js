import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  display: flex;
  color: ${(props) => props.theme.textColor1};

  h1 {
    margin: 0 0 1em;
    flex: 1;
  }

  span.theme {
    letter-spacing: 1px;
    margin-right: 1.5em;
    padding-top: 2.3em;
    font-size: 0.65em;
  }
`;

export const StyledSwitch = styled.div`
  display: flex;

  > label {
    display: flex;
    flex-direction: column;
    align-items: center;

    span.themeLabel {
      font-size: 12px;
      font-weight: bold;
      margin-bottom: 5px;
    }

    span.toggle {
      position: relative;
      width: 20px;
      height: 20px;
      background: ${(props) => props.theme.secondary};
      cursor: pointer;
    }

    span.left {
      border-radius: 20px 0 0 20px;
    }

    span.right {
      border-radius: 0 20px 20px 0;
    }
  }
`;
