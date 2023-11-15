import React, { Component } from "react";
import './User.css';
import UserTable from "./UserTable";

class User extends Component {
    constructor(props) {
      super(props);
      this.state = { users: [] };
      this.myRef = React.createRef();
    }
    addUser = (event) => {
      event.preventDefault();
      let newUser = this.myRef.current.value;
      this.myRef.current.value = "";
      this.setState((state) => {
        return { users: state.users.concat(newUser) };
      });
    };
    deleteUser = (userIndex) => {
      // console.log(userIndex);
      this.setState((state) => {
        return {
          users: state.users.filter((user,index) => index !== userIndex)
        };
      });
    };
  
    render() {
      return (
        <div className="main">
          <form onSubmit={this.addUser}>
            <input ref={this.myRef} type="text" placeholder="Imie i nazwisko" /><br></br>
            <input ref={this.myRef} type="" placeholder="Wydarzenie" /><br></br>
            <input ref={this.myRef} type="text" placeholder="Miasto" />
            <input type="button" value="submit">wyslij</input>
         </form>
        </div>
      );
    }
  }
export default User;