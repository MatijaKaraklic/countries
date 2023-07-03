import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './elements/Header';

import Home from './routes/Home';
import Info from './routes/Info';
import Country from './routes/Country';

import './App.css';
import './style/cssreset.css';
import './style/variables.css';



function App() {
  return (
    <div>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/info" element={<Info />} />
          <Route path="/country/:cca3" element={<Country />} />
          <Route path="*" element={<p className='error-404'> 404 </p>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
