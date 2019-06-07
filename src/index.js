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
          <div className="col-md-5">
            <h4> Learn to code with me</h4>
            <hr />
            <a href="https://www.podbean.com/podcast-detail/jh5a4-3fe34/Learn-to-Code-With-Me-Podcast">
              <img
                src="https://pbcdn1.podbean.com/imglogo/dir-logo/261684/261684_300x300.png"
                alt="Learn to code"
                id="LCWTM-img"
              />
            </a>
            <hr />
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Podcast Link </th>
                  <th scope="col">Broadcast_date</th>
                </tr>
              </thead>
              {LCWTM.map(data => {
                return (
                  <tbody key={data.url}>
                    <tr>
                      <td>
                        <a href={data.url}> {data.text.trim()}</a>
                      </td>
                      <td>{data.Broadcast_date}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
          <div className="col-md-2" />
          <div className="col-md-5">
            <h4>JS - Jabber </h4>
            <hr />
            <a href="https://www.podbean.com/podcast-detail/d4un8-57595/JavaScript-Jabber-Podcast">
              <img
                alt="JS-Jabber"
                src="https://pbcdn1.podbean.com/imglogo/dir-logo/357781/357781_300x300.jpg"
                id="JSJ-img"
              />
            </a>
            <hr />
            <table class="table table-bordered">
              <thead>
                <tr>
                  <th scope="col">Podcast Link </th>
                  <th scope="col">Broadcast_date</th>
                </tr>
              </thead>
              {JSjabber.map(data => {
                return (
                  <tbody key={data.url}>
                    <tr>
                      <td>
                        <a href={data.url}> {data.text.trim()}</a>
                      </td>
                      <td>{data.Broadcast_date}</td>
                    </tr>
                  </tbody>
                );
              })}
            </table>
          </div>
        </div>
      </div>
      <footer
        class="footer mt-auto py-3"
        style={{ backgroundColor: "#f5f5f5" }}
      >
        <div class="container text-center">
          <span class="text-center">Developed by Karthikeyan &hearts; JS </span>
        </div>
      </footer>
    </>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
