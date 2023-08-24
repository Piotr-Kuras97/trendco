import { Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css';

import { Link } from 'react-router-dom';

import { useAppContext } from '../utils/context';

// stary header

// import image1 from '../assets/GRAFIKI KOLOR/artist-4622221_1920.jpg'
// import image2 from '../assets/GRAFIKI BLACKWHITE/TREND6.jpg'
// import image3 from '../assets/GRAFIKI KOLOR/barber-shop-5212059_1920.jpg'
// import image4 from '../assets/GRAFIKI BLACKWHITE/TREND3.jpg'
// import image5 from '../assets/GRAFIKI KOLOR/painting-1380016_1920.jpg'
// import image6 from '../assets/GRAFIKI BLACKWHITE/trend4.jpg'


function Header() {

    const {isLogged, username} = useAppContext()

    return ( 
        <header className="header">
            <h1 className='header__title'>Pasja. <br /> To więcej niż wszystko.</h1>
            <p className="header__subtitle">Zlecenia na wyciągnięcie ręki: Znajdź lub opublikuj projekty na dedykowanej platformie dla freelancerów.</p>
            <div className="header__image">
            </div>
            {isLogged ? 
                <button className="header__btn logged">Witaj {username}!</button> 
                : <button className="header__btn"><Link to='/register'>Rozpocznij Podróż</Link></button>
            }
            {/* <Splide aria-label="My Favorite Images" options={{
                autoplay: true,
                interval: 5000,
                speed: 1000,
                rewind: true,
                rewindSpeed: 100,
                pauseOnFocus: false,
                pauseOnHover: false,
                arrows: false,
            }}>
                <SplideSlide>
                    <img src={image1} alt="Image 1"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={image2} alt="Image 2"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={image3} alt="Image 2"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={image4} alt="Image 2"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={image5} alt="Image 2"/>
                </SplideSlide>
                <SplideSlide>
                    <img src={image6} alt="Image 2"/>
                </SplideSlide>
            </Splide> */}
        </header>
    );
}

export default Header;