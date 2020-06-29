import React, { Component } from 'react';

export default class index extends Component {
  state = {
    count: 0,
  };

  render() {
    console.log('in contact');
    const { count } = this.state;
    return (
      <div>
        <h1>Contact count: {count}</h1>
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
