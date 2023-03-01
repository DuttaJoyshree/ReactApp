import React,{useState}from 'react';

const Firstapp=()=>{
  const[counter,setCounter]=useState(0);
  function add(){
    setCounter(counter+1);
  }
  function dec(){
    setCounter(counter-1);
  }
  return(
    <>
    <button onClick={add}>  +  </button>
    <p>{counter}</p>
    <button onClick={dec}>  -  </button>
    </>
  );
}


const App=()=> {
  return (
    <Firstapp/>
  );
  };

export default App;
