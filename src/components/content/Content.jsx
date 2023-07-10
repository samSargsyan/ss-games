import Game from "../game/Game";
import "./content.scss";
import data from "../../data";

const Content = ({search}) => {

    const filtered = data.filter((item)=>{
            return item.title.toLowerCase().includes(search.toLowerCase());
        })
    
    return(
        <div className="content">
            {
                filtered.length === 0 ?
                    <div>
                        <span>No Games Found Under the Name of "{search}", If you have any Games you would like to see on the website, 
                        Leave a Suggestion to the following email <a href="mailto:samuelsargsyan2010@gmail.com">Send Email</a>.</span>
                    </div>
                :
                    filtered
                    .map((item,i)=>{
                        return <Game key={`${item.title}_${i}`} gif={item.gif} image={item.image} title={item.title} category={item.category} />
                    })
            }
        </div>

    )
}

export default Content;