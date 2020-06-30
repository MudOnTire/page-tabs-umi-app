import React, { Component } from 'react';

export default class Contact extends Component {
  state = {
    count: 0,
  };

  render() {
    const { count } = this.state;
    return (
      <div style={{ padding: 20 }}>
        <h1>Contact me if you need me.. 😄</h1>
        <h1>Count2: {count}</h1>
        <button
          onClick={() => {
            this.setState(state => {
              return { count: state.count + 1 };
            });
          }}
        >
          Add
        </button>
      </div>
    );
  }
}
