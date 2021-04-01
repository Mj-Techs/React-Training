import React, { Component } from "react";

interface IProps {
  lastLogin: string;
}

export class UserInfo extends Component<IProps, any> {
  constructor(props: IProps) {
    super(props);
  }
  public state = {
    username: "",
    email: "",
  };
  componentDidMount() {
    const user = localStorage.getItem("userInfo");
    if (user) {
      const userInfo = JSON.parse(user);
      this.setState({ ...userInfo });
    } else {
      // call the service to get the data
      const responseFromService = {
        username: "training",
        email: "training@appKnit.io",
      };
      localStorage.setItem("userInfo", JSON.stringify(responseFromService));
      this.setState({ ...responseFromService });
    }
    console.log("am subscribing");
  }

  componentWillMount() {
    console.log("unSubscription");
  }

  render() {
    return (
      <div>
        <div>Username:{this.state.username}</div>
        <div>Email:{this.state.email}</div>
        <div>Date and Time of Login:{this.props.lastLogin} </div>
      </div>
    );
  }
}
