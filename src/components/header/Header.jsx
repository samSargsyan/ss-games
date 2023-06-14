import "./header.scss";
import logo from "../../assets/images/logoe.png";
import searchIcon from "../../assets/images/search-icon.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = ({setSearch}) => {

    const [waitSend,setWaitSend] = useState('');

    useEffect(()=>{
        let t = setTimeout(()=>{
            setSearch(waitSend);
        },1000)
        return(()=>{
            clearTimeout(t);
        })
    },[waitSend])

    return(
        <div className='header'>
            <Link to={`/ss-games`}>
                <img src={logo} className='logo' alt="logo"/>
            </Link>
            <div className="search">
                <img src={searchIcon} alt="search"/>
                <input type="text" onChange={(e)=>setWaitSend(e.target.value)}/>
            </div>
            <div>
                <span>Menu 1</span>
                <span>Menu 2</span>
                <span>Menu 3</span>
            </div>
        </div>
    )
}

export default Header;