import React, { Component } from 'react';
import { data } from '../data/user';
import { UsersList } from './UsersList/UsersList';
import { Section } from './Section/Section';

export class App extends Component {
  state = {
    users: data,
  };

  deleteUser = userId => {
    this.setState(prevState => {
      return {
        users: prevState.users.filter(user => user.id !== userId),
      };
    });
  };

  changeStatus = userId => {
    this.setState(prevState => {
      return {
        users: prevState.users.map(user => {
          if (user.id === userId) {
            return { ...user, hasJob: !user.hasJob };
          } else {
            return user;
          }
        }),
      };
    });
  };

  render() {
    const { users } = this.state;
    return (
      <>
        <Section>
          <UsersList users={users} delUser={this.deleteUser} changeStatus={this.changeStatus} />
        </Section>
      </>
    );
  }
}
