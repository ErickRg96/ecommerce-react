import { useState, useEffect } from "react";

const ProductDetail = ({ product, cartProducts, setCartProducts }) => {
    const { image, name, price, id } = product;
    const [onCart, setOnCart] = useState(false);

    useEffect(() => {
        if (cartProducts.find((cartProduct) => cartProduct.id === id)) {
            setOnCart(true);
        } else {
            setOnCart(false);
        }
    }, [id]);

    const handleSaveProduct = () => {
        setOnCart(true);
        setCartProducts([...cartProducts, product]);
    };

    const handleDeleteProduct = () => {
        const cartProductsUpdated = cartProducts.filter(
            (cartProduct) => cartProduct.id !== id
        );

        setOnCart(false);
        setCartProducts(cartProductsUpdated);
    };

    return (
        <article className="flex flex-col md:flex-row">
            <img src={image} className="max-h-125" />
            <section className="md:w-2/5 md:ml-8">
                <span className="capitalize mt-4 text-black text-2xl ">
                    {name}
                </span>
                <br />
                <span className="capitalize text-sm text-battleship-grey">
                    codigo de producto: {id}
                </span>
                <br />
                <span className="text-red text-3xl mt-6 block">${price}</span>

                {onCart ? (
                    <button
                        className="mt-10 px-10 py-3 uppercase font-medium rounded-lg border-2 border-granite text-granite hover:bg-granite hover:text-white ease-in duration-300 w-full md:w-fit"
                        onClick={handleDeleteProduct}
                    >
                        Eliminar de carrito
                    </button>
                ) : (
                    <button
                        className="mt-10 px-10 py-3 uppercase font-medium rounded-lg border-2 border-violet-red text-violet-red hover:bg-violet-red hover:text-white ease-in duration-300 w-full md:w-fit"
                        onClick={handleSaveProduct}
                    >
                        agregar al carrito
                    </button>
                )}
            </section>
        </article>
    );
};

export default ProductDetail;
