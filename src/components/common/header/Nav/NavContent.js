import './nav.scss';
import '../../../../assets/container.scss'
import {Link} from "react-router-dom";

const NavContent = ({name}) => {

    if (name == null) return (<p>Нет данных</p>);

    const Elements = name.map(item => {
        console.log(item.category);
        return (
            <li key={item.id}><Link to={`/card/${item.category.slug}`}>{item.category.name}</Link></li>
        );
    });
    return (
        <nav className="nav">
            <div className="container">
                <div className="nav__wrapper">
                    <ul>
                        {Elements}
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavContent;