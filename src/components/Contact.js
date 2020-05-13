import React from 'react';

const Contact = props => {
  return (
    <div id="contact-container">
      <h1>Contact Me</h1>
      <h3>Interested in a project? Contact me through...</h3>

      <h3>Email</h3>
      <a href="mailto:lah5175@hotmail.com">
        <img src="/emailIcon.png" />
      </a>
      <h3>LinkedIn</h3>
      <a href="https://www.linkedin.com/in/lauren-hash/">
        <img src="/linkedinIcon.png" />
      </a>
    </div>
  )
}

export default Contact;