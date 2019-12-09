import React from 'react';
import {
  BrowserRouter as Router,
  Route
} from 'react-router-dom';



function App() {
  return (
    <Router>
      <div>

        <Route exact path='/' render={() => <div>Home</div>} />
        <Route path='/projects' render={() => <div>Projects</div>} />
        <Route path='/blog' render={() => <div>Blog</div>} />
        <Route path='/resume' render={() => <div>Resume</div>} />
      </div>
    </Router>
  );
}

export default App;
