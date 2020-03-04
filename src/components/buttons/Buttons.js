import React, {useState} from 'react';

function Buttons  ({myFunc})  {

    const myHandler = (event) => {
        console.log('event');
        myFunc()
    }
    return (
        <div>
            <button onClick={myHandler}>ADD_1</button>
            {/*<button onClick={() = setCount(initialCount)}>Сбросить</button>*/}

        </div>
    );
};

export default Buttons;