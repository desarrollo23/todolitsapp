import { Link, NavLink, Redirect, Router } from 'react-router-dom';

const Navbar = () => {

    return(

        
  <nav className="navbar navbar-expand-lg navbar-light" style ={{ backgroundColor: '#17252A'}}>
    <div className="container-fluid">
      <a className="font-custom-bold" href="#">Merquelo</a>
     
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          {/* <li className="nav-item">


            <Link className="nav-link active" to="/dashboard">Carritos</Link>

          </li> */}
          
        </ul>
        
        <ul className="navbar-nav" style = {{ marginRight: "5%"}}>
          <li className="nav-item dropdown ">
              <a 
                  className="nav-link dropdown-toggle font-custom-bold" 
                  href="#" id="navbarDropdown" 
                  role="button" 
                  data-bs-toggle="dropdown" 
                  aria-expanded="false">
                  Opciones
              </a>
              <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="#">Ver perfil</a></li>
                  <li>

                    <Link 
                      to="/login" 
                      className="dropdown-item" 
                      onClick = {() => sessionStorage.clear()}
                    >

                      <img 
                        src={`${process.env.PUBLIC_URL}/logout.png`} 
                        alt=""
                        style={{ width: '15%', marginLeft:'3px'}}/>
                      <span>Cerrar Sesión</span>
                      
                    </Link>
                  </li>
              </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    )
}

export default Navbar;