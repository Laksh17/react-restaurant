import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="navi">
            {/* Avoiding classes with bootstrap nomenclature */}
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/menu">Menu</Link>
                <Link to="/contact">Contact</Link>
            </div>
        </nav>
    );
}

export default Navbar;
