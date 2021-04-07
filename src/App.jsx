import React from "react";

const App = () => {
  const onClickButton = () => alert("hello");

  return (
    <React.Fragment>
      <h1 style={{ color: "red" }}>こんにちは!</h1>
      <p>お元気ですか？</p>
      <button onClick={onClickButton}>ボタン</button>
    </React.Fragment>
  );
};

export default App;
