import '../../../assets/container.scss';
import './navigationLink.scss';
import {Link} from "react-router-dom";

const NavigationLink = () => {
    return (
        <div className="container">
            <div className="link">
                <ul>
                    <li><Link to='/'>Главная</Link></li>
                    <li><Link to='/catalog'>Гидроциклы</Link></li>
                    <li><Link>Гидроцикл BRP SeaDoo GTI 155hp SE Long Blue Metallic</Link></li>
                </ul>
            </div>
        </div>
    );
}

export default NavigationLink;