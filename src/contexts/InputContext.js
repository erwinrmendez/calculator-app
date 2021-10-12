import { createContext, useState } from "react";
import { removeCommas } from "../helpers/functions";

export const InputContext = createContext();

const InputContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [accumulatedValue, setAccumulatedValue] = useState(0);
  const [currentOperation, setCurrentOperation] = useState();
  const [isNewInput, setIsNewInput] = useState(true);

  const handleInput = (value) => {
    const [wholePart, decimalPart] = value.split(".");
    const numericFormat = Number(wholePart).toLocaleString();

    decimalPart || decimalPart === ""
      ? setInputValue(numericFormat + "." + decimalPart)
      : setInputValue(numericFormat);
  };

  const addToInput = (value) => {
    let stringValue;

    if (isNewInput) {
      stringValue = "";
      setIsNewInput(false);
    } else {
      stringValue = removeCommas(inputValue);
    }

    if (value === "." && stringValue.includes(".")) {
      return;
    }

    if (value === "." && !stringValue) {
      handleInput("0.");
      return;
    }

    if (value === "0" && stringValue === "0") {
      return;
    }

    if (value === "-") {
      stringValue === "" ? handleInput("-") : handleOperation("substract");
      return;
    }

    handleInput(stringValue ? stringValue.concat(value) : value);
  };

  // handle key actions
  const handleDelete = () => {
    handleInput(inputValue.slice(0, -1));
  };

  const handleReset = () => {
    setInputValue("");
    setCurrentOperation(null);
    setAccumulatedValue(0);
  };

  const handleOperation = (operation) => {
    setIsNewInput(true);

    if (!currentOperation) {
      setAccumulatedValue(Number(removeCommas(inputValue)));
    } else {
      calculateValue(currentOperation);
    }

    setCurrentOperation(operation);
  };

  const calculateValue = (operation) => {
    const numericValue = Number(removeCommas(inputValue));
    let result = numericValue;

    switch (operation) {
      case "add":
        result = accumulatedValue + numericValue;
        break;
      case "substract":
        result = accumulatedValue - numericValue;
        break;
      case "multiply":
        result = accumulatedValue * numericValue;
        break;
      case "divide":
        result = accumulatedValue / numericValue;
        break;
      default:
        break;
    }

    setAccumulatedValue(result);
    setInputValue(result.toLocaleString());
  };

  const showResult = () => {
    calculateValue(currentOperation);
    setCurrentOperation(null);
    setIsNewInput(true);
  };

  const handleKeyDown = (e) => {
    if ([37, 38, 39, 40].includes(e.keyCode)) {
      // prevent moving cursor using arrow keys
      e.preventDefault();
      return;
    }

    switch (e.key) {
      case ".":
      case "-":
        addToInput(e.key);
        break;
      case "+":
        handleOperation("add");
        break;
      case "*":
        handleOperation("multiply");
        break;
      case "/":
        handleOperation("divide");
        break;
      case "Enter":
        showResult();
        break;
      default:
        break;
    }
  };

  return (
    <InputContext.Provider
      value={{
        inputValue,
        handleInput,
        addToInput,
        handleOperation,
        handleDelete,
        handleReset,
        showResult,
        handleKeyDown,
      }}
    >
      {children}
    </InputContext.Provider>
  );
};

export default InputContextProvider;
