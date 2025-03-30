import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    // Create State
    this.state = {
      userInfo: {
        name: "Dummy Name",
        location: "Dummy Location",
      },
    };
    console.log("Child- Constructor");
  }
  async componentDidMount() {
    //API Calls
    const data= await fetch("https://api.github.com/users/aravind-ganta");
    const json= await data.json();
    console.log(json);
    this.setState({
      userInfo:json
    })
    console.log("Child- componentDidMount");
  }
  componentDidUpdate(prevProps, prevState){
    console.log("Component Did Update");
  }
  componentWillUnmount(){
    console.log("ComponentWillUnmount");
  }
  render() {
    const { count } = this.state;
    console.log("Child- render");
    return (
      <div>
        <h1>Profile Class Component</h1>
        <img src={this.state.userInfo.avatar_url}/>
        <h2>Name:{this.state.userInfo.name}</h2>
        <h2>Location:{this.state.userInfo.location}</h2>
      </div>
    );
  }
}

export default Profile;
