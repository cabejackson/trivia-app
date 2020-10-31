import React from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import "./Header.css";


const Header = () => {
    return (
        <>
            <nav>
                <h1 className="welcome">Lets Play Trivia !</h1>

                <ul className="navBar__ul">
                    <li>
                        <Link to="/" > START HERE </Link>
                    </li>

                    <li>
                        <Link to="/about" > ABOUT THE DEV </Link>
                    </li>


                </ul>
            </nav>
        </>
    )
}

export default Header
