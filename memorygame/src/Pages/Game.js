import React, { Component } from "react";
import images from "../images.json"
import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Hero from "../components/Hero";
import Wrapper from "../components/Wrapper";


class Game extends Component {
  state = {
    images,
    score: 0,
    topScore: 0,
    message: "Click an image to begin!"
  };

  sortCards = array => {
    array.sort(() => Math.random() - 0.5);
    for (let i = 0; i < array.length; i++) {
      array[i].id = i;
  }
}

  componentDidMount() {
    let imageArr = this.state.images;
    this.sortCards(imageArr);
    this.setState({ images: imageArr })
  }

  handleBtnClick = id => {

    // const imageArr = this.state.images
    // const clickedImage = this.state.images.filter(player => player.id === id)
   
    // if(clickedImage[0].clicked){
    //   this.sortCards(imageArr);
    // }

    var imageArr = this.state.images;
    if (!this.state.images[id].clicked) {
      imageArr[id].clicked = true;
      this.sortCards(imageArr);
      if (this.state.score >= this.state.topScore)
        return this.setState({ 
          images: imageArr, 
          score: this.state.score + 1, 
          topScore: this.state.topScore + 1, 
          message: "You guessed correctly!" 
        })
    } else {
      imageArr.map(val => val.clicked = false);
      this.sortCards(imageArr);
      this.setState({ 
        images: imageArr, 
        score: 0, 
        message: "You guessed incorrectly" 
      })
    }
  }

  render() {
    return (
      <div>
        <Navbar
          score={this.state.score}
          topScore={this.state.topScore}
          message={this.state.message}
        />
        <Hero backgroundImage="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg">
          <h1>Memory Game!</h1>
          <h2>Click on an image to earn points, but don't click on any more than once!</h2>
        </Hero>
        <Wrapper>
            {this.state.images.map(image => (
              <Card
                id={image.id}
                key={image.id}
                clicked={image.clicked}
                image={image.image}
                onClick={() => this.handleBtnClick(image.id)}
              />
            ))}
          </Wrapper>
        </div>
    );
  }

}


export default Game; 