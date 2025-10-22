import React from 'react';
import axios from "axios";

const Main = () => {

    async function fetchUtenti() {
        await axios.get('http://localhost:9898/utenti.json').then((response) => {
            console.log(response);
        })
    }

    return (
        <>
            <button onClick={fetchUtenti}>chiamata http per recuperare utenti</button>
        </>
    )

};

export default Main;