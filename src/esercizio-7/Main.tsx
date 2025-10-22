import React from 'react';

const Main = () => {

    const [vettore, setVettore] = React.useState<number[]>([]);

    const clickAggiungiElementoHandler = (e:number) => {
        setVettore((v) => {
            return [...v, e];
        });
    };

    const clickMostraVettoreHandler = () => {
        console.log(vettore);
    };

    return (
        <div>
            <button onClick={clickMostraVettoreHandler}>Mostra vettore nella console</button>
            <br />
            <button onClick={() => clickAggiungiElementoHandler(5)}>aggiungi elemento</button>
        </div>
    )

};

export default Main;