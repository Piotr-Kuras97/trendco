import React, {useState} from "react";
import parse from 'html-react-parser';

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

import Menu from "../layout/Menu";
import Footer from "../layout/Footer";
import { FAQ_QUESTIONS_ANSWERS } from "../utils/faq_question-answers";

import FAQimage from '../assets/images/faq__image.png'

function Faq() {
    const [showAnswer, setShowAnswer] = useState(Array(FAQ_QUESTIONS_ANSWERS.length).fill(false));

    const { pathname } = useLocation();

    useEffect(() => {
      window.scrollTo(0, 0);
    }, [pathname]);

    const toggleAnswer = (index) => {
        const newShowAnswers = [...showAnswer];
        newShowAnswers[index] = !newShowAnswers[index];
        setShowAnswer(newShowAnswers);
    };

    return ( 
        <>
            <Menu />
            <div className="faq">
                <div className="faq__image">
                    <img src={FAQimage} alt="FAQ" />
                </div>
                    <div className="faq__container">
                    {FAQ_QUESTIONS_ANSWERS.map((option, index) => (
                        <>
                        <div className="faq__option" key={option.question} onClick={() => toggleAnswer(index)}>
                            <h4 className="faq__option-title" key={option.question}>
                                {option.question} 
                                {showAnswer[index] ? <KeyboardArrowUp className="icon"/> : <KeyboardArrowDown className="icon"/>}
                            </h4>
                            <div key={option.answer} className={showAnswer[index]  ? 'faq__option-text active' : 'faq__option-text'}>{parse(option.answer)}</div>
                        </div>

                        </>
                    ))}
                </div>
            </div>
            <Footer />
        </>
    );
}

export default Faq;