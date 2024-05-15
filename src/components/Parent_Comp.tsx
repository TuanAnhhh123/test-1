import React, { Component } from 'react';
import Children_Comp from './Children_Comp'; 

interface ParentState {
  myName: string;
}

class Parent_Comp extends Component<{}, ParentState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      myName: 'Nguyễn Văn Nam'
    };
  }

  render() {
    return (
      <div>
        <h1>Parent Component</h1>
        <Children_Comp name={this.state.myName} />
      </div>
    );
  }
}

export default Parent_Comp;
