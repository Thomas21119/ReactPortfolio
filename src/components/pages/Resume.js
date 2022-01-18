import React from 'react';
import './Resume.css'

function Resume() {
  return (
    <div className="resume">
      <p>
        I have just finished a full stack web development course with Monash University,
        which gave me experience with React.js, Node.js, Express.js, API's as well as 
        Mongo (and mongoose) and SQL (and Sequelize). Using github for all of my work I've
        created Projects from scratch both on my own and in a team, when working in a team
        I used agile practices to make sure the project were delivered on time and to a high
        standard.
      </p>
      <h2> Proficiencies </h2>
      <ul>
        <h4> Front End Proficiencies </h4>
        <li>React.js</li>
        <li>CSS</li>
        <li>JQuery</li>
        <li>Responsive Design</li>
        <li>Bootstrap</li>
      </ul>
      <ul>
        <h4> Back End Proficiencies </h4>
        <li>SQL/Sequelize</li>
        <li>Mongo/Mongoose</li>
        <li>Express,js</li>
        <li>API's</li>
        <li>Node.js</li>
      </ul>

      <a href="https://thomas21119.github.io/Toms-Portfolio/Assets/pdf/Thomas%20Wittwer%20CV%20v3.pdf" rel="noopener noreferrer" target="_blank"> <button id="resumeButton"> Link to downloadable Resume </button> </a>

    </div>
  );
}

export default Resume;
