import React from 'react';
import {store} from "./store";
import {Provider} from "react-redux";
import {useAppSelector, useAppDispatch} from "./hooks";
import {incrementa, impostaValore} from "./ContatoreSlice";
import type { RootState, AppDispatch } from './store';

const Main = () => {

    const conteggio:number = useAppSelector((s) => s.contatore.valore);
    const dispatch = useAppDispatch();

    return (
        <>
            <h1>{conteggio}</h1>
            <button onClick={() => dispatch(incrementa())}>Incrementa</button>
            <br />
            <button onClick={() => dispatch(impostaValore(0))}>Riporta a 0</button>
        </>
    );

};

export default Main;