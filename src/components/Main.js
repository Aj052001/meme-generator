import React from "react";
import { useState,useEffect } from "react";
import "./Main.css";
import Memesdata from "../Memesdata.js";
export default function Main() {
  let url;

  // const [memeImage,setMemeImage] = React.useState("https://i.imgflip.com/3l60ph.jpg")
  const [meme, setMeme] = React.useState({
    topText: "",
    bottomText: "",
    randomImage: "http://i.imgflip.com/1bij.jpg",
  });

  const [allMemeImages, setAllMemeImage] = React.useState([]);
  ///syc=nchronous method
  React.useEffect(()=>{
    fetch("https://api.imgflip.com/get_memes")
    .then(res=>res.json())
    .then(data=>setAllMemeImage(data.data.memes))
    
  },[])
  console.log(allMemeImages)

  ///asyncronous metjod    
  //   React.useEffect(async () => {
  //     const res = await fetch("https://api.imgflip.com/get_memes")
  //     const data = await res.json()
  //     setAllMemes(data.data.memes)
  // }, [])
  
  console.log(allMemeImages)
  // console.log(allMemeImages.data.memes[0].name);
  function getMemeImage() {
    // const memesArray = allMemeImages.data.memes;

    const randomNumber = Math.floor(Math.random() * allMemeImages.length);
    url = allMemeImages[randomNumber].url;
    //  console.log(Math.floor(Math.random()* memesArray.length))
    // console.log(url)
    // console.log(randomNumber)
    setMeme((previousDataOfObject) => ({
      ...previousDataOfObject,
      randomImage: url,
    }));
  }
  // function handleOnMouseOver() {
  //     // alert("MouseOver")
  // }
  function handleChange(event)
  {
const{name,value}=event.target
setMeme((prevMeme)=>{
        return {
          ...prevMeme,[name]:value
        }
})
  }
  return (
    <div>

      <p>{url}</p>
      <div className="main">
        <div className="type">
        <input 
                    type="text"
                    placeholder="Top text"
                    className="form--input"
                    name="topText"
                    value={meme.topText}
                    onChange={handleChange}
                />
                <input 
                    type="text"
                    placeholder="Bottom text"
                    className="form--input"
                    name="bottomText"
                    value={meme.bottomText}
                    onChange={handleChange}
                />
        </div>
        <div className="button">
          <button onClick={getMemeImage}>Get a new meme image</button>
        </div>
        <div className="meme-image">
          <img src={meme.randomImage} alt="" />
          <h2 className="meme--text top">{meme.topText}</h2>
                <h2 className="meme--text bottom">{meme.bottomText}</h2>
        </div>
      </div>
    </div>
  );
}
