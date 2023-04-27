import './BurgerMenu.scss';
import LogoMobile from "../../UI/LogoMobileIcon";
import {useState} from "react";

const BurgerMenu = () => {

    const [openState, setOpenState] = useState(false);
    const [catalogState, setCatalogState] = useState(false);

    function toggleMenu() {
        setOpenState(openState => !openState);
    }

    function toggleCatalog() {
        setCatalogState(catalogState => !catalogState)
    }

    let animatedBurger = openState ? 'burger__animated' : '';
    let open = openState ? 'burger__open' : '';
    let catalogActive = catalogState ? 'catalog__open' : '';
    let arrowRightActive = catalogState ? 'catalog__rotate-arrow-left' : '';
    let arrowLeftActive = catalogState ? 'catalog__rotate-arrow-right' : '';

    return (
        <div className="burger">
            <div className={`burger__menu ${animatedBurger}`} onClick={toggleMenu}>
                <span/>
            </div>
            <a href="#" className="header__logo-mobile">
                <LogoMobile/>
            </a>
            <div className={`burger__drop-menu ${open}`}>
                <div className="container">
                    <ul>
                        <li className="burger__list-item"><a href="#">Магазины</a></li>
                        <li className="burger__list-item"><a href="#">Акции</a></li>
                        <li className="burger__list-item"><a href="#">Доставка и оплата</a></li>
                        <li className="burger__list-item"><a href="#">
                            Каталог
                            <div className="burger__arrow" onClick={toggleCatalog}>
                                <span className={`burger__arrow-left ${arrowRightActive}`}/>
                                <span className={`burger__arrow-right ${arrowLeftActive}`}/>
                            </div>
                            <ul className={`catalog ${catalogActive}`}>
                                <li className="catalog__item"><a href="#">Квадроциклы</a></li>
                                <li className="catalog__item"><a href="#">Катера</a></li>
                                <li className="catalog__item"><a href="#">Гидроциклы</a></li>
                                <li className="catalog__item"><a href="#">Лодки</a></li>
                                <li className="catalog__item"><a href="#">Вездеходы</a></li>
                                <li className="catalog__item"><a href="#">Снегоходы</a></li>
                                <li className="catalog__item"><a href="#">Двигатели</a></li>
                                <li className="catalog__item"><a href="#">Запчасти</a></li>
                            </ul>
                        </a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default BurgerMenu;