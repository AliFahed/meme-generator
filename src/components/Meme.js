import React from 'react';
import memesData from '../memesData.js';

function Meme() {
  const [meme, setMeme] = React.useState({
    topText: '',
    bottomText: '',
    randomImage: '',
  });

  const [allMemeImages, setAllMemeImages] = React.useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const randomMeme = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[randomMeme].url;

    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));

    const memeImageContainer = document.querySelector('.meme-image-container');
    memeImageContainer.classList.add('display-meme-image');
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }

  console.log(meme);

  return (
    <main className="main-content">
      {/* <form action="#" className="form"> */}
      <div className="input-contaier">
        <input
          type="text"
          placeholder="Top Text"
          name="topText"
          value={meme.topText}
          onChange={handleChange}
          className="input"
          maxLength={40}
        />
        <input
          type="text"
          placeholder="Bottom Text"
          name="bottomText"
          value={meme.bottomText}
          onChange={handleChange}
          className="input"
          maxLength={40}
        />
      </div>
      <div className="search-meme-container">
        <button type="submit" className="search-btn" onClick={getMemeImage}>
          Get a new meme image
        </button>
      </div>
      {/* </form> */}

      <div className="meme-image-container">
        <div className="texts-container">
          <p className="top-text">{meme.topText}</p>
          <p className="bottom-text">{meme.bottomText}</p>
        </div>
        <img
          src={meme.randomImage}
          alt="Random Meme Image"
          className="meme-image"
        />
      </div>
    </main>
  );
}

export default Meme;
