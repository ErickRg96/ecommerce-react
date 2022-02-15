import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const getProducts = async () => {
            const res = await axios.get(
                "http://localhost:5000/ecommerce-api-65178/us-central1/app/api/products"
            );
            setProducts(res.data);
        };

        getProducts();
    }, []);

    return (
        <main className="p-3 md:py-5 lg:px-4 lg:py-10 2xl:max-w-screen-xl my-0 mx-auto">
            {products && products.length ? (
                <div className="flex flex-col">
                    <span className="capitalize text-right">
                        {products.length} productos
                    </span>
                    <section className="mt-5 grid gap-2 grid-cols-2 md:grid-cols-3 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </section>
                </div>
            ) : (
                <p>No hay productos en existencia</p>
            )}
        </main>
    );
};

export default Products;
