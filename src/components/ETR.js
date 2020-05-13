import React from 'react';

const ETR = props => {
  return (
    <div id= "etr-proj" className="single-proj-container">
      <h1>Escape the Room AR</h1>
      <iframe 
        width="854" 
        height="480" 
        src="https://www.youtube.com/embed/3oj4ZygufGk" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowFullScreen>
      </iframe>

      <a className="single-proj-link" href="https://bit.ly/3bV1wgr">Visit Project Github</a>

      <div className="devs">
        <h2>Developers</h2>
        <p><i>Lauren Hash, Danielle Kogan, Rachel Burrous, Karen Ortiz</i></p>
      </div>

      <div className="proj-info">
        <h2>Information</h2>
        <p>
          Escape the Room AR is an augmented reality game!
          It is compatible with both iOS and Android devices. To play this game, the user points their smartphone
          at a location in the room to spawn a portal. When they step through the portal, they find themselves
          trapped inside a spooky cabin! To escape, they must solve puzzles using items they find around the
          room and logic!

          Escape the Room AR was developed in 2.5 weeks as a capstone project for a coding course. It uses the following technologies:
        </p>
        <p><b>Front-end:</b> ViroReact, React-Native, Redux</p>
        <p><b>Back-end:</b> Firebase Cloud Firestore</p>
      </div>
    </div>
  )
}

export default ETR;