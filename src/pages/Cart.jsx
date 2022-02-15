import MessageCard from "../components/MessageCard";

const Cart = ({ cartProducts, setCartProducts }) => {
    return (
        <main className="p-3 md:py-5 lg:px-4 lg:py-10 2xl:max-w-screen-xl my-0 mx-auto">
            {cartProducts && cartProducts.length ? (
                <div>
                    {cartProducts.map((product) => (
                        <p>{product.name}</p>
                    ))}
                </div>
            ) : (
                <div className="mt-8">
                    <MessageCard message="No hay productos en tu carrito" />
                </div>
            )}
        </main>
    );
};

export default Cart;
