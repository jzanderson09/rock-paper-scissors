import React, { Component } from 'react';
import rock from '../images/rock.jpg';
import paper from '../images/paper.jpg';
import scissors from '../images/scissors.jpg';
import User from './User';
import Computer from './Computer';

class Game extends Component {
    constructor(props) {
        super(props);
        this.state = {
            choiceImgs: []
        };
    }

    componentDidMount() {
        this.setState({ choiceImgs: [rock, paper, scissors] });
    }

    render() {
        return (
            <div className='game'>
                <Computer />
                <User />
            </div>
        );
    }
}

export default Game;