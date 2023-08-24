import React, {useState, useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark, faUser, faPlus } from '@fortawesome/free-solid-svg-icons';
import { KeyboardArrowDown, KeyboardArrowUp, Login, Logout } from "@mui/icons-material";
import mainCategories from '../categories/mainCategories';

import { Link } from 'react-router-dom';

import MenuSubcategory from '../components/MenuSubcategory';
import logo2 from '../assets/Standard Logo Files/Original on Transparent.png'

import { useAppContext } from '../utils/context';


function Menu() {
    const [displayMenu, setDisplayMenu] = useState(false)
    const [displaySearchOption, setDisplaySearchOption] = useState(false)
    const [displayOfferOption, setDisplayOfferOption] = useState(false)

    const [scrollDirection, setScrollDirection] = useState('up');
    const [prevScrollY, setPrevScrollY] = useState(0);

    const [isScrolled, setIsScrolled] = useState(false);

    const values = ["Szukam", "Oferuję"]
  
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
  
      if (currentScrollY > prevScrollY) {
        setScrollDirection('down');
      } else if (currentScrollY < prevScrollY) {
        setScrollDirection('up');
      }
  
      setPrevScrollY(currentScrollY);
    };
  
    useEffect(() => {
      window.addEventListener('scroll', handleScroll);
  
      return () => {
        window.removeEventListener('scroll', handleScroll);
      };
    }, [prevScrollY]);

    const handleScrollDown = () => {
        if (window.scrollY >= 200 && !isScrolled) {
          setIsScrolled(true);
        } else if (window.scrollY < 200 && isScrolled) {
          setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScrollDown);
        return () => {
          window.removeEventListener('scroll', handleScrollDown);
        };
    }, [isScrolled]);


    const displaySearch = () => {
        setDisplaySearchOption(!displaySearchOption)
        setDisplayOfferOption(false)
    }

    const displayOffer = () => {
        setDisplayOfferOption(!displayOfferOption)
        setDisplaySearchOption(false)
    }

    const {isLogged, setIsLogged} = useAppContext()

    return ( 
        <nav className={`navbar ${displayMenu ? 'navbar--active' : ''} ${scrollDirection} ${isScrolled}`}>
            <div className="navbar__mobile-icons" onClick={() => setDisplayMenu(!displayMenu)}>
                <FontAwesomeIcon icon={faBars} className={displayMenu ? 'no-active' : ''}/>
                <FontAwesomeIcon icon={faXmark} className={displayMenu ? '' : 'no-active'}/>
            </div>

            <div className="navbar__logo-container">
                <Link to='/'><img src={logo2} alt="logo" className="navbar__logo" /></Link>
            </div>

            <div className="navbar__options-container">
                <ul className="navbar__options-main">
                    <li className="navbar__option">
                        <p>TrendCo Business</p>
                    </li>
                    <li className="navbar__option">
                        <p onClick={displaySearch}>
                            {values[0]} <span> </span> 
                            {displaySearchOption ? <KeyboardArrowUp className='icon'/> : <KeyboardArrowDown className='icon'/>}
                        </p>
                        <MenuSubcategory text={mainCategories} displaySubcategory={displaySearchOption} setDisplaySearchOption={setDisplaySearchOption} value={values[0]} setDisplayMenu={setDisplayMenu}/>
                    </li>
                    <li className="navbar__option">
                        <p onClick={displayOffer}>
                            {values[1]} <span> </span>
                            {displayOfferOption ? <KeyboardArrowUp className='icon'/> : <KeyboardArrowDown className='icon'/>}
                        </p>
                        <MenuSubcategory text={mainCategories} displaySubcategory={displayOfferOption} setDisplayOfferOption={setDisplayOfferOption} value={values[1]} setDisplayMenu={setDisplayMenu}/>
                    </li>
                    <li className="navbar__option">
                        <p>Forum</p>
                    </li>
                </ul>

                {isLogged ? 
                     <div className="navbar__options-other">
                        <Link to="/account" className='navbar__account'><FontAwesomeIcon icon={faUser} /> Moje konto</Link>
                        <Link to="/add" className='navbar__add'><FontAwesomeIcon icon={faPlus} /> Dodaj ogłoszenie</Link>
                        <Link to="/" onClick={() => setIsLogged(false)} className='navbar__logout'><Logout fontSize='medium' className='icon'/> Wyloguj</Link>
                    </div>
                :
                    <div className="navbar__options-other">
                        <Link to="/login" className='navbar__login'><Login className='icon'/> Zaloguj</Link>
                        <Link to="/register" className='navbar__register'>Zarejestruj się</Link>
                    </div>
                }
            </div>

        </nav>
     );
}

export default Menu;