import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
  render() {
    // from the state in App.js
    // array of Todos
    // console.log(this.props.todos);
    
    // loop through the array of Todos & output something (JSX)
    // return something for each todo
    return this.props.todos.map((todo) => (
      <TodoItem key={todo.id} todo={todo} markComplete={this.props.markComplete} />
    ));
  }
}

// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired
}

export default Todos;
