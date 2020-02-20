import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./Pages/Game.js";

function App(){
  return (
       <Router>
        <Route exact path="/" component={Game} />
        </Router>
  );
};


export default App;
