import './App.css';
import { Routes, Route } from 'react-router-dom';

import Home from './components/home';
import Bio from './components/Bio-Task1';
import MyCity from './components/myCity-Task2';
import Recipe from './components/Recipe-Task3';
import Shakespeare from './components/Task4/shakespeare-Task4';
import RomeoJuliet from './components/Task4/RomeoJuliet-Task4';
import Movie from './components/FavoriteMovie-Task5';
import PersPage from './components/personalPage-Task6';

var mov = {
  name: "Темнее чёрного",
  director: "Тэнсай Окамура",
  release: "11 мая 2007",
  studio: "Студия Bones",
  poster: "https://i.pinimg.com/originals/70/fa/54/70fa54df4f9883a6374646a4ada0da1c.jpg",
}

var I = {
  name: "Акобян Диана",
  phone: "+77081006840",
  email: "d1anonim2002@gmail.com",
  city: "Astana",
  photo: "https://i.pinimg.com/originals/c2/e9/9b/c2e99bb3c0fb5e31d55b9459ed84f63d.jpg",
}



function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/BIO' element={<Bio></Bio>}></Route>
        <Route path='/infoCity' element={<MyCity></MyCity>}></Route>
        <Route path='/recipe' element={<Recipe></Recipe>}></Route>

        <Route path='/Shakespeare' element={<Shakespeare></Shakespeare>}></Route>
        <Route path='/Shakespeare/RomeoAndJuliet' element={<RomeoJuliet></RomeoJuliet>}></Route>

        <Route path='/FavoriteMovie' element={<Movie val={mov}></Movie>}></Route>
        <Route path='/aboutMe' element={<PersPage val={I}></PersPage>}></Route>

      </Routes>
    </div>
  );
}

export default App;
