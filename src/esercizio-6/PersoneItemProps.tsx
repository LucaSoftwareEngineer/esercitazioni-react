import React from 'react';
import {IPersona} from "./IPersona";

const PersoneItemProps = (props:IPersona) => {
    return (
        <>
            <div>
                <p>{props.nome}</p>
                <p>{props.cognome}</p>
            </div>
        </>
    );
};

export default PersoneItemProps;