import React from 'react';
import Autorizzato from "./Autorizzato";
import NonAutorizzato from "./NonAutorizzato";

const Main = () => {

    const isAutorizzato = true;

    return (
        <>
            { isAutorizzato ? <Autorizzato /> : <NonAutorizzato /> }
        </>
    );

};

export default Main;