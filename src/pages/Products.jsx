import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import MessageCard from "../components/MessageCard";
import Spinner from "../components/Spinner";

const Products = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(
                "http://localhost:5000/ecommerce-api-65178/us-central1/app/api/products"
            );
            setProducts(res.data);

            setTimeout(() => {
                setLoading(!loading);
            }, 1000);
        };

        getProducts();
    }, []);

    return (
        <main className="p-3 md:py-5 lg:px-4 lg:py-10 2xl:max-w-screen-xl my-0 mx-auto">
            {loading ? (
                <Spinner />
            ) : products && products.length ? (
                <div className="flex flex-col">
                    <span className="capitalize text-right text-lg">
                        {products.length} productos
                    </span>
                    <section className="mt-5 grid gap-y-6 gap-x-4 grid-cols-2 md:grid-cols-3 md:gap-y-8 md:gap-x-6 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </section>
                </div>
            ) : (
                <MessageCard message="No hay productos en existencia" />
            )}
        </main>
    );
};

export default Products;
