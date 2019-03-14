import React, { Component } from 'react'

export class AddTodo extends Component {
  // state for the input field
  state = {
    title: ''
  }

  // set the state to what user types in
  onChange = (e) => this.setState({ title: e.target.value });

  render() {
    return (
      <form style={{ display: 'flex' }}>
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

export default AddTodo
