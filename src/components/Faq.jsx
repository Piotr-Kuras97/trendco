import React, {useState} from "react";

import { KeyboardArrowDown, KeyboardArrowUp } from "@mui/icons-material";

import Menu from "../layout/Menu";
import Footer from "../layout/Footer";
import { FAQ_QUESTIONS_ANSWERS } from "../utils/faq_question-answers";

import FAQimage from '../assets/images/faq__image.png'

function Faq() {
    const [showAnswer, setShowAnswer] = useState(Array(FAQ_QUESTIONS_ANSWERS.length).fill(false));

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
                {FAQ_QUESTIONS_ANSWERS.map((option, index) => (
                    <>
                    <div className="faq__option" key={option.question} onClick={() => toggleAnswer(index)}>
                        <h4 className="faq__option-title">
                            {option.question} 
                            {showAnswer[index] ? <KeyboardArrowUp className="icon"/> : <KeyboardArrowDown className="icon"/>}
                        </h4>
                        <p className={showAnswer[index] ? 'faq__option-text active' : 'faq__option-text'}>{option.answer}</p>
                    </div>

                    </>
                ))}
            </div>
            <Footer />
        </>
    );
}

export default Faq;