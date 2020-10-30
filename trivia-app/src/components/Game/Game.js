import React, { Component, Link } from 'react';
import NavButton from "../NavButton/NavButton";

export default class Game extends Component {



    render() {
        return (
            <div>
                <button type="button" className="startQuiz" id="start__quiz">
                    <NavButton
                        tag={Link}
                        to="/game"
                        type="button"
                        className="NavButton__startQuiz"
                    />



                        START!</button>
                <h2>this is text from Game</h2>
            </div>
        )
    }
}
