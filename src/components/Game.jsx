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
            choiceImgs: [],
            computerChoice: null
        };
    }

    componentDidMount() {
        this.setState({ 
            choiceImgs: [rock, paper, scissors],
            computerChoice: Math.floor(Math.random() * 3)
        });
    }

    render() {
        return (
            <div className='game'>
                <Computer choice={this.state.choiceImgs[this.state.computerChoice]} />
                <User />
            </div>
        );
    }
}

export default Game;