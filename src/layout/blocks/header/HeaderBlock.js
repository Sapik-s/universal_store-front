import './header.scss';
import HeaderContent from "../../../components/common/header/HeaderContent";
import NavContent from "../../../components/common/header/Nav/NavContent";
import {useEffect, useState} from "react";
import axios from "axios";

const HeaderBlock = () => {

    const [appState, setAppState] = useState([]);

    useEffect(() => {
        axios.get(`http://77.91.78.85/api/v1/categories/sctructures/`).then((resp) => {
            const response = resp.data;
            setAppState(response.result);
        })
    }, [setAppState]);

    return(
        <div className="header">
            <HeaderContent/>
            <NavContent
                name={appState}
            />
        </div>
    );
}

export default HeaderBlock;