import duck from "./assets/images/duckGame.jpg";
import doodle from "./assets/images/doodleJump.jpg";
import arkanoid from "./assets/images/arkanoid.jpg";
import ninja from "./assets/images/fruitNinja.png";
import millionare from "./assets/images/whoMillionare.jpg";
import pacman from "./assets/images/pacman.jpg";
import duckGif from './assets/images/ezgif.com-gif-maker.gif';
import dooleGif from './assets/images/doodle-gif.gif';
import millionareGif from './assets/images/millionaire.gif';
import pacmanGIF from './assets/images/pacman.gif';
import fruitGIF from './assets/images/fruit.gif';
import arkanoidGIF from './assets/images/arkanoid.gif';
import flappy from './assets/images/flappyBird.jpg';
import flappyGIF from './assets/images/flappyGif.gif';


const data = [
    {
        image: duck,
        title: "Duck game!",
        desc: "This is a game about a duck, you need to jump over her babies.",
        category: "Adventure",
        link: <iframe src="https://scratch.mit.edu/projects/528541047/embed" allowtransparency="true" width="80%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        gif: duckGif,
    },
    {
        image: doodle,
        title: "Doodle Jump!",
        desc: "Doodle Jump, try getting as high as possible surpassing different obstacles and all.",
        category: "Platform game",
        link: <iframe src="https://scratch.mit.edu/projects/627622909/embed" allowtransparency="true" width="80%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        gif: dooleGif,
    },
    {
        image: arkanoid,
        title: "Arkanoid",
        desc: "Try getting as much as points as you can with this prediction game!",
        category: "Arcade",
        link: <iframe src="https://scratch.mit.edu/projects/624477981/embed" allowtransparency="true" width="80%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        gif: arkanoidGIF,
    },
    {
        image: ninja,
        title: "Fruit Ninja",
        desc: "Show your amazing ninja slicing skills and score as high as possible and dont explode!",
        category: "Arcade",
        link: <iframe src="https://scratch.mit.edu/projects/623978461/embed" allowtransparency="true" width="80%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        gif: fruitGIF
    },
    {
        image: millionare,
        title: "Who Wants to be a Millionare!",
        desc: "Do you have the mind to beat all the questions and win yourself a prize of 1M Dollars?",
        category: "Intellectual",
        link: <iframe src="https://scratch.mit.edu/projects/611418579/embed" allowtransparency="true" width="80%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        gif: millionareGif,
    },
    {
        image: pacman,
        title: "Pacman",
        desc: "Do you have what it takes to outrun the ghosts and beat the game by eating all points?",
        category: "Puzzle",
        link: <iframe src="https://scratch.mit.edu/projects/638231412/embed" allowtransparency="true" width="80%" height="600px" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        gif: pacmanGIF,
    },
    {
        image: flappy,
        title:"Flappy Bird",
        desc: "Challenge yourself and see how long you can make Flappy survive!",
        category: "Adventure",
        link: <iframe src="https://scratch.mit.edu/projects/864146404/embed" allowtransparency="true" width="485" height="402" frameborder="0" scrolling="no" allowfullscreen></iframe>,
        gif: flappyGIF,
    },
]

export default data;