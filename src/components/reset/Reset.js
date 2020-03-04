import React from 'react';

function Reset ({myFunc2})  {
    const myHandler = (event) => {
        console.log('event');
        myFunc2()
    }
    return (
        <div>
            <button onClick={myHandler}>Reset</button>

        </div>
    );
};

export default Reset;