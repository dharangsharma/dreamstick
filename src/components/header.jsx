import React, { Component } from "react";

export class Header extends Component {
  render() {
    return (
      <div className="hero-container">
        <video src="/videos/video-17.mp4" autoPlay loop muted />
        <h1>Ideas Start Here</h1>
        
        <a href="#about" className="btn btn-custom btn-lg page-scroll">
          Learn More
        </a>{" "}
      </div>
      
    );
  }
}

export default Header;
