/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import ReactDOM from "react-dom";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true
import ReactFullpage from "@fullpage/react-fullpage";
import Data from "./data.json";
import "./styles.css";

import TitleSection from "./components/TitleSection-1";
import AboutSection from "./components/AboutSection";
import PortfolioSection from "./components/PortfolioSection";
import FooterSection from "./components/FooterSection";
import PortfolioNavBar from "./components/PortfolioNavBar";

export let topics = [];
for (let i = 0; i < Data.length; i++) {
  topics.push(Data[i].title);
}
console.log({ topics });

class FullpageWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.buttonGen = this.buttonGen.bind(this);
  }
  onLeave(origin, destination, direction) {
    console.log("Leaving section " + origin.index);
  }
  afterLoad(origin, destination, direction) {
    console.log("After load: " + destination.index);
  }
  buttonGen() {
    let table = [];
    for (let i = 0; i < topics.length; i++) {
      if (i == topics.length / 2) {
        table.push(<tr></tr>);
      }
      table.push(
        <td>
          <button onClick={() => this.api.moveTo(3, i)}>{topics[i]}</button>
        </td>
      );
    }
    console.log({ table });
    /*table = table.map((topic) => (
      <button onClick={() => fullpageApi.moveTo(1, 0)}> {topic} </button>
    ));*/
    return table;
  }
  render() {
    return (
      <ReactFullpage
        scrollOverflow={true}
        sectionsColor={["#516091", "#81B1D5", "#A0D2E7", "#26408B"]}
        onLeave={this.onLeave.bind(this)}
        afterLoad={this.afterLoad.bind(this)}
        render={({ state, fullpageApi }) => {
          this.api = fullpageApi;
          return (
            <div id="fullpage-wrapper">
              <link
                rel="stylesheet"
                href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
              />
              <div className="section section1">
                <TitleSection />
              </div>
              <div className="section" id="section-2">
                <AboutSection api={this.api} buttonGen={this.buttonGen} />
              </div>
              <div className="section" id="section-3">
                <PortfolioNavBar api={this.api} buttonGen={this.buttonGen} />
                <PortfolioSection id="portfolio-sect" />
              </div>
              {/* <div className="section">
                <FooterSection api={this.api} />
          </div> */}
            </div>
          );
        }}
      />
    );
  }
}

ReactDOM.render(<FullpageWrapper />, document.getElementById("react-root"));

export default FullpageWrapper;
