import './BasketProduct.scss';
import BasketIcon from "../../UI/BasketIcon";
import {useState} from "react";

const BasketProduct = () => {

    const [activeState] = useState(99);

    let circleVisibility = activeState >= 1 ? '' : 'circleVisibility';
    let orders = activeState;

    orders = activeState >= 99 ? `99+` : activeState;

    return (
        <button className="user-content__item">
            <BasketIcon/>
            <div className={`user-content__circle ${circleVisibility}`}><span>{orders}</span></div>
        </button>
    );
}

export default BasketProduct;