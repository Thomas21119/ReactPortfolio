import React, { useState, useEffect } from 'react';
import './Header.css';
const aboutMe = document.querySelector('#aboutMe');
const portfolio = document.querySelector('#portfolio');
const contact = document.querySelector('#contact');
const resume = document.querySelector('#resume');

function Header() {
  useEffect(() => {
    const aboutMeClick = (e) => {};

    aboutMe.addEventListener('click', aboutMeClick);
  });

  return (
    <header className="is-sticky">
      <h2> Thomas Wittwer </h2>
      <ul>
        <li className="navLink" id="aboutMe">
          {' '}
          About Me{' '}
        </li>
        <li className="navLink" id="portfolio">
          {' '}
          Portfolio{' '}
        </li>
        <li className="navLink" id="contact">
          {' '}
          Contact{' '}
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
