import React from 'react';
import Navigation from './components/Navbar'
import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Navigation />
        <Login />
      </header>
    </div>
  );
}

export default App;
