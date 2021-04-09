import React, { useState } from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  console.log("hello");
  console.log("start");
  const [num, setNum] = useState(0);
  const [faceShowFlag, setFaceShowFlag] = useState(false);

  // const onClickButton = () => alert("hello");

  const onClickCountUp = () => {
    if (num % 3 === 0) {
      setFaceShowFlag(!faceShowFlag);
    }
    setNum(num + 1);
  };

  const onClickSwitchShowFlag = () => {
    setFaceShowFlag(!faceShowFlag);
  };

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
      {/* <button onClick={onClickButton}>ボタン</button> */}
      <button onClick={onClickCountUp}>CountUP</button>
      <br />
      <button onClick={onClickSwitchShowFlag}>on/off</button>
      <p>{num}</p>
      {faceShowFlag && <p>exit</p>}
    </React.Fragment>
  );
};

export default App;
