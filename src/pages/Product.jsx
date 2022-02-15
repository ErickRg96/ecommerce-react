import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import ProductDetail from "../components/ProductDetail";

const Product = ({ cartProducts, setCartProducts }) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});

    useEffect(() => {
        const getProduct = async () => {
            const res = await axios.get(
                `http://localhost:5000/ecommerce-api-65178/us-central1/app/api/product/${id}`
            );
            setProduct(res.data);
        };

        getProduct();
    }, []);

    return (
        <main className="p-3 md:py-5 lg:px-4 lg:py-10 2xl:max-w-screen-xl my-0 mx-auto">
            <ProductDetail
                product={product}
                cartProducts={cartProducts}
                setCartProducts={setCartProducts}
            />
        </main>
    );
};

export default Product;
