import React from 'react';
import {IPersona} from "./IPersona";
import PersoneProps from "./PersoneProps";

const Main = () => {

    const [persone, setPersone] = React.useState<IPersona[]>([
        {
            nome: 'Mario',
            cognome: 'Rossi'
        },
        {
            nome: 'Luigi',
            cognome: 'Verdi'
        }
    ]);

    return (
        <>
            <PersoneProps persone={persone} />
        </>
    );
};

export default Main;