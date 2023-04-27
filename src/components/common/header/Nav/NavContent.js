import './nav.scss';
import '../../../../assets/container.scss'

const NavContent = ({name}) => {

    if (name == null) return (<p>Нет данных</p>);

    const Elements = name.map(item => {
        return (
            <li key={item.id}><a href="#">{item.category.name}</a></li>
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