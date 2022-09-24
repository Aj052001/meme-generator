import React from 'react'
import {useState} from 'react'
import './Main.css'
import Memesdata from '../Memesdata.js'
export default function Main() {
    let url;

    // const [memeImage,setMemeImage] = React.useState("https://i.imgflip.com/3l60ph.jpg")
    const [meme,setMeme]= React.useState({
      topText:"",
      bottomText:"",
      randomImage:"http://i.imgflip.com/1bij.jpg"



    })

    const[allMemeImages,setAllMemeImage]=React.useState(Memesdata)

console.log(allMemeImages.data.memes[0].name)
    function getMemeImage()
    {
     
        const memesArray = allMemeImages.data.memes 
        
      
        const randomNumber = Math.floor(Math.random() * memesArray.length)
         url = memesArray[randomNumber].url
        //  console.log(Math.floor(Math.random()* memesArray.length))
        // console.log(url)
        // console.log(randomNumber)
        setMeme((previousDataOfObject)=>({
          ...previousDataOfObject,
         randomImage:url
        }))
    }
    // function handleOnMouseOver() {
    //     // alert("MouseOver")
    // }
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
<img src={meme.randomImage}

alt="" />

        </div>
      </div>
    </div>
  )
}
