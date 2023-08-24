import Menu from "./Menu";
import { useLocation } from "react-router-dom";

function SearchSubCategory() {
    const location = useLocation();
    const params = new URLSearchParams(location.search);
    const value = params.get('value');


    return ( 
        <>
            <Menu />
            <div className="search">
                <h3 className="search__title">Ogłoszenia dla: {value}</h3>
            </div>
        </>
    );
}

export default SearchSubCategory;