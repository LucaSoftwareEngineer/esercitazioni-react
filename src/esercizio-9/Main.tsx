import React, {useEffect, useState} from 'react';

const Main = () => {

    const [generaNuovoNumero, setGeneraNuovoNumero] = useState(0);

    useEffect(() => {
        console.log("il numero è stato generato");
        console.log(Math.random() * 100);
    }, [generaNuovoNumero]);

    const clickGeneraNuovoNumeroHandler = () => {
        setGeneraNuovoNumero((prev) => (prev + 1));
    };

    return (
        <>
            <button onClick={clickGeneraNuovoNumeroHandler}>Genera nuovo numero</button>
        </>
    );

};

export default Main;