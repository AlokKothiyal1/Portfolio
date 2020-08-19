import React from 'react';
import './App.css';
import HomePage from './components/HomePage'
import Proficiencies from './components/Proficiencies'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <HomePage/>
      <hr></hr>
      <Proficiencies/>
      
      <Projects/>
    </div>
  );
}

export default App;
