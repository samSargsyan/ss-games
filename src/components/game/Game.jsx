import { useEffect, useState } from "react";
import "./game.scss";
import { Link } from "react-router-dom";

const Game = ({gif,image,title,category,other}) => {
    const [isHover,setIsHover] = useState(false);
    const [timer,setTimer] = useState();

    const hoverDelay = () => {
        setTimer(setTimeout(()=>{
            setIsHover(true);
        },500))
    }

    return(
        <Link to={`/${title}/${other ? 'other' : ''}`}>
            <div className="game">
                <div style={{backgroundImage: `url("${isHover ? gif : image}"`}} className="gameImage" 
                    onMouseEnter={hoverDelay} 
                    onMouseLeave={() => {setIsHover(false);clearTimeout(timer)}}>
                </div>
                <span className="title">{title}</span>
                <span className="category">{category}</span>
            </div>
        </Link>
    )
}

export default Game;