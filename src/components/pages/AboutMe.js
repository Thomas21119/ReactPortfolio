import React from 'react';
import './AboutMe.css';

function AboutMe() {
  return (
    <div className="aboutMe" >
      <h3 className="sectionHeading"> About Me</h3>
      <img
        src="https://github.com/Thomas21119/ReactPortfolio/blob/main/public/images/AvatarMaker.png?raw=true"
        alt="Tom"
      />
      <p>
        I'm Tom, located in Victoria Australia and am currently a junior web
        developer, still in very early days but am making progress towards
        getting better every day. As of the moment I have made one website from
        scratch, Css-Snippets. I have done cleaning as well as debugging of code
        on Horiseon's Websites and am looking to expand my skills. Outside of
        the coding industry i love playing games and reading. One of my
        favourite seasonal hobbies is Snowboarding, which i get to partake in at
        Mt Buller and Mt Hotham. I also love watersports such as Kneeboarding,
        WakeBoarding, and more.
      </p>
    </div>
  );
}

export default AboutMe;
