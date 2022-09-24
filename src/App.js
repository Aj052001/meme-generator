import './App.css';
import React  from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import Child2 from './components/Child2';
// import Child1 from './components/Child1';
// import Box from './components/Box';
// import Boxdata from './Boxdata.js'

function App() {

  // const [square,setSquare]=React.useState(Boxdata)
  // const squareElement  = square.map((square)=>(
  
  //       // <div className="box" key = {i} style={style}>
  // // console.log(square.on)
  //       // </div>
  //       <Box key={square.id} on= {square.on} />
  // ))
  






  // const[state,setState]=React.useState("Ravi")//how to data flow in components 
  return (
    <div>
     <Header/>
     <Main/>
     {/* <Child2 user ={state}/> */}
     {/* <Child1  user = {state}/> */}
     {/* <h1>Box will be here </h1> */}
     {/* {squareElement} */}

    </div>
  );
}

export default App;
