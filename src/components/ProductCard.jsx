import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();
    const { id, image, name, price } = product;

    return (
        <article
            className="cursor-pointer"
            onClick={() => navigate(`/product/${id}`)}
        >
            <img src={image} className="w-full mb-2" />
            <span className="capitalize mt-4 text-granite font-normal">
                {name}
            </span>
            <br />
            <span className="text-red">${price}</span>
        </article>
    );
};

export default ProductCard;
