/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";

import "./styles.css";

class FullpageWrapper extends React.Component {
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["#516091", "#81B1D5", "#A0D2E7", "#26408B"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          return (
            <div id="fullpage-wrapper">
              <div className="section section1">
                <div id="title-area">
                  <h1>Kevin M.Smith</h1>
                  <h4>Web Dev, Design and Video & Comic Production</h4>
                </div>
              </div>
              <div className="section" id="section-2">
                <div id="two-one">fgh</div>
                <div id="two-two">abc</div>
              </div>
              <div className="section">
                <div className="slide">
                  <h3>Programming</h3>
                </div>
                <div className="slide">
                  <h3>Comics</h3>
                </div>
                <div className="slide">
                  <h3>Graphic Design</h3>
                </div>
                <div className="slide">
                  <h3>Video Editing</h3>
                </div>
                <div className="slide">
                  <h3>Teaching</h3>
                </div>
                <div className="slide">
                  <h3>Animation</h3>
                </div>
              </div>
              <div className="section">
                <h3>Section 4</h3>
                <button onClick={() => fullpageApi.moveTo(1, 0)}>
                  Move top
                </button>
              </div>
            </div>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));

export default FullpageWrapper;
