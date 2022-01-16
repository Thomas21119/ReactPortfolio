import React, { useState, useEffect } from 'react';
import './Header.css';

function Header() {
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
