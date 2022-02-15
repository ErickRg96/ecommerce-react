import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const ProductCart = ({ product, cartProducts, setCartProducts }) => {
    const navigate = useNavigate();
    const { name, price, image, id } = product;

    const handleDeleteProduct = () => {
        const cartProductsUpdated = cartProducts.filter(
            (cartProduct) => cartProduct.id !== id
        );

        setCartProducts(cartProductsUpdated);
    };

    return (
        <article className="flex mb-12 md:mb-14">
            <img
                src={image}
                className="h-fit w-1/3 md:w-1/4 cursor-pointer"
                onClick={() => navigate(`/product/${id}`)}
            />
            <section className="w-2/3 md:w-3/4 ml-5">
                <span
                    className="capitalize mt-4 text-black text-lg md:text-2xl cursor-pointer"
                    onClick={() => navigate(`/product/${id}`)}
                >
                    {name}
                </span>
                <br />
                <span className="text-red text-xl md:text-xl mt-3 block">
                    ${price}
                </span>
                <br />
                <button
                    className="mt-2 p-3 uppercase font-medium rounded-lg border-2 border-granite text-granite hover:bg-granite hover:text-white ease-in duration-300"
                    onClick={handleDeleteProduct}
                >
                    <FontAwesomeIcon icon={faTrash} className="mr-2" />
                    Eliminar
                </button>
            </section>
        </article>
    );
};

export default ProductCart;
