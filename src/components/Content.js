import React, { useState, useEffect } from 'react';

import Contact from './Contact';
import AboutMe from './AboutMe';
import Portfolio from './Portfolio';
import './Content.css';

const aboutMe = document.querySelector('#aboutMe');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');
const resume = document.querySelector('#resume');

const scrollTop = window.scrollY;

function Content() {


  useEffect(() => {
    window.addEventListener('scroll', isSticky);
    return () => {
      window.removeEventListener('scroll', isSticky);
    };
  });
  const isSticky = (e) => {
    scrollTop <= 50
      ? aboutMe.classList.add('currentView')
      : aboutMe.classList.remove('currentView');
    scrollTop <= 300 && scrollTop > 100
      ? portfolio.classList.add('currentView')
      : portfolio.classList.remove('currentView');
    scrollTop <= 500 && scrollTop > 300
      ? contact.classList.add('currentView')
      : contact.classList.remove('currentView');
    scrollTop >= 500
      ? resume.classList.add('currentView')
      : resume.classList.remove('currentView');
  };
  return (
    <div className="Content">
      <AboutMe />
      <Contact />
      <Portfolio />
    </div>
  );
}

export default Content;
