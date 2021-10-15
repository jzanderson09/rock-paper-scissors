import React from 'react';

const Computer = props => {
    if (props.choice) {
        return (
            <div className='computer'>
                <h3>Computer!</h3>
                <img 
                    id='computer-choice'
                    src={props.choice} 
                    alt='computer choice' />
            </div>
        );
    }
    else {
        return (
            <div className='loading'>
                <p>Loading...</p>
            </div>
        );
    }
};

export default Computer;