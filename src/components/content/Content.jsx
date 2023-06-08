import Game from "../game/Game";
import "./content.scss";
import data from "../../data";

const Content = () => {
    return(
        <div className="content">
            {
                data.map((item)=>{
                    return <Game gif={item.gif} image={item.image} title={item.title} category={item.category} />
                })
            }
        </div>
    )
}

export default Content;