import React from "react";
import ReactDOM from "react-dom";
import LCWTM from "./source/LCWTM-source";
import JSjabber from "./source/JS-jabber";
import Nav from "./nav";
import "./styles.css";

function App() {
  return (
    <>
      <Nav />
      <div className="container" id="section-player">
        <div className="row">
          <div className="col-md-6">
            <h4> Learn to code with me</h4>
            <hr />
            <img
              src="https://pbcdn1.podbean.com/imglogo/dir-logo/261684/261684_300x300.png"
              alt="Learn to code"
            />

            <hr />
            {LCWTM.map(data => {
              return (
                <div key={data.url}>
                  <a href={data.url}> {data.text}</a>
                  <p>Broadcast Date : {data.Broadcast_date}</p>
                </div>
              );
            })}
          </div>
          <div className="col-md-6">
            <h4>JS - Jabber </h4>
            <hr />
            <img
              alt="JS-Jabber"
              src="https://pbcdn1.podbean.com/imglogo/dir-logo/357781/357781_300x300.jpg"
            />
            <hr />
            {JSjabber.map(data => {
              return (
                <div key={data.url}>
                  <a href={data.url}> {data.text}</a>
                  <p>Broadcast Date : {data.Broadcast_date}</p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
