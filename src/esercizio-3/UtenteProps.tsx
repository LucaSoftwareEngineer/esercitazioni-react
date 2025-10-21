import React from 'react';
import {IUtente} from "./IUtente";

export default function UtenteProps(props:IUtente) {
    return (
        <div>
            <p>{props.nome}</p>
            <p>{props.cognome}</p>
        </div>
    );
};