import React from 'react';
import Main from './Component/Website';
import About from './Component/About';
import Services from './Component/Services';
import Contact from './Component/Contact';
import Goverment from './Component/Goverment';
import Private from './Component/Private';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from 'react-router-dom';

function App() {

  return (
    <div>
      < Router>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/goverment" element={<Goverment />} />
          <Route exact path="/private" element={<Private />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;