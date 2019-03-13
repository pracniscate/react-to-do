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
        completed: true
      },
      {
        id: 3,
        title: 'Wash socks',
        completed: false
      }
    ]
  }

markComplete = (id) => {
  // change the state 
  this.setState({ todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
    }
    return todo;
  }) });
}

// delete 
delTodo = (id) => {
  // spread operator ... copies items in array
  // filter out the element that needs to be deleted
  this.setState({ todos: [...this.state.todos.filter(todo => todo.id !== id)] });
}

  render() {
    return (
      <div className="App">
      {/* take todos from state
          pass it to Todos component as a prop todos
          Q: how to access this from Todos components?
     */}
        <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
      </div>
    );
  }
}

export default App;
