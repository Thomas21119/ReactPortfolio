import React, { useState, useEffect } from 'react';
import Resume from '../Resume';
import Contact from './Contact';
import AboutMe from './AboutMe';
import Portfolio from '../Portfolio';
import './Content.css';

function Content() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  const renderPage = () => {
    if (currentPage === 'Contact') {
      return <Contact />;
    }
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    return <Resume />;
  };

  const handlePageChange = (page) => setCurrentPage(page);

  return (
    <div className="Content" >
      <AboutMe />
      <Contact />
      <Portfolio />
    </div>
  );
}

export default Content;
