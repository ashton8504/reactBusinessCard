import React from "react";

export default function MainContent() {
  return (
    <div className="content-container">
      <div>
        <h2 className="mainContentName">Ashton Little</h2>
        <p className="jobTitle">Web Developer</p>
        <p>
            <a href="https://www.ashton-codes.com/" target="_blank" rel="noopener noreferrer" className="myWebsite">
                Ashton-Codes
            </a>
        </p>
        <button className="emailBtn">
            <a href="mailto:ashtonlittle8504@gmail.com">
                📧 Email Me
            </a>
        </button>
      </div>
      <div>
        <h2 className="aboutMe">About Me</h2>
        <p className="aboutMeParagraph">
          I am a passionate frontend developer with a focus on creating visually stunning and user-friendly web projects. I love the art of coding and exploring the endless possibilities with React. You can often find me pedaling away on my Peloton or deeply engaged in front of my desk, bringing ideas to life. Let's connect and bring your vision to reality!
        </p>
      </div>
      <div>
        <h2 className="myInterest">Interest</h2>
        <p className="interestParagraph">
          Health advocate. Guitarist. Nintendo enthusiast. Cycling addict. French Bulldog lover. Passionate about promoting well-being through healthy lifestyle choices. Always seeking new adventures and striving to make a positive impact on the world.
        </p>
      </div>
    </div>
  );
}
