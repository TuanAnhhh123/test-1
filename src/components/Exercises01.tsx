import React, { Component } from 'react';

interface State {
  name: string;
}

class Exercises01 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      name: 'Nguyễn Tuấn Anh'
    };
  }

  render() {
    return (
      <div>
        <h1>Họ và tên : {this.state.name}</h1>
      </div>
    );
  }
}

export default Exercises01;
