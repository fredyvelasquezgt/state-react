import React, { Component } from 'react';

class Game extends Componente {
    constructor(props) {
        super(props);
        this.state = {
            score: 99,
            gameOver: false
        };

        this.state.score = 99
    }
    render() {
        return (
            <div>
                <h1>Your Score is: {this.state.score}</h1>
            </div>
        )
    }
}

export default Game;