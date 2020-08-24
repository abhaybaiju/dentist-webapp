import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img id="image" src={require('./dentist.jpg')} alt="dentist" />
      </header>
    </div>
  );
}

export default App;
