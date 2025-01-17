import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from './Pages/Home/Home';
import Vestuario from './Pages/Vestuario/Vestuario';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/vestuario' element={<Vestuario />} />
      </Routes>
    </Router>
  );
}

export default App;