import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";

import Projects from "./projects";

class Landing extends Component {
  render() {
    return (
      <div
        style={{
          width: "100%",
          margin: "auto",
        }}
      >
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              src="https://i.ya-webdesign.com/images/png-avatar-4.png"
              alt="avatar"
              className="avatar-img"
            />
            <div className="banner-txt">
              <h1>Full Stack Web Developer</h1>

              <hr />

              <p>
                HTML/CSS | Bootstrap | React | React Native | NodeJS | MongoDB |
                Expres
              </p>
              <div className="social-links">
                {/* LinkedIn */}
                <a
                  href="http://gooogle.com"
                  rel="noopener referrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>

                {/* github */}
                <a
                  href="http://gooogle.com"
                  rel="noopener referrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>

                {/* Freecodecamp */}
                <a
                  href="http://gooogle.com"
                  rel="noopener referrer"
                  target="_blank"
                >
                  <i className="fa fa-free-code-camp" aria-hidden="true" />
                </a>

                {/* Youtube */}
                <a
                  href="http://gooogle.com"
                  rel="noopener referrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
          <Cell col={12}>
            <Projects />
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default Landing;
