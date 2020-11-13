import React, { Component } from 'react';
import avatar from './png/pokemon.png'


class Landing extends Component {
  render() {
    return(
      <div style={{width: '100%', margin: 'auto'}}>
          <img
              src={avatar}
              alt="avatar"
              class="center"
              />
            <div className="banner-text">
              <h1>Full Stack Developer</h1>
            <hr/>
            
          <p> C / C++ / Bash / JavaScript / React.js</p>

        <div className="social-links" >

          <a href="http://www.linkedin.com/in/quentin-de-nascimento" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-linkedin-square" aria-hidden="true" />
          </a>
          <a href="https://github.com/Foxall" rel="noopener noreferrer" target="_blank">
            <i className="fa fa-github-square" aria-hidden="true" />
          </a>

        </div>
            </div>
      </div>
    )
  }
}

export default Landing;
