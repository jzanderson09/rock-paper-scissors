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
            choices: [ ],
            computerChoice: { },
            userChoice: { }
        };
        this.advanceRound = this.advanceRound.bind(this);
        this.computerChoose = this.computerChoose.bind(this);
        this.determineMatchWinner = this.determineMatchWinner.bind(this);
        this.finishMatch = this.finishMatch.bind(this);
        this.setStartValues = this.setStartValues.bind(this);
        this.startNewMatch = this.startNewMatch.bind(this);
        this.startPlay = this.startPlay.bind(this);
        this.updateScores = this.updateScores.bind(this);
        this.userChoose = this.userChoose.bind(this);
    }

    componentDidMount() {
        this.setStartValues();
    }

    // 5) If final round, determines/alerts match winner and resets values.  If not, round is incremented:
    advanceRound() {
        if (this.state.currentRound >= this.state.maxRounds) {
            this.finishMatch();
            this.setStartValues();
        }
        else {
            this.setState({
                computerChoice: {},
                currentRound: this.state.currentRound + 1,
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

    // 6) Determines match winner and alerts user:
    finishMatch() {
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
                window.alert(`You won the match with ${this.state.userScore} point(s)!  Thank you for playing!`);
            }
        }
        this.componentDidMount();
    }

    // 1)/7) Sets values for start of new round:
    setStartValues() {
        this.setState({
            choices: [
                { name: 'rock', src: rock },
                { name: 'paper', src: paper },
                { name: 'scissors', src: scissors }
            ],
            computerChoice: { },
            computerScore: 0,
            currentRound: 0,
            matchOver: true,
            maxRounds: 1,
            play: false,
            userChoice: {},
            userScore: 0
        });
    }

    // 2) Picks random computer choice, initializes values and picks x amount of rounds (optional user specified):
    startNewMatch() {
        let maxRounds = 1;
        let result;
        do {
            result = parseInt(window.prompt(`How many rounds would you like to play? --> Must be a number!`, 1));
            if (result === null) {
                result = 1;
            }
        } while ( (result === null) || isNaN(result));
        maxRounds = result;
        this.setState({
            currentRound: 1,
            matchOver: false,
            maxRounds
        });
    }

    // 3) Evalutes winner, alerts user, increments round:
    startPlay() {
        const computer = this.state.computerChoice.name;
        const user = this.state.userChoice.name;
        const winner = evaluate(computer, user);
        this.updateScores(winner);
        this.advanceRound();
    }

    // 4) Updates scores of roundWinner in state:
    updateScores(roundWinner) {
        if (roundWinner === 'tie') {
            window.alert(`It's a tie! Both players picked ${this.state.computerChoice.name}!`);
        }
        else if (roundWinner === 'computer') {
            window.alert(`The ${roundWinner} won the round!`);
            this.setState({ 
                computerScore: this.state.computerScore + 1
            });
        }
        else {
            window.alert('You won the round!');
            this.setState({ 
                userScore: this.state.userScore + 1
            });
        }
    }

    // 2) Assigns choice to user, starts gameplay:
    userChoose(choiceIndex) {
        const choice = this.state.choices[choiceIndex];
        if (window.confirm(`Are you sure you want to pick ${choice.name}?`)) {
            const computerChoice = this.computerChoose();
            this.setState({ 
                userChoice: choice,
                computerChoice,
                play: true,
                matchOver: false
            });
            this.timerHandle = setTimeout(() => this.startPlay(), 2000);
        }
    }

    componentWillUnmount() {
        clearTimeout(this.timerHandle);
    }

    render() {
        if (!this.state.play && this.state.matchOver) {
            return (
                <div className='game'>
                    <Scoreboard 
                        computerScore={this.state.computerScore}
                        currentRound={this.state.currentRound}
                        maxRounds={this.state.maxRounds}
                        userScore={this.state.userScore} />
                    <Computer 
                        play={this.state.play}
                        matchOver={this.state.matchOver} />
                    <User 
                        matchOver={this.state.matchOver}
                        play={this.state.play}
                        userChoice={this.state.userChoice} />
                    <div className="button-div">
                        <button className="next-match" 
                        onClick={() => this.startNewMatch()}>Play</button>
                    </div>
                </div>
            );
        }
        else if (!this.state.play && !this.state.matchOver) {
            return (
                <div className='game'>
                    <Scoreboard 
                        computerScore={this.state.computerScore}
                        currentRound={this.state.currentRound}
                        maxRounds={this.state.maxRounds}
                        userScore={this.state.userScore} />
                    <Computer 
                        play={this.state.play} 
                        matchOver={this.state.matchOver} />
                    <User 
                        matchOver={this.state.matchOver}
                        play={this.state.play}
                        userChoice={this.state.userChoice}
                        userChoose={this.userChoose} />
                    <div className="button-div">

                    </div>
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
                    <Computer 
                        choice={this.state.computerChoice}
                        matchOver={this.state.matchOver}
                        play={this.state.play} />
                    <User 
                        matchOver={this.state.matchOver}
                        play={this.state.play}
                        userChoice={this.state.userChoice} />
                    <div className="button-div">

                    </div>
                </div>
            );
        }
    }
}

export default Game;