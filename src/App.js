import { Routes, Route, Link } from 'react-router-dom';
import './styles/reset.css';
import './styles/App.css';
import Library from './components/Library';
import Home from './components/Home';
import PicPerDay from './components/PicPerDay';
import NotFound from './components/NotFound';
import logo from './styles/images/2120445.png';

function App() {
  const logoStyle = {
    width: 6 + "vmax",
    height: "auto",
    padding: 10 + "px",
  };
  return (
    <section className="main-container">
      <nav className="nav-container">
        <div className="logo-container">
          <h1 className="logo-title">The Observatory</h1>
          <Link to='/'>
            <img src={logo} alt='' style={logoStyle} />
          </Link>
        </div>
        <div className="sky-container">
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
          <div className="star"></div>
        </div>
        <ul className="link-container">
          <Link to='/other1'>
            <li className="link other1-link">Other1</li>
          </Link>
          <Link to='/library'>
            <li className="link pic-lib-link">Earth Library</li>
          </Link>
          <Link to='/other2'>
            <li className="link other2-link">Other2</li>
          </Link>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/picperday' element={<PicPerDay />} />
          <Route path='/library' element={<Library />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </main>
    </section>
  );
};

export default App;
