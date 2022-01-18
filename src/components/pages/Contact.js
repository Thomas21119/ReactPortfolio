import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <div className="contact">
      <h3 className="sectionHeading">Contact Me</h3>
      <form>
        <input type="text" placeholder="Name"></input>
        <input type="email" name="email" placeholder="Email"></input>
        <input type="text" placeholder="Message" id="contactMessage"></input>
        <input type="submit" id="formSubmitBtn"></input>
      </form>
    </div>
  );
}

export default Contact;
