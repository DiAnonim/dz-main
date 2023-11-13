import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home';
import BIO from './components/bio';
import FamousP from './components/famousPainting';
import Gallery from './components/galleryPaintings';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/bio' element={<BIO></BIO>}></Route>
        <Route path='/famousPainting' element={<FamousP></FamousP>}></Route>
        <Route path='/gallery' element={<Gallery></Gallery>}></Route>
      </Routes>
    </div>
  );
}

export default App;
