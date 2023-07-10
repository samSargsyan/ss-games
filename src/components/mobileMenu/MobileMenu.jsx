import { Link } from 'react-router-dom';
import './mobileMenu.scss';

const MobileMenu = ({setIsShowSearch,isChecked,setIsChecked,setWaitSend,setSearch}) => {

    const close =()=>{
        setIsChecked(false);
    }

    return(
        <section className="top-nav">
            <input id="menu-toggle" type="checkbox" checked={isChecked} onChange={()=>{}} />
            <label className='menu-button-container' htmlFor="menu-toggle">
                <div className='menu-button' onClick={()=>setIsChecked(prev=>!prev)}></div>
            </label>
            <ul className="menu">
                <li>
                    <Link to={`/ss-games`} onClick={()=>{setIsShowSearch(true);close();setWaitSend("");setSearch("")}} >
                        <span>Home</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/about`} onClick={()=>{setIsShowSearch(false);close();setWaitSend("");setSearch("")}} >
                        <span>About</span>
                    </Link>
                </li>
                <li>
                    <Link to={`/other`} onClick={()=>{setIsShowSearch(true);close();setWaitSend("");setSearch("")}} >
                        <span>Other Games</span>
                    </Link>
                </li>  
            </ul>
        </section>
    )
}
export default MobileMenu;