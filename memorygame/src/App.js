import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Game from "./pages/Game";
import Navbar from "./components/Navbar";
// import  from "./components/";
// import  from "./components/";


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        {/* <Wrapper> */}
          <Route exact path="/" component={Game} />
        {/* </Wrapper>
        <Footer /> */}
      </div>
    </Router>
  );
}

export default App;