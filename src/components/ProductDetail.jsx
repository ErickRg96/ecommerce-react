const ProductDetail = ({ product }) => {
    const { image, name, price, id } = product;

    return (
        <article className="flex flex-col md:flex-row">
            <img src={image} className="w-full md:w-3/5 mb-2" />
            <section className="md:w-w-2/5 md:ml-8">
                <span className="capitalize mt-4 text-black text-2xl ">
                    {name}
                </span>
                <br />
                <span className="capitalize text-sm text-battleship-grey">
                    codigo de producto: {id}
                </span>
                <br />
                <span className="text-red text-3xl mt-6 block">${price}</span>
                <button className="mt-10 px-10 py-3 uppercase font-medium rounded-lg border-2 border-violet-red text-violet-red hover:bg-violet-red hover:text-white ease-in duration-300">
                    agregar al carrito
                </button>
            </section>
        </article>
    );
};

export default ProductDetail;
