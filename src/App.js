import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Demo from "./components/demo";
import Demo2 from "./components/demo2";
import ErrorBoundry from "./components/errorb";
import ClickCounter from "./components/clickcounter";

function App() {
  return (
    <div className="App">
      <ClickCounter></ClickCounter>
      <ErrorBoundry>
        <Demo></Demo>
      </ErrorBoundry>
      <ErrorBoundry>
        <Demo2></Demo2>
      </ErrorBoundry>
    </div>
  );
}

export default App;
