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
      <h6>THEME</h6>
      <StyledSwitch>
        <label htmlFor="dark">
          <span>1</span>
          <div className="left">
            <Switcher customValue="dark" />
            <StyledCircle />
          </div>
        </label>
        <label htmlFor="light">
          <span>2</span>
          <div>
            <Switcher customValue="light" />
            <StyledCircle />
          </div>
        </label>
        <label htmlFor="darker">
          <span>3</span>
          <div className="right">
            <Switcher customValue="darker" />
            <StyledCircle />
          </div>
        </label>
      </StyledSwitch>
    </StyledHeader>
  );
};

export default Header;
