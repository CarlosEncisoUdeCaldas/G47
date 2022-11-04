import { Link } from "react-router-dom";
import NavItems from "./NavItems";

const NavBar = () => {
  //array que hará el recorrido de los nav items
  const navItems = [
    { ruta: "/", icon: "bi bi-house", title: "Home" },
    { ruta: "/contador", icon: "bi bi-plus-slash-minus", title: "Contador" },
    { ruta: "/saludo", icon: "bi bi-hand-thumbs-up", title: "Saludo" },
  ];

  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <div className="container-fluid">
          <ul className="navbar-nav">
            {/* Funcion map que va a renderizar los items de la barra de navegacion */}
            <NavItems navItems={navItems} />
          </ul>
        </div>
        <div className="container-fluid" style={{ justifyContent: "end" }}>
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to={"/register"}>
                <i
                  className="bi bi-box-arrow-right"
                  style={{ margin: "5px" }}
                />
                Register
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to={""}>
                <i className="bi bi-person" style={{ margin: "5px" }} />
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
