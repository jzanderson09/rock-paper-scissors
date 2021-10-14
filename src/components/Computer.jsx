import React, { useState } from 'react';

const Computer = () => {
    const choice = Math.floor(Math.random() * 3) + 1;
    return (
        <div className='computer'>
            <h3>Computer!</h3>
            <p>{choice}</p>
        </div>
    );
};

export default Computer;