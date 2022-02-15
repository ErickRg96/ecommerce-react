import { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
    const navigate = useNavigate();
    const [searchField, setSearchField] = useState("");

    const handleSearch = (e) => {
        e.preventDefault();

        if (searchField !== "") {
            console.log(searchField);
            navigate(`/search/${searchField}`);
        }
    };

    return (
        <form className="bg-pink p-2" onSubmit={handleSearch}>
            <input
                type="search"
                placeholder="buscar ..."
                className="capitalize w-full rounded py-1.5 px-2"
                value={searchField}
                onChange={(e) => setSearchField(e.target.value)}
            />
        </form>
    );
};

export default SearchBar;
