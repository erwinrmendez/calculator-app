import { useContext } from "react";
import { ThemeToggleContext } from "../contexts/ThemeContext";
import {
  StyledHeader,
  StyledSwitch,
  StyledCircle,
  StyledRadioInput,
} from "./styled";

const Header = () => {
  const { selectedTheme, setSelectedTheme } = useContext(ThemeToggleContext);

  const Switcher = ({ customValue }) => {
    return (
      <StyledRadioInput
        type="radio"
        name="switch"
        id={customValue}
        value={customValue}
        checked={selectedTheme === customValue}
        onChange={(e) => setSelectedTheme(e.target.value)}
      />
    );
  };

  return (
    <StyledHeader>
      <h1>calc</h1>
      <span className="theme">THEME</span>
      <StyledSwitch>
        <label htmlFor="dark">
          <span className="themeLabel">1</span>
          <span className="toggle left">
            <Switcher customValue="dark" />
            <StyledCircle />
          </span>
        </label>
        <label htmlFor="light">
          <span className="themeLabel">2</span>
          <span className="toggle">
            <Switcher customValue="light" />
            <StyledCircle />
          </span>
        </label>
        <label htmlFor="darker">
          <span className="themeLabel">3</span>
          <span className="toggle right">
            <Switcher customValue="darker" />
            <StyledCircle />
          </span>
        </label>
      </StyledSwitch>
    </StyledHeader>
  );
};

export default Header;
