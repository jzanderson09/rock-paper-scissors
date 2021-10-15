import React, { Component } from 'react';
import rock from '../images/rock.jpg';
import paper from '../images/paper.jpg';
import scissors from '../images/scissors.jpg';
import '../styling/Game.scss';

import User from './User';
import Computer from './Computer';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choices: [
                { name: 'rock', src: rock },
                { name: 'paper', src: paper },
                { name: 'scissors', src: scissors }
            ],
            computerChoice: null,
            userChoice: null
        };
        this.userChoose = this.userChoose.bind(this);
    }

    componentDidMount() {
        const computerPick = Math.floor(Math.random() * 3);
        this.setState({
            computerChoice: this.state.choices[computerPick]
        });
    }

    userChoose(choiceIndex) {
        console.log(choiceIndex);
        const choice = this.state.choices[choiceIndex];
        console.log(choice);
        this.setState({ userChoice: choice });
    }

    render() {
        return (
            <div className='game'>
                <Computer choice={this.state.computerChoice} />
                <User 
                    userChoice={this.state.userChoice}
                    userChoose={this.userChoose} />
            </div>
        );
    }
}

export default Game;