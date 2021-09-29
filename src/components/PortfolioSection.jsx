import React, { Component } from "react";
import { topics } from "..";

export default class PortfolioSection extends Component {
  render() {
    return (
      <div>
        {topics.map((topic) => (
          <div className="slide">
            <h3>{topic}</h3>
          </div>
        ))}
      </div>
    );
  }
}
