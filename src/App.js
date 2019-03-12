import React, { Component } from 'react';
import Todos from './Components/Todos';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        title: 'Wake up early',
        completed: false
      },
      {
        id: 2,
        title: 'Make nutritious breakfast',
        completed: false
      },
      {
        id: 3,
        title: 'Wash socks',
        completed: false
      }
    ]
  }
  render() {
    return (
      <div className="App">
      {/* take todos from state
          pass it to Todos component as a prop todos
          Q: how to access this from Todos components?
     */}
        <Todos todos={this.state.todos} />
      </div>
    );
  }
}

export default App;
