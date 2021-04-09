import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert("hello");

  const onClickCountUp = () => {
    setNum(num + 1);
  };
  const [num, setNum] = useState(0);
  // console.log(num);
  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <ColorfulMessage color="blue" message="元気です">
        hello
      </ColorfulMessage>
      <ColorfulMessage color="pink" message="元気です">
        world
      </ColorfulMessage>
      <button onClick={onClickButton}>ボタン</button>
      <button onClick={onClickCountUp}>CountUP</button>
      <p>{num}</p>
    </React.Fragment>
  );
};

export default App;
