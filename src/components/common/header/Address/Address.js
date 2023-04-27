import './Address.scss';
import LocationIcon from "../../UI/LocationIcon";

const Address = () => {
    return (
        <div className="order-content__location-content">
            <a href="#" className="order-content__address">
                <LocationIcon/>
                <span>Москва,  ул. Науки  25</span>
            </a>
        </div>
    );
}

export default Address;