import React from 'react';
import icon from "../../assets/icon.png";

function Home() {
    return (
        <div className="container content">
      <h1>About Me</h1>
      <hr />
      <img
        src={icon}
        className="img-fluid float-left portrait"
        alt="Sami Sully"
      />
      <p>
        Hello! I'm Sami, an artist and aspiring web developer from Washington
        State. I currently live just outside the Seattle area with my husband,
        and our tabby cat named Kirby. With the current change in the world, it
        gave me the push to jump into a field that I've always been interested
        in but never felt like the 'right' time to pursue. With a background in
        the arts and graphic design I felt it would be a great tie in to my
        current lifestyle and passions.
      </p>
      <p>
        I'm currently at the tail end of finishing up a Full Stack Coding Bootcamp 
        at Georgia Tech and will be graduating in mid November! I have a strong 
        passion for front-end web design creating interactive, aesthetically 
        pleasing sites with great user experience. I'm also currently open for 
        freelance work, so if you've got something in mind, dont hesitate to reach out!
      </p>
      
    </div>
    );
}

export default Home;