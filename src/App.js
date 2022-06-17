import './App.css';
import { Routes, Route, Link } from 'react-router-dom';
import Library from './Library';
import Home from './Home';
import PicPerDay from './PicPerDay';
import logo from './nasa-logo.png';
import NotFound from './NotFound';

const App = () => {
  return (
    <div>
      <nav>
        <Link to='/'>
          <img src={logo} alt='' />
        </Link>
        <Link to='/library'>
          <h2>Picture Library</h2>
        </Link>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/picperday' element={<PicPerDay />} />
          <Route path='/library' element={<Library />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
