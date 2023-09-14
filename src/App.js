import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes,  } from 'react-router-dom';
import Home from './components/Home';
import Logements from './components/Logements';
import AboutUs from './components/AboutUs';
import Erreur from './components/Erreur';
import Navbar from './components/Navbar';

function App() {
  return (
    <>
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/logements' element={<Logements/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='*' element={<Erreur/>} />
        </Routes>
     </BrowserRouter>
    </>
  );
}

export default App;
