import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class AddTodo extends Component {
  // state for the input field
  state = {
    title: ''
  }

  onSubmit = (e) => {
    // prevent the form from submitting data to an actual file
    e.preventDefault();
    // add a title
    this.props.addTodo(this.state.title);
    // clear the field after submit
    this.setState({ title: '' });
  }

  // set the state to what user types in
  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <form onSubmit={this.onSubmit} style={{ display: 'flex' }}>
        <input 
          type="text" 
          name="title" 
          style={{ flex: '10', padding: '5px' }}
          placeholder="Add Todo" 
          value={this.state.title}
          onChange={this.onChange}
        />
        <input 
          type="submit" 
          value="Submit" 
          className="btn"
          style={{ flex: '1' }}
        />
      </form>
    )
  }
}

// PropTypes
AddTodo.propTypes = {
  addTodo: PropTypes.func.isRequired
}

export default AddTodo
