import React from 'react';

const ShadyGlen = props => {
  return (
    <div id= "sg-proj" className="single-proj-container">
      <h1>Shady Glen</h1>
      <iframe 
        width="854" 
        height="480" 
        src="https://www.youtube.com/embed/vsuUUkzD7IM" 
        frameborder="0" 
        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
        allowfullscreen>
      </iframe>

      <a href="https://bit.ly/2wbFGpG">Visit Project Github (Scripts Only)</a>

      <div className="devs">
        <h2>Developers</h2>
        <p><i>Lauren Hash</i></p>
      </div>

      <div className="proj-info">
        <h2>Information</h2>
        <p>
          Shady Glen is a 3D RPG sandbox for PC! At the moment it features a functional inventory and equipment system
          and a basic combat system involving both ranged and melee weaponry. In the future, its simple prototype systems
          will be expanded and it will include many life simulation elements such as the following:
          <ul>
            <li>A real-world day/night cycle where events occur on certain days, at certain times of day</li>
            <li>The ability to form friendships and relationships with villagers by completing quests and giving them gifts</li>
            <li>A story which unfolds with the passage of time as you invest more hours into the game</li>
          </ul>

          The Shady Glen prototype was developed over the course of a weekend for a Hackathon, but I plan to expand on it further
          in the future. To follow along with game updates, please visit <a href="https://lhashdevblog.wordpress.com/">my developer blog</a>!

          This project was coded in C# using the Unity engine.
        </p>
      </div>
    </div>
  )
}

export default ShadyGlen;