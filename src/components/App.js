import React from 'react';
import MainPage from './MainPage';
import {BrowserRouter as Router} from 'react-router-dom';
import "../components-styles/_base.scss"
import "../components-styles/_utilities.scss"

function App() {
  return (
    <Router>
      <div className="App">
        <MainPage/>
      </div>
    </Router>
  );
}

export default App;
