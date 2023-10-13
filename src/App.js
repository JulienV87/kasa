import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Route, Routes, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Erreur from './pages/Error';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Accomodation from './pages/Accomodation';



function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/accomodation/:id' element={<Accomodation/>} />
          <Route path='/about-us' element={<AboutUs/>} />
          <Route path='*' element={<Erreur/>} />
        </Routes>
        <Footer />
     </BrowserRouter>
    </>
  );
}

export default App;
