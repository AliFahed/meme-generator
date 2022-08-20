import React from 'react';
import TrollFace from '../images/troll-face.svg';

function Header() {
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={TrollFace}
          alt="Famous Troll Face Icon"
          className="troll-face-icon"
        />
        <h2 className="header-title">Meme Generator</h2>
      </div>
      <div className="header-text-container">
        <p className="header-text">React Course - Project 3</p>
      </div>
    </header>
  );
}

export default Header;
