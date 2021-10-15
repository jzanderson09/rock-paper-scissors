import React from 'react';

const Computer = props => {
    if (props.choice) {
        return (
            <div className='player computer'>
                <h3>Computer!</h3>
                <img 
                    src={props.choice.src} 
                    alt={`computer: ${props.choice.name}`} />
            </div>
        );
    }
    else {
        return (
            <div className='player computer'>
                <p>Loading...</p>
            </div>
        );
    }
};

export default Computer;