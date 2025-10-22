import React from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./esercizio-7/Main";

function App() {
  return (
    <div>
        <h1>
            <img src={logo} className="App-logo" alt="logo" />
            &nbsp;
            Esercizi React
        </h1>
        <br />
        <Main />
    </div>
  );
}

export default App;
