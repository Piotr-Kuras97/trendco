import Infographic from '../assets/images/infographic.svg'
import { Button } from '@mui/material';

function InfographicContainer() {
    return ( 
        <div className="infographic">
            <div className="infographic__text-container">
                <h3 className="infographic__title">
                    Odkryj Naszą Paletę Kategorii
                </h3>
                <p className="infographic__text">
                    Przed Tobą rozległa i różnorodna paleta kategorii, otwierająca przed Tobą wspaniałe możliwości eksploracji naszej dynamicznej Platformy. Każda z tych kategorii została starannie stworzona, aby zapewnić Ci nieograniczone pole do odkrywania i spełniania Twoich potrzeb. To wirtualne królestwo wyboru zostało podzielone na liczne, precyzyjne podkategorie, tworząc bogactwo opcji, które umożliwiają Ci dokładne dostosowanie poszukiwań do Twoich indywidualnych preferencji.

                    <br /><br />

                    Zachęcamy Cię do zanurzenia się w tej fascynującej różnorodności, by odnaleźć dokładnie to, czego potrzebujesz.
                </p>
            </div>

            <div className="infographic__image-container">
                <img src={Infographic} alt="infografika" className='infographic__image'/>
            </div>
          
        </div>
    );
}

export default InfographicContainer;