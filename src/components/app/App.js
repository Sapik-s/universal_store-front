import MainPages from '../../layout/pages/mainPages/Main';
import './App.scss';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import ProductCard from "../../layout/pages/productСardPages/ProductCard";

function App() {

    return (
        <BrowserRouter>
            <>
                <Routes>
                    <Route path='/' element={<MainPages/>}/>
                    <Route path='card/:slug' element={<ProductCard/>}/>
                </Routes>
            </>
        </BrowserRouter>
    );
}

export default App;