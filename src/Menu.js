import Footer from "./Footer";
import useFetch from "./useFetch";


const Menu = () => {

    const { data: food, waiting, error } = useFetch('http://localhost:8000/menu');

    return (
        <div>
            <div className="container menu">
                <div className="background-image-menu"></div>
                <h2 className="menu-title">Menu for the Day</h2>
                <div className="row">
                    {error && <p>{error}</p>}
                    {waiting && <p>Loading...</p>}
                    {food && food.map((item) => (
                        <div className="col-md-6 col-lg-4 menu-item" key={item.id}>
                            <img src={item.image} alt={item.name} />
                            <h2>{item.name}</h2>
                            <h4>Rs.{item.price}</h4>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default Menu;