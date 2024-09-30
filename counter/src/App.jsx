import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [count, setCount] = useState(0)
const add=()=>{
  count=count+1;
  setCount(count);
}
const sub=()=>{
  if(count-1<0){
    alert('value could not be less than 0')
  }else{
  count=count-1;
  setCount(count);}
}
  return (
    <>
     <h1>Testing Application Demo</h1>
     <h2>Counter Application</h2>
     <button onClick={add}>Add Val :{count}</button>
     <button onClick={sub}>Sub Val :{count}</button>
    </>
  )
}

export default App
