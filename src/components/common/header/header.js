import './header.scss';
import '../../../assets/container.scss';
import LogoDesktopIcon from "../UI/logoDesctop";
import AuthorizationIcon from "../UI/authorization";
import BasketIcon from "../UI/basket";
import HeartIcon from "../UI/heart";
import LocationIcon from "../UI/location";
import {useState} from "react";
import LogoMobile from "../UI/logoMobile";

const HeaderContent = () => {

    const [activeState] = useState(56);

    let circleVisibility = activeState >= 1 ? '' : 'circleVisibility';
    let orders = activeState;

    orders = activeState >= 99 ? `99+` : activeState;

    return (
        <div className="container">
            <div className="header__wrapper">
                <div className="burger">
                    <div className="burger__menu">
                        <span/>
                    </div>
                    <a href="#" className="header__logoMobile">
                        <LogoMobile/>
                    </a>
                </div>

                <div className="header__link-move">
                    <ul>
                        <a href="#">
                            <li>Магазины</li>
                        </a>
                        <a href="#">
                            <li>Акции</li>
                        </a>
                        <a href="#">
                            <li>Доставка и оплата</li>
                        </a>
                    </ul>
                </div>
                <a href="#" className="header__logoDesktop"><LogoDesktopIcon/></a>
                <div className="header__order-content order-content">
                    <div className="order-content__location-content">
                        <a href="#" className="order-content__address">
                            <LocationIcon/>
                            <span>Москва,  ул. Науки  25</span>
                        </a>
                    </div>
                    <div className="order-content__user-content user-content">
                        <button className="user-content__item"><HeartIcon/></button>
                        <a className="user-content__item"><AuthorizationIcon/></a>
                        <button className="user-content__item">
                            <BasketIcon/>
                            <div className={`user-content__circle ${circleVisibility}`}><span>{orders}</span></div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HeaderContent;