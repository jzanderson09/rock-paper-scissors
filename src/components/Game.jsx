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
        this.computerChoose = this.computerChoose.bind(this);
        this.determineMatchWinner = this.determineMatchWinner.bind(this);
        this.startPlay = this.startPlay.bind(this);
        this.userChoose = this.userChoose.bind(this);
    }

    componentDidMount() {
        const computerChoice = this.computerChoose();
        let maxRounds = 1;
        let result = window.prompt('How many rounds would you like to play?', 1);
        if (result === null) {
            result = 1;
        }
        maxRounds = result;
        console.log(maxRounds);
        this.setState({
            computerChoice,
            computerScore: 0,
            currentRound: 1,
            maxRounds: parseInt(maxRounds),
            play: false,
            userChoice: {},
            userScore: 0
        });
    }

    // If final round, determines/returns match winner.  If not, round is incremented:
    advanceRound() {
        if (this.state.currentRound >= this.state.maxRounds) {
            const winner = this.determineMatchWinner();
            if (winner === 'tie') {
                const tiedScore = this.state.computerScore;
                window.alert(`Both players tie the match with ${tiedScore} point(s)! Thank you for playing!`);
            }
            else {
                if (winner === 'computer') {
                    window.alert(`The ${winner} won the match with ${this.state.computerScore} point(s)!  Thank you for playing!`);
                }
                else if (winner === 'user') {
                    window.alert(`The ${winner} won the match with ${this.state.userScore} point(s)!  Thank you for playing!`);
                }
            }
            this.componentDidMount();
        }
        else {
            const nextComputerChoice = this.computerChoose();
            this.setState({
                currentRound: this.state.currentRound + 1,
                computerChoice: nextComputerChoice,
                play: false,
                userChoice: {}
            });
        }
    }

    // Returns random R/P/S choice:
    computerChoose() {
        const computerChoice = Math.floor(Math.random() * 3);
        return this.state.choices[computerChoice];
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
            window.alert(`It's a tie! Both players picked ${computer}!`);
        }
        else if (winner === 'computer') {
            window.alert(`The ${winner} won the round!`);
            this.setState({ computerScore: this.state.computerScore + 1 });
        }
        else {
            window.alert(`The ${winner} won the round!`);
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
            setTimeout(() => this.startPlay(), 2000);
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