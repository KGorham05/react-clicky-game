import React, { Component } from 'react';
import heroes from "../heroes.json"


class App extends Component {

  state = {
    heroes,
    score: 0,
    highScore: 0
  }


  shuffle = array => {
    var currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

      // Pick a remaining element...
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      // And swap it with the current element.
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
  }

  // function for when a card is clicked on
  clickCounter = id => {

  }

  gameOver = () => {

  }

  render() {
    return (
      // Here is where I render component units
      <Wrapper>
        <Nav score={this.state.score} highscore={this.state.highScore} />
        <GameBoard>
          {/* loop through and display the cards */}
          {this.state.heroes.map(hero => {
            <Card
              clickCounter={this.clickCounter}
              id={hero.id}
              key={hero.name}
              image={hero.image}
            />
          })}
        </GameBoard>
        <Footer />
      </Wrapper>



    );
  }
}

export default App;
