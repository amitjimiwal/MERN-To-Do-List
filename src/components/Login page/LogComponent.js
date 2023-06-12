import { useState } from "react";
import Login from "./Login";
import Register from "./Register";
const LogComponent = () => {
  // for login or register component
  const [newuser, setnewUser] = useState(false);
  // go to login or register page
  const toggleuser = () => {
    setnewUser(!newuser);
  };
  return (
    <div className="w-100 h-100">
      <h1 className="text-center mt-4">Welcome to TodoWeb</h1>
      {newuser ? (
        <Register toggle={toggleuser} />
      ) : (
        <Login toggle={toggleuser} />
      )}
    </div>
  );
};

export default LogComponent;
