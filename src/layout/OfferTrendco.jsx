import React, {useState} from "react";
import { Button, ButtonGroup } from "@mui/material";

import icon_one from '../assets/offerIcon/together.png'
import icon_two from '../assets/offerIcon/free.png'
import icon_three from '../assets/offerIcon/connect.png'

function OfferTrendco() {
    const [showOffer, setShowOffer] = useState(true)

    return ( 
        <div className="offer">
            <h4 className="offer__title">OFERTA</h4>
            <p className="offer__text">Znajdź to, czego szukasz lub stwórz niepowtarzalną okazję – Nasza oferta łączy szukających i oferujących w jednym miejscu!</p>
            <ButtonGroup className="offer__btn-group" size="large">
                <Button 
                    variant={showOffer ? 'contained' : 'outlined'}
                    onClick={() => setShowOffer(true)}
                    sx={{ width: '50%' }}
                >
                        Szukający
                </Button>
                <Button
                    variant={!showOffer ? 'contained' : 'outlined'}
                    onClick={() => setShowOffer(false)}
                    sx={{ width: '50%' }}
                >
                    Oferujący
                </Button>
            </ButtonGroup>

            {showOffer ? 
                <div className="offer__option-container">
                    <div className="offer__option">
                        <img src={icon_one} alt="" />
                        <h5 className="offer__option-title">SZUKAJ</h5>
                        <p className="offer__option-text">Znajdź kogo potrzebujesz w jednym miejscu i o każdej porze</p>
                    </div>
                    <div className="offer__option">
                        <img src={icon_two} alt="" />
                        <h5 className="offer__option-title">NIE PŁAĆ</h5>
                        <p className="offer__option-text">Nie płacisz za korzystanie z platformy. Korzystasz za darmo do woli</p>
                    </div>
                    <div className="offer__option">
                        <img src={icon_three} alt="" />
                        <h5 className="offer__option-title">POZNAWAJ</h5>
                        <p className="offer__option-text">Łącz się z ludźmi których szukasz, dyskutaj bez granic o swojej pasji</p>
                    </div>
                </div> 
            : null}

            {!showOffer ? 
                <div className="offer__option-container">
                    <div className="offer__option">
                        <img src={icon_one} alt="" />
                        <h5 className="offer__option-title">ROZWIJAJ SIĘ</h5>
                        <p className="offer__option-text">Skup się na jakości swojej usługi - my pomożemy Ci znaleźć docelowych klientów</p>
                    </div>
                    <div className="offer__option">
                        <img src={icon_two} alt="" />
                        <h5 className="offer__option-title">BEZPŁATNIE</h5>
                        <p className="offer__option-text">Docieraj do swoich potencjalnych klientów całkowicie bezpłatnie</p>
                    </div>
                    <div className="offer__option">
                        <img src={icon_three} alt="" />
                        <h5 className="offer__option-title">ZAINSPIRUJ</h5>
                        <p className="offer__option-text">Rozmawiaj z innymi użytkownikami. Daj im poznać siebie i swój talent</p>
                    </div>
                </div> 
            : null}
        </div>
    );
}

export default OfferTrendco;