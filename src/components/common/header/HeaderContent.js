import './header.scss';
import '../../../assets/container.scss';
import LogoDesktopIcon from "../UI/LogoDesctopIcon";
import Address from "./Address/Address";
import FavouritesProducts from "./FavouritesProducts/FavouritesProducts";
import AuthorizationUser from "./Authorization/AuthorizationUser";
import BasketProduct from "./Basket/BasketProduct";
import Info from "./Info/Info";
import BurgerMenu from "./BurgerMenu/BurgerMenu";

const HeaderContent = () => {
    return (
        <div className="container">
            <div className="header__wrapper">
                <BurgerMenu/>
                <Info/>
                <a href="#" className="header__logo-desktop"><LogoDesktopIcon/></a>
                <div className="header__order-content order-content">
                    <Address/>
                    <div className="order-content__user-content user-content">
                        <FavouritesProducts/>
                        <AuthorizationUser/>
                        <BasketProduct/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderContent;