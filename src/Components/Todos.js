import React, { Component } from 'react';

class Todos extends Component {
  render() {
    // from the state in App.js
    console.log(this.props.todos);
    
    return (
      <div>
        <h1>Todos</h1>
      </div>
    );
  }
}

export default Todos;
