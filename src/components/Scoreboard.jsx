import React from 'react';

const Scoreboard = props => {
    return (
        <div className="scoreboard">
            <h3>Current Round: {props.currentRound}</h3>
            <h3>Number of Rounds: {props.maxRounds}</h3>
            <h3>Computer: {props.computerScore}</h3>
            <h3>User: {props.userScore}</h3>
        </div>
    );
};

export default Scoreboard;