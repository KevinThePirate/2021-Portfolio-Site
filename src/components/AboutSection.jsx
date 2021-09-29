import React, { Component } from "react";
import "fullpage.js/vendors/scrolloverflow"; // Optional. When using scrollOverflow:true

export default class AboutSection extends Component {
  render() {
    return (
      <>
        <div id="two-one">
          <div id="basic-info-area">
            <img
              src="https://media-exp1.licdn.com/dms/image/C4D03AQGHDI7MbsUQfw/profile-displayphoto-shrink_800_800/0/1631288206108?e=1638403200&v=beta&t=BFJ_niMl4ofx36zSnWvPbXPJfZVvVwZd8N9HXl26Ook"
              className="logo"
            />
            <h1>Kevin M. Smith</h1>
            <div id="logo-area">
              <a
                href="docs/Kevin_Smith_CV.pdf"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa fa-file-pdf-o"></i>
              </a>
              <a
                href="https://www.linkedin.com/in/kevinsmith1999/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa fa-linkedin-square"></i>
              </a>
              -
              <a
                href="mailto:smithkevin1100@gmail.com"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa fa-envelope"></i>
              </a>
              -
              <a
                href="https://github.com/KevinThePirate/"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa fa-github"></i>
              </a>
              <a
                href="https://www.youtube.com/playlist?list=PLLoswPRUC2mkPEDcwqFgSSgDWa8mrHFyw"
                target="_blank"
                rel="noopener noreferrer">
                <i className="fa fa-youtube-square"></i>
              </a>
            </div>
            <p>
              A highly enthusiastic Creative Digital Media student in Cork
              Institute of Technology with a dedication and drive to work.
              Proven ability to plan, organise and research along with the
              skills to put these into action from my work at MyFutprint
              Entertainment and from my independent graphic novels.
            </p>
          </div>
        </div>
        <div id="two-two">
          <div id="work-area">
            <div id="container">
              <h2>Abridged Work Experience</h2>
              <div>
                <h5>MyFutprint Entertainment, LLC:</h5>
                <p>Aug '19 - Present</p>
                <div>
                  Brought on as an intern in August 2019 and worked my way onto
                  the staff as an editor.
                </div>
              </div>
              <div>
                <h5>Freelance Web Design and Video Editing:</h5>
                <div>
                  <div>
                    <p>May '17 - Present</p>
                  </div>
                  <div>
                    Have worked as a freelance web desiger for TK Fitness and AB
                    Pilates as well as and editor for YouTube channel
                    Craftsdwarf
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id="button-area">
            <h2>Select Portfolio</h2>
            <table>
              <tbody>{this.props.buttonGen()}</tbody>
            </table>
          </div>
        </div>
      </>
    );
  }
}
