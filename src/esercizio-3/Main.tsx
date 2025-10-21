import React from 'react';
import UtenteProps from "./UtenteProps";
import {IUtente} from "./IUtente";

const Main = () => {

    const utenti: IUtente[] = [
        {
            nome: 'Mario',
            cognome: 'Bros'
        },
        {
            nome: 'Crash',
            cognome: 'Bandicoot'
        },
        {
            nome: 'Pac',
            cognome: 'Man'
        }
    ];

    const utenteFiltrato = utenti
        .map(utente => utente)
        .filter(utente => utente.nome == 'Crash');

    console.log(utenteFiltrato);

    return (
        <div>
            {
                utenti.map((elemento, indice) => (
                        <UtenteProps key={indice} nome={elemento.nome} cognome={elemento.cognome} ></UtenteProps>
                    )
                )
            }
        </div>
    );
};

export default Main;