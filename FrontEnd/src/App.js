import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/Scroll/ScrollToTop';
import Header from './Components/Header/Header';

import Home from './Pages/Home/Home';
import Vestuario from './Pages/Vestuario/Vestuario';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header addToCartCount={0} />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vestuario' element={<Vestuario />} />
      </Routes>
    </Router>
  );
}

export default App;