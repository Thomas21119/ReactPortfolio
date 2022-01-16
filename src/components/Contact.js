import React from 'react';
import Resume from './Resume';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h3 className="sectionHeading"> Contact </h3>
      <ul>
        <li>Thomas Wittwer</li>
        <li>Mobile Phone Number: 0490923053</li>
        <li>Email: thomas.wittwer2018@gmail.com</li>
        <li>Location: Melbourne Victoria</li>
      </ul>
      <Resume />
    </div>
  );
}

export default Contact;
