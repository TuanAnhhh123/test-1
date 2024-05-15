import React, { Component } from 'react';

interface User {
  id: number;
  name: string;
  address: string;
}

interface Exercises01State {
  myName: string;
  users: User[];
}

class Exercises01 extends Component<{}, Exercises01State> {
  constructor(props: {}) {
    super(props);

    this.state = {
      myName: 'Nguyễn Tuấn Anh', 
      users: [
        { id: 1, name: 'Minh Tinh', address: 'HCM' },
        { id: 2, name: 'Thu Hằng', address: 'HP' },
        { id: 3, name: 'Tha Thu', address: 'HN' },
      ]
    };
  }

  render() {
    return (
      <div>
        <h1>Họ và Tên : {this.state.myName}</h1>
        <h2>User List:</h2>
        <ul>
          {this.state.users.map((user,index) => (
            <li key={index}>
              <p>ID: {user.id}</p>
              <p>Name: {user.name}</p>
              <p>Address: {user.address}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Exercises01;
