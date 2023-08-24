import Menu from "./Menu";
import Header from "./Header";
import AboutTrendco from "./AboutTrendco";
import OfferTrendco from "./OfferTrendco";
import Interlude from "../components/Interlude";
import InfographicContainer from "../components/InfographicContainer";
import Footer from "./Footer";


function Main() {

    return ( 
        <>
            <Menu />
            <Header />
            <AboutTrendco />
            <OfferTrendco />
            <Interlude />
            <InfographicContainer />
            <Footer />
        </>
     );
}

export default Main;