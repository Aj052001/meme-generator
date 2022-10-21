import './App.css';
import React  from 'react';
import Header from './components/Header';
import Main from './components/Main';
// import Child2 from './components/Child2';
// import Child1 from './components/Child1';
// import Box from './components/Box';
// import Boxdata from './Boxdata.js'

function App() {
  // const[state,setState]=React.useState("Ravi")//how to data flow in components 
  return (
    <div>
     <Header/>
     <Main/>
     {/* <Child2 user ={state}/> */}
     {/* <Child1  user = {state}/> */}
    </div>
  );
}

export default App;
