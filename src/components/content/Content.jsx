import Game from "../game/Game";
import "./content.scss";
import data from "../../data";

const Content = ({search}) => {
console.log(search);
    return(
        <div className="content">
            {
                data
                .filter((item)=>{
                    return item.title.toLowerCase().includes(search.toLowerCase());
                })
                .map((item)=>{
                    return <Game gif={item.gif} image={item.image} title={item.title} category={item.category} />
                })
            }
        </div>
    )
}

export default Content;