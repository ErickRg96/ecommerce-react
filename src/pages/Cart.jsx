import ProductCart from "../components/ProductCart";
import MessageCard from "../components/MessageCard";

const Cart = ({ cartProducts, setCartProducts }) => {
    return (
        <main className="p-3 md:py-5 lg:px-4 lg:py-10 2xl:max-w-screen-xl my-0 mx-auto">
            <h1 className="text-pink font-medium text-xl md:text-2xl capitalize">
                carrito de compras
            </h1>
            {cartProducts && cartProducts.length ? (
                <div className="mt-7 md:mt-12">
                    {cartProducts.map((product) => (
                        <ProductCart
                            key={product.id}
                            product={product}
                            cartProducts={cartProducts}
                            setCartProducts={setCartProducts}
                        />
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
