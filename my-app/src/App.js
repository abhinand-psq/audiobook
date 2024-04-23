import React from 'react';
import {Route, Routes} from "react-router-dom";
import Frontone from './Frontone';
import Playersite from './Playersite';
import './App.css'
import UploadAudio from './UploadAudio';
import Adminpanel from './Adminpanel';
import SearchedPlayer from './SearchedPlayer';

const App = () => {
 return(
  <div className="App">
  <Routes>
    <Route path="/" element={ <Frontone/> } />
    <Route  path='/player/:id'  element={<SearchedPlayer/>} ></Route>
    <Route  path='/Player'  element={<Playersite/>} ></Route>
    <Route  path='/upload'  element={<UploadAudio/>} ></Route>
    <Route  path='/admin'  element={<Adminpanel/>} ></Route>
  </Routes>
</div>
 )
};
export default App;