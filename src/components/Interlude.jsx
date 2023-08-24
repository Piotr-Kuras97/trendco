import { Link } from "react-router-dom";
import { useAppContext } from '../utils/context';

function Interlude() {
    const { isLogged } = useAppContext()

    return ( 
        <div className="interlude">
            {isLogged ? 
                <>
                    <p className="interlude__text interlude__text--logged">Znajdź to czego potrzebujesz!</p>
                    <button className="interlude__btn"><Link to='/search'>Przeglądaj ogłoszenia</Link></button>

                    <p className="interlude__text interlude__text--logged">Pokaż światu swoje umiejętności</p>
                    <button className="interlude__btn"><Link to='/add'>Dodaj ogłoszenie</Link></button>
                </>
            :
                <>
                    <p className="interlude__text">Nie zwlekaj ani chwili!</p>
                    <button className="interlude__btn"><Link to='/register'>Dołącz do TrendCo</Link></button>
                </>
            }
        </div>
     );
}

export default Interlude;