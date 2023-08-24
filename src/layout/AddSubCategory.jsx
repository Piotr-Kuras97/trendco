import Menu from "./Menu";
import AddOfferForm from "../form/AddOfferForm";
import { Button } from "@mui/material";
import { useLocation, Link } from "react-router-dom";

import { useAppContext } from "../utils/context";

function AddSubCategory(props) {
    const location = useLocation();
    const subCategory = location.state?.subCategory;
    const category = location.state?.category;

    const {isLogged} = useAppContext()

    return ( 
        <>
            <Menu />
            <div className="add">
                {isLogged ? 
                    <AddOfferForm subCategory={subCategory} category={category}/>
                : 
                    <p className="add__login-info">
                        Musisz być zalogowany, aby dodać ogłoszenie
                        <br />
                        <Button variant="contained"><Link to='/login'>Zaloguj się</Link></Button>
                    </p>
                }
            </div>
        </>
    );
}

export default AddSubCategory;