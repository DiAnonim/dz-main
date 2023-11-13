import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home';
import InfoCity from './components/InfoCity';
import AttractionFamous from './components/famousAttraction ';
import Attractions from './components/otherAttractions';
import Photo from './components/photo';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/Info-City' element={<InfoCity></InfoCity>}></Route>
        <Route path='/famousAttraction' element={<AttractionFamous></AttractionFamous>}></Route>
        <Route path='/otherAttractions' element={<Attractions></Attractions>}></Route>
        <Route path='/photo' element={<Photo></Photo>}></Route>
      </Routes>
    </div>
  );
}

export default App;
