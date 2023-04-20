import './nav.scss';
import '../../../assets/container.scss'

const NavContent = () => {


    return(
        <div className={"container"}>
            <nav className={"nav"}>
                <div className="nav__wrapper">
                    <ul>
                        <li><a href="#">Квадроциклы</a></li>
                        <li><a href="#">Катера</a></li>
                        <li><a href="#">Гидроциклы</a></li>
                        <li><a href="#">Лодки</a></li>
                        <li><a href="#">Вездеходы</a></li>
                        <li><a href="#">Снегоходы</a></li>
                        <li><a href="#">Двигатели</a></li>
                        <li><a href="#">Запчасти</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default NavContent;