import ThemeContextProvider from "./contexts/ThemeContext";
import { GlobalStyles } from "./theme";
import { AppContainer } from "./components/styled";
import Layout from "./components/Layout";
import InputContextProvider from "./contexts/InputContext";

const App = () => {
  return (
    <ThemeContextProvider>
      <GlobalStyles />
      <InputContextProvider>
        <AppContainer>
          <Layout />
        </AppContainer>
      </InputContextProvider>
    </ThemeContextProvider>
  );
};

export default App;
