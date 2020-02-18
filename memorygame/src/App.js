import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
import Hero from "./components/Hero";
import Card from "./components/Card";
import images from "./images.json";

class App extends Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

sortCards = array =>{
  array.sort(() => Math.random() - 0.5);
  for(let i = 0; i < array.length; i++){
    array[i].id = i;
  }
}

componentDidMount() {
  let imageArr = this.state.images;
  this.sortCards(imageArr);
  this.newState({images:imageArr})
}

handleBtnClick = id =>{
  let imageArr = this.state.images;
  if(!this.state.images[id].clicked){
    this.sortCards(imageArr);
    if (this.state.score >= this.state.highScore) 
    return this.newState({images: imageArr, score: this.state.score +1, topScore: this.state.topScore +1, message: "You guessed correctly!" })
  }else{
    imageArr.map(val => val.clicked = false);
    this.sortCards(imageArr);
    this.newState({images: imageArr, score: 0, message: "You guessed incorrectly"})
  }
}


render(){
  return (
    <Router>
      <div>
        <Navbar 
        score={this.state.score}
        topScore={this.state.topScore}
        message={this.state.message}
        />
        <Wrapper>
          <Route exact path="/" component={App} />
          <Hero backgroundImage="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg">
            <h1>Memory Game!</h1>
            <h2>Click on an image to earn points, but don't click on any more than once!</h2>
          </Hero>

          {this.state.images.map(image => (
            <Card
              id={image.id}
              clicked={image.clicked}
              image={image.image}
              onClick={() => this.clickHandler(image.id)}
            />

          ))};

        </Wrapper>
      </div>
    </Router>
  );
};
};

export default App;
