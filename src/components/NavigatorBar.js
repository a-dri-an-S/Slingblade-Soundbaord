import { Link } from "react-router-dom";
import "./styles/navigation-bar-styles.css";


const NavigatorBar = () => {
    return ( 
        <nav className="nav-bar">
            <Link className="nav-bar-link" to={"/"}>Karl</Link>
            <Link className="nav-bar-link" to={"doyle"}>Doyle</Link>
        </nav>
    );
}
 
export default NavigatorBar;