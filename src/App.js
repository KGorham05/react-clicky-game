import React, { Component } from 'react';
import heroes from "./heroes.json";
import Wrapper from "./components/Wrapper";
import Nav from "./components/Nav";
import Header from "./components/Header";
import GameBoard from "./components/GameBoard";
import Footer from "./components/Footer";
import Card from "./components/Card";


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

  gameOver = () => {
    // compare score to previous high score
    // if higher set current score to high score
    if (this.state.score > this.state.highScore) {
      this.setState({ highScore: this.state.score })
    }
    // set all heroes.clicked = false
    this.state.heroes.forEach(hero => hero.clicked = false)
    // alert or trigger modal game over
    alert(`Game Over :( \nFinal Score: ${this.state.score})`)
    // set score to 0 
    this.setState({ score: 0 });
    return true;
  }

  // function for when a card is clicked on
  clickCounter = id => {
    // identify which card was clicked
    this.state.heroes.find((obj, index) => {
      if (obj.id === id) {
        // check if it has been clicked on 
        if (heroes[index].clicked === false) {
          // mark it as clicked 
          heroes[index].clicked = true;
          // increment score
          this.setState({ score: this.state.score + 1 });
          //shuffle the array
          this.shuffle(heroes);
          return true;
        } else {
          this.gameOver();
        }
        
      }
      return true;
    });
  }

  render() {
    return (
      <Wrapper>
        <Nav score={this.state.score} highScore={this.state.highScore} />
        <Header />
        <GameBoard>
          {this.state.heroes.map(hero => (
            <Card
              clickCounter={this.clickCounter}
              id={hero.id}
              key={hero.name}
              image={hero.image}
            />
          ))}
        </GameBoard>
        <Footer />
      </Wrapper>
    )
  }
}

export default App;
