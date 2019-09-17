//Basic imports
import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
//CSS Files
import './css/reset.css';
import './css/1140.css';
import './css/theme.css';
//Images
import Logo from './imgs/Logo.png';
//Pages Components
import Homepage from './pages/homepage/homepage';

function App() {
  return (
    <div className="container12">
        <header>
          <div className="row">
            <div className="column12">
              <a href="file:///Users/apple/Desktop/Toolspick/HTML/index.html"><img src={Logo} alt="Toolspick.IO" /></a>
            </div>
          </div>
        </header>
        <Router>
          <Route path="/" exact component={Homepage} />
        </Router>
    </div>
  );
}

export default App;