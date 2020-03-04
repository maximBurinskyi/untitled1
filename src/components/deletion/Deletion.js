import React from 'react';

function Deletion  ({myFunc3})  {

    const myHandler = (event) => {
        console.log('event');
        myFunc3()
    }
    return (
        <div>
            <button onClick={myHandler}>Deletion_1</button>

        </div>
    );
};

export default Deletion;