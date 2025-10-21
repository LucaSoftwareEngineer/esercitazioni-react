import React from "react";
import Padre from "./Padre";

const Figlio = () => {
    return (
        <div>
            Questo è il componente figlio
            <br />
            <Padre />
        </div>
    );
}

export default Figlio;