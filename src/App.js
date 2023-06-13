import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Todo from "./pages/Todo";
import './App.css'
const App = () => {
  const [isloggedin, setIsLoggedIn] = useState(true);
  return <div className="w-100 vh-100">{isloggedin ? <Todo /> : <Home />}</div>;
};

export default App;
