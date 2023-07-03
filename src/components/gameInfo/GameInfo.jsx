import "./gameInfo.scss";
import { useParams } from 'react-router-dom';
import data from "../../data";
import otherData from "../../otherData";

const GameInfo = ({setIsShowSearch}) => {
    const params = useParams();
    const gameData = params.other === 'other' ? otherData : data;
    setIsShowSearch(false);
    return(
        <div className="gameInfo">
            {gameData.filter((game)=>{
                return game.title == params.game;
            })
            .map((game)=>{
               return (
                <>
                <div className='gamePart'>
                    <div style={{backgroundImage: `url("${game.image}"`}} className="gameImage"></div>
                    <div className='gameDescription'>
                        <span className="title">{game.title}</span>
                        <span className='gameDescription'>{game.desc}</span>
                        <span className="category">{game.category}</span>
                    </div>
                </div>
                <div className='embed'>
                    {game.link}
                </div>
                </>
               ) 
            })}
        </div> 
    )
}

export default GameInfo;