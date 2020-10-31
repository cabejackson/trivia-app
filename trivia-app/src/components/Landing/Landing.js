import React, { Component } from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import NavButton from "../NavButton/NavButton";

export default class Landing extends Component {
    render() {
        return (
            <div>
                <h1>WELCOME!!</h1>
                <button className="start__quiz">
                    <NavButton
                        tag={Link}
                        to="/game"
                        type="button"
                        className="NavButton__startQuiz"
                    >
                        START GAME!
                    </NavButton>
                </button>
            </div>
        )
    }
}
