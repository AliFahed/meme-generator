import React from 'react';

function Meme() {
  return (
    <main className="main-content">
      <form action="#" className="form">
        <div className="input-contaier">
          <input
            type="text"
            placeholder="Top Text"
            name="meme-top-text"
            className="input"
          />
          <input
            type="text"
            placeholder="Bottom Text"
            name="meme-bottom-text"
            className="input"
          />
        </div>
        <div className="search-meme-container">
          <button type="submit" className="search-btn">
            Get a new meme image
          </button>
        </div>
      </form>
    </main>
  );
}

export default Meme;
