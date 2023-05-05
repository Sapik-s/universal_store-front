import BlockProducts from "../../../components/common/BlockProducts/BlockProducts";
import HeaderBlock from "../../blocks/header/HeaderBlock";
import './main.scss';


const MainPages = () => {
    return(
        <div>
            <HeaderBlock />
            <BlockProducts title={"Популярные товары"} category={['запчасти','моторы','шины','электроника','инструменты ','акссесуары']} items={[1,2,3,4,5,6,7,8,8,9,10,2,3,5,9,8,5,9,9,9,9,9,9,9,9]}/>
            <BlockProducts title={"Новые товары"} category={['запчасти','моторы','шины','электроника','инстр222ументы ','акссесуары']} items={[1,2,3,4,5]}/>
        </div>
    );
}

export default MainPages;