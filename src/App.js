import React, { Component } from "react";
import FriendCard from "./components/FriendCard";
import Wrapper from "./components/Wrapper";
import Title from "./components/Title";
import friends from "./friends.json";

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    friends,
    score: 0,
    topscore: 0,
    message : "Game Start!!!"
  };

  shuffleCard = id => {
    const friends = this.state.friends.map(friend => {

      if (friend.id === id) {
        //increase score by 1 if not matched
        // console.log(friend.name + " " + friend.clicked)
        if (friend.clicked === false) {
          // console.log(friend.name + " " + friend.clicked)
          this.setState({ 
            score: this.state.score + 1,
            message: "You guessed correctly!"
          });
          
          if (this.state.score >= this.state.topscore){
          this.setState({ topscore: this.state.topscore + 1});
          }
          // console.log(friend.name)
          //change the boolean clicked to true if had clicked
          friend.clicked = true;
        } else {
          //You loss if click the same image
          // alert("You loss")
          const initial = this.state.friends.map(friend => {
            friend.clicked = false;
            return friend;
          })
          this.setState({
            initial,
            score: 0,
            message: "You guessed incorrectly!"
          });
        }
      }

      // console.log(friend)
      return friend
    })
    //randomly shuffle friends 
    friends.sort(() => 0.5 - Math.random())
    this.setState({ friends });
  }

  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <Wrapper>
        <Title
          score={this.state.score}
          topscore={this.state.topscore}
          shuffleCard={this.shuffleCard}
          message={this.state.message}
        >Clicky Game</Title>
        {this.state.friends.map(friend => (
          <FriendCard
            shuffleCard={this.shuffleCard}
            id={friend.id}
            clicked={friend.clicked}
            key={friend.id}
            name={friend.name}
            image={friend.image}
            realname={friend.realname}
            actor={friend.actor}
          />
        ))}
      </Wrapper>
    );
  }
}

export default App;
