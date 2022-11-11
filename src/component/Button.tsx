import { useState } from "react";

function Button(props: any) {
  const [count, setCount] = useState(0);
  function handleOnClick() {
    setCount(count + 1);
  }

  return (
    <button className={props.btnClass} onClick={handleOnClick}>
      {props.btnText} button is clicked for {count} times.
    </button>
  );
}
export default Button;
