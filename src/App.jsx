import React from "react";
import ColorfulMessage from "./components/ColorfulMessage";

const App = () => {
  const onClickButton = () => alert("hello");

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
    </React.Fragment>
  );
};

export default App;
