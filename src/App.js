
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/home';
import About from './pages/about';
import Contact from './pages/contact';
import Pricing from './pages/pricing';
import Services from './pages/services';
import Navbar from './components/navbar';
import Footer from './components/footer';

function App() {
  return (
    <div >
      <BrowserRouter>
      <Navbar/>
      <Routes>
       <Route path='/' element={<Home/>}/>
       <Route path='/about' element={<About/>}/>
       <Route path='/contact' element={<Contact/>}/>
       <Route path='/price' element={<Pricing/>}/>
       <Route path='/service' element={<Services/>}/>

      </Routes>
      <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
