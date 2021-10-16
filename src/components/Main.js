import { useContext, useRef } from "react";
import { InputContext } from "../contexts/InputContext";
import { StyledInput } from "./styled";
import Keypad from "./Keypad";

const Main = () => {
  const { inputValue, handleInput, handleKeyDown } = useContext(InputContext);
  const inputRef = useRef();

  // add focus to input and move to end of line
  const setCursor = () => {
    inputRef.current.focus();
    const len = inputValue.length;
    inputRef.current.setSelectionRange(len, len);
  };

  return (
    <>
      <StyledInput
        ref={inputRef}
        type="text"
        onKeyDown={(e) => handleKeyDown(e)}
        value={inputValue}
        onChange={(e) => handleInput(e.target.value)}
        onClick={() => setCursor()}
        autoFocus
        aria-label="Input Value"
      />
      <Keypad setCursor={setCursor} />
    </>
  );
};

export default Main;
