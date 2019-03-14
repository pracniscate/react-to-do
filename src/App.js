import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/layout/Header'
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/pages/About';
// to generate a random id
import uuid from 'uuid';

import './App.css';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(),
        title: 'Wake up early',
        completed: false
      },
      {
        id: uuid.v4(),
        title: 'Make nutritious breakfast',
        completed: true
      },
      {
        id: uuid.v4(),
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

// add new to-do
addTodo = (title) => {
  const newTodo = {
    id: uuid.v4(),
    title,
    completed: false 
  }
  // add the new to-do to the state
  this.setState({ todos: [...this.state.todos, newTodo] })
}

  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo} />
                {/* take todos from state
                    pass it to Todos component as a prop todos
                    Q: how to access this from Todos components?
                */}
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo} />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
