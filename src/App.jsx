import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import Layout from "./layout/Layout";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const App = () => {
    const [cartProducts, setCartProducts] = useState([]);

    useEffect(() => {
        const cartProductLS =
            JSON.parse(localStorage.getItem("cartProducts")) ?? [];
        setCartProducts(cartProductLS);
    }, []);

    useEffect(() => {
        localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }, [cartProducts]);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path="products" element={<Products />} />
                    <Route
                        path="product/:id"
                        element={
                            <Product
                                cartProducts={cartProducts}
                                setCartProducts={setCartProducts}
                            />
                        }
                    />
                    <Route
                        path="cart"
                        element={
                            <Cart
                                cartProducts={cartProducts}
                                setCartProducts={setCartProducts}
                            />
                        }
                    />
                    <Route element={<NotFound />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};

export default App;
