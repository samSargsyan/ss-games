import { useState } from "react";
import "./game.scss";
import { Link } from "react-router-dom";

const Game = ({gif,image,title,category}) => {
    const [isHover,setIsHover] = useState(false);

    return(
        <Link to={`/${title}`}>
            <div className="game">
                <div style={{backgroundImage: `url("${isHover ? gif : image}"`}} className="gameImage" onMouseEnter={() => setIsHover(true)} onMouseLeave={() => setIsHover(false)}></div>
                <span className="title">{title}</span>
                <span className="category">{category}</span>
            </div>
        </Link>
    )
}

export default Game;