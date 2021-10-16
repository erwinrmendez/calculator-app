import React, { useContext } from "react";
import { useTheme } from "styled-components";
import { InputContext } from "../contexts/InputContext";
import { StyledKeypad, RegularKey, TwoColumnsKey, EqualsKey } from "./styled";

// Custom input value key
const InputValueKey = ({ value }) => {
  const { addToInput } = useContext(InputContext);

  return (
    <RegularKey title={value} onClick={() => addToInput(value)}>
      {value}
    </RegularKey>
  );
};

// Keypad
const Keypad = ({ setCursor }) => {
  const { handleOperation, handleDelete, handleReset, showResult } =
    useContext(InputContext);
  const theme = useTheme();

  return (
    <StyledKeypad onClick={setCursor}>
      <InputValueKey value="7" />
      <InputValueKey value="8" />
      <InputValueKey value="9" />
      <RegularKey
        smaller
        bg={theme.keyBG1}
        shadowColor={theme.keyShadow1}
        textColor="#FFF"
        onClick={handleDelete}
      >
        DEL
      </RegularKey>
      <InputValueKey value="4" />
      <InputValueKey value="5" />
      <InputValueKey value="6" />
      <RegularKey title="add" onClick={() => handleOperation("add")}>
        +
      </RegularKey>
      <InputValueKey value="1" />
      <InputValueKey value="2" />
      <InputValueKey value="3" />
      <RegularKey
        title="substract"
        onClick={() => handleOperation("substract")}
      >
        -
      </RegularKey>
      <InputValueKey value="." />
      <InputValueKey value="0" />
      <RegularKey title="divide" onClick={() => handleOperation("divide")}>
        /
      </RegularKey>
      <RegularKey title="multiply" onClick={() => handleOperation("multiply")}>
        x
      </RegularKey>
      <TwoColumnsKey
        title="reset"
        smaller
        bg={theme.keyBG1}
        shadowColor={theme.keyShadow1}
        textColor="#FFF"
        onClick={handleReset}
      >
        RESET
      </TwoColumnsKey>
      <EqualsKey
        title="result"
        smaller
        bg={theme.keyBG2}
        shadowColor={theme.keyShadow2}
        textColor="#FFF"
        onClick={showResult}
      >
        =
      </EqualsKey>
    </StyledKeypad>
  );
};

export default Keypad;
