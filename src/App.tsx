import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Main from "./esercizio-11/Main";
import {store} from "./esercizio-11/store";
import {Provider} from "react-redux";
import {useAppSelector} from "./esercizio-11/hooks";

function App() {

    return (
    <Provider store={store}>
        <h1>
            <img src={logo} className="App-logo" alt="logo" />
            &nbsp;
            Esercizi React
        </h1>
        <br />
        <Main />
    </Provider>
    );
}

export default App;