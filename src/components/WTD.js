import React from 'react';

const WTD = props => {
  return (
    <div id= "wtd-proj" className="single-proj-container">
      <h1>What the Duck</h1>
      <img src="/wtdthumbnail.png" alt="What the Duck?" width="854" height="480"/>

      <a className="single-proj-link" href="https://what-da-duck.herokuapp.com/">Visit Deployed Site</a>
      <a className="single-proj-link" href="https://bit.ly/33nrGVO">Visit Project Github</a>

      <div className="devs">
        <h2>Developers</h2>
        <p><i>Lauren Hash, Karen Ortiz, Ayse Erduran, Patty Arunyavikul</i></p>
      </div>

      <div className="proj-info">
        <h2>Information</h2>
        <p>
          What the duck is an e-commerce site that specializes in - what else - rubber ducks!
          You can purchase a preset duck or specific clothing and accessories to customize your duck!
          Additionally, the website has a Build-a-Duck feature where you can have a duck made to your
          own custom specifications!

          Note: Please do not spend money on What the Duck as it's a proof of concept website and we cannot
          sell you merchandise, unfortunately.

          Escape the Room AR was developed in 1.5 weeks! Here are the technologies that our group used:
        </p>
        <p><b>Front-end:</b> React.js, Redux, Dinero.js, Google and Facebook OAuth</p>
        <p><b>Back-end:</b> Express.js, PostgreSQL, Sequelize</p>
        <br />
      </div>
    </div>
  )
}

export default WTD;