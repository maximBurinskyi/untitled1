import React from 'react';

function Addlot  ({myFunc4})  {

    const myHandler = (event) => {
        console.log('event');
        myFunc4()
    }
    return (
        <div>
            <button onClick={myHandler}>Add_100</button>

        </div>
    );
};

export default Addlot;