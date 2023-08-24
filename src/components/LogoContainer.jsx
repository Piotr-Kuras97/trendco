import logo from '../assets/Standard Logo Files/Original on Transparent.png'
import { Link } from 'react-router-dom';

function LogoContainer() {
    return ( 
        <div className="logocontainer">
            <Link to='/'><img src={logo} alt="" /></Link>
        </div>
    );
}

export default LogoContainer;