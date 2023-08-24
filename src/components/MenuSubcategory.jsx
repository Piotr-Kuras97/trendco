import React, { useState } from "react";
import { Link } from "react-router-dom";

function MenuSubcategory({text, displaySubcategory, setDisplaySearchOption, value, setDisplayMenu, setDisplayOfferOption}) {
    const [activeIndex, setActiveIndex] = useState(-1);

    const toggleSubcategory = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const handleMouseEnter = (index) => {
        setActiveIndex(index);
    };

    const handleMouseLeave = () => {
        setActiveIndex(-1);
    }; 

    const handleSubCategorySearchClick = () =>{
        setDisplaySearchOption(false)
        setDisplayMenu(false)
    }

    const handleSubCategoryOfferClick = () =>{
        setDisplayOfferOption(false)
        setDisplayMenu(false)
    }

    return ( 
        <ul className={displaySubcategory ? "menusubcategory active" : "menusubcategory"}>
            {text.map((option, index) => (
                <div key={option.text} 
                    className="menusubcategory__container"
                    onMouseEnter={() => handleMouseEnter(index)}
                    onMouseLeave={handleMouseLeave}
                >
                    <li 
                        onClick={() => toggleSubcategory(index)}
                        className="menusubcategory__option"
                    >
                            <div className="menusubcategory__main">{option.text}</div>
                    </li>
                    {activeIndex === index ? 
                        <div className="menusubcategory__second" key={Math.random() * 1000} >
                            {value === "Szukam" ? 
                                option.sub.map(sub => (
                                    <Link to={{pathname: `/search/${sub}`, search: `?value=${sub}`}} onClick={handleSubCategorySearchClick}>{sub}</Link>
                                )) :
                                option.sub.map(sub => (
                                    <Link to={{pathname: `/add/${sub}`}} onClick={handleSubCategoryOfferClick} state={{ subCategory: sub, category: option.text }}>{sub}</Link>
                                ))
                            } 
                        </div>
                        : 
                        null}
                </div>
            ))}
        </ul>
    );
}

export default MenuSubcategory;