import "./header.scss";
import logoe from "../../assets/images/logoe.png";
import { Link } from "react-router-dom";

const Header = () => {
    return(
        <div className='header'>
            <Link to={`/`}>
                <img src={logoe} className='logo' alt="logo"/>
            </Link>
        </div>
    )
}

export default Header;