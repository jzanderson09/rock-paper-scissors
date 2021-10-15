import React from 'react';

const Computer = props => {
    if (props.choice) {
        return (
            <div className='player'>
                <h3>Computer!</h3>
                <img
                    src={props.choice.src} 
                    alt='computer choice' />
            </div>
        );
    }
    else {
        return (
            <div className='player'>
                <h3>Computer!</h3>
                <p>Loading...</p>
            </div>
        );
    }
};

export default Computer;