import { requirePropFactory } from "@material-ui/core";
import React, { useState } from "react";
import  {BrowserRouter as Router, Switch, Route, Link} from "react-router-dom"

import NavItems from "./NavItems"

import Projects from "../Projects/Projects"
import Home from "../Home/Home"
import About from "../About/About"

//CSS File
import "./Nav.css"


export default function MainNav() {
  const [isClicked, setIsClicked] = useState(false);

  const handleClick = () => {
    setIsClicked(true);
  };

  return (
    <Router>
      <NavItems />
        <Route path="/about" component={About} />
        <Route path="/projects" component={Projects} />
        <Route path="/" exact component={Home} />
    </Router>
  );
}
