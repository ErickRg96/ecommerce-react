import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";

const Home = () => {
    return (
        <>
            <section className="lg:hidden">
                <SearchBar />
            </section>
            <Hero />
        </>
    );
};

export default Home;
