import { useParams } from "react-router-dom";

const Search = () => {
    const { keyword } = useParams();

    return (
        <div>
            <p>Se econtraron resultados para {keyword}</p>
        </div>
    );
};

export default Search;
