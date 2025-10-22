import React from 'react';
import {IPersona} from "./IPersona";
import PersoneItemProps from "./PersoneItemProps";

interface IPersonaProps {
    persone: IPersona[];
}

const PersoneProps = (props : IPersonaProps) => {

    const persone: IPersona[] = props.persone;

    console.log(persone);

    return (
        <>
            {
                persone
                    .map((persona, index) => (
                        <PersoneItemProps key={index} nome={persona.nome} cognome={persona.cognome} />
                    ))
            }
        </>
    );

};

export default PersoneProps;