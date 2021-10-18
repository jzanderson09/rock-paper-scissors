import React from "react";

const User = props => {
    if (!props.play && props.matchOver) {
        return (
            <div className="player">
                <h3 className="banner">User!</h3>
            </div>
        );
    }
    else if (!props.play && !props.matchOver) {
        return (
            <div 
                className="player choices">
                <h3 className="banner">User!</h3>
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
            <div className="player">
                <h3 className="banner">User!</h3>
                <img 
                    className="choice-img"
                    src={props.userChoice.src}
                    alt="user choice"
                />
            </div>
        );
    }

};

export default User;