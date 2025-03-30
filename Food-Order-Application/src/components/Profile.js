import { useEffect, useState } from "react";

const Profile = (props) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    // const timer = setInterval(() => {
    //   console.log("Hello");
    // }, 1000);
    console.log("useEffect");
    return () => {
    //   clearInterval(timer);
      console.log("useEffect Return");
    };
  }, []);
  console.log("render");
  return (
    <div>
      <h2>This is {props.name} Profile</h2>
      <h3>count:{count}</h3>
      <button
        onClick={() => {
          setCount(1);
          setCount2(2);
        }}
      >
        Count
      </button>
    </div>
  );
};

export default Profile;
