//Basic imports
import React from 'react'
import {BrowserRouter as Router, Route, Link} from 'react-router-dom'
//CSS Files
import './css/reset.css'
import './css/1140.css'
import './css/theme.css'
//Images
import Logo from './imgs/Logo.png'
//Pages Components
import Homepage from './pages/homepage/homepage'
import Browse   from './pages/browse/browse'
import View from './pages/view/view'

const App = () => {
  return (
    <Router>
      <div className="container12">
          <header>
            <div className="row">
              <div className="column12">
                <Link to="/"><img src={Logo} alt="Toolspick.IO" /></Link>
              </div>
            </div>
          </header>
            <Route path="/" exact component={Homepage} />
            <Route path="/browse/all" component={Browse} />
            <Route path="/view/:id" component={View} />
      </div>
    </Router>
  )
}

export default App