import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './Components/layout/Header'
import Todos from './Components/Todos';
import AddTodo from './Components/AddTodo';
import About from './Components/pages/About';
// to generate a random id
// import uuid from 'uuid';
import axios from 'axios';

import './App.css';

class App extends Component {
  state = {
    todos: []
  }

  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=10')
      .then(res => this.setState({ todos: res.data }))
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
    axios.post('https://jsonplaceholder.typicode.com/todos',
    { title,
      completed: false
    })
    // add the new to-do to the state
      .then(res => this.setState({ todos: [...this.state.todos, res.data] }));
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
