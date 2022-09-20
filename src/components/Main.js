import React from 'react'
import './Main.css'
import Memesdata from '../Memesdata.js'
export default function Main() {
    let url;
    function getMemeImage()
    {
        const memesArray = Memesdata.data.memes 
        const randomNumber = Math.floor(Math.random() * memesArray.length)
         url = memesArray[randomNumber].url
        console.log(url)
    }
    function handleOnMouseOver() {
        // alert("MouseOver")
    }
  return (
    <div >
        <p>{url}</p>
      <div className="main">
        <div className="type">
<input type="text" name="text-1" id="" placeholder='enter meme' />
<input type="text" name="text-2" id=""
placeholder='enter mene' />
        </div>
        <div className="button">
<button onClick={getMemeImage} >Get a new meme image</button>
        </div>
        <div className="meme-image">
<img src="../images/1.png" 
onMouseOver={handleOnMouseOver}
alt="" />

        </div>
      </div>
    </div>
  )
}
