import React from 'react';
import './about.css'; // You can style your component using CSS or other styling methods

const Aboutus = () => {
  return (
    <div className="about-section">
      <div className="about-left">
        <h1>Ajith Chakkadath</h1>
      </div>
      <div className="about-right">
        <h2>About Me</h2>
        <p>
          Passionate about technology and its ever-evolving landscape. Transitioning from my role as an automotive embedded software developer to a blockchain enthusiast and developer. 🚀 Currently immersed in mastering the MERN stack to bolster my web development skills, with my sights set on diving headfirst into the world of blockchain technology.
        </p>
        <h3>Skills</h3>
        <ul>
          <li>HTML</li>
          <li>CSS</li>
          <li>JavaScript</li>
          <li>React</li>
        </ul>
      </div>
    </div>
  );
};

export default Aboutus;
