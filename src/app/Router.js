import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ItemListContainer from "../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../components/ItemDetailContainer/ItemDetailContainer";
import CartWidget from "../components/CartWidget";

const Router = () => {
    return(
    <>
        <BrowserRouter>
            <Routes >
                <Route element={<Layout />}>
                    <Route path="/" index element={<ItemListContainer />}/>
                    <Route path="/category/:categoryId" element={<ItemListContainer />} />
                    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
                    <Route path="/cart/" element={<CartWidget/>} />
                    <Route path="*" element={<div>Error 404</div> }/> 
                </Route>
            </Routes>
        </BrowserRouter>
    </>
    )
}

export default Router
