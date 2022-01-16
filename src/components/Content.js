import React from 'react';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import './Content.css';

function Content() {
  return (
    <div className="Content">
      <AboutMe />
      <Contact />
      <Portfolio />
    </div>
  );
}

export default Content;
