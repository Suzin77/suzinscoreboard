import React from 'react';
import './App.css';
import Header from './components/Header';
import Player from './components/Player';
import AddPlayerForm from './components/AddPlayerForm';

class App extends React.Component{
  
  state = {
    players: [
      {
        name3: "Dominik",
        score5: 0,
        id: 1
      },
      {
        name3: "Patryk",
        score5: 0,
         id: 2
      },
      {
        name3: "Agata",
        score5: 0,
        id: 3
      },
      {
        name3: "Irina",
        score5: 0,
        id: 4
      }
    ]
  };

     
  // handleScoreChange = (index, delta) => {
   
  //   this.setState( previousState => {
  //     return {
  //       score5: previousState.players[index].score5 += delta
  //     }
  //   }); 
    
     
  //  }

  prevPlayerId = 4;

   handleScoreChange = (index, delta) => {
    this.setState( prevState => {
      // New 'players' array – a copy of the previous `players` state
      const updatedPlayers = [ ...prevState.players ];
      // A copy of the player object we're targeting
      const updatedPlayer = { ...updatedPlayers[index] };

      // Update the target player's score
      updatedPlayer.score5 += delta;
      // Update the 'players' array with the target player's latest score
      updatedPlayers[index] = updatedPlayer;

      // Update the `players` state without mutating the original state
      return {
        players: updatedPlayers
      };
    });
  }

  handleAddPlayer = (name) => {
    this.setState( (prevState) => {
      return {
        players: [
          ...prevState.players,
          {
            name3: name,
            score5: 0,
            id: this.prevPlayerId += 1
          }
        ]
      }
    }); 
  }


  handleRemovePlayer = (id) => {
      this.setState( previousState => {
        return {
        players: previousState.players.filter( player => player.id !== id )
        };
      });
    }
  
  
  render () {
    return (
   <div className="scoreboard">
      <Header 
      title="LadderBoard" 
      players1={this.state.players}
      />

    
    {this.state.players.map( (user, index) => 
   
    
    <Player 
    name1={user.name3}
    score2={user.score5}
    key={user.id.toString()}
    changeScore1={this.handleScoreChange}
    index={index}
    removePlayer={this.handleRemovePlayer}
    id={user.id}
    />
   
    )}
  
    <AddPlayerForm addPlayer={this.handleAddPlayer}/>
    </div>
  );
  }
}


export default App;


//        another example of handling event handlers in classes
//      <button className="counter-action increment" onClick={() => {this.incrementScore()}} >+</button>
//       another example is using bind on the method in the event handler 
//         <button className="counter-action increment" onClick={this.incrementScore.bind(this)} >+</button>