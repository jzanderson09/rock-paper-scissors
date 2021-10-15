import React, { Component } from 'react';
import rock from '../images/rock.jpg';
import paper from '../images/paper.jpg';
import scissors from '../images/scissors.jpg';
import '../styling/Game.scss';

//Components:
import Computer from './Computer';
import Scoreboard from './Scoreboard';
import User from './User';

import { evaluate } from '../calculations.js';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: [
                { name: 'rock', src: rock },
                { name: 'paper', src: paper },
                { name: 'scissors', src: scissors }
            ],
            computerChoice: {},
            computerScore: 0,
            currentRound: 1,
            maxRounds: 1,
            play: false,
            userChoice: {},
            userScore: 0,
            winner: ''
        };
        this.advanceRound = this.advanceRound.bind(this);
        this.determineMatchWinner = this.determineMatchWinner.bind(this);
        this.startPlay = this.startPlay.bind(this);
        this.userChoose = this.userChoose.bind(this);
    }

    componentDidMount() {
        const computerPick = Math.floor(Math.random() * 3);
        this.setState({
            computerChoice: {...this.state.choices[computerPick]},
            computerScore: 0,
            currentRound: 1,
            play: false,
        });
    }

    // If final round, determines/returns match winner.  If not, round is incremented:
    advanceRound() {
        if (this.state.currentRound === this.state.maxRounds) {
            const matchWinner = this.determineMatchWinner();
            window.alert(`Match Winner: ${matchWinner.toLocaleUpperCase()}  Thanks for playing!`);
            this.setState({ 
                computerChoice: {},
                computerScore: 0,
                currentRound: 1,
                userChoice: {},
                userScore: 0
            });
            this.componentDidMount();
        }
        else {
            this.setState({ currentRound: this.state.currentRound + 1 });
        }
    }

    // Determines and returns match winner upon final round:
    determineMatchWinner() {
        const computer = this.state.computerScore;
        const user = this.state.userScore;
        if (computer > user) {
            return 'computer';
        }
        else if (computer < user) {
            return 'user';
        }
        else {
            return 'tie';
        }
    }

    // Evalutes winner, alerts user, increments round:
    startPlay() {
        const computer = this.state.computerChoice.name;
        const user = this.state.userChoice.name;
        const winner = evaluate(computer, user);
        if (winner === 'tie') {
            window.alert(`It's a tie! Both players picked ${computer}`);
        }
        else if (winner === 'computer') {
            this.setState({ computerScore: this.state.computerScore + 1 });
        }
        else {
            this.setState({ userScore: this.state.userScore + 1 });
        }
        this.advanceRound();
    }

    // Assigns choice to user, starts gameplay:
    userChoose(choiceIndex) {
        const choice = this.state.choices[choiceIndex];
        if (window.confirm(`Are you sure you want to pick ${choice.name}?`)) {
            this.setState({ 
                userChoice: {...choice},
                play: true
            });
            setTimeout(() => this.startPlay(), 2500);
        }
    }

    render() {
        if (this.state.play) {
            return (
                <div className='game'>
                    <Scoreboard 
                        computerScore={this.state.computerScore}
                        currentRound={this.state.currentRound}
                        maxRounds={this.state.maxRounds}
                        userScore={this.state.userScore} />
                    <Computer 
                        choice={this.state.computerChoice}
                        play={this.state.play} />
                    <User 
                        userChoice={this.state.userChoice}
                        userChoose={this.userChoose}
                        play={this.state.play} />
                </div>
            );
        }
        else {
            return (
                <div className='game'>
                    <Scoreboard 
                        computerScore={this.state.computerScore}
                        currentRound={this.state.currentRound}
                        maxRounds={this.state.maxRounds}
                        userScore={this.state.userScore} />
                    <Computer play={this.state.play} />
                    <User 
                        userChoice={this.state.userChoice}
                        userChoose={this.userChoose}
                        play={this.state.play} />
                </div>
            );
        }
    }
}

export default Game;