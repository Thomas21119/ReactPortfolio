import React, { useState } from 'react';
import Header from './Header';
import AboutMe from './pages/AboutMe';
import Contact from './pages/Contact';
import Resume from './pages/Resume';
import Portfolio from './pages/Portfolio';
import Footer from './pages/Footer'
import './Container.css';

export default function PortfolioContainer() {
  const [currentPage, setCurrentPage] = useState('AboutMe');

  // TODO: Add a comment describing the functionality of this method
  const renderPage = (e) => {
    if (currentPage === 'AboutMe') {
      return <AboutMe />;
    }
    if (currentPage === 'Portfolio') {
      return <Portfolio />;
    }
    if (currentPage === 'Resume') {
      return <Resume />;
    }
    return <Contact />;
  };

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="root">
      {/* // TODO: Add a comment describing what we are passing as props */}
      <Header currentPage={currentPage} handlePageChange={handlePageChange} />
      <div className="HeaderSpacing"></div>
      {/* // TODO: Add a comment explaining what is happening on the following line */}
      {renderPage()}
      <Footer />
    </div>
  );
}
