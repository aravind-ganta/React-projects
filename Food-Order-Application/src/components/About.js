import { Outlet } from "react-router-dom";
import FunctionalProfileComponent from "./Profile";
import Profile from "./ProfileClass";
import { Component } from "react";
import UserContext from "../utils/UserContext";
class About extends Component{
  constructor(props){
    super(props);
    
    // console.log("Parent- constructor");
  }
  componentDidMount(){
    // this.timer=setInterval(()=>{
    //   console.log("Hello")
    // },1000);
    // console.log("Parent- componentDidMount");
  }
  componentWillUnmount(){
    // clearInterval(this.timer);
    // console.log("ComponentWillUnmount");
  }
  render(){
    // console.log("Parent- render");
    return (
      <div>
        <h1>About Us Page</h1>
        <UserContext.Consumer>
          {({user})=><h4 className="font-bold text-xl p-10 ">{user.name}-{user.email}</h4>}
        </UserContext.Consumer>
        <p>This is the React Page</p>
        <FunctionalProfileComponent name={"Aravind"}/>
        <Profile name={"Aravind"}/>
      </div>
    );
  }
}
export default About;
