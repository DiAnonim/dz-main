import './App.css'; 
import React from "react"; 
import { useDispatch, useSelector } from 'react-redux'; 
import { minecraftGetMobsAction } from './store/creators/minecraftCreators';
 
 
 
function App() { 
  const selector = useSelector() 
  const dispatch = useDispatch()  
  return ( 
    <div className="App"> 
      <span>{selector.mobs}</span> 
     <button onClick={()=>dispatch(minecraftGetMobsAction(['criper','steev']))}>get mobs</button> 
    </div> 
  ); 
} 
 
export default App;