import React from 'react';
import './Portfolio.css';

function Portfolio() {
  const project = [
    {
      title: "PsuedoShopper",
      src: "https://github.com/Thomas21119/ReactPortfolio/blob/main/public/images/PsuedoShopper.png?raw=true",
      alt: "PsuedoShopper",
      description: `PsuedoShopper is a similar clone to an Ebay in which users can
      create their own accounts and buy or sell items that they have put
      up for auction. This is the project i worked on most recently with
      Tom H, Mac and Ruchi.`,
      liveApplication: "https://psuedoshopper.herokuapp.com/",
      repo: "https://github.com/Thomas21119/PsuedoShopper"
    },  
    {
      title: "Flight Finder",
      src: "https://github.com/Thomas21119/ReactPortfolio/blob/main/public/images/Flight%20Finder.png?raw=true",
      alt: "Flight Finder",
      description: `Flight Finder is the other Project i've worked on in a group with
      Ignacio, Trang and Ruchi. This site uses various Api's to find
      information on flights and present it to the users, as well as
      finding locations of interest around the destination`,
      liveApplication: "https://trangthedev.github.io/flightFinder/",
      repo: "https://github.com/TrangTheDev/flightFinder"
    },  
    {
      title: "Work Day Scheduler",
      src: "https://github.com/Thomas21119/ReactPortfolio/blob/main/public/images/Work%20Day%20Scheduler.png?raw=true",
      alt: "Work Day Scheduler",
      description: `The Work Day Scheduler is a simple yet effective color coded
      Scheduler from the hours of 9-5 So that people can plan out their
      day with less distractions`,
      liveApplication: "https://thomas21119.github.io/Work-Day-Scheduler/',",
      repo: "https://github.com/Thomas21119/Work-Day-Scheduler"
    },  
    {
      title: "Note Taker",
      src: "https://github.com/Thomas21119/ReactPortfolio/blob/main/public/images/Note%20Taker%20.png?raw=true",
      alt: "Note Taker",
      description: `Note Taker is a place to Take notes, which are namable and gets
      saved to your local device so that upon page refresh the same
      information is still there.`,
      liveApplication: "https://evening-dawn-38161.herokuapp.com/",
      repo: "https://github.com/Thomas21119/Note_Taker"
    },  
    {
      title: "Password Generator",
      src: "https://github.com/Thomas21119/ReactPortfolio/blob/main/public/images/Password%20Generator.png?raw=true",
      alt: "Password Generator",
      description: ` The password generator though basic was my first attempt at
      javascript, and though it lacks security and a way to safely save
      the information, i am very proud of what i accomplished given my
      lack of experience.`,
      liveApplication: "https://thomas21119.github.io/Password-Generator/",
      repo: "https://github.com/Thomas21119/Password-Generator"
    },  
    {
      title: "Tech Blog",
      src: "https://github.com/Thomas21119/ReactPortfolio/blob/main/public/images/dashboard.png?raw=true",
      alt: "TechBlog",
      description: `The Tech blog is of current, my only solo website that is fully
      developed and allows communication between parties, requiring a
      simple login and logout, people can post questions, mainly about
      software development and have them be responded to by other users.`,
      liveApplication: "https://tech-blogandsomerandomstring.herokuapp.com/",
      repo: "https://github.com/Thomas21119/TechBlog"
    }
  ]
  return (
    <div className="portfolio"> 
      <h1 id="projectsH1"> My Projects </h1>
      <div className="toWrap">
        {
          project.map((projectInfo, i) => {
            return (
              <div className="projects">
                <h3 key={i} className="projectTitle"> {projectInfo.title} </h3>
                <img 
                  key={i}
                  src={projectInfo.src}
                  alt={projectInfo.alt}
                  className="projectImage"
                />
                <p key={i}> {projectInfo.description} </p>
                <div className="buttons">
                  <a key={i} href={projectInfo.repo} rel="noopener noreferrer" target="_blank">
                    <button> Github Repository </button>
                  </a>
                  <a key={i} href={projectInfo.liveApplication} rel="noopener noreferrer" target="_blank">
                    <button> Live Application </button>
                  </a>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Portfolio;
