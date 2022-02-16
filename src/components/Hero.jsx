import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <section className="flex flex-col items-center">
            <Link
                to="/products"
                className="mt-5 relative inline-block text-right cursor-pointer"
            >
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ecommerce-api-65178.appspot.com/o/landing-1.jpg?alt=media&token=4f957cec-cee5-4c25-9c7f-63cf3585e035"
                    className="max-h-96 xl:max-h-150 "
                />
                <span className="absolute bottom-10 right-10 text-white font-semibold md:text-2xl bg-gradient-to-l from-violet-red to-kobi p-1">
                    Visíta nuestra tienda
                </span>
            </Link>

            <Link
                to="/products"
                className="mt-5 relative inline-block text-right  cursor-pointer"
            >
                <img
                    src="https://firebasestorage.googleapis.com/v0/b/ecommerce-api-65178.appspot.com/o/landing-2.jpg?alt=media&token=024fb389-8add-4909-8eb5-e767d25fff58"
                    className="max-h-96 xl:max-h-150 "
                />
                <span className="absolute top-10 left-10 text-white font-semibold md:text-2xl bg-gradient-to-l from-gainsboro to-jet p-1">
                    Descubre lo que tenemos para tí
                </span>
            </Link>
        </section>
    );
};

export default Hero;
