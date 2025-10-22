import React, {useState} from 'react';

const Main = () => {

    const [n, setN] = useState(0);

    const clickHandler = () => {
        setN((prev) => prev + 1);
    }

    return (
        <>
            <label>{n}</label>
            <br />
            <button onClick={clickHandler}>Incrementa N</button>
        </>
    );
};

export default Main;