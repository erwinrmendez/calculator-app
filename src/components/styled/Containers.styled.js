import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  max-width: ${(props) => (props.mw ? props.mw : "100%")};
`;

export const AppContainer = styled(Container)`
  min-height: 100vh;
  background: ${(props) => props.theme.primary};
`;
