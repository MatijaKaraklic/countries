import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

import Header from './elements/Header';

import Home from './routes/Home';
import Info from './routes/Info';
import Country from './routes/Country';

import './App.css';
import './style/cssreset.css';
import './style/variables.css';

import Cookies from 'js-cookie';


function App() {

  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    if(theme === 'dark') {
      Cookies.set('app_theme', 'light', { expires: 7 });
      setTheme('light');
    }
    else {
      Cookies.set('app_theme', 'dark', { expires: 7 });
      setTheme('dark');
    }
  }

  useEffect(() => {
    const themeC = Cookies.get('app_theme');
    if(!themeC) {
      Cookies.set('app_theme', 'light', { expires: 7 });
      setTheme('light');
      return;
    }
    setTheme(themeC);


  }, [])
  
  return (
    <div app_theme={theme}>
      <Header toggleTheme={toggleTheme} />
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
