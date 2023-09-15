import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes,  } from 'react-router-dom';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Erreur from './components/Erreur';
import Navbar from './components/Navbar';
import Footer from './components/Footer';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='*' element={<Erreur/>} />
        </Routes>
        <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
