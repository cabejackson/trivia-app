import React, { Component } from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import NavButton from "../NavButton/NavButton";

export default class Game extends Component {



    render() {
        return (
            <div>
                <h1>SELECT ANSWER</h1>



                {/* btn takes user to next question */}
                <button type="button" className="startQuiz" id="start__quiz">
                    <NavButton
                        tag={Link}
                        to="/game"
                        type="button"
                        className="NavButton__startQuiz"
                    />
                        Next Question!</button>
                <h2>this is text from Game</h2>
            </div>
        )
    }
}
