import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp, faEnvelope, faPhone, faQuestion } from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faLinkedin, faTwitter, faTiktok } from "@fortawesome/free-brands-svg-icons";

import { Link } from "react-router-dom";

function Footer() {

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return ( 
        <footer className="footer">
            <div className="footer__go-up" onClick={scrollToTop}>
                <FontAwesomeIcon icon={faArrowUp} className="footer__go-up-icon"/>
            </div>

            <div className="footer__options">
                <div className="footer__option" onClick={() => window.location.href = "mailto:trendco.kontakt@gmail.com"}>
                    <p className="footer__option-text"><FontAwesomeIcon icon={faEnvelope}/>Napisz do nas</p>
                    <p className="footer__mail"> trendco.kontakt@gmail.com</p>
                </div>

                <div className="footer__option" onClick={() => window.location.href = "tel:+1234567890"}>
                    <p className="footer__option-text"><FontAwesomeIcon icon={faPhone}/>Zadzwoń</p>
                    <p className="footer__number">123 456 789</p>
                </div>

                <Link className="footer__option" to='/faq'>
                    <p className="footer__option-text"><FontAwesomeIcon icon={faQuestion}/>FAQ</p>
                    <p className="footer__number">Zobacz często zadawane pytania</p>
                </Link>

            </div>

            <div className="footer__seperator"></div>

            <div className="footer__social-media">
                <a href="#" className="footer__social-media-icon"><FontAwesomeIcon icon={faFacebook} /></a>
                <a href="#" className="footer__social-media-icon"><FontAwesomeIcon icon={faInstagram} /></a>
                <a href="#" className="footer__social-media-icon"><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href="#" className="footer__social-media-icon"><FontAwesomeIcon icon={faTwitter} /></a>
                <a href="#" className="footer__social-media-icon"><FontAwesomeIcon icon={faTiktok} /></a>
            </div>

            <div className="footer__seperator"></div>

            <div className="footer__terms">
                <Link className="footer__terms-text">Polityka prywatności</Link>
                <Link className="footer__terms-text">Regulamin</Link>
                <Link className="footer__terms-text">Dla Inwestorów</Link>
                <Link className="footer__terms-text">Praca</Link>
            </div>

            <div className="footer__credits">
                <p className="footer__credits-text">Wykonane przez: <a href="https://github.com/Piotr-Kuras97">Piotr Kuraś</a></p>
                <p className="footer__credits-text">Copyright © 2023 TrendCo</p>
            </div>

        </footer>
    );
}

export default Footer;