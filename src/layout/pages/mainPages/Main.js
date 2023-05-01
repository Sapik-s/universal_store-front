import BlockProducts from "../../../components/common/BlockProducts/BlockProducts";
import HeaderBlock from "../../blocks/header/HeaderBlock";
import './main.scss';

const MainPages = () => {
    return(
        <div>
            <HeaderBlock />
            <BlockProducts title={"Популярные товары"} category={['запчасти','моторы','шины','электроника','инструменты ','акссесуары']} items={[1,2,3,4,5]}/>
        </div>
    );
}

export default MainPages;