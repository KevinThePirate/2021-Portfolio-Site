import React, { Component } from "react";
import Data from "../data.json";
const skills = Data.skills;
export default class PortfolioSection extends Component {
  render() {
    return (
      <div id="port-sect">
        {Data.map((topic) => (
          <div className="slide portfolio-section" id={topic.title}>
            <div className="container">
              <h1> {topic.title} </h1>
              <p> {topic.description} </p>
              {window.innerWidth <= 767 ? (
                ``
              ) : (
                <p>
                  {" "}
                  Skills Learned: &emsp;
                  {topic.skills.map((skill) => (
                    <button className="skill-button">{skill}</button>
                  ))}{" "}
                </p>
              )}
              <div className="card-container">
                {topic.projects.map((proj) => (
                  <div className="topic-card">
                    <img src={proj.imgSrc} />
                    <p>
                      <b>{proj.title}</b>
                    </p>
                    <p>{proj.desc}</p>
                    {!proj.view ? (
                      ``
                    ) : (
                      <p className="project-links">
                        <a
                          href={proj.view}
                          target="_blank"
                          rel="noopener noreferrer">
                          View
                        </a>
                        /
                        <a
                          href={proj.github}
                          target="_blank"
                          rel="noopener noreferrer">
                          GitHub
                        </a>
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  }
}
