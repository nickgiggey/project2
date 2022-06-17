// import React, { useState } from 'react';
import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import PicPerDay from './PicPerDay';
import Header from './Header';
import Library from './Library';

const App = () => {
  // const [pic, setPic] = useState([]);
  return (
    <div>
      <nav>
        <Link to='/'>
          <img
            src='https://brandlogos.net/wp-content/uploads/2015/03/nasa-logo.png'
            alt=''
          />
        </Link>
        <Link to='/library'>
          <h2>Picture Library</h2>
        </Link>
      </nav>
      <Header />
      <PicPerDay />
      <main>
        <Routes>
          <Route path='/library' element={<Library />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
