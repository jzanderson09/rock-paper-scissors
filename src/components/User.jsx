import React from 'react';

const User = props => {
    if (props.userChoice === null) {
        return (
            <div className='player user'>
                <h3>User!</h3>
                <input 
                    className="choice-btn"
                    onClick={() => props.userChoose(0)}
                    type="submit"
                    value="Rock" />
                <input 
                    className="choice-btn"
                    onClick={() => props.userChoose(1)}
                    type="submit"
                    value="Paper" />
                <input 
                    className="choice-btn"
                    onClick={() => props.userChoose(2)}
                    type="submit"
                    value="Scissors" />
            </div>
        );
    }
    else {
        return (
            <div className='player'>
                <h3>User!</h3>
                <img 
                    src={props.userChoice.src} 
                    alt={`user: ${props.userChoice.name}`} />
            </div>
        );
    }

};

export default User;