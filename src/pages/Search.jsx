import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import MessageCard from "../components/MessageCard";
import Spinner from "../components/Spinner";

const Search = () => {
    const { keyword } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const getProducts = async () => {
        const res = await axios.get(
            `https://us-central1-ecommerce-api-65178.cloudfunctions.net/app/api/products/${keyword}`
        );
        setProducts(res.data);

        setTimeout(() => {
            setLoading(false);
        }, 1000);
    };

    useEffect(() => {
        getProducts();
    }, []);

    useEffect(() => {
        getProducts();
    }, [keyword]);

    return (
        <main className="p-3 md:py-5 lg:px-4 lg:py-10 2xl:max-w-screen-xl my-0 mx-auto">
            {loading ? (
                <Spinner />
            ) : products && products.length ? (
                <div className="flex flex-col">
                    {products.length > 1 ? (
                        <p className="text-md lg:text-lg">
                            Encontramos {products.length} productos relacionados
                            con <span className="font-medium">{keyword}.</span>
                        </p>
                    ) : (
                        <p className="text-md lg:text-lg">
                            Encontramos {products.length} producto relacionado
                            con <span className="font-medium">{keyword}.</span>
                        </p>
                    )}

                    <section className="mt-5 grid gap-y-6 gap-x-4 grid-cols-2 md:grid-cols-3 md:gap-y-8 md:gap-x-6 xl:grid-cols-4">
                        {products.map((product) => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </section>
                </div>
            ) : (
                <MessageCard message="No hay productos que coincidan con tu búsqueda" />
            )}
        </main>
    );
};

export default Search;
