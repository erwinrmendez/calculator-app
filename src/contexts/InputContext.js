import { createContext, useEffect, useState } from "react";

export const InputContext = createContext();

const InputContextProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [inputNumber, setInputNumber] = useState(0); // to capture the numeric value of the input for calculations
  const [accumulatedValue, setAccumulatedValue] = useState(0);
  const [currentOperation, setCurrentOperation] = useState();
  const [isNewInput, setIsNewInput] = useState(true); // to clean screen when new value in operation is going to be added

  useEffect(() => {
    const numericValue = Number(inputValue.replace(/,/g, ""));
    setInputNumber(numericValue);
  }, [inputValue]);

  const handleInput = (value) => {
    const numericFormat = Number(value).toLocaleString();
    setInputValue(numericFormat);
  };

  const addToInput = (value) => {
    // evaluate input when adding a decimal point
    if (value === ".") {
      if (!inputValue || isNewInput) {
        setInputValue("0.");
      } else if (!inputValue.includes(".")) {
        setInputValue(inputValue + ".");
      }

      setIsNewInput(false);
      return;
    }

    // evaluate after decimal point (no more string formatting required)
    if (inputValue.includes(".") && !isNewInput) {
      setInputValue(inputValue + value);
      return;
    }

    // handle adding negative numbers
    if (inputValue === "-") {
      setInputValue(inputValue + value);
      return;
    }

    // evaluate input for the rest of cases
    let stringValue;

    if (isNewInput) {
      stringValue = "";
      setIsNewInput(false);
    } else {
      stringValue = inputNumber.toString();
    }

    if (value === "0" && stringValue === "0") {
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
    // evaluate adding minus sign to denote negative numbers
    // TO BE REVIEWED
    if (operation === "substract") {
      if (inputValue === "" || currentOperation) {
        setInputValue("-");
        setIsNewInput(false);
        return;
      }
    }

    // switch operations if there is a current operation and is not in new input mode
    // then return without modifying the input value
    if (isNewInput && currentOperation) {
      setCurrentOperation(operation);
      return;
    }

    // set new input mode to 'true' to capture next value in operation
    setIsNewInput(true);

    if (!currentOperation) {
      setAccumulatedValue(inputNumber);
    } else {
      calculateValue(currentOperation);
    }

    setCurrentOperation(operation);
  };

  const calculateValue = (operation) => {
    let result = inputNumber;

    switch (operation) {
      case "add":
        result += accumulatedValue;
        break;
      case "substract":
        result = accumulatedValue - inputNumber;
        break;
      case "multiply":
        result *= accumulatedValue;
        break;
      case "divide":
        result = accumulatedValue / inputNumber;
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
    e.preventDefault();

    // if ([37, 38, 39, 40].includes(e.keyCode)) {
    //   // prevent moving cursor using arrow keys
    //   e.preventDefault();
    //   return;
    // }

    if (!isNaN(+e.key)) {
      addToInput(e.key);
      return;
    }

    switch (e.key) {
      case ".":
        addToInput(e.key);
        break;
      case "-":
        handleOperation("substract");
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
