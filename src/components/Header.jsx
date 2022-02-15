import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import SearchBar from "./SearchBar";

const Header = () => {
    return (
        <header className="bg-pink w-screen">
            <div className="p-3 lg:px-4 2xl:max-w-screen-xl my-0 mx-auto flex items-center justify-between">
                <Link to="/">
                    <h1 className="text-xl lg:text-3xl font-semibold text-white">
                        Ecommerce
                    </h1>
                </Link>

                <div className="hidden lg:inline w-1/2">
                    <SearchBar />
                </div>

                <div className="flex items-center">
                    <Link to="/products">
                        <span className="text-md lg:text-xl font-light text-white mr-4 xl:mr-8">
                            Productos
                        </span>
                    </Link>
                    <Link to="/cart">
                        <FontAwesomeIcon
                            icon={faBagShopping}
                            className="text-white text-xl lg:text-2xl"
                        />
                    </Link>
                </div>
            </div>
        </header>
    );
};

export default Header;
