import React from 'react';

const About = props => {
  return (
    <div id="about-container">
      <h2>About Me</h2>
      <div>
        <p id="about-p1">Ever since I attended my first Global Game Jam in college, I have had a passion for
          programming all sorts of applications. That is why, after graduating in 2017 with an
          associate's degree in Computer Networking, I decided to turn my focus to coding. In 2020, 
          I attended the Grace Hopper immersive coding bootcamp at Fullstack Academy in NYC where
          I discovered that, with the right tools and my own creativity, I can make whatever I 
          set my mind to!
        </p>
        <img src="/me.jpg" alt="Me" />
      </div>
      <div>
        <p>I am an avid gamer and I enjoy creating interactive experiences in all of the apps that
          I build. Projects under my belt include an e-commerce site, an Escape the Room AR (augmented reality)
          game for Android and iOS, and a 3D fantasy sandbox that I built in a weekend for a Hackathon! I'm looking
          to diversify my portfolio and branch out to build all kinds of new and exciting apps.
        </p>
      </div>

      <h3>Proficiencies</h3>
      <p>Knowledgeable: Javascript, React.js, Redux, CSS, HTML</p>
      <p></p>
    </div>
  )
}

export default About;