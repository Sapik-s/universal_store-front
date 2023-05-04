import BlockProducts from "../../../components/common/BlockProducts/BlockProducts";
import HeaderBlock from "../../blocks/header/HeaderBlock";
import './main.scss';


const MainPages = () => {
    return(
        <div>
            <HeaderBlock />
            <BlockProducts/>
        </div>
    );
}

export default MainPages;