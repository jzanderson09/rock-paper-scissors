import React, { Component } from 'react';
import rock from '../images/rock.jpg';
import paper from '../images/paper.jpg';
import scissors from '../images/scissors.jpg';
import '../styling/Game.scss';

import User from './User';
import Computer from './Computer';

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
            userChoice: {},
            play: false,
            winner: ''
        };
        this.userChoose = this.userChoose.bind(this);
        this.startPlay = this.startPlay.bind(this);
        this.announceWinner = this.announceWinner.bind(this);
    }

    componentDidMount() {
        const computerPick = Math.floor(Math.random() * 3);
        this.setState({
            computerChoice: {...this.state.choices[computerPick]}
        });
    }

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

    // Initates play boolean, evaluates/returns winner, then announces:
    startPlay() {
        const computer = this.state.computerChoice.name;
        const user = this.state.userChoice.name;
        const winner = evaluate(computer, user);
        this.announceWinner(winner);
    }

    // Sets state of winner and play, alerts user:
    announceWinner(winner) {
        const winningChoice = this.state.computerChoice.name;
        this.setState({ play: false, winner });
        if (winner === 'tie') {
            window.alert(`It's a tie!  Both players picked ${winningChoice}!`);
        }
        else {
            window.alert(`${winner} wins!`);
        }
    }

    render() {
        if (this.state.play) {
            return (
                <div className='game'>
                    <Computer 
                        choice={this.state.computerChoice} />
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
                    <Computer />
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