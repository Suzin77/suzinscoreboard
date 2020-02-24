import React, { Component } from 'react';

class AddPlayerForm extends Component {

    userInput = React.createRef();

    handleSubmit = (e) => {
        e.preventDefault();
        const newPlayerName = this.userInput.current.value;
        if(newPlayerName === ''){
            alert('dej imie, dej, formularz bez imienia nie przelezie!');
        } else {
            this.props.addPlayer(newPlayerName);
            this.userInput.current.value = '';
        }

    }

    render () {
      
        return (
            <form onSubmit={this.handleSubmit}> 
                <input
                type="text"
                ref={this.userInput}
                
                placeholder="Enter a player name"

                />
                <input 
                type="submit"
                value="Add Player"
                />
                
            </form>
        );
    }
}

export default AddPlayerForm;