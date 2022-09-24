import React from 'react'
import {useState} from 'react'
// import './Box.css'




export default function Box(props) {

  // console.log(props.on)
  const backgroundColor = props.on ? "#222222":"#cccccc"
  const styles ={
  
    backgroundColor:backgroundColor,
  
  }


  return (
   <div className="boxData" style={styles}></div>
  )
}
