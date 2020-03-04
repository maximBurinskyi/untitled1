import React from 'react';

function Dellot  ({myFunc5})  {

    const myHandler = (event) => {
        console.log('event');
        myFunc5()
    }
    return (
        <div>
            <button onClick={myHandler}>Delete_100</button>

        </div>
    );
};

export default Dellot;