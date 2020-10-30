import React, { Component, Route } from 'react';
import Game from "../Game/Game";
import Landing from "../Landing/Landing";
import ApiContext from "../../contexts/ApiContext";

//import Header from "../Header/Header";



export default class App extends Component {


  state = {
    score: 0
  }


  //handleUpdateScore


  renderMainRoutes() {
    return (
      <>
        <h2>hiii</h2>
        {/* <Route exact path="/" component={Landing} /> */}
        {/* <Route exact path="/game" component={Game} /> */}
      </>
    );
  }


  render() {
    const value = {
      test: 0
    }
    return (
      <ApiContext.Provider value={value}>

        <div className="App">
          <h1>Hi Caleb!</h1>
          {/* <header className="App__header">
          <Header />
        </header> */}
          <main className="App__main"> {this.renderMainRoutes()} </main>
        </div>
      </ApiContext.Provider>

    )
  }
}