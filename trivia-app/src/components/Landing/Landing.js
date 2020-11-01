import React, { Component } from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import NavButton from "../NavButton/NavButton";
import "./Landing.css";


export default class Landing extends Component {
    render() {
        return (
            <div className="content-img-background" >
                <h1>CLICK THE <br />BUTTON TO BEGIN</h1>
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
