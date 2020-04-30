import React from 'react';

const Portfolio = props => {
  return (
    <div id="portfolio-container">
      <h1>Portfolio</h1>
      <div id="portfolio-etr" className="portfolio-div">
        <div className="portfolio-description">
          <h2>Escape the Room AR</h2>
          <h3>An augmented reality game for iOS and Android devices!</h3>
          <p>You find yourself trapped in a cabin in the woods. To escape, you must solve puzzles
            and discover the combination to unlock the door! Will you escape the room?
          </p>
        </div>
        <div className="portfolio-img-div">
          <img src="/escapetheroomthumbnail.png" />
        </div>
      </div>

      <div id="portfolio-sg" className="portfolio-div">
        <div className="portfolio-description">
          <h2>Shady Glen</h2>
          <h3>A 3D Fantasy Sandbox for PC!</h3>
          <p>Currently in development, Shady Glen is a 3D fantasy RPG which will feature
            traditional exploration and combat in addition to life simulation elements, such
            as building friendships with villagers and time that passes as it does in the real world.
          </p>
        </div>
        <div className="portfolio-img-div">
          <img src="/shadyglenthumbnail.png" />
        </div>
      </div>

      <div id="portfolio-wtd" className="portfolio-div">
        <div className="portfolio-description">
          <h2>What the Duck</h2>
          <h3>An e-commerce site that specializes in rubber ducks!</h3>
          <p>Have you ever wanted to purchase unique and fun rubber ducks for use in your bathtimes,
            rubber duck debugging sessions, and beyond? How about accessories for those rubber ducks?
            Look no further!
          </p>
        </div>
        <div className="portfolio-img-div">
          <img src="/wtdthumbnail.png" />
        </div>
      </div>
    </div>
  )
}

export default Portfolio;