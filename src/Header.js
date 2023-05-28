import { useState } from "react";
import { Realtimetyping } from "./components/Realtimetyping";
import { Display } from "./components/Display";
import { Form } from "./components/Form";

const Header = () => {
  const [counter, setCounter] = useState(0);
  const [value, setValue] = useState("");
  const [display, setDisplay] = useState("");

  const handleDecrement = () => {
    setCounter(counter - 1);
  };
  const handleDoubleincre = () => {
    setCounter(counter + 2);
  };
  const handleReset = () => {
    setCounter(0);
  };

  //handles the on change of the input field
  const handleChange = (event) => {
    //console.log(event);
    setValue(event.target.value);
  };

  const onSubmitValue = (event) => {
    //removes the default refresh behaviour
    event.preventDefault();
    setDisplay(value);
  };

  return (
    <>
      increasing the value of the counter
      <h1>counter application</h1>
      <h3>Initial value:{counter}</h3>
      <button onClick={() => setCounter(counter + 1)}>increment</button>
      <button onClick={handleDecrement}>decrement</button>
      <button onClick={handleDoubleincre}>+2</button>
      <button onClick={handleReset}>Reset</button>
      <hr />
      <h1>CONTROLLED INPUT</h1>
      {/* */}
      {/* form */}
      <h1>props and components</h1>
      <Form
        value={value}
        onSubmitValue={onSubmitValue}
        handleChange={handleChange}
      />
      <Realtimetyping value={value} />
      <Display display={display} />
      <hr></hr>
    </>
  );
};
export default Header;
