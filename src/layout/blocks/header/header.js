import HeaderContent from"../../../components/common/header/header";
import NavContent from"../../../components/common/nav/nav";

import './header.scss';

const HeaderBlock = () => {
    return(
        <div className="header">
            <HeaderContent/>
            <NavContent/>
        </div>
    );
}

export default HeaderBlock;