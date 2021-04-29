import { Link, NavLink } from 'react-router-dom';

const Navbar = () => {

    return(
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            
        <Link 
            className="navbar-brand" 
            to="/"
            style = {{ marginLeft: "10px" }}
        >
            To do List
        </Link>

        <div className="navbar-collapse">
            <div className="navbar-nav">

                
               
            </div>
        </div>
    </nav>
    )
}

export default Navbar;