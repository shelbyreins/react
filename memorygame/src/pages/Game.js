import React from "react";
import Hero from "../components/Hero";
import Card from "../components/Card"

function Game() {
    return (
        <div>
            <Hero backgroundImage="https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/articles/health_tools/12_powerhouse_vegetables_slideshow/intro_cream_of_crop.jpg">
                <h1>Memory Game!</h1>
                <h2>Click on an image to earn points, but don't click on any more than once!</h2>
            </Hero>
            <Card>
                
            </Card>
        </div>
    );
}



export default Game;