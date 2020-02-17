import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./pages/Game";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";



function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Wrapper>
          <Route exact path="/" component={Game} />
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;