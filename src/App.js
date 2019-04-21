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
    // identify which card was clicked
    this.state.heroes.find((obj, index) => {
      if (obj.id === id) {
        // check if it has been clicked on 
        if (heroes[i].clicked === false) {
          // mark it as clicked 
          heroes[i].clicked = true;
          // increment score
          this.setState({score: this.state.score + 1});
          //shuffle the array
          shuffle(heroes);

        }
      }
    })
  }

  gameOver = () => {

  }

  render() {
    return (
      // Here is where I render component units
      <Wrapper>
        <Nav score={this.state.score} highScore={this.state.highScore} />
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
