import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';
import NavBar from './components/NavBar'
import About from './components/About'
import Projects from './components/Projects'
import Blog from './components/Blog'
import Resume from './components/Resume'


function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Route exact path='/' component={About} />
        <Route exact path='/projects' component={Projects} />
        <Route exact path='/blog' component={Blog} />
        <Route exact path='/resume' component={Resume} />
      </div>
    </Router>
  );
}

export default App;
