import React from 'react';
import {Link} from 'react-router-dom';

const Home = props => {
  return (
    <div id="home-main">
      <div id="home-intro" className="home-divs">
        <div>
          <h1>Lauren Hash</h1>
          <h2>Software Engineer</h2>
          <h2>NY Metropolitan Area</h2>
        </div>
      </div>

      <div id="home-about" className="home-divs">
        <p>I am a software engineer with a passion for developing new and exciting
          products that enrich people's lives! From web applications to video games,
          I enjoy taking on all types of projects which help me grow as a software developer.
        </p>
        <Link to="/about" className="home-link">To find out more, check out my About page!</Link>
      </div>

      <div id="home-experience" className="home-divs">
        <h2>Projects</h2>
        <div id="project-thumbnails">
          <div className="etr-flip">
            <img className="etr-front" src="/escapetheroomthumbnail.png" alt="Escape the Room AR" />
            <div className="etr-back">
              <h3>Escape the Room AR</h3>
              <p>Click to find out more!</p>
            </div>
          </div>
          <div id="shady-duck-container">
            <div className="shady-duck-flip">
              <img className="shady-duck shady-duck-front" src="/shadyglenthumbnail.png" alt="Shady Glen" />
              <div className="shady-duck-back">
                <h3>Shady Glen</h3>
                <p>Click to find out more!</p>
              </div>
            </div>
            <div className="shady-duck-flip">
              <img className="shady-duck shady-duck-front" src="/wtdthumbnail.png" alt="What the Duck" />
              <div className="shady-duck-back">
                <h3>What the Duck</h3>
                <p>Click to find out more!</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div id="home-blog" className="home-divs">
        <h2>Latest Blog Posts</h2>
      </div>

      <div id="home-contact" className="home-divs">
        <p>I am always interested in new opportunities to develop my skills!</p>
        <Link to="/contact" className="home-link">To get in touch with me, check out my Contact page!</Link>
      </div>
    </div>
  )
}

export default Home;