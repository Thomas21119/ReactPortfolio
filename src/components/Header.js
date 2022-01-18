import React from 'react';
import './Header.css';

function Header({ currentPage, handlePageChange }) {
  return (
    <header className="is-sticky">
      <h2> Thomas Wittwer </h2>
      <ul>
        <li className="navLink" id="aboutMe">
          <a
            href="#AboutMe"
            className={currentPage === 'AboutMe' ? 'activeNavLink' : 'navLink'}
            onClick={() => handlePageChange('AboutMe')}
          >
            About Me
          </a>
        </li>
        <li className="navLink" id="contact">
          <a
            href="#Contact"
            className={currentPage === 'Contact' ? 'activeNavLink' : 'navLink'}
            onClick={() => handlePageChange('Contact')}
          >
            Contact
          </a>
        </li>
        <li className="navLink" id="portfolio">
          <a
            href="#Portfolio"
            className={
              currentPage === 'Portfolio' ? 'activeNavLink' : 'navLink'
            }
            onClick={() => handlePageChange('Portfolio')}
          >
            Portfolio
          </a>
        </li>
        <li className="navLink" id="resume">
          <a
            href="#Resume"
            className={currentPage === 'Resume' ? 'activeNavLink' : 'navLink'}
            onClick={() => handlePageChange('Resume')}
          >
            Resume
          </a>
        </li>
      </ul>
    </header>
  );
}

export default Header;
