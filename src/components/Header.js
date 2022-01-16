import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
  useEffect(() => {
    window.addEventListener('scroll', colorChange);
    return () => {
      window.removeEventListener('scroll', colorChange);
    };
  });
  const colorChange = (e) => {
    const aboutMe = document.querySelector('#aboutMe');
    const portfolio = document.querySelector('#portfolio');
    const contact = document.querySelector('#contact');
    const resume = document.querySelector('#resume');
    const scrollTop = window.scrollY;

    scrollTop <= 100
      ? aboutMe.classList.add('currentView')
      : aboutMe.classList.remove('currentView');
    scrollTop <= 300 && scrollTop > 100
      ? contact.classList.add('currentView')
      : contact.classList.remove('currentView');
    scrollTop <= 500 && scrollTop > 300
      ? portfolio.classList.add('currentView')
      : portfolio.classList.remove('currentView');
    scrollTop >= 500
      ? resume.classList.add('currentView')
      : resume.classList.remove('currentView');
  };
  return (
    <header className="is-sticky">
      <h2> Thomas Wittwer </h2>
      <ul>
        <li className="navLink" id="aboutMe">
          {' '}
          About Me{' '}
        </li>
        <li className="navLink" id="contact">
          {' '}
          Contact{' '}
        </li>
        <li className="navLink" id="portfolio">
          {' '}
          Portfolio{' '}
        </li>
        <li className="navLink" id="resume">
          {' '}
          Resume{' '}
        </li>
      </ul>
    </header>
  );
}

export default Header;
