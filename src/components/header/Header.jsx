import "./header.scss";
import logo from "../../assets/images/logoe.png";
import searchIcon from "../../assets/images/search-icon.png";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MobileMenu from "../mobileMenu/MobileMenu";

const Header = ({setSearch,isShowSearch,setIsShowSearch,isChecked, setIsChecked}) => {
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
            <Link to={`/ss-games`} onClick={()=>{setIsShowSearch(true); setWaitSend("");setSearch("");setIsChecked(false);}}>
                <img src={logo} className='logo' alt="logo"/>
            </Link>
            {isShowSearch ? <div className="search">
                <img src={searchIcon} alt="search"/>
                <input value={waitSend} placeholder="Search..." type="text" onChange={(e)=>setWaitSend(e.target.value)} />
            </div> : ''}
            {window.innerWidth<=576 ?
                <MobileMenu setIsShowSearch={setIsShowSearch} isChecked={isChecked} setIsChecked={setIsChecked} setWaitSend={setWaitSend} setSearch={setSearch} />
                :
                <div className='menus'>
                    <Link to={`/ss-games`} onClick={()=>{setIsShowSearch(true);setWaitSend("")}} >
                        <span>Home</span>
                    </Link>
                    <Link to={`/about`} onClick={()=>{setIsShowSearch(false);setWaitSend("")}} >
                        <span>About</span>
                    </Link>
                    <Link to={`/other`} onClick={()=>{setIsShowSearch(true);setWaitSend("")}} >
                        <span>Other Games</span>
                    </Link>
                </div>
            }
        </div>
    )
}

export default Header;