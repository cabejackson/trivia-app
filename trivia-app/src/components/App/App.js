import React, { Component } from 'react';
import { Route, Link, Redirect } from "react-router-dom";
import Game from "../Game/Game";
import Landing from "../Landing/Landing";
import ApiContext from "../../contexts/ApiContext";
import Header from "../Header/Header";
import Trivia from "../Questions/Questions";


export default class App extends Component {


  state = {
    score: 0
  }


  //handleUpdateScore


  renderMainRoutes() {
    return (
      <>
        <Route exact path="/" component={Landing} />
        {/* <Route exact path="/game" component={Game} /> */}
        <Route exact path="/game" component={Trivia} />
      </>
    );
  }


  render() {
    const value = {
      test: 0
    }
    return (
      <div className="all">
        <ApiContext.Provider value={value}>

          <div className="App">
            <header className="App__header">
              <Header />
            </header>
            <main className="App__main"> {this.renderMainRoutes()} </main>
          </div>
        </ApiContext.Provider>
      </div>

    )
  }
}