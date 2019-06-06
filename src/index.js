import React from "react";
import ReactDOM from "react-dom";
import LCWTM from "./source/LCWTM-source";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <h3> Podcast Directory</h3>
      {LCWTM.map(data => {
        return (
          <div key={data.text}>
            <a href={data.url}> Link : {data.url}</a>
            <p>Broadcast Date : {data.text}</p>
          </div>
        );
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
