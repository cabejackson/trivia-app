import React, { Component, Link } from 'react';
import NavButton from "../NavButton/NavButton"

export default class Landing extends Component {
    render() {
        return (
            <div>
                <h1>WELCOME!!</h1>
                <button type="button" className="startQuiz" id="start__quiz">
                    <NavButton
                        tag={Link}
                        to="/game"
                        type="button"
                        className="NavButton__startQuiz"
                    />



                        START!</button>
            </div>
        )
    }
}
